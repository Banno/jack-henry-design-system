/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconVideoSlash extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M5.914 5.006H15a2 2 0 0 1 2 2V8.62l1.644-1.517C19.924 5.922 22 6.831 22 8.574v6.864c0 1.743-2.075 2.652-3.356 1.47L17 15.39v.7l2.839 2.84-.707.707L2.868 3.374l.707-.707 2.34 2.339Zm-1.328 1.5H4a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .394-.192l1.062 1.063a1.995 1.995 0 0 1-1.456.629H4a2 2 0 0 1-2-2v-10c0-.834.51-1.55 1.236-1.85l1.35 1.35ZM20.5 8.574a.5.5 0 0 0-.839-.368l-2.5 2.308a.502.502 0 0 0-.161.368v2.248a.5.5 0 0 0 .161.368l2.5 2.308a.5.5 0 0 0 .839-.368V8.573Zm-10.586.432h3.336a.75.75 0 0 1 0 1.5h-1.836l4.086 4.086V7.006a.5.5 0 0 0-.5-.5H7.414l2.5 2.5Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-video-slash', JhIconVideoSlash);