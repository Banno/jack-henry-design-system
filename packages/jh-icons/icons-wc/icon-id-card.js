/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconIdCard extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M19.111 18.5H4.89c-1.35 0-2.389-1.11-2.389-2.409V7.91C2.5 6.611 3.538 5.5 4.889 5.5H19.11c1.35 0 2.389 1.111 2.389 2.41v8.181c0 1.298-1.038 2.41-2.389 2.41ZM4.89 17h14.22a.9.9 0 0 0 .889-.909V7.91a.9.9 0 0 0-.888-.91H4.89a.9.9 0 0 0-.89.91v8.181a.9.9 0 0 0 .889.91ZM14 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-.5 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Zm-2.84-3.05c.028-.765-.265-1.394-.757-1.817-.473-.407-1.082-.588-1.658-.588-.577 0-1.186.183-1.66.587-.492.42-.794 1.044-.775 1.808v.015c.023.493.085.983.184 1.466a3.901 3.901 0 0 0-.261.12c-.445.223-1.233.74-1.233 1.7v.51a.75.75 0 0 0 1.5 0v-.51c0-.03.032-.172.407-.36a2.827 2.827 0 0 1 .627-.223l.006-.002a.75.75 0 0 0 .57-.943 7.859 7.859 0 0 1-.3-1.817c-.007-.315.106-.501.249-.623.161-.137.409-.227.687-.228.279 0 .522.09.678.224.137.118.248.302.237.62a8.102 8.102 0 0 1-.302 1.826.75.75 0 0 0 .578.943h.007l.037.01a2.917 2.917 0 0 1 .603.212c.385.188.416.332.416.361v.51a.75.75 0 0 0 1.5 0v-.51c0-.97-.804-1.487-1.254-1.708a3.992 3.992 0 0 0-.27-.12c.098-.48.16-.966.183-1.455v-.008Zm-1.223 2.708h.001Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-id-card', JhIconIdCard);