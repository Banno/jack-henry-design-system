// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconEnvelopeOpenDocument extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M6.75 2.938a.75.75 0 0 0-.75.75v4.1L2.649 9.65a.752.752 0 0 0-.399.663v10c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75v-10a.747.747 0 0 0-.399-.663L18 7.79v-4.1a.75.75 0 0 0-.75-.75H6.75ZM18 9.505v1.617l1.456-.809L18 9.505Zm-1.5 2.45V4.438h-9v7.517l4.5 2.5 4.5-2.5ZM6 11.122V9.505l-1.456.808L6 11.122Zm14.25.466-7.886 4.38a.75.75 0 0 1-.728 0l-7.886-4.38v7.975h16.5v-7.975Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-envelope-open-document', JhIconEnvelopeOpenDocument);