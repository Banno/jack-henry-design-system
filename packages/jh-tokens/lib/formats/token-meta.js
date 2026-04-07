// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { usesReferences, getReferences } from 'style-dictionary/utils';

const formatTokenName = function (tokenName) {
  //name is token name with dashes replaced with spaces and no jh.
  let name = tokenName.replaceAll('-', ' ').replaceAll('jh', ' ').trim();
  let words = name.split(' ');
  let formattedWords = [];

  for (let i = 0; i < words.length; i++) {
    let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    formattedWords.push(capitalizedWord);
  }
  return formattedWords.join(' ');
};

const getNamespace = function (tokenName) {
  let parts = tokenName.split('-');
  if (parts.length > 0) {
    return parts[0];
  } else {
    return '';
  }
};

function formatDocs({ dictionary, options }) {
  let newMap = dictionary.allTokens.map((token) => {
    let value = token.$value;

    // if token is an alias, return the referenced value rather than the computed value.
    // ie jh-color-container-primary-active -> jh-color-gray-100 (NOT #ffffffff)
    // using unfilteredTokens so that all tokens are available even when filtering for typography tokens only.
    if (options.outputReferences) {
      if (usesReferences(token.original.$value, dictionary.unfilteredTokens)) {
        const refs = getReferences(token.original.$value, dictionary.unfilteredTokens);
        // console.log(refs)
        refs.forEach((ref) => {
          if (typeof value === 'string' && typeof ref.$value === 'string') {
            value = value.replace(ref.$value, function () {
              return `${ref.name}`;
            });
          }
      });
    }
  }
    return {
      name: formatTokenName(token.name),
      tokenid: token.name,
      alias: token.$extensions.alias,
      description: token.$description,
      values: {
        value: value, // returns reference to other token if alias, otherwise computed value
        computedValue: token.$value, // returns the computed value (ie #ffffffff)
        CSS: `--${token.name}`, // returns the CSS variable name

      },
      status: {
        message: token.$extensions.message,
        addedIn: token.$extensions.addedIn,
        deprecatedIn: token.$extensions.deprecatedIn,
      },
      $type: token.$type,
      namespace: getNamespace(token.name),
      category: token.attributes.category,
      subCategory: token.attributes.type,
      variant: token.attributes.item,
      state: token.attributes.subitem,
      property: token.attributes.state,
    };
  });
  return JSON.stringify(newMap, null, 2);
}

export default formatDocs;
