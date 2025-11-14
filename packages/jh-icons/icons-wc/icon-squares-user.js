// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconSquaresUser extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M3.5 3.25a.75.75 0 0 0-.75.75v13c0 .415.336.75.75.75h2.25V20c0 .415.336.75.75.75h14a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75h-2.25V4a.75.75 0 0 0-.75-.75h-14ZM5.75 7v9.25h-1.5V4.75h12.5v1.5H6.5a.75.75 0 0 0-.75.75Zm1.5.75v11.5h.5v-.658c0-.605.216-1.097.575-1.474.338-.354.77-.574 1.162-.727.35-.136.727-.241 1.05-.331l.115-.032c.334-.093.588-.17.778-.256a.58.58 0 0 0 .112-.137 4.14 4.14 0 0 1-1.011-2.54l-.001-.017v-.047c0-.286-.002-1.097.329-1.857a2.68 2.68 0 0 1 .915-1.146c.457-.32 1.033-.496 1.726-.496.693 0 1.27.176 1.728.494.454.314.743.733.925 1.141.348.776.347 1.603.347 1.88v.038l-.001.023a4.131 4.131 0 0 1-1.085 2.545.25.25 0 0 0 .082.064l.012.006c.205.103.484.19.857.298l.122.035c.322.091.695.197 1.04.334.39.155.82.376 1.155.731.356.378.568.87.568 1.471v.658h.5V7.75H7.25Zm10.5 11.5v-.658c0-.217-.065-.341-.16-.442-.116-.124-.311-.245-.615-.365-.27-.108-.567-.192-.898-.287l-.125-.035c-.354-.102-.765-.223-1.114-.398a1.75 1.75 0 0 1-.974-1.747l.03-.294.22-.194A2.63 2.63 0 0 0 15 13.037c0-.275-.013-.804-.216-1.258a1.217 1.217 0 0 0-.41-.521c-.174-.12-.442-.227-.874-.227s-.696.106-.866.225a1.185 1.185 0 0 0-.4.516c-.2.458-.204.99-.204 1.273a2.64 2.64 0 0 0 .848 1.815l.26.24-.02.352a2.08 2.08 0 0 1-.844 1.564l-.051.038-.058.028c-.344.173-.757.29-1.109.39l-.114.031a9.68 9.68 0 0 0-.91.284c-.305.12-.503.241-.62.365-.097.102-.162.224-.162.44v.657h8.5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-squares-user', JhIconSquaresUser);