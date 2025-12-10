/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconLifePreserver extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M21.033 10A9.263 9.263 0 0 0 14 2.968 1 1 0 0 0 13 2h-2a1 1 0 0 0-1 .967A9.263 9.263 0 0 0 2.968 10 1 1 0 0 0 2 11v2a1 1 0 0 0 .967.998A9.263 9.263 0 0 0 10 21.034 1 1 0 0 0 11 22h2a1 1 0 0 0 1-.967A9.263 9.263 0 0 0 21.032 14 1 1 0 0 0 22 13v-2a1 1 0 0 0-.967-1ZM10.861 4.334a7.814 7.814 0 0 1 2.278 0l-.61 2.443a5.31 5.31 0 0 0-1.058 0l-.61-2.443Zm-1.455.362a7.772 7.772 0 0 0-4.711 4.71l2.443.61a5.268 5.268 0 0 1 2.877-2.877l-.61-2.443Zm-5.073 6.166a7.815 7.815 0 0 0 0 2.278l2.443-.61a5.313 5.313 0 0 1 0-1.058l-2.443-.61Zm.362 3.733a7.772 7.772 0 0 0 4.71 4.711l.61-2.443a5.268 5.268 0 0 1-2.877-2.877l-2.443.61Zm6.166 5.073a7.815 7.815 0 0 0 2.278 0l-.61-2.443a5.322 5.322 0 0 1-1.058 0l-.61 2.443Zm3.733-.362a7.772 7.772 0 0 0 4.711-4.71l-2.443-.61a5.268 5.268 0 0 1-2.877 2.877l.61 2.443Zm5.073-6.166a7.801 7.801 0 0 0 0-2.278l-2.443.61a5.294 5.294 0 0 1 0 1.059l2.443.609Zm-.362-3.733a7.772 7.772 0 0 0-4.71-4.711l-.61 2.443a5.267 5.267 0 0 1 2.877 2.877l2.443-.61ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-life-preserver', JhIconLifePreserver);