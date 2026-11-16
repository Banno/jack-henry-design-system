// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * @param {{ elementName: string, className: string, year: number }} ctx
 */
export default ({ elementName, className, year }) => {
  // e.g. 'jh-avatar-group' -> 'Jh Avatar Group' (was h.changeCase.title(elementName))
  const elementTitle = elementName
    .split('-')
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');

  return `/**
* SPDX-FileCopyrightText: ${year} Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * ${elementTitle}
 * @customElement ${elementName}
 */
export class ${className} extends JhElement {
  static get styles() {
    return css\`
        :host {

      }
    \`;
  }

  static get properties() {
    return {
      someProperty: { type: String }
    };
  }

  constructor() {
    super();
    /** @type {string | null} 
    * Property description 
    */
    this.someProperty = 'some initial value';
  }

  render() {
    return html\`

    \`;
  }
}
${className}.register('${elementName}', ${className} );`;
};
