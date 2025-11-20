/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconBook extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M18.508 2.508a.75.75 0 0 1 .75.75v2.79a.75.75 0 0 1 .746.75v12.838a.754.754 0 0 1-.007.095v1.262a.75.75 0 0 1-.75.75H6.75c-.872 0-1.698-.178-2.334-.502-.533-.271-1.103-.745-1.215-1.435a.751.751 0 0 1-.02-.17V5.258a2.75 2.75 0 0 1 2.75-2.75h12.577ZM6.786 18.876h-.025l-.014-.001c-.684 0-1.266.143-1.65.338-.426.216-.416.38-.416.346 0-.035-.01.129.416.345.381.195.959.336 1.637.338h.052l.022.001h11.69v-1.368H6.796l-.01.001ZM5.931 4.008c-.69 0-1.25.56-1.25 1.25v12.497A5.058 5.058 0 0 1 6 17.422V4.008h-.07ZM7.5 17.375h10.258V4.008H7.5v13.367Zm8-12.32a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h6Zm-5.25 3h4.5v-1.5h-4.5v1.5Z"/> </svg>
    `;
  }
}

customElements.define('jh-icon-book', JhIconBook);