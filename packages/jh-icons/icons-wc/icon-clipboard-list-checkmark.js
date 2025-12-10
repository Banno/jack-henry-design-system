/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconClipboardListCheckmark extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M12 2c.927 0 1.732.504 2.163 1.25H15.5c.69 0 1.25.56 1.25 1.25h1.75A1.5 1.5 0 0 1 20 6v14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20.5V6a1.5 1.5 0 0 1 1.5-1.5h1.75c0-.69.56-1.25 1.25-1.25h1.337A2.495 2.495 0 0 1 12 2ZM5.5 20.5h13V6h-1.75v.75c0 .69-.56 1.25-1.25 1.25h-7a1.25 1.25 0 0 1-1.243-1.122L7.25 6.75V6H5.5v14.5Zm4.558-4.492a.75.75 0 0 1 1.01 1.11l-2.126 1.937a.75.75 0 0 1-1.051-.042l-.938-1a.75.75 0 1 1 1.094-1.026l.43.46 1.58-1.44ZM16.5 17.25a.75.75 0 0 1 0 1.5H13a.75.75 0 0 1 0-1.5h3.5Zm-6.442-4.742a.75.75 0 0 1 1.01 1.11l-2.126 1.937a.75.75 0 0 1-1.051-.042l-.938-1a.75.75 0 1 1 1.094-1.026l.43.46 1.58-1.44ZM16.5 13.75a.75.75 0 0 1 0 1.5H13a.75.75 0 0 1 0-1.5h3.5Zm-6.442-4.742a.75.75 0 0 1 1.01 1.11l-2.126 1.937a.75.75 0 0 1-1.051-.042l-.938-1a.75.75 0 1 1 1.094-1.026l.43.46 1.58-1.44ZM16.5 10.25a.75.75 0 0 1 0 1.5H13a.75.75 0 0 1 0-1.5h3.5ZM12 3.5a1 1 0 0 0-.957.714.75.75 0 0 1-.719.536H8.75V6.5h6.5V4.75h-1.574a.75.75 0 0 1-.719-.536A1 1 0 0 0 12 3.5Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-clipboard-list-checkmark', JhIconClipboardListCheckmark);