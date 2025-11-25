// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css } from 'lit';
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
    let leftSlot = this.shadowRoot.querySelector('slot[name="jh-input-left"]');

    // insert fallback content in left slot if empty
    if (leftSlot && leftSlot.assignedElements().length === 0) {
      this.innerHTML +=
        '<jh-icon-magnifying-glass slot="jh-input-left" aria-hidden="true"></jh-icon-magnifying-glass>';
    }

    // set input type to search
    let inputEl = this.shadowRoot.querySelector('input');
    inputEl.setAttribute('type', 'search');
  }
}
customElements.define('jh-input-search', JhInputSearch);
