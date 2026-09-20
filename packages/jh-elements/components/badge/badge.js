// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { JhElement } from '../element/element.js';

/**
 * @slot - Optional anchor. When content is slotted (an icon, an avatar, a nav item), the badge
 * overlays its top-right corner. With no slotted content the badge renders inline.
 *
 * @cssprop --jh-badge-border-radius - The badge border radius. Defaults to `--jh-border-radius-pill`.
 * @cssprop --jh-badge-color-background-negative - Background for `appearance="negative"`. Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-badge-color-text-negative - Text color for `appearance="negative"`. Defaults to `--jh-color-content-on-negative-enabled`.
 * @cssprop --jh-badge-color-background-neutral - Background for `appearance="neutral"`. Defaults to `--jh-color-container-neutral-enabled`.
 * @cssprop --jh-badge-color-text-neutral - Text color for `appearance="neutral"`. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-badge-color-ring - A 2px ring around the badge that separates it from what's behind it
 * (an avatar, a brand-colored nav item). Defaults to `transparent`; set it to the surface color.
 * @cssprop --jh-badge-space-offset-x - Horizontal offset of an anchored badge from the anchor's right edge. Defaults to `--jh-dimension-100` (inward).
 * @cssprop --jh-badge-space-offset-y - Vertical offset of an anchored badge from the anchor's top edge. Defaults to `--jh-dimension-100` (inward).
 * @cssprop --jh-badge-color-background-enabled - Deprecated. Use `appearance` or the per-appearance hooks.
 * @cssprop --jh-badge-color-text-enabled - Deprecated. Use `appearance` or the per-appearance hooks.
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

      .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `;
  }

  static get properties() {
    return {
      /** Number to show within the badge. If no `count` is supplied, Badge renders as a dot. */
      count: { type: String },
      /** Sets the max count to show. Appends `+` to the `max-count` when the value is exceeded. Set to `0` to disable. */
      maxCount: { type: Number, attribute: 'max-count' },
      /** `negative` (default) means act — unread, overdue, failed. `neutral` means count — items, selected. */
      appearance: { type: String, reflect: true },
      /** Render the badge when `count` is `0`. Off by default: a zero count renders nothing. */
      showZero: { type: Boolean, attribute: 'show-zero' },
      /** Accessible text for the badge, e.g. "3 unread messages". Required for a dot badge to convey meaning. */
      label: { type: String },
    };
  }

  constructor() {
    super();
    /** @type {?string} */
    this.count = null;
    /** @type {?number} */
    this.maxCount = 99;
    /** @type {'negative' | 'neutral'} */
    this.appearance = 'negative';
    this.showZero = false;
    /** @type {?string} */
    this.label = null;
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

  #resolveCount() {
    if (this.count === null || this.count === undefined || this.count === '') return { count: undefined, render: true };
    if (!/^[0-9]+$/.test(this.count)) {
      console.warn(`<jh-badge> count="${this.count}" is not numeric and will not render. Use a number, or omit count for a dot.`);
      return { count: undefined, render: false };
    }
    const n = Number(this.count);
    if (n === 0 && !this.showZero) return { count: undefined, render: false };
    if (this.maxCount && n > this.maxCount) return { count: `${this.maxCount}+`, render: true };
    return { count: this.count, render: true };
  }

  render() {
    const { count, render } = this.#resolveCount();
    const classes = { badge: true, 'count-present': !!count, anchored: this.#anchored };

    return html`
      <slot @slotchange=${this.#handleSlotChange}></slot>
      ${render
        ? html`<span class=${classMap(classes)} aria-hidden=${this.label ? 'true' : 'false'}>${count}</span>`
        : null}
      ${render && this.label ? html`<span class="visually-hidden">${this.label}</span>` : null}
    `;
  }
}
JhBadge.register('jh-badge', JhBadge);
