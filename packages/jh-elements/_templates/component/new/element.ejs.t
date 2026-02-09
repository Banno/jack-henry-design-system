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

import { LitElement, css, html } from 'lit';

/**
 * <%= h.changeCase.title(elementName) %>
 * @customElement <%= elementName %>
 */
export class <%= h.changeCase.pascal(elementName) %> extends LitElement {
  static get styles() {
    return css`
        :host {

      }
    `;
  }

  static get properties() {
    return {
      /** Property description */
      someProperty: { type: String }
    };
  }

  constructor() {
    super();
    /** @type {?string} */
    this.someProperty = 'some initial value';
  }

  render() {
    return html`

    `;
  }
}

customElements.define('<%= elementName %>', <%= h.changeCase.pascal(elementName) %> );