/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Input Currency
 * @customElement jh-input-currency
 */
export class JhInputCurrency extends JhElement {
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
JhInputCurrency.register('jh-input-currency', JhInputCurrency);