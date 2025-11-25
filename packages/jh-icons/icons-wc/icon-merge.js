// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconMerge extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M13.336 11.01a.75.75 0 0 0 1.046.176l.041-.03c.588-.418 1.31-.933 1.867-1.715.588-.825.96-1.894.96-3.381V5a.75.75 0 0 0-1.5 0v1.06c0 1.216-.297 1.971-.681 2.51-.403.566-.936.951-1.558 1.394a.75.75 0 0 0-.175 1.046Zm-.586 5.68 1.22-1.22a.75.75 0 0 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22v-3.13c0-.684-.21-1.106-.516-1.456-.287-.325-.646-.582-1.102-.908l-.323-.232c-.579-.42-1.238-.943-1.738-1.73-.51-.798-.821-1.813-.821-3.174v-.92a.75.75 0 1 1 1.5 0v.92c0 1.118.251 1.844.586 2.369.343.538.809.925 1.355 1.322l.264.189c.462.328.993.705 1.405 1.174.537.61.89 1.38.89 2.446v3.129Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-merge', JhIconMerge);