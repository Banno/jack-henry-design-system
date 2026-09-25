/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html } from 'lit';
import { JhInput } from '../input/input.js';
import { ifDefined } from 'lit/directives/if-defined.js';

// +, -, ( and ) are the only decoration characters allowed in the value
const DECORATION_PATTERN = /[+\-()]/;
const CONTENT_CHAR_PATTERN = /[0-9+\-()]/;

/**
 * @event jh-change - Dispatched when the value of the input has changed and input loses focus. Event payload includes the value of the input and can be accessed via `e.detail.state.value`. Payload also includes the raw/unformatted value when `hide-commas` is not set and can be accessed via `e.detail.state.rawValue`. Payload also includes the `pattern` property and can be accessed via `e.detail.reference.pattern`.
 * @event jh-input - Dispatched when the value of the input has changed. Event payload includes the value of the input and can be accessed via `e.detail.state.value`. Payload also includes the raw/unformatted value when `hide-commas` is not set and can be accessed via `e.detail.state.rawValue`. Payload also includes the `pattern` property and can be accessed via `e.detail.reference.pattern`.
 * 
 * Input Currency
 * @customElement jh-input-currency
 */
export class JhInputCurrency extends JhInput {
  /** @type {bigint | null} */
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
    // Number() loses precision beyond ~15-16 digits, but rawValue's public contract is a JS number
    return this.#minorUnits === null ? null : Number(this.#minorUnits) / 100;
  }

  // convert value into cents to avoid floating-point rounding errors; +, -, ( and ) may appear anywhere and are treated as sign indicators rather than part of the magnitude
  #toMinorUnits(displayValue) {
    const stripped = displayValue ? displayValue.replaceAll(',', '') : '';
    const isNegative = stripped.includes('-') || (stripped.includes('(') && stripped.includes(')'));
    const numeric = stripped.replace(/[+\-()]/g, '');

    if (!/^\d+(\.\d*)?$/.test(numeric)) return null;

    const [wholePart, decimalPart = ''] = numeric.split('.');
    const minorPart = decimalPart.padEnd(2, '0').slice(0, 2);
    const minorUnits = BigInt(`${wholePart}${minorPart}`);

    return isNegative ? -minorUnits : minorUnits;
  }

  // formats cents (magnitude, unsigned) into a string with two decimal places, adding commas unless hideCommas is true; uses BigInt arithmetic so very long values don't lose precision
  #formatFromMinorUnits(minorUnits) {
    if (minorUnits === null) return '';

    const wholePart = (minorUnits / 100n).toString();
    const centsPart = (minorUnits % 100n).toString().padStart(2, '0');
    const groupedWholePart = this.hideCommas ? wholePart : wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return `${groupedWholePart}.${centsPart}`;
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
    const raw = input.value;
    const rawCursor = input.selectionStart ?? raw.length;
    // +, -, ( and ) stay at the same relative position among the digits (however many typed digits preceded them), regardless of where they land once commas/decimals are recalculated
    const { digits, decorations } = this.#parseRaw(raw);
    // deleting into a zero value clears the field entirely
    const isClearing = e.inputType.startsWith('delete') && Number(digits) === 0;
    const magnitude = digits === '' || isClearing ? null : BigInt(digits);
    const isNegative =
      decorations.some((decoration) => decoration.char === '-') ||
      (decorations.some((decoration) => decoration.char === '(') &&
        decorations.some((decoration) => decoration.char === ')'));

    this.#minorUnits = magnitude === null ? null : isNegative ? -magnitude : magnitude;
    this.value = this.#insertDecorations(this.#formatFromMinorUnits(magnitude), decorations);

    // Force native DOM input value sync in case Lit skips re-rendering when value hasn't changed
    input.value = this.value;

    this.dispatchCustomEvent('jh-input', {
      reference: this.#getReference(),
    });

    await this.updateComplete;

    // map the raw caret back onto the reformatted value by keeping the same number of trailing digits/decorations after it (padding added by formatting only ever happens at the front)
    const contentCharsAfterCursor = [...raw.slice(rawCursor)].filter((char) => CONTENT_CHAR_PATTERN.test(char)).length;
    const caretPosition = this.#findPositionFromEnd(this.value, contentCharsAfterCursor);

    input.setSelectionRange(caretPosition, caretPosition);
  }

  // splits raw into its digit string (for the magnitude) and the decorations, recording how many digits precede each so they can be reinserted at the same relative position after reformatting
  #parseRaw(raw) {
    let digits = '';
    const decorations = [];

    for (const char of raw) {
      if (/\d/.test(char)) {
        digits += char;
      } else if (DECORATION_PATTERN.test(char)) {
        decorations.push({ char, digitsBefore: digits.length });
      }
    }

    return { digits, decorations };
  }

  // reinserts decorations into the freshly formatted digit string right after the same count of digits they originally preceded
  #insertDecorations(formattedDigits, decorations) {
    let result = '';
    let digitsSeen = 0;
    let decorationIndex = 0;

    for (const char of formattedDigits) {
      while (decorationIndex < decorations.length && decorations[decorationIndex].digitsBefore === digitsSeen) {
        result += decorations[decorationIndex].char;
        decorationIndex++;
      }
      result += char;
      if (/\d/.test(char)) digitsSeen++;
    }

    while (decorationIndex < decorations.length) {
      result += decorations[decorationIndex].char;
      decorationIndex++;
    }

    return result;
  }

  // walks back from the end of str until contentCharsAfter digits/decorations have been counted
  #findPositionFromEnd(str, contentCharsAfter) {
    let count = 0;
    let index = str.length;

    while (index > 0 && count < contentCharsAfter) {
      index--;
      if (CONTENT_CHAR_PATTERN.test(str[index])) count++;
    }

    return index;
  }

  // shared payload for the minlength/maxlength/pattern reference included on jh-input and jh-change events
  #getReference() {
    return {
      'minlength': this.minlength,
      'maxlength': this.maxlength,
      'pattern': this.pattern,
    };
  }

  /** @protected */
  _handleChange(e) {
    this.dispatchCustomEvent('jh-change', {
      state: { 
        rawValue: this.#getRawValue(),
      },
      reference: this.#getReference(),
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

    // numeric characters and +, -, (, ) are permitted anywhere in the value; commas and decimal points are either auto-inserted by formatting or disabled via hide-commas/hide-decimal
    if (!CONTENT_CHAR_PATTERN.test(e.key)) {
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

    // remove existing commas
    const value = input.value.replace(/,/g, '');
    const parts = value.split('.');
    const originalWholePart = parts[0];
    const signLength = /^[+\-(]/.test(originalWholePart) ? 1 : 0;

    // strip leading zeros (eg "0000000" -> "0") so they aren't grouped as if significant
    parts[0] = originalWholePart.replace(/^([+\-(]?)0+(?=\d)/, '$1');
    const leadingZerosRemoved = originalWholePart.length - parts[0].length;

    let numberDigitsBeforeCursor = input.value
      .slice(0, input.selectionStart)
      .replace(/,/g, '').length;
    const zerosBeforeCursorRemoved = Math.min(
      leadingZerosRemoved,
      Math.max(0, numberDigitsBeforeCursor - signLength),
    );
    numberDigitsBeforeCursor -= zerosBeforeCursorRemoved;

    // add commas every 3 digits left of the decimal point
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const formattedValue = parts.join('.');

    this.value = formattedValue;

    // Force native DOM input value sync
    input.value = formattedValue;

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