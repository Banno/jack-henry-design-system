/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconQrCode extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M9.5 13.004a1.5 1.5 0 0 1 1.5 1.5v5.5a1.5 1.5 0 0 1-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5v-5.5a1.5 1.5 0 0 1 1.5-1.5h5.5Zm5.75 6.246v2h-2v-2h2Zm6 2h-2v-2h2v2ZM4 20.004h5.5v-5.5H4v5.5Zm15.25-.754h-4v-2l2-.001V15.25h-2v-2h2v2l2-.001V13.25h2v3.999h-2v2.001Zm-11.5-.996h-2v-2h2v2Zm7.5-3.004v2l-2-.001v-2l2 .001ZM9.5 2.5A1.5 1.5 0 0 1 11 4v5.5A1.5 1.5 0 0 1 9.5 11H4a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 4 2.5h5.5Zm10.5 0A1.5 1.5 0 0 1 21.5 4v5.5A1.5 1.5 0 0 1 20 11h-5.5A1.5 1.5 0 0 1 13 9.5V4a1.5 1.5 0 0 1 1.5-1.5H20Zm-16 7h5.5V4H4v5.5Zm10.5 0H20V4h-5.5v5.5ZM7.75 7.75h-2v-2h2v2Zm10.5 0h-2v-2h2v2Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-qr-code', JhIconQrCode);