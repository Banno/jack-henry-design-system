// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconMap extends LitElement {
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
          var(--jh-size-400)
        );
      }
      :host([size='small']) {
        --icon-size: var(
          --jh-icon-size-small,
          var(--jh-size-500)
        );
      }
      :host([size='medium']) {
        --icon-size: var(
          --jh-icon-size-medium,
          var(--jh-size-600)
        );
      }
      :host([size='large']) {
        --icon-size: var(
          --jh-icon-size-large,
          var(--jh-size-900)
        );
      }
      :host([size='x-large']) {
        --icon-size: var(
          --jh-icon-size-extra-large,
          var(--jh-size-1400)
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M14.794 3.81a.746.746 0 0 0-.29-.06h-.012a.746.746 0 0 0-.388.113l-4.67 2.802-4.655-1.861A.75.75 0 0 0 3.75 5.5v12a.75.75 0 0 0 .471.696l4.985 1.994a.745.745 0 0 0 .294.06h.01a.746.746 0 0 0 .386-.113l4.67-2.803 4.655 1.862a.75.75 0 0 0 1.029-.696v-12a.75.75 0 0 0-.471-.696L14.794 3.81ZM13.75 5.825l-3.5 2.1v10.25l3.5-2.1V5.825Zm1.5 10.167V5.608l3.5 1.4v10.384l-3.5-1.4Zm-10-9.384 3.5 1.4v10.384l-3.5-1.4V6.608Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-map', JhIconMap);