/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconArrowLeftFromSquare extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M13.334 4.75a.583.583 0 0 0-.584.583V7a.75.75 0 0 1-1.5 0V5.333c0-1.15.933-2.083 2.084-2.083h6.332c1.151 0 2.084.933 2.084 2.083v13.333a2.084 2.084 0 0 1-2.084 2.084h-6.332a2.083 2.083 0 0 1-2.084-2.084V17a.75.75 0 0 1 1.5 0v1.666c0 .323.261.584.584.584h6.332a.583.583 0 0 0 .584-.584V5.334a.583.583 0 0 0-.584-.584h-6.332ZM8.53 7.47a.75.75 0 0 1 0 1.06l-2.72 2.72H16a.75.75 0 0 1 0 1.5H5.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4-.53-.53.53-.53 4-4a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrow-left-from-square', JhIconArrowLeftFromSquare);