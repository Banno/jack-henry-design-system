import {LitElement, css, html} from 'lit';

export default class JhIconStore extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M4 4a.75.75 0 0 1 .75-.75h14.5A.75.75 0 0 1 20 4v1.55l.003.004 1.85 2.5.147.199v1.279l-.003.03c-.09 1.117-.902 2.098-1.997 2.366v6.822h.25a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5H4v-6.822c-1.095-.268-1.907-1.249-1.998-2.365L2 9.533V8.236l.164-.205L4 5.737V4Zm1.5 1.25h13v-.5h-13v.5Zm.958 1.5H5.11L3.5 8.763v.705c.06.576.555 1.032 1.1 1.032s1.04-.456 1.1-1.032V8.33l.074-.154.684-1.426ZM5.5 11.835c.362-.139.685-.358.95-.632.469.486 1.12.797 1.85.797s1.381-.311 1.85-.797c.469.486 1.12.797 1.85.797s1.381-.311 1.85-.797c.469.486 1.12.797 1.85.797s1.381-.311 1.85-.797c.265.274.588.493.95.632v6.915h-1v-3.535l-.007-.143-.001-.017-.002-.018c-.126-1.36-1.384-2.287-2.74-2.287-1.356 0-2.614.927-2.74 2.287l-.002.018v.017l-.007.144-.001.017v3.517H5.5v-6.915Zm3.91-3.453.26-1.632H8.122L7.2 8.67v.798c.06.576.555 1.032 1.1 1.032s1.04-.456 1.1-1.032V8.44l.01-.058ZM12 10.5c-.545 0-1.04-.456-1.1-1.032V8.56l.29-1.81h1.62l.29 1.81v.908c-.06.576-.555 1.032-1.1 1.032Zm3.7 0c.545 0 1.04-.456 1.1-1.032V8.67l-.922-1.92H14.33l.26 1.63.01.06v1.027c.06.576.555 1.032 1.1 1.032Zm3.7 0c-.545 0-1.04-.456-1.1-1.032V8.33l-.074-.154-.684-1.426h1.48L20.5 8.747v.72c-.06.577-.555 1.033-1.1 1.033Zm-5.9 4.767.005-.105c.05-.435.51-.912 1.245-.912.735 0 1.196.477 1.245.912l.005.105V18.5h-2.5v-3.233Zm-7-.767c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 6.5 15.5v-1Zm1.75-.25a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25h-1Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-store', JhIconStore);