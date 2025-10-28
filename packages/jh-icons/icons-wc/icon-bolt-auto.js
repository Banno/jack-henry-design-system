import {LitElement, css, html} from 'lit';

export default class JhIconBoltAuto extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M11.582 2.287A.75.75 0 0 1 12.1 3v7.35h3.75a.75.75 0 0 1 .606 1.191l-7.2 9.9a.75.75 0 0 1-1.356-.44v-7.35H4.15a.75.75 0 0 1-.607-1.192l7.2-9.9a.75.75 0 0 1 .839-.272Zm-5.96 9.863H8.65a.75.75 0 0 1 .75.75v5.794l4.977-6.844H11.35a.75.75 0 0 1-.75-.75V5.307L5.623 12.15Zm11.228 1.1c.3 0 .571.179.69.455l3 7a.75.75 0 1 1-1.38.59l-.662-1.545h-3.296l-.663 1.546a.75.75 0 1 1-1.378-.591l3-7a.75.75 0 0 1 .689-.455Zm-1.006 5h2.011l-1.005-2.346-1.006 2.346Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-bolt-auto', JhIconBoltAuto);