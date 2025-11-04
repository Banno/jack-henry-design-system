const cssFormatter = require('style-dictionary/lib/common/formats.js')[
  'css/variables'
];

// if options: { showFileHeader: true}
function fileHeader(showFileHeader) {
  if (showFileHeader) {
    return `/**
 * Copyright 2025 Jack Henry.
 * SPDX-License-Identifier: Apache-2.0
 * * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * * http://www.apache.org/licenses/LICENSE-2.0
 * * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
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
