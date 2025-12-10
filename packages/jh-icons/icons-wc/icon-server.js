/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconServer extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M19 4.5c.966 0 1.75.784 1.75 1.75v2.5c0 .372-.117.716-.315 1 .198.284.315.628.315 1v2.5c0 .372-.117.716-.315 1 .198.284.315.628.315 1v2.5A1.75 1.75 0 0 1 19 19.5H5a1.75 1.75 0 0 1-1.75-1.75v-2.5c0-.372.117-.716.314-1a1.741 1.741 0 0 1-.314-1v-2.5c0-.372.117-.716.314-1a1.741 1.741 0 0 1-.314-1v-2.5c0-.966.784-1.75 1.75-1.75h14ZM5 15a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25v-2.5A.25.25 0 0 0 19 15H5Zm2 .5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-2-5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25H5Zm2 .5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 6a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25v-2.5A.25.25 0 0 0 19 6H5Zm2 .5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-server', JhIconServer);