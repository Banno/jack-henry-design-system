/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconBoxArchive extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M20.102 4.005A1 1 0 0 1 21 5v2l-.005.103a1 1 0 0 1-.893.892L20 8h-.25v9a2.25 2.25 0 0 1-2.25 2.25h-11A2.25 2.25 0 0 1 4.25 17V8H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16l.102.005ZM5.75 17c0 .414.336.75.75.75h11a.75.75 0 0 0 .75-.75V8H5.75v9Zm7.75-8a2 2 0 0 1 .204 3.99L13.5 13h-3l-.204-.01A2 2 0 0 1 10.5 9h3Zm-3 1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-6-4h15v-1h-15v1Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-box-archive', JhIconBoxArchive);