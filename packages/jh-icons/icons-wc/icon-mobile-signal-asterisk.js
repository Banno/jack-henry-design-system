import {LitElement, css, html} from 'lit';

export default class JhIconMobileSignalAsterisk extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M11.004 3h-1.25a1.75 1.75 0 0 0-1.75 1.75v9.517a7.262 7.262 0 0 1 1.5 1.007V4.75a.25.25 0 0 1 .25-.25h1.25V3Zm6.75 18.5h-5.883a2.26 2.26 0 0 0 .129-.753c0-.252-.013-.501-.038-.747h5.792a.25.25 0 0 0 .25-.25V18.5h-6.359a7.208 7.208 0 0 0-.687-1.5h7.046V4.75a.25.25 0 0 0-.25-.25h-1.25V3h1.25c.966 0 1.75.784 1.75 1.75v15a1.75 1.75 0 0 1-1.75 1.75ZM4.75 17.997a.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25a.75.75 0 0 0 1.5 0 2.75 2.75 0 0 0-2.75-2.75ZM4 15.747a.75.75 0 0 1 .75-.75 5.75 5.75 0 0 1 5.75 5.75.75.75 0 0 1-1.5 0 4.25 4.25 0 0 0-4.25-4.25.75.75 0 0 1-.75-.75ZM14.254 7.25a.5.5 0 0 0-1 0v1.377l-1.187-.697a.5.5 0 0 0-.506.863l1.2.704-1.205.695a.5.5 0 0 0 .5.866l1.198-.692v1.384a.5.5 0 1 0 1 0v-1.377l1.188.697a.5.5 0 0 0 .506-.863l-1.2-.703 1.205-.696a.5.5 0 1 0-.5-.866l-1.199.692V7.25Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-mobile-signal-asterisk', JhIconMobileSignalAsterisk);