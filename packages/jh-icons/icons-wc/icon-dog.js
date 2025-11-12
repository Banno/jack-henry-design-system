// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconDog extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M11.006 2H9.728l.623 1.117a2.68 2.68 0 0 1-.069 2.73c-.944.436-1.865.851-2.758 1.254a184.464 184.464 0 0 0-3.978 1.831c-.897.415-1.548 1.048-1.543 1.93.004.791.555 1.433 1.085 1.865.565.46 1.293.84 2.009 1.086.703.242 1.485.387 2.148.29.235-.035.462-.074.694-.115.34-.059.69-.12 1.094-.17.645-.08 1.223-.097 1.665.003.415.094.617.264.717.52.123.32.16.949-.221 2.105l-.54 1.64 1.566-.724c1.07-.495 2.196-.876 3.362-1.253l.475-.153c1.007-.323 2.042-.656 3.048-1.06l.044-.017.041-.023a1.81 1.81 0 0 0 .837-1.007l.004-.013.004-.013a1.75 1.75 0 0 0-.137-1.325c-1.227-2.33-2.622-4.534-4.032-6.723l-.001-.003c-.767-1.18-1.541-2.107-2.33-2.746C12.746 2.385 11.899 2 11.006 2Zm1.178 2.673a4.177 4.177 0 0 0-.028-.795c.14.087.284.19.435.313.621.504 1.296 1.29 2.015 2.397 1.41 2.19 2.773 4.345 3.966 6.612l.005.008a.25.25 0 0 1 .023.178.31.31 0 0 1-.11.141c-.935.372-1.896.681-2.885 1-.161.05-.323.103-.485.155-.711.23-1.435.47-2.153.743.073-.62.026-1.161-.154-1.625-.335-.866-1.054-1.277-1.784-1.442-.704-.159-1.494-.113-2.18-.029-.413.051-.87.13-1.255.196-.22.038-.417.072-.567.094-.327.048-.848-.02-1.442-.224-.581-.2-1.145-.501-1.549-.83-.439-.358-.533-.617-.533-.711 0-.009-.01-.246.677-.562l.01-.005a179.59 179.59 0 0 1 3.921-1.805c.954-.43 1.948-.879 2.99-1.36l.177-.082.114-.158a4.18 4.18 0 0 0 .792-2.21Zm7.942 12.996-.18-.45-7.083 2.582.166.464 7.097-2.596Zm-.428-1.956c.3-.104.63-.086.917.05.292.139.52.383.636.683l.368.916.033.08.013.086c.015.1.02.2.012.3.008.105.004.212-.014.316l-.016.1-.043.093a1.23 1.23 0 0 1-.308.41l-.01.008a1.337 1.337 0 0 1-.386.227l-.009.004-7.57 2.77-.043.016-.045.01a1.18 1.18 0 0 1-.36.026 1.2 1.2 0 0 1-.366-.025l-.1-.023-.09-.049a1.662 1.662 0 0 1-.292-.2l-.046-.04-.04-.047a1.34 1.34 0 0 1-.227-.386l-.002-.007-.003-.007-.332-.928a1.211 1.211 0 0 1 .015-.964l.002-.004a1.232 1.232 0 0 1 .741-.657l7.553-2.754.012-.004Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-dog', JhIconDog);