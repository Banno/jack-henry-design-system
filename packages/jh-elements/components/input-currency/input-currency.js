/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhInput } from '../input/input.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * @event jh-change - Dispatched when the value of the input has changed and input loses focus. Event payload includes the value of the input and can be accessed via `e.detail.state.value`. Payload also includes the raw/unformatted value when `show-commas` is applied and can be accessed via `e.detail.state.rawValue`. Payload also includes the `pattern` property and can be accessed via `e.detail.reference.pattern`.
 * @event jh-input - Dispatched when the value of the input has changed. Event payload includes the value of the input and can be accessed via `e.detail.state.value`. Payload also includes the raw/unformatted value when `show-commas` is applied and can be accessed via `e.detail.state.rawValue`. Payload also includes the `pattern` property and can be accessed via `e.detail.reference.pattern`.
 * 
 * Input Currency
 * @customElement jh-input-currency
 */
export class JhInputCurrency extends JhInput {
  static get properties() {
    return {
      /** Sets the maximum value for validation (package or custom). Does not natively enforce limits. */
      max: { type: Number },
      /** Sets the minimum value for validation (package or custom). Does not natively enforce limits. */
      min: { type: Number },
      /** Adds commas to the input value on input. No commas are permitted when set to false. */
      showCommas: { type: Boolean, attribute: 'show-commas', reflect: true },
      /** Add decimals to the input value on blur. No decimals are permitted when set to false. */
      showDecimal: { type: Boolean, attribute: 'show-decimal', reflect: true },
    };
  }

  constructor() {
    super();
    /** @type {number | null} */
    this.max = null;
    /** @type {number | null} */
    this.min = null;
    /** @type {boolean} */
    this.showCommas = true;
    /** @type {boolean} */
    this.showDecimal = true;
    this.addEventListener('jh-input', this.#addRawValueToInputEvent);
  }

  #addRawValueToInputEvent = (e) => {
    e.detail.state.rawValue = this.#removeCommasFromValue();
  };

  #removeCommasFromValue() {
    return this.value ? this.value.replaceAll(',', '') : null;
  }

  _handleInput(e) {
    super._handleInput(e);

    if (this.showCommas) {
      this.#formatCommas(e);
    }
  }

  _handleChange(e) {
    this.dispatchCustomEvent('jh-change', {
      state: { 
        rawValue: this.#removeCommasFromValue(),
      },
      reference: {
        'minlength': this.minlength,
        'maxlength': this.maxlength,
        'pattern': this.pattern,
      },
    });
  }

  _handleKeydown(e) {
    if (this.inputMask) {
      // call super to handle input mask
      super._handleKeydown(e);
    }

    // prevent comma insertion when formatCommas is false
    if (!this.showCommas && e.key === ',') {
      e.preventDefault();
    }
  }

  // enforce decimals on blur when showDecimal is true, does not add commas
  _handleBlur(e) {
    if (!this.showDecimal || !this.value) return;

    // remove existing commas to parse as a valid number
    const numericValue = Number(this.value.replaceAll(',', ''));
    if (Number.isNaN(numericValue)) return;

    // round to 2 decimal places and split integer/decimal
    const [integer, decimal] = numericValue.toFixed(2).split('.');

    // re-apply thousands separators to the integer when showCommas is true
    const formattedInteger = this.showCommas
      ? integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : integer;

    this.value = `${formattedInteger}.${decimal}`;
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

    // set cursor position after formatting
    let cursorPosition = 0;
    let digitCount = 0;
    while (
      digitCount < numberDigitsBeforeCursor &&
      cursorPosition < formattedValue.length
    ) {
      if (formattedValue[cursorPosition] !== ',') {
        digitCount++;
      }
      cursorPosition++;
    }
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
            @keydown=${
              this.inputMask || !this.showCommas ? this._handleKeydown : null
            }
            @change=${this._handleChange}
            @input=${this._handleInput}
            @select=${this._handleSelect}
            @blur=${this._handleBlur}
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