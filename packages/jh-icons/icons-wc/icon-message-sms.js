/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconMessageSm extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M4 3.25A1.75 1.75 0 0 0 2.25 5v16.56l1.219-.974 4.794-3.836H20A1.75 1.75 0 0 0 21.75 15V5A1.75 1.75 0 0 0 20 3.25H4ZM3.75 5A.25.25 0 0 1 4 4.75h16a.25.25 0 0 1 .25.25v10a.25.25 0 0 1-.25.25H7.737l-.206.164L3.75 18.44V5Zm2.997 7.374c-1.158 0-1.888-.546-1.907-1.428h1.11c.029.333.362.546.845.546.434 0 .733-.21.733-.511 0-.254-.2-.39-.724-.496l-.603-.12c-.838-.159-1.27-.616-1.27-1.336 0-.895.718-1.483 1.822-1.483 1.073 0 1.816.581 1.835 1.429H7.512c-.025-.324-.333-.55-.743-.55s-.679.194-.679.499c0 .25.203.397.686.492l.59.114c.905.175 1.31.584 1.31 1.31 0 .956-.73 1.534-1.929 1.534Zm7.69-4.704v4.58H13.36V9.36h-.058l-1.018 2.548h-.72L10.541 9.36h-.057v2.891H9.409V7.67h1.374l1.111 2.81h.06l1.108-2.81h1.374Zm2.636 4.704c-1.158 0-1.888-.546-1.907-1.428h1.11c.029.333.362.546.845.546.434 0 .733-.21.733-.511 0-.254-.2-.39-.724-.496l-.603-.12c-.838-.159-1.27-.616-1.27-1.336 0-.895.718-1.483 1.822-1.483 1.073 0 1.816.581 1.835 1.429h-1.076c-.026-.324-.333-.55-.743-.55s-.679.194-.679.499c0 .25.203.397.686.492l.59.114c.904.175 1.31.584 1.31 1.31 0 .956-.73 1.534-1.929 1.534Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-message-sms', JhIconMessageSm);