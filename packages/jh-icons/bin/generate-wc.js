// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

const fs = require('fs');
const path = require('path');
const template = require('./templates/icon');

const args = process.argv.slice(2); // args[0] = sourcePath, args[1] = outputPath, args[2] = prefix
const [sourcePath, outputPath, prefix] = args;

if (!sourcePath || !outputPath || !prefix) {
  console.error('Usage: node generate-wc.js <sourcePath> <outputPath> <prefix>');
  process.exit(1);
}

// when this many icons fail with the same message, stop listing names
const MAX_FAILED_NAMES = 10;

// Get all files
const iconFiles = fs.readdirSync(sourcePath); // Array of file names

// Build object that pairs the icon name and the svg code
const icons = iconFiles
  .filter(fileName => fileName.includes('.svg')) // ignore non .svg files
  .map(fileName => {
    return {
      path: path.join(sourcePath, fileName),
      name: fileName.replace('.svg', ''),
    };
  })
  .map(iconFile => {
    // read the file contents
    const contents = fs.readFileSync(iconFile.path, 'utf8');
    const clean = contents.replace(/<svg([^>]*)>/, (match, attributes) => {
      const newAttrs = attributes
        .replace(/\s+fill=['"][^'"]+['"]/, '')
        .replace(/\s+width=['"][^'"]+['"]/, '')
        .replace(/\s+height=['"][^'"]+['"]/, '')
        .replace(/\s+xmlns:xlink=['"][^'"]+['"]/, '');
      return `<svg${newAttrs}>`;
    });
    return {
      ...iconFile,
      contents: clean.replace(/\r?\n|\r/g, ' '),
    };
  });

// Keep the copyright year of an already-generated icon so regenerating doesn't
// bump every file; only icons without existing output get the current year.
function copyrightYear(filePath) {
  if (fs.existsSync(filePath)) {
    const match = fs
      .readFileSync(filePath, 'utf8')
      .match(/SPDX-FileCopyrightText:\s*(\d{4}(?:\s*-\s*\d{4})?)/);
    if (match) return match[1];
  }
  return new Date().getFullYear();
}

function generate(icon) {
  const filePath = path.join(outputPath, `icon-${icon.name}.js`);
  fs.writeFileSync(
    filePath,
    template({ name: icon.name, prefix, svg: icon.contents, year: copyrightYear(filePath) })
  );
}

function nameList(names) {
  const sorted = [...names].sort();
  if (sorted.length <= MAX_FAILED_NAMES) {
    return sorted.join(', ');
  }
  const rest = sorted.length - MAX_FAILED_NAMES;
  return `${sorted.slice(0, MAX_FAILED_NAMES).join(', ')} and ${rest} more`;
}

// Group failures by message so a systemic problem (e.g. the template missing)
// prints once with a count instead of once per icon. Distinct messages still
// get their own line.
function reportFailures(failures) {
  const byMessage = new Map();
  for (const { name, message } of failures) {
    if (!byMessage.has(message)) byMessage.set(message, []);
    byMessage.get(message).push(name);
  }
  for (const [message, names] of byMessage) {
    const who =
      names.length === 1
        ? names[0]
        : `${names.length} icons (${nameList(names)})`;
    console.error(`error generating ${who}: ${message}`);
  }
}

function main() {
  fs.mkdirSync(outputPath, { recursive: true });

  const failures = [];
  for (const icon of icons) {
    try {
      generate(icon);
      console.log(`${icon.name} created`);
    } catch (e) {
      failures.push({ name: icon.name, message: e.message });
    }
  }

  console.log('');
  if (failures.length) {
    reportFailures(failures);
    process.exitCode = 1;
  }
  console.log(`${icons.length - failures.length}/${icons.length} icons created`);
}

main();
