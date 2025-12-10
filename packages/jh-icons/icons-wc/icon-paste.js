/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconPaste extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M10.43 2.005c.666.06 1.238.445 1.555.996h1.262l.077.004a.75.75 0 0 1 .628.493h.797c.966 0 1.75.785 1.75 1.751v3.254h3.255a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75h-10a.75.75 0 0 1-.75-.75v-3.258H5.752c-.966 0-1.75-.785-1.751-1.75V5.248c0-.966.784-1.75 1.751-1.75h.792A.748.748 0 0 1 7.246 3h1.269a2 2 0 0 1 1.735-1.004l.18.008Zm.075 18.498h8.499v-10.5h-8.5v10.5ZM5.75 4.999a.25.25 0 0 0-.25.25v10.995a.25.25 0 0 0 .25.251h3.254V9.253a.75.75 0 0 1 .75-.75h5.244V5.249a.25.25 0 0 0-.25-.25h-.752v1.753a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75V4.999H5.75Zm4.499-1.502a.504.504 0 0 0-.493.402.75.75 0 0 1-.736.602H7.996v1.5h4.501v-1.5H11.48a.75.75 0 0 1-.736-.602.504.504 0 0 0-.493-.402Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-paste', JhIconPaste);