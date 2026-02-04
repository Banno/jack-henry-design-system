// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';

/**
 * The table row is used to display one row of table data. It contains `<jh-table-data-cell>` or `<jh-table-header-cell>` components.
 * 
 * [Table Row Storybook Documentation](https://release-v2--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-table-table-row--docs)
 * 
 * @cssprop --jh-table-row-color-text-enabled - The row text color when enabled. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-table-row-color-background-enabled - The row background color when enabled. Defaults to `--jh-color-container-primary-enabled`. 
 * @cssprop --jh-table-row-color-border-bottom-enabled - The row border bottom color when enabled. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-row-color-text-hover - The row text color when hovered. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-table-row-color-background-hover - The row background color when hovered. Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-table-row-color-border-bottom-hover - The row border bottom color when hovered. Defaults to `--jh-border-decorative-color`.
 * 
 * @slot default - Use to insert `<jh-table-data-cell>` or `<jh-table-header-cell>` components.
 * @customElement jh-table-row
 */
export class JhTableRow extends LitElement {

  /** @type {ElementInternals} */
  #internals;

  static get styles() {
    return css`
      :host {
        display: table-row;
        --jh-table-data-cell-color-text: var(--jh-table-row-color-text-enabled);
        --jh-table-data-cell-color-border-bottom: var(--jh-table-row-color-border-bottom-enabled);
        --jh-table-data-cell-color-background: var(--jh-table-row-color-background-enabled);
        }
      :host(:hover) {
        --jh-table-data-cell-color-text: var(--jh-table-row-color-text-hover, var(--jh-color-content-primary-hover));
        --jh-table-data-cell-color-border-bottom: var(--jh-table-row-color-border-bottom-hover);
        --jh-table-data-cell-color-background: var(--jh-table-row-color-background-hover, var(--jh-color-container-primary-hover));
        }
    `;
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#internals.role = 'row';
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('jh-table-row', JhTableRow);