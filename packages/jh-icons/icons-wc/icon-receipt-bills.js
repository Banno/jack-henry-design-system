// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconReceiptBill extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M3.25 2.5A.75.75 0 0 1 4 1.75h13a.75.75 0 0 1 .75.75v2.25H20a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.166.624l-2.614-1.743-3.098 1.77a.75.75 0 0 1-.744 0l-3.098-1.77-2.614 1.743A.75.75 0 0 1 6.25 21.5v-3.599l-1.834 1.223A.75.75 0 0 1 3.25 18.5v-16Zm3 13.599V5.5A.75.75 0 0 1 7 4.75h9.25v-1.5H4.75V17.1l1.5-1Zm1.5-9.849V20.1l1.834-1.223a.75.75 0 0 1 .788-.027l3.128 1.787 3.128-1.787a.75.75 0 0 1 .788.027L19.25 20.1V6.25H7.75Zm6.5 1v1.086c.385.089.758.251 1.08.496.55.42.92 1.064.92 1.882v.75h-1.5v-.75a.81.81 0 0 0-.33-.689c-.22-.168-.552-.275-.92-.275-.369 0-.7.107-.92.275a.81.81 0 0 0-.33.69c0 .568.173.832.373 1.01.254.226.615.373 1.144.574l.05.02c.465.176 1.077.409 1.556.835.55.489.877 1.176.877 2.132 0 .819-.37 1.463-.92 1.882a2.839 2.839 0 0 1-1.08.497v1.085h-1.5v-1.085a2.839 2.839 0 0 1-1.08-.497 2.307 2.307 0 0 1-.92-1.882v-.75h1.5v.75c0 .324.13.537.33.689.22.168.552.275.92.275s.7-.107.92-.275a.81.81 0 0 0 .33-.689c0-.568-.173-.833-.373-1.01-.254-.226-.615-.373-1.144-.575l-.05-.019c-.465-.177-1.077-.41-1.556-.836-.55-.488-.877-1.176-.877-2.132 0-.818.37-1.463.92-1.882a2.837 2.837 0 0 1 1.08-.497V7.25h1.5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-receipt-bills', JhIconReceiptBill);