/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconNoteSticky extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M5.296 2.222 21.14 4.449a.75.75 0 0 1 .639.846l-.957 6.809c-.434 3.086-.952 5.545-3.266 7.328-1.21.933-2.66 1.266-4.147 1.324a16.715 16.715 0 0 1-2.051-.063c-.043 0-.087.002-.131 0a.751.751 0 0 1-.156-.026 51.975 51.975 0 0 1-2.269-.281l-5.941-.835a.75.75 0 0 1-.639-.847L4.449 2.86a.75.75 0 0 1 .847-.638Zm9.782 13.59c-.261-.09-.582.113-.622.357-.136.84-.38 1.921-.818 2.802a5.008 5.008 0 0 1-.152.276c1.254-.065 2.31-.353 3.154-1.003a5.424 5.424 0 0 0 1.616-1.988c-.105.017-.21.03-.315.037-.99.072-2.067-.208-2.862-.481ZM3.812 18.17l5.2.73c.82.116 1.613.222 2.374.29.28-.027.59-.248.91-.888.336-.676.55-1.58.68-2.373.194-1.19 1.476-1.918 2.59-1.535.742.255 1.585.454 2.266.404.332-.024.58-.104.755-.223.16-.11.305-.28.397-.585.132-.63.244-1.325.352-2.095l.853-6.066-14.36-2.017L3.812 18.17Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-note-sticky', JhIconNoteSticky);