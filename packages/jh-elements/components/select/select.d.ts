// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Select
 * @customElement jh-select
 *
 * @cssprop --jh-select-input-field-border-radius - The input field border radius. Defaults to `--jh-border-radius-100`.
 * @cssprop --jh-select-input-field-color-background - The input field background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-select-icon-color-fill - The select icons color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-select-menu-z-index - The menu z-index. Defaults to `--jh-z-index-positive-1000`.
 * @cssprop --jh-select-menu-border-radius - The menu border-radius. Defaults to `--jh-border-radius-200`.
 * @cssprop --jh-select-menu-shadow - The menu box-shadow. Defaults to `--jh-shadow-high`.
 * @cssprop --jh-select-menu-color-background - The menu container background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-select-menu-space-padding - The menu container padding. Defaults to `--jh-dimension-200 0`.
 * @cssprop --jh-select-menu-size-max-width - The menu maximum width. Defaults to `none`.
 * @cssprop --jh-select-menu-size-min-width - The menu minimum width. Defaults to `none`.
 * @cssprop --jh-select-menu-size-max-height - The menu maximum height. Defaults to `480px`.
 * @cssprop --jh-select-input-field-color-border-error - The input field border-color when invalid. Defaults to `--jh-border-error-color`.
 * @cssprop --jh-select-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-select-helper-color-text - The helper-text text color. Defaults to `jh-color-content-secondary-enabled`.
 * @cssprop --jh-select-required-color-text - The required indicator color. Defaults to `jh-color-content-negative-enabled`.
 * @cssprop --jh-select-optional-color-text - The optional indicator text color. Defaults to `jh-color-content-primary-enabled`.
 * @cssprop --jh-select-value-color-text - The value text color. Defaults to `jh-color-content-primary-enabled`.
 * @cssprop --jh-select-input-field-color-border-enabled - The input field border-color. Defaults to `--jh-border-control-color`.
 * @cssprop --jh-select-input-field-color-border-focus - The input field border-color when in focus. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-select-input-color-focus - The input field outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-select-input-field-color-border-hover - The input field border-color when hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-select-input-field-color-border-active - The input field border-color when active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-select-input-field-color-border-disabled - The input field border-color when disabled. Defaults to `--jh-border-control-color`.
 * @cssprop --jh-select-opacity-disabled - The select opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-select-error-color-text - The error message text color. Defaults to `jh-color-content-negative-enabled`.
 * @cssprop --jh-select-item-size-height - The list item height. Defaults to `auto`.
 * @cssprop --jh-select-item-space-padding-right - The list item right padding. Defaults to `--jh-dimension-600`.
 * @cssprop --jh-select-item-space-padding-left - The list item left padding. Defaults to `--jh-dimension-600`.
 * @cssprop --jh-select-item-color-text - The list item text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-select-item-color-background - The list item background color. Defaults to `transparent`.
 * @cssprop --jh-select-item-color-background-focus - The list item background color when focused. Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-select-item-color-focus - The list item outline color when focused. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-select-item-color-background-hover - The list item background color when hovered. Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-select-item-color-background-active - The list item background color when active. Defaults to `--jh-color-container-primary-active`.
 * @cssprop --jh-select-item-color-background-selected - The list item background color when selected. Defaults to `--jh-color-container-primary-selected`.
 * @cssprop --jh-select-item-color-border-selected - The list item border color when selected. Defaults to `--jh-border-selected-color`.
 * @cssprop --jh-select-item-space-padding-left-indent - The additional left padding for grouped list items. Defaults to `--jh-dimension-200`.
 *
 * @slot jh-select-trigger-left - Use to insert an element such as an icon on the left side of the select input field.
 * @slot jh-select-trigger-open - Use to replace the default chevron icon displayed when the select menu is open.
 * @slot jh-select-trigger-closed - Use to replace the default chevron icon displayed when the select menu is closed.
 *
 * @event jh-change - Dispatched when the selected value changes. Event payload includes the `value` and can be accessed via `e.detail.state.value`.
 */
export class JhSelect extends JhInput {
    static get styles(): import("lit").CSSResult[];
    static get properties(): {
        menuPosition: {
            type: StringConstructor;
            reflect: boolean;
            attribute: string;
        };
        options: {
            type: ArrayConstructor;
            attribute: boolean;
        };
        flipDisabled: {
            type: BooleanConstructor;
            attribute: string;
        };
    };
    /**
     * Sets the position of the dropdown menu relative to the input field. The menu automatically flips when there is insufficient space unless `flip-disabled` is set.
     * @attr menu-position
     * @type {'bottom' | 'top'}
     */
    menuPosition: "bottom" | "top";
    /**
     * Sets the list of options to display in the dropdown menu. Accepts an array of flat options or grouped options. See documentation for the expected data format.
     * @type {Array}
     */
    options: any[];
    /**
     * Prevents the dropdown menu from automatically flipping its position when there is insufficient viewport space.
     * @attr flip-disabled
     * @type {boolean}
     */
    flipDisabled: boolean;
    /**
     * @protected
     * @param {Array} options
     */
    protected renderData(options: any[]): import("lit").TemplateResult<1>[];
    #private;
}
import { JhInput } from '../input/input.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-select': JhSelect;
  }
}
