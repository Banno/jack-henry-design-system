// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconCircleInfinity extends LitElement {
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
          var(--jh-size-400)
        );
      }
      :host([size='small']) {
        --icon-size: var(
          --jh-icon-size-small,
          var(--jh-size-500)
        );
      }
      :host([size='medium']) {
        --icon-size: var(
          --jh-icon-size-medium,
          var(--jh-size-600)
        );
      }
      :host([size='large']) {
        --icon-size: var(
          --jh-icon-size-large,
          var(--jh-size-900)
        );
      }
      :host([size='x-large']) {
        --icon-size: var(
          --jh-icon-size-extra-large,
          var(--jh-size-1400)
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0ZM12 2.25c-5.385 0-9.75 4.366-9.75 9.75 0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75c0-5.384-4.365-9.75-9.75-9.75Zm-3.6 7c-.8 0-1.565.329-2.13.8-.555.462-1.02 1.154-1.02 1.95 0 .797.465 1.49 1.02 1.952.565.47 1.33.799 2.13.799.805 0 1.548-.333 2.197-.74.479-.299.952-.667 1.403-1.036.451.37.924.737 1.402 1.037.65.406 1.393.739 2.198.739.8 0 1.565-.329 2.13-.8.555-.462 1.02-1.154 1.02-1.95 0-.797-.465-1.49-1.02-1.952-.565-.47-1.33-.798-2.13-.798-.805 0-1.548.333-2.198.739-.478.299-.95.667-1.402 1.037-.451-.37-.924-.738-1.403-1.037-.65-.406-1.392-.74-2.197-.74Zm1.402 2.011c.332.208.668.46 1.017.74a11.1 11.1 0 0 1-1.017.739c-.55.344-1.007.51-1.402.51-.4 0-.835-.171-1.17-.45-.345-.288-.48-.596-.48-.8 0-.203.135-.51.48-.798.335-.28.77-.451 1.17-.451.395 0 .852.167 1.402.51Zm4.395 1.479c-.332-.208-.668-.46-1.016-.74.348-.279.684-.53 1.016-.739.55-.343 1.008-.51 1.403-.51.4 0 .835.171 1.17.45.345.288.48.596.48.8 0 .203-.135.51-.48.798-.335.28-.77.452-1.17.452-.395 0-.852-.167-1.403-.511Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-circle-infinity', JhIconCircleInfinity);