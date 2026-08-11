// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The table is used to display tabular data. It is made up of several subcomponents and slots to produce an enhanced version of the native html table. It also provides hooks for sorting.
 *
 * [Table Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-table-table--docs)
 *
 * @cssprop --jh-table-color-text-striped-enabled - The striped row text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-table-color-background-striped-enabled - The striped row background color. Defaults to `--jh-color-container-neutral-enabled`.
 * @cssprop --jh-table-color-text-striped-hover - The striped row text color on hover. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-table-color-background-striped-hover - The striped row background color on hover. Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-table-space-padding-vertical-medium - The vertical padding for medium padding for table-data-cells and table-header-cells. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-space-padding-vertical-small - The vertical padding for small padding for table-data-cells and table-header-cells. Defaults to `--jh-dimension-200`.
 * @cssprop --jh-table-caption-color-text - The caption text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-table-color-focus - The outline color when the scrollable table receives keyboard focus. Defaults to `--jh-border-focus-color`.
 *
 * @slot default - Use to insert table body.
 * @slot jh-table-header - Use to insert table header row.
 * @slot jh-table-footer - Use to insert table footer row.
 * @slot jh-table-caption - Use to insert table caption.
 * @slot jh-table-pagination - Use to insert pagination.
 * @slot jh-table-toolbar - Use to insert toolbar.
 *
 * @customElement jh-table
 */
export class JhTable extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        verticalAlign: {
            type: StringConstructor;
            reflect: boolean;
            attribute: string;
        };
        striped: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        padding: {
            type: StringConstructor;
            reflect: boolean;
        };
        accessibleLabel: {
            type: StringConstructor;
            attribute: string;
        };
        stickyHeader: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        stickyFooter: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        scrollable: {
            type: BooleanConstructor;
        };
    };
    /**
     * Sets the vertical alignment for each table cell.
     * @attr vertical-align
     * @type { 'top' | 'middle' | 'bottom' }
     */
    verticalAlign: "top" | "middle" | "bottom";
    /**
     * Applies alternating background colors to rows.
     * @type {boolean}
     */
    striped: boolean;
    /**
     * Adjusts the padding between the rows.
     * @type { 'medium' | 'small' }
     */
    padding: "medium" | "small";
    /**
     * Sets an `aria-label` to assist screen reader users when no visible caption is present.
     * @attr accessible-label
     * @type {string | null}
     */
    accessibleLabel: string | null;
    /**
     * Allows the header row to remain visible while scrolling.
     * @attr sticky-header
     * @type {boolean}
     */
    stickyHeader: boolean;
    /**
     * Allows the footer row to remain visible while scrolling.
     * @attr sticky-footer
     * @type {boolean}
     */
    stickyFooter: boolean;
    /**
     * Makes the table horizontally scrollable on smaller screens.
     * @type {boolean}
     */
    scrollable: boolean;
    /** @protected */
    protected firstUpdated(): Promise<void>;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-table': JhTable;
  }
}
