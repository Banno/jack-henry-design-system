import {LitElement, css, html} from 'lit';

export default class JhIconCar extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M6.446 5a.25.25 0 0 0-.234.164L4.605 9.5h14.79l-1.607-4.336A.25.25 0 0 0 17.554 5H6.446Zm13.504 6H4.05l-.05.135V17h16v-5.865L19.95 11ZM2.5 17.75v1.75a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h13v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8.634l-.047-.126-2.258-6.097A1.75 1.75 0 0 0 17.554 3.5H6.446a1.75 1.75 0 0 0-1.641 1.143L2.547 10.74l-.047.126v6.884Zm5.75-4.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0Zm9.125 1.625a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-car', JhIconCar);