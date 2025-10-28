import {LitElement, css, html} from 'lit';

export default class JhIconSlider extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M6 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-1.42.75H2.75a.75.75 0 1 1 0-1.5h1.83a3.501 3.501 0 0 1 6.84 0h9.83a.75.75 0 0 1 0 1.5h-9.83a3.501 3.501 0 0 1-6.84 0Zm16.67 10h-1.83a3.501 3.501 0 0 1-6.84 0H2.75a.75.75 0 1 1 0-1.5h9.83a3.501 3.501 0 0 1 6.84 0h1.83a.75.75 0 0 1 0 1.5ZM16 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-sliders', JhIconSlider);