import {LitElement, css, html} from 'lit';

export default class JhIconHeartFilled extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M7.737 3.248A5.323 5.323 0 0 0 2.414 8.57c0 4.741 2.354 8.036 4.666 10.12a17.992 17.992 0 0 0 3.17 2.274 15.717 15.717 0 0 0 1.355.68l.084.036.024.01.007.003h.002l.001.001.277-.697-.276.697a.75.75 0 0 0 .552 0L12 20.998l.277.697.003-.001.007-.003.024-.01.084-.035a15.717 15.717 0 0 0 1.354-.68 17.993 17.993 0 0 0 3.171-2.276c2.312-2.083 4.666-5.378 4.666-10.119a5.323 5.323 0 0 0-5.323-5.323A5.306 5.306 0 0 0 12 5.39a5.306 5.306 0 0 0-4.263-2.142Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-heart-filled', JhIconHeartFilled);