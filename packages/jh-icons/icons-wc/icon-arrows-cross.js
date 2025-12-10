/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconArrowsCross extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M16.47 4.72a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H16.5c-.546 0-1.107.328-1.76 1.072-.649.741-1.258 1.74-1.941 2.827-.663 1.054-1.393 2.186-2.243 3.05C9.698 16.318 8.637 17 7.31 17H5.39l-.078-.004A.75.75 0 0 1 5.39 15.5h1.92c.767 0 1.465-.382 2.176-1.104.72-.73 1.369-1.725 2.042-2.795.653-1.038 1.337-2.164 2.084-3.017C14.356 7.735 15.296 7 16.5 7h1.19l-1.22-1.22a.75.75 0 0 1 0-1.06Zm-2.483 8.136c.398.58.8 1.106 1.226 1.54.711.722 1.41 1.104 2.177 1.104h1.92a.75.75 0 0 1 .077 1.496l-.078.004h-1.92c-1.327 0-2.388-.68-3.245-1.552a11.22 11.22 0 0 1-1.032-1.233c.266-.396.515-.785.744-1.15l.131-.21ZM6.47 4.72a.75.75 0 1 1 1.06 1.06L6.31 7H8.2c1.203 0 2.143.735 2.887 1.584.169.193.333.4.496.616-.309.456-.6.919-.872 1.353-.25-.36-.498-.69-.752-.98C9.306 8.827 8.745 8.5 8.199 8.5H6.31l1.22 1.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrows-cross', JhIconArrowsCross);