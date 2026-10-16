// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Heading
 *
 * @customElement forge-heading
 *
 * @slot default - Use to insert the heading text.
 *
 * @cssprop --forge-heading-color-text-enabled - The text color. Defaults to `--jh-color-content-primary-enabled`.
 */
export class ForgeHeading extends JhElement {
  static get styles() {
    return css`
      :host {
        display: block;
        margin: 0;
        color: var(--forge-heading-color-text-enabled, var(--jh-color-content-primary-enabled));
        word-break: break-word;
      }
      :host([level="1"]) {
        font-family: var(--jh-font-heading-bold-6-font-family);
        font-weight: var(--jh-font-heading-bold-6-font-weight);
        font-size: var(--jh-font-heading-bold-6-font-size);
        line-height: var(--jh-font-heading-bold-6-line-height);
      }
      :host([level="2"]) {
        font-family: var(--jh-font-heading-bold-5-font-family);
        font-weight: var(--jh-font-heading-bold-5-font-weight);
        font-size: var(--jh-font-heading-bold-5-font-size);
        line-height: var(--jh-font-heading-bold-5-line-height);
      }
      :host([level="3"]) {
        font-family: var(--jh-font-heading-bold-4-font-family);
        font-weight: var(--jh-font-heading-bold-4-font-weight);
        font-size: var(--jh-font-heading-bold-4-font-size);
        line-height: var(--jh-font-heading-bold-4-line-height);
      }
      :host([level="4"]) {
        font-family: var(--jh-font-heading-bold-3-font-family);
        font-weight: var(--jh-font-heading-bold-3-font-weight);
        font-size: var(--jh-font-heading-bold-3-font-size);
        line-height: var(--jh-font-heading-bold-3-line-height);
      }
      :host([level="5"]) {
        font-family: var(--jh-font-heading-bold-2-font-family);
        font-weight: var(--jh-font-heading-bold-2-font-weight);
        font-size: var(--jh-font-heading-bold-2-font-size);
        line-height: var(--jh-font-heading-bold-2-line-height);
      }
      :host([level="6"]) {
        font-family: var(--jh-font-heading-bold-1-font-family);
        font-weight: var(--jh-font-heading-bold-1-font-weight);
        font-size: var(--jh-font-heading-bold-1-font-size);
        line-height: var(--jh-font-heading-bold-1-line-height);
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Sets the heading's place in the document outline, similar to `<h1>`–`<h6>`. Defaults to `2`.
       */
      level: { type: Number, reflect: true },
    };
  }

  constructor() {
    super();
    this.internals.role = 'heading';
    /** @type {1|2|3|4|5|6} */
    this.level = 2;
  }

  updated(changedProperties) {
    if (changedProperties.has('level')) {
      this.internals.ariaLevel = String(this.level);
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}
ForgeHeading.register('forge-heading', ForgeHeading);
