/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconBook extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M8.5 2.75a.75.75 0 0 1 .75.75v1.292h4.346a.75.75 0 0 1 .75.75v.795l3.8-.808a.75.75 0 0 1 .89.577l2.435 11.454h-.001l.393 1.85a.75.75 0 0 1-.577.889l-4.41.937a.75.75 0 0 1-.89-.578l-1.64-7.717v7.56a.75.75 0 0 1-.75.75h-5a.731.731 0 0 1-.058-.003l-.038.002h-5a.75.75 0 0 1-.75-.75v-17a.75.75 0 0 1 .75-.75h5Zm.846 14.895v2.106h3.5v-2.107h-3.5ZM4.25 19.75h3.5v-2.093h-3.5v2.093Zm12.81-1.254.237 1.117 2.943-.626-.237-1.116-2.943.625Zm-1.712-8.057 1.4 6.591 2.943-.626-1.401-6.59-2.942.624ZM4.25 16.157h3.5V7.843h-3.5v8.314Zm5.096-.012h3.5V9.884h-3.5v6.26Zm5.435-8.368.253 1.194 2.943-.625-.252-1.194-2.944.625Zm-5.435.607h3.5V6.292h-3.5v2.092ZM4.25 6.343h3.5V4.25h-3.5v2.093Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-books', JhIconBook);