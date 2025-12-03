/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconBookAddress extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M18.508 2.508a.75.75 0 0 1 .75.75v2.79a.75.75 0 0 1 .746.75v12.838a.754.754 0 0 1-.007.095v1.262a.75.75 0 0 1-.75.75H6.75c-.872 0-1.698-.178-2.334-.502-.533-.271-1.103-.745-1.215-1.435a.751.751 0 0 1-.02-.17V5.258a2.75 2.75 0 0 1 2.75-2.75h12.577ZM6.792 18.875h-.031l-.014-.001c-.684 0-1.266.143-1.65.339-.426.216-.416.38-.416.346 0-.035-.01.129.416.345.381.195.959.336 1.637.338h.052l.022.001h11.69v-1.369l-11.706.001ZM5.931 4.008c-.69 0-1.25.56-1.25 1.25v12.497A5.058 5.058 0 0 1 6 17.42V4.008h-.07ZM7.5 17.374h10.258V4.008H7.5v13.366Zm5.071-9.981c.617 0 1.2.186 1.633.6.437.416.642.99.642 1.608 0 .455-.104.83-.2 1.1.242.156.481.348.689.574.356.387.665.925.665 1.581a.75.75 0 1 1-1.5 0c0-.165-.077-.356-.27-.565a2.157 2.157 0 0 0-.52-.403l-.19-.096a.862.862 0 0 1-.454-.472.93.93 0 0 1-.046-.497c.03-.175.116-.373.148-.453.093-.233.178-.47.178-.77 0-.281-.087-.437-.178-.524-.095-.09-.276-.183-.597-.183-.319 0-.481.092-.562.172-.081.081-.17.237-.17.536 0 .293.089.532.185.755.033.076.12.261.159.408.02.077.062.256.011.466a.832.832 0 0 1-.471.562 9.211 9.211 0 0 0-1.032.58c.02-.014.004-.01-.03.047a1.11 1.11 0 0 0-.094.218 2.003 2.003 0 0 0-.07.298l-.003.014-.013.074a.75.75 0 0 1-1.475-.256v-.008l.002-.013a2.47 2.47 0 0 1 .028-.169c.02-.103.054-.247.106-.404.088-.27.287-.77.734-1.06.224-.146.46-.286.673-.404a3.148 3.148 0 0 1-.21-1.108c0-.601.185-1.175.61-1.598.425-.423 1.004-.61 1.622-.61Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-book-address', JhIconBookAddress);