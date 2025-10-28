import {LitElement, css, html} from 'lit';

export default class JhIconShieldDollarSign extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12.368 2.347 12 2.14l-.368.207-8 4.5-.382.215V7.5c0 6.425 2.064 10.016 4.246 11.994a9.607 9.607 0 0 0 2.984 1.855c.41.158.756.255 1.003.314a5.27 5.27 0 0 0 .383.076l.026.003.009.002h.005L12 21l-.093.744.093.012.093-.012L12 21l.094.744h.005l.009-.002.026-.003a5.27 5.27 0 0 0 .382-.076 7.799 7.799 0 0 0 1.004-.314 9.607 9.607 0 0 0 2.984-1.855c2.182-1.978 4.246-5.569 4.246-11.994v-.438l-.382-.215-8-4.5Zm-.197 17.856c-.07.017-.127.029-.171.037a6.307 6.307 0 0 1-.98-.291 8.11 8.11 0 0 1-2.516-1.567c-1.774-1.607-3.66-4.654-3.75-10.445L12 3.861l7.247 4.076c-.09 5.79-1.977 8.838-3.75 10.445a8.109 8.109 0 0 1-2.517 1.567c-.34.13-.62.21-.809.254Zm-.267.053ZM12.75 7v-.75h-1.5v1.086a2.833 2.833 0 0 0-1.08.496 2.31 2.31 0 0 0-.92 1.883c0 .955.327 1.643.877 2.132.479.426 1.091.658 1.556.835l.05.02c.53.2.89.348 1.144.573.2.178.373.443.373 1.011a.81.81 0 0 1-.33.69c-.22.167-.552.274-.92.274-.369 0-.7-.107-.92-.275a.81.81 0 0 1-.33-.689v-.75h-1.5v.75c0 .819.37 1.463.92 1.882a2.85 2.85 0 0 0 1.08.497v1.085h1.5v-1.085a2.85 2.85 0 0 0 1.08-.497c.55-.419.92-1.063.92-1.882 0-.956-.327-1.643-.877-2.132-.479-.426-1.091-.659-1.556-.836l-.05-.018c-.53-.202-.89-.35-1.144-.575-.2-.178-.373-.442-.373-1.01a.81.81 0 0 1 .33-.69c.22-.168.551-.275.92-.275.368 0 .7.107.92.275.2.153.33.366.33.69v.75h1.5v-.75c0-.82-.37-1.463-.92-1.883a2.837 2.837 0 0 0-1.08-.496V7Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-shield-dollar-sign', JhIconShieldDollarSign);