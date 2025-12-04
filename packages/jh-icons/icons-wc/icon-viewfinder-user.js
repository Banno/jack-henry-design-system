/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconViewfinderUser extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M21.25 17.498a.75.75 0 0 1 .75.75v.957l.002.001v1.046a1.75 1.75 0 0 1-1.75 1.749h-1.046V22h-.954a.75.75 0 0 1 0-1.5h1.5v.001h.5a.25.25 0 0 0 .25-.25v-.503H20.5v-1.5a.75.75 0 0 1 .75-.75ZM2.751 17.5a.75.75 0 0 1 .75.75v1.5h-.002v.5c0 .138.112.25.25.25h2.003a.75.75 0 0 1 0 1.5H3.749a1.75 1.75 0 0 1-1.75-1.75v-1.046h.002v-.954a.75.75 0 0 1 .75-.75ZM12 5.752c.797 0 1.453.2 1.97.557a3.06 3.06 0 0 1 1.053 1.295c.407.907.4 1.884.4 2.211v.03a4.809 4.809 0 0 1-1.295 3.09c.005.012.01.025.018.037a.466.466 0 0 0 .192.182c.265.13.616.237 1.06.363.423.119.926.255 1.387.437.46.182.953.44 1.333.844.4.427.64.981.64 1.666v.208a.75.75 0 0 1-1.5 0v-.208c0-.303-.094-.49-.234-.64-.16-.171-.418-.328-.79-.475-.373-.148-.788-.26-1.244-.389-.429-.121-.913-.263-1.321-.463l-.009-.004a1.966 1.966 0 0 1-1.072-1.875l.02-.306.227-.205a3.306 3.306 0 0 0 1.087-2.304c0-.34-.01-1.01-.268-1.586a1.573 1.573 0 0 0-.534-.673c-.233-.16-.582-.292-1.12-.292-.537 0-.884.132-1.117.294a1.583 1.583 0 0 0-.536.679c-.258.578-.269 1.247-.269 1.576a3.363 3.363 0 0 0 1.11 2.295l.248.223v.334c0 .277-.082.623-.226.932-.143.307-.404.698-.847.914l-.002.001c-.412.2-.9.34-1.334.46-.459.13-.877.242-1.253.39-.375.147-.635.303-.797.475-.141.15-.235.337-.235.639v.208a.75.75 0 0 1-1.5 0v-.208c0-.686.24-1.241.644-1.668.381-.405.876-.66 1.34-.843.463-.182.97-.317 1.397-.436.452-.127.81-.236 1.083-.368.013-.006.077-.053.145-.198l.02-.05a4.864 4.864 0 0 1-1.292-3.046v-.04c0-.317-.008-1.293.398-2.203a3.083 3.083 0 0 1 1.051-1.299c.518-.359 1.173-.561 1.972-.561ZM5.75 2a.75.75 0 0 1 0 1.5h-2a.25.25 0 0 0-.25.25v2.003a.75.75 0 0 1-1.5 0V3.75C2 2.784 2.784 2 3.75 2h2Zm14 .001h.503c.966 0 1.75.784 1.75 1.751v1.046L22 4.797v.954a.75.75 0 0 1-1.5 0v-1.5h.003v-.5a.25.25 0 0 0-.25-.25h-1.046V3.5h-.957a.75.75 0 0 1 0-1.5h1.5v.001Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-viewfinder-user', JhIconViewfinderUser);