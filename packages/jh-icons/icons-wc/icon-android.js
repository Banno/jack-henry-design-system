/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconAndroid extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M7 17c0 .458.375.833.833.833h.834v2.917c0 .692.558 1.25 1.25 1.25.691 0 1.25-.558 1.25-1.25v-2.917h1.666v2.917c0 .692.559 1.25 1.25 1.25.692 0 1.25-.558 1.25-1.25v-2.917h.834A.836.836 0 0 0 17 17V8.667H7V17ZM4.917 8.667c-.692 0-1.25.558-1.25 1.25v5.833c0 .692.558 1.25 1.25 1.25.691 0 1.25-.558 1.25-1.25V9.917c0-.692-.559-1.25-1.25-1.25Zm14.166 0c-.691 0-1.25.558-1.25 1.25v5.833c0 .692.559 1.25 1.25 1.25.692 0 1.25-.558 1.25-1.25V9.917c0-.692-.558-1.25-1.25-1.25ZM14.942 3.8l1.083-1.083a.413.413 0 0 0 0-.592.413.413 0 0 0-.592 0L14.2 3.358a4.866 4.866 0 0 0-2.2-.525c-.8 0-1.55.192-2.217.525L8.542 2.125a.413.413 0 0 0-.592 0 .413.413 0 0 0 0 .592l1.092 1.091A4.986 4.986 0 0 0 7 7.833h10A4.971 4.971 0 0 0 14.942 3.8Zm-4.609 2.367H9.5v-.834h.833v.834Zm4.167 0h-.833v-.834h.833v.834Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-android', JhIconAndroid);