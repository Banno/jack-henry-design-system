/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconDiamondFilled3 extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M10.94 2.75a1.5 1.5 0 0 1 2.12 0l8.19 8.19a1.5 1.5 0 0 1 0 2.12l-8.19 8.19a1.5 1.5 0 0 1-2.12 0l-8.19-8.19a1.5 1.5 0 0 1 0-2.12l8.19-8.19Zm.873 4.596c-.508 0-.983.094-1.424.281a2.57 2.57 0 0 0-1.06.797c-.266.344-.4.758-.4 1.242h1.981a.67.67 0 0 1 .14-.428.954.954 0 0 1 .37-.27c.148-.066.3-.099.457-.099.23 0 .42.045.568.135a.8.8 0 0 1 .329.346c.074.144.11.302.11.474 0 .223-.038.416-.116.58a.85.85 0 0 1-.358.375c-.156.086-.357.13-.603.13h-.961v1.47h.96c.255 0 .472.039.651.117a.83.83 0 0 1 .416.375c.098.172.147.403.147.692a.984.984 0 0 1-.527.896 1.29 1.29 0 0 1-.616.135 1.18 1.18 0 0 1-.545-.13 1.093 1.093 0 0 1-.404-.345.877.877 0 0 1-.147-.492h-1.98c0 .437.088.814.264 1.13.18.313.416.571.709.774.293.2.617.348.972.446.356.093.711.14 1.067.14.453 0 .873-.054 1.26-.164a3.183 3.183 0 0 0 1.013-.492 2.26 2.26 0 0 0 .674-.791c.16-.313.24-.668.24-1.066 0-.356-.068-.67-.205-.944a1.902 1.902 0 0 0-.586-.697 2.537 2.537 0 0 0-.667-.347c.197-.092.378-.2.538-.327a2.14 2.14 0 0 0 .574-.68c.137-.257.206-.533.206-.826 0-.53-.13-.976-.387-1.336-.254-.363-.61-.636-1.067-.82-.457-.187-.988-.281-1.593-.281Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-diamond-filled-3', JhIconDiamondFilled3);