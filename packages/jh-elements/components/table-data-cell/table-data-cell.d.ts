// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The table data cell is used to display one cell of table data. Table data cells can contain text or other content and have to be placed inside `<jh-table-row>`s.
 *
 * [Table Data Cell Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-table-table-data-cell--docs)
 *
 * @cssprop --jh-table-data-cell-color-text - The cell text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-table-data-cell-color-background - The cell background color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-table-data-cell-color-border-top - The cell border top color. Defaults to `transparent`.
 * @cssprop --jh-table-data-cell-color-border-right - The cell border right color. Defaults to `transparent`.
 * @cssprop --jh-table-data-cell-color-border-left - The cell border left color. Defaults to `transparent`.
 * @cssprop --jh-table-data-cell-color-border-bottom - The cell border bottom color. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-data-cell-border-top-width - The cell border top width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-data-cell-border-right-width - The cell border right width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-data-cell-border-left-width - The cell border left width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-data-cell-border-bottom-width - The cell border bottom width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-data-cell-border-top-style - The cell border top style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-data-cell-border-right-style - The cell border right style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-data-cell-border-left-style - The cell border left style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-data-cell-border-bottom-style - The cell border bottom style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-data-cell-space-padding-top - The cell padding top. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-data-cell-space-padding-right - The cell padding right. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-data-cell-space-padding-bottom - The cell padding bottom. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-data-cell-space-padding-left - The cell padding left. Defaults to `--jh-dimension-400`.
 *
 * @slot default - Use to insert content.
 *
 * @customElement jh-table-data-cell
 */
export class JhTableDataCell extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        horizontalAlign: {
            type: StringConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    /**
     * Sets the horizontal alignment of the content.
     * @attr horizontal-align
     * @type { 'left' | 'center' | 'right' }
     */
    horizontalAlign: "left" | "center" | "right";
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-table-data-cell': JhTableDataCell;
  }
}
