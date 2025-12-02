/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconArrowDashedRotateRight extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M9.907 19.76a.75.75 0 0 1 .866-.614 7.304 7.304 0 0 0 2.344.018.75.75 0 0 1 .23 1.482 8.828 8.828 0 0 1-2.826-.021.75.75 0 0 1-.614-.865Zm7.894-3.41a.75.75 0 0 1 1.199.9c-.27.36-.57.7-.892 1.014a.75.75 0 1 1-1.047-1.074c.268-.26.515-.542.74-.841Zm-13.012-.801a.751.751 0 0 1 1.032.245c.216.35.462.683.733.991a.75.75 0 0 1-1.127.99 8.778 8.778 0 0 1-.883-1.194.75.75 0 0 1 .245-1.032ZM19 3.25a.75.75 0 0 1 .75.75v4.75H15a.75.75 0 0 1 0-1.5h2.473A7.23 7.23 0 0 0 12 4.75 7.25 7.25 0 0 0 4.75 12a.75.75 0 0 1-1.5 0 8.75 8.75 0 0 1 15-6.123V4a.75.75 0 0 1 .75-.75Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrow-dashed-rotate-right', JhIconArrowDashedRotateRight);