// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconMoneyCheckCircleXmark extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M3.25 7A.75.75 0 0 1 4 6.25h16a.75.75 0 0 1 .75.75v2.316a5.997 5.997 0 0 0-1.5-.88V7.75H4.75v7.5h6.38c.113.53.294 1.032.536 1.5H4a.75.75 0 0 1-.75-.75V7ZM6.5 9.5h6.531a6.029 6.029 0 0 0-.905 1H6v-1h.5Zm2 2.5h2.841a5.95 5.95 0 0 0-.258 1H8v-1h.5Zm5.25 2a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM17 9.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm-1.643 3.107a.555.555 0 0 1 .786 0l.857.857.857-.857a.555.555 0 1 1 .786.786l-.857.857.857.857a.556.556 0 0 1-.786.786L17 14.786l-.857.857a.556.556 0 0 1-.786-.786l.857-.857-.857-.857a.556.556 0 0 1 0-.786Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-money-check-circle-xmark', JhIconMoneyCheckCircleXmark);