/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconGraduationCap extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M11.593 4.328a.75.75 0 0 1 .656-.003l9.327 4.495a.75.75 0 0 1 .001 1.35l-.327.159v4.922a.75.75 0 1 1-1.5 0v-4.195l-1.5.728v4.967c0 .611-.326 1.101-.72 1.457-.393.356-.914.637-1.478.856-1.133.439-2.602.687-4.052.687-1.45 0-2.92-.248-4.052-.687-.565-.22-1.086-.5-1.478-.856-.394-.355-.72-.846-.72-1.457v-4.95l-3.33-1.626a.75.75 0 0 1 0-1.347l9.173-4.5Zm.694 10.348 4.463-2.165v4.24c0 .04-.018.156-.226.345-.208.188-.547.388-1.014.569-.93.36-2.21.586-3.51.586-1.3 0-2.58-.226-3.51-.586-.467-.181-.806-.38-1.014-.57-.209-.188-.226-.304-.226-.344v-4.216l4.38 2.14a.75.75 0 0 0 .657 0Zm-.361-8.841L4.456 9.5l7.505 3.667 7.566-3.67-7.601-3.662Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-graduation-cap', JhIconGraduationCap);