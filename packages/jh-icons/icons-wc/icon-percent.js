/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconPercent extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M14.785 12.536c.719 0 1.363.333 1.807.908.435.564.658 1.328.658 2.2 0 .871-.223 1.635-.658 2.199-.444.575-1.088.907-1.807.907-.718 0-1.362-.332-1.806-.907-.435-.564-.658-1.328-.658-2.2 0-.871.223-1.635.659-2.199.443-.575 1.087-.908 1.805-.908Zm.497-5.614a.75.75 0 1 1 1.149.964l-7.713 9.192a.75.75 0 0 1-1.15-.964l7.714-9.192Zm-.497 7.114c-.228 0-.442.096-.618.324-.185.24-.346.656-.346 1.284 0 .627.161 1.042.346 1.282.176.228.39.324.618.324.228 0 .443-.096.62-.324.184-.24.345-.655.345-1.282 0-.628-.16-1.044-.346-1.284-.176-.228-.39-.324-.619-.324ZM9.214 5.25c.719 0 1.362.333 1.806.908.436.564.659 1.328.659 2.2 0 .871-.223 1.635-.659 2.199-.444.575-1.087.907-1.806.907-.719 0-1.362-.332-1.806-.907-.435-.564-.658-1.328-.658-2.2 0-.871.223-1.635.658-2.199.444-.575 1.087-.908 1.806-.908Zm0 1.5c-.228 0-.442.096-.618.324-.185.24-.346.655-.346 1.283 0 .628.16 1.043.346 1.283.176.228.39.324.618.324.228 0 .443-.096.619-.324.185-.24.346-.655.346-1.283 0-.628-.161-1.043-.346-1.283-.176-.228-.391-.324-.62-.324Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-percent', JhIconPercent);