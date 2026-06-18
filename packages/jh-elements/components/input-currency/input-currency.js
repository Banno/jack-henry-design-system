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
        :host([horizontal-align="right"]) input {
          text-align: right;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /** Sets the horizontal alignment of the input text. */
      horizontalAlign: { type: String, attribute: 'horizontal-align' },
    };
  }

  constructor() {
    super();
    /** @type {'left' | 'right'} */
    this.horizontalAlign = 'left';
  }

  // render() {
  //   return html`

  //   `;
  // }
}
JhInputCurrency.register('jh-input-currency', JhInputCurrency);