import {LitElement, css, html} from 'lit';

export default class JhIconPizzaSlouse extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M10.53 2.391a1.5 1.5 0 0 0-2.226.23 2.24 2.24 0 0 0-.107 2.462l-5.86 15.624a.75.75 0 0 0 1.004.95l15.615-6.832c.71.41 1.6.416 2.327-.014a1.5 1.5 0 0 0 .247-2.4l-11-10.02Zm7.15 11.355L9.357 6.26l-.652 1.738a2 2 0 1 1-1.214 3.238l-3.126 8.336 2.408-1.054a2 2 0 1 1 3.263-1.428l7.644-3.344ZM9.625 4.483A.74.74 0 0 1 9.52 3.5l.544.495L19.949 13l.57.52a.81.81 0 0 1-.953-.095L9.625 4.483Zm3.415 6.487a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-pizza-slice', JhIconPizzaSlouse);