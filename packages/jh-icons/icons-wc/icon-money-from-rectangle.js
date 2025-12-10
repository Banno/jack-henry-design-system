/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconMoneyFromRectangle extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M20.5 8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-.564l.803 4.595a.751.751 0 0 1-.739.879H4a.752.752 0 0 1-.74-.88L4.064 11H3.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h17ZM6.889 9.5c-.201.215-.479.35-.785.35-.106 0-.21-.018-.308-.048l-.692 3.964c.608 0 1.106.528 1.106 1.174l-.002.034h11.583l-.002-.034c0-.646.498-1.174 1.105-1.174h.002L18.202 9.8a1.036 1.036 0 0 1-1.092-.3H6.89Zm5.11.25c1.258 0 2.593.835 2.593 2.208 0 1.373-1.335 2.208-2.593 2.208s-2.592-.835-2.592-2.208c0-1.373 1.334-2.208 2.592-2.208Zm0 1.5c-.775 0-1.092.471-1.092.708s.317.708 1.092.708c.776 0 1.093-.471 1.093-.708s-.317-.708-1.093-.708Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-money-from-rectangle', JhIconMoneyFromRectangle);