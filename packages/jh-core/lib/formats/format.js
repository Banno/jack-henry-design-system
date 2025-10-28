const cssFormatter = require('style-dictionary/lib/common/formats.js')[
  'css/variables'
];

// if options: { showFileHeader: true}
function fileHeader(showFileHeader) {
  if (showFileHeader) {
    return `/**
 * Do not edit directly
 * Generated on ${new Date().toUTCString()}
 */`;
  }
  return '';
}

function indent2(str) {
  // remove whitespace fom the end of a string with the matched substring
  return str.trimEnd().replace(/^/gm, '  $&');
}

function extractShowFileHeaderOption(ctx) {
  let options = { ...ctx.file.options };
  const showFileHeader =
    options && typeof options.showFileHeader !== 'undefined'
      ? options.showFileHeader
      : true;
  options.showFileHeader = false;
  return [{ ...ctx, file: { ...ctx.file, options } }, showFileHeader];
}

function formatJsCss(ctx) {
  const [newCtx, showFileHeader] = extractShowFileHeaderOption(ctx);
  const css = cssFormatter(newCtx);
  return `${fileHeader(showFileHeader)}
export default \`
${indent2(css)}
\`;`;
}

module.exports = { formatJsCss };
