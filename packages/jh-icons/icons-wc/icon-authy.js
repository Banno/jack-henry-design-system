/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconAuthy extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M17.834 6.167A8.25 8.25 0 1 0 6.166 17.834 8.25 8.25 0 0 0 17.834 6.167ZM5.106 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.789-3.807 3.807-9.98 3.807-13.788 0-3.808-3.808-3.808-9.982 0-13.79Zm6.275 5.038a2.5 2.5 0 0 0-3.535 3.536l1.944 1.944a.75.75 0 1 1-1.06 1.06L6.785 14.74a4 4 0 1 1 5.657-5.657l1.944 1.945a.75.75 0 0 1-1.06 1.06l-1.945-1.944Zm4.773.177a2.5 2.5 0 0 1-3.535 3.535l-1.945-1.944a.75.75 0 1 0-1.06 1.06l1.944 1.945a4 4 0 0 0 5.657-5.657L15.27 7.316a.75.75 0 1 0-1.06 1.06l1.944 1.945Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-authy', JhIconAuthy);