/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconHalftone extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M19 3.25c.966 0 1.75.784 1.75 1.75v14A1.75 1.75 0 0 1 19 20.75H5A1.75 1.75 0 0 1 3.25 19V5c0-.966.784-1.75 1.75-1.75h14ZM7.5 16a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm4 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm4 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-10-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V13H5.5ZM9 13v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V13H9Zm4 0v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V13h-2Zm4 0v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H17ZM7 11v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2ZM5.5 5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H7V9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V11h2V9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V11h2V9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-13Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-halftone', JhIconHalftone);