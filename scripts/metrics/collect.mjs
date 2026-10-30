#!/usr/bin/env node
// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Forge metrics collector.
 *
 * Computes four design-system metrics and writes them to the Notion "Metrics"
 * database. Zero runtime dependencies — Node 24's fetch and fs are enough.
 *
 *   node scripts/metrics/collect.mjs            # collect + write to Notion
 *   node scripts/metrics/collect.mjs --dry-run  # collect, print, don't write
 *
 * Env:
 *   NOTION_TOKEN       internal integration secret ("Forge metrics")
 *   METRICS_GH_TOKEN   PAT with read access to the product repos
 */

import { execSync } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, extname } from "node:path";

const DRY = process.argv.includes("--dry-run");
const cfg = JSON.parse(readFileSync(new URL("./config.json", import.meta.url), "utf8"));
const NOTION_TOKEN = process.env.NOTION_TOKEN;
const GH_TOKEN = process.env.METRICS_GH_TOKEN;
if (!DRY && !NOTION_TOKEN) die("NOTION_TOKEN is not set");
if (!GH_TOKEN) die("METRICS_GH_TOKEN is not set");

const today = new Date().toISOString().slice(0, 10);
const work = mkdtempSync(join(tmpdir(), "forge-metrics-"));

// ---------------------------------------------------------------- helpers

function die(msg) { console.error(`✖ ${msg}`); process.exit(1); }
function sh(cmd, opts = {}) { return execSync(cmd, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], ...opts }).trim(); }

function clone(repo) {
  const dir = join(work, repo.replace("/", "__"));
  if (existsSync(dir)) return dir;
  sh(`git clone --depth 1 --quiet https://x-access-token:${GH_TOKEN}@github.com/${repo}.git ${dir}`);
  return dir;
}

const SKIP_DIRS = new Set(["node_modules", "dist", "build", ".git", "coverage", "storybook-static"]);
const CODE_EXT = new Set([".js", ".mjs", ".ts", ".tsx", ".jsx", ".html", ".css", ".scss"]);

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) yield* walk(p);
    else if (CODE_EXT.has(extname(name))) yield p;
  }
}

function countMatches(dir, regex) {
  let n = 0;
  for (const f of walk(dir)) {
    const m = readFileSync(f, "utf8").match(regex);
    if (m) n += m.length;
  }
  return n;
}

async function gh(path) {
  const r = await fetch(`https://api.github.com${path}`, {
    headers: { Authorization: `Bearer ${GH_TOKEN}`, Accept: "application/vnd.github+json" },
  });
  if (!r.ok) die(`GitHub ${path} → ${r.status}`);
  return r.json();
}

