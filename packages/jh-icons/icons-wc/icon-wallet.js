import {LitElement, css, html} from 'lit';

export default class JhIconWallet extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M4 3.75A1.75 1.75 0 0 0 2.25 5.5v13c0 .967.784 1.75 1.75 1.75h15a1.75 1.75 0 0 0 1.75-1.75v-2.75H21a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.25V5.5A1.75 1.75 0 0 0 19 3.75H4Zm10.25 12h5v2.75a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25v-13A.25.25 0 0 1 4 5.25h15a.25.25 0 0 1 .25.25v2.75h-5a2 2 0 0 0-2 2v3.5a2 2 0 0 0 2 2Zm0-6a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h6v-4.5h-6ZM16 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-wallet', JhIconWallet);