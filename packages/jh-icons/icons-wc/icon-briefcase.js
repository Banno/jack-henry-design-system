/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconBriefcase extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M9 6.5h6V5H9v1.5Zm7.5 0V4.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75V6.5H3.75a.75.75 0 0 0-.75.75v12c0 .415.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-12a.75.75 0 0 0-.75-.75H16.5Zm-6.75 5.453L4.5 10.7v7.8h15v-7.793L14.25 12v1.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-1.297Zm0-1.542L4.5 9.158V8h15v1.163l-5.25 1.293v-.206a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v.161Zm1.5 2.09V11h1.5v1.5h-1.5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-briefcase', JhIconBriefcase);