/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconBluetooth extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="m13.23 12 3.578-3.479a.827.827 0 0 0 0-1.195l-4.193-4.078a.884.884 0 0 0-.954-.181l.006-.002a.848.848 0 0 0-.537.781V9.96L8.422 7.325a.885.885 0 0 0-1.23 0 .826.826 0 0 0 0 1.196L10.77 12l-3.578 3.479a.827.827 0 0 0 0 1.195.885.885 0 0 0 1.23 0l2.708-2.633v6.112a.846.846 0 0 0 .531.78l.006.002a.885.885 0 0 0 .949-.184l4.192-4.076a.827.827 0 0 0 0-1.196L13.231 12Zm-.36-6.113 2.093 2.036-2.092 2.035v-4.07Zm0 12.226v-4.071l2.093 2.035-2.092 2.035Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-bluetooth', JhIconBluetooth);