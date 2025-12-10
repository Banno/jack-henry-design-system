/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconGlobeDollarSign extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M11.1 3.75A8.25 8.25 0 0 1 18.784 9h-2.483v1.25h-2.02c.044.565.07 1.15.07 1.75 0 .6-.026 1.185-.07 1.75h.421c.006.376.052.737.14 1.078H14.7v.422h-.59c-.13.848-.308 1.623-.53 2.29a8.355 8.355 0 0 1-.34.86 6.731 6.731 0 0 0 1.478-.706c.05.544.21 1.041.453 1.48A8.25 8.25 0 1 1 11.1 3.75Zm8.45 7.903c.286.08.562.208.805.393.475.362.795.92.795 1.625v.75h-1.5v-.75a.5.5 0 0 0-.205-.432c-.145-.11-.377-.19-.645-.19s-.5.08-.646.19a.499.499 0 0 0-.204.432c0 .415.123.586.248.697.179.159.44.267.87.43.37.142.909.338 1.33.713.475.422.752 1.014.752 1.817 0 .704-.32 1.263-.795 1.625a2.39 2.39 0 0 1-.804.393v.904h-1.5v-.903a2.39 2.39 0 0 1-.805-.394 1.995 1.995 0 0 1-.796-1.625v-.75h1.5v.75a.5.5 0 0 0 .204.433c.146.11.378.19.646.19s.5-.08.645-.19a.5.5 0 0 0 .205-.433c0-.415-.123-.585-.248-.696-.178-.159-.44-.267-.869-.43-.37-.142-.91-.338-1.33-.713-.476-.422-.753-1.015-.753-1.818 0-.704.32-1.263.796-1.625.243-.185.52-.313.805-.393v-.903h1.5v.903ZM9.61 15.25c.114.681.26 1.294.435 1.816.212.635.447 1.095.672 1.38.23.291.364.303.383.303.02 0 .155-.011.384-.303.225-.285.46-.745.672-1.38.174-.522.32-1.135.435-1.816H9.609Zm-4.426 0a6.767 6.767 0 0 0 3.775 3.15 8.377 8.377 0 0 1-.338-.86 14.21 14.21 0 0 1-.531-2.29H5.184Zm-.604-5a6.758 6.758 0 0 0 0 3.5h3.34A22.854 22.854 0 0 1 7.851 12c0-.6.025-1.185.068-1.75H4.58Zm4.844 0a21.225 21.225 0 0 0 0 3.5h3.352a21.21 21.21 0 0 0 .075-1.75c0-.606-.028-1.192-.075-1.75H9.424Zm-.465-4.651A6.768 6.768 0 0 0 5.184 8.75H8.09c.13-.848.309-1.623.531-2.29.101-.304.214-.593.338-.861Zm2.14-.349c-.018 0-.153.013-.382.304-.225.285-.46.745-.672 1.38a12.41 12.41 0 0 0-.436 1.816h2.982a12.25 12.25 0 0 0-.435-1.816c-.211-.635-.447-1.095-.672-1.38-.23-.292-.365-.304-.383-.304H11.1Zm2.141.349c.124.268.239.557.34.861.222.667.4 1.442.53 2.29h2.907a6.768 6.768 0 0 0-3.777-3.151Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-globe-dollar-sign', JhIconGlobeDollarSign);