/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconFolderOpen extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M7.504 5.007a.75.75 0 0 1 .547.361l1.178 1.994h7.883c.967 0 1.75.784 1.75 1.75V10h1.312a1.75 1.75 0 0 1 1.584 2.495l-3.059 6.5a1.75 1.75 0 0 1-1.227.968l-.026.004a1.78 1.78 0 0 1-.133.02l-.044.005a1.572 1.572 0 0 1-.154.008H3.75A1.75 1.75 0 0 1 2 18.25V6.75C2 5.784 2.784 5 3.75 5h3.655l.099.007Zm-.12 6.493a.25.25 0 0 0-.226.144l-3.058 6.5a.25.25 0 0 0 .226.356h12.79a.25.25 0 0 0 .226-.144l3.058-6.5a.25.25 0 0 0-.226-.356H7.384Zm-3.634-5a.25.25 0 0 0-.25.25v9.144l2.3-4.89A1.75 1.75 0 0 1 7.386 10h9.977v-.888a.25.25 0 0 0-.25-.25h-8.31a.75.75 0 0 1-.646-.368L6.978 6.5H3.75Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-folder-open', JhIconFolderOpen);