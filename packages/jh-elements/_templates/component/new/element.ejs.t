---
to: components/<%= unprefixedName %>/<%= unprefixedName %>.js
#
# SPDX-FileCopyrightText: 2025 Jack Henry
# 
# SPDX-License-Identifier: Apache-2.0
---
/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * <%= h.changeCase.title(elementName) %>
 * @customElement <%= elementName %>
 */
export class <%= h.changeCase.pascal(elementName) %> extends JhElement {
  static get styles() {
    return css`
        :host {

      }
    `;
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
    return html`

    `;
  }
}
<%= h.changeCase.pascal(elementName) %>.register('<%= elementName %>', <%= h.changeCase.pascal(elementName) %> );