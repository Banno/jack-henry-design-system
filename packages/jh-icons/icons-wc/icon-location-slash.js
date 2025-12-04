/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconLocationSlash extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M3.323 3.323a.749.749 0 0 0 .147.207l16 16a.748.748 0 0 0 .207.147.75.75 0 0 1-1.207.853l-2.93-2.93a46.869 46.869 0 0 1-2.9 3.806l-.055.064-.015.017-.004.005-.001.001L12 21l-.565.494-.001-.002-.004-.005-.015-.017-.055-.064a42.936 42.936 0 0 1-.932-1.136c-.6-.756-1.4-1.814-2.202-3.017-.8-1.2-1.612-2.56-2.225-3.918C5.393 11.99 4.95 10.581 4.95 9.3c0-.683.105-1.352.3-1.989l-2.78-2.78a.75.75 0 0 1 .853-1.208Zm3.41 1.35 1.063 1.063C8.816 4.539 10.326 3.75 12 3.75c3.049 0 5.55 2.615 5.55 5.55 0 .969-.345 2.148-.918 3.418a20.06 20.06 0 0 1-.615 1.239l1.105 1.105a22.24 22.24 0 0 0 .877-1.727c.608-1.346 1.051-2.754 1.051-4.035 0-3.743-3.152-7.05-7.05-7.05-2.096 0-3.976.956-5.267 2.422Zm7.223 7.222A3.247 3.247 0 0 0 15.25 9.3 3.253 3.253 0 0 0 12 6.05c-1.06 0-2.001.509-2.595 1.295l1.08 1.08A1.752 1.752 0 0 1 12 7.55c.964 0 1.75.786 1.75 1.75 0 .646-.352 1.211-.875 1.515l1.08 1.08ZM12 21l-.564.494.564.645.564-.645L12 21ZM6.45 9.3c0-.248.018-.494.053-.737l7.957 7.957A44.97 44.97 0 0 1 12 19.832a45.404 45.404 0 0 1-2.526-3.41c-.774-1.162-1.538-2.447-2.106-3.704-.573-1.27-.918-2.45-.918-3.418Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-location-slash', JhIconLocationSlash);