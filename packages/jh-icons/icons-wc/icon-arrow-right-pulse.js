/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconArrowRightPulse extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M16.354 7.331a.75.75 0 0 1 1.06.004l3.973 4 .524.528-.524.529-3.973 4a.75.75 0 0 1-1.064-1.057l2.702-2.722h-3.819l-3.562 4.02a.75.75 0 0 1-1.312-.496v-3.8l-2.815 4.217a.75.75 0 0 1-1.374-.416v-3.525H5.12a.75.75 0 0 1 0-1.5h1.8a.75.75 0 0 1 .75.75v1.801l2.816-4.217a.75.75 0 0 1 1.373.416v4.296l2.475-2.793a.751.751 0 0 1 .562-.253h4.156L16.35 8.392a.75.75 0 0 1 .003-1.06Zm-13.22 3.782a.75.75 0 0 1 0 1.5h-.341a.75.75 0 0 1 0-1.5h.342Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrow-right-pulse', JhIconArrowRightPulse);