async function npmInfo(pkg) {
  const r = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkg)}`);
  if (!r.ok) die(`npm ${pkg} → ${r.status}`);
  return r.json();
}

// ---------------------------------------------------------------- metrics

const tags = (() => {
  const cem = JSON.parse(readFileSync(new URL("../../packages/jh-elements/custom-elements.json", import.meta.url), "utf8"));
  const out = [];
  for (const m of cem.modules) for (const d of m.declarations ?? []) if (d.tagName) out.push(d.tagName);
  return out;
})();
const tagRegex = new RegExp(`<(${tags.join("|")})[\\s>/]`, "g");

async function adoption() {
  const rows = [];
  for (const p of cfg.products) {
    const root = clone(p.repo);
    let n = 0;
    for (const sub of p.paths) {
      const dir = join(root, sub);
      if (existsSync(dir)) n += countMatches(dir, tagRegex);
    }
    rows.push({ product: p.name, value: n });
  }
  const total = rows.reduce((a, r) => a + r.value, 0);
  return {
    value: `${total} instances`,
    note: rows.map((r) => `${r.product} ${r.value}`).join(" · "),
  };
}

const HEX = /#(?:[0-9a-fA-F]{3}){1,2}\b/g;
async function overrides() {
  const rows = [];
  for (const p of cfg.products) {
    const root = clone(p.repo);
    let raw = 0;
    for (const sub of p.paths) {
      const dir = join(root, sub);
      if (existsSync(dir)) raw += countMatches(dir, HEX);
    }
    let ov = 0;
    if (p.overridesFile && existsSync(join(root, p.overridesFile))) {
      ov = countMatches(join(root, p.overridesFile), /--jh-[a-z0-9-]+\s*:/g);
    }
    rows.push({ product: p.name, raw, ov });
  }
  const total = rows.reduce((a, r) => a + r.raw + r.ov, 0);
  return {
    value: `${total}`,
    note: rows.map((r) => `${r.product} ${r.raw} raw hex${r.ov ? ` + ${r.ov} token overrides` : ""}`).join(" · "),
  };
}

async function releaseLag() {
  const info = await npmInfo(cfg.package);
  const latest = info["dist-tags"].latest;
  const latestDate = new Date(info.time[latest]);
  const rows = [];
  for (const p of cfg.products) {
    const root = clone(p.repo);
    let pinned = null;
    for (const sub of p.paths) {
      const pj = join(root, sub, "package.json");
      if (!existsSync(pj)) continue;
      const j = JSON.parse(readFileSync(pj, "utf8"));
      pinned = j.dependencies?.[cfg.package] ?? j.devDependencies?.[cfg.package] ?? pinned;
    }
    if (!pinned) { rows.push({ product: p.name, text: "not a consumer" }); continue; }
    const clean = pinned.replace(/^[\^~>=<\s]+/, "");
    const onLatest = clean === latest;
    const days = onLatest ? 0 : Math.round((Date.now() - latestDate) / 86400000);
    rows.push({ product: p.name, days, text: `${p.name} ${clean}${onLatest ? " (latest)" : ` — ${days}d behind ${latest}`}` });
  }
  const consumers = rows.filter((r) => r.days !== undefined);
  const worst = consumers.length ? Math.max(...consumers.map((r) => r.days)) : 0;
  return { value: `${worst} days`, note: rows.map((r) => r.text).join(" · ") };
}

async function contributions() {
  const since = new Date(Date.now() - 90 * 86400000).toISOString().slice(0, 10);
  const q = encodeURIComponent(`repo:${cfg.designSystemRepo} is:pr is:merged merged:>=${since}`);
  const data = await gh(`/search/issues?q=${q}&per_page=100`);
  const team = new Set(cfg.teamLogins.map((l) => l.toLowerCase()));
  const external = data.items.filter((pr) => !team.has(pr.user.login.toLowerCase()) && !pr.user.login.endsWith("[bot]"));
  const by = {};
  for (const pr of external) by[pr.user.login] = (by[pr.user.login] ?? 0) + 1;
  return {
    value: `${external.length} PRs / 90d`,
    note: Object.entries(by).map(([k, v]) => `${k} ${v}`).join(" · ") || "none",
  };
}

// ---------------------------------------------------------------- notion

const N = "https://api.notion.com/v1";
const nh = {
  Authorization: `Bearer ${NOTION_TOKEN}`,
  "Notion-Version": cfg.notion.apiVersion,
  "Content-Type": "application/json",
};
const rt = (s) => [{ type: "text", text: { content: s.slice(0, 1990) } }];
const plain = (prop) => (prop?.rich_text ?? []).map((t) => t.plain_text).join("");

async function findMetric(title) {
  const r = await fetch(`${N}/data_sources/${cfg.notion.dataSourceId}/query`, {
    method: "POST", headers: nh,
    body: JSON.stringify({ filter: { property: "Metric", title: { equals: title } } }),
  });
  if (!r.ok) die(`Notion query ${title} → ${r.status} ${await r.text()}`);
  const page = (await r.json()).results[0];
  if (!page) die(`No Metrics row titled "${title}"`);
  return page;
}

async function writeMetric(title, { value, note }) {
  if (DRY) { console.log(`  ${title}: ${value}\n    ${note}`); return; }
  const page = await findMetric(title);
  const prev = plain(page.properties.History);
  const line = `${today} — ${value} — ${note}`;
  const history = prev ? `${line}\n${prev}` : line;
  const status = page.properties.Status?.select?.name;
  const props = {
    "Latest value": { rich_text: rt(value) },
    "Last measured": { date: { start: today } },
    History: { rich_text: rt(history) },
  };
  if (status === "Not started" || status === "Collecting") props.Status = { select: { name: "Active" } };
  const r = await fetch(`${N}/pages/${page.id}`, { method: "PATCH", headers: nh, body: JSON.stringify({ properties: props }) });
  if (!r.ok) die(`Notion update ${title} → ${r.status} ${await r.text()}`);
  console.log(`  ✓ ${title}: ${value}`);
}

// ---------------------------------------------------------------- main

console.log(`Forge metrics — ${today}${DRY ? " (dry run)" : ""}`);
const jobs = [
  [cfg.metrics.adoption, adoption],
  [cfg.metrics.overrides, overrides],
  [cfg.metrics.releaseLag, releaseLag],
  [cfg.metrics.contributions, contributions],
];
let failed = 0;
for (const [title, fn] of jobs) {
  try { await writeMetric(title, await fn()); }
  catch (e) { failed++; console.error(`  ✖ ${title}: ${e.message}`); }
}
process.exit(failed ? 1 : 0);
