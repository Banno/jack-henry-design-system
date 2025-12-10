/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconArrowsOutFromCenter extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M9.002 14.008a.75.75 0 0 1 1.055 1.055l.003.002-4 4h2.432a.75.75 0 0 1 0 1.5H3.5v-4.992a.75.75 0 0 1 1.5 0v2.432l3.95-3.95v-.001l.009-.008.041-.041.002.003Zm4.986.046a.75.75 0 0 1 1.01-.046l.002-.003.041.04.009.009 3.95 3.95v-2.43a.75.75 0 0 1 1.5 0v4.991h-4.992a.75.75 0 0 1 0-1.5h2.431l-4-4 .004-.002a.749.749 0 0 1 .045-1.01ZM8.492 3.5a.75.75 0 0 1 0 1.5H6.061l4 4-.004.003a.749.749 0 0 1-1.055 1.055L9 10.06l-.041-.04-.009-.008v-.001L5 6.06v2.431a.75.75 0 0 1-1.5 0V3.5h4.992ZM20.5 8.492a.75.75 0 0 1-1.5 0V6.061l-3.95 3.95-.009.009-.041.04-.002-.002a.75.75 0 0 1-1.055-1.055L13.94 9l4-4h-2.432a.75.75 0 0 1 0-1.5H20.5v4.992Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrows-out-from-center', JhIconArrowsOutFromCenter);