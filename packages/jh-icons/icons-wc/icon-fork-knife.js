// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconForkKnife extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M15.968 4.406c-.505.505-.843 1.196-.843 1.97v3.864l.52 1.386h1.23V3.79c-.312.13-.627.337-.907.617Zm-2.295 6.233.702 1.873v7.364a2 2 0 1 0 4 0v-17a.75.75 0 0 0-.75-.75c-.987 0-1.982.484-2.718 1.22-.745.745-1.282 1.804-1.282 3.03v4h.75-.75c0 .09.016.18.048.263Zm2.202 9.237v-6.75h1v6.75a.5.5 0 0 1-1 0ZM7.625 8.9a.5.5 0 0 1-.5-.5V5.376a.75.75 0 1 0-1.5 0v4.5c0 1.04.49 1.967 1.25 2.562v7.688c0 .967.784 1.75 1.75 1.75h.5a1.75 1.75 0 0 0 1.75-1.75v-7.688a3.244 3.244 0 0 0 1.25-2.562v-4.5a.75.75 0 0 0-1.5 0V8.4a.5.5 0 0 1-1 0V5.376a.75.75 0 1 0-1.5 0V8.4a.5.5 0 0 1-.5.5Zm0 1.5c.473 0 .908-.164 1.25-.439a1.992 1.992 0 0 0 1.685.392 1.75 1.75 0 0 1-3.37 0c.14.03.286.047.435.047Zm1.75 2.727h-1v7c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-7Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-fork-knife', JhIconForkKnife);