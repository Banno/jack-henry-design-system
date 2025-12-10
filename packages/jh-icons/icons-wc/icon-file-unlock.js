/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconFileUnlock extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M4.969 10.75c1.521 0 2.718 1.263 2.718 2.775v1.162h2.75c.967 0 1.75.784 1.75 1.75V19.5a1.75 1.75 0 0 1-1.75 1.75H6.813a1.75 1.75 0 0 1-1.75-1.75v-3.063a1.75 1.75 0 0 1 1.125-1.633v-1.279c0-.724-.566-1.275-1.22-1.275-.653 0-1.218.551-1.218 1.275v3.037a.75.75 0 0 1-1.5 0v-3.037c0-1.512 1.197-2.775 2.719-2.775ZM13 3.25c.048 0 .095.005.14.014h.01c.014.004.027.01.041.013.034.01.067.017.098.03.014.006.027.015.04.022.03.015.06.03.088.048l.014.01a.75.75 0 0 1 .1.083l5 5a.748.748 0 0 1 .219.53v10A1.75 1.75 0 0 1 17 20.75h-4.115c.192-.375.303-.8.303-1.25v-.25H17a.25.25 0 0 0 .25-.25V9.75H14A1.75 1.75 0 0 1 12.25 8V4.75H7a.25.25 0 0 0-.25.25v5.208a3.64 3.64 0 0 0-1.5-.447V5c0-.966.784-1.75 1.75-1.75h6ZM6.812 16.188a.25.25 0 0 0-.25.25V19.5c0 .138.112.25.25.25h3.625a.25.25 0 0 0 .25-.25v-3.063a.25.25 0 0 0-.25-.25H6.813ZM13.75 8c0 .138.112.25.25.25h2.19l-2.44-2.44V8Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-file-unlock', JhIconFileUnlock);