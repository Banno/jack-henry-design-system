/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconUsbDrive extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M15.25 2.003a.75.75 0 0 1 .75.75v5.08l.865.469a.75.75 0 0 1 .393.659v7.777a.77.77 0 0 1-.004.073 5.259 5.259 0 0 1-10.51.2l-.008-.27v-7.78c0-.27.146-.52.38-.652l.878-.5V2.755a.75.75 0 0 1 .75-.751h6.506ZM8.236 9.397v7.344l.005.194a3.76 3.76 0 0 0 7.515-.194v-.003l.002-.039V9.407l-.756-.409H8.939l-.703.4Zm3.76 5.11a2.234 2.234 0 1 1 0 4.469 2.234 2.234 0 0 1 0-4.47Zm0 1.5a.735.735 0 1 0 0 1.47.735.735 0 0 0 0-1.47ZM9.494 7.498H14.5V3.504H9.494v3.994ZM11.503 6h-1.5V4.5h1.5V6Zm2.488 0h-1.5V4.5h1.5V6Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-usb-drive', JhIconUsbDrive);