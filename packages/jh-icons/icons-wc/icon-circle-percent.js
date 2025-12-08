/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconCirclePercent extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M12 3.25a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5Zm0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5Zm1.85 2.527a.75.75 0 0 1 1.3.75l-5 8.66a.75.75 0 0 1-1.3-.75l5-8.66Zm.832 5.223c.546 0 1.03.26 1.355.688.317.418.466.966.466 1.562 0 .596-.15 1.144-.466 1.561-.325.43-.809.689-1.355.689-.547 0-1.03-.26-1.356-.689-.317-.417-.466-.965-.466-1.561s.15-1.144.466-1.562a1.688 1.688 0 0 1 1.356-.688Zm0 1.5c-.045 0-.098.014-.16.096-.072.094-.162.296-.162.654 0 .358.09.56.162.654.062.082.115.096.16.096.044 0 .098-.014.16-.096.07-.094.16-.296.16-.654 0-.357-.09-.56-.16-.654-.062-.082-.116-.096-.16-.096Zm-5.36-7c.546 0 1.03.26 1.355.688.316.418.466.966.466 1.562 0 .596-.15 1.144-.466 1.562a1.688 1.688 0 0 1-1.356.688c-.546 0-1.03-.26-1.355-.688-.317-.418-.466-.966-.466-1.562 0-.596.15-1.144.466-1.562A1.687 1.687 0 0 1 9.32 7Zm0 1.5c-.046 0-.099.014-.16.096C9.09 8.69 9 8.892 9 9.25c0 .358.09.56.161.654.062.082.115.096.16.096s.098-.014.16-.096c.072-.094.162-.296.162-.654 0-.358-.09-.56-.162-.654-.062-.082-.115-.096-.16-.096Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-circle-percent', JhIconCirclePercent);