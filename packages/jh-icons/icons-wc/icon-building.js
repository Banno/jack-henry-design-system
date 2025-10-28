import {LitElement, css, html} from 'lit';

export default class JhIconBuilding extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M5.25 3.875a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 .75.75v15.25H20a.75.75 0 0 1 0 1.5H4a.75.75 0 1 1 0-1.5h1.25V3.875Zm1.5 15.25h1.5v-4h7.5v4h1.5v-14.5H6.75v14.5Zm7.5 0v-2.5h-4.5v2.5h4.5ZM9 10.875h2v-2H9v2Zm6 0h-2v-2h2v2Zm-6-3h2v-2H9v2Zm6 0h-2v-2h2v2Zm-6 6h2v-2H9v2Zm6 0h-2v-2h2v2Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-building', JhIconBuilding);