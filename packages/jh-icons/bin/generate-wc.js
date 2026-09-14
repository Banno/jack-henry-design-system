// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

const { execFile } = require('child_process');

const args = process.argv.slice(2); // args[0] = sourcePath, args[1] = outputPath, args[2] = prefix

// Get all files
const fs = require('fs');
const sourcePath = args[0];
const iconFiles = fs.readdirSync(sourcePath); // Array of file names

// Build object that pairs the icon name and the svg code
const icons = iconFiles
  .filter(fileName => fileName.includes('.svg')) // ignore non .svg files
  .map(fileName => {
    return {
      path: `${sourcePath}${fileName}`,
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
 
  // For each icon, call the hygen generator to create the component.
  // Use execFile with an argument array (no shell) so SVG content cannot
  // break out of the command and inject shell syntax.
  icons.forEach(icon => {
  execFile(
    'hygen',
    [
      'icon',
      'new',
      icon.name,
      '--svg',
      icon.contents,
      '--outputPath',
      args[1],
      '--prefix',
      args[2],
    ],
    error => {
      if (error) {
        console.error('error generating icon:', error);
        return;
      }
      console.log(`${icon.name} created`);
    }
  );
});