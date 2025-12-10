/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconPencilLine extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M8.194 2.759a.75.75 0 0 1 .984-.398l4.655 1.977a.75.75 0 0 1 .397.983l-.942 2.218.001.001-4.538 10.69-.201.474a.75.75 0 0 1-.279.333L6.426 20.25H20.5a.75.75 0 0 1 0 1.5H4.516a.743.743 0 0 1-.359-.096.75.75 0 0 1-.4-.05.752.752 0 0 1-.445-.551l-.845-4.48a.751.751 0 0 1 .047-.431l5.68-13.383Zm-4.212 13.76.595 3.15 2.68-1.76.111-.265-3.273-1.391-.113.265Zm.7-1.645 3.273 1.389 3.366-7.93-3.274-1.389-3.365 7.93Zm3.95-9.31 3.275 1.39.65-1.528-3.275-1.39-.65 1.527Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-pencil-line', JhIconPencilLine);