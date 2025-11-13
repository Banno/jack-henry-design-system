// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconBoltSlash extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M13.082 2.287A.75.75 0 0 1 13.6 3v7.35h3.75a.75.75 0 0 1 .606 1.191l-2.105 2.896 4.184 4.184-.707.707L4.672 4.672l.707-.707 3.382 3.382 3.482-4.788a.75.75 0 0 1 .839-.272ZM9.835 8.42l2.265 2.265v-5.38L9.835 8.422Zm3.43 3.43 1.512 1.512 1.1-1.513h-2.613Zm.32 3.15 1.075 1.073-3.904 5.367A.75.75 0 0 1 9.4 21v-7.35H5.65a.75.75 0 0 1-.607-1.192L7.57 8.985l1.074 1.074-1.521 2.091h3.027a.75.75 0 0 1 .75.75v5.794L13.586 15Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-bolt-slash', JhIconBoltSlash);