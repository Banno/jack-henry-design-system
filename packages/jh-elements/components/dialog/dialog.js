/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Jh Dialog
 * @customElement jh-dialog
 */
export class JhDialog extends JhElement {
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
JhDialog.register('jh-dialog', JhDialog );