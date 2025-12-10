/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconLockOpen extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M6 1.75a4.75 4.75 0 0 1 4.75 4.75v3.25H20c.966 0 1.75.784 1.75 1.75v8A1.75 1.75 0 0 1 20 21.25H9a1.75 1.75 0 0 1-1.75-1.75v-8c0-.966.784-1.75 1.75-1.75h.25V6.5a3.25 3.25 0 1 0-6.5 0v6a.75.75 0 0 1-1.5 0v-6A4.75 4.75 0 0 1 6 1.75Zm3 9.5a.25.25 0 0 0-.25.25v8c0 .138.112.25.25.25h11a.25.25 0 0 0 .25-.25v-8a.25.25 0 0 0-.25-.25H9Zm5.5 1.25a2 2 0 0 1 1 3.73V18a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.77a2 2 0 0 1 1-3.73Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-lock-open', JhIconLockOpen);