/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconMoneyCheckFast extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M21.25 8.25a.75.75 0 0 1 .742.856l-1 7a.75.75 0 0 1-.742.644h-13a.75.75 0 0 1-.742-.856l1-7 .031-.134a.75.75 0 0 1 .711-.51h13Zm-13.136 7H19.6l.786-5.5H8.9l-.786 5.5ZM18.5 13a.5.5 0 0 1 0 1h-1.75a.5.5 0 0 1 0-1h1.75ZM5 11.25a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5H5ZM19 11a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1h9ZM5.667 8.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h2.917Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-money-check-fast', JhIconMoneyCheckFast);