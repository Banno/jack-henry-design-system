import {LitElement, css, html} from 'lit';

export default class JhIconPhone extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M5.312 2.47a.75.75 0 0 1 1.06 0l4.737 4.737a.75.75 0 0 1 0 1.06L8.937 10.44a.198.198 0 0 0 0 .279l4.345 4.344a.198.198 0 0 0 .279 0l2.172-2.172a.75.75 0 0 1 1.06 0l4.737 4.737a.75.75 0 0 1 0 1.06l-2.842 2.843a.75.75 0 0 1-.53.22c-3.6 0-7.57-2.286-10.596-5.313C4.535 13.411 2.25 9.442 2.25 5.842a.75.75 0 0 1 .22-.53L5.312 2.47ZM3.757 6.146c.125 2.967 2.067 6.434 4.866 9.232 2.798 2.798 6.264 4.74 9.23 4.866l2.086-2.086-3.676-3.676-1.642 1.642a1.698 1.698 0 0 1-2.4 0L7.877 11.78a1.698 1.698 0 0 1 0-2.401l1.641-1.642-3.676-3.676-2.085 2.085Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-phone', JhIconPhone);