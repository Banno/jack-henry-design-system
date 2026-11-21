// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Compares two custom-elements manifests and prints a Markdown summary of
 * public API changes per element, with the intent-file sections each change
 * probably affects. Prints nothing when there is no drift.
 *
 * Usage:
 *   node scripts/describe-manifest-drift.js <base-manifest.json> <head-manifest.json>
 */

import { readFileSync } from 'node:fs';

const [, , basePath, headPath] = process.argv;
if (!basePath || !headPath) {
  console.error('usage: describe-manifest-drift.js <base.json> <head.json>');
  process.exit(2);
}

const load = (p) => {
  const m = JSON.parse(readFileSync(p, 'utf8'));
  const out = new Map();
  for (const mod of m.modules ?? []) {
    for (const d of mod.declarations ?? []) {
      if (!d.customElement || !d.tagName) continue;
      out.set(d.tagName, {
        attributes: index(d.attributes, (a) => a.name, (a) => ({ type: a.type?.text, default: a.default })),
        slots: index(d.slots, (s) => s.name || '(default)'),
        events: index(d.events, (e) => e.name),
        cssProperties: index(d.cssProperties, (c) => c.name, (c) => ({ default: c.default })),
        cssParts: index(d.cssParts, (p) => p.name),
      });
    }
  }
  return out;
};

const index = (list = [], key, pick = () => ({})) => {
  const m = new Map();
  for (const item of list) {
    const k = key(item);
    if (k.startsWith('_')) continue;
    m.set(k, pick(item));
  }
  return m;
};

// Which intent-file sections a kind of change usually touches.
const SECTIONS = {
  attributes: 'Defaults, Do not',
  slots: 'Composition',
  events: 'Composition',
  cssProperties: 'Style hooks',
  cssParts: 'Style hooks',
};

const base = load(basePath);
const head = load(headPath);
const lines = [];

const tags = new Set([...base.keys(), ...head.keys()]);
for (const tag of [...tags].sort()) {
  const b = base.get(tag);
  const h = head.get(tag);
  const name = tag.replace(/^jh-/, '');
  const changes = [];

  if (!b) {
    changes.push(`- **New element.** Needs \`components/${name}/${name}.md\` from \`components/_template/component.md\`.`);
  } else if (!h) {
    changes.push(`- **Removed element.** Delete \`components/${name}/${name}.md\` and check other intent files that reference \`${tag}\`.`);
  } else {
    for (const kind of Object.keys(SECTIONS)) {
      const added = [...h[kind].keys()].filter((k) => !b[kind].has(k));
      const removed = [...b[kind].keys()].filter((k) => !h[kind].has(k));
      const changed = [...h[kind].keys()].filter((k) => {
        if (!b[kind].has(k)) return false;
        return JSON.stringify(b[kind].get(k)) !== JSON.stringify(h[kind].get(k));
      });
      const fmt = (arr) => arr.map((k) => `\`${k}\``).join(', ');
      if (added.length) changes.push(`- Added ${kind}: ${fmt(added)} → review **${SECTIONS[kind]}**`);
      if (removed.length) changes.push(`- Removed ${kind}: ${fmt(removed)} → review **${SECTIONS[kind]}**; remove any mention`);
      if (changed.length) {
        const detail = changed
          .map((k) => {
            const from = b[kind].get(k), to = h[kind].get(k);
            const parts = [];
            if (from.default !== to.default) parts.push(`default ${from.default ?? '—'} → ${to.default ?? '—'}`);
            if (from.type !== to.type) parts.push(`type changed`);
            return `\`${k}\`${parts.length ? ` (${parts.join(', ')})` : ''}`;
          })
          .join(', ');
        changes.push(`- Changed ${kind}: ${detail} → review **${SECTIONS[kind]}**`);
      }
    }
  }

  if (changes.length) {
    lines.push(`### \`${tag}\` → \`components/${name}/${name}.md\``, ...changes, '');
  }
}

if (lines.length) {
  console.log('## Component API changed on this PR\n');
  console.log('The manifest differs from the base branch. Each item names the intent-file section that usually needs updating. The strict check above only verifies structure; whether the *rules* still hold is the reviewer\'s call.\n');
  console.log(lines.join('\n'));
}
