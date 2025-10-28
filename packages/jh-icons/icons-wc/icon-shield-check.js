import {LitElement, css, html} from 'lit';

export default class JhIconShieldCheck extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12.368 2.347 12 2.14l-.368.207-8 4.5-.382.215V7.5c0 6.425 2.064 10.016 4.246 11.993a9.605 9.605 0 0 0 2.984 1.855c.41.159.756.256 1.004.315a5.345 5.345 0 0 0 .382.076l.026.003.009.002h.005L12 21l-.093.744.093.012.093-.012L12 21l.094.744h.005l.009-.002.026-.003.087-.015c.071-.012.171-.032.295-.061a7.813 7.813 0 0 0 1.004-.315 9.605 9.605 0 0 0 2.984-1.855c2.182-1.977 4.246-5.568 4.246-11.993v-.438l-.382-.215-8-4.5Zm-.197 17.856c-.07.017-.127.029-.171.037a6.332 6.332 0 0 1-.98-.291 8.106 8.106 0 0 1-2.516-1.567c-1.774-1.608-3.66-4.655-3.75-10.445L12 3.86l7.247 4.076c-.09 5.79-1.977 8.837-3.75 10.445a8.106 8.106 0 0 1-2.517 1.567c-.34.13-.62.21-.809.254Zm-.267.053Zm4.1-11.261a.75.75 0 0 1 .001 1.06l-4.95 4.95-.015.015-.01.01a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.97 1.97 4.444-4.445a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-shield-check', JhIconShieldCheck);