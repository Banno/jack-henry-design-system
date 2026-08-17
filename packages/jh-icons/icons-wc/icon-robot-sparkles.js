/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconRobotSparkle extends LitElement {
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
      :host([size='xx-large']) {
        --icon-size: var(
          --jh-icon-size-extra-extra-large,
          var(--jh-dimension-2100)
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

    /** @type {'x-small'|'small'|'medium'|'large'|'x-large'|'xx-large'} */
    this.size = 'medium';
  }

  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M14.47 15.47a.75.75 0 1 1 1.06 1.06L15 16l.53.53-.011.012-.018.016a2.203 2.203 0 0 1-.238.198 4.452 4.452 0 0 1-.678.415c-.592.296-1.456.579-2.585.579-1.13 0-1.993-.283-2.585-.58a4.453 4.453 0 0 1-.678-.414 3.238 3.238 0 0 1-.256-.214l-.01-.01c0-.001.011-.015.529-.532l-.53.53a.75.75 0 1 1 1.06-1.06l.011.008c.018.016.05.044.097.079.093.07.242.17.447.272.408.204 1.045.42 1.915.42.87 0 1.507-.216 1.915-.42.205-.103.354-.203.447-.272.047-.035.079-.063.097-.079l.012-.008Z"/>   <path d="M14.473 15.468v-.002l.003-.002-.003.004Z"/>   <path fill-rule="evenodd" d="M15 10a2 2 0 0 1 .204 3.99L15 14H9l-.204-.01A2 2 0 0 1 9 10h6Zm-6 1.5a.5.5 0 0 0 0 1h6a.5.5 0 1 0 0-1H9Z" clip-rule="evenodd"/>   <path fill-rule="evenodd" d="M12 5.5a1 1 0 0 1 1 1h3.5A3.5 3.5 0 0 1 20 10v3a1 1 0 0 1 1 1v3a1 1 0 0 1-1.143.988A3.5 3.5 0 0 1 16.5 20.5h-9a3.501 3.501 0 0 1-3.358-2.512 1 1 0 0 1-1.137-.886L3 17v-3a1 1 0 0 1 1-1v-3a3.5 3.5 0 0 1 3.5-3.5H11a1 1 0 0 1 1-1ZM7.5 8a2 2 0 0 0-2 2v7l.01.204a2 2 0 0 0 1.786 1.785L7.5 19h9l.204-.01a2 2 0 0 0 1.785-1.785L18.5 17v-7a2 2 0 0 0-2-2h-9Z" clip-rule="evenodd"/>   <path d="M18.935 2.316a.5.5 0 0 1 .93 0l.377.958a.5.5 0 0 0 .282.282l.958.379a.5.5 0 0 1 0 .93l-.958.377a.502.502 0 0 0-.282.282l-.378.958a.5.5 0 0 1-.93 0l-.377-.958a.502.502 0 0 0-.283-.282l-.958-.378a.5.5 0 0 1 0-.93l.958-.378a.5.5 0 0 0 .283-.282l.378-.958Zm-4.665-.004a.5.5 0 0 1 .928 0l.198.49a.5.5 0 0 0 .284.28l.468.18a.5.5 0 0 1 0 .934l-.468.18a.5.5 0 0 0-.284.28l-.198.49a.5.5 0 0 1-.928 0l-.197-.49a.5.5 0 0 0-.284-.28l-.469-.18a.5.5 0 0 1 0-.933l.47-.181a.5.5 0 0 0 .283-.28l.197-.49Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-robot-sparkles', JhIconRobotSparkle);