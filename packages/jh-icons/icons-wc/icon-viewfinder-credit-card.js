/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconViewfinderCreditCard extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M21.25 17.498a.75.75 0 0 1 .75.75v.957l.002.001v1.046a1.75 1.75 0 0 1-1.75 1.749h-1.046V22h-.954a.75.75 0 0 1 0-1.5h1.5v.001h.5a.25.25 0 0 0 .25-.25v-.503H20.5v-1.5a.75.75 0 0 1 .75-.75ZM2.751 17.5a.75.75 0 0 1 .75.75v1.5h-.002v.5c0 .138.112.25.25.25h2.003a.75.75 0 0 1 0 1.5H3.749a1.75 1.75 0 0 1-1.75-1.75v-1.046h.002v-.954a.75.75 0 0 1 .75-.75ZM17.758 7.252c.813 0 1.485.655 1.485 1.478v6.552c0 .823-.672 1.479-1.485 1.479H5.99a1.483 1.483 0 0 1-1.485-1.479V8.73c0-.822.673-1.478 1.485-1.478h11.768ZM6.005 15.261h11.738v-3.072H6.005v3.072Zm6.828-.752H6.749v-1h6.084v1Zm-6.828-4.504h11.738V8.752H6.005v1.253ZM5.75 2a.75.75 0 0 1 0 1.5h-2a.25.25 0 0 0-.25.25v2.003a.75.75 0 0 1-1.5 0V3.75C2 2.784 2.784 2 3.75 2h2Zm14 .001h.503c.966 0 1.75.784 1.75 1.751v1.046L22 4.797v.954a.75.75 0 0 1-1.5 0v-1.5h.003v-.5a.25.25 0 0 0-.25-.25h-1.046V3.5h-.957a.75.75 0 0 1 0-1.5h1.5v.001Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-viewfinder-credit-card', JhIconViewfinderCreditCard);