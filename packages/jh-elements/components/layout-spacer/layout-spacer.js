/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Layout Spacer
 * @customElement jh-layout-spacer
 */
export class JhLayoutSpacer extends JhElement {
  static get styles() {
    return css`
        :host {
          display: block;
          flex: 1 1 auto;
          align-self: stretch;
      }
    `;
  }

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  render() {
    return html``;
  }
}
JhLayoutSpacer.register('jh-layout-spacer', JhLayoutSpacer);