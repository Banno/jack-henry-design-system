/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconLinkBreak extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M5.8 12.9a3.758 3.758 0 0 1 4.019-.838l-1.246 1.246a2.25 2.25 0 0 0-1.542.5l-.17.152-2.744 2.743c-.87.906-.869 2.313 0 3.181a2.256 2.256 0 0 0 3.182 0c.584-.583 1.269-1.27 1.808-1.81l.669-.67.194-.194.052-.052.014-.013.003-.004h.002c.466-.467.68-1.093.649-1.708l1.249-1.249a3.758 3.758 0 0 1-.838 4.017V18.2l-.004.005-.26.26-.668.67-1.81 1.81a3.756 3.756 0 0 1-5.303 0c-1.471-1.472-1.436-3.822-.009-5.295l.01-.009L5.8 12.9Zm8.7 4.6a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm2.72-.28a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Zm2.53-3.47a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5h1.5ZM15.3 3.4a3.759 3.759 0 0 1 5.302 0 3.76 3.76 0 0 1 .133 5.164l-.133.14H20.6l-.003.005-.065.065-.195.193-.668.668-1.808 1.807a3.755 3.755 0 0 1-4.019.839l1.25-1.25a2.242 2.242 0 0 0 1.708-.65 4087.043 4087.043 0 0 1 2.478-2.475l.194-.194.066-.065.003-.004a2.26 2.26 0 0 0 0-3.183 2.259 2.259 0 0 0-3.181 0h-.001l-2.628 2.73-.002.002a2.458 2.458 0 0 0-.71 1.67l-1.287 1.286c-.494-1.355-.118-2.93.92-4l2.637-2.74.01-.01ZM5.75 8.75a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5h1.5ZM4.22 4.22a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06ZM9.5 3.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-link-break', JhIconLinkBreak);