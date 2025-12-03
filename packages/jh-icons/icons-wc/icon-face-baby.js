/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconFaceBaby extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M5.5 12a6.5 6.5 0 0 1 6.732-6.495c-.037.489-.128.766-.214.93-.1.193-.224.293-.446.439a.77.77 0 0 1-.221.088c-.1.025-.204.038-.292.039a.75.75 0 0 0-1.309.5c0 .533.41.791.62.88.227.094.475.12.68.12.41 0 .935-.105 1.344-.373.286-.187.672-.46.953-.996.193-.37.317-.825.371-1.402A6.5 6.5 0 1 1 5.5 12ZM12 4a8.002 8.002 0 0 0-7.335 4.804 3.251 3.251 0 0 0 0 6.394 8.002 8.002 0 0 0 14.67 0 3.25 3.25 0 0 0 0-6.394A8.002 8.002 0 0 0 12 4Zm7.89 6.674a8.054 8.054 0 0 1 0 2.654 1.746 1.746 0 0 0 0-2.655ZM3.5 12c0-.531.236-1.007.61-1.327a8.053 8.053 0 0 0 0 2.654A1.746 1.746 0 0 1 3.5 12Zm4-.5a2 2 0 1 1 4 0 .75.75 0 0 1-1.5 0 .5.5 0 0 0-1 0 .75.75 0 0 1-1.5 0Zm7-2a2 2 0 0 0-2 2 .75.75 0 0 0 1.5 0 .5.5 0 0 1 1 0 .75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Zm-4.75 4a.75.75 0 0 1 .75.751c.004.016.046.186.343.396.283.2.694.353 1.157.353a2.03 2.03 0 0 0 1.157-.353c.297-.21.339-.38.343-.396v-.001a.75.75 0 0 1 1.5 0c0 .694-.476 1.267-.975 1.62A3.531 3.531 0 0 1 12 16.5a3.53 3.53 0 0 1-2.025-.63c-.5-.354-.975-.926-.975-1.62a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-face-baby', JhIconFaceBaby);