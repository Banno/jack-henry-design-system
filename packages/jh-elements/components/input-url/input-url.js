// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css } from 'lit';
import { JhInput } from '../input/input.js';

/**
 * Input Url
 * @customElement jh-input-url
 */
export class JhInputUrl extends JhInput {
  static get styles() {
    return [
      super.styles,
      css`        
        /* removes safari autofill button */
        input::-webkit-textfield-decoration-container {
          display: none;
        }
      `,
    ];
  }

  firstUpdated() {
    super.firstUpdated();
    let inputEl = this.shadowRoot.querySelector('input');
    inputEl.setAttribute('type', 'url');
  }
}
customElements.define('jh-input-url', JhInputUrl);