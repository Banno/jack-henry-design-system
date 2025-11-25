// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconZelle extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12.887 20H11.27c-.151 0-.275-.144-.275-.322v-1.843H8.38c-.209 0-.379-.2-.379-.444V15.9c0-.099.029-.196.08-.274l4.633-6.922H8.587c-.21 0-.38-.2-.38-.444V6.61c0-.245.17-.445.38-.445h2.407V4.322c0-.177.123-.322.275-.322h1.617c.151 0 .274.145.274.322v1.843h2.46c.21 0 .38.2.38.445v1.424a.497.497 0 0 1-.08.274l-4.662 6.987h4.363c.209 0 .379.199.379.444v1.651c0 .245-.17.444-.38.444l-2.458.001v1.843c0 .178-.123.322-.275.322" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-zelle', JhIconZelle);