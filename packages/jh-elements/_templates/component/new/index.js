// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

const PREFIX = 'jh-';

export default {
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
      // e.g. "jh-avatar-group'
      elementName,
      // e.g. "avatar-group"
      unprefixedName,
    };
  },
};