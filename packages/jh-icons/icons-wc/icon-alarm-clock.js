import {LitElement, css, html} from 'lit';

export default class JhIconAlarmClock extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M6.53 3.53a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 1.06 1.06l3-3ZM4.75 12a7.25 7.25 0 1 1 14.5 0 7.25 7.25 0 0 1-14.5 0ZM12 20.75a8.715 8.715 0 0 1-3.816-.874L6.53 21.53a.75.75 0 1 1-1.06-1.06l1.389-1.39a8.75 8.75 0 1 1 10.283 0l1.388 1.39a.75.75 0 1 1-1.06 1.06l-1.654-1.654A8.716 8.716 0 0 1 12 20.75Zm5.47-18.28a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06ZM12.25 8a.75.75 0 0 0-1.5 0v4c0 .25.125.485.334.624l3 2a.75.75 0 0 0 .832-1.248l-2.666-1.777v-3.6Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-alarm-clock', JhIconAlarmClock);