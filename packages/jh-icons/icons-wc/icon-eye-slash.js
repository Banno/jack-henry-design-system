/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconEyeSlash extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="m4.672 4.673.708-.707 2.956 2.956c1.06-.42 2.261-.671 3.664-.671 4.354 0 6.76 2.427 9.066 4.753l.464.466a.75.75 0 0 1 0 1.061l-.464.467c-1.094 1.103-2.21 2.23-3.546 3.108l2.515 2.515-.707.708L4.672 4.673ZM6.48 7.895c-1.336.88-2.452 2.005-3.546 3.109l-.464.466a.75.75 0 0 0 0 1.061l.464.467C5.24 15.324 7.646 17.75 12 17.75c1.403 0 2.604-.252 3.664-.672l-1.176-1.176A8.57 8.57 0 0 1 12 16.25c-3.65 0-5.635-1.933-7.941-4.25 1.166-1.172 2.25-2.245 3.507-3.02L6.48 7.895Zm2.812 2.812a3 3 0 0 0 4 4.001l-4-4Zm.22-2.609 1.195 1.195a3 3 0 0 1 4 4l1.727 1.727c1.258-.775 2.341-1.848 3.507-3.02-2.306-2.316-4.29-4.25-7.941-4.25a8.57 8.57 0 0 0-2.488.348Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-eye-slash', JhIconEyeSlash);