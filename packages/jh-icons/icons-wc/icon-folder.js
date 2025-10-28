import {LitElement, css, html} from 'lit';

export default class JhIconFolder extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="m8.75 4.751 1.75 2.25h8.75a1 1 0 0 1 1 1v10.25a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1v-12.5a1 1 0 0 1 1-1h4Zm2.484.75-1.3-1.67a1.5 1.5 0 0 0-1.184-.58h-4a2.5 2.5 0 0 0-2.5 2.5v12.5a2.5 2.5 0 0 0 2.5 2.5h14.5a2.5 2.5 0 0 0 2.5-2.5V8.001a2.5 2.5 0 0 0-2.5-2.5h-8.016Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-folder', JhIconFolder);