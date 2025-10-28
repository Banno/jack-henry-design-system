import {LitElement, css, html} from 'lit';

export default class JhIconBellSlash extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M6.543 6.854 3.97 4.281A.75.75 0 1 1 5.03 3.22l15.247 15.246c.059.019.12.03.18.033a.747.747 0 0 1-.045.103l.618.618a.75.75 0 1 1-1.06 1.06L18.69 19H4.25a.75.75 0 0 1-.53-1.28l1.78-1.78v-5.69a6.17 6.17 0 0 1 1.043-3.397ZM17.19 17.5H6.061l.72-.72.219-.22v-6.308c0-.797.22-1.598.631-2.308L17.19 17.5ZM17 13.184v.006l1.5 1.5v-4.44c0-2.724-1.924-5.42-5-6.092V3.5a1.5 1.5 0 0 0-3 0v.659a6.428 6.428 0 0 0-1.828.702l1.113 1.113c.646-.3 1.39-.474 2.216-.474 3.064 0 5 2.393 5 4.75v2.934ZM12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-bell-slash', JhIconBellSlash);