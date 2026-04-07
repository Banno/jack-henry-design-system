// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { JhElement } from '../element/element.js';

/**
 * @cssprop --jh-badge-border-radius - The badge border radius. Defaults to `--jh-border-radius-pill`.
 * @cssprop --jh-badge-color-background-enabled - The badge background color. Defaults to `--jh-color-content-negative-enabled`. 
 * @cssprop --jh-badge-color-text-enabled - The badge text color. Defaults to `--jh-color-content-on-negative-enabled`.
 * 
 * @customElement jh-badge
 */
export class JhBadge extends JhElement {
  static get styles() {
    return css`
    :host {
      display: inline-flex;
    }
    span {
      background: var(--jh-badge-color-background-enabled, var(--jh-color-content-negative-enabled));
      color: var(--jh-badge-color-text-enabled, var(--jh-color-content-on-negative-enabled));
      border-radius: var(--jh-badge-border-radius, var(--jh-border-radius-pill));
      min-width: var(--jh-dimension-200);
      height: var(--jh-dimension-200);
      display: flex;
      justify-content: center;
    }
    .count-present {
      font-family: var(--jh-font-helper-bold-font-family);
      font-weight: var(--jh-font-helper-bold-font-weight);
      font-size: var(--jh-font-helper-bold-font-size);
      line-height: var(--jh-font-helper-bold-line-height);
      height: var(--jh-dimension-400);
      padding: var(--jh-dimension-0) var(--jh-dimension-100);
      width: auto;
    }
    `;
  }

  static get properties() {
    return {
      /** Number to show within the badge. If no `count` is supplied, Badge will render as a dot.*/
      count: { type: String },
      /** Sets the max count to show. Appends `+` to the `max-count` when value is exceeded. */
      maxCount: { type: Number, attribute: 'max-count' },
    };
  }

  constructor() {
    super();
    /** @type {?string} */
    this.count = null;
    /** @type {?number} */
    this.maxCount = 99;
  }

  // example deprecation warnings
  connectedCallback() {
    super.connectedCallback();
    // Example of a migration warning for a deprecated token
    this.migrationWarning({
      component: 'jh-badge',
      type: 'token',
      name: '--jh-size-200',
      message: 'The "--jh-size-200" token is deprecated and will be replaced by `--jh-dimension-200` in v2. Please review the migration guide for more information.',
      url: 'https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/what-s-new-v2-release--docs#deprecated-token'
    });
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
JhBadge.register('jh-badge', JhBadge);
