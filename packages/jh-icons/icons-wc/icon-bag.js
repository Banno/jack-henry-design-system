import {LitElement, css, html} from 'lit';

export default class JhIconBag extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M16.495 6.413a4.5 4.5 0 0 0-8.995.212v.75H4.286a.75.75 0 0 0-.746.676l-1.123 11.35a2.252 2.252 0 0 0 2.24 2.474h14.689a2.248 2.248 0 0 0 2.237-2.47L20.46 8.052a.75.75 0 0 0-.746-.676H16.5v-.75l-.005-.212ZM15 8.875v1.75l.007.102a.75.75 0 0 0 1.493-.102v-1.75h2.535l1.056 10.678a.748.748 0 0 1-.745.822H4.658l-.1-.006a.753.753 0 0 1-.649-.82L4.965 8.875H7.5v1.75l.007.102A.75.75 0 0 0 9 10.625v-1.75h6Zm0-1.5v-.75a3 3 0 0 0-5.995-.176L9 6.625v.75h6Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-bag', JhIconBag);