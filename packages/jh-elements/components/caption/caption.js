// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Caption
 *
 * @customElement forge-caption
 *
 * @slot default - Use to insert the caption text.
 *
 * @cssprop --forge-caption-color-text-enabled - The text color. Defaults to `--jh-color-content-secondary-enabled`.
 */
export class ForgeCaption extends JhElement {
  static get styles() {
    return css`
      :host {
        display: block;
        margin: 0;
        color: var(--forge-caption-color-text-enabled, var(--jh-color-content-secondary-enabled));
        word-break: break-word;
        font-family: var(--jh-font-helper-regular-font-family);
        font-weight: var(--jh-font-helper-regular-font-weight);
        font-size: var(--jh-font-helper-regular-font-size);
        line-height: var(--jh-font-helper-regular-line-height);
      }
    `;
  }

  render() {
    return html`<slot></slot>`;
  }
}
ForgeCaption.register('forge-caption', ForgeCaption);
