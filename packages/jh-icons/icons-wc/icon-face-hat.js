// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconFaceHat extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M17.72 8.519c.072.247.13.457.174.614l.378.04c.805.093 1.49.205 1.986.34.242.065.484.147.68.257.098.054.22.136.328.255.11.125.234.329.234.6a.902.902 0 0 1-.235.601c-.106.12-.23.202-.327.256-.196.11-.438.192-.68.257-.291.079-.647.15-1.054.214a9.537 9.537 0 0 1-.226 1.355 10.787 10.787 0 0 1-.505 1.483 13.267 13.267 0 0 1-.276.617l-.019.038-.005.01-.001.004-.001.001-.381-.19.38.19a.75.75 0 0 1-.567.408 9.764 9.764 0 0 1-1.105 2.258C15.41 19.75 13.83 20.876 12 20.876s-3.41-1.125-4.498-2.75a9.767 9.767 0 0 1-1.105-2.257.75.75 0 0 1-.568-.408l.381-.19-.381.19v-.002l-.003-.003-.005-.011-.018-.038a13.453 13.453 0 0 1-.276-.619 10.796 10.796 0 0 1-.505-1.48 9.389 9.389 0 0 1-.225-1.354 10.288 10.288 0 0 1-1.055-.215 3.062 3.062 0 0 1-.68-.257 1.249 1.249 0 0 1-.327-.256.903.903 0 0 1-.235-.6c0-.272.124-.476.235-.6.106-.12.23-.202.327-.256.196-.11.438-.192.68-.257.497-.135 1.18-.247 1.986-.34l.378-.04a45.716 45.716 0 0 1 .81-2.628c.254-.73.55-1.49.857-2.078.151-.29.324-.574.517-.796.162-.187.487-.505.96-.505.639 0 1.091.232 1.417.4l.106.054A2.43 2.43 0 0 0 12 3.876c.594 0 .914-.14 1.227-.296l.106-.054c.326-.168.778-.4 1.417-.4.473 0 .798.318.96.505.193.222.366.506.517.796.307.589.603 1.349.856 2.078.256.735.479 1.467.637 2.014Zm-7.47 7.607c-.407 0-1.369-.065-2.196-.126.2.471.435.905.694 1.292.912 1.362 2.082 2.084 3.252 2.084s2.34-.722 3.252-2.084c.26-.387.493-.82.694-1.292-.827.061-1.789.126-2.196.126-.628 0-1.055-.321-1.296-.503l-.029-.022c-.265-.199-.33-.225-.425-.225-.095 0-.16.026-.425.225l-.03.022c-.24.182-.667.503-1.295.503Zm-6.462-5.044.003-.002-.003.002Zm16.424 0-.003-.002a.297.297 0 0 0 .003.002Zm0-.913-.003.002h.001l.002-.002Zm-16.42.002a.026.026 0 0 1-.004-.002l.003.002Zm11.88 2.455h-.25c-1.013.02-2.597.935-2.142 1.643 1.026 1.603 4.239-.702 3.775-1.332-.151-.204-.72-.302-1.382-.311Zm-8.727.312c.171-.23.87-.325 1.634-.31 1.012.018 2.595.933 2.14 1.642-1.025 1.602-4.237-.703-3.774-1.332Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-face-hat', JhIconFaceHat);