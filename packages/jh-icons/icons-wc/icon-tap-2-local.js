/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconTap2Local extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="m22 15.246-.676.067a6.722 6.722 0 0 0-6.01 6.011l-.068.676h-6.71l.046-.794c.396-6.792 5.833-12.227 12.624-12.623L22 8.537v6.71Zm-1.5-5.09A11.94 11.94 0 0 0 10.156 20.5h3.762a8.225 8.225 0 0 1 6.582-6.583v-3.76Zm-5.082-7.362c-.396 6.792-5.833 12.227-12.624 12.623L2 15.463v-6.71l.676-.066a6.722 6.722 0 0 0 6.01-6.011L8.755 2h6.71l-.046.794Zm-5.336.706A8.224 8.224 0 0 1 3.5 10.082v3.76A11.94 11.94 0 0 0 13.844 3.5h-3.762Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-tap-2-local', JhIconTap2Local);