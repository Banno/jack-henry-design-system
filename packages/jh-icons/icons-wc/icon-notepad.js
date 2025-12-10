/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconNotepad extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M15.5 2.5a.75.75 0 0 1 .75.75v.5h1.25c.966 0 1.75.784 1.75 1.75v13a1.75 1.75 0 0 1-1.75 1.75h-11a1.75 1.75 0 0 1-1.75-1.75v-13c0-.966.784-1.75 1.75-1.75h1.25v-.5a.75.75 0 0 1 1.5 0v.5h2v-.5a.75.75 0 0 1 1.5 0v.5h2v-.5a.75.75 0 0 1 .75-.75Zm-9 2.75a.25.25 0 0 0-.25.25v13c0 .138.112.25.25.25h11a.25.25 0 0 0 .25-.25v-13a.25.25 0 0 0-.25-.25h-1.25v.5a.75.75 0 0 1-1.5 0v-.5h-2v.5a.75.75 0 0 1-1.5 0v-.5h-2v.5a.75.75 0 0 1-1.5 0v-.5H6.5Zm8.5 9a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h6Zm0-3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h6Zm0-3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h6Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-notepad', JhIconNotepad);