/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconChartDollarSignTrendUp extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M20 7a.75.75 0 0 1-1.5 0V5.787l-5.6 5.498a.75.75 0 0 1-1.055-.005L9.368 8.804 4.75 13.308v5.942H20a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v7.213l4.102-4 .056-.05a.75.75 0 0 1 .997.057l2.474 2.473 5.036-4.943H16.25a.75.75 0 0 1 0-1.5H20V7Zm-2.145 2.428a.75.75 0 0 1 .75.75v.369c.23.076.45.189.648.346.428.34.707.856.707 1.495a.75.75 0 0 1-1.5 0c0-.168-.06-.257-.14-.32a.765.765 0 0 0-.465-.14c-.2 0-.366.06-.465.14-.08.063-.14.152-.14.32 0 .353.1.481.183.558.132.123.332.212.699.358.31.123.789.303 1.164.65.425.394.664.938.664 1.66 0 .637-.279 1.154-.707 1.494a2.09 2.09 0 0 1-.648.344v.37a.75.75 0 0 1-1.5 0v-.37a2.093 2.093 0 0 1-.648-.344 1.866 1.866 0 0 1-.707-1.495.75.75 0 0 1 1.5 0c0 .168.06.256.14.32.097.077.26.138.457.14h.014a.763.763 0 0 0 .46-.14c.079-.064.139-.152.139-.32 0-.354-.1-.481-.184-.558-.132-.123-.33-.212-.698-.358-.31-.123-.789-.303-1.164-.65-.425-.394-.664-.938-.664-1.66 0-.638.279-1.154.707-1.494.197-.157.418-.27.648-.346v-.37a.75.75 0 0 1 .75-.75Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-chart-dollar-sign-trend-up', JhIconChartDollarSignTrendUp);