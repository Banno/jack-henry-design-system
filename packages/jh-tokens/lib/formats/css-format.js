// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { fileHeader, formattedVariables } from 'style-dictionary/utils';

async function FormatCss({ dictionary, file, options }) {
    const { outputReferences, usesDtcg } = options;
    const header = await fileHeader({ file });
    // Determine the value of color-scheme property based on the theme.
    const isDark = options.selector.includes('dark');
    const colorSchemeValue = isDark ? 'dark': 'light';

    return (
      header +
      `${options.selector} {\n` +
      `  color-scheme: ${colorSchemeValue};\n` +
      formattedVariables({
        format: 'css',
        dictionary,
        outputReferences, usesDtcg
      }) +
      '\n}\n'
    );
  }

export default FormatCss;