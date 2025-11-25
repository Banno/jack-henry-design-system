// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconMessagesFilled extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M2 4.125c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v8.5a1.75 1.75 0 0 1-1.75 1.75H7.27l-4.043 3.33L2 18.714V4.124Zm6 11.75h8.25a3.25 3.25 0 0 0 3.25-3.25v-6.25h.75c.966 0 1.75.784 1.75 1.75v14.268l-1.206-.922-4.048-3.096H9.75A1.75 1.75 0 0 1 8 16.625v-.75Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-messages-filled', JhIconMessagesFilled);