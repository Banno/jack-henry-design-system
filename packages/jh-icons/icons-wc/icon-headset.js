/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconHeadset extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M11.999 3.25c3.265 0 5.751 2.307 5.751 4.75v.574A3.752 3.752 0 0 1 17 16h-.5a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .5-.705V8c0-1.414-1.598-3.25-4.251-3.25C9.333 4.75 7.75 6.585 7.75 8v.545c.29.103.5.379.5.705v6a.75.75 0 0 1-.75.75h-.228c.018.163.05.378.101.607.12.534.308.946.523 1.119.107.085.361.212.774.352.389.133.844.253 1.287.356l.139.03c.128-.19.29-.35.466-.473.399-.28.91-.43 1.438-.43.528 0 1.04.15 1.438.43.396.279.736.734.736 1.32 0 .587-.34 1.043-.736 1.32-.398.28-.91.43-1.438.43-.528 0-1.04-.15-1.438-.43a1.799 1.799 0 0 1-.576-.656c-.119-.026-.243-.051-.368-.08a15.23 15.23 0 0 1-1.431-.397c-.432-.147-.902-.34-1.227-.6-.647-.518-.922-1.387-1.05-1.962a7.156 7.156 0 0 1-.154-1.054l-.004-.073-.001-.022v-.002a3.75 3.75 0 0 1 .499-7.21V8c0-2.442 2.467-4.75 5.749-4.75ZM6.75 10.015a2.25 2.25 0 0 0 0 4.47v-4.47Zm10.5 4.47a2.249 2.249 0 0 0 0-4.47v4.47Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-headset', JhIconHeadset);