// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconClockRotateLeft extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M5.748 8.25a7.275 7.275 0 0 1 6.228-3.5c4.02 0 7.274 3.25 7.274 7.25A7.241 7.241 0 0 1 12 19.25c-3.582 0-6.366-2.72-7.288-5.487a.75.75 0 0 0-1.423.475C4.366 17.47 7.63 20.75 12 20.75A8.741 8.741 0 0 0 20.75 12c0-4.835-3.93-8.75-8.774-8.75A8.772 8.772 0 0 0 4.75 7.035V5.001a.75.75 0 1 0-1.5 0v4.75H8a.75.75 0 1 0 0-1.5H5.748Zm6.252-1a.75.75 0 0 1 .75.75v3.6l2.666 1.777a.75.75 0 1 1-.832 1.248l-3-2-.334-.223V8.001a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-clock-rotate-left', JhIconClockRotateLeft);