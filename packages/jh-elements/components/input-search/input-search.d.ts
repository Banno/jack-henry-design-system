// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The input search component provides a single-line text field for search queries.
 *
 * [Input Search Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-input-search--docs)
 *
 * @customElement jh-input-search
 */
export class JhInputSearch extends JhInput {
    static get styles(): import("lit").CSSResult[];
}
import { JhInput } from '../input/input.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-input-search': JhInputSearch;
  }
}
