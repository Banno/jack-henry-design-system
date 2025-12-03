/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconFlag extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M4.75 3.001a.75.75 0 0 0-1.5 0v18a.75.75 0 0 0 1.5 0v-6.883a5.323 5.323 0 0 1 1.576-.71c1.144-.303 2.787-.325 4.726.96 2.347 1.557 4.703 1.553 6.443 1.169a9.949 9.949 0 0 0 2.093-.718 8.497 8.497 0 0 0 .805-.436l.014-.009.004-.003.002-.001c.001 0 .001-.001-.413-.626l.414.625a.75.75 0 0 0 .336-.625V5.258a.75.75 0 0 0-1.203-.598l-.002.001-.022.016c-.021.015-.056.04-.102.07a6.652 6.652 0 0 1-1.938.844c-1.236.313-2.854.314-4.497-.93-2.107-1.597-4.495-1.575-6.275-1.197-.77.163-1.443.395-1.961.607v-1.07Zm0 2.711v6.685a6.9 6.9 0 0 1 1.191-.439c1.522-.403 3.613-.382 5.94 1.16 1.92 1.273 3.83 1.277 5.29.954a8.448 8.448 0 0 0 2.079-.76V6.547c-.39.18-.863.362-1.4.498-1.564.395-3.68.394-5.77-1.19-1.626-1.232-3.505-1.254-5.058-.925a10.163 10.163 0 0 0-2.272.781Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-flag', JhIconFlag);