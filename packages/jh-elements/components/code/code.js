// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Code
 *
 * @customElement forge-code
 *
 * @slot default - Use to insert the code text.
 *
 * @cssprop --forge-code-color-text-enabled - The text color. Defaults to `--jh-color-content-primary-enabled`.
 */
export class ForgeCode extends JhElement {
  static get styles() {
    return css`
      :host {
        margin: 0;
        color: var(--forge-code-color-text-enabled, var(--jh-color-content-primary-enabled));
        display: inline;
        word-break: break-word;
      }
      :host([display="block"]) {
        display: block;
        white-space: pre-wrap;
        word-break: break-word;
      }
      :host([size="1"]) {
        font-family: var(--jh-font-code-regular-1-font-family);
        font-weight: var(--jh-font-code-regular-1-font-weight);
        font-size: var(--jh-font-code-regular-1-font-size);
        line-height: var(--jh-font-code-regular-1-line-height);
      }
      :host([size="2"]) {
        font-family: var(--jh-font-code-regular-2-font-family);
        font-weight: var(--jh-font-code-regular-2-font-weight);
        font-size: var(--jh-font-code-regular-2-font-size);
        line-height: var(--jh-font-code-regular-2-line-height);
      }
    `;
  }

  static get properties() {
    return {
      /** Sets the visual scale of the code text. Defaults to `1`. */
      size: { type: Number, reflect: true },
      /**
       * Controls whether the text renders inline with adjacent text or as a standalone block that preserves whitespace and formatting. Defaults to 'inline'.
       */
      display: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    /** @type {1|2} */
    this.size = 1;
    /** @type {'inline'|'block'} */
    this.display = 'inline';
  }

  render() {
    return html`<slot></slot>`;
  }
}
ForgeCode.register('forge-code', ForgeCode);