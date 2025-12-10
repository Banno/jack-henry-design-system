/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconClipboardCheckmark extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M12 2.25c.927 0 1.732.504 2.163 1.25h1.087c.605 0 1.109.43 1.225 1h1.275a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-1.5 1.5H6.25a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5h1.275c.116-.57.62-1 1.225-1h1.087A2.495 2.495 0 0 1 12 2.25ZM6.25 19h11.5V6H16.5v1a1.25 1.25 0 0 1-1.122 1.243l-.128.007h-6.5a1.25 1.25 0 0 1-1.243-1.122L7.5 7V6H6.25v13Zm8.184-8.53a.751.751 0 0 1 1.061 1.06l-3.95 3.95-.007.005-.013.016a.75.75 0 0 1-1.06 0L8.47 13.506a.75.75 0 0 1 1.06-1.06l1.464 1.463 3.44-3.44ZM12 3.75a1 1 0 0 0-.957.714.75.75 0 0 1-.719.536H9v1.75h6V5h-1.324a.75.75 0 0 1-.719-.536A1 1 0 0 0 12 3.75Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-clipboard-checkmark', JhIconClipboardCheckmark);