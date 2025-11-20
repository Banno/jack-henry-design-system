/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconImagePortrait extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M4.25 18.625a.75.75 0 0 1 .75.75v1.25h2.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 .75-.75Zm15.5 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5H19v-1.25a.75.75 0 0 1 .75-.75ZM12 5.985c.742 0 1.354.188 1.84.526.483.334.79.781.984 1.218.377.85.37 1.76.37 2.062 0 .415-.105.977-.329 1.534a4.33 4.33 0 0 1-.838 1.34h.001c.014.029.04.072.14.122.234.117.549.214.959.331.384.11.849.234 1.274.402.426.169.887.408 1.244.788.379.402.605.925.605 1.568v.185a.75.75 0 0 1-1.5 0v-.185c0-.26-.08-.415-.197-.54-.14-.148-.366-.286-.704-.42-.339-.134-.714-.236-1.132-.356a9.49 9.49 0 0 1-.924-.3l-.295-.131a1.754 1.754 0 0 1-.818-.808 2.235 2.235 0 0 1-.203-.896l-.016-.371.287-.238c.322-.265.563-.646.725-1.05.163-.407.221-.78.221-.975 0-.31-.006-.926-.24-1.452a1.389 1.389 0 0 0-.469-.596c-.2-.14-.505-.258-.985-.258s-.784.119-.985.258a1.387 1.387 0 0 0-.468.596c-.234.526-.241 1.142-.241 1.452 0 .196.057.565.218.969.16.4.4.78.72 1.048l.321.271-.063.417c-.026.17-.084.46-.212.751-.108.246-.3.57-.636.793l-.152.089c-.378.189-.827.32-1.219.431-.418.12-.793.222-1.132.356-.338.134-.565.272-.704.42-.117.125-.197.28-.197.54v.185a.75.75 0 0 1-1.5 0v-.185c0-.644.227-1.166.605-1.568.358-.38.82-.62 1.245-.787.425-.169.89-.294 1.273-.403.41-.117.725-.214.958-.33h.001c-.019.008.024-.008.084-.143l.01-.03a4.352 4.352 0 0 1-.794-1.299c-.221-.553-.326-1.11-.326-1.525 0-.301-.007-1.213.37-2.062.194-.437.501-.884.983-1.218.486-.338 1.1-.526 1.841-.526Zm-4.75-4.11a.75.75 0 0 1 0 1.5H5v1.25a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75h3Zm12.5 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25h-2.25a.75.75 0 0 1 0-1.5h3Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-image-portrait', JhIconImagePortrait);