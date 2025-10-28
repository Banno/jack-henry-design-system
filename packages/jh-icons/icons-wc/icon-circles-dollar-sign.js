import {LitElement, css, html} from 'lit';

export default class JhIconCirclesDollarSign extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M15 3.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM8.25 9a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0Zm7.25-3.75v1.076c.204.059.407.151.586.273.333.225.664.61.664 1.152v.5h-1v-.5c0-.093-.053-.208-.225-.324A1.038 1.038 0 0 0 15 7.25c-.189 0-.402.04-.55.128-.119.07-.2.166-.2.372 0 .1.122.528.9.773 1.048.33 1.6.99 1.6 1.727 0 .611-.296 1.022-.696 1.251a1.83 1.83 0 0 1-.554.201v1.048h-1v-1.054a1.907 1.907 0 0 1-.554-.213 1.375 1.375 0 0 1-.696-1.232v-.5h1v.5c0 .202.08.298.203.37.151.09.366.13.547.13.204 0 .415-.035.558-.117a.356.356 0 0 0 .135-.126.49.49 0 0 0 .057-.257c0-.152-.106-.524-.9-.773-1.063-.335-1.6-1.066-1.6-1.727 0-.599.303-1.003.69-1.232a1.89 1.89 0 0 1 .56-.215V5.251h1ZM2.25 15a6.753 6.753 0 0 1 5.065-6.537 7.818 7.818 0 0 0 .047 1.548A5.252 5.252 0 0 0 9 20.251a5.252 5.252 0 0 0 4.99-3.613 7.78 7.78 0 0 0 1.548.047A6.75 6.75 0 0 1 2.25 15Zm5.69-2.48c.053-.032.107-.06.162-.086.152.303.322.595.51.874a.796.796 0 0 0-.163.071c-.118.07-.199.166-.199.372 0 .1.122.528.9.773 1.048.33 1.6.99 1.6 1.727 0 .611-.296 1.022-.696 1.251a1.83 1.83 0 0 1-.554.201v1.048h-1v-1.055a1.907 1.907 0 0 1-.554-.213 1.375 1.375 0 0 1-.696-1.232v-.5h1v.5c0 .202.08.298.203.37.151.09.366.13.547.13.204 0 .415-.036.558-.117a.356.356 0 0 0 .135-.126.49.49 0 0 0 .057-.257c0-.152-.106-.524-.9-.773-1.063-.335-1.6-1.066-1.6-1.727 0-.599.303-1.003.69-1.232Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-circles-dollar-sign', JhIconCirclesDollarSign);