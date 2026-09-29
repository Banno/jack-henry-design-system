// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * A progress indicator provides feedback to a user regarding loading and waiting states.
 *
 * [Progress Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-progress--docs)
 *
 * @cssprop --jh-progress-label-color - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-progress-value-color - The value text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-progress-track-color - The track color. Defaults to `--jh-color-control-enabled`.
 * @cssprop --jh-progress-track-border-radius - The track border-radius. Defaults to `--jh-border-radius-50`.
 * @cssprop --jh-progress-indicator-color - The indicator color. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-progress-track-size-linear - The height of the linear progress bar track. Defaults to the size-based height.
 * @cssprop --jh-progress-track-size-circular - The width and height of the circular progress indicator. Defaults to the size-based dimensions.
 *
 * @customElement jh-progress
 */
export class JhProgress extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        accessibleLabel: {
            type: StringConstructor;
            attribute: string;
        };
        accessibleValueText: {
            type: StringConstructor;
            attribute: string;
        };
        hideValue: {
            type: BooleanConstructor;
            attribute: string;
        };
        indeterminate: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        label: {
            type: StringConstructor;
            reflect: boolean;
        };
        max: {
            type: NumberConstructor;
        };
        min: {
            type: NumberConstructor;
        };
        size: {
            type: StringConstructor;
            reflect: boolean;
        };
        type: {
            type: StringConstructor;
            reflect: boolean;
        };
        value: {
            type: NumberConstructor;
        };
    };
    /**
     * Sets the indeterminate state on progress. To be used when progress cannot be calculated.
     * @type {boolean}
     */
    indeterminate: boolean;
    /** @param {string | null} newValue */
    set label(newValue: string | null);
    /**
     * Provides information about the item which triggered the progress component.
     * @type {string | null}
     */
    get label(): string | null;
    /**
     * Sets the size of the progress component.
     * @type { 'x-small'| 'small' | 'medium' | 'large'|'x-large'|'xx-large' }
     */
    size: "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large";
    /**
     * Determines the style of progress to display.
     * @type { 'linear' | 'circular' }
     */
    type: "linear" | "circular";
    /**
     * Hides the `value` text.
     * @attr hide-value
     * @type {boolean}
     */
    hideValue: boolean;
    /** @param {string | null} newValue */
    set accessibleLabel(newValue: string | null);
    /**
     * Sets an `aria-label` to assist screen reader users when no visible label is present.
     * @attr accessible-label
     * @type {string | null}
     */
    get accessibleLabel(): string | null;
    /** @param {number | null} newValue */
    set max(newValue: number | null);
    /**
     * Defines the maximum allowed value and sets `aria-valuemax` attribute.
     * @type {number | null}
     */
    get max(): number | null;
    /** @param {number | null} newValue */
    set min(newValue: number | null);
    /**
     * Defines the minimum allowed value and sets `aria-valuemin` attribute.
     * @type {number | null}
     */
    get min(): number | null;
    /** @param {number | null} newValue */
    set value(newValue: number | null);
    /**
     * Specifies how much of the task has been completed. This value is used to calculate the percentage complete based on the min and max values.
     * @type {number | null}
     */
    get value(): number | null;
    /** @param {string | null} newValue */
    set accessibleValueText(newValue: string | null);
    /**
     * Sets `aria-valuetext` on progress indicator to provide text alternative of `aria-valuenow`. To be used when progress cannot be represented as a number.
     * @attr accessible-valuetext
     * @type {string | null}
     */
    get accessibleValueText(): string | null;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-progress': JhProgress;
  }
}
