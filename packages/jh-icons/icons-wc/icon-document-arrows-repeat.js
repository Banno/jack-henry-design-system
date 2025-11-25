// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconDocumentArrowsRepeat extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M4.375 4a.75.75 0 0 1 .75-.75h13.75a.75.75 0 0 1 .75.75v3.79l.82-.82a.75.75 0 0 1 1.06 1.061l-2.125 2.125a.75.75 0 0 1-1.06 0l-2.125-2.125a.75.75 0 1 1 1.06-1.06l.87.87V4.75H5.875V10a.75.75 0 0 1-1.5 0V4Zm14.5 9.284a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-.75.75H5.125a.75.75 0 0 1-.75-.75v-4.215l-.82.82a.75.75 0 1 1-1.06-1.06L4.62 13.42a.75.75 0 0 1 1.06 0l2.125 2.125a.75.75 0 0 1-1.06 1.061l-.87-.87v3.515h12.25v-5.217a.75.75 0 0 1 .75-.75Zm-8.45.967a.75.75 0 0 0 0 1.5h3.15a.75.75 0 0 0 0-1.5h-3.15Zm-.75-2.55a.75.75 0 0 1 .75-.75h3.15a.75.75 0 0 1 0 1.5h-3.15a.75.75 0 0 1-.75-.75Zm.75-3.95a.75.75 0 0 0 0 1.5h3.15a.75.75 0 0 0 0-1.5h-3.15Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-document-arrows-repeat', JhIconDocumentArrowsRepeat);