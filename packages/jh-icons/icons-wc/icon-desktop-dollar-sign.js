/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconDesktopDollarSign extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M20 3.25a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75h-4.959l.67 2.013a.75.75 0 0 1-.711.987H9a.75.75 0 0 1-.712-.987l.671-2.013H4a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 4 3.25h16Zm-9.959 16h3.918l-.5-1.5h-2.918l-.5 1.5Zm-5.291-3h14.5V15H4.75v1.25Zm0-2.75h14.5V4.75H4.75v8.75Zm7.825-7.22c.235.063.464.163.67.307.42.294.73.77.73 1.389h-1.5c0-.069-.019-.109-.09-.159a.858.858 0 0 0-.473-.123.858.858 0 0 0-.473.123c-.07.05-.09.09-.09.159 0 .24.07.31.134.364.125.101.317.177.676.303.297.103.762.257 1.13.556.426.348.686.851.686 1.527 0 .618-.31 1.094-.73 1.388a2.131 2.131 0 0 1-.67.305v.693h-1.5v-.747a2.073 2.073 0 0 1-.495-.25c-.42-.295-.73-.77-.73-1.39h1.5c0 .069.018.11.09.159a.803.803 0 0 0 .377.116h.19a.803.803 0 0 0 .378-.116c.07-.05.09-.09.09-.158 0-.241-.07-.312-.134-.365-.125-.101-.317-.177-.676-.302-.297-.104-.761-.258-1.129-.557-.427-.348-.686-.851-.686-1.526 0-.62.31-1.095.73-1.39a2.12 2.12 0 0 1 .495-.252V5.5h1.5v.78Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-desktop-dollar-sign', JhIconDesktopDollarSign);