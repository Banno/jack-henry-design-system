/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconVolume extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M11.512 4.715a.751.751 0 0 1 1.238.57v13.43a.75.75 0 0 1-1.238.57l-3.29-2.82H5a.75.75 0 0 1-.75-.75v-7.43a.75.75 0 0 1 .75-.75h3.223l3.289-2.82Zm5.208 2.092a.75.75 0 0 1 1.06 0 7.344 7.344 0 0 1 0 10.385.75.75 0 1 1-1.06-1.06 5.845 5.845 0 0 0 0-8.265.75.75 0 0 1 0-1.06ZM8.988 8.853a.75.75 0 0 1-.488.181H5.75v5.932H8.5c.179 0 .352.064.488.18l2.262 1.939V6.914l-2.262 1.94Zm5.482-.152a.75.75 0 0 1 1.06 0 4.871 4.871 0 0 1 0 6.889.75.75 0 1 1-1.06-1.06 3.371 3.371 0 0 0 0-4.768.75.75 0 0 1 0-1.06Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-volume', JhIconVolume);