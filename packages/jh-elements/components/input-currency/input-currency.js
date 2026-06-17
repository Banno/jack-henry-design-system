/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css } from 'lit';
import { JhInput } from '../input/input.js';

/**
 * Input Currency
 * @customElement jh-input-currency
 */
export class JhInputCurrency extends JhInput {
  static get styles() {
    return [
      super.styles,
      css`        

      `,
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

  // render() {
  //   return html`

  //   `;
  // }
}
JhInputCurrency.register('jh-input-currency', JhInputCurrency);