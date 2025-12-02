/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconArrowDashedRotateLeft extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M14.088 19.76a.75.75 0 0 0-.865-.614 7.304 7.304 0 0 1-2.345.018.75.75 0 1 0-.23 1.482 8.826 8.826 0 0 0 2.827-.021.75.75 0 0 0 .613-.865Zm-7.893-3.41a.75.75 0 0 0-1.2.901c.271.36.57.7.892 1.014a.75.75 0 1 0 1.047-1.074 7.306 7.306 0 0 1-.74-.841Zm13.011-.801a.751.751 0 0 0-1.032.245 7.282 7.282 0 0 1-.732.991.75.75 0 0 0 1.127.99 8.77 8.77 0 0 0 .882-1.194.75.75 0 0 0-.245-1.032ZM4.996 3.25a.75.75 0 0 0-.75.75v4.75h4.75a.75.75 0 0 0 0-1.5H6.522a7.23 7.23 0 0 1 5.472-2.5 7.25 7.25 0 0 1 7.25 7.25.75.75 0 1 0 1.5 0 8.75 8.75 0 0 0-15-6.123V4a.75.75 0 0 0-.75-.75Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrow-dashed-rotate-left', JhIconArrowDashedRotateLeft);