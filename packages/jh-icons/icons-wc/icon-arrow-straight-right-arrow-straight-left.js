/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconArrowStraightRightArrowStraightLeft extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M7.661 11.472a.75.75 0 0 1 1.065 1.056L6.022 15.25h9.123a.75.75 0 0 1 0 1.5H6.022l2.704 2.722a.75.75 0 0 1-1.065 1.056l-3.973-4L3.164 16l.524-.528 3.973-4Zm7.451-8.004a.75.75 0 0 1 1.06.004l3.973 4L20.67 8l-.525.528-3.972 4a.75.75 0 0 1-1.065-1.056l2.703-2.722H8.689a.75.75 0 0 1 0-1.5h9.122l-2.703-2.722a.75.75 0 0 1 .004-1.06Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrow-straight-right-arrow-straight-left', JhIconArrowStraightRightArrowStraightLeft);