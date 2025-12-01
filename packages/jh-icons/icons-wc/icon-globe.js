// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconGlobe extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M9.719 4.07a8.271 8.271 0 0 0-5.07 4.181h3.865c.156-1.06.378-2.026.653-2.851a9.19 9.19 0 0 1 .552-1.33Zm2.28-.319c-.085 0-.286.052-.578.422-.284.361-.574.93-.83 1.701a15.098 15.098 0 0 0-.56 2.377h3.938a15.098 15.098 0 0 0-.56-2.377c-.256-.77-.546-1.34-.83-1.701-.292-.37-.493-.422-.58-.422Zm3.487 4.5a16.946 16.946 0 0 0-.653-2.851 9.193 9.193 0 0 0-.552-1.33 8.271 8.271 0 0 1 5.07 4.181h-3.865Zm-1.333 1.5H9.847a25.576 25.576 0 0 0-.097 2.25c0 .781.034 1.535.097 2.25h4.306a25.7 25.7 0 0 0 .097-2.25 25.7 25.7 0 0 0-.097-2.25Zm1.505 4.5a27.271 27.271 0 0 0 0-4.5h4.281c.203.715.31 1.47.31 2.25s-.107 1.535-.31 2.25h-4.28Zm-1.69 1.5h-3.937c.142.895.333 1.698.56 2.377.256.77.546 1.34.83 1.702.292.37.493.421.579.421.086 0 .287-.051.579-.421.284-.362.574-.931.83-1.702.227-.68.418-1.482.56-2.377Zm.313 4.18c.207-.397.39-.846.552-1.329a16.9 16.9 0 0 0 .653-2.85h3.864a8.271 8.271 0 0 1-5.07 4.18ZM12 21.752c5.385 0 9.75-4.365 9.75-9.75s-4.365-9.75-9.75-9.75-9.75 4.365-9.75 9.75 4.365 9.75 9.75 9.75Zm-2.281-1.82a9.185 9.185 0 0 1-.552-1.329 16.946 16.946 0 0 1-.653-2.85H4.65a8.271 8.271 0 0 0 5.069 4.18Zm-1.377-5.68a27.18 27.18 0 0 1-.092-2.25c0-.773.032-1.527.092-2.25H4.06a8.255 8.255 0 0 0-.31 2.25c0 .78.108 1.535.31 2.25h4.282Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-globe', JhIconGlobe);