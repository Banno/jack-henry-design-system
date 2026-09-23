// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * A Badge is a visual indicator that represents numbers, such as counters. It also supports a dot-only variant.
 *
 * [Badge Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-badge--docs)
 *
 * @slot - Optional anchor. When content is slotted (an icon, an avatar, a nav item), the badge
 * overlays its top-right corner. With no slotted content the badge renders inline.
 *
 * @cssprop --jh-badge-border-radius - The badge border radius. Defaults to `--jh-border-radius-pill`.
 * @cssprop --jh-badge-color-background-enabled - The badge background color. Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-badge-color-text-enabled - The badge text color. Defaults to `--jh-color-content-on-negative-enabled`.
 * @cssprop --jh-badge-color-background-negative - Background for `appearance="negative"`. Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-badge-color-text-negative - Text color for `appearance="negative"`. Defaults to `--jh-color-content-on-negative-enabled`.
 * @cssprop --jh-badge-color-background-neutral - Background for `appearance="neutral"`. Defaults to `--jh-color-container-neutral-enabled`.
 * @cssprop --jh-badge-color-text-neutral - Text color for `appearance="neutral"`. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-badge-color-ring - A 2px ring around the badge that separates it from what's behind it
 * (an avatar, a brand-colored nav item). Defaults to `transparent`; set it to the surface color.
 * @cssprop --jh-badge-space-offset-x - Horizontal offset of an anchored badge from the anchor's right edge. Defaults to `--jh-dimension-100` (inward).
 * @cssprop --jh-badge-space-offset-y - Vertical offset of an anchored badge from the anchor's top edge. Defaults to `--jh-dimension-100` (inward).
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
        appearance: {
            type: StringConstructor;
            reflect: boolean;
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
    /**
    * `negative` (default) means act — unread, overdue, failed. `neutral` means count — items, selected.
    * @type {'negative' | 'neutral'} */
    appearance: "negative" | "neutral";
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-badge': JhBadge;
  }
}
