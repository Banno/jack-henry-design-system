/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconMoneyBillFast extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M3.299 15.72a.75.75 0 0 1 0 1.5h-.52a.75.75 0 0 1 0-1.5h.52ZM14.14 6.78a.72.72 0 0 1 .132.012h7.35c.413 0 .688.331.613.738l-1.643 8.94a.935.935 0 0 1-.886.738h-6.993a.754.754 0 0 1-.132.013H5.896a.75.75 0 0 1 0-1.5h6.686a.82.82 0 0 1 .132.012h5c.004-.051.01-.104.02-.157.135-.737.86-1.34 1.61-1.34.053 0 .106.003.157.01l.826-4.492c-.053.006-.107.01-.161.01-.75 0-1.253-.603-1.117-1.34.01-.053.023-.105.039-.156H14.27a.754.754 0 0 1-.13.011h-3.505a.75.75 0 0 1 0-1.5h3.506Zm-.926 2.397c1.543 0 2.568 1.23 2.289 2.749-.28 1.518-1.758 2.749-3.3 2.749-1.544 0-2.57-1.231-2.29-2.75.279-1.517 1.757-2.748 3.3-2.748ZM6.41 12.74a.75.75 0 0 1 0 1.5H4.551a.75.75 0 0 1 0-1.5H6.41Zm6.533-2.089c-.715 0-1.4.572-1.53 1.275-.129.703.347 1.274 1.062 1.274.715 0 1.4-.571 1.529-1.274.129-.703-.346-1.274-1.06-1.275ZM7.825 9.76a.75.75 0 0 1 0 1.5h-3.95a.75.75 0 0 1 0-1.5h3.95Zm.514-2.98a.751.751 0 0 1 0 1.5H6.41a.75.75 0 0 1 0-1.5h1.929Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-money-bill-fast', JhIconMoneyBillFast);