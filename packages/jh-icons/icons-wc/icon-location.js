/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconLocation extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12 2.25c-3.898 0-7.05 3.307-7.05 7.05 0 1.281.443 2.69 1.05 4.035.614 1.359 1.426 2.718 2.226 3.918a46.25 46.25 0 0 0 3.134 4.153l.055.064.015.017.004.005.001.001L12 21l-.564.494.564.645.564-.645L12 21l.565.494.001-.002.004-.005.015-.017.055-.064c.048-.056.118-.137.206-.243a46.226 46.226 0 0 0 2.928-3.91c.8-1.2 1.612-2.56 2.225-3.918.608-1.346 1.051-2.754 1.051-4.035 0-3.743-3.152-7.05-7.05-7.05Zm.397 17.089c-.146.183-.28.349-.397.493a45.404 45.404 0 0 1-2.526-3.41c-.774-1.162-1.538-2.447-2.106-3.704-.573-1.27-.918-2.45-.918-3.418 0-2.935 2.501-5.55 5.55-5.55s5.55 2.615 5.55 5.55c0 .969-.345 2.148-.918 3.418-.568 1.257-1.332 2.542-2.106 3.704a44.834 44.834 0 0 1-2.13 2.917ZM10.25 9.3c0-.964.786-1.75 1.75-1.75s1.75.786 1.75 1.75-.786 1.75-1.75 1.75-1.75-.786-1.75-1.75ZM12 6.05A3.253 3.253 0 0 0 8.75 9.3 3.253 3.253 0 0 0 12 12.55a3.253 3.253 0 0 0 3.25-3.25A3.253 3.253 0 0 0 12 6.05Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-location', JhIconLocation);