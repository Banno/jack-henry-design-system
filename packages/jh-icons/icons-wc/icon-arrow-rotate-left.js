/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconArrowRotateLeft extends LitElement {
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
      :host(:not([size])) {
        --icon-size: var(
          --jh-icon-size-medium,
          var(--jh-dimension-600)
        );
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
      :host([size='xx-large']) {
        --icon-size: var(
          --jh-icon-size-extra-extra-large,
          var(--jh-dimension-2100)
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

    /** @type {'x-small'|'small'|'medium'|'large'|'x-large'|'xx-large'} */
    this.size = 'medium';
  }

  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M11.976 3.25A8.77 8.77 0 0 0 4.75 7.036V5a.75.75 0 0 0-1.5 0v4.75H8a.75.75 0 0 0 0-1.5H5.75a7.28 7.28 0 0 1 6.227-3.5c4.02 0 7.274 3.248 7.274 7.25A7.24 7.24 0 0 1 12 19.25c-3.582 0-6.365-2.72-7.288-5.487a.75.75 0 0 0-1.423.474C4.366 17.47 7.63 20.75 12 20.75A8.74 8.74 0 0 0 20.75 12c0-4.834-3.93-8.75-8.775-8.75"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrow-rotate-left', JhIconArrowRotateLeft);