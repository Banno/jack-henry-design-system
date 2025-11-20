// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconMoneyBillHeart extends LitElement {
  /** @type {ElementInternals} */
  #internals;

  static get styles() {
    return css`
      :host {
        fill: var(
          --jh-icon-color-fill,
          var(--jh-color-content-secondary-enabled)
        );
        width: var(--icon-size);
        height: var(--icon-size);
        display: inline-block;
      }
      :host([size='x-small']) {
        --icon-size: var(
          --jh-icon-size-extra-small,
          var(--jh-dimension-400)
        );
      }
      :host([size='small']) {
        --icon-size: var(
          --jh-icon-size-small,
          var(--jh-dimension-500)
        );
      }
      :host([size='medium']) {
        --icon-size: var(
          --jh-icon-size-medium,
          var(--jh-dimension-600)
        );
      }
      :host([size='large']) {
        --icon-size: var(
          --jh-icon-size-large,
          var(--jh-dimension-900)
        );
      }
      :host([size='x-large']) {
        --icon-size: var(
          --jh-icon-size-extra-large,
          var(--jh-dimension-1400)
        );
      }
      svg {
        width: 100%;
        height: 100%;
      }
    `;
  }

  static get properties() {
    return {
      /**
      * The size of the icon.
      */
      size: {
        type: String, reflect: true 
      }
    }
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#internals.role = 'graphics-symbol';
    this.#internals.ariaHidden = 'true';

    /** @type {'x-small'|'small'|'medium'|'large'|'x-large'} */
    this.size = 'medium';
  }

  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M3 6.25a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75H3Zm.75 8.271V9.48a1.504 1.504 0 0 0 1.729-1.73h13.042a1.504 1.504 0 0 0 1.729 1.73v5.042a1.504 1.504 0 0 0-1.729 1.729H5.479a1.504 1.504 0 0 0-1.729-1.729Zm11.85-3.764C15.6 12.715 12 15 12 15s-3.6-2.285-3.6-4.243c0-2.285 3.6-2.285 3.6-.326 0-1.959 3.6-1.959 3.6.326Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-money-bill-heart', JhIconMoneyBillHeart);