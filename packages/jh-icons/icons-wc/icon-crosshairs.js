import {LitElement, css, html} from 'lit';

export default class JhIconCrosshair extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v1.287a7.752 7.752 0 0 1 6.964 6.964H21a.75.75 0 0 1 0 1.5h-1.286a7.752 7.752 0 0 1-6.964 6.964V21a.75.75 0 0 1-1.5 0v-1.286a7.752 7.752 0 0 1-6.964-6.964H3a.75.75 0 0 1 0-1.5h1.286a7.752 7.752 0 0 1 6.964-6.964V3a.75.75 0 0 1 .75-.75Zm.75 15.956v-.205a.75.75 0 0 0-1.5 0v.205a6.253 6.253 0 0 1-5.455-5.455H6a.75.75 0 0 0 0-1.5h-.205a6.253 6.253 0 0 1 5.455-5.456v.206a.75.75 0 0 0 1.5 0v-.206a6.253 6.253 0 0 1 5.456 5.456H18a.75.75 0 0 0 0 1.5h.206a6.253 6.253 0 0 1-5.456 5.455ZM12 14.001a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-crosshairs', JhIconCrosshair);