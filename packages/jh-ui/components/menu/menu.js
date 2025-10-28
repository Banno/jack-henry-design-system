import { LitElement, css, html } from 'lit';

/**
 * @cssprop --jh-menu-z-index - The menu z-index. Defaults to `--jh-z-index-positive-1000`.
 * @cssprop --jh-menu-color-background - The menu container background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-menu-shadow - The menu box-shadow. Defaults to `--jh-shadow-300`.
 * @cssprop --jh-menu-border-radius - The menu border-radius. Defaults to `--jh-border-radius-200`.
 * @cssprop --jh-menu-space-padding - The menu container padding. Defaults to `--jh-space-200 0`.
 * @cssprop --jh-menu-color-text - The text color. Defaults to `--jh-color-content-primary-enabled`.
 *
 * @slot default - Use to insert menu items.
 * @customElement jh-menu
 */
export class JhMenu extends LitElement {
  /** @type {ElementInternals} */
  #internals;

  static get styles() {
    return css`
      :host {
        background-color: var(
          --jh-menu-color-background,
          var(--jh-color-container-primary-enabled)
        );
        box-shadow: var(--jh-menu-shadow, var(--jh-shadow-300));
        border-radius: var(
          --jh-menu-border-radius,
          var(--jh-border-radius-200)
        );
        color: var(
          --jh-menu-color-text,
          var(--jh-color-content-primary-enabled)
        );
        padding: var(--jh-menu-space-padding, var(--jh-space-200) 0);
        z-index: var(--jh-menu-z-index, var(--jh-z-index-positive-1000));
        font: var(--jh-font-body-regular-1);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        position: relative;
      }
    `;
  }
  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#internals.role = 'menu';
  }
  render() {
    return html`<slot></slot>`;
  }
}
customElements.define('jh-menu', JhMenu);