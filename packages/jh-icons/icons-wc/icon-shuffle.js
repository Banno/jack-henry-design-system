/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconShuffle extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M16.47 13.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06L17.69 17H14.5c-1.246 0-2.07-.782-2.646-1.67l-.012-.021c.313-.54.576-1.108.805-1.648.149.312.301.599.466.854.456.704.883.985 1.387.985h3.188l-1.22-1.22a.75.75 0 0 1 0-1.06Zm0-8.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H14.5c-.503 0-.93.28-1.38.982-.46.72-.827 1.695-1.259 2.793-.413 1.049-.885 2.207-1.552 3.097-.69.92-1.644 1.628-3 1.628H5.39l-.077-.004A.75.75 0 0 1 5.39 15.5h1.92c.74 0 1.294-.355 1.798-1.028.527-.704.934-1.67 1.358-2.746.404-1.028.831-2.178 1.391-3.052C12.43 7.782 13.254 7 14.5 7h3.19l-1.22-1.22a.75.75 0 0 1 0-1.06ZM7 7c1.409 0 2.42.685 3.162 1.608.06.074.114.152.17.229-.274.544-.514 1.12-.726 1.654a6.36 6.36 0 0 0-.613-.943C8.456 8.878 7.84 8.5 7 8.5H5.39a.75.75 0 0 1-.077-1.496L5.391 7H7Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-shuffle', JhIconShuffle);