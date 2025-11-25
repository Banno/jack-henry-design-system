// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconUserPlu extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M7.928 4.796c.614-.426 1.397-.67 2.366-.67.97 0 1.752.244 2.366.67.61.423 1.002.99 1.253 1.556.484 1.089.484 2.267.484 2.697v.017c0 .529-.137 1.264-.432 2-.253.632-.64 1.308-1.204 1.869a.83.83 0 0 0 .065.194c.047.097.127.2.318.296.347.173.804.313 1.363.473l.178.05c.49.139 1.038.294 1.543.494.568.224 1.156.533 1.606 1.01.471.501.754 1.15.754 1.961v1.712a.75.75 0 0 1-1.5 0v-1.712c0-.428-.136-.709-.346-.932-.231-.246-.585-.454-1.066-.645-.43-.17-.9-.303-1.402-.445l-.177-.05c-.541-.155-1.132-.329-1.624-.574a2.13 2.13 0 0 1-.996-.98c-.188-.387-.237-.787-.251-1.119l-.016-.372.287-.237c.487-.402.842-.968 1.076-1.55.235-.588.324-1.133.324-1.443 0-.423-.007-1.323-.354-2.105-.168-.378-.405-.701-.738-.933-.33-.228-.803-.403-1.51-.403-.708 0-1.183.175-1.512.403-.333.232-.57.555-.737.933-.348.782-.355 1.682-.355 2.105 0 .31.088.85.32 1.433.231.578.582 1.141 1.065 1.547l.323.271-.064.417c-.034.222-.109.59-.27.96-.158.359-.44.818-.95 1.072-.492.246-1.082.42-1.623.574l-.178.05c-.5.143-.972.276-1.402.446-.48.19-.835.4-1.066.645-.21.223-.346.504-.346.932v1.712a.75.75 0 0 1-1.5 0v-1.712c0-.811.283-1.46.754-1.96.45-.478 1.039-.787 1.606-1.011.505-.2 1.053-.355 1.543-.494l.178-.05c.56-.16 1.016-.3 1.363-.473.058-.03.153-.119.246-.332.031-.071.057-.145.08-.217a5.612 5.612 0 0 1-1.151-1.82c-.293-.732-.428-1.461-.428-1.99V9.05c0-.43 0-1.608.484-2.697.251-.566.643-1.133 1.253-1.556Zm7.572 3.83H18v-2.5h1.5v2.5H22v1.5h-2.5v2.5H18v-2.5h-2.5v-1.5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-user-plus', JhIconUserPlu);