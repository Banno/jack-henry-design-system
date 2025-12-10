/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconFileCheckmark extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="m13 3.25.076.004a.743.743 0 0 1 .066.01h.005c.024.005.045.014.068.021.025.008.05.013.074.023.014.005.027.014.04.021.03.015.06.03.088.048l.014.01a.751.751 0 0 1 .1.083l5 5a.748.748 0 0 1 .219.53v10A1.75 1.75 0 0 1 17 20.75H7A1.75 1.75 0 0 1 5.25 19v-1.13c.45.3.982.422 1.5.364V19c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25V9.75H14A1.75 1.75 0 0 1 12.25 8V4.75H7a.25.25 0 0 0-.25.25v7.568l-.25.25-.41-.409a2.239 2.239 0 0 0-.84-.528V5c0-.966.783-1.75 1.75-1.75h6Zm-2.03 7.22a.75.75 0 1 1 1.06 1.06l-5 5-.056.052a.75.75 0 0 1-1.004-.052l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 4.47-4.47ZM13.75 8c0 .138.112.25.25.25h2.19l-2.44-2.44V8Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-file-checkmark', JhIconFileCheckmark);