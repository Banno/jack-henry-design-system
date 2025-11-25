// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconHeart extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M2.414 8.571a5.323 5.323 0 0 1 5.323-5.323c1.748 0 3.294.843 4.263 2.142a5.305 5.305 0 0 1 4.263-2.142 5.323 5.323 0 0 1 5.323 5.323c0 4.741-2.354 8.036-4.666 10.12a17.99 17.99 0 0 1-3.17 2.274 15.719 15.719 0 0 1-1.355.68 4.989 4.989 0 0 1-.084.036l-.024.01-.007.003h-.002l-.001.001-.277-.697-.277.697-.003-.001-.007-.003-.024-.01a10.554 10.554 0 0 1-.386-.172c-.257-.12-.62-.3-1.052-.544A17.99 17.99 0 0 1 7.08 18.69c-2.312-2.083-4.666-5.378-4.666-10.119ZM12 20.998l-.276.697a.75.75 0 0 0 .552 0L12 20.998Zm0-.818.062-.03c.226-.105.554-.268.95-.491a16.49 16.49 0 0 0 2.904-2.083c2.106-1.898 4.17-4.817 4.17-9.005A3.82 3.82 0 0 0 12.7 7.196a.75.75 0 0 1-1.4 0A3.82 3.82 0 0 0 3.914 8.57c0 4.188 2.064 7.107 4.17 9.005a16.47 16.47 0 0 0 2.904 2.083 14.254 14.254 0 0 0 1.012.52Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-heart', JhIconHeart);