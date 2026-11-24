// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Tabs provide a way to navigate between multiple groups of related content within the same context.
 *
 * [Tab Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-tab-tab--docs)
 *
 * @cssprop --jh-tab-size - The tab height. Defaults to `--jh-dimension-800` when `size="small"` and `--jh-dimension-1000` when `size="medium"`.
 * @cssprop --jh-tab-color-background-enabled - The tab background-color when enabled. Defaults to `transparent`.
 * @cssprop --jh-tab-color-border-enabled - The tab border-color when enabled. Defaults to `transparent`.
 * @cssprop --jh-tab-label-color-text-enabled - The label text color when enabled. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-tab-icon-color-fill-enabled - The icon color when enabled. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-tab-color-focus - The focus outline color. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-tab-color-background-focus - The tab background-color when in focus. Defaults to `--jh-color-container-neutral-hover`.
 * @cssprop --jh-tab-color-border-focus - The tab border-color when in focus. Defaults to `transparent`.
 * @cssprop --jh-tab-label-color-text-focus - The label text color when in focus. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-tab-icon-color-fill-focus - The icon color when in focus. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-tab-color-background-hover - The tab background-color when hovered. Defaults to `--jh-color-container-neutral-hover`.
 * @cssprop --jh-tab-color-border-hover - The tab border-color when hovered. Defaults to `transparent`.
 * @cssprop --jh-tab-label-color-text-hover - The label text color when hovered. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-tab-icon-color-fill-hover - The icon color when hovered. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-tab-color-background-active - The tab background-color when active. Defaults to `--jh-color-container-neutral-active`.
 * @cssprop --jh-tab-color-border-active - The tab border-color when active. Defaults to `transparent`.
 * @cssprop --jh-tab-label-color-text-active - The label text color when active. Defaults to `--jh-color-content-primary-active`.
 * @cssprop --jh-tab-icon-color-fill-active - The icon color when active. Defaults to `--jh-color-content-primary-active`.
 * @cssprop --jh-tab-opacity-disabled - The tab opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-tab-color-background-disabled - The tab background-color when disabled. Defaults to `transparent`.
 * @cssprop --jh-tab-color-border-disabled - The tab border-color when disabled. Defaults to `transparent`.
 * @cssprop --jh-tab-label-color-text-disabled - The label text color when disabled. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-tab-icon-color-fill-disabled - The icon color when disabled. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-tab-color-border-selected - The selected indicator color. Defaults to `--jh-border-selected-color`.
 *
 * @slot jh-tab-left - Use to insert an icon on the left side of the tab.
 * @slot jh-tab-right - Use to insert an icon on the right side of the tab.
 *
 * @customElement jh-tab
 */
export class JhTab extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        accessibleLabel: {
            type: StringConstructor;
            attribute: string;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        label: {
            type: StringConstructor;
        };
        selected: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        size: {
            type: StringConstructor;
            reflect: boolean;
        };
        _hasLeftSlotContent: {
            type: BooleanConstructor;
            state: boolean;
        };
        _hasRightSlotContent: {
            type: BooleanConstructor;
            state: boolean;
        };
    };
    /**
     * Sets an `aria-label` on the tab. Required for icon-only tabs.
     * @attr accessible-label
     * @type {string | null}
     */
    accessibleLabel: string | null;
    /**
     * Disables the tab and prevents all user interactions.
     * @type {boolean}
     */
    disabled: boolean;
    /**
     * The tab text. When omitted, an icon-only tab is displayed.
     * @type {string | null}
     */
    label: string | null;
    /**
     * Whether the tab is selected.
     * @type {boolean}
     */
    selected: boolean;
    /**
     * Sets the size of the tab.
     * @type {'small' | 'medium'}
     */
    size: "small" | "medium";
    /** @internal @type {boolean} */
    _hasLeftSlotContent: boolean;
    /** @internal @type {boolean} */
    _hasRightSlotContent: boolean;
    /**
     * @protected
     */
    protected updated(changedProperties: any): void;
    render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-tab': JhTab;
  }
}
