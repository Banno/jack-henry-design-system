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
 * @cssprop --jh-badge-border-radius - The badge border radius. Defaults to `--jh-border-radius-pill`.
 * @cssprop --jh-badge-color-background-enabled - The badge background color. Defaults to `--jh-color-content-negative-enabled`. 
 * @cssprop --jh-badge-color-text-enabled - The badge text color. Defaults to `--jh-color-content-on-negative-enabled`.
 * @cssprop --jh-badge-color-background-negative - Background for `appearance="negative"`. Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-badge-color-text-negative - Text color for `appearance="negative"`. Defaults to `--jh-color-content-on-negative-enabled`.
 * @cssprop --jh-badge-color-background-neutral - Count background for `appearance="neutral"`. Defaults to `--jh-color-container-neutral-enabled`.
 * @cssprop --jh-badge-color-dot-neutral - Dot color for `appearance="neutral"` when no `count` is set. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-badge-color-text-neutral - Text color for `appearance="neutral"`. Defaults to `--jh-color-content-primary-enabled`.
 * 
 * @customElement jh-badge
 */
export class JhBadge extends JhElement {
  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }

      .badge {
        background: var(--jh-badge-color-background-enabled, var(--jh-badge-color-background-negative, var(--jh-color-content-negative-enabled)));
        color: var(--jh-badge-color-text-enabled, var(--jh-badge-color-text-negative, var(--jh-color-content-on-negative-enabled)));
        border-radius: var(--jh-badge-border-radius, var(--jh-border-radius-pill));
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
        background: var(--jh-badge-color-dot-neutral, var(--jh-color-content-secondary-enabled));
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
  }

  /** @protected */
  render() {
    let count;

    if (this.maxCount && this.count > this.maxCount) {
      count = `${this.maxCount}+`;
    } else if (typeof this.count === 'number' && !isNaN(this.count) && this.count >= 0) {
      count = this.count;
    }

    const classes = { badge: true, 'count-present': count !== undefined };

    return html`
      <span class=${classMap(classes)}>${count}</span>
    `;
  }
}
JhBadge.register('jh-badge', JhBadge);
