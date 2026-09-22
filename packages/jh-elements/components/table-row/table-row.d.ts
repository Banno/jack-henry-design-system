// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The table row is used to display one row of table data. It contains `<jh-table-data-cell>` or `<jh-table-header-cell>` components.
 *
 * [Table Row Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-table-table-row--docs)
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
export class JhTableRow extends JhElement {
    static get styles(): import("lit").CSSResult;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-table-row': JhTableRow;
  }
}
