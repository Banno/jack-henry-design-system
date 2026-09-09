// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * A Badge is a visual indicator that represents numbers, such as counters. It also supports a dot-only variant.
 *
 * [Badge Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-badge--docs)
 *
 * @cssprop --jh-badge-border-radius - The badge border radius. Defaults to `--jh-border-radius-pill`.
 * @cssprop --jh-badge-color-background-enabled - The badge background color. Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-badge-color-text-enabled - The badge text color. Defaults to `--jh-color-content-on-negative-enabled`.
 *
 * @customElement jh-badge
 */
export class JhBadge extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        count: {
            type: NumberConstructor;
        };
        maxCount: {
            type: NumberConstructor;
            attribute: string;
        };
    };
    /** Number to show within the badge. If no `count` is supplied, Badge will render as a dot.
    * @type {number | null} */
    count: number | null;
    /**
    * Sets the max count to show. Appends `+` to the `max-count` when value is exceeded.
    * @attr max-count
    * @type {number | null} */
    maxCount: number | null;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-badge': JhBadge;
  }
}
