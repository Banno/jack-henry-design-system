// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * A list item represents one item in a list of connected objects. List items are used as building blocks in complex components such as lists, menus, and dropdowns.
 *
 * [List Item Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-list-item--docs)
 *
 * @cssprop --jh-list-item-color-background-enabled - The list-item container's background-color.
 * Defaults to `transparent`.
 * @cssprop --jh-list-item-color-text-primary-enabled - The list-item text color for the default, left, right slots and primary text.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-color-text-primary-focus - The list-item text color for the default, left, right slots and primary text when interactive and focused.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-color-text-primary-hover - The list-item text color for the default, left, right slots and primary text when interactive and hovered.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-color-text-primary-active - The list-item text color for the default, left, right slots and primary text when interactive and active.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-color-text-primary-selected - The list-item text color for the default, left, right slots and primary text when interactive and selected.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-color-text-primary-disabled - The list-item text color for the default, left, right slots and primary text when interactive and disabled.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-color-text-secondary-enabled - The secondary text color.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-color-text-secondary-focus - The secondary text color when interactive and focused.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-color-text-secondary-hover - The secondary text color when interactive and hovered.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-color-text-secondary-active - The secondary text color when interactive and active.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-color-text-secondary-selected - The secondary text color when interactive and selected.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-color-text-secondary-disabled - The secondary text color when interactive and disabled.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-space-padding-right - The right padding on the list-item container. Defaults to `--jh-dimension-600`.
 * @cssprop --jh-list-item-space-padding-left - The left padding on the list-item container. Defaults to `--jh-dimension-600`.
 * @cssprop --jh-list-item-space-padding-top - The top padding on the list-item container. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-list-item-space-padding-bottom - The bottom padding on the list-item container. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-list-item-size-height - The list-item's height. Defaults to `auto`.
 * @cssprop --jh-list-item-color-background-focus - The list-item background-color when interactive and focused.
 * Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-list-item-color-focus - The list-item outline when it is interactive and receives keyboard focus.
 * Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-list-item-color-background-hover - The list-item background-color when interactive and hovered.
 * Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-list-item-color-background-active - The list-item background-color when interactive and active.
 * Defaults to `--jh-color-container-primary-active`.
 * @cssprop --jh-list-item-color-background-disabled - The list-item background-color when interactive and disabled.
 * Defaults to `transparent`.
 * @cssprop --jh-list-item-opacity-disabled - The list-item opacity when interactive and disabled.
 * Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-list-item-color-background-selected - The list-item background-color when interactive and selected. Defaults to `--jh-color-container-primary-selected`.
 * @cssprop --jh-list-item-color-border-selected - The list-item border-left-color when interactive and selected.
 * Defaults to `--jh-border-selected-color`.
 * @cssprop --jh-list-item-metadata-color-text-primary-enabled - The primary metadata text color.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-primary-focus - The primary metadata text color when interactive and focused.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-primary-hover - The primary metadata text color when interactive and hovered.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-primary-active - The primary metadata text color when interactive and active.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-primary-selected - The primary metadata text color when interactive and selected.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-primary-disabled - The primary metadata text color when interactive and disabled.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-secondary-enabled - The secondary metadata text color.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-secondary-focus - The secondary metadata text color when interactive and focused.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-secondary-hover - The secondary metadata text color when interactive and hovered.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-secondary-active - The secondary metadata text color when interactive and active.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-secondary-selected - The secondary metadata text color when interactive and selected.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-secondary-disabled - The secondary metadata text color when interactive and disabled.
 * Defaults to `--jh-color-content-secondary-enabled`.
 *
 * @slot default - Use to insert custom content into the list-item.
 * @slot jh-list-item-left - Use to insert custom content on the left the list-item.
 * @slot jh-list-item-right - Use to insert custom content on the right the list-item.
 * @customElement jh-list-item
 */
export class JhListItem extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        dividerInset: {
            type: NumberConstructor;
            attribute: string;
        };
        primaryText: {
            type: StringConstructor;
            attribute: string;
        };
        secondaryText: {
            type: StringConstructor;
            attribute: string;
        };
        primaryMetadata: {
            type: StringConstructor;
            attribute: string;
        };
        secondaryMetadata: {
            type: StringConstructor;
            attribute: string;
        };
        selected: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showDivider: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        _showFallback: {
            type: BooleanConstructor;
            state: boolean;
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
     * Disables the list-item and prevents all user interactions. May cause list-item to be ignored by assistive technologies(AT).
     * @type {boolean}
     */
    disabled: boolean;
    /**
     * The inset of the optional divider. Omit to use the divider-inset token instead.
     * @attr divider-inset
     * @type { 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 | null }
     */
    dividerInset: 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 | null;
    /**
     * The text to show as primary text.
     * @attr primary-text
     * @type {string | null}
     */
    primaryText: string | null;
    /**
     * The text to show as secondary text.
     * @attr secondary-text
     * @type {string | null}
     */
    secondaryText: string | null;
    /**
     * The text to show as primary metadata.
     * @attr primary-metadata
     * @type {string | null}
     */
    primaryMetadata: string | null;
    /**
     * The text to show as secondary metadata.
     * @attr secondary-metadata
     * @type {string | null}
     */
    secondaryMetadata: string | null;
    /**
     * Determines whether an interactive list-item is selected.
     * @type {boolean}
     */
    selected: boolean;
    /**
     * Determines whether the divider is displayed below the list-item.
     * @attr show-divider
     * @type {boolean}
     */
    showDivider: boolean;
    /** @internal @type {boolean} */
    _showFallback: boolean;
    /** @internal @type {boolean} */
    _hasLeftSlotContent: boolean;
    /** @internal @type {boolean} */
    _hasRightSlotContent: boolean;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-list-item': JhListItem;
  }
}
