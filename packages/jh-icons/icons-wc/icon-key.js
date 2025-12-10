/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconKey extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M14.75 4a5.25 5.25 0 1 1 0 10.5c-.37 0-.729-.041-1.077-.114l-1.687 1.688a.75.75 0 0 1-.53.22h-.954v.953a.75.75 0 0 1-.75.75H8.5v1.253a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3c0-.2.08-.392.223-.533L9.62 10.37A5.25 5.25 0 0 1 14.75 4Zm0 1.5a3.75 3.75 0 0 0-3.578 4.876.75.75 0 0 1-.189.758L5.5 16.562V18.5H7v-1.253a.75.75 0 0 1 .75-.75h1.252v-.953a.75.75 0 0 1 .75-.75h1.393l1.767-1.768.077-.067a.75.75 0 0 1 .671-.12A3.75 3.75 0 1 0 14.75 5.5ZM15.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-key', JhIconKey);