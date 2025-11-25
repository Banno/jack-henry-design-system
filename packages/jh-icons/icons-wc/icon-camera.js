// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconCamera extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M8 4.25h-.464l-.207.415-.793 1.585H4A1.75 1.75 0 0 0 2.25 8v9c0 .966.784 1.75 1.75 1.75h16A1.75 1.75 0 0 0 21.75 17V8A1.75 1.75 0 0 0 20 6.25h-2.537l-.792-1.585-.207-.415H8Zm-.33 3.086.794-1.586h7.072l.793 1.586.207.414H20a.25.25 0 0 1 .25.25v9a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25V8A.25.25 0 0 1 4 7.75h3.464l.207-.414ZM9.75 12a2.25 2.25 0 1 1 4.5.001 2.25 2.25 0 0 1-4.5 0ZM12 8.25a3.75 3.75 0 1 0 0 7.501 3.75 3.75 0 0 0 0-7.5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-camera', JhIconCamera);