// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

const formatTokenName = function (tokenName) {
  let name = tokenName.replaceAll('-', ' ').replaceAll('jh', ' ').trim();
  let words = name.split(' ');
  let formattedWords = [];

  for (let i = 0; i < words.length; i++) {
    let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    formattedWords.push(capitalizedWord);
  }
  return formattedWords.join(' ');
};

function formatDocs({ dictionary, options }) {
  let newMap = dictionary.allTokens.map((token) => {
    let value = token.value;

    // if token is an alias, return the referenced value rather than the computed value.
    // ie jh-color-container-primary-active -> jh-color-gray-100 (NOT rgb(231, 236, 240))
    if (options.outputReferences) {
      if (dictionary.usesReference(token.original.value)) {
        const refs = dictionary.getReferences(token.original.value);
        refs.forEach((ref) => {
          value = value.replace(ref.value, function () {
            return `${ref.name}`;
          });
        });
      }
    }
    return {
      name: formatTokenName(token.name),
      token: token.name,
      alias: token.alias,
      description: token.description,
      category: token.attributes.category,
      type: token.attributes.type,
      item: token.attributes.item,
      subItem: token.attributes.subitem,
      value: value,
      computedValue: token.value,
      deprecated: token.deprecated,
      deprecatedMessage: token.deprecatedMessage,
    };
  });
  return JSON.stringify(newMap, null, 2);
}

module.exports = { formatDocs };
