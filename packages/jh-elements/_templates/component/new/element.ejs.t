---
to: components/<%= unprefixedName %>/<%= unprefixedName %>.js
# 
# Copyright 2025 Jack Henry.
# SPDX-License-Identifier: Apache-2.0
# See LICENSE file in project root for full terms.
---
/**
 * Copyright 2025 Jack Henry.
 * SPDX-License-Identifier: Apache-2.0
 * * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * * http://www.apache.org/licenses/LICENSE-2.0
 * * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { LitElement, css, html } from 'lit';

/**
 * <%= titleName %>
 * @customElement <%= elementName %>
 */
export class <%= className %> extends LitElement {
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

customElements.define('<%= elementName %>', <%= className %>);