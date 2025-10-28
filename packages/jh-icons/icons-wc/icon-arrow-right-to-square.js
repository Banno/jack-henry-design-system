import {LitElement, css, html} from 'lit';

export default class JhIconArrowRightToSquare extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M9.333 4.75a.583.583 0 0 0-.583.583V7a.75.75 0 0 1-1.5 0V5.333c0-1.15.933-2.083 2.083-2.083h8.333c1.151 0 2.084.933 2.084 2.083v13.333a2.084 2.084 0 0 1-2.084 2.084H9.333a2.083 2.083 0 0 1-2.083-2.084V17a.75.75 0 0 1 1.5 0v1.666c0 .323.261.584.583.584h8.333a.583.583 0 0 0 .584-.584V5.334a.583.583 0 0 0-.584-.584H9.333Zm1.137 2.72a.75.75 0 0 1 1.06 0l4 4 .53.53-.53.53-4 4a.75.75 0 0 1-1.06-1.06l2.72-2.72H3a.75.75 0 0 1 0-1.5h10.19l-2.72-2.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrow-right-to-square', JhIconArrowRightToSquare);