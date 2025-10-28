import {LitElement, css, html} from 'lit';

export default class JhIconShirt extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M7.487 4.574a.25.25 0 0 1 .177-.074h1.399a2.975 2.975 0 0 0 5.925 0h1.348a.25.25 0 0 1 .177.074l3.68 3.68L18.78 9.67l-1.499-1.5A.75.75 0 0 0 16 8.7v10.8H8V8.7a.75.75 0 0 0-1.28-.53l-1.5 1.499-1.414-1.414 3.681-3.682Zm5.987-.074h-2.898a1.475 1.475 0 0 0 2.898 0ZM7.664 3a1.75 1.75 0 0 0-1.237.513L2.215 7.724a.75.75 0 0 0 0 1.06L4.69 11.26a.75.75 0 0 0 1.061 0l.749-.75v9.74c0 .415.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-9.74l.75.75a.75.75 0 0 0 1.06 0l2.475-2.475a.75.75 0 0 0 0-1.06l-4.212-4.212A1.75 1.75 0 0 0 16.336 3H7.664Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-shirt', JhIconShirt);