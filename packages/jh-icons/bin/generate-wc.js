const { exec } = require('child_process');

const args = process.argv.slice(2); // args[0] = sourcePath, args[1] = outputPath, args[2] = prefix

// Get all files
const fs = require('fs');
const sourcePath = args[0];
const iconFiles = fs.readdirSync(sourcePath); // Array of file names

// Regex to find and remove the XML/HTML comment block (which holds the license header)
const LICENSE_COMMENT_REGEX = /<!--.*?-->\s*/s;

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

    // If the SVG starts with the XML declaration or license comment, remove the comment.
    contents = contents.replace(LICENSE_COMMENT_REGEX, ''); 
    
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
 
  // For each icon, call exec create the component using hygen generator
  icons.forEach(async icon => {
  try {
    await exec(`hygen icon new ${icon.name} --svg '${icon.contents}' --outputPath ${args[1]} --prefix ${args[2]}`);
    console.log(`${icon.name} created`)
  } catch (e) {
    console.error('error generating icon:', e);
  }
});