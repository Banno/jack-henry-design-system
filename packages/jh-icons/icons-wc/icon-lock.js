import {LitElement, css, html} from 'lit';

export default class JhIconLock extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12 4.25c-1.912 0-3.25 1.68-3.25 3.25v2.25h6.5V7.5c0-1.568-1.35-3.25-3.25-3.25ZM7.25 7.5v2.25H5a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75v-10a.75.75 0 0 0-.75-.75h-2.25V7.5c0-2.289-1.917-4.75-4.75-4.75-2.848 0-4.75 2.463-4.75 4.75Zm11 3.75H5.75v8.5h12.5v-8.5ZM13 16.232a2 2 0 1 0-2 0V18.5h2v-2.268Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-lock', JhIconLock);