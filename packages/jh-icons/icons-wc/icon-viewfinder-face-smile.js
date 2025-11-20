/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconViewfinderFaceSmile extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M21.25 17.498a.75.75 0 0 1 .75.75v.957l.002.001v1.046a1.75 1.75 0 0 1-1.75 1.749h-1.046V22h-.954a.75.75 0 0 1 0-1.5h1.5v.001h.5a.25.25 0 0 0 .25-.25v-.503H20.5v-1.5a.75.75 0 0 1 .75-.75ZM2.751 17.5a.75.75 0 0 1 .75.75v1.5h-.002v.5c0 .138.112.25.25.25h2.003a.75.75 0 0 1 0 1.5H3.749a1.75 1.75 0 0 1-1.75-1.75v-1.046h.002v-.954a.75.75 0 0 1 .75-.75ZM12 5.256a6.751 6.751 0 0 1 0 13.5 6.751 6.751 0 0 1 0-13.5Zm0 1.5a5.25 5.25 0 0 0-5.25 5.25l.007.27A5.252 5.252 0 0 0 12 17.255a5.251 5.251 0 0 0 0-10.5Zm2.042 6.167a.75.75 0 0 1 1.248.832c-1.63 2.445-4.95 2.444-6.581 0a.75.75 0 0 1 1.248-.832c1.036 1.554 3.049 1.554 4.085 0Zm-4.208-3.25a.834.834 0 1 1-.002 1.668.834.834 0 0 1 .002-1.668Zm4.333 0a.834.834 0 1 1-.002 1.668.834.834 0 0 1 .002-1.668ZM5.75 2a.75.75 0 0 1 0 1.5h-2a.25.25 0 0 0-.25.25v2.003a.75.75 0 0 1-1.5 0V3.75C2 2.784 2.784 2 3.75 2h2Zm14 .001h.503c.966 0 1.75.784 1.75 1.751v1.046L22 4.797v.954a.75.75 0 0 1-1.5 0v-1.5h.003v-.5a.25.25 0 0 0-.25-.25h-1.046V3.5h-.957a.75.75 0 0 1 0-1.5h1.5v.001Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-viewfinder-face-smile', JhIconViewfinderFaceSmile);