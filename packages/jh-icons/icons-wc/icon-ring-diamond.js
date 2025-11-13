// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconRingDiamond extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M19.5 14.5a7.503 7.503 0 0 0-5.024-7.082l1.853-2.256.302-.366-.203-.43-.91-1.935-.204-.43H8.685l-.203.43-.91 1.936-.203.429.302.366 1.853 2.256A7.5 7.5 0 1 0 19.5 14.5ZM9.13 4.576l2.03 2.47a7.583 7.583 0 0 1 1.68 0l2.03-2.47-.507-1.076H9.637L9.13 4.576ZM12 8.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-3.25 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM12 9.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-ring-diamond', JhIconRingDiamond);