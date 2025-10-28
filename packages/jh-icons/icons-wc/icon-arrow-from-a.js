import {LitElement, css, html} from 'lit';

export default class JhIconArrowFromA extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M8.5 2.25a.75.75 0 0 1 .687.45l3.5 8a.75.75 0 1 1-1.374.6l-.679-1.55H6.365l-.678 1.55a.75.75 0 0 1-1.374-.6l3.5-8a.75.75 0 0 1 .687-.45Zm-1.478 6h2.956L8.5 4.871 7.022 8.25Zm7.508 4.22a.75.75 0 1 0-1.06 1.06l2.72 2.72H9.5c-1.11 0-1.808-.254-2.252-.548a2.193 2.193 0 0 1-.825-.993.75.75 0 1 0-1.383.58 3.693 3.693 0 0 0 1.379 1.663c.735.488 1.737.798 3.08.798h6.69l-2.72 2.72a.75.75 0 1 0 1.061 1.06l4-4 .53-.53-.53-.53-4-4Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrow-from-a', JhIconArrowFromA);