/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import { html, css } from 'lit';
import { JhInput } from '../input/input.js';
import '@jack-henry/jh-icons/icons-wc/icon-chevron-up-small.js';
import '@jack-henry/jh-icons/icons-wc/icon-chevron-down-small.js';

/**
 * Input Trigger
 * @customElement jh-input-trigger
 */
export class JhInputTrigger extends JhInput {
  static get styles() {
    return [
      super.styles,
       css` 
       :host {

      }
    `,
    ];
  }

  static get properties() {
    return {
      /** Property description */
      open: { type: Boolean }
    };
  }

  constructor() {
    super();
    /** @type {boolean} */
    this.open = false;
  }

  renderRightSlot() {
    return html`
      ${this.open ? html`<slot name="jh-input-trigger-open"><jh-icon-chevron-up-small></jh-icon-chevron-up-small></slot>` : html`<slot name="jh-input-trigger-closed"><jh-icon-chevron-down-small></jh-icon-chevron-down-small></slot>`}
    `;
  }
}

customElements.define('jh-input-trigger', JhInputTrigger);