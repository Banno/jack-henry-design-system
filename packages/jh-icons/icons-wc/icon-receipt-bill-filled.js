/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconReceiptBillFilled extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M4.75 3a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.166.624l-2.614-1.743-3.098 1.77a.75.75 0 0 1-.744 0l-3.098-1.77-2.614 1.743A.75.75 0 0 1 4.75 21V3Zm8 3.5v-.75h-1.5v1.085a2.85 2.85 0 0 0-1.08.497c-.55.42-.92 1.064-.92 1.882 0 .956.327 1.644.877 2.132.479.426 1.091.66 1.556.836l.05.019c.53.202.89.349 1.144.574.2.178.373.443.373 1.01a.81.81 0 0 1-.33.69c-.22.168-.552.275-.92.275s-.7-.107-.92-.275a.81.81 0 0 1-.33-.69v-.75h-1.5v.75c0 .82.37 1.464.92 1.883a2.85 2.85 0 0 0 1.08.497v1.085h1.5v-1.085a2.85 2.85 0 0 0 1.08-.497c.55-.42.92-1.063.92-1.882 0-.956-.327-1.643-.877-2.132-.479-.426-1.091-.659-1.556-.836l-.05-.019c-.53-.201-.89-.348-1.144-.574-.2-.178-.373-.443-.373-1.01a.81.81 0 0 1 .33-.69c.22-.168.551-.275.92-.275.368 0 .7.107.92.275.2.152.33.365.33.69v.75h1.5v-.75c0-.82-.37-1.463-.92-1.883a2.836 2.836 0 0 0-1.08-.497V6.5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-receipt-bill-filled', JhIconReceiptBillFilled);