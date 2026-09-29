// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The input telephone component provides a single-line text field for capturing telephone numbers.
 *
 * [Input Telephone Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-input-telephone--docs)
 *
 * @customElement jh-input-telephone
 */
export class JhInputTelephone extends JhInput {
}
import { JhInput } from '../input/input.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-input-telephone': JhInputTelephone;
  }
}
