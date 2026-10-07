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

// hygen looks for _templates/ in the current working directory and, when it
// isn't there, silently falls back to its own bundled templates. Resolve the
// package's templates relative to this file so the script works from any cwd.
const TEMPLATES = path.join(__dirname, '..', '_templates');

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

// Create the component using the hygen generator. execFile runs without a shell
// and takes an argument array, so the svg markup is passed through as a single
// argv entry with no quoting and cannot break out of the command to inject
// shell syntax.
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
  ], {
    env: { ...process.env, HYGEN_TMPLS: TEMPLATES },
  });
}

// Summarize why hygen failed without echoing the full command back, which would
// repeat the entire svg payload for every failure.
function reason(e) {
  const output = [e.stderr, e.stdout]
    .map(stream => (stream || '').trim())
    .filter(Boolean)
    .join(' ');
  if (output) {
    return output.split('\n').slice(0, 3).join(' ').slice(0, 300).trim();
  }
  return e.code ? `hygen exited with ${e.code}` : e.message.split('\n')[0];
}

// hygen reports a missing generator/action the same way whether the template
// directory is absent or the generator is simply misspelled. Point at where
// the template was expected so the reader doesn't have to know that.
function hint(message) {
  if (/can't find (action|generator)/i.test(message)) {
    return ` (templates not found — expected at ${TEMPLATES})`;
  }
  return '';
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
    console.error(`error generating ${who}: ${message}${hint(message)}`);
  }
}

// Pull from a shared queue so at most CONCURRENCY generators run at a time
async function worker(queue, failures) {
  for (let icon = queue.shift(); icon; icon = queue.shift()) {
    try {
      await generate(icon);
      console.log(`${icon.name} created`);
    } catch (e) {
      failures.push({ name: icon.name, message: reason(e) });
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

  console.log('');
  if (failures.length) {
    reportFailures(failures);
    process.exitCode = 1;
  }
  console.log(`${icons.length - failures.length}/${icons.length} icons created`);
}

main();
