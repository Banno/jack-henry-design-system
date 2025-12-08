/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconMoonStar extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M10.878 5.263a.75.75 0 0 1 .726 1.191 5.295 5.295 0 0 0 4.227 8.483l.23-.004c.228-.011.455-.038.68-.077a.75.75 0 0 1 .726 1.192 6.795 6.795 0 0 1-12.208-3.742l-.009-.35a6.795 6.795 0 0 1 5.628-6.693ZM9.435 7.35a5.291 5.291 0 0 0-2.685 4.606l.007.273a5.295 5.295 0 0 0 8.195 4.15 6.794 6.794 0 0 1-5.517-9.03Zm8 1.052 2.181.555-2.18.556-.555 2.18-.555-2.18-2.18-.556 2.18-.555.555-2.18.555 2.18Zm1.963-3.59 1.091.277-1.09.277-.278 1.091-.277-1.09-1.09-.278 1.09-.277.277-1.09.277 1.09Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-moon-stars', JhIconMoonStar);