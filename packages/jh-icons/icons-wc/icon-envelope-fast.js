/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconEnvelopeFast extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M3.299 15.632a.75.75 0 0 1 0 1.5h-.52a.75.75 0 0 1 0-1.5h.52ZM14.14 6.779a.72.72 0 0 1 .132.013h6.363c.414 0 .689.33.614.738l-1.628 8.852a.935.935 0 0 1-.886.737h-6.022a.745.745 0 0 1-.132.013H5.896a.75.75 0 0 1 0-1.5h6.686a.76.76 0 0 1 .13.012h5.546l.99-5.386-6.201 3.08c-.25.124-.525.123-.729 0l-5.403-3.282c-.325-.198-.374-.646-.107-1.002.266-.356.746-.484 1.072-.286l5.075 3.082 6.603-3.278.056-.304H14.27a.754.754 0 0 1-.13.011h-3.505a.75.75 0 0 1 0-1.5h3.506ZM6.41 12.74a.75.75 0 0 1-.002 1.5H4.552a.75.75 0 0 1 0-1.5H6.41Zm-.817-2.98a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1 0-1.5h2.25Zm2.745-2.98a.751.751 0 0 1 0 1.5H6.41a.75.75 0 0 1 0-1.5h1.929Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-envelope-fast', JhIconEnvelopeFast);