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
        /** Sets the maximum value for validation (package or custom). Does not natively enforce limits. */
        max: {
            type: NumberConstructor;
        };
        /** Sets the minimum value for validation (package or custom). Does not natively enforce limits. */
        min: {
            type: NumberConstructor;
        };
        /** Disables automatic comma insertion into the input value as the user types. */
        hideCommas: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        /** Disables formatting the value with two decimal places as the user types, cash-register style (each digit entered shifts in from the right). */
        hideDecimal: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        /** Text to display before the input value, such as a currency symbol. Sits to the right of the `jh-input-left` slot. */
        prefix: {
            type: StringConstructor;
        };
        /** Indicates expected input value type and allows for browsers to display appropriate virtual keyboard.
        *
        * [Visit MDN for information on supported inputmode values](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
        */
        inputmode: {
            type: StringConstructor;
        };
    };
    /** @type {number | null} */
    max: number | null;
    /** @type {number | null} */
    min: number | null;
    /** @type {boolean} */
    hideCommas: boolean;
    /** @type {boolean} */
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
