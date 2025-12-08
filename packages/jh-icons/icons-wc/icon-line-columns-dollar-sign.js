/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconLineColumnsDollarSign extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M20.001 19A.75.75 0 0 1 20 20.5H4A.75.75 0 0 1 4 19h16.001ZM14 15.125a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h3Zm6 0a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h3ZM6.95 4.278c.285.08.561.208.804.393.475.362.796.92.796 1.625v.75h-1.5v-.75a.5.5 0 0 0-.205-.432 1.09 1.09 0 0 0-.646-.19c-.268 0-.5.08-.645.19a.5.5 0 0 0-.204.432c0 .415.123.586.248.697.178.159.44.267.869.43.37.142.91.338 1.33.713.475.422.753 1.014.753 1.817 0 .705-.32 1.263-.796 1.625a2.389 2.389 0 0 1-.804.394v.903h-1.5v-.903a2.392 2.392 0 0 1-.804-.394 1.996 1.996 0 0 1-.796-1.625v-.75h1.5v.75a.5.5 0 0 0 .204.433c.145.11.377.19.645.19s.5-.08.646-.19a.5.5 0 0 0 .205-.433c0-.415-.123-.585-.248-.696-.179-.159-.44-.267-.87-.43-.37-.142-.909-.338-1.33-.713-.475-.422-.752-1.015-.752-1.818 0-.704.32-1.263.796-1.625.243-.185.519-.313.804-.393v-.903h1.5v.903ZM14 11.125a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h3Zm6 0a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h3ZM14 7.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h3Zm6 0a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h3Zm-6-3.875a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h3Zm6 0a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h3Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-line-columns-dollar-sign', JhIconLineColumnsDollarSign);