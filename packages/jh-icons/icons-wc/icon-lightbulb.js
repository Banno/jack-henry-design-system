import {LitElement, css, html} from 'lit';

export default class JhIconLightbulb extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12 3.75A5.25 5.25 0 0 0 6.75 9c0 2.333 1.504 4.588 3.5 5.293.3.106.5.39.5.707v1.24h2.5V15a.75.75 0 0 1 .5-.707c1.996-.706 3.5-2.96 3.5-5.293 0-2.9-2.35-5.25-5.25-5.25ZM5.25 9a6.75 6.75 0 0 1 13.5 0c0 2.707-1.608 5.398-4 6.504v1.486a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-1.486c-2.391-1.106-4-3.797-4-6.504Zm4 10a.75.75 0 0 1 .75-.75h4a.75.75 0 1 1 0 1.5h-4a.75.75 0 0 1-.75-.75ZM11 20.25a.75.75 0 1 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-lightbulb', JhIconLightbulb);