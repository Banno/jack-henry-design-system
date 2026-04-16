// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { JhInput } from '../input/input.js';
import '@jack-henry/jh-icons/icons-wc/icon-magnifying-glass.js';

/**
 * Input Search
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

  firstUpdated() {
    super.firstUpdated();

    // set input type to search
    let inputEl = this.shadowRoot.querySelector('input');
    inputEl.setAttribute('type', 'search');
  }

  renderLeftSlot() {
    if (this.hideLeftSlot) return null;
    
    return html`
      <slot name="jh-input-left" @slotchange=${this._handleSlotChange}>
        <jh-icon-magnifying-glass aria-hidden="true"></jh-icon-magnifying-glass>
      </slot>
    `;
  }
}
customElements.define('jh-input-search', JhInputSearch);
