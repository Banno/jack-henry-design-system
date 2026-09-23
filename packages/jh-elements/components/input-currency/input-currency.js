/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhInput } from '../input/input.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * @event jh-change - Dispatched when the value of the input has changed and input loses focus. Event payload includes the value of the input and can be accessed via `e.detail.state.value`. Payload also includes the raw/unformatted value when `hide-commas` is not set and can be accessed via `e.detail.state.rawValue`. Payload also includes the `pattern` property and can be accessed via `e.detail.reference.pattern`.
 * @event jh-input - Dispatched when the value of the input has changed. Event payload includes the value of the input and can be accessed via `e.detail.state.value`. Payload also includes the raw/unformatted value when `hide-commas` is not set and can be accessed via `e.detail.state.rawValue`. Payload also includes the `pattern` property and can be accessed via `e.detail.reference.pattern`.
 * 
 * Input Currency
 * @customElement jh-input-currency
 */
export class JhInputCurrency extends JhInput {
  /** @type {number | null} */
  #minorUnits = null;

  static get properties() {
    return {
      max: { type: Number },
      min: { type: Number },
      hideCommas: { 
        type: Boolean, 
        attribute: 'hide-commas',
        reflect: true 
      },
      hideDecimal: { 
        type: Boolean, 
        attribute: 'hide-decimal',
        reflect: true 
      },
      prefix: { type: String },
      inputmode: { type: String },
    };
  }

  constructor() {
    super();
    /** 
     * Sets the maximum value for validation (package or custom). Does not natively enforce limits.
     * @type {number | null} 
     */
    this.max = null;
    /** 
     * Sets the minimum value for validation (package or custom). Does not natively enforce limits.
     * @type {number | null} 
     */
    this.min = null;
    /** 
     * Disables automatic comma insertion into the input value as the user types.
     * @attr hide-commas
     * @type {boolean} 
     */
    this.hideCommas = false;
    /** 
     * Disables formatting the value with two decimal places as the user types, cash-register style (each digit entered shifts in from the right).
     * @attr hide-decimal
     * @type {boolean} 
     */
    this.hideDecimal = false;
    /** 
     * Text to display before the input value, such as a currency symbol. Sits to the right of the `jh-input-left` slot.
     * @type {string | null} 
     */
    this.prefix = '$';
    /** 
     * Indicates expected input value type and allows for browsers to display appropriate virtual keyboard.
     *
     * [Visit MDN for information on supported inputmode values](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
     * @type {string | null} 
     */
    this.inputmode = 'decimal';

    this.addEventListener('jh-input', this.#addRawValueToInputEvent);
  }

  #addRawValueToInputEvent = (e) => {
    e.detail.state.rawValue = this.#getRawValue();
  };

