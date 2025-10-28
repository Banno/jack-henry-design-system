import {LitElement, css, html} from 'lit';

export default class JhIconTriangleExclamation extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12.598 5.066c-.26-.422-.937-.422-1.197 0L7.61 11.225l-3.773 6.127c-.211.343.006.898.599.898h15.13c.593 0 .81-.555.6-.898l-3.774-6.127L12.6 5.066Zm1.278-.786c-.845-1.374-2.906-1.374-3.752 0l-3.792 6.158-3.773 6.128c-.903 1.466.257 3.184 1.876 3.184h15.13c1.618 0 2.78-1.718 1.876-3.184l-3.773-6.128-3.792-6.158ZM12 7.25a.75.75 0 0 1 .75.75v4a.75.75 0 1 1-1.5 0V8a.75.75 0 0 1 .75-.75Zm0 7.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-triangle-exclamation', JhIconTriangleExclamation);