// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconDocumentPen extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M5 3.25A1.75 1.75 0 0 0 3.25 5v14c0 .967.784 1.75 1.75 1.75h11A1.75 1.75 0 0 0 17.75 19v-3.582l-1.5 1.5v2.083a.25.25 0 0 1-.25.25H5a.25.25 0 0 1-.25-.25V5A.25.25 0 0 1 5 4.75h11a.25.25 0 0 1 .25.25v.876l.967-.967c.145-.145.304-.266.474-.363A1.75 1.75 0 0 0 16 3.251H5ZM6.25 8A.75.75 0 0 1 7 7.25h6a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8ZM7 11.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H7Zm11.278-5.28a.75.75 0 0 1 1.06 0l2.34 2.34a.75.75 0 0 1 0 1.06l-6.724 6.723a.75.75 0 0 1-.384.206l-2.923.584a.75.75 0 0 1-.882-.882l.584-2.924a.75.75 0 0 1 .205-.383l6.724-6.724Zm-5.502 7.624-.32 1.598 1.598-.32 6.032-6.033-1.278-1.278-6.032 6.033ZM7 15.251a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H7Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-document-pen', JhIconDocumentPen);