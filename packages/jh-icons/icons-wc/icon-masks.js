import {LitElement, css, html} from 'lit';

export default class JhIconMask extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M14.049 4.814h-.75.75v4.023c.433.061.89.099 1.357.099 1.162 0 2.419-.235 3.405-.478a21.049 21.049 0 0 0 1.612-.47l.02-.007.005-.001a.75.75 0 0 1 1.003.706h-.75.75v6.251c0 1.66-.9 2.93-2.072 3.756-1.16.818-2.638 1.244-3.974 1.244-2.432 0-4.922-1.69-5.38-4.178a7.07 7.07 0 0 1-2.022.306c-2.692 0-5.454-2.068-5.454-5v-6.25h.75-.75a.75.75 0 0 1 1.06-.684l.001.001.014.006.065.028a12.52 12.52 0 0 0 1.233.428c.823.238 1.925.47 3.081.47 1.163 0 2.42-.234 3.405-.478a21.032 21.032 0 0 0 1.613-.469l.02-.007.005-.002a.75.75 0 0 1 1.003.706Zm0 5.732v-.196c.434.053.89.086 1.357.086 1.337 0 2.728-.266 3.765-.522.287-.071.55-.142.78-.208v5.23c0 1.056-.556 1.91-1.436 2.53-.891.628-2.062.97-3.11.97-1.996 0-3.813-1.476-3.946-3.287a6.25 6.25 0 0 0 .518-.328c.728-.513 1.35-1.197 1.718-2.04a.75.75 0 1 0 .333-1.283 4.4 4.4 0 0 0 .02-.434v-.517Zm-10-4.651v5.169c0 1.907 1.88 3.5 3.954 3.5 1.048 0 2.219-.341 3.11-.97.88-.619 1.436-1.474 1.436-2.53V5.835c-.23.065-.493.136-.78.207-1.037.257-2.428.522-3.766.522-1.344 0-2.594-.268-3.498-.53a14.582 14.582 0 0 1-.456-.14ZM14.462 16.63a.75.75 0 0 0 .75-.75c0-.076.058-.263.268-.455.197-.18.46-.295.732-.295.272 0 .535.115.732.295.21.192.268.38.268.455a.75.75 0 0 0 1.5 0c0-.615-.334-1.178-.758-1.563a2.602 2.602 0 0 0-1.742-.687 2.6 2.6 0 0 0-1.743.687c-.423.385-.757.948-.757 1.563 0 .414.335.75.75.75Zm3.978-4.73a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-11.786-.78a.75.75 0 0 0-1.5 0c0 .615.334 1.177.757 1.563a2.602 2.602 0 0 0 1.743.687c.694 0 1.306-.29 1.742-.687.424-.386.758-.948.758-1.563a.75.75 0 1 0-1.5 0c0 .076-.058.263-.268.455-.197.18-.46.295-.732.295-.273 0-.535-.116-.732-.295-.21-.192-.268-.38-.268-.455Zm.069-2.338a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.98 1.142a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-masks', JhIconMask);