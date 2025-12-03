/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconDocumentLock extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M16 3.25c.966 0 1.75.784 1.75 1.75v4.543a3.65 3.65 0 0 0-1.5-.71V5a.25.25 0 0 0-.25-.25H5a.25.25 0 0 0-.25.25v14c0 .138.112.25.25.25h6.168a2.75 2.75 0 0 0 1.068 1.5H5A1.75 1.75 0 0 1 3.25 19V5c0-.966.784-1.75 1.75-1.75h11Zm-.531 6.5c1.521 0 2.719 1.263 2.719 2.775v1.332c.59.281 1 .883 1 1.58V18.5a1.75 1.75 0 0 1-1.75 1.75h-3.625a1.75 1.75 0 0 1-1.75-1.75v-3.063c0-.566.27-1.068.687-1.388v-1.524c0-1.512 1.197-2.775 2.719-2.775Zm-1.656 5.438a.25.25 0 0 0-.25.25V18.5c0 .138.111.25.25.25h3.624a.25.25 0 0 0 .25-.25v-3.063a.25.25 0 0 0-.25-.25h-3.625ZM10 15.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h3Zm5.469-4c-.654 0-1.219.551-1.219 1.275v1.162h2.438v-1.162c0-.724-.566-1.275-1.22-1.275Zm-5.469 0a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h3Zm3-4a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h6Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-document-lock', JhIconDocumentLock);