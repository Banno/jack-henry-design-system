/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconDiamondArrowTurnRight extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l9 9a.75.75 0 0 1 0 1.061l-9 9a.75.75 0 0 1-1.06 0l-9-9a.75.75 0 0 1 0-1.06l9-9ZM4.06 12 12 19.94 19.94 12 12 4.062l-7.94 7.94Zm5.19-1a.75.75 0 0 1 .75-.75h4.19l-1.22-1.219a.75.75 0 1 1 1.06-1.06l2.5 2.5.53.53-.53.53-2.5 2.5a.75.75 0 0 1-1.06-1.06l1.22-1.22h-3.44V16a.75.75 0 0 1-1.5 0v-5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-diamond-arrow-turn-right', JhIconDiamondArrowTurnRight);