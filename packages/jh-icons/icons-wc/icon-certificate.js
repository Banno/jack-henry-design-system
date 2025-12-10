/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconCertificate extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M20 3.75c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 20 19.25h-2v2a.75.75 0 0 1-1.061.682L14.75 20.93l-2.188 1a.75.75 0 0 1-1.062-.681v-2H4a1.75 1.75 0 0 1-1.75-1.75v-12c0-.966.784-1.75 1.75-1.75h16Zm-7 16.332 1.438-.657.076-.03a.75.75 0 0 1 .548.03l1.438.657v-2.767a3.737 3.737 0 0 1-3.5 0v2.767ZM4 5.25a.25.25 0 0 0-.25.25v12c0 .138.112.25.25.25h7.5v-1.883a3.75 3.75 0 1 1 6.884-.942l-.053.185c-.084.27-.196.523-.331.758v1.882h2a.25.25 0 0 0 .25-.25v-12a.25.25 0 0 0-.25-.25H4Zm11.416 6.602a2.25 2.25 0 1 0-1.332 4.297 2.25 2.25 0 0 0 1.332-4.297ZM8.5 14.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.5Zm0-3.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.5Zm9.5-3.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h12Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-certificate', JhIconCertificate);