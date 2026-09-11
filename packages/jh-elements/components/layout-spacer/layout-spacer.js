/**
* SPDX-FileCopyrightText: 2026 Jack Henry
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

  render() {
    return html``;
  }
}
JhLayoutSpacer.register('jh-layout-spacer', JhLayoutSpacer);