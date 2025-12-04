/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconArrowDownToBracket extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12 4.25a.75.75 0 0 1 .75.75v9.19l2.72-2.72a.75.75 0 0 1 1.06 1.06l-4 4-.53.53-.53-.53-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V5a.75.75 0 0 1 .75-.75Zm-9 10a.75.75 0 0 1 .75.75v3.044c0 .404.117.737.268.95.152.215.292.256.366.256h15.231c.075 0 .215-.041.367-.256.151-.213.268-.546.268-.95V15a.75.75 0 0 1 1.5 0v3.044c0 .677-.193 1.322-.544 1.817-.349.493-.9.889-1.59.889H4.383c-.69 0-1.242-.396-1.59-.89-.35-.494-.544-1.139-.544-1.816V15a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrow-down-to-bracket', JhIconArrowDownToBracket);