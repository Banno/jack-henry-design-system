/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconScannerImage extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M8.944 1.996a.75.75 0 0 1 1.059-.052l9.842 8.904c.576.521.905 1.263.905 2.04V19A1.75 1.75 0 0 1 19 20.75H5A1.75 1.75 0 0 1 3.25 19v-4.125a.75.75 0 0 1 .75-.75h15.25v-1.237c0-.353-.15-.69-.411-.927L8.997 3.056a.75.75 0 0 1-.053-1.06ZM4.75 19c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25v-3.375H4.75V19Zm1.813-2.312a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM15 10.75a.75.75 0 0 1 0 1.5H4.25a.75.75 0 0 1 0-1.5H15Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-scanner-image', JhIconScannerImage);