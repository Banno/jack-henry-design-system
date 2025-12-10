/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconHighlighterLine extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M8.478 3.72a2.75 2.75 0 0 1 3.47-1.279l1.929.779a2.75 2.75 0 0 1 1.606 3.33l-3.018 10.184a.746.746 0 0 1-.123.24l-.017.022a.75.75 0 0 1-.132.126l-.007.007-.003.002-.013.01-.055.04a17.25 17.25 0 0 0-.826.655 8.835 8.835 0 0 0-.648.599c-.09.095-.163.177-.216.246a.689.689 0 0 0-.069.104l-.445 1.104a.749.749 0 0 1-.703.466l-.059.145H21a.75.75 0 0 1 0 1.5H3a.745.745 0 0 1-.563-.26.75.75 0 0 1-.228-.755l.029-.088 1.165-2.887a.749.749 0 0 1-.18-.823l.446-1.105c0-.005.012-.04.022-.122a3.09 3.09 0 0 0 .018-.327 8.86 8.86 0 0 0-.052-.88 17.337 17.337 0 0 0-.14-1.046l-.01-.067-.003-.016-.001-.004v-.01a.75.75 0 0 1 .003-.263.242.242 0 0 1 .01-.045c.003-.014.008-.028.012-.041a.752.752 0 0 1 .052-.126l4.9-9.414ZM4.043 20.433l3.512.011.243-.6-3.025-1.22-.73 1.809Zm1.11-5.765c.03.313.056.655.055.97-.001.307-.024.697-.15 1.008l-.165.407L8.8 18.63l.165-.407c.126-.31.382-.606.594-.827.218-.228.472-.457.711-.662l-5.117-2.067Zm6.233-10.835a1.251 1.251 0 0 0-1.578.581l-4.522 8.69 5.975 2.414 2.785-9.392a1.25 1.25 0 0 0-.73-1.514l-1.93-.779Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-highlighter-line', JhIconHighlighterLine);