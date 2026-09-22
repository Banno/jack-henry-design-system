// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * @event jh-change - Dispatched when the value of the input has changed and input loses focus. Event payload includes the value of the input and can be accessed via `e.detail.state.value`. Payload also includes the raw/unformatted value when `hide-commas` is not set and can be accessed via `e.detail.state.rawValue`. Payload also includes the `pattern` property and can be accessed via `e.detail.reference.pattern`.
 * @event jh-input - Dispatched when the value of the input has changed. Event payload includes the value of the input and can be accessed via `e.detail.state.value`. Payload also includes the raw/unformatted value when `hide-commas` is not set and can be accessed via `e.detail.state.rawValue`. Payload also includes the `pattern` property and can be accessed via `e.detail.reference.pattern`.
 *
 * Input Currency
 * @customElement jh-input-currency
 */
export class JhInputCurrency extends JhInput {
    static get properties(): {
        max: {
            type: NumberConstructor;
        };
        min: {
            type: NumberConstructor;
        };
        hideCommas: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        hideDecimal: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        prefix: {
            type: StringConstructor;
        };
        inputmode: {
            type: StringConstructor;
        };
    };
    /**
     * Sets the maximum value for validation (package or custom). Does not natively enforce limits.
     * @type {number | null}
     */
    max: number | null;
    /**
     * Sets the minimum value for validation (package or custom). Does not natively enforce limits.
     * @type {number | null}
     */
    min: number | null;
    /**
     * Disables automatic comma insertion into the input value as the user types.
     * @attr hide-commas
     * @type {boolean}
     */
    hideCommas: boolean;
    /**
     * Disables formatting the value with two decimal places as the user types, cash-register style (each digit entered shifts in from the right).
     * @attr hide-decimal
     * @type {boolean}
     */
    hideDecimal: boolean;
    _handleInput(e: any): void;
    _handleChange(e: any): void;
    _handleKeydown(e: any): void;
    #private;
}
import { JhInput } from '../input/input.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-input-currency': JhInputCurrency;
  }
}
