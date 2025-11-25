// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconLink extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M15.359 5.46a2.259 2.259 0 0 1 3.182 0 2.259 2.259 0 0 1 0 3.182l-4.243 4.242a2.259 2.259 0 0 1-3.182 0 .75.75 0 0 0-1.06 1.06 3.759 3.759 0 0 0 5.303 0L19.6 9.703a3.759 3.759 0 0 0 0-5.303 3.76 3.76 0 0 0-5.303 0l-2.12 2.12a.75.75 0 1 0 1.06 1.06l2.122-2.12Zm-5.657 5.656a2.259 2.259 0 0 1 3.182 0 .75.75 0 0 0 1.06-1.06 3.759 3.759 0 0 0-5.303 0L4.4 14.297a3.759 3.759 0 0 0 0 5.304 3.759 3.759 0 0 0 5.303 0l2.121-2.122a.75.75 0 0 0-1.06-1.06L8.64 18.54a2.26 2.26 0 0 1-3.182 0 2.259 2.259 0 0 1 0-3.181l4.243-4.243Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-link', JhIconLink);