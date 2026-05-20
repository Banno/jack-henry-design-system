/**
 * SPDX-FileCopyrightText: 2025 Jack Henry
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { JhInput } from '../input/input.js';
import '../button/button.js';
import '@jack-henry/jh-icons/icons-wc/icon-minus.js';
import '@jack-henry/jh-icons/icons-wc/icon-plus.js';

let id = 0;
/**
 * @cssprop --jh-input-number-stepper-border-radius - The button container border-radius. Defaults to `--jh-border-radius-100`.
 * @cssprop --jh-input-number-stepper-color-background-enabled - The stepper button background-color when enabled. Defaults to `transparent`.
 * @cssprop --jh-input-number-stepper-color-border-enabled - The stepper button border-color when enabled. Defaults to `transparent`.
 * @cssprop --jh-input-number-stepper-icon-color-fill-enabled - The stepper button icon color when enabled. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-input-number-stepper-color-background-focus - The stepper button background-color when focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-input-number-stepper-color-border-focus - The stepper button border-color when focused. Defaults to `transparent`.
 * @cssprop --jh-input-number-stepper-icon-color-fill-focus - The stepper button icon color when focused. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-input-number-stepper-color-focus - The stepper button outline color when focused. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-input-number-stepper-color-background-hover - The stepper button background-color when hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-input-number-stepper-color-border-hover - The stepper button border-color when hovered. Defaults to `transparent`.
 * @cssprop --jh-input-number-stepper-icon-color-fill-hover - The stepper button icon color when hovered. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-input-number-stepper-color-background-active - The stepper button background-color when active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-input-number-stepper-color-border-active - The stepper button border-color when active. Defaults to `transparent`.
 * @cssprop --jh-input-number-stepper-icon-color-fill-active - The stepper button icon color when active. Defaults to `--jh-color-content-on-brand-active`.
 * @slot jh-input-number-stepper-increment - Use to insert an icon in the increment stepper button.
 * @slot jh-input-number-stepper-decrement - Use to insert an icon in the decrement stepper button.
 *
 * Input Number
 * @customElement jh-input-number
 */
export class JhInputNumber extends JhInput {
  /** @type {?number} */
  #id;
  /** @type {?string} */
  #stepperAnnouncement;

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
        jh-button {
          --jh-button-size: var(--jh-dimension-800);
          --jh-button-border-radius: var(--jh-input-number-stepper-border-radius);
          --jh-button-color-background-tertiary-enabled: var(--jh-input-number-stepper-color-background-enabled);
          --jh-button-color-border-tertiary-enabled: var(--jh-input-number-stepper-color-border-enabled);
          --jh-button-icon-color-fill-tertiary-enabled: var(--jh-input-number-stepper-icon-color-fill-enabled);
          --jh-button-color-background-tertiary-focus: var(--jh-input-number-stepper-color-background-focus);
          --jh-button-color-border-tertiary-focus: var(--jh-input-number-stepper-color-border-focus);
          --jh-button-icon-color-fill-tertiary-focus: var(--jh-input-number-stepper-icon-color-fill-focus);
          --jh-button-color-focus: var(--jh-input-number-stepper-color-focus);
          --jh-button-color-background-tertiary-hover: var(--jh-input-number-stepper-color-background-hover);
          --jh-button-color-border-tertiary-hover: var(--jh-input-number-stepper-color-border-hover);
          --jh-button-icon-color-fill-tertiary-hover: var(--jh-input-number-stepper-icon-color-fill-hover);
          --jh-button-color-background-tertiary-active: var(--jh-input-number-stepper-color-background-active);
          --jh-button-color-border-tertiary-active: var(--jh-input-number-stepper-color-border-active);
          --jh-button-icon-color-fill-tertiary-active: var(--jh-input-number-stepper-icon-color-fill-active);
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
      /** Sets the accessible label for the increment stepper button. */
      accessibleLabelIncrementStepper: {
        type: String,
        attribute: 'accessible-label-increment-stepper',
      },
      /** Sets the accessible label for the decrement stepper button. */
      accessibleLabelDecrementStepper: {
        type: String,
        attribute: 'accessible-label-decrement-stepper',
      },
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
    /** @type {?string} */
    this.accessibleLabelIncrementStepper = null;
    /** @type {?string} */
    this.accessibleLabelDecrementStepper = null;
    /** @type {?number} */
    this.max = null;
    /** @type {?number} */
    this.min = null;
    /** @type {number} */
    this.step = 1;
  }

  connectedCallback() {
    super.connectedCallback();
    this.#id = id++;
  }

  #dispatch(eventName, details) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail: details,
        bubbles: true,
        cancelable: true,
        composed: true,
      }),
    );
  }

  #dispatchEvents() {
    this.#dispatch('jh-change', { value: this.value });
    this.#dispatch('jh-input', { value: this.value });
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

  renderRightSlot() {
    return html`
      <slot name="jh-input-right" @slotchange=${this._handleSlotChange}>       
        <jh-button
            appearance="tertiary"
            @click=${this.#handleDecrement}
            ?disabled=${this.disabled}
            accessible-label=${ifDefined(
              this.accessibleLabelDecrementStepper === ''
                  ? null
                  : this.accessibleLabelDecrementStepper
            )}
            ><slot name="jh-input-number-stepper-decrement" slot="jh-button-icon"><jh-icon-minus slot="jh-button-icon"></jh-icon-minus></slot>
        </jh-button>
        <jh-button
            class="increment-button"
            appearance="tertiary"
            @click=${this.#handleIncrement}
            ?disabled=${this.disabled}
            accessible-label=${ifDefined(
              this.accessibleLabelIncrementStepper === ''
                  ? null
                  : this.accessibleLabelIncrementStepper
            )}
            ><slot name="jh-input-number-stepper-increment" slot="jh-button-icon"><jh-icon-plus slot="jh-button-icon"></jh-icon-plus></slot>
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
            id="jh-input-${this.#id}"
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
            max=${ifDefined(this.max === '' ? null : this.max)}
            min=${ifDefined(this.min === '' ? null : this.min)}
            name=${ifDefined(this.name === '' ? null : this.name)}
            ?readonly=${this.readonly}
            ?required=${this.required}
            step=${ifDefined(this.step === '' ? null : this.step)}
            type="number"
            .value=${this.value}
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
customElements.define('jh-input-number', JhInputNumber);