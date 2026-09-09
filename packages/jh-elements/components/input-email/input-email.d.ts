// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The input email component provides a single-line text field for email addresses.
 *
 * [Input Email Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-input-email--docs)
 *
 * @customElement jh-input-email
 */
export class JhInputEmail extends JhInput {
}
import { JhInput } from '../input/input.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-input-email': JhInputEmail;
  }
}
