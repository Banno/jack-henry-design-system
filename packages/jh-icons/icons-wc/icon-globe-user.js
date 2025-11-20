/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconGlobeUser extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M11.1 3.75A8.25 8.25 0 0 1 19.35 12c0 .182-.01.362-.02.541a3.911 3.911 0 0 0-1.495-1.001 6.736 6.736 0 0 0-.215-1.29h-3.339c.035.447.056.907.065 1.377a3.796 3.796 0 0 0-1.514 1.22 20.233 20.233 0 0 0-.056-2.597H9.424a21.225 21.225 0 0 0 0 3.5h2.919a4.47 4.47 0 0 0-.285 1.5H9.609c.115.681.262 1.294.436 1.816.17.51.356.907.539 1.192a5.783 5.783 0 0 0-.212.926l-.004.026v.01l-.002.006v.003s.009 0 1.49.18v-.008l.002-.014a3.13 3.13 0 0 1 .035-.203c.024-.127.064-.3.127-.492.11-.337.345-.913.851-1.24.339-.22.699-.428 1.004-.592a3.896 3.896 0 0 1-.32-1.505c0-.723.222-1.396.716-1.888.493-.492 1.173-.717 1.92-.717.744 0 1.431.224 1.936.706.509.486.754 1.16.754 1.9 0 .64-.17 1.146-.302 1.486.343.204.686.466.978.783.43.468.793 1.105.793 1.875a.75.75 0 0 1-1.5 0c0-.278-.13-.57-.397-.86a2.953 2.953 0 0 0-.714-.552l-.257-.13a.893.893 0 0 1-.471-.488.977.977 0 0 1-.047-.524c.034-.196.13-.42.176-.535.12-.302.24-.633.24-1.056 0-.404-.126-.658-.29-.814-.166-.16-.45-.291-.9-.291-.447 0-.711.13-.86.28-.15.15-.274.405-.274.825 0 .417.124.75.25 1.043.048.11.147.323.192.49a.99.99 0 0 1 .014.492.853.853 0 0 1-.485.578 11.83 11.83 0 0 0-1.34.752c-.046.03-.149.164-.24.446a2.772 2.772 0 0 0-.1.412l-.002.022-.001.003-.013.073a.75.75 0 0 1-1.476-.256l-1.489-.18c-.042.346 0 .684.106.994A8.249 8.249 0 0 1 11.1 3.75Zm-5.916 11.5a6.767 6.767 0 0 0 3.775 3.15 8.377 8.377 0 0 1-.338-.86 14.21 14.21 0 0 1-.531-2.29H5.184Zm-.604-5a6.758 6.758 0 0 0 0 3.5h3.34A22.854 22.854 0 0 1 7.851 12c0-.6.025-1.185.068-1.75H4.58Zm4.38-4.651A6.768 6.768 0 0 0 5.184 8.75H8.09c.13-.848.309-1.623.531-2.29.101-.304.214-.593.338-.861Zm2.14-.349c-.018 0-.153.013-.382.304-.225.285-.46.745-.672 1.38A12.41 12.41 0 0 0 9.61 8.75h2.982a12.25 12.25 0 0 0-.435-1.816c-.211-.635-.447-1.095-.672-1.38-.23-.292-.365-.304-.383-.304H11.1Zm2.141.349c.124.268.239.557.34.861.222.667.4 1.442.53 2.29h2.907a6.768 6.768 0 0 0-3.777-3.151Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-globe-user', JhIconGlobeUser);