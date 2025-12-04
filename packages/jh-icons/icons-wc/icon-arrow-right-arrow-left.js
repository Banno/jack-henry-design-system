/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconArrowRightArrowLeft extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="m20.06 7-.53.53-4 4a.75.75 0 0 1-1.06-1.06l2.72-2.72H9c-1.782 0-2.532.65-2.876 1.166A2.317 2.317 0 0 0 5.75 10v.007A.75.75 0 0 1 4.25 10H5l-.75-.001v-.024a1.848 1.848 0 0 1 .011-.175 3.817 3.817 0 0 1 .615-1.716C5.532 7.1 6.78 6.25 9 6.25h8.19l-2.72-2.72a.75.75 0 0 1 1.06-1.06l4 4 .53.53Zm-.31 7a.75.75 0 0 0-1.5-.007V14l-.005.058a2.314 2.314 0 0 1-.37 1.026c-.343.516-1.093 1.166-2.875 1.166H6.81l2.72-2.72a.75.75 0 1 0-1.06-1.06l-4 4-.53.53.53.53 4 4a.75.75 0 0 0 1.06-1.06l-2.72-2.72H15c2.218 0 3.468-.85 4.124-1.834a3.815 3.815 0 0 0 .624-1.849l.002-.042V14H19h.75Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrow-right-arrow-left', JhIconArrowRightArrowLeft);