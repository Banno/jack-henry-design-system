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
      token: token.name,
      alias: token.$extensions.alias,
      description: token.$description,
      category: token.attributes.category,
      type: token.attributes.type,
      item: token.attributes.item,
      subItem: token.attributes.subitem,
      value: value,
      computedValue: token.$value,
      deprecated: token.$extensions.deprecated,
      deprecatedMessage: token.$extensions.deprecatedMessage,
    };
  });
  return JSON.stringify(newMap, null, 2);
}

export default formatDocs;
