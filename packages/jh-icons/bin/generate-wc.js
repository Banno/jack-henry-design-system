// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const execFile = promisify(require('child_process').execFile);

const args = process.argv.slice(2); // args[0] = sourcePath, args[1] = outputPath, args[2] = prefix
const [sourcePath, outputPath, prefix] = args;

if (!sourcePath || !outputPath || !prefix) {
  console.error('Usage: node generate-wc.js <sourcePath> <outputPath> <prefix>');
  process.exit(1);
}

// number of hygen processes to run at once
const CONCURRENCY = 8;

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

// Create the component using the hygen generator. execFile runs without a shell,
// so the svg markup is passed through as a single argument with no quoting.
function generate(icon) {
  return execFile('hygen', [
    'icon',
    'new',
    icon.name,
    '--svg',
    icon.contents,
    '--outputPath',
    outputPath,
    '--prefix',
    prefix,
  ]);
}

// Summarize why hygen failed without echoing the full command back, which would
// repeat the entire svg payload for every failure.
function reason(e) {
  const output = [e.stderr, e.stdout]
    .map(stream => (stream || '').trim())
    .filter(Boolean)
    .join(' ');
  if (output) {
    return output.split('\n').slice(0, 3).join(' ').slice(0, 300);
  }
  return e.code ? `hygen exited with ${e.code}` : e.message.split('\n')[0];
}

// Pull from a shared queue so at most CONCURRENCY generators run at a time
async function worker(queue, failures) {
  for (let icon = queue.shift(); icon; icon = queue.shift()) {
    try {
      await generate(icon);
      console.log(`${icon.name} created`);
    } catch (e) {
      failures.push(icon.name);
      console.error(`error generating ${icon.name}: ${reason(e)}`);
    }
  }
}

async function main() {
  const queue = [...icons];
  const failures = [];
  const workers = Array.from(
    { length: Math.min(CONCURRENCY, queue.length) },
    () => worker(queue, failures)
  );

  await Promise.all(workers);

  console.log(`\n${icons.length - failures.length}/${icons.length} icons created`);

  if (failures.length) {
    console.error(`failed (${failures.length}): ${failures.join(', ')}`);
    process.exitCode = 1;
  }
}

main();
