// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Paragraph
 *
 * @customElement forge-paragraph
 *
 * @slot default - Use to insert the paragraph text.
 */
export class ForgeParagraph extends JhElement {
  static get styles() {
    return css`
      :host {
        display: block;
        margin: 0;
        color: var(--jh-color-content-primary-enabled);
        word-break: break-word;
      }
      :host([size="1"]) {
        font-family: var(--jh-font-body-regular-1-font-family);
        font-weight: var(--jh-font-body-regular-1-font-weight);
        font-size: var(--jh-font-body-regular-1-font-size);
        line-height: var(--jh-font-body-regular-1-line-height);
      }
      :host([size="2"]) {
        font-family: var(--jh-font-body-regular-2-font-family);
        font-weight: var(--jh-font-body-regular-2-font-weight);
        font-size: var(--jh-font-body-regular-2-font-size);
        line-height: var(--jh-font-body-regular-2-line-height);
      }
    `;
  }

  static get properties() {
    return {
      /** Sets the visual scale of the paragraph text. Defaults to `1`.*/
      size: { type: Number, reflect: true },
    };
  }

  constructor() {
    super();
    /** @type {1|2} */
    this.size = 1;
  }

  render() {
    return html`<p><slot></slot></p>`;
  }
}
ForgeParagraph.register('forge-paragraph', ForgeParagraph);
