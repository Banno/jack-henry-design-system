/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconShieldExclamation extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="m12.368 2.347 8 4.5.382.215V7.5c0 6.425-2.064 10.015-4.246 11.993a9.608 9.608 0 0 1-2.985 1.856 7.775 7.775 0 0 1-1.298.376l-.086.013-.028.004-.008.001-.003.001h-.002A48.223 48.223 0 0 1 12 21l.093.744-.093.012-.093-.012L12 21c-.088.706-.093.742-.094.744h-.005l-.008-.002-.028-.004-.086-.013a7.775 7.775 0 0 1-1.299-.376 9.61 9.61 0 0 1-2.984-1.856C5.314 17.516 3.25 13.925 3.25 7.5v-.438l.382-.215 8-4.5L12 2.14l.368.207ZM4.754 7.936c.09 5.79 1.976 8.838 3.75 10.446a8.106 8.106 0 0 0 2.516 1.566c.34.131.62.21.81.255.069.017.127.027.17.035.043-.008.101-.018.17-.035.19-.045.47-.124.81-.255a8.107 8.107 0 0 0 2.516-1.566c1.774-1.608 3.659-4.655 3.75-10.446L12 3.86 4.754 7.936ZM12 14.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-8.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-shield-exclamation', JhIconShieldExclamation);