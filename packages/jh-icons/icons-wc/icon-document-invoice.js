// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconDocumentInvoice extends LitElement {
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
          var(--jh-size-400)
        );
      }
      :host([size='small']) {
        --icon-size: var(
          --jh-icon-size-small,
          var(--jh-size-500)
        );
      }
      :host([size='medium']) {
        --icon-size: var(
          --jh-icon-size-medium,
          var(--jh-size-600)
        );
      }
      :host([size='large']) {
        --icon-size: var(
          --jh-icon-size-large,
          var(--jh-size-900)
        );
      }
      :host([size='x-large']) {
        --icon-size: var(
          --jh-icon-size-extra-large,
          var(--jh-size-1400)
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M4.25 5c0-.966.784-1.75 1.75-1.75h12c.966 0 1.75.784 1.75 1.75v14A1.75 1.75 0 0 1 18 20.75H6A1.75 1.75 0 0 1 4.25 19V5ZM6 4.75a.25.25 0 0 0-.25.25v14c0 .139.112.25.25.25h12a.25.25 0 0 0 .25-.25V5a.25.25 0 0 0-.25-.25H6ZM7.25 8A.75.75 0 0 1 8 7.25h3a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8ZM8 10.25a.75.75 0 0 0-.75.75v6c0 .415.336.75.75.75h8a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75H8Zm4.25 1.5h-3.5v1.5h3.5v-1.5Zm1.5 1.5v-1.5h1.5v1.5h-1.5Zm-1.5 1.5h-3.5v1.5h3.5v-1.5Zm1.5 1.5v-1.5h1.5v1.5h-1.5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-document-invoice', JhIconDocumentInvoice);