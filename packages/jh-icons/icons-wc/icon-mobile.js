import {LitElement, css, html} from 'lit';

export default class JhIconMobile extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M7.75 4.5A.25.25 0 0 1 8 4.25h8a.25.25 0 0 1 .25.25v12.293a.75.75 0 0 0-.25-.043H8a.75.75 0 0 0-.25.043V4.5Zm0 13.707V19.5c0 .138.112.25.25.25h8a.25.25 0 0 0 .25-.25v-1.293a.747.747 0 0 1-.25.043H8a.747.747 0 0 1-.25-.043ZM8 2.75A1.75 1.75 0 0 0 6.25 4.5v15c0 .966.784 1.75 1.75 1.75h8a1.75 1.75 0 0 0 1.75-1.75v-15A1.75 1.75 0 0 0 16 2.75H8Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-mobile', JhIconMobile);