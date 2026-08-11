// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { JhInput } from '../input/input.js';
import '@jack-henry/jh-icons/icons-wc/icon-magnifying-glass.js';

/**
 * The input search component provides a single-line text field for search queries.
 * 
 * [Input Search Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-input-search--docs)
 * 
 * @customElement jh-input-search
 */
export class JhInputSearch extends JhInput {
  static get styles() {
    return [
      super.styles,
      css`        
        /* removes native clear search button */
        input::-webkit-search-cancel-button {
          display: none;
        }
      `,
    ];
  }

  /** @protected */
  firstUpdated() {
    super.firstUpdated();

    // set input type to search
    let inputEl = this.shadowRoot.querySelector('input');
    inputEl.setAttribute('type', 'search');
  }

  /** @protected */
  renderLeftSlot() {
    if (this.hideLeftSlot) return null;
    
    return html`
      <slot name="jh-input-left" @slotchange=${this._handleSlotChange}>
        <jh-icon-magnifying-glass aria-hidden="true" size="x-small"></jh-icon-magnifying-glass>
      </slot>
    `;
  }
}
JhInputSearch.register('jh-input-search', JhInputSearch);
