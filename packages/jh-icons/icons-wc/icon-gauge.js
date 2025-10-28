import {LitElement, css, html} from 'lit';

export default class JhIconGauge extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M11.25 6.929a8.213 8.213 0 0 0-4.53 1.876l.86.86-1.06 1.06-.86-.859a8.213 8.213 0 0 0-1.876 4.53H5v1.5H3a.75.75 0 0 1-.75-.75c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a.75.75 0 0 1-.75.75h-2v-1.5h1.216a8.213 8.213 0 0 0-1.876-4.53l-.86.86-1.06-1.06.86-.86a8.213 8.213 0 0 0-4.53-1.877v1.216h-1.5V6.93Zm3.015 2.84-.75-.01-.667-.342a.75.75 0 0 1 1.417.353Zm-.75-.01-.667-.342-.002.004-.006.011-.023.045-.087.171a260.15 260.15 0 0 0-1.275 2.537c-.355.716-.718 1.46-1.006 2.077-.272.582-.518 1.132-.592 1.407-.289 1.078.355 2.263 1.48 2.564 1.127.302 2.277-.402 2.565-1.48.086-.32.14-.945.182-1.6a81.49 81.49 0 0 0 .106-2.317 179.985 179.985 0 0 0 .071-2.81l.004-.19V9.77l-.75-.012Zm-.835 3.333a97.539 97.539 0 0 0-.872 1.806c-.298.635-.47 1.043-.502 1.16a.615.615 0 0 0 .42.727.615.615 0 0 0 .727-.42c.04-.144.09-.601.134-1.308a74.85 74.85 0 0 0 .093-1.965Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-gauge', JhIconGauge);