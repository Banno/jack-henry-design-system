import {LitElement, css, html} from 'lit';

export default class JhIconArrowFromW extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M4.728 2.818a.75.75 0 1 0-1.456.364l2 8a.75.75 0 0 0 1.424.096L8 8.02l1.304 3.26a.75.75 0 0 0 1.424-.097l2-8a.75.75 0 0 0-1.456-.364l-1.437 5.75L8.696 5.72a.75.75 0 0 0-1.392 0L6.165 8.568l-1.437-5.75Zm8.742 9.652a.75.75 0 0 1 1.06 0l4 4 .53.53-.53.53-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H9.5c-1.344 0-2.346-.31-3.081-.798a3.693 3.693 0 0 1-1.379-1.663.75.75 0 0 1 1.383-.58c.137.327.381.698.825.993.444.294 1.143.548 2.252.548h6.69l-2.72-2.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrow-from-w', JhIconArrowFromW);