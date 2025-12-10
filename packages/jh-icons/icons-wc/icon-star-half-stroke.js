/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconStarHalfStroke extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M12 4.25a.75.75 0 0 1 .68.433l1.98 4.24 4.947.72a.75.75 0 0 1 .39 1.303l-3.71 3.278.74 4.659a.75.75 0 0 1-1.107.772L12 17.467l-3.92 2.188a.75.75 0 0 1-1.107-.772l.739-4.66-3.71-3.277a.75.75 0 0 1 .39-1.303l4.947-.72 1.981-4.24.053-.095A.75.75 0 0 1 12 4.25Zm0 11.61c.126 0 .252.03.365.093l2.938 1.639-.562-3.54a.75.75 0 0 1 .244-.679l2.804-2.48-3.745-.542a.75.75 0 0 1-.572-.425L12 6.772v9.087Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-star-half-stroke', JhIconStarHalfStroke);