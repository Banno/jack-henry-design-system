import {LitElement, css, html} from 'lit';

export default class JhIconPrinter extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M5 2.25a.75.75 0 0 0-.75.75v3.25H3a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h3.25v4h11.5v-4H21a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75h-1.25V3a.75.75 0 0 0-.75-.75H5Zm1.25 10.5v3.5h-2.5v-8.5h16.5v8.5h-2.5v-3.5H18a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5h.25Zm1.5 0v7.5h8.5v-7.5h-8.5Zm10.5-6.5v-2.5H5.75v2.5h12.5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-printer', JhIconPrinter);