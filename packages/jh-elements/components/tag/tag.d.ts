// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * A tag contains a string of text on a colorful background and is used to categorize, describe or otherwise identify elements on the page.
 *
 * [Tag Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-tag--docs)
 *
 * @cssprop --jh-tag-color-focus - The tag outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-tag-border-radius - The tag border radius. Defaults to `--jh-border-radius-pill`.
 * @cssprop --jh-tag-color-background-enabled- The tag background color. Defaults to `--jh-color-container-neutral-enabled`.
 * @cssprop --jh-tag-color-background-focus- The tag background color when focused. Defaults to `--jh-color-container-neutral-hover`.
 * @cssprop --jh-tag-color-background-hover- The tag background color when hovered. Defaults to `--jh-color-container-neutral-hover`.
 * @cssprop --jh-tag-color-background-active- The tag background color when active. Defaults to `--jh-color-container-neutral-active`.
 * @cssprop --jh-tag-color-border-enabled - The tag border color. Defaults to `transparent`.
 * @cssprop --jh-tag-color-border-focus - The tag border color when focused. Defaults to `transparent`.
 * @cssprop --jh-tag-color-border-hover - The tag border color when hovered. Defaults to `transparent`.
 * @cssprop --jh-tag-color-border-active - The tag border color when active. Defaults to `transparent`.
 * @cssprop --jh-tag-icon-color-fill-enabled - The tag icon fill color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-tag-icon-color-fill-focus - The tag icon fill color when focused. Defaults to `--jh-color-content-secondary-hover`.
 * @cssprop --jh-tag-icon-color-fill-hover - The tag icon fill color when hovered. Defaults to `--jh-color-content-secondary-hover`.
 * @cssprop --jh-tag-icon-color-fill-active - The tag icon fill color when active. Defaults to `--jh-color-content-secondary-active`.
 * @cssprop --jh-tag-color-text-enabled - The tag font color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-tag-color-text-focus - The tag font color when focused. Defaults to `--jh-color-content-secondary-hover`.
 * @cssprop --jh-tag-color-text-hover - The tag font color when hovered. Defaults to `--jh-color-content-secondary-hover`.
 * @cssprop --jh-tag-color-text-active - The tag font color when active. Defaults to `--jh-color-content-secondary-active`.
 * @cssprop --jh-tag-dismiss-color-background-enabled - The dismiss button background color. Defaults to `--jh-color-container-neutral-enabled`.
 * @cssprop --jh-tag-dismiss-color-background-focus - The dismiss button background color when focused. Defaults to `--jh-color-container-neutral-hover`.
 * @cssprop --jh-tag-dismiss-color-background-hover - The dismiss button background color when hovered. Defaults to `--jh-color-container-neutral-hover`.
 * @cssprop --jh-tag-dismiss-color-background-active - The dismiss button background color when active. Defaults to `--jh-color-container-neutral-active`.
 * @cssprop --jh-tag-dismiss-icon-color-fill-enabled - The dismiss button icon fill color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-tag-dismiss-icon-color-fill-focus - The dismiss button icon fill color when focused. Defaults to `--jh-color-content-secondary-hover`.
 * @cssprop --jh-tag-dismiss-icon-color-fill-hover - The dismiss button icon fill color when hovered. Defaults to `--jh-color-content-secondary-hover`.
 * @cssprop --jh-tag-dismiss-icon-color-fill-active - The dismiss button icon fill color when active. Defaults to `--jh-color-content-secondary-active`.
 * @cssprop --jh-tag-dismiss-color-focus - The dismiss button outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 *
 * @slot jh-tag-icon - Use to insert an icon to the left of the tag.
 * @slot jh-tag-dismiss-icon - Use to insert a custom icon within the dismiss button.
 * @event jh-dismiss - Dispatched when the tag is dismissed.
 *
 * @customElement jh-tag
 */
export class JhTag extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        label: {
            type: StringConstructor;
        };
        dismissButtonAccessibleLabel: {
            type: StringConstructor;
            attribute: string;
        };
        dismissible: {
            type: BooleanConstructor;
        };
        tooltipLabel: {
            type: StringConstructor;
            attribute: string;
        };
        size: {
            type: StringConstructor;
            reflect: boolean;
        };
        href: {
            type: StringConstructor;
        };
        target: {
            type: StringConstructor;
        };
        removeOnDismiss: {
            type: BooleanConstructor;
            attribute: string;
        };
    };
    /**
     * Describes the intent of the tag.
     * @type {string | null}
     */
    label: string | null;
    /**
     * Adds a dismiss button to tag. See `remove-on-dismiss` attribute for tag removal.
     * @type {boolean}
     */
    dismissible: boolean;
    /**
     * Adds an aria-label to the dismiss button to assist screen readers.
     * @attr dismiss-button-accessible-label
     * @type {string | null}
     */
    dismissButtonAccessibleLabel: string | null;
    /**
     * Adds a tooltip with this string on the dismiss button.
     * @attr tooltip-label
     * @type {string | null}
     */
    tooltipLabel: string | null;
    /**
     * Sets the size of the tag.
     * @type { 'small' | 'medium' }
     */
    size: "small" | "medium";
    /**
     * Sets the link's destination.
     * @type {string | null}
     */
    href: string | null;
    /**
     * Specifies where to display the linked URL set by the href property.
     * @type {string | null}
     */
    target: string | null;
    /**
     * Removes the tag after the dismiss button is activated.
     * @attr remove-on-dismiss
     * @type {boolean}
     */
    removeOnDismiss: boolean;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-tag': JhTag;
  }
}
