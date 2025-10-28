import {LitElement, css, html} from 'lit';

export default class JhIconTagXmark extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M7.512 6.93 3.93 11.574l-.016.02-.017.02a.584.584 0 0 0 0 .775l.017.019.016.02 3.582 4.643c.11.115.263.18.422.18H20a.25.25 0 0 0 .25-.25V7a.25.25 0 0 0-.25-.25H7.934a.583.583 0 0 0-.422.18Zm-1.135-.98c.396-.445.962-.7 1.557-.7H20c.966 0 1.75.784 1.75 1.75v10A1.75 1.75 0 0 1 20 18.75H7.934a2.084 2.084 0 0 1-1.557-.699l-.017-.02-.016-.02-3.587-4.649a2.084 2.084 0 0 1 0-2.724L6.344 5.99l.016-.02.017-.02ZM9.47 8.47a.75.75 0 0 1 1.06 0L13 10.94l2.47-2.47a.75.75 0 0 1 1.06 1.06L14.06 12l2.47 2.47a.75.75 0 1 1-1.06 1.06L13 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L11.94 12 9.47 9.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-tag-xmark', JhIconTagXmark);