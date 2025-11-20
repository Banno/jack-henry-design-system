/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconScissor extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M20.309 7.007c.522-.055.765.63.325.916L9.956 14.857a3.024 3.024 0 1 1-1.795-1.219l9.834-6.386 2.314-.245ZM8.75 15.75a1.525 1.525 0 1 0-2.557 1.662A1.525 1.525 0 0 0 8.75 15.75Zm11.883.325c.44.287.197.973-.325.917l-2.314-.245-4.556-2.959 1.837-1.192 5.358 3.48ZM4.937 5.772a3.025 3.025 0 0 1 5.072 3.294l-.053.076 1.647 1.07-1.836 1.192L8.16 10.36a3.014 3.014 0 0 1-2.336-.406 3.025 3.025 0 0 1-.888-4.183Zm3.366.368a1.525 1.525 0 1 0-1.66 2.558 1.525 1.525 0 0 0 1.66-2.558Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-scissors', JhIconScissor);