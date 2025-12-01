// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconArrowsRepeat extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="m7 3.94.53.53 4 4a.75.75 0 1 1-1.06 1.06L7.75 6.81V15c0 1.782.65 2.532 1.166 2.876A2.319 2.319 0 0 0 10 18.25h.007a.75.75 0 0 1-.007 1.5V19l-.001.75h-.024a1.89 1.89 0 0 1-.175-.011 3.815 3.815 0 0 1-1.716-.615C7.1 18.468 6.25 17.218 6.25 15V6.81L3.53 9.53a.75.75 0 0 1-1.06-1.06l4-4L7 3.94Zm7 .31a.75.75 0 0 0-.007 1.5H14l.058.004a2.317 2.317 0 0 1 1.026.37C15.6 6.468 16.25 7.218 16.25 9v8.19l-2.72-2.72a.75.75 0 0 0-1.06 1.06l4 4 .53.53.53-.53 4-4a.75.75 0 1 0-1.06-1.06l-2.72 2.72V9c0-2.218-.85-3.468-1.834-4.124A3.817 3.817 0 0 0 14.2 4.26a2.659 2.659 0 0 0-.175-.01l-.015-.001h-.009L14 5v-.75Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrows-repeat', JhIconArrowsRepeat);