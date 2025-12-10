/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconBox extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M11.776 2.713a.75.75 0 0 1 .519.026l8 3.429.015.007a.77.77 0 0 1 .053.027.39.39 0 0 1 .044.026l.006.003a.749.749 0 0 1 .203.2c.01.014.018.028.027.043.008.015.018.029.026.045a.678.678 0 0 1 .05.13.769.769 0 0 1 .016.07.763.763 0 0 1 .015.139v10.285a.75.75 0 0 1-.454.689l-8.001 3.429a.75.75 0 0 1-.59 0l-8.002-3.429a.75.75 0 0 1-.454-.69V6.858l.006-.093a.755.755 0 0 1 .111-.309l.023-.031a.748.748 0 0 1 .04-.053l.017-.02a.746.746 0 0 1 .067-.064l.008-.007a.75.75 0 0 1 .065-.049c.002 0 .003-.002.005-.003l.05-.029a.754.754 0 0 1 .044-.022l.018-.009 8.001-3.429.072-.026ZM4.75 16.647l6.5 2.786V10.78l-6.5-2.786v8.654Zm8-5.867v8.653l6.501-2.785V7.994L12.75 10.78ZM9.713 8.49l2.286.98 6.097-2.614-2.33-.998L9.714 8.49Zm-3.81-1.634 1.916.822 6.054-2.631-1.874-.803-6.097 2.612Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-box', JhIconBox);