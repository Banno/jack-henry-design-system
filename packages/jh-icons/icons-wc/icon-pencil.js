/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconPencil extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M16.78 3.22a.75.75 0 0 0-1.06 0l-1.97 1.97-.53.53-8 8-.53.53-.47.47a.75.75 0 0 0-.205.383l-1 5a.75.75 0 0 0 .882.883l5-1a.75.75 0 0 0 .383-.206l.47-.47.53-.53 8-8 .53-.53 1.97-1.97a.75.75 0 0 0 0-1.06l-4-4Zm.97 5.97 1.44-1.44-2.94-2.94-1.44 1.44 2.94 2.94Zm-4-1.88-6.94 6.94 2.94 2.94 6.94-6.94-2.94-2.94ZM8.69 18.25l-2.94-2.94-.31.31-.734 3.674 3.674-.735.31-.309Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-pencil', JhIconPencil);