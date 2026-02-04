// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * A Badge is a visual indicator that represents numbers, such as counters. It also supports a dot-only variant.
 * 
 * [Badge Storybook Documentation](https://release-v2--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-badge--docs)
 * 
 * @cssprop --jh-badge-border-radius - The badge border radius. Defaults to `--jh-border-radius-pill`.
 * @cssprop --jh-badge-color-background-enabled - The badge background color. Defaults to `--jh-color-content-brand-enabled`. 
 * @cssprop --jh-badge-color-text-enabled - The badge text color. Defaults to `--jh-color-content-on-brand-enabled`.
 * 
 * @customElement jh-badge
 */
export class JhBadge extends LitElement {
  static get styles() {
    return css`
    :host {
      display: inline-flex;
    }
    span {
      background: var(--jh-badge-color-background-enabled, var(--jh-color-content-brand-enabled));
      color: var(--jh-badge-color-text-enabled, var(--jh-color-content-on-brand-enabled));
      border-radius: var(--jh-badge-border-radius, var(--jh-border-radius-pill));
      min-width: var(--jh-dimension-200);
      height: var(--jh-dimension-200);
      display: flex;
      justify-content: center;
    }
    .count-present {
      font-family: var(--jh-font-helper-medium-font-family);
      font-weight: var(--jh-font-helper-medium-font-weight);
      font-size: var(--jh-font-helper-medium-font-size);
      line-height: var(--jh-font-helper-medium-line-height);
      height: var(--jh-dimension-400);
      padding: var(--jh-dimension-0) var(--jh-dimension-100);
      width: auto;
    }
    `;
  }

  static get properties() {
    return {
      /** Number to show within the badge. If no `count` is supplied, Badge will render as a dot.*/
      count: { type: Number },
      /** Sets the max count to show. Appends `+` to the `max-count` when value is exceeded. */
      maxCount: { type: Number, attribute: 'max-count' },
    };
  }

  constructor() {
    super();
    /** @type {?number} */
    this.count = null;
    /** @type {?number} */
    this.maxCount = null;
  }

  render() {
    let count;

    if (this.maxCount && this.count > this.maxCount) {
      count = `${this.maxCount}+`;
    } else if (typeof this.count === 'number' && !isNaN(this.count) && this.count >= 0) {
      count = this.count;
    }

    return html`
      <span class=${ifDefined(count !== undefined ? 'count-present' : null)}>${count}</span>
    `;
  }
}
customElements.define('jh-badge', JhBadge);
