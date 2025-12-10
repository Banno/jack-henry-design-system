/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconQuestion extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M10.5 8c0-.643.213-.976.431-1.163.245-.21.618-.338 1.067-.337.466 0 .857.127 1.107.322.216.167.395.433.395.928 0 .134-.055.334-.234.615a5.23 5.23 0 0 1-.721.853c-.19.187-.345.332-.502.476-.111.102-.222.205-.345.323a4.166 4.166 0 0 0-.373.397 1.725 1.725 0 0 0-.187.284 1.21 1.21 0 0 0-.138.552v.03c.009.291.009.837.007 1.325l-.005.623-.001.192v.052l-.001.014v.004l1 .011 1 .011v-.072l.002-.194.005-.632c.001-.352.002-.756-.002-1.078l.079-.076c.06-.058.148-.14.25-.235.19-.175.425-.393.62-.588.334-.331.706-.738.998-1.196.29-.455.548-1.032.548-1.69 0-1.089-.446-1.947-1.168-2.507-.687-.535-1.546-.742-2.33-.743-.802-.001-1.678.224-2.371.818C8.91 5.933 8.5 6.85 8.5 8v.75h2V8Zm2.386 3.664.002-.002-.002.002ZM13.5 17a1.5 1.5 0 1 0-2.999.002A1.5 1.5 0 0 0 13.5 17Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-question', JhIconQuestion);