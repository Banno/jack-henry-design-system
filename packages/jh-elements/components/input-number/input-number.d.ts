// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The input number component provides a single-line text field for capturing numeric values, with increment and decrement stepper buttons.
 *
 * [Input Number Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-input-number--docs)
 *
 * @cssprop --jh-input-number-stepper-border-radius - The button container border-radius. Defaults to `--jh-border-radius-100`.
 * @cssprop --jh-input-number-stepper-color-background-enabled - The stepper button background-color when enabled. Defaults to `transparent`.
 * @cssprop --jh-input-number-stepper-color-border-enabled - The stepper button border-color when enabled. Defaults to `transparent`.
 * @cssprop --jh-input-number-stepper-icon-color-fill-enabled - The stepper button icon color when enabled. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-input-number-stepper-color-background-hover - The stepper button background-color when hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-input-number-stepper-color-border-hover - The stepper button border-color when hovered. Defaults to `transparent`.
 * @cssprop --jh-input-number-stepper-icon-color-fill-hover - The stepper button icon color when hovered. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-input-number-stepper-color-background-active - The stepper button background-color when active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-input-number-stepper-color-border-active - The stepper button border-color when active. Defaults to `transparent`.
 * @cssprop --jh-input-number-stepper-icon-color-fill-active - The stepper button icon color when active. Defaults to `--jh-color-content-on-brand-active`.
 * @cssprop --jh-input-number-stepper-icon-color-fill-disabled - The stepper button icon color when disabled. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-input-number-stepper-color-border-disabled - The stepper button border-color when disabled. Defaults to `transparent`.
 * @cssprop --jh-input-number-stepper-color-background-disabled - The stepper button background-color when disabled. Defaults to `transparent`.
 * @cssprop --jh-input-number-stepper-opacity-disabled - The stepper button opacity when disabled. Defaults to `--jh-opacity-disabled`.
 *
 * @slot jh-input-number-stepper-increment - Use to insert an icon in the increment stepper button.
 * @slot jh-input-number-stepper-decrement - Use to insert an icon in the decrement stepper button.
 *
 * @customElement jh-input-number
 */
export class JhInputNumber extends JhInput {
    static get styles(): import("lit").CSSResult[];
    static get properties(): {
        max: {
            type: NumberConstructor;
        };
        min: {
            type: NumberConstructor;
        };
        step: {
            type: NumberConstructor;
        };
    };
    /**
     * Sets the maximum value for the input number.
     *  @type {number | null}
     */
    max: number | null;
    /**
     * Sets the minimum value for the input number.
     * @type {number | null}
     */
    min: number | null;
    /**
     * Sets the stepper buttons increment and decrement the value.
     *  @type {number}
     */
    step: number;
    /** @protected */
    protected willUpdate(changedProperties: any): void;
    /** @protected */
    protected _handleInput(e: any): void;
    /** @protected */
    protected _handleKeydown(e: any): void;
    #private;
}
import { JhInput } from '../input/input.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-input-number': JhInputNumber;
  }
}
