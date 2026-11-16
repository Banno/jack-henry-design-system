// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import element from './templates/element.js';
import stories from './templates/element.story.js';
import docs from './templates/element.mdx.js';

const PREFIX = 'jh-';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const { values, positionals } = parseArgs({
  options: { name: { type: 'string' } },
  allowPositionals: true,
});
// Accept multi-word names, e.g. `test group` or "Test Group" -> test-group
const input = [values.name ?? '', ...positionals]
  .join(' ')
  .trim()
  .toLowerCase()
  .split(/[\s_-]+/)
  .filter(Boolean)
  .join('-');

if (!input || !/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(input)) {
  console.error('Usage: pnpm generate <name>   (e.g. avatar-group, "test group", or jh-avatar-group)');
  process.exit(1);
}

// Accept the name with or without the prefix
const unprefixedName = input.startsWith(PREFIX) ? input.slice(PREFIX.length) : input;
const elementName = `${PREFIX}${unprefixedName}`;
const capitalize = (w) => w[0].toUpperCase() + w.slice(1);

const ctx = {
  elementName,
  unprefixedName,
  className: elementName.split('-').map(capitalize).join(''),   
  title: unprefixedName.split('-').map(capitalize).join(' '), 
  year: new Date().getFullYear(),
};

const dir = path.join(root, 'components', unprefixedName);
const outputs = {
  [`${unprefixedName}.js`]: element,
  [`${unprefixedName}.stories.js`]: stories,
  [`${unprefixedName}.mdx`]: docs,
};

fs.mkdirSync(dir, { recursive: true });
for (const [file, render] of Object.entries(outputs)) {
  const target = path.join(dir, file);
  // prevent overwriting an existing component
  if (fs.existsSync(target)) {
    console.log(`skipped: ${path.relative(root, target)} (already exists)`);
    continue;
  }
  fs.writeFileSync(target, render(ctx));
  console.log(`added: ${path.relative(root, target)}`);
}