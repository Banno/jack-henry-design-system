/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconChartBarOutlined extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M4 3.25a.75.75 0 0 1 .75.75v15.25h2.27A1.759 1.759 0 0 1 7 19v-4.362c0-.967.784-1.75 1.75-1.75h1.5c.085 0 .168.008.25.02V6.135c0-.967.784-1.75 1.75-1.75h1.5c.966 0 1.75.783 1.75 1.75v1.912a1.76 1.76 0 0 1 .25-.02h1.5c.966 0 1.75.784 1.75 1.75v9.227c0 .083-.007.165-.019.245H20a.75.75 0 0 1 0 1.5h-2.66c-.03.002-.06.005-.09.005h-1.5c-.03 0-.06-.003-.09-.005h-1.892l-.018.001h-1.5l-.018-.001H4a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 4 3.25Zm11.75 6.278a.25.25 0 0 0-.25.25v9.227c0 .12.086.222.2.245h1.6a.251.251 0 0 0 .2-.245V9.778a.25.25 0 0 0-.25-.25h-1.5Zm-7 4.86a.25.25 0 0 0-.25.25V19c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-4.362a.25.25 0 0 0-.25-.25h-1.5Zm3.5-8.502a.25.25 0 0 0-.25.25V19a.25.25 0 0 0 .241.249h1.518A.25.25 0 0 0 14 19V6.136a.25.25 0 0 0-.25-.25h-1.5Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-chart-bar-outlined', JhIconChartBarOutlined);