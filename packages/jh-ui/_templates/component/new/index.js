const { classify, titleize } = require('inflection');

const PREFIX = 'jh-';

/**
 * @param {string} str 
 * @returns The string with dashes replaced with underscores
 */
function underscoreize(str) {
  return str.replace(/-/g, '_');
}

module.exports = {
  /**
   * @param {{
   *  args: {name: string}
   * }} param1
   */
  params: ({ args }) => {
    // If the user entered a name without a prefix (e.g.  'avatar-group')
    // generate a name with a prefix and vice versa
    let elementName = args.name;
    let unprefixedName = elementName;

    if (elementName.startsWith(PREFIX)) {
      unprefixedName = elementName.slice(PREFIX.length);
    } else {
      elementName = `${PREFIX}${unprefixedName}`;
    }

    return {
      // e.g. "JhAvatarGroup"
      className: classify(underscoreize(elementName)),
      // e.g. "jh-avatar-group'
      elementName,
      // e.g. "Avatar Group"
      titleName: titleize(underscoreize(unprefixedName)),
      // e.g. "AvatarGroup"
      unprefixedClassName: classify(underscoreize(unprefixedName)),
      // e.g. "avatar-group"
      unprefixedName,
    };
  },
};