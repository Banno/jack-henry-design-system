// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconCirclePlug extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M20.25 12a8.25 8.25 0 1 0-13.797 6.107c.29.264.866.785 1.878 1.176.798.308 1.555.25 2.08-.023.501-.261.839-.736.839-1.438v-1.384c-1.937-.324-3.594-1.893-3.503-4.133V9.75a.75.75 0 0 1 .75-.75H9.75V6.75a.75.75 0 0 1 1.5 0V9h1.5V6.75a.75.75 0 0 1 1.5 0V9h1.247a.75.75 0 0 1 .75.75v2.554c.088 2.17-1.543 3.794-3.497 4.131v1.387c0 1.275-.662 2.255-1.646 2.767-.96.5-2.172.533-3.314.092a7.192 7.192 0 0 1-2.346-1.465 9.79 9.79 0 0 1-1.938-2.425A9.71 9.71 0 0 1 2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75c0 4.567-3.14 8.4-7.378 9.459a.75.75 0 1 1-.364-1.455A8.254 8.254 0 0 0 20.25 12Zm-11.003.32V10.5h5.5v1.854c.066 1.462-1.187 2.647-2.75 2.647-1.559 0-2.819-1.13-2.751-2.647v-.033Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-circle-plug', JhIconCirclePlug);