// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconFootball extends LitElement {
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
          var(--jh-size-400)
        );
      }
      :host([size='small']) {
        --icon-size: var(
          --jh-icon-size-small,
          var(--jh-size-500)
        );
      }
      :host([size='medium']) {
        --icon-size: var(
          --jh-icon-size-medium,
          var(--jh-size-600)
        );
      }
      :host([size='large']) {
        --icon-size: var(
          --jh-icon-size-large,
          var(--jh-size-900)
        );
      }
      :host([size='x-large']) {
        --icon-size: var(
          --jh-icon-size-extra-large,
          var(--jh-size-1400)
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M7.53 7.531c1.727-1.726 4.566-2.472 7.19-2.749l.25.25 4 4 .249.249c-.277 2.624-1.023 5.464-2.75 7.19-1.726 1.726-4.565 2.472-7.19 2.749l-.249-.25-4-4-.249-.248c.277-2.625 1.023-5.464 2.75-7.19Zm-2.88 9.181 2.64 2.639a28.751 28.751 0 0 1-2.595-.045 28.763 28.763 0 0 1-.045-2.594Zm14.7-9.422a28.751 28.751 0 0 0-.045-2.594 28.755 28.755 0 0 0-2.594-.045l2.639 2.64Zm1.395-3.371L20 4l.745-.083a.75.75 0 0 0-.662-.662L20 4l.082-.745h-.002l-.007-.001-.022-.003a10.863 10.863 0 0 0-.388-.034 29.422 29.422 0 0 0-4.73.036c-2.783.253-6.266 1.02-8.463 3.217-2.198 2.197-2.964 5.68-3.217 8.462a29.422 29.422 0 0 0-.036 4.731 17.376 17.376 0 0 0 .034.388l.003.023v.008l.746-.08-.745.083a.75.75 0 0 0 .662.663L4 20c-.083.745-.083.745-.082.746h.009l.022.003a10.412 10.412 0 0 0 .388.034 29.414 29.414 0 0 0 4.73-.036c2.783-.253 6.266-1.02 8.463-3.217 2.198-2.197 2.964-5.68 3.217-8.462a29.414 29.414 0 0 0 .036-4.73 17.638 17.638 0 0 0-.034-.389l-.003-.022v-.008Zm-10.16 5.607a.75.75 0 0 0-1.06 1.06l1.414 1.415-.939.94-.414-.415a.75.75 0 1 0-1.06 1.06l1.767 1.769a.75.75 0 1 0 1.06-1.061l-.292-.293.939-.94 1.414 1.415a.75.75 0 0 0 1.06-1.06L13.062 12l.939-.94.293.294a.75.75 0 0 0 1.06-1.061l-1.767-1.768a.75.75 0 0 0-1.06 1.06l.413.415-.939.94-1.414-1.415Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-football', JhIconFootball);