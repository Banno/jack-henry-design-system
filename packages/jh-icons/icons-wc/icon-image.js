import {LitElement, css, html} from 'lit';

export default class JhIconImage extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M4.75 5A.25.25 0 0 1 5 4.75h14a.25.25 0 0 1 .25.25v9.19l-2.72-2.72-.53-.53-.53.53-1.97 1.97-3.97-3.97L9 8.94l-.53.53-3.72 3.72V5Zm0 10.31L9 11.06l3.44 3.44-4.75 4.75H5a.25.25 0 0 1-.25-.25v-3.69Zm5.06 3.94L16 13.06l3.25 3.25V19a.25.25 0 0 1-.25.25H9.81ZM8 20.75H5A1.75 1.75 0 0 1 3.25 19V5c0-.966.784-1.75 1.75-1.75h14c.966 0 1.75.784 1.75 1.75v14A1.75 1.75 0 0 1 19 20.75H8Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-image', JhIconImage);