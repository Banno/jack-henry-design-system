/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconSignalStreamLeft extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M9.484 20.468a.721.721 0 0 1-1.022-.214A15.946 15.946 0 0 1 8.447 3.77l.043-.063a.721.721 0 0 1 .914-.191l.066.039a.78.78 0 0 1 .222 1.047 14.45 14.45 0 0 0-.23 14.395l.243.423a.78.78 0 0 1-.22 1.048Zm3.733-2.51a.714.714 0 0 1-1.02-.217 11.444 11.444 0 0 1-.011-11.463l.041-.064a.713.713 0 0 1 .913-.196l.066.04c.345.23.434.695.23 1.056a9.943 9.943 0 0 0-1.279 4.573l-.005.323a9.944 9.944 0 0 0 1.293 4.893c.204.36.116.825-.228 1.056Zm3.742-2.51c-.345.232-.817.14-1.01-.227a6.94 6.94 0 0 1-.006-6.43l.04-.066c.21-.312.645-.379.97-.163.345.231.432.697.251 1.07a5.435 5.435 0 0 0-.534 2.064l-.009.309c0 .824.19 1.636.548 2.372.181.373.095.84-.25 1.071Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-signal-stream-left', JhIconSignalStreamLeft);