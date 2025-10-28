import {LitElement, css, html} from 'lit';

export default class JhIconDollarSign extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M13 4v1.51a3.934 3.934 0 0 1 1.531.695c.759.579 1.269 1.466 1.269 2.596v1h-2v-1c0-.47-.19-.783-.481-1.005-.32-.243-.794-.395-1.32-.395-.524 0-.999.152-1.318.395-.291.222-.481.535-.481 1.005 0 .808.247 1.193.54 1.452.362.323.877.532 1.616.813l.068.026c.652.248 1.501.571 2.165 1.162.758.673 1.211 1.622 1.211 2.947 0 1.13-.51 2.017-1.269 2.595a3.935 3.935 0 0 1-1.531.695v1.51h-2v-1.51a3.935 3.935 0 0 1-1.531-.695C8.71 17.218 8.2 16.331 8.2 15.201v-1h2v1c0 .47.19.782.481 1.004.319.243.794.396 1.319.396.525 0 1-.153 1.319-.396.291-.222.481-.534.481-1.004 0-.808-.247-1.193-.54-1.453-.362-.322-.877-.53-1.616-.813l-.068-.025c-.652-.248-1.501-.572-2.165-1.162-.758-.674-1.211-1.622-1.211-2.947 0-1.13.51-2.018 1.269-2.596A3.934 3.934 0 0 1 11 5.51V4h2Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-dollar-sign', JhIconDollarSign);