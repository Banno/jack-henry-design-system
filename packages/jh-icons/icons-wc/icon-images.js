/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconImage extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M20.25 3.75c.423 0 .834.128 1.157.37.323.242.593.634.593 1.13v10.5c0 .496-.27.888-.593 1.13-.323.242-.734.37-1.157.37h-.75v1.25c0 .496-.27.888-.593 1.13-.323.242-.734.37-1.157.37h-14c-.423 0-.835-.128-1.157-.37C2.27 19.388 2 18.996 2 18.5V8c0-.496.27-.888.593-1.13.322-.242.734-.37 1.157-.37h.75V5.25c0-.496.27-.888.593-1.13.322-.242.734-.37 1.157-.37h14ZM9.06 18.5h8.69a.452.452 0 0 0 .25-.065V16.06l-3.25-3.25-5.69 5.69ZM3.5 15.06v3.375a.453.453 0 0 0 .25.065h3.19l4.25-4.25-3.44-3.44-4.25 4.25Zm2.75-9.81a.456.456 0 0 0-.25.064V6.5h11.75c.423 0 .834.128 1.157.37.323.242.593.634.593 1.13v7.75h.75a.452.452 0 0 0 .25-.065V5.315a.456.456 0 0 0-.25-.065h-14ZM3.75 8a.456.456 0 0 0-.25.064v4.876l4.25-4.25 4.5 4.5 2.5-2.5L18 13.94V8.064A.456.456 0 0 0 17.75 8h-14Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-images', JhIconImage);