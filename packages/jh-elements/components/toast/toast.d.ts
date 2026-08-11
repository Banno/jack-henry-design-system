// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The toast component displays a message that informs users on the outcome of an action. They are temporary by default, but can be modified to remain when needed.
 *
 * [Toast Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-toast--docs)
 *
 * @cssprop --jh-toast-color-background-positive - The toast background color for positive connotations. Defaults to `--jh-color-container-positive-enabled`.
 * @cssprop --jh-toast-color-background-neutral - The toast background color for neutral connotations. Defaults to `--jh-color-container-neutral-enabled`.
 * @cssprop --jh-toast-color-background-negative - The toast background color for negative connotations. Defaults to `--jh-color-container-negative-enabled`.
 * @cssprop --jh-toast-shadow - The toast box-shadow. Defaults to `--jh-shadow-mid`.
 * @cssprop --jh-toast-z-index - The toast z-index. Defaults to `--jh-z-index-positive-1000`.
 *
 * @slot default - Use to insert contextual information.
 * @slot jh-toast-icon - Use to insert a button or icon to the left of the default slot.
 * @slot jh-toast-dismiss-icon - Use to insert icon within the dismiss button.
 * @slot jh-toast-action - Use to insert action button(s). Placed to the right of the default slot. Set `stacked` property to place slot below default slot.
 * @event jh-dismiss - Dispatched when the toast is dismissed.
 *
 * @customElement jh-toast
 */
export class JhToast extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        dismissButtonAccessibleLabel: {
            type: StringConstructor;
            attribute: string;
        };
        hideDismissButton: {
            type: BooleanConstructor;
            attribute: string;
        };
        stacked: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        timeout: {
            type: NumberConstructor;
        };
    };
    /**
     * Sets a timer, in milliseconds, to auto-dismiss the toast. To disable timeout, set to 0.
     * @type {number}
     */
    timeout: number;
    /**
     * Adds an aria-label to the dismiss button to assist screen readers.
     * @attr dismiss-button-accessible-label
     * @type {string | null}
     */
    dismissButtonAccessibleLabel: string | null;
    /**
     * Removes dismiss button from toast.
     * @attr hide-dismiss-button
     * @type {boolean}
     */
    hideDismissButton: boolean;
    /**
     * Places action button(s) on new line, below default slot.
     * @type {boolean}
     */
    stacked: boolean;
    /** @protected */
    protected firstUpdated(): void;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-toast': JhToast;
  }
}
