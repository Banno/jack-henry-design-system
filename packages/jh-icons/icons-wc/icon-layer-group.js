import {LitElement, css, html} from 'lit';

export default class JhIconLayerGroup extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M3.5 4.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h2.25V16c0 .414.336.75.75.75h2.25V19c0 .414.336.75.75.75h11a.75.75 0 0 0 .75-.75v-8a.75.75 0 0 0-.75-.75h-2.25V8a.75.75 0 0 0-.75-.75h-2.25V5a.75.75 0 0 0-.75-.75h-11Zm13.25 6v-1.5h-9.5v6.5h1.5V11a.75.75 0 0 1 .75-.75h7.25ZM5.75 8v4.25h-1.5v-6.5h9.5v1.5H6.5a.75.75 0 0 0-.75.75Zm4.5 10.25v-6.5h9.5v6.5h-9.5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-layer-group', JhIconLayerGroup);