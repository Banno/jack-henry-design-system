/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconCupStraw extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M20.485 2.604a.75.75 0 0 1-.588.882l-4.542.909-.43 1.609h2.825a.75.75 0 0 1 .748.808l-1 12.996a.75.75 0 0 1-.262.514l-.486-.571c.486.57.485.572.485.572h-.001l-.003.003-.005.004-.012.01a.965.965 0 0 1-.101.072 2.242 2.242 0 0 1-.23.129 4.72 4.72 0 0 1-.864.31c-.783.208-2.04.4-4.019.4-1.983 0-3.351-.192-4.241-.394-.446-.1-.77-.203-.993-.286a3.997 3.997 0 0 1-.333-.14l-.025-.013-.009-.004-.004-.002-.001-.001s-.002-.001.356-.66l-.358.659a.75.75 0 0 1-.39-.602l-1-12.996a.75.75 0 0 1 .748-.808h7.623l.652-2.447a.75.75 0 0 1 .578-.542l5-1a.75.75 0 0 1 .882.589Zm-7.512 4.9H6.56l.137 1.785c.3-.054.674-.1 1.096-.139C8.817 9.057 10.216 9 11.75 9c.279 0 .554.003.822.006l.4-1.502Zm-6.126 3.734.615 7.987c.154.05.362.11.627.17.768.173 2.024.356 3.911.356 1.89 0 3.009-.184 3.633-.35a4.18 4.18 0 0 0 .401-.127l.619-8.036a14.43 14.43 0 0 1-.946.113c-.626.057-1.39.1-2.241.125l-1.991 7.468a.75.75 0 1 1-1.45-.386l1.882-7.057h-.157c-1.534 0-2.933-.057-3.957-.15a14.38 14.38 0 0 1-.946-.113Zm9.956-1.95.137-1.784h-2.415l-.412 1.544c.593.026 1.132.06 1.594.102.422.039.796.085 1.096.139Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-cup-straw', JhIconCupStraw);