import {LitElement, css, html} from 'lit';

export default class JhIconEye extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12 6.25c-4.354 0-6.76 2.428-9.066 4.754l-.464.466a.75.75 0 0 0 0 1.061l.464.467C5.24 15.324 7.646 17.751 12 17.751c4.354 0 6.76-2.427 9.066-4.753l.464-.467a.75.75 0 0 0 0-1.06l-.464-.467C18.76 8.678 16.354 6.25 12 6.25Zm0 10c-3.65 0-5.635-1.932-7.941-4.25C6.365 9.685 8.349 7.75 12 7.75c3.65 0 5.635 1.934 7.941 4.25-2.306 2.318-4.29 4.25-7.941 4.25ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-eye', JhIconEye);