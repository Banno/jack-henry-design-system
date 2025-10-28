import {LitElement, css, html} from 'lit';

export default class JhIconApple extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M19.983 8.727c-1-1.272-2.455-2-3.819-2-1.818 0-2.545.818-3.818.818-1.273 0-2.273-.818-3.818-.818s-3.182.91-4.182 2.546c-1.545 2.181-1.273 6.363 1.091 10 .818 1.273 2 2.727 3.455 2.727 1.272 0 1.636-.818 3.454-.818 1.818 0 2.091.818 3.455.818 1.454 0 2.636-1.636 3.545-2.91.637-.908.818-1.363 1.273-2.454-3.455-1.272-4-6.09-.636-7.909ZM14.8 5.273c.636-.818 1.182-2 1-3.273-1.091.09-2.364.727-3.091 1.636-.637.819-1.182 2-1 3.182 1.182 0 2.363-.636 3.09-1.545Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-apple', JhIconApple);