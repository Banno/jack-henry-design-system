// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconMessagesPlu extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M3.75 2.375A1.75 1.75 0 0 0 2 4.125v14.59l1.227-1.01 4.042-3.33h8.981a1.75 1.75 0 0 0 1.75-1.75v-8.5a1.75 1.75 0 0 0-1.75-1.75H3.75Zm-.25 1.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v8.5a.25.25 0 0 1-.25.25H6.73l-.207.171-3.023 2.49V4.126Zm4.5 12.5v-.75h1.5v.75c0 .138.112.25.25.25h7.504l.202.154 3.044 2.329V8.125a.25.25 0 0 0-.25-.25h-.75v-1.5h.75c.966 0 1.75.784 1.75 1.75v14.268l-1.206-.922-4.048-3.096H9.75A1.75 1.75 0 0 1 8 16.625Zm-.75-8.25a.75.75 0 0 1 .75-.75h1.25v-1.25a.75.75 0 0 1 1.5 0v1.25H12a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0v-1.25H8a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-messages-plus', JhIconMessagesPlu);