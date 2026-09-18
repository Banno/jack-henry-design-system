// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

// shared by utility-css-format.js and utility-esm-format.js
export function buildUtilityRules(dictionary) {
  return dictionary.allTokens
    .map((token) => {
      // drop the leading `font.utility` path segments to build the class name, ie ['font','utility','heading','xl'] -> forge-type-heading-xl
      const className = `forge-type-${token.path.slice(2).join('-')}`;
      return `.${className} {\n  font: ${token.$value};\n}`;
    })
    .join('\n\n');
}
