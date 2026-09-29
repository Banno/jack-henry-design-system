// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css } from 'lit';
import { JhInput } from '../input/input.js';

/**
 * The input url component provides a single-line text field for capturing URLs.
 * 
 * [Input URL Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-input-url--docs)
 * 
 * @customElement jh-input-url
 */
export class JhInputUrl extends JhInput {
  static get styles() {
    return [
      super.styles,
      css`        
        /* removes safari autofill button */
        input::-webkit-textfield-decoration-container {
          display: none;
        }
      `,
    ];
  }

  /** @protected */
  firstUpdated() {
    super.firstUpdated();
    let inputEl = this.shadowRoot.querySelector('input');
    inputEl.setAttribute('type', 'url');
  }
}
JhInputUrl.register('jh-input-url', JhInputUrl);