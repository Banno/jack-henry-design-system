/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconSignalStreamRight extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M14.516 3.533a.721.721 0 0 1 1.023.214 15.947 15.947 0 0 1 .014 16.483l-.043.064a.722.722 0 0 1-.914.191l-.065-.039a.78.78 0 0 1-.223-1.048 14.451 14.451 0 0 0 .23-14.394l-.242-.423a.779.779 0 0 1 .22-1.048Zm-3.733 2.509a.714.714 0 0 1 1.02.217 11.445 11.445 0 0 1 .011 11.463l-.042.065a.714.714 0 0 1-.912.195l-.066-.039c-.345-.23-.434-.696-.23-1.056a9.945 9.945 0 0 0 1.278-4.574l.005-.322a9.945 9.945 0 0 0-1.293-4.894c-.204-.36-.115-.824.229-1.055ZM7.04 8.552c.345-.232.817-.14 1.01.227a6.94 6.94 0 0 1 .005 6.43l-.039.065c-.211.313-.645.38-.97.163-.345-.23-.432-.696-.251-1.07a5.436 5.436 0 0 0 .534-2.064l.009-.308a5.44 5.44 0 0 0-.548-2.372c-.182-.374-.095-.84.25-1.072Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-signal-stream-right', JhIconSignalStreamRight);