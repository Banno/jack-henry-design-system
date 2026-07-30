/**
 * SPDX-FileCopyrightText: 2025 Jack Henry
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { JhInput } from '../input/input.js';
import '../button/button.js';
import '@jack-henry/jh-icons/icons-wc/icon-minus.js';
import '@jack-henry/jh-icons/icons-wc/icon-plus.js';

/**
 * Input Number
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
  /** @type {?string} */
  #stepperAnnouncement;
  /** @type {boolean} */
  #incrementDisabled = false;
  /** @type {boolean} */
  #decrementDisabled = false;

  static get styles() {
    return [
      super.styles,
      css`
        /* Chrome and Safari */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        } 
        /* Firefox */
        input[type='number'] {
        -moz-appearance: textfield;
        }
        :host([size="small"]) .input-wrapper {
          padding-right: calc(
            var(--jh-input-size, var(--jh-dimension-800)) / 2 - var(--jh-dimension-300)
          );
        }
        :host([size="medium"]) .input-wrapper {
          padding-right: calc(
            var(--jh-input-size, var(--jh-dimension-1000)) / 2 - var(--jh-dimension-300)
          );
        }
        :host([size="large"]) .input-wrapper {
          padding-right: calc(
            var(--jh-input-size, var(--jh-dimension-1200)) / 2 - var(--jh-dimension-300)
          );
        }
        jh-button {
          --jh-button-border-radius: var(--jh-input-number-stepper-border-radius);
          --jh-button-color-background-tertiary-enabled: var(--jh-input-number-stepper-color-background-enabled);
          --jh-button-color-border-tertiary-enabled: var(--jh-input-number-stepper-color-border-enabled);
          --jh-button-icon-color-fill-tertiary-enabled: var(--jh-input-number-stepper-icon-color-fill-enabled);
          --jh-button-color-background-tertiary-hover: var(--jh-input-number-stepper-color-background-hover);
          --jh-button-color-border-tertiary-hover: var(--jh-input-number-stepper-color-border-hover);
          --jh-button-icon-color-fill-tertiary-hover: var(--jh-input-number-stepper-icon-color-fill-hover);
          --jh-button-color-background-tertiary-active: var(--jh-input-number-stepper-color-background-active);
          --jh-button-color-border-tertiary-active: var(--jh-input-number-stepper-color-border-active);
          --jh-button-icon-color-fill-tertiary-active: var(--jh-input-number-stepper-icon-color-fill-active);
          --jh-button-opacity-disabled: var(--jh-input-number-stepper-opacity-disabled);
          --jh-button-color-background-tertiary-disabled: var(--jh-input-number-stepper-color-background-disabled);
          --jh-button-color-border-tertiary-disabled: var(--jh-input-number-stepper-color-border-disabled);
          --jh-button-icon-color-fill-tertiary-disabled: var(--jh-input-number-stepper-icon-color-fill-disabled);
        }
        /* Keep stepper functionally disabled while using parent disabled visuals. */
        :host([disabled]) jh-button {
          pointer-events: none;
        }
        .increment-button {
          margin-left: var(--jh-dimension-100);
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /** Sets the maximum value for the input number. */
      max: { type: Number },
      /** Sets the minimum value for the input number. */
      min: { type: Number },
      /** Sets the stepper buttons increment and decrement the value. */
      step: { type: Number },
    };
  }

  constructor() {
    super();
    /** @type {?number} */
    this.max = null;
    /** @type {?number} */
    this.min = null;
    /** @type {number} */
    this.step = 1;
  }

  willUpdate(changedProperties) {
    if (changedProperties.has('value') ||
        changedProperties.has('min') ||
        changedProperties.has('max')
    ) {
      this.#updateStepperDisabledState();
    }
  }

  #dispatchEvents() {
    this.dispatchCustomEvent('jh-change');
    this.dispatchCustomEvent('jh-input');
  }

  #updateValue(step) {
    let stepNum = Number(this.step) || 1;
    let minNum = this.min ?? 0;
    let currentValue = Number(this.value) || 0;

    // calculate decimal precision to avoid floating-point bugs
    let getPrecision = (num) => num.toString().split('.')[1]?.length || 0;
    let precision = Math.max(getPrecision(stepNum), getPrecision(minNum));
    let scale = 10 ** precision;

    // convert values to integers
    let currentInt = Math.round(currentValue * scale);
    let minInt = Math.round(minNum * scale);
    let stepInt = Math.round(stepNum * scale);

    // determine how many steps we are from the minimum
    let currentSteps = (currentInt - minInt) / stepInt;

    // If incrementing, force down and add 1. If decrementing, force up and subtract 1.
    let nextStepIndex =
      step > 0 ? Math.floor(currentSteps) + 1 : Math.ceil(currentSteps) - 1;

    // calculate the new value and scale it back down
    let newValue = (nextStepIndex * stepInt + minInt) / scale;

    // clamp within boundaries
    if (this.min !== null) newValue = Math.max(this.min, newValue);
    if (this.max !== null) newValue = Math.min(this.max, newValue);

    this.value = Number(newValue.toFixed(precision)).toString();
    this.#stepperAnnouncement = this.value;
    this.#dispatchEvents();
  }

  #handleIncrement() {
    this.#updateValue(this.step);
  }

  #handleDecrement() {
    this.#updateValue(-this.step);
  }

  _handleInput(e) {
    super._handleInput(e);
    // reset announcement when using native input controls to avoid stale stepper value announcements
    this.#stepperAnnouncement = '';
  }

  // when max is reached, disable the increment button, and when min is reached, disable the decrement button
  #updateStepperDisabledState() {
    // check that there is a value first
    if (this.value === null || this.value === undefined || this.value === '') {
      this.#incrementDisabled = false;
      this.#decrementDisabled = false;
      return;
    }
    this.#incrementDisabled = this.max !== null && Number(this.value) >= this.max;
    this.#decrementDisabled = this.min !== null && Number(this.value) <= this.min;
  }

  renderRightSlot() {
    return html`
      <slot name="jh-input-right" @slotchange=${this._handleSlotChange}>       
        <jh-button
          tabindex="-1"
          aria-hidden="true"
          size="x-small"
          appearance="tertiary"
          @click=${this.#handleDecrement}
          ?disabled=${this.disabled ? false : this.#decrementDisabled}
          ><slot name="jh-input-number-stepper-decrement" slot="jh-button-icon-left"><jh-icon-minus slot="jh-button-icon"></jh-icon-minus></slot>
        </jh-button>
        <jh-button
          tabindex="-1"
          aria-hidden="true"
          size="x-small"
          class="increment-button"
          appearance="tertiary"
          @click=${this.#handleIncrement}
          ?disabled=${this.disabled ? false : this.#incrementDisabled}
          ><slot name="jh-input-number-stepper-increment" slot="jh-button-icon-left"><jh-icon-plus slot="jh-button-icon"></jh-icon-plus></slot>
        </jh-button>
      </slot> 
    `;
  }

  renderInput() {
    let describedby;

    if (this.helperText || (this.errorText && this.invalid)) {
      describedby = this._getDescribedby();
    }

    const leftSlot = this.readonly ? null : this.renderLeftSlot();
    const rightSlot = this.readonly ? null : this.renderRightSlot();
    const clearButton = this.readonly ? null : this.renderClearButton();

    return html`
      <div class="input-container">
        <div class="sr-only" aria-live="assertive" aria-atomic="true">
          ${this.#stepperAnnouncement}
        </div>
        <div class="input-wrapper">
          ${leftSlot}
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
            max=${ifDefined(Number.isNaN(this.max) ? null : this.max)}
            min=${ifDefined(Number.isNaN(this.min) ? null : this.min)}
            name=${ifDefined(this.name === '' ? null : this.name)}
            ?readonly=${this.readonly}
            ?required=${this.required}
            step=${ifDefined(Number.isNaN(this.step) ? null : this.step)}
            type="number"
            .value=${live(this.value)}
            @change=${this._handleChange}
            @input=${this._handleInput}
            @select=${this._handleSelect}
          />
          ${clearButton}
          ${rightSlot}
        </div>
      </div>
    `;
  }
}
JhInputNumber.register('jh-input-number', JhInputNumber);