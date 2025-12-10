/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconSeedling extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M13.725 5.133c1.33-.92 3.126-.957 4.448-.828a14.011 14.011 0 0 1 2.395.454l.04.012.016.005h.002l.63.197-.114.65-.739-.13.739.13v.001l-.002.004-.001.011-.007.036a12.011 12.011 0 0 1-.133.593c-.096.384-.248.912-.465 1.487-.42 1.114-1.145 2.553-2.338 3.365-1.198.814-2.785.936-3.958.895a12.842 12.842 0 0 1-1.488-.143v5.395c1.638.072 3.195.367 4.383.656a26.069 26.069 0 0 1 2.125.617l.126.044.034.012.01.003.002.001v.001h.002a.75.75 0 0 1-.522 1.406l-.006-.002-.026-.01c-.024-.008-.061-.02-.11-.038a24.52 24.52 0 0 0-1.991-.576c-1.304-.318-3.033-.63-4.777-.63-1.745 0-3.512.312-4.855.631a26.723 26.723 0 0 0-2.062.578l-.115.038-.028.01-.006.002-.001.001a.75.75 0 0 1-.502-1.413l.004-.002.01-.004.034-.011.131-.044a28.294 28.294 0 0 1 2.188-.614c1.218-.29 2.806-.584 4.452-.656v-3.055a9.932 9.932 0 0 1-.724.269c-.9.293-2.19.564-3.34.185-1.143-.376-2.043-1.357-2.617-2.127a11.168 11.168 0 0 1-.882-1.395c-.022-.04-.038-.074-.05-.098l-.014-.028-.005-.008v-.003h-.002l-.289-.595.552-.36v-.002l.005-.003.038-.024a10.01 10.01 0 0 1 .482-.284 11.39 11.39 0 0 1 1.287-.608c.997-.393 2.432-.78 3.712-.347.949.32 1.618 1.011 2.08 1.704v-.095c.007-.403.043-.96.153-1.572.214-1.192.742-2.756 2.089-3.688Zm-4.801 5.073c-.747-.253-1.749-.048-2.682.32a9.683 9.683 0 0 0-.931.43c.125.203.28.441.461.686.535.717 1.2 1.375 1.884 1.6.678.222 1.577.082 2.407-.187.182-.06.354-.125.51-.188-.037-.018-.073-.037-.112-.055a7.64 7.64 0 0 0-2.982-.683.501.501 0 0 1 .025-1 8.63 8.63 0 0 1 2.976.606c-.37-.695-.882-1.301-1.556-1.53Zm9.103-4.408c-1.254-.122-2.583-.03-3.45.569-.85.588-1.275 1.658-1.466 2.72l-.005.026a10.647 10.647 0 0 1 3.974-2.275.5.5 0 0 1 .3.954 9.65 9.65 0 0 0-3.385 1.87c-.34.291-.6.557-.781.757.304.041.675.082 1.077.096 1.097.038 2.275-.1 3.061-.636.793-.538 1.383-1.602 1.78-2.654.167-.444.29-.86.376-1.187a12.45 12.45 0 0 0-1.48-.24Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-seedling', JhIconSeedling);