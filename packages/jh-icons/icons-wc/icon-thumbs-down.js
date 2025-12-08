/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class JhIconThumbsDown extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path d="M13.255 3.171c.811.028 1.616.078 2.745.078a.75.75 0 0 1 .077.005c.97.1 1.88.505 2.384 1.197.26.358.41.798.367 1.278-.01.101-.028.201-.054.299.47.298.777.79.912 1.249.123.413.15.95-.02 1.433.4.304.671.726.763 1.217.091.491-.01.986-.267 1.418.053.057.105.115.15.179.258.357.362.773.345 1.176-.033.793-.528 1.56-1.313 1.966-.437.226-1.04.301-1.577.329-.572.029-1.207.009-1.788-.029a27.25 27.25 0 0 1-.728-.057c.252.535.512 1.202.587 1.835.088.747-.031 1.397-.363 1.922-.331.524-.822.841-1.327 1.021a1.725 1.725 0 0 1-.894.089 1.687 1.687 0 0 1-.747-.35 3.765 3.765 0 0 1-.502-.502 21.108 21.108 0 0 1-.226-.266c-.076-.091-.152-.183-.233-.277-.399-.46-.67-.981-.924-1.401a6.564 6.564 0 0 0-1.14-1.439c-.561-.536-1.257-1.002-1.829-1.34a13.823 13.823 0 0 0-.833-.455.742.742 0 0 1-.07.004h-4A.75.75 0 0 1 2 13V4a.75.75 0 0 1 .75-.75h4A.75.75 0 0 1 7.5 4v.01c.131-.047.276-.095.433-.145.724-.232 1.714-.497 2.734-.61 1-.112 1.779-.11 2.588-.084Zm-.05 1.5a15.409 15.409 0 0 0-2.372.075c-.883.098-1.769.332-2.443.547a15.75 15.75 0 0 0-.805.282l-.085.033v6.802l.138.069c.195.1.467.246.779.43.618.366 1.423.9 2.102 1.55a8.056 8.056 0 0 1 1.386 1.745c.321.531.487.863.775 1.196.09.105.175.205.25.296.078.092.145.173.21.248.132.153.223.246.295.303a.4.4 0 0 0 .07.046c.01.006.016.006.016.006s.007.002.024 0a.473.473 0 0 0 .101-.026c.272-.097.452-.235.561-.408.108-.17.198-.456.14-.946-.056-.48-.303-1.09-.575-1.628a10.89 10.89 0 0 0-.5-.877l-.002-.002a.751.751 0 0 1 .736-1.154h.002l.039.005.123.018a30.143 30.143 0 0 0 1.904.188c.554.036 1.125.053 1.615.027.525-.026.841-.098.967-.163.34-.175.493-.476.502-.696a.365.365 0 0 0-.062-.235c-.038-.053-.119-.129-.3-.18a.75.75 0 0 1-.216-1.344c.349-.235.405-.511.374-.676-.029-.154-.165-.383-.596-.465a.75.75 0 0 1-.205-1.403c.037-.018.083-.059.114-.17a.873.873 0 0 0-.019-.46.772.772 0 0 0-.225-.373.322.322 0 0 0-.267-.075.75.75 0 0 1-.648-1.253c.18-.193.22-.334.227-.41a.374.374 0 0 0-.087-.26c-.17-.232-.608-.507-1.303-.584-1.135-.001-1.988-.053-2.74-.079ZM3.5 4.75v7.5H6v-7.5H3.5Z"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-thumbs-down', JhIconThumbsDown);