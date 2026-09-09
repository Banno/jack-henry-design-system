// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The input url component provides a single-line text field for capturing URLs.
 *
 * [Input URL Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-input-url--docs)
 *
 * @customElement jh-input-url
 */
export class JhInputUrl extends JhInput {
    static get styles(): import("lit").CSSResult[];
}
import { JhInput } from '../input/input.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-input-url': JhInputUrl;
  }
}
