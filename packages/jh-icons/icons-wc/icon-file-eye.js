/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconFileEye extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M13.076 3.254a.743.743 0 0 1 .071.01c.024.005.045.014.068.021.025.008.05.013.074.023.014.005.027.014.04.021.03.015.06.03.088.048l.014.01a.75.75 0 0 1 .1.083l5 5a.748.748 0 0 1 .219.53v10A1.75 1.75 0 0 1 17 20.75H7A1.75 1.75 0 0 1 5.25 19v-1.316a6.6 6.6 0 0 0 1.5.456V19c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25V9.75H14A1.75 1.75 0 0 1 12.25 8V4.75H7a.25.25 0 0 0-.25.25v3.86a6.599 6.599 0 0 0-1.5.455V5c0-.966.783-1.75 1.75-1.75h6l.076.004ZM8 10.25c2.503 0 3.825 1.514 5.03 2.72a.75.75 0 0 1 0 1.06c-1.205 1.206-2.527 2.72-5.03 2.72s-3.825-1.514-5.03-2.72a.75.75 0 0 1 0-1.06c1.205-1.206 2.527-2.72 5.03-2.72Zm0 1.5c-1.53 0-2.403.726-3.439 1.75C5.597 14.524 6.47 15.25 8 15.25s2.403-.726 3.437-1.75C10.403 12.476 9.53 11.75 8 11.75ZM8 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5.75-4c0 .138.112.25.25.25h2.19l-2.44-2.44V8Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-file-eye', JhIconFileEye);