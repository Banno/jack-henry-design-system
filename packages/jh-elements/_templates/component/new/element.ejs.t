---
to: components/<%= unprefixedName %>/<%= unprefixedName %>.js
#
# SPDX-FileCopyrightText: 2025 Jack Henry
# 
# SPDX-License-Identifier: Apache-2.0
---
/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * <%= titleName %>
 * @customElement <%= elementName %>
 */
export class <%= className %> extends JhElement {
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
<%= className %>.register('<%= elementName %>', <%= className %>);