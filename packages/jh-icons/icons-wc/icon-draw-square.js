/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconDrawSquare extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M7 3.25a.75.75 0 0 1 .75.75v.5h8.75V4a.75.75 0 0 1 .75-.75h3A.75.75 0 0 1 21 4v3a.75.75 0 0 1-.75.75h-.75v8.75h.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-.75H7.75v.75A.75.75 0 0 1 7 21H4a.75.75 0 0 1-.75-.75v-3A.75.75 0 0 1 4 16.5h.5V7.75H4A.75.75 0 0 1 3.25 7V4A.75.75 0 0 1 4 3.25h3ZM4.75 19.5h1.5V18h-1.5v1.5Zm13.25 0h1.5V18H18v1.5ZM7.75 7a.75.75 0 0 1-.75.75H6v8.75h1a.75.75 0 0 1 .75.75V18h8.75v-.75a.75.75 0 0 1 .75-.75H18V7.75h-.75A.75.75 0 0 1 16.5 7V6H7.75v1Zm-3-.75h1.5v-1.5h-1.5v1.5Zm13.25 0h1.5v-1.5H18v1.5Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-draw-square', JhIconDrawSquare);