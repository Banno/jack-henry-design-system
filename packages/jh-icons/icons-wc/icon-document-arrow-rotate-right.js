import {LitElement, css, html} from 'lit';

export default class JhIconDocumentArrowRotateRight extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M3.25 4A.75.75 0 0 1 4 3.25h13a.75.75 0 0 1 .75.75v4.208A5.504 5.504 0 0 0 16.25 8V4.75H4.75v14.5h11.5V19c.52 0 1.023-.073 1.5-.207V20a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V4Zm13 6.25a3.25 3.25 0 1 0 3.093 4.25h1.552a4.752 4.752 0 0 1-9.395-1 4.75 4.75 0 0 1 8.125-3.342v-.157a.625.625 0 1 1 1.25 0v2.625H18.25a.625.625 0 0 1 0-1.25h.46a3.242 3.242 0 0 0-2.46-1.125ZM7 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 12a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 15.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5H7Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-document-arrow-rotate-right', JhIconDocumentArrowRotateRight);