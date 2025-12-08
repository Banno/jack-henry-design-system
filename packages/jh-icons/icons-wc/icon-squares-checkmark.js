/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconSquaresCheckmark extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M15.509 6.992a2 2 0 0 1 2 2V19.51a2 2 0 0 1-2 2H4.99a2 2 0 0 1-2-2V8.992a2 2 0 0 1 2-2h10.52ZM4.99 8.492a.5.5 0 0 0-.5.5V19.51a.5.5 0 0 0 .5.5h10.52l.1-.01a.501.501 0 0 0 .389-.39l.01-.1V8.992a.5.5 0 0 0-.399-.49l-.1-.01H4.99Zm8.482 2.972a.75.75 0 0 1 1.06 1.06l-4.971 4.972a.75.75 0 0 1-1.061 0L6.005 15a.75.75 0 0 1 1.06-1.06l1.966 1.965 4.442-4.441Zm6.023-8.466a2 2 0 0 1 2 2.001V15.75a.75.75 0 0 1-1.5 0V4.999a.5.5 0 0 0-.4-.49l-.1-.01H8.75a.75.75 0 0 1 0-1.5h10.746Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-squares-checkmark', JhIconSquaresCheckmark);