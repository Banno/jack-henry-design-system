// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The table header cell is used to display a column header. It should be placed inside a `<jh-table-row>` and contains text. Hooks for sorting and a sorting icon are also provided.
 *
 * [Table Header Cell Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-table-table-header-cell--docs)
 *
 * @cssprop --jh-table-header-cell-color-text-enabled - The header cell text color when enabled. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-table-header-cell-color-text-hover - The sortable header cell text color when hovered. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-table-header-cell-color-text-focus - The sortable header cell text color when focused. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-table-header-cell-color-text-active - The sortable header cell text color when active. Defaults to `--jh-color-content-primary-active`.
 * @cssprop --jh-table-header-cell-color-text-selected - The sortable header cell text color when selected. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-table-header-cell-color-background-enabled - The header cell background color when enabled. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-table-header-cell-color-background-hover - The sortable header cell background color when hovered. Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-table-header-cell-color-background-focus - The sortable header cell background color when focused. Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-table-header-cell-color-background-active - The sortable header cell background color when active. Defaults to `--jh-color-container-primary-active`.
 * @cssprop --jh-table-header-cell-color-background-selected - The sortable header cell background color when selected. Defaults to `--jh-color-container-primary-selected`.
 * @cssprop --jh-table-header-cell-color-border-bottom-enabled - The header cell border bottom color when enabled. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-border-bottom-width - The header cell border bottom width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-header-cell-border-bottom-style - The header cell border bottom style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-header-cell-color-border-top-enabled - The header cell border top color when enabled. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-border-top-width - The header cell border top width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-header-cell-border-top-style - The header cell border top style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-header-cell-color-border-left-enabled - The header cell border left color when enabled. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-border-left-width - The header cell border left width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-header-cell-border-left-style - The header cell border left style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-header-cell-color-border-right-enabled - The header cell border right color when enabled. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-border-right-width - The header cell border right width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-header-cell-border-right-style - The header cell border right style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-header-cell-icon-color-fill-enabled - The sortable header cell icon color when enabled. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-table-header-cell-icon-color-fill-hover - The sortable header cell icon color when hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-table-header-cell-icon-color-fill-focus - The sortable header cell icon color when focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-table-header-cell-icon-color-fill-active - The sortable header cell icon color when active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-table-header-cell-icon-color-fill-selected - The sortable header cell icon color when selected. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-table-header-cell-color-border-bottom-hover - The sortable header cell border bottom color when hovered. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-bottom-focus - The sortable header cell border bottom color when focused. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-bottom-active - The sortable header cell border bottom color when active. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-bottom-selected - The sortable header cell border bottom color when selected. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-top-hover - The sortable header cell border top color when hovered. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-top-focus - The sortable header cell border top color when focused. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-top-active - The sortable header cell border top color when active. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-top-selected - The sortable header cell border top color when selected. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-right-hover - The sortable header cell border right color when hovered. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-color-border-right-focus - The sortable header cell border right color when focused. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-color-border-right-active - The sortable header cell border right color when active. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-color-border-right-selected - The sortable header cell border right color when selected. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-color-border-left-hover - The sortable header cell border left color when hovered. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-color-border-left-focus - The sortable header cell border left color when focused. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-color-border-left-active - The sortable header cell border left color when active. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-color-border-left-selected - The sortable header cell border left color when selected. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-space-padding-top - The header cell padding top. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-header-cell-space-padding-right - The header cell padding right. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-header-cell-space-padding-bottom - The header cell padding bottom. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-header-cell-space-padding-left - The header cell padding left. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-header-cell-color-focus - The header cell outline color when it receives keyboard focus. Defaults to `--jh-border-color-focus`.
 *
 * @slot jh-table-sorted-ascending - Use to insert a custom icon for ascending sort.
 * @slot jh-table-sorted-descending - Use to insert a custom icon for descending sort.
 * @slot jh-table-sorted-none - Use to insert a custom icon for no sort.
 * @slot default - Use to insert table header text.
 *
 * @event jh-sort - Dispatched when a sortable header cell is activated. Event payload includes the column, sorted state, and id of the header cell and can be accessed via `e.detail.reference.column`, `e.detail.reference.sorted`, and `e.detail.reference.id`.
 * @customElement jh-table-header-cell
 */
export class JhTableHeaderCell extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        horizontalAlign: {
            type: StringConstructor;
            reflect: boolean;
            attribute: string;
        };
        sortable: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        sorted: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    /**
     * Sets the horizontal alignment of the content.
     * @attr horizontal-align
     * @type { 'left' | 'center' | 'right' }
     */
    horizontalAlign: "left" | "center" | "right";
    /**
     * Makes a column sortable.
     * @type {boolean}
     */
    sortable: boolean;
    /**
     * Sets the order in which the items in the column are sorted.
     * @type { 'none' | 'ascending' | 'descending' | null }
     */
    sorted: "none" | "ascending" | "descending" | null;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-table-header-cell': JhTableHeaderCell;
  }
}
