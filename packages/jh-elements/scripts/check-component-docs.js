// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Checks that every custom element in custom-elements.json has a complete
 * machine contract (manifest descriptions) and an intent file (<name>.md).
 *
 * Usage (from packages/jh-elements):
 *   node scripts/check-component-docs.js            # warn only, exit 0
 *   node scripts/check-component-docs.js --strict   # exit 1 on any finding
 *   node scripts/check-component-docs.js --only button,badge
 */

import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const strict = args.includes('--strict');
const onlyArg = args[args.indexOf('--only') + 1];
const only = args.includes('--only') && onlyArg ? onlyArg.split(',') : null;

const REQUIRED_HEADINGS = [
  'Purpose',
  'Use when',
  "Don't use when",
  'Composition',
  'Accessibility',
  'Style hooks',
  'Do not',
];

const manifest = JSON.parse(readFileSync(join(root, 'custom-elements.json'), 'utf8'));

const elements = [];
for (const mod of manifest.modules ?? []) {
  for (const decl of mod.declarations ?? []) {
    if (decl.customElement && decl.tagName) {
      elements.push({ decl, path: mod.path });
    }
  }
}

let findings = 0;
const report = (tag, level, msg) => {
  findings++;
  console.log(`${level === 'error' ? '✖' : '⚠'} ${tag}: ${msg}`);
};

for (const { decl, path } of elements) {
  const tag = decl.tagName;
  const name = tag.replace(/^jh-/, '');
  if (only && !only.includes(name)) continue;

  // 1. Manifest completeness
  if (!decl.description) report(tag, 'warn', 'no class description');

  for (const a of decl.attributes ?? []) {
    if (a.name.startsWith('_')) continue;
    if (!a.description) report(tag, 'warn', `attribute "${a.name}" has no description`);
  }
  for (const s of decl.slots ?? []) {
    if (!s.description) report(tag, 'warn', `slot "${s.name || '(default)'}" has no description`);
  }
  for (const e of decl.events ?? []) {
    if (!e.description) report(tag, 'warn', `event "${e.name}" has no description`);
  }
  for (const c of decl.cssProperties ?? []) {
    if (!c.description) report(tag, 'warn', `cssprop "${c.name}" has no description`);
  }

  // 2. Intent file exists
  const mdPath = join(root, dirname(path), `${name}.md`);
  if (!existsSync(mdPath)) {
    report(tag, 'error', `missing ${dirname(path)}/${name}.md`);
    continue;
  }
  const md = readFileSync(mdPath, 'utf8');

  // 3. Required headings
  for (const h of REQUIRED_HEADINGS) {
    const re = new RegExp(`^#{1,3}\\s+${h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'mi');
    if (!re.test(md)) report(tag, 'error', `${name}.md missing heading "${h}"`);
  }

  // 4. Cross-check: every slot the MD names must exist in the manifest
  const manifestSlots = new Set((decl.slots ?? []).map((s) => s.name).filter(Boolean));
  const mdSlots = [...md.matchAll(/slot="([^"]+)"/g)].map((m) => m[1]);
  for (const s of new Set(mdSlots)) {
    if (!manifestSlots.has(s)) report(tag, 'error', `${name}.md references slot "${s}" not in manifest`);
  }

  // 5. Cross-check: every --jh-* hook the MD names must exist in the manifest
  const manifestHooks = new Set((decl.cssProperties ?? []).map((c) => c.name));
  const mdHooks = [...md.matchAll(/(--jh-[a-z0-9-]+)/g)].map((m) => m[1]);
  for (const h of new Set(mdHooks)) {
    if (!h.startsWith(`--jh-${name}-`)) continue;
    // A trailing dash is a prefix pattern (e.g. --jh-button-color-background-*)
    const ok = h.endsWith('-')
      ? [...manifestHooks].some((m) => m.startsWith(h))
      : manifestHooks.has(h);
    if (!ok) report(tag, 'error', `${name}.md references hook "${h}" not in manifest`);
  }

  // 6. The MD must not restate the API (that's the manifest's job)
  if (/^\|\s*(attribute|property|prop)\b/im.test(md)) {
    report(tag, 'warn', `${name}.md contains an API table; props belong in the manifest only`);
  }
}

console.log(`\n${elements.length} elements checked, ${findings} finding(s).`);
process.exit(strict && findings > 0 ? 1 : 0);
