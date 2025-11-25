// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { JhInput } from '../input/input.js';

/**
 * Input Email
 * @customElement jh-input-email
 */
export class JhInputEmail extends JhInput {
  firstUpdated() {
    super.firstUpdated();
    let inputEl = this.shadowRoot.querySelector('input');
    inputEl.setAttribute('type', 'email');
  }
}
customElements.define('jh-input-email', JhInputEmail);