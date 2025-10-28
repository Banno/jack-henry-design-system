import {LitElement, css, html} from 'lit';

export default class JhIconShieldChecker extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="m12 2.14.368.207 8 4.5.382.215V7.5c0 6.425-2.064 10.016-4.246 11.994a9.609 9.609 0 0 1-2.984 1.855c-.41.157-.756.255-1.004.314a5.345 5.345 0 0 1-.382.076l-.026.003-.009.002h-.005L12 21a45.31 45.31 0 0 1-.094.744H11.9l-.009-.002-.026-.003a5.345 5.345 0 0 1-.382-.076 7.826 7.826 0 0 1-1.004-.314 9.61 9.61 0 0 1-2.984-1.855C5.314 17.515 3.25 13.925 3.25 7.5v-.438l.382-.215 8-4.5L12 2.14ZM12 21l.093.744-.093.012-.093-.012L12 21Zm0-.76a6.332 6.332 0 0 0 .98-.291 8.108 8.108 0 0 0 2.516-1.567c1.774-1.608 3.66-4.655 3.75-10.445L12 3.861 4.753 7.937c.09 5.79 1.977 8.838 3.75 10.445a8.107 8.107 0 0 0 2.517 1.567 6.332 6.332 0 0 0 .98.29Zm-.096.016ZM12 18.7V12H6.72C7.89 17.17 11 18.43 12 18.7Zm5.28-6.7H12V5.58l5.71 3.22a18.64 18.64 0 0 1-.43 3.2Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-shield-checker', JhIconShieldChecker);