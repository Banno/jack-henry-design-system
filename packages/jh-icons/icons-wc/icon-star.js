import {LitElement, css, html} from 'lit';

export default class JhIconStar extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12 4.25a.75.75 0 0 1 .68.433l1.98 4.242 4.948.717a.75.75 0 0 1 .389 1.305l-3.71 3.278.74 4.658a.75.75 0 0 1-1.107.772L12 17.468l-3.92 2.187a.75.75 0 0 1-1.106-.772l.739-4.658-3.71-3.278a.75.75 0 0 1 .39-1.305l4.947-.717 1.98-4.242A.75.75 0 0 1 12 4.25Zm0 2.523-1.472 3.153a.75.75 0 0 1-.572.425l-3.746.543 2.805 2.48a.75.75 0 0 1 .244.679l-.562 3.54 2.938-1.64a.75.75 0 0 1 .73 0l2.938 1.64-.562-3.54a.75.75 0 0 1 .244-.68l2.805-2.478-3.746-.544a.75.75 0 0 1-.572-.425L12 6.773Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-star', JhIconStar);