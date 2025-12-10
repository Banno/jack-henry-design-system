/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconHourglassEnd extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M17.25 3a.75.75 0 0 1 0 1.5H17v1.621a5.752 5.752 0 0 1-1.423 3.787l-1.686 1.927a.251.251 0 0 0 0 .33l1.686 1.927A5.752 5.752 0 0 1 17 17.879V19.5h.25a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1 0-1.5H7v-1.621c0-1.393.506-2.739 1.423-3.787l1.686-1.927a.251.251 0 0 0 0-.33L8.423 9.908A5.752 5.752 0 0 1 7 6.121V4.5h-.25a.75.75 0 0 1 0-1.5h10.5ZM8.5 6.121A4.25 4.25 0 0 0 9.552 8.92l1.686 1.928a1.75 1.75 0 0 1 0 2.304L9.552 15.08a4.25 4.25 0 0 0-1.052 2.8v1.371h.125l3.043-2.705a.5.5 0 0 1 .664 0l3.043 2.705h.125V17.88a4.25 4.25 0 0 0-1.052-2.799l-1.686-1.928a1.75 1.75 0 0 1 0-2.304l1.686-1.928A4.25 4.25 0 0 0 15.5 6.12V4.75h-7v1.371Zm4.023 2.607a.5.5 0 0 1 .376.829l-.523.598a.5.5 0 0 1-.752 0l-.523-.598a.5.5 0 0 1 .376-.83h1.046Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-hourglass-end', JhIconHourglassEnd);