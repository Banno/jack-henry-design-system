import {LitElement, css, html} from 'lit';

export default class JhIconArrowCircleDollarSign extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12.024 3.25C7.18 3.25 3.25 7.166 3.25 12A8.741 8.741 0 0 0 12 20.75c4.37 0 7.634-3.28 8.711-6.513a.75.75 0 0 0-1.423-.474C18.366 16.53 15.582 19.25 12 19.25A7.241 7.241 0 0 1 4.75 12c0-4.002 3.254-7.25 7.274-7.25a7.272 7.272 0 0 1 5.895 3h-1.42a.75.75 0 0 0 0 1.5h3.75V5.5a.75.75 0 1 0-1.5 0v.88a8.766 8.766 0 0 0-6.725-3.13Zm.726 3.938V8.1c.291.08.573.212.822.4.48.366.803.93.803 1.642v.75h-1.5v-.75a.518.518 0 0 0-.212-.448c-.15-.115-.388-.195-.663-.195s-.512.08-.663.195a.518.518 0 0 0-.212.448c0 .425.126.6.256.716.183.163.45.274.886.44l.046.018c.374.142.893.34 1.302.703.48.426.76 1.024.76 1.837 0 .712-.323 1.276-.803 1.641a2.4 2.4 0 0 1-.822.401v.914h-1.5v-.914a2.414 2.414 0 0 1-.822-.4 2.015 2.015 0 0 1-.803-1.642v-.75h1.5v.75c0 .217.083.35.212.448.15.115.388.195.663.195s.512-.08.663-.195a.517.517 0 0 0 .212-.448c0-.425-.126-.6-.256-.716-.183-.163-.45-.274-.886-.44l-.046-.018c-.374-.142-.893-.339-1.303-.703-.479-.426-.76-1.024-.76-1.837 0-.712.324-1.276.804-1.641a2.4 2.4 0 0 1 .822-.401v-.914h1.5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-arrow-circle-dollar-sign', JhIconArrowCircleDollarSign);