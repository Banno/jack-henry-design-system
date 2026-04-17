/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { LitElement, css, html } from 'lit';

/**
 * Input Number
 * @customElement jh-input-number
 */
export class JhInputNumber extends LitElement {
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

customElements.define('jh-input-number', JhInputNumber);