/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhInput } from '../input/input.js';

/**
 * Input Number
 * @customElement jh-input-number
 */
export class JhInputNumber extends JhInput {
  static get styles() {
    return [
      super.styles,
      css`
        :host {

        }
      `
    ];
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