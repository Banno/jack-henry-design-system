// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { JhElement } from '../element/element.js';

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
  static get styles() {
    return css`
      :host {
        display: inline-flex;
        position: relative;
      }

      .badge {
        background: var(--jh-badge-color-background-enabled, var(--jh-badge-color-background-negative, var(--jh-color-content-negative-enabled)));
        color: var(--jh-badge-color-text-enabled, var(--jh-badge-color-text-negative, var(--jh-color-content-on-negative-enabled)));
        border-radius: var(--jh-badge-border-radius, var(--jh-border-radius-pill));
        box-shadow: 0 0 0 var(--jh-dimension-50) var(--jh-badge-color-ring, transparent);
        box-sizing: border-box;
        min-width: var(--jh-dimension-200);
        height: var(--jh-dimension-200);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      :host([appearance='neutral']) .badge {
        background: var(--jh-badge-color-background-neutral, var(--jh-color-container-neutral-enabled));
        color: var(--jh-badge-color-text-neutral, var(--jh-color-content-primary-enabled));
      }

      :host([appearance='neutral']) .badge:not(.count-present) {
        background: var(--jh-badge-color-background-neutral, var(--jh-color-content-secondary-enabled));
      }

      .count-present {
        font-family: var(--jh-font-helper-bold-font-family);
        font-weight: var(--jh-font-helper-bold-font-weight);
        font-size: var(--jh-font-helper-bold-font-size);
        line-height: var(--jh-font-helper-bold-line-height);
        font-variant-numeric: tabular-nums;
        height: var(--jh-dimension-400);
        min-width: var(--jh-dimension-400);
        padding: var(--jh-dimension-0) var(--jh-dimension-100);
        width: auto;
      }

      /* anchored: badge overlays the top-right corner of the slotted content */
      .anchored {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(
          calc(50% - var(--jh-badge-space-offset-x, var(--jh-dimension-100))),
          calc(-50% + var(--jh-badge-space-offset-y, var(--jh-dimension-100)))
        );
        pointer-events: none;
      }
    `;
  }

  static get properties() {
    return {

      count: { type: Number },
      maxCount: { type: Number, attribute: 'max-count' },
      appearance: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    /** Number to show within the badge. If no `count` is supplied, Badge will render as a dot.
    * @type {number | null} */
    this.count = null;
    /** 
    * Sets the max count to show. Appends `+` to the `max-count` when value is exceeded.
    * @attr max-count
    * @type {number | null} */
    this.maxCount = 99;
    /**
    * `negative` (default) means act — unread, overdue, failed. `neutral` means count — items, selected.
    * @type {'negative' | 'neutral'} */
    this.appearance = 'negative';
    this.#anchored = false;
  }

  #anchored;

  #handleSlotChange(e) {
    const assigned = e.target.assignedNodes({ flatten: true })
      .filter((n) => n.nodeType !== Node.TEXT_NODE || n.textContent.trim() !== '');
    const anchored = assigned.length > 0;
    if (anchored !== this.#anchored) {
      this.#anchored = anchored;
      this.requestUpdate();
    }
  }

  /** @protected */
  render() {
    let count;

    if (this.maxCount && this.count > this.maxCount) {
      count = `${this.maxCount}+`;
    } else if (typeof this.count === 'number' && !isNaN(this.count) && this.count >= 0) {
      count = this.count;
    }

    const classes = { badge: true, 'count-present': count !== undefined, anchored: this.#anchored };

    return html`
      <slot @slotchange=${this.#handleSlotChange}></slot>
      <span class=${classMap(classes)}>${count}</span>
    `;
  }
}
JhBadge.register('jh-badge', JhBadge);
