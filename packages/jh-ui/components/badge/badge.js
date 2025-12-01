// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
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
      min-width: var(--jh-size-200);
      height: var(--jh-size-200);
      display: flex;
      justify-content: center;
    }
    .count-present {
      font: var(--jh-font-helper-medium);
      height: var(--jh-size-400);
      padding: var(--jh-space-0) var(--jh-space-100);
      width: auto;
    }
    `;
  }

  static get properties() {
    return {
      /** Number to show within the badge. If no `count` is supplied, Badge will render as a dot.*/
      count: { type: String },
      /** Sets the max count to show. Appends `+` to the `max-count` when value is exceeded. */
      maxCount: { type: String, attribute: 'max-count' },
    };
  }

  constructor() {
    super();
    /** @type {?string} */
    this.count = null;
    /** @type {?number} */
    this.maxCount = null;
  }

  render() {
    let count;

    if (this.maxCount && Number(this.count) > this.maxCount) {
      count = `${this.maxCount}+`;
    } else if (/^[0-9]+$/.test(this.count)) {
      count = this.count;
    }

    return html`
      <span class=${ifDefined(count ? 'count-present' : null)}>${count}</span>
    `;
  }
}
customElements.define('jh-badge', JhBadge);
