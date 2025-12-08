/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconChartNetwork extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M12 2a2.248 2.248 0 0 1 .75 4.368v1.448c.995.178 1.87.701 2.496 1.442l1.893-1.092a2.25 2.25 0 1 1 .753 1.297l-1.894 1.094a4.24 4.24 0 0 1 0 2.884l1.895 1.094a2.25 2.25 0 1 1-.754 1.297l-1.892-1.093a4.243 4.243 0 0 1-2.497 1.444v1.448A2.248 2.248 0 0 1 12 22a2.25 2.25 0 0 1-.75-4.37v-1.447a4.244 4.244 0 0 1-2.499-1.445l-1.89 1.093a2.25 2.25 0 1 1-.754-1.296L8 13.441A4.242 4.242 0 0 1 7.75 12c0-.507.088-.993.251-1.443L6.105 9.463a2.25 2.25 0 1 1 .754-1.297l1.894 1.093a4.245 4.245 0 0 1 2.497-1.443V6.368A2.248 2.248 0 0 1 12 2Zm0 17a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-7.349-3.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm14.698 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM12 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM4.65 7a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm14.7 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM12 3.5A.75.75 0 1 0 12 5a.75.75 0 0 0 0-1.5Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-chart-network', JhIconChartNetwork);