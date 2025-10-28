import {LitElement, css, html} from 'lit';

export default class JhIconIdBadge extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M14.45 4.498H20a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h5.55a2.5 2.5 0 0 1 4.9 0Zm-9.7 15v-13.5h6.5V4.75a.75.75 0 0 1 1.5 0v1.247h6.5v13.5h-1.06V18.28c0-.638-.223-1.157-.599-1.557-.354-.378-.811-.614-1.233-.781-.378-.15-.788-.265-1.143-.365l-.12-.034c-.403-.114-.715-.21-.949-.323a.351.351 0 0 1-.133-.121 4.423 4.423 0 0 0 1.156-2.809l.001-.015v-.031c0-.311 0-1.193-.368-2.015a2.846 2.846 0 0 0-.977-1.202c-.483-.332-1.09-.517-1.825-.517-.736 0-1.344.187-1.826.521a2.86 2.86 0 0 0-.976 1.206c-.368.825-.368 1.706-.368 2.008v.035l.001.02a4.47 4.47 0 0 0 1.158 2.77.556.556 0 0 1-.075.123.158.158 0 0 1-.025.024c-.24.116-.558.212-.966.326l-.116.032c-.36.1-.774.216-1.156.366-.424.167-.883.403-1.24.78-.376.4-.601.92-.601 1.56v1.216H4.75Zm11.94-.007v.007H7.31V18.28c0-.255.078-.407.193-.53.137-.144.36-.28.696-.413.306-.12.644-.214 1.017-.319l.111-.03c.392-.11.84-.239 1.22-.422l.002-.002c.42-.205.666-.575.8-.86a2.18 2.18 0 0 0 .211-.874v-.334l-.25-.224a2.97 2.97 0 0 1-.98-2.033c0-.3.012-.886.237-1.39.11-.245.259-.445.461-.585.198-.137.498-.254.972-.254.476 0 .776.116.974.252.202.14.35.337.46.58.225.504.236 1.094.236 1.403a2.92 2.92 0 0 1-.962 2.038l-.227.205-.02.305a1.85 1.85 0 0 0 1.01 1.766l.008.004c.376.185.82.314 1.209.424l.115.032c.368.104.701.198 1.003.317.334.133.556.269.691.413.115.122.193.275.193.531v1.21Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-id-badge', JhIconIdBadge);