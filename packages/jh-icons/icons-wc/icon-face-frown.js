import {LitElement, css, html} from 'lit';

export default class JhIconFaceFrown extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M3.75 12a8.25 8.25 0 1 1 16.5.001 8.25 8.25 0 0 1-16.5 0ZM12 2.25c-5.385 0-9.75 4.366-9.75 9.75 0 5.386 4.365 9.75 9.75 9.75s9.75-4.364 9.75-9.75c0-5.384-4.365-9.75-9.75-9.75ZM8.75 11a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm7.75-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-8.916 7.125a.75.75 0 0 0 1.04-.208c1.703-2.555 5.049-2.555 6.752 0a.75.75 0 1 0 1.248-.832c-2.297-3.445-6.951-3.445-9.248 0a.75.75 0 0 0 .208 1.04Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-face-frown', JhIconFaceFrown);