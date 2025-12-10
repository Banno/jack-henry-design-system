/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconImageLandscape extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M2.75 16.5a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 .75-.75Zm18.5 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h1.25v-1.25a.75.75 0 0 1 .75-.75Zm-7.75-5.56 2.5-2.5 4.53 4.53a.75.75 0 0 1-1.06 1.06L16 10.56l-6.599 6.6a.75.75 0 0 1-1.06-1.061L12.44 12 9 8.56l-4.47 4.47a.75.75 0 1 1-1.06-1.06L9 6.44l4.5 4.5ZM4.75 4a.75.75 0 0 1 0 1.5H3.5v1.25a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 2.75 4h2Zm16.5 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5.5h-1.25a.75.75 0 0 1 0-1.5h2Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-image-landscape', JhIconImageLandscape);