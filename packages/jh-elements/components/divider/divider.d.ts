// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Dividers are used to group content vertically at the page or component level and should be used when whitespace does not provide a clear enough separation.
 *
 * [Divider Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-divider--docs)
 *
 * @cssprop --jh-divider-border-width - The divider width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-divider-border-style - The divider style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-divider-color-border - The divider color. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-divider-space-inset - The divider margin-left. Defaults to `0`.
 *
 * @customElement jh-divider
 */
export class JhDivider extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        inset: {
            type: NumberConstructor;
            reflect: boolean;
        };
    };
    /**
     * The alignment of the left edge of the divider.
     * @type { 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 | null }
     */
    inset: 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 | null;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-divider': JhDivider;
  }
}
