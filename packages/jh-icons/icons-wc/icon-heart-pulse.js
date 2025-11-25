// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import {LitElement, css, html} from 'lit';

export default class JhIconHeartPulse extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M7.737 3.25a5.323 5.323 0 0 0-5.323 5.323c0 1.341.188 2.566.51 3.68A.75.75 0 0 0 3 13.75h.461c.902 2.093 2.268 3.725 3.619 4.942a17.981 17.981 0 0 0 3.17 2.275 15.717 15.717 0 0 0 1.355.68l.084.036.024.01.007.003h.002l.001.001L12 21l-.276.698a.75.75 0 0 0 .552 0L12 21c.276.698.276.697.277.697l.003-.001.007-.003.024-.01.084-.035a15.32 15.32 0 0 0 1.354-.681 17.982 17.982 0 0 0 3.171-2.275c1.351-1.217 2.717-2.85 3.619-4.942h.961a.75.75 0 0 0 0-1.5h-.424c.322-1.114.51-2.337.51-3.677a5.323 5.323 0 0 0-5.323-5.323A5.306 5.306 0 0 0 12 5.392 5.306 5.306 0 0 0 7.737 3.25Zm11.768 9c.364-1.098.58-2.32.58-3.677A3.82 3.82 0 0 0 12.7 7.198a.75.75 0 0 1-1.399 0 3.82 3.82 0 0 0-7.386 1.375c0 1.356.217 2.579.58 3.677H6.98l1.318-3.513a.75.75 0 0 1 1.4-.011l2.202 5.606 2.462-3.977a.75.75 0 0 1 1.262-.02l1.277 1.915h2.604Zm-14.39 1.5c.788 1.576 1.873 2.84 2.97 3.828 1.053.95 2.11 1.636 2.903 2.083.396.223.724.386.95.492l.062.029.062-.029c.226-.106.554-.269.95-.492a16.48 16.48 0 0 0 2.904-2.083c1.096-.988 2.18-2.252 2.969-3.828H16.5a.75.75 0 0 1-.624-.334l-.853-1.279-2.635 4.258a.75.75 0 0 1-1.336-.12l-2.036-5.182-.814 2.17a.75.75 0 0 1-.702.487H5.115Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-heart-pulse', JhIconHeartPulse);