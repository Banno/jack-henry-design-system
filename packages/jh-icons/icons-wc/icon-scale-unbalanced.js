/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconScaleUnbalanced extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M16.5 19.75a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5h9Zm-4.5-17a.75.75 0 0 1 .75.75v.201c.116.068.223.15.316.245l4.495-1.172a.75.75 0 0 1 .915.537.744.744 0 0 1-.03.46l2.563 5.074c.164.118.367.31.485.589l.005-.001v.002c.009.917-.277 1.813-.94 2.48-.665.67-1.628 1.027-2.809 1.027-1.182 0-2.142-.357-2.806-1.028-.66-.667-.944-1.56-.944-2.472 0-.346.235-.635.554-.721l2.1-4.16-3.209.835a1.5 1.5 0 0 1-.695.902V17.25h1.75a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5h1.75V6.298a1.506 1.506 0 0 1-.318-.246L7.09 7.056l2.419 4.79c.164.118.367.31.485.588l.005-.001v.002a3.369 3.369 0 0 1-1.028 2.494c-.676.647-1.623 1.013-2.721 1.013-1.099 0-2.043-.367-2.717-1.014-.672-.647-1.033-1.534-1.033-2.486 0-.346.235-.635.554-.721L5.55 6.773a.75.75 0 0 1 .51-.999l4.494-1.173a1.5 1.5 0 0 1 .695-.9V3.5a.75.75 0 0 1 .75-.75ZM4.139 13.192c.098.25.244.472.433.655.362.347.919.595 1.678.595.76 0 1.32-.248 1.684-.596.19-.183.336-.404.433-.654H4.14Zm.05-1.5h4.123L6.25 7.61l-2.062 4.083Zm11.425-1.5c.087.265.22.49.397.667.32.325.862.583 1.739.583.878 0 1.422-.259 1.745-.584a1.66 1.66 0 0 0 .396-.666h-4.277Zm.074-1.5h4.123L17.75 4.61l-2.062 4.083Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-scale-unbalanced', JhIconScaleUnbalanced);