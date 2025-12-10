/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconDiamondFilled2 extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M10.94 2.75a1.5 1.5 0 0 1 2.12 0l8.19 8.19a1.5 1.5 0 0 1 0 2.12l-8.19 8.19a1.5 1.5 0 0 1-2.12 0l-8.19-8.19a1.5 1.5 0 0 1 0-2.12l8.19-8.19Zm.972 4.596c-.601 0-1.13.13-1.588.392a2.85 2.85 0 0 0-1.072 1.037 2.79 2.79 0 0 0-.38 1.436h1.98c0-.254.04-.482.123-.686.086-.203.205-.363.357-.48a.85.85 0 0 1 .533-.176c.203 0 .373.043.51.13.14.085.246.212.316.38.075.164.112.37.112.615 0 .145-.035.307-.106.486-.066.18-.173.381-.322.604a7.938 7.938 0 0 1-.586.744l-2.742 2.883v1.29H15v-1.524h-3.363l1.101-1.272c.32-.316.606-.615.856-.896.254-.282.469-.555.644-.82.176-.27.311-.542.405-.815a2.62 2.62 0 0 0 .14-.856c0-.519-.11-.963-.328-1.33a2.071 2.071 0 0 0-.96-.85c-.426-.195-.954-.292-1.583-.292Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-diamond-filled-2', JhIconDiamondFilled2);