  // convert minor units (cents) to a decimal number
  #getRawValue() {
    return this.#minorUnits === null ? null : this.#minorUnits / 100;
  }

  // convert value into cents to avoid floating-point rounding errors
  #toMinorUnits(displayValue) {
    const stripped = displayValue ? displayValue.replaceAll(',', '') : '';

    if (!/^[+-]?\d+(\.\d*)?$/.test(stripped)) return null;

    const [wholePart, decimalPart = ''] = stripped.split('.');
    const minorPart = decimalPart.padEnd(2, '0').slice(0, 2);
    const minorUnits = Number(`${wholePart}${minorPart}`);

    return Number.isNaN(minorUnits) ? null : minorUnits;
  }

  // formats cents (magnitude, unsigned) into a string with two decimal places, adding commas unless hideCommas is true
  #formatFromMinorUnits(minorUnits) {
    if (minorUnits === null) return '';

    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: !this.hideCommas,
    });

    return formatter.format(minorUnits / 100);
  }

  /** @protected */
  _handleInput(e) {
    // pasted values are used as-is; cash-register decimal shifting only applies to typed input
    if (!this.hideDecimal && e.inputType !== 'insertFromPaste') {
      this.#handleCashRegisterInput(e);
      return;
    }

    // read from e.target.value so this stays in sync before super dispatches jh-input
    this.#minorUnits = this.#toMinorUnits(e.target.value);

    super._handleInput(e);

    if (!this.hideCommas) {
      this.#formatCommas(e);
    }
  }

  // treat every digit in the input as part of the cents value, shifting existing digits left like a cash register
  async #handleCashRegisterInput(e) {
    const input = e.target;
    const sign = /^[+-]/.test(input.value) ? input.value[0] : '';
    const digits = input.value.replace(/\D/g, '');
    const magnitude = digits === '' ? null : Number(digits);

    this.#minorUnits = magnitude === null ? null : sign === '-' ? -magnitude : magnitude;
    this.value = magnitude === null ? sign : sign + this.#formatFromMinorUnits(magnitude);

    this.dispatchCustomEvent('jh-input', {
      reference: {
        'minlength': this.minlength,
        'maxlength': this.maxlength,
        'pattern': this.pattern,
      },
    });

    // set caret position at the end of value so additional digits shift in from the right
    await this.updateComplete;
    input.setSelectionRange(this.value.length, this.value.length);
  }

  /** @protected */
  _handleChange(e) {
    this.dispatchCustomEvent('jh-change', {
      state: { 
        rawValue: this.#getRawValue(),
      },
      reference: {
        'minlength': this.minlength,
        'maxlength': this.maxlength,
        'pattern': this.pattern,
      },
    });
  }

  /** @protected */
  _handleKeydown(e) {
    if (this.inputMask) {
      // call super to handle input mask
      super._handleKeydown(e);
    }

    // don't block keyboard shortcuts ie ctrl/cmd + c, x, etc.
    if (e.ctrlKey || e.metaKey) return;

    // allow backspace, tab, arrow keys, etc.
    if (e.key.length > 1) return;

    // +/- are only permitted as the first character, replacing any existing sign
    if (/[+-]/.test(e.key)) {
      const { selectionStart, selectionEnd, value } = e.target;
      const hasLeadingSign = /^[+-]/.test(value);
      const replacingLeadingSign =
        hasLeadingSign && selectionStart === 0 && selectionEnd >= 1;
      const insertingAtStartWithNoSign = !hasLeadingSign && selectionStart === 0;

      if (!replacingLeadingSign && !insertingAtStartWithNoSign) {
        e.preventDefault();
      }
      return;
    }

    // only numeric characters are permitted; commas and decimal points are either auto-inserted by formatting or disabled via hide-commas/hide-decimal
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  }

  // finds the index in formattedValue that lands after the given count of non-comma characters
  #findCursorPosition(formattedValue, numberDigitsBeforeCursor) {
    let digitCount = 0;

    for (let i = 0; i < formattedValue.length; i++) {
      if (digitCount === numberDigitsBeforeCursor) return i;
      if (formattedValue[i] !== ',') digitCount++;
    }

    return formattedValue.length;
  }

  // add commas every 3 digits left of the decimal point
  async #formatCommas(e) {
    const input = e.target;
    const numberDigitsBeforeCursor = input.value
      .slice(0, input.selectionStart)
      .replace(/,/g, '').length;

    // remove existing commas
    const value = input.value.replace(/,/g, '');
    const parts = value.split('.');

    // add commas every 3 digits left of the decimal point
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const formattedValue = parts.join('.');

    this.value = formattedValue;

    const cursorPosition = this.#findCursorPosition(
      formattedValue,
      numberDigitsBeforeCursor,
    );

    // wait for Lit's DOM update to prevent value update from overwriting the cursor position
    await this.updateComplete;

    input.setSelectionRange(cursorPosition, cursorPosition);
  }

  renderInput() {
    let describedby;

    if (this.helperText || (this.errorText && this.invalid)) {
      describedby = this._getDescribedby();
    }

    const leftSlot = this.readonly ? null : this.renderLeftSlot();
    const rightSlot = this.readonly ? null : this.renderRightSlot();
    const clearButton = this.readonly ? null : this.renderClearButton();
    const prefix = this.renderPrefix();
    const suffix = this.renderSuffix();

    return html`
      <div class="input-container">
        <div class="input-wrapper">
          ${leftSlot}
          ${prefix}
          <input
            id="jh-input-${this.uniqueId}"
            aria-describedby=${describedby}
            aria-invalid=${ifDefined(this.invalid ? 'true' : null)}
            aria-label=${ifDefined(
              this.accessibleLabel === '' ? null : this.accessibleLabel,
            )}
            autocomplete=${ifDefined(
              this.autocomplete === '' ? null : this.autocomplete,
            )}
            ?disabled=${this.disabled}
            enterkeyhint=${ifDefined(
              this.enterkeyhint === '' ? null : this.enterkeyhint,
            )}
            inputmode=${ifDefined(
              this.inputmode === '' ? null : this.inputmode,
            )}
            maxlength=${ifDefined(
              this.maxlength === '' ? null : this.maxlength,
            )}
            minlength=${ifDefined(
              this.minlength === '' ? null : this.minlength,
            )}
            aria-valuemax=${ifDefined(this.max === null ? null : this.max)}
            aria-valuemin=${ifDefined(this.min === null ? null : this.min)}
            name=${ifDefined(this.name === '' ? null : this.name)}
            pattern=${ifDefined(this.pattern === '' ? null : this.pattern)}
            ?readonly=${this.readonly}
            ?required=${this.required}
            type="text"
            .value=${this.value}
            @keydown=${this._handleKeydown}
            @change=${this._handleChange}
            @input=${this._handleInput}
            @select=${this._handleSelect}
          />
          ${suffix}
          ${clearButton}
          ${rightSlot}
        </div>
      </div>
    `;
  }
}
JhInputCurrency.register('jh-input-currency', JhInputCurrency);