import {LitElement, css, html} from 'lit';

export default class JhIconCalendarRange extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M7.75 4a.75.75 0 1 0-1.5 0v2.25H4a.75.75 0 0 0-.75.75v13c0 .415.336.75.75.75h16a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75h-2.25V4a.75.75 0 0 0-1.5 0v2.25h-8.5V4ZM17 7.75H4.75v2.5h14.5v-2.5H17ZM4.75 19.25v-7.5h14.5v7.5H4.75ZM9 17H6v-3h3v3Zm2 0h3v-3h-3v3Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-calendar-range', JhIconCalendarRange);