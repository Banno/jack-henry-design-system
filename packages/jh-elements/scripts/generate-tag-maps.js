// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import fs from 'fs';
import path from 'path';

const SPDX_HEADER = `// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0
`;

const manifest = JSON.parse(fs.readFileSync('custom-elements.json', 'utf8'));

// Map every emitted .d.ts to its tag-name entry (if it's a custom element).
const tagEntries = new Map();
for (const module of manifest.modules) {
  const dtsPath = path.join(
    path.dirname(module.path),
    `${path.basename(module.path, '.js')}.d.ts`,
  );
  if (!fs.existsSync(dtsPath)) continue;

  for (const decl of module.declarations || []) {
    if (decl.kind !== 'class' || !decl.customElement || !decl.tagName) continue;
    tagEntries.set(dtsPath, `'${decl.tagName}': ${decl.name};`);
  }
}

// Walk every emitted .d.ts: prepend SPDX header + append tag map (idempotent).
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (name.endsWith('.d.ts')) {
      let content = fs.readFileSync(full, 'utf8');

      if (!content.startsWith('// SPDX-FileCopyrightText')) {
        content = SPDX_HEADER + '\n' + content;
      }

      const entry = tagEntries.get(full);
      if (entry && !content.includes(entry)) {
        content =
          content.trimEnd() +
          `\n\ndeclare global {\n  interface HTMLElementTagNameMap {\n    ${entry}\n  }\n}\n`;
      }

      fs.writeFileSync(full, content);
    }
  }
}

walk('components');
console.log('SPDX headers and tag maps applied.');