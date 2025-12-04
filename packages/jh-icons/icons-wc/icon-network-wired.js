/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconNetworkWired extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M15.5 2a.75.75 0 0 1 .75.75V8a.75.75 0 0 1-.75.75h-2.75v1.951c.227.132.416.322.548.549h2.404a1.498 1.498 0 0 1 2.596 0H20a.75.75 0 0 1 0 1.5h-1.702c-.132.227-.32.416-.548.548V15h2.75a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75v-5.25a.75.75 0 0 1 .75-.75h2.75v-1.702a1.506 1.506 0 0 1-.548-.548h-2.404a1.498 1.498 0 0 1-2.596 0H8.298c-.132.227-.32.416-.548.548V15h2.75a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75v-5.25A.75.75 0 0 1 3.5 15h2.75v-1.702a1.505 1.505 0 0 1-.548-.548H4a.75.75 0 0 1 0-1.5h1.702a1.498 1.498 0 0 1 2.596 0h2.404a1.51 1.51 0 0 1 .548-.549V8.75H8.5A.75.75 0 0 1 7.75 8V2.75A.75.75 0 0 1 8.5 2h7ZM4.25 20.25h5.5V16.5h-5.5v3.75Zm10 0h5.5V16.5h-5.5v3.75Zm-5-13h5.5V3.5h-5.5v3.75Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-network-wired', JhIconNetworkWired);