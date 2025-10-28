import {LitElement, css, html} from 'lit';

export default class JhIconFingerprint extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M11.998 3.502c-2.381 0-4.312.7-5.377 1.356a.75.75 0 0 1-.787-1.277c1.305-.805 3.509-1.58 6.164-1.58 2.67 0 4.71.78 6.109 1.564a.75.75 0 1 1-.733 1.309c-1.22-.684-3.011-1.372-5.376-1.372Zm-.745 2.43C8.255 6.217 5.558 7.828 4.28 9.82a.75.75 0 0 1-1.262-.81C4.58 6.574 7.724 4.76 11.11 4.438c3.43-.326 7.163.873 9.846 4.531a.75.75 0 1 1-1.21.887c-2.34-3.192-5.538-4.205-8.494-3.925ZM9.67 8.607c3.82-1.507 8.563 1.228 9.143 5.413.126.91-.145 1.421-.462 1.73-.35.343-.838.512-1.205.557a1.886 1.886 0 0 1-1.176-.28c-.35-.224-.651-.605-.696-1.273-.072-1.068-.497-1.899-1.155-2.45-.646-.54-1.456-.762-2.227-.737-1.495.049-3.156 1.09-3.156 3.014 0 1.413.216 2.805 1.004 4.086.79 1.281 2.099 2.365 4.122 3.268a.75.75 0 0 0 .612-1.37c-1.838-.82-2.87-1.732-3.456-2.685-.588-.954-.782-2.034-.782-3.299 0-.861.74-1.483 1.705-1.515.46-.015.894.12 1.215.388.31.26.574.693.621 1.4.079 1.164.65 1.966 1.383 2.436a3.38 3.38 0 0 0 2.167.506c.598-.073 1.426-.341 2.072-.972.68-.665 1.086-1.662.9-3.01-.713-5.14-6.45-8.468-11.18-6.603-2.286.902-4.007 2.425-4.887 4.427-.88 2.004-.878 4.394.105 6.948a.75.75 0 1 0 1.4-.538c-.87-2.259-.824-4.23-.132-5.806C6.3 10.665 7.683 9.39 9.67 8.607Zm2.284 5.4a.75.75 0 0 1 .76.74c.04 2.693 2.468 4.334 5.093 3.82a.75.75 0 0 1 .287 1.473c-3.361.657-6.824-1.468-6.88-5.271a.75.75 0 0 1 .74-.761Zm.004-3.358c.887-.018 2.012.315 2.906 1.017.873.685 1.506 1.704 1.506 3.092a.75.75 0 1 0 1.5 0c0-1.909-.895-3.341-2.08-4.272-1.165-.915-2.628-1.362-3.863-1.336-2.367.049-5.325 1.552-5.723 4.978-.38 3.268 1.62 6.224 3.02 7.568a.75.75 0 0 0 1.039-1.082c-1.237-1.188-2.871-3.709-2.569-6.313.284-2.447 2.385-3.613 4.264-3.652Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-fingerprint', JhIconFingerprint);