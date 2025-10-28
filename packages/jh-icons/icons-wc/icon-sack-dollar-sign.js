import {LitElement, css, html} from 'lit';

export default class JhIconSackDollarSign extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M12.409 4.429a2.481 2.481 0 0 1-1.09.489c-.38.076-.75.09-1.093.07L10.901 6h2.18l1.404-2.282A2.308 2.308 0 0 0 13.5 3.5c-.189 0-.256.04-.286.06-.054.036-.108.093-.241.264l-.023.028a3.215 3.215 0 0 1-.541.577Zm-4.533-.263L9.158 6.09a2 2 0 0 0-.713 3.427C6.407 11.706 5 14.096 5 17.5c0 .992.211 1.801.584 2.45a3.74 3.74 0 0 0 1.421 1.403c1.05.594 2.212.647 2.745.647h4.5c.643 0 1.82-.046 2.848-.648C18.199 20.707 19 19.505 19 17.5c0-1.859-.295-3.344-1-4.743-.563-1.119-1.372-2.148-2.434-3.25a2 2 0 0 0-.77-3.431l1.343-2.183a.75.75 0 0 0-.105-.92L15.5 3.5c.534-.527.533-.528.533-.528l-.001-.001-.003-.003-.005-.005-.014-.013a2.741 2.741 0 0 0-.181-.156A3.806 3.806 0 0 0 13.5 2c-.44 0-.806.105-1.116.31a2.507 2.507 0 0 0-.584.58l-.01.012c-.135.174-.213.272-.316.354a.99.99 0 0 1-.448.191c-.53.106-1.069.026-1.499-.098a4.157 4.157 0 0 1-.664-.256l-.004-.002a.75.75 0 0 0-.982 1.075ZM9.75 7.5h4.5a.5.5 0 0 1 0 1h-4.5a.5.5 0 0 1 0-1Zm4.194 2.5H10.06c-2.192 2.212-3.56 4.357-3.56 7.5 0 .775.164 1.318.385 1.704.22.384.522.652.86.844.7.397 1.538.452 2.005.452h4.501c.606 0 1.43-.056 2.089-.442.586-.344 1.16-1.017 1.16-2.558 0-1.687-.264-2.928-.84-4.068-.552-1.097-1.415-2.15-2.716-3.432ZM12.5 12v-.5h-1v1.054a1.89 1.89 0 0 0-.56.215c-.387.229-.69.633-.69 1.231 0 .662.537 1.393 1.6 1.727.794.25.9.621.9.773a.49.49 0 0 1-.057.257.356.356 0 0 1-.135.126c-.143.082-.354.117-.558.117-.18 0-.396-.04-.547-.13-.122-.071-.203-.168-.203-.37V16h-1v.5c0 .602.31 1.006.696 1.233.178.105.37.172.554.212v.805h1v-.797c.182-.037.374-.099.554-.201.4-.23.696-.64.696-1.252 0-.737-.552-1.397-1.6-1.727-.778-.245-.9-.672-.9-.773 0-.205.081-.301.2-.371.148-.088.361-.129.55-.129.135 0 .35.058.525.176.172.117.225.232.225.324v.5h1V14c0-.541-.331-.926-.664-1.152a2.095 2.095 0 0 0-.586-.273V12Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-sack-dollar-sign', JhIconSackDollarSign);