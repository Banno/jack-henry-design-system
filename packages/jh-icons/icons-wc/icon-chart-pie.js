import {LitElement, css, html} from 'lit';

export default class JhIconChartPie extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M13.875 2.25a.75.75 0 0 0-.75.75v7a.75.75 0 0 0 .75.75h7a.75.75 0 0 0 .75-.75 7.75 7.75 0 0 0-7.75-7.75Zm.75 7V3.796A6.25 6.25 0 0 1 20.08 9.25h-5.455ZM7.097 6.972a7.25 7.25 0 0 1 3.278-1.183V13a.75.75 0 0 0 .75.75h7.211A7.25 7.25 0 1 1 7.097 6.972Zm4.028-2.722a8.75 8.75 0 1 0 8.75 8.75.75.75 0 0 0-.75-.75h-7.25V5a.75.75 0 0 0-.75-.75Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-chart-pie', JhIconChartPie);