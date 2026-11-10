// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Dialogs are modal windows that appear on top of the main content to focus the user's attention on a task or important information.
 *
 * [Dialog Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-dialog--docs)
 *
 * @cssprop --jh-dialog-color-background - The dialog background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-dialog-border-radius - The dialog border-radius. Defaults to `--jh-border-radius-300`. When the viewport is 440px or smaller, defaults to `0`.
 * @cssprop --jh-dialog-shadow - The dialog box-shadow. Defaults to `--jh-shadow-overlay`. When the viewport is 440px or smaller, defaults to `none`.
 * @cssprop --jh-dialog-dimension-padding-horizontal - The horizontal padding for the dialog content. Defaults to `--jh-dimension-600`.
 * @cssprop --jh-dialog-overlay-color-background - The backdrop color displayed behind the dialog. Defaults to `--jh-color-overlay`.
 * @cssprop --jh-dialog-overlay-dimension-padding-vertical - The vertical padding for the dialog overlay. Defaults to `--jh-dimension-1000`.
 * @cssprop --jh-dialog-overlay-dimension-padding-horizontal - The horizontal padding for the dialog overlay. Defaults to `--jh-dimension-1000`.
 * @cssprop --jh-dialog-dimension-max-width - The dialog max-width. Defaults to `480px` when `size="small"`, `640px` when `size="medium"` and `800px` when `size="large"`. Not applied when the viewport is 440px or smaller, where the dialog fills the full viewport width and height.
 * @cssprop --jh-dialog-media-aspect-ratio - The media slot aspect-ratio. Defaults to `auto`.
 * @cssprop --jh-dialog-header-color-text - The header slot text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-dialog-default-color-text - The default slot text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-dialog-footer-color-text - The footer slot text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @slot default - Use to insert dialog body content.
 * @slot jh-dialog-media - Use to insert media content at the top of the dialog. User may need to add additional styling to elements such as border, object-fit, etc.
 * @slot jh-dialog-header - Use to insert custom dialog header layout. Used as the accessible name of the dialog.
 * @slot jh-dialog-footer - Use to insert custom dialog footer layout, such as action buttons.
 * @slot jh-dialog-dismiss-icon - Use to change the default icon within the dismiss button.
 *
 * @event jh-open - Dispatched when the dialog opens.
 * @event jh-close - Dispatched when the dialog closes. Event payload includes the close method of the dialog and can be accessed via `e.detail.reference.closeMethod`.
 * Possible values are `backdrop-click`, `dismiss-button`, `escape` and `programmatic`.
 *
 * @customElement jh-dialog
 */
export class JhDialog extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        dismissButtonAccessibleLabel: {
            type: StringConstructor;
            attribute: string;
        };
        footerInset: {
            type: NumberConstructor;
            attribute: string;
        };
        headerInset: {
            type: NumberConstructor;
            attribute: string;
        };
        open: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showDismissButton: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        showFooterDivider: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        showHeaderDivider: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        size: {
            type: StringConstructor;
            reflect: boolean;
        };
        _isOverflowing: {
            state: boolean;
        };
    };
    /**
     * Adds an aria-label to the dismiss button to assist screen readers.
     * @attr dismiss-button-accessible-label
     * @type {string | null}
     */
    dismissButtonAccessibleLabel: string | null;
    /**
     * Sets the alignment of the left edge of the divider above the footer.
     * @attr footer-inset
     * @type { 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 }
     */
    footerInset: 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96;
    /**
     * Sets the alignment of the left edge of the divider below the header.
     * @attr header-inset
     * @type { 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 }
     */
    headerInset: 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96;
    /**
     * Determines whether the dialog is open or closed.
     * @type {boolean}
     */
    open: boolean;
    /**
     * Displays a dismiss button. When true, the dialog can also be closed by clicking the backdrop outside the dialog.
     * @attr show-dismiss-button
     * @type {boolean}
     */
    showDismissButton: boolean;
    /**
     * Adds a divider above the footer to create a clearer definition between the body and footer.
     * @attr show-footer-divider
     * @type {boolean}
     */
    showFooterDivider: boolean;
    /**
     * Adds a divider below the header to create a clearer definition between the header and body.
     * @attr show-header-divider
     * @type {boolean}
     */
    showHeaderDivider: boolean;
    /**
     * Sets the max-width of the dialog container.
     * @type { 'small' | 'medium' | 'large' }
     */
    size: "small" | "medium" | "large";
    /**
     * @internal
     * @type {boolean}
     */
    _isOverflowing: boolean;
    /**
     * Opens the dialog as a modal.
     */
    show(): void;
    /**
     * Closes the dialog.
     */
    close(): void;
    /** @protected */
    protected firstUpdated(): void;
    /** @protected */
    protected updated(changedProperties: any): void;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-dialog': JhDialog;
  }
}
