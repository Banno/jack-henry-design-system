import {LitElement, css, html} from 'lit';

export default class JhIconCircleStar extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0ZM12 2.25c-5.385 0-9.75 4.366-9.75 9.75 0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75c0-5.384-4.365-9.75-9.75-9.75Zm.679 4.29a.75.75 0 0 0-1.358 0l-1.263 2.69-3.165.457a.75.75 0 0 0-.388 1.306l2.368 2.081-.47 2.951a.75.75 0 0 0 1.104.774L12 15.415l2.493 1.384a.75.75 0 0 0 1.105-.774l-.47-2.95 2.367-2.082a.75.75 0 0 0-.388-1.306l-3.165-.457-1.263-2.69Zm-1.435 3.693L12 8.623l.756 1.61a.75.75 0 0 0 .572.424l1.956.282-1.458 1.281a.75.75 0 0 0-.245.682l.293 1.838-1.51-.838a.75.75 0 0 0-.728 0l-1.51.838.293-1.838a.75.75 0 0 0-.245-.681l-1.458-1.282 1.956-.282a.75.75 0 0 0 .572-.424Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-circle-star', JhIconCircleStar);