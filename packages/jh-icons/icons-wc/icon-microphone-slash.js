/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconMicrophoneSlash extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M6.043 9.25a.75.75 0 0 1 .75.75v1c0 2.817.93 4.332 1.969 5.164 1.072.858 2.383 1.086 3.28 1.086.815 0 1.968-.188 2.976-.861l1.076 1.076c-1.092.811-2.314 1.14-3.301 1.245v1.79h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5v-1.79c-1.038-.11-2.336-.468-3.469-1.374-1.46-1.168-2.531-3.153-2.531-6.336v-1a.75.75 0 0 1 .75-.75Zm6-7.25a4 4 0 0 1 4 4v6c0 .742-.202 1.437-.554 2.032l.9.9c.534-.896.904-2.155.904-3.932v-1a.75.75 0 0 1 1.5 0v1c0 2.206-.515 3.837-1.317 5.019l3.952 3.952-.707.707L3.75 3.707 4.457 3l3.586 3.586V6a4 4 0 0 1 4-4Zm-2.5 8.914V12a2.5 2.5 0 0 0 3.413 2.328l1.12 1.118A4 4 0 0 1 8.043 12V9.414l1.499 1.5Zm2.5-7.414a2.5 2.5 0 0 0-2.5 2.5v2.086l4.828 4.828a2.5 2.5 0 0 0 .172-.914V6a2.5 2.5 0 0 0-2.5-2.5Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-microphone-slash', JhIconMicrophoneSlash);