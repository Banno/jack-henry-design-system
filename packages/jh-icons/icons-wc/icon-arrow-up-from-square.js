import {LitElement, css, html} from 'lit';

export default class JhIconArrowUpFromSquare extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="m12 2.107.507.465 3 2.753a.75.75 0 0 1-1.014 1.106l-1.743-1.6v9.044a.75.75 0 0 1-1.5 0V4.831l-1.743 1.6a.75.75 0 0 1-1.014-1.106l3-2.753.507-.465ZM7 9.625a.25.25 0 0 0-.25.25v10c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25v-10a.25.25 0 0 0-.25-.25h-2.008a.75.75 0 0 1 0-1.5H17c.966 0 1.75.784 1.75 1.75v10a1.75 1.75 0 0 1-1.75 1.75H7a1.75 1.75 0 0 1-1.75-1.75v-10c0-.966.783-1.75 1.75-1.75h2.012a.75.75 0 1 1 0 1.5H7Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrow-up-from-square', JhIconArrowUpFromSquare);