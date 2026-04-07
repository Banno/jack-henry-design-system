// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { fileHeader, formattedVariables } from 'style-dictionary/utils';

//will need to remove $description from the output in DTCG version
async function formatJs({ dictionary, file, options }) {
  const { outputReferences, usesDtcg } = options;
  const header = await fileHeader({ file });
  function indent2(str) {
    // removes whitespace fom the end of a string with the matched substring & adds indentation to each line
    return str.trimEnd().replace(/^/gm, '  $&');
  }
  return (
    header +
    'export default `\n  ' +
    options.selector +
    ' {\n' +
    indent2(
      formattedVariables({ format: 'css', dictionary, outputReferences, usesDtcg })
    ) +
    '\n  }\n`;'
  );
}

export default formatJs;