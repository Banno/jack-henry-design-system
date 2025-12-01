// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconSplit extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12 4.5a.75.75 0 0 1 .75.75h-1.5A.75.75 0 0 1 12 4.5Zm5.245 12.445c-.043-1.217-.344-2.183-.793-2.989-.48-.859-1.112-1.502-1.686-2.047l-.265-.251H14.5v-.001c-1.055-.992-1.75-1.647-1.75-2.907V5.251h-1.5V8.75c0 1.26-.695 1.915-1.75 2.907a85.34 85.34 0 0 0-.266.252c-.574.545-1.206 1.188-1.686 2.047-.45.806-.75 1.772-.793 2.989L5.53 15.72a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.213 1.213c.043-.955.279-1.668.601-2.245.364-.653.857-1.168 1.408-1.691l.298-.278c.488-.453 1.02-.946 1.436-1.557.417.61.948 1.104 1.436 1.557l.298.278c.55.523 1.044 1.038 1.408 1.69.322.578.558 1.29.601 2.246L14.53 15.72a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.225 1.225Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-split', JhIconSplit);