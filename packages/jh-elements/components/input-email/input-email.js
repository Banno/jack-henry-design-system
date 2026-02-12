// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { JhInput } from '../input/input.js';

/**
 * The input email component provides a single-line text field for email addresses.
 * 
 * [Input Email Storybook Documentation](https://release-v2--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-input-email--docs)
 * 
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