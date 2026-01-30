// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { JhInput } from '../input/input.js';

/**
 * The input telephone component provides a single-line text field for capturing telephone numbers.
 * 
 * @customElement jh-input-telephone
 */
export class JhInputTelephone extends JhInput {
  firstUpdated() {
    super.firstUpdated();
    let inputEl = this.shadowRoot.querySelector('input');
    inputEl.setAttribute('type', 'tel');
  }
}
customElements.define('jh-input-telephone', JhInputTelephone);