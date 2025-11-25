// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';

/**
 * @cssprop --jh-menu-z-index - The menu z-index. Defaults to `--jh-z-index-positive-1000`.
 * @cssprop --jh-menu-color-background - The menu container background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-menu-shadow - The menu box-shadow. Defaults to `--jh-shadow-high`.
 * @cssprop --jh-menu-border-radius - The menu border-radius. Defaults to `--jh-border-radius-200`.
 * @cssprop --jh-menu-space-padding - The menu container padding. Defaults to `--jh-dimension-200 0`.
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
        box-shadow: var(--jh-menu-shadow, var(--jh-shadow-high));
        border-radius: var(
          --jh-menu-border-radius,
          var(--jh-border-radius-200)
        );
        color: var(
          --jh-menu-color-text,
          var(--jh-color-content-primary-enabled)
        );
        padding: var(--jh-menu-space-padding, var(--jh-dimension-200) 0);
        z-index: var(--jh-menu-z-index, var(--jh-z-index-positive-1000));
        font-family: var(--jh-font-body-regular-1-font-family);
        font-weight: var(--jh-font-body-regular-1-font-weight);
        font-size: var(--jh-font-body-regular-1-font-size);
        line-height: var(--jh-font-body-regular-1-line-height);
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