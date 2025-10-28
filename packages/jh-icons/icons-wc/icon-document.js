import {LitElement, css, html} from 'lit';

export default class JhIconDocument extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M6.5 3.25A1.75 1.75 0 0 0 4.75 5v14c0 .967.784 1.75 1.75 1.75h11A1.75 1.75 0 0 0 19.25 19V5a1.75 1.75 0 0 0-1.75-1.75h-11ZM6.25 5a.25.25 0 0 1 .25-.25h11a.25.25 0 0 1 .25.25v14a.25.25 0 0 1-.25.25h-11a.25.25 0 0 1-.25-.25V5ZM9 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9ZM8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 15.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-document', JhIconDocument);