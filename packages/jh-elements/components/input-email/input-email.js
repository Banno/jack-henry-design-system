// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { JhInput } from '../input/input.js';

/**
 * Input Email
 * @customElement jh-input-email
 */
export class JhInputEmail extends JhInput {
  constructor() {
    super();
    this.autocomplete = 'email';
    this.inputMode = 'email';
  }
}
customElements.define('jh-input-email', JhInputEmail);