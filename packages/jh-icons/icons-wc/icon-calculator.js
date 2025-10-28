import {LitElement, css, html} from 'lit';

export default class JhIconCalculator extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M6.375 4h11.25a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5H6.375a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5Zm-2 .5a2 2 0 0 1 2-2h11.25a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6.375a2 2 0 0 1-2-2v-15ZM15.5 13.75a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm-8-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4.5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4.5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm2.5-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM8.5 8V7h7v1h-7ZM7 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 7 9V6Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-calculator', JhIconCalculator);