/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconDocumentUnlock extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M16 3.25c.966 0 1.75.784 1.75 1.75v5.02a3.7 3.7 0 0 0-1.5-1.041V5a.25.25 0 0 0-.25-.25H5a.25.25 0 0 0-.25.25v14c0 .138.112.25.25.25h9.168a2.75 2.75 0 0 0 1.068 1.5H5A1.75 1.75 0 0 1 3.25 19V5c0-.966.784-1.75 1.75-1.75h11Zm-1.031 6.5c1.521 0 2.719 1.263 2.719 2.775v1.162h2.75c.966 0 1.75.784 1.75 1.75V18.5a1.75 1.75 0 0 1-1.75 1.75h-3.625a1.75 1.75 0 0 1-1.75-1.75v-3.063a1.75 1.75 0 0 1 1.124-1.633v-1.279c0-.724-.565-1.275-1.218-1.275-.654 0-1.219.551-1.219 1.275v3.037a.75.75 0 0 1-1.5 0v-3.037c0-1.512 1.197-2.775 2.719-2.775Zm1.844 5.438a.25.25 0 0 0-.25.25V18.5c0 .138.111.25.25.25h3.625a.25.25 0 0 0 .25-.25v-3.063a.25.25 0 0 0-.25-.25h-3.625ZM10 15.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h3Zm0-4a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h3Zm3-4a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h6Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-document-unlock', JhIconDocumentUnlock);