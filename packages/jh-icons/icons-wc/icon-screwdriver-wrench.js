import {LitElement, css, html} from 'lit';

export default class JhIconScrewdriverWrench extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M2.503 18.785a4.752 4.752 0 0 1 5.608-6.691l.754-.754 1.06 1.06-1.089 1.09a.75.75 0 0 1-.823.16 3.251 3.251 0 0 0-4.495 3.391l2.165-2.165a.75.75 0 0 1 1.06 0l1.769 1.768a.75.75 0 0 1 0 1.06L6.346 19.87a3.251 3.251 0 0 0 3.39-4.495.75.75 0 0 1 .161-.823l1.09-1.09 1.06 1.061-.754.754a4.752 4.752 0 0 1-6.692 5.608.75.75 0 0 1-.191-1.2l2.51-2.51-.706-.707-2.511 2.51a.75.75 0 0 1-1.2-.192Zm9.898-8.859-1.06-1.06.753-.754a4.752 4.752 0 0 1 6.691-5.609.75.75 0 0 1 .192 1.2l-2.51 2.51.707.708 2.51-2.511a.75.75 0 0 1 1.2.192 4.752 4.752 0 0 1-5.608 6.692l-.754.753-1.06-1.06 1.089-1.09a.75.75 0 0 1 .823-.16 3.251 3.251 0 0 0 4.495-3.39l-2.165 2.165a.75.75 0 0 1-1.06 0l-1.768-1.768a.75.75 0 0 1 0-1.06l2.165-2.166a3.251 3.251 0 0 0-3.39 4.495.75.75 0 0 1-.16.824L12.4 9.926Zm.546 5.85a.75.75 0 0 0 0 1.06l4.95 4.95a.75.75 0 0 0 1.06 0l2.83-2.828a.75.75 0 0 0 0-1.06l-4.95-4.95a.75.75 0 0 0-1.061 0l-.884.883-7.687-7.687-.12-.119a1.75 1.75 0 0 0-.41-1.825l-.708-.707a1.75 1.75 0 1 0-2.474 2.475l.707.707a1.75 1.75 0 0 0 1.825.41l.12.12 7.686 7.687-.883.884Zm5.48 4.42-3.888-3.89 1.767-1.767 3.89 3.889-1.768 1.767ZM4.554 4.552a.25.25 0 0 0 0 .354l.707.707a.25.25 0 0 0 .354-.354l-.707-.707a.25.25 0 0 0-.354 0Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-screwdriver-wrench', JhIconScrewdriverWrench);