import {LitElement, css, html} from 'lit';

export default class JhIconArrowRightArrowLeftFilled extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="m19.53 7.53.53-.53-.53-.53-4-4a.75.75 0 0 0-1.28.53v3.25H9c-2.219 0-3.468.85-4.124 1.834A3.817 3.817 0 0 0 4.26 9.8a2.654 2.654 0 0 0-.01.175l-.001.015v.009L5 10h-.75a.75.75 0 0 0 1.5.007V10l.004-.058a2.317 2.317 0 0 1 .37-1.026C6.468 8.4 7.218 7.75 9 7.75h5.25V11a.75.75 0 0 0 1.28.53l4-4ZM19 13.25a.75.75 0 0 1 .75.75H19l.75.001v.024l-.002.042a3.553 3.553 0 0 1-.079.565 3.818 3.818 0 0 1-.545 1.284c-.656.984-1.906 1.834-4.124 1.834H9.75V21a.75.75 0 0 1-1.28.53l-4-4-.53-.53.53-.53 4-4a.75.75 0 0 1 1.28.53v3.25H15c1.781 0 2.532-.65 2.876-1.166A2.319 2.319 0 0 0 18.25 14v-.007a.75.75 0 0 1 .75-.743Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrow-right-arrow-left-filled', JhIconArrowRightArrowLeftFilled);