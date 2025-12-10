/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconTowerBroadcast extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M12 9.5a2 2 0 0 1 .75 3.852V20.5a.75.75 0 0 1-1.5 0v-7.148A1.999 1.999 0 0 1 12 9.5Zm6.538-3.813A8.715 8.715 0 0 1 20.75 11.5a8.722 8.722 0 0 1-2.692 6.31l-1.04-1.081A7.226 7.226 0 0 0 19.25 11.5a7.22 7.22 0 0 0-1.755-4.726l1.043-1.087ZM6.503 6.774A7.22 7.22 0 0 0 4.75 11.5c0 2.055.856 3.91 2.23 5.229l-1.039 1.08A8.722 8.722 0 0 1 3.25 11.5c0-2.23.836-4.266 2.21-5.812l1.043 1.086ZM8.77 9.138A3.982 3.982 0 0 0 8 11.5a3.99 3.99 0 0 0 1.23 2.884l-1.039 1.082A5.482 5.482 0 0 1 6.5 11.5c0-1.31.458-2.512 1.222-3.456l1.05 1.094Zm7.505-1.094A5.475 5.475 0 0 1 17.5 11.5a5.48 5.48 0 0 1-1.693 3.966l-1.038-1.081A3.987 3.987 0 0 0 16 11.5c0-.884-.288-1.7-.773-2.362l1.05-1.094Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-tower-broadcast', JhIconTowerBroadcast);