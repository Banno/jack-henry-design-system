import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// find regex for css and js files }....{
const findRegex = /\s*\}[\s\S]*?\{\s*/g;
// Array of objects with all the files and details needed to merge them for each platform (css, esm, json).
const filestoMerge = [
  {
    main: [
      '../platforms/web/css/jh-theme-light.css',
      '../platforms/web/css/jh-theme-dark.css',
    ],
    toMerge: '../platforms/web/css/typography.css',
    find: findRegex,
    replace: '\n  ',
  },
  {
    main: [
      '../platforms/web/esm/jh-theme-light.js',
      '../platforms/web/esm/jh-theme-dark.js',
    ],
    toMerge: '../platforms/web/esm/typography.js',
    find: findRegex,
    replace: '\n    ',
  },
  {
    main: [
      '../platforms/json/json-flat/jh-theme-light.json',
      '../platforms/json/json-flat/jh-theme-dark.json',
    ],
    toMerge: '../platforms/json/json-flat//typography.json',
    find: /\s*\][\s\S]*?\[\s*/g,
    replace: ',\n  ',
  },
];

filestoMerge.forEach((fileSet) => {
  fileSet.main.forEach((mainFile) => {
    let mainContent = fs.readFileSync(
      path.resolve(__dirname, mainFile),
      'utf-8'
    );
    const mergeContent = fs.readFileSync(
      path.resolve(__dirname, fileSet.toMerge),
      'utf-8'
    );
    // add merge content at the end of the main content
    mainContent = mainContent + mergeContent;
    // clean up so that all tokens are in a single block without extra braces
    mainContent = mainContent.replace(fileSet.find, fileSet.replace);
    // write back to the main file
    fs.writeFileSync(path.resolve(__dirname, mainFile), mainContent, 'utf-8');
  });
  // delete the toMerge file from the repo
  fs.unlinkSync(path.resolve(__dirname, fileSet.toMerge));
});
