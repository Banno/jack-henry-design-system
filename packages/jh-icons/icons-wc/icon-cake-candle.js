/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconCakeCandle extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12 2s-1.5 1.334-1.5 2.667C10.5 5.409 11.171 6 12 6c.826 0 1.5-.591 1.5-1.333C13.5 3.334 12 2 12 2Zm.75 7.25V7h-1.5v2.25H6A1.75 1.75 0 0 0 4.25 11v9.75h15.5v-5.203a.77.77 0 0 0 0-.094V11A1.75 1.75 0 0 0 18 9.25h-5.25Zm5.5 5.913V11a.25.25 0 0 0-.25-.25H6a.25.25 0 0 0-.25.25v4.114c.335.3.764.459 1.134.397.36-.061.951-.39 1.404-1.748a.75.75 0 0 1 1.423 0c.772 2.316 3.805 2.316 4.577 0a.75.75 0 0 1 1.423 0c.452 1.357 1.041 1.686 1.412 1.747.354.06.77-.077 1.126-.347Zm-12.5 1.68v2.407h12.5v-2.397a2.71 2.71 0 0 1-1.374.137c-.756-.126-1.414-.58-1.931-1.36-1.529 1.827-4.363 1.827-5.891 0-.516.779-1.171 1.233-1.92 1.36a2.636 2.636 0 0 1-1.385-.147Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-cake-candle', JhIconCakeCandle);