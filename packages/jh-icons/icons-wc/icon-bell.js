// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconBell extends LitElement {
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
          var(--jh-size-400)
        );
      }
      :host([size='small']) {
        --icon-size: var(
          --jh-icon-size-small,
          var(--jh-size-500)
        );
      }
      :host([size='medium']) {
        --icon-size: var(
          --jh-icon-size-medium,
          var(--jh-size-600)
        );
      }
      :host([size='large']) {
        --icon-size: var(
          --jh-icon-size-large,
          var(--jh-size-900)
        );
      }
      :host([size='x-large']) {
        --icon-size: var(
          --jh-icon-size-extra-large,
          var(--jh-size-1400)
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12 2a1.5 1.5 0 0 0-1.5 1.5v.659c-3.075.672-5 3.368-5 6.091v5.69l-1.78 1.78A.75.75 0 0 0 4.25 19h15.5a.75.75 0 0 0 .53-1.28l-1.78-1.78v-5.69c0-2.724-1.925-5.42-5-6.092V3.5A1.5 1.5 0 0 0 12 2Zm-5 8.25C7 7.893 8.936 5.5 12 5.5s5 2.393 5 4.75v6.31l.22.22.72.72H6.06l.72-.72.22-.22v-6.308ZM12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-bell', JhIconBell);