/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconFileMagnifyingGlass extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M13 3.25c.048 0 .095.005.14.014h.01c.014.004.027.01.041.013.034.01.067.017.098.03.014.006.027.015.04.022.03.015.06.03.088.048l.014.01a.75.75 0 0 1 .1.083l5 5a.748.748 0 0 1 .219.53v10A1.75 1.75 0 0 1 17 20.75H7A1.75 1.75 0 0 1 5.25 19v-2.102c.468.207.972.348 1.5.409V19c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25V9.75H14A1.75 1.75 0 0 1 12.25 8V4.75H7a.25.25 0 0 0-.25.25v1.978c-.528.06-1.032.2-1.5.407V5c0-.966.784-1.75 1.75-1.75h6ZM7.352 8.192a3.95 3.95 0 0 1 3.272 6.162l2.058 2.058a.75.75 0 0 1-1.06 1.06l-2.059-2.057a3.95 3.95 0 1 1-2.212-7.223Zm0 1.5a2.45 2.45 0 1 0 0 4.9 2.45 2.45 0 0 0 0-4.9ZM13.75 8c0 .138.112.25.25.25h2.19l-2.44-2.44V8Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-file-magnifying-glass', JhIconFileMagnifyingGlass);