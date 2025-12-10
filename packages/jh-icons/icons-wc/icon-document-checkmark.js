/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconDocumentCheckmark extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M16 3.25c.966 0 1.75.784 1.75 1.75v4.568l-1.5 1.5V5a.25.25 0 0 0-.25-.25H5a.25.25 0 0 0-.25.25v14c0 .138.112.25.25.25h11a.25.25 0 0 0 .25-.25v-1.568l1.5-1.5V19A1.75 1.75 0 0 1 16 20.75H5A1.75 1.75 0 0 1 3.25 19V5c0-.966.784-1.75 1.75-1.75h11Zm-6 12a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h3Zm8.97-4.78a.75.75 0 0 1 1.06 1.06l-5 5-.056.052a.745.745 0 0 1-.618.154.748.748 0 0 1-.386-.206l-2-2a.75.75 0 0 1 1.06-1.06l1.47 1.47 4.47-4.47Zm-8.97.78a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h3Zm3-4a.75.75 0 0 1 0 1.5H7a.75.75 0 1 1 0-1.5h6Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-document-checkmark', JhIconDocumentCheckmark);