// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';

/**
 * @cssprop --jh-icon-color-fill - The icon color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-icon-size-extra-small - The icon size when `size="extra-small"`. Defaults to `--jh-size-400`.
 * @cssprop --jh-icon-size-small - The icon size when `size="small"`. Defaults to `--jh-size-500`.
 * @cssprop --jh-icon-size-medium - The icon size when `size="medium"`. Defaults to `--jh-size-600`.
 * @cssprop --jh-icon-size-large - The icon size when `size="large"`. Defaults to `--jh-size-900`.
 * @cssprop --jh-icon-size-extra-large - The icon size when `size="extra-large"`. Defaults to `--jh-size-1400`.
 * @slot default - Use to insert the icon SVG content.
 * @customElement jh-icon
 */
export class JhIcon extends LitElement {

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
      svg,
      ::slotted(*) {
        width: 100%;
        height: 100%;
      }
    `;
  }
  static get properties() {
    return {
      /**
       * Sets the size of the icon.
      */
      size: {
        type: String, reflect: true
      }
    };
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
      <slot></slot>
    `;
  }
}
customElements.define('jh-icon', JhIcon);