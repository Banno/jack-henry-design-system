// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconCircleQuestionMark extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75c0 5.385-4.365 9.75-9.75 9.75S2.25 17.386 2.25 12Zm8.51-3.839c-.296.246-.51.618-.51 1.173a.75.75 0 0 1-1.5 0c0-1 .411-1.795 1.052-2.327.624-.518 1.427-.756 2.198-.756.753 0 1.545.209 2.168.674A2.644 2.644 0 0 1 15.25 9.1c0 1.389-.844 2.28-1.495 2.873-.138.125-.258.23-.367.325a6.707 6.707 0 0 0-.454.42c-.15.156-.18.23-.184.243V14a.75.75 0 0 1-1.5 0v-1.05c0-.568.337-.993.598-1.267.177-.186.413-.393.628-.58l.27-.24c.598-.545 1.004-1.053 1.004-1.763 0-.447-.187-.756-.48-.974-.315-.235-.773-.376-1.27-.376-.479 0-.926.15-1.24.41Zm1.24 9.34a1 1 0 1 0 0-2.001 1 1 0 0 0 0 2Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-circle-question-mark', JhIconCircleQuestionMark);