/**
 * SPDX-FileCopyrightText: 2026 Jack Henry
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../button/button.js';
import '@jack-henry/jh-icons/icons-wc/icon-circle-xmark.js';

let id = 0;

export const InputLayoutMixin = (superClass) =>
  class InputLayoutMixinClass extends superClass {
    static get formAssociated() {
      return true;
    }

    /** @type {ElementInternals} */
    _internals;
    /** @type {?number} */
    _layoutId;

    static get layoutStyles() {
      return css`
        :host {
          --input-helper-regular-font-family: var(--jh-font-helper-regular-font-family);
          --input-helper-regular-font-weight: var(--jh-font-helper-regular-font-weight);
          --input-helper-regular-font-size: var(--jh-font-helper-regular-font-size);
          --input-helper-regular-line-height: var(--jh-font-helper-regular-line-height);
          font-family: var(--input-helper-regular-font-family);
          font-weight: var(--input-helper-regular-font-weight);
          font-size: var(--input-helper-regular-font-size);
          line-height: var(--input-helper-regular-line-height);
          display: inline-block;
          --jh-button-size: var(--jh-dimension-800);
          width: 100%;
          --input-value-color-text: var(
            --jh-input-value-color-text,
            var(--jh-color-content-primary-enabled)
          );
        }
        label {
          color: var(
            --jh-input-label-color-text,
            var(--jh-color-content-primary-enabled)
          );
          font-family: var(--jh-font-helper-medium-font-family);
          font-weight: var(--jh-font-helper-medium-font-weight);
          font-size: var(--jh-font-helper-medium-font-size);
          line-height: var(--jh-font-helper-medium-line-height);
          display: block;
        }
        .helper-text {
          color: var(
            --jh-input-helper-color-text,
            var(--jh-color-content-secondary-enabled)
          );
        }
        label,
        .helper-text,
        .error-text {
          word-break: normal;
          overflow-wrap: anywhere;
        }
        :host([label]) .input-container {
          margin-top: var(--jh-dimension-200);
        }

        /* Flex wrapper */
        .input-wrapper {
          display: flex;
          align-items: center;
          background-color: var(
            --jh-input-field-color-background,
            var(--jh-color-container-primary-enabled)
          );
          border-width: var(--jh-border-control-width);
          border-style: var(--jh-border-control-style);
          border-color: var(
            --jh-input-field-color-border-enabled,
            var(--jh-border-control-color)
          );
          border-radius: var(
            --jh-input-field-border-radius,
            var(--jh-border-radius-100)
          );
          padding: var(--jh-dimension-0) var(--jh-dimension-400);
          box-sizing: border-box;
          width: 100%;
        }

        /* Sizes on input wrapper */
        :host([size='small']) .input-wrapper {
          height: var(--jh-dimension-1000);
        }
        :host([size='medium']) .input-wrapper {
          height: var(--jh-dimension-1200);
        }
        :host([size='large']) .input-wrapper {
          height: var(--jh-dimension-1400);
        }

        /* Input element — no border, grows to fill */
        input {
          flex: 1;
          min-width: 0;
          border: none;
          background: transparent;
          outline: none;
          padding: 0;
          color: var(--input-value-color-text);
          font-family: var(--jh-font-body-regular-1-font-family);
          font-weight: var(--jh-font-body-regular-1-font-weight);
          font-size: var(--jh-font-body-regular-1-font-size);
          line-height: var(--jh-font-body-regular-1-line-height);
          height: 100%;
        }
        :host([readonly]) input {
          height: auto;
        }

        /* Slot wrappers */
        .slot-wrapper {
          display: none;
          align-items: center;
          flex-shrink: 0;
        }
        slot[name="jh-input-left"] {
          display: none;
          align-items: center;
          flex-shrink: 0;
          padding-right: var(--jh-dimension-200);
        }
        slot[name="jh-input-right"] {
          display: none;
          align-items: center;
          flex-shrink: 0;
          padding-left: var(--jh-dimension-200);
        }
        slot[name="jh-input-left"].display-slot,
        slot[name="jh-input-right"].display-slot {
          display: flex;
        }

        /* Slotted content alignment */
        ::slotted(*) {
          display: flex;
          align-items: center;
        }

        /* States on input wrapper */
        .input-wrapper:active {
          border-color: var(
            --jh-input-field-color-border-active,
            var(--jh-color-content-brand-active)
          );
        }
        :host([disabled]) {
          opacity: var(--jh-input-opacity-disabled, var(--jh-opacity-disabled));
        }
        :host([disabled]) .input-wrapper {
          border-color: var(
            --jh-input-field-color-border-disabled,
            var(--jh-border-control-color)
          );
        }

        /* Focus-visible on wrapper when input is focused */
        .input-wrapper:has(input:focus-visible) {
          border-color: var(
            --jh-input-field-color-border-focus,
            var(--jh-color-content-brand-hover)
          );
          outline-color: var(
            --jh-input-color-focus,
            var(--jh-border-focus-color)
          );
          outline-style: var(--jh-border-focus-style);
          outline-width: var(--jh-border-focus-width);
          outline-offset: 1px;
        }
        input:focus-visible {
          outline: none;
        }
        .input-wrapper:hover {
          border-color: var(
            --jh-input-field-color-border-hover,
            var(--jh-color-content-brand-hover)
          );
        }
        :host([invalid]) .input-wrapper {
          border-width: var(--jh-border-error-width);
          border-style: var(--jh-border-error-style);
          border-color: var(
            --jh-input-field-color-border-error,
            var(--jh-border-error-color)
          );
        }

        /* Clear button */
        .clear-button {
          --jh-button-border-radius: var(--jh-input-clear-border-radius);
          --jh-button-color-background-tertiary-enabled: var(--jh-input-clear-color-background-enabled);
          --jh-button-color-border-tertiary-enabled: var(--jh-input-clear-color-border-enabled);
          --jh-button-icon-color-fill-tertiary-enabled: var(--jh-input-clear-icon-color-fill-enabled);
          --jh-button-color-background-tertiary-focus: var(--jh-input-clear-color-background-focus);
          --jh-button-color-border-tertiary-focus: var(--jh-input-clear-color-border-focus);
          --jh-button-color-focus: var(--jh-input-clear-color-focus);
          --jh-button-icon-color-fill-tertiary-focus: var(--jh-input-clear-icon-color-fill-focus);
          --jh-button-color-background-tertiary-hover: var(--jh-input-clear-color-background-hover);
          --jh-button-color-border-tertiary-hover: var(--jh-input-clear-color-border-hover);
          --jh-button-icon-color-fill-tertiary-hover: var(--jh-input-clear-icon-color-fill-hover);
          --jh-button-color-background-tertiary-active: var(--jh-input-clear-color-background-active);
          --jh-button-color-border-tertiary-active: var(--jh-input-clear-color-border-active);
          --jh-button-icon-color-fill-tertiary-active: var(--jh-input-clear-icon-color-fill-active);
          display: none;
          flex-shrink: 0;
        }
        .display-clear-button .clear-button {
          display: flex;
          margin-left: var(--jh-dimension-200);
        }

        /* Readonly styles */
        :host([readonly]) .input-wrapper {
          height: auto;
          background-color: transparent;
          border: none;
          padding-left: 0;
          padding-right: 0;
        }

        /* Override Chrome autofill styles */
        input:autofill {
          -webkit-text-fill-color: var(--input-value-color-text);
          caret-color: var(--input-value-color-text);
          background-clip: text;
        }

        /* Footer */
        .footer-content {
          margin: var(--jh-dimension-200) 0 0 0;
          gap: var(--jh-dimension-200);
          display: flex;
          justify-content: space-between;
        }
        .error-text {
          color: var(
            --jh-input-error-color-text,
            var(--jh-color-content-negative-enabled)
          );
        }
        p {
          margin: 0;
        }

        /* Optional/Required/Show-indicator */
        :host([show-indicator]) span {
          color: var(
            --jh-input-optional-color-text,
            var(--jh-color-content-primary-enabled)
          );
          font-family: var(--input-helper-regular-font-family);
          font-weight: var(--input-helper-regular-font-weight);
          font-size: var(--input-helper-regular-font-size);
          line-height: var(--input-helper-regular-line-height);
        }
        :host([show-indicator][required]) span {
          color: var(
            --jh-input-required-color-text,
            var(--jh-color-content-negative-enabled)
          );
        }
      `;
    }

    static get properties() {
      return {
        /** Sets an `aria-label` on the input field to assist screen reader users when no visible label is present. */
        accessibleLabel: { type: String, attribute: 'accessible-label' },
        /** Sets an aria-label on the clear button to assist screen reader users. Indicates that activating the button will clear the input field. */
        accessibleLabelClearButton: { type: String, attribute: 'accessible-label-clear-button'},
        /**
         * Determines whether the browser can provide assistance in filling out the value and what type of information is expected.
         *
         * [Visit MDN for information on supported autocomplete values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
         */
        autocomplete: { type: String },
        /** Disables the component and prevents all user interactions. May cause the component to be ignored by assistive technologies (AT). */
        disabled: { type: Boolean },
        /** Text to be displayed when the component has failed validation and `invalid` is true. */
        errorText: { type: String, attribute: 'error-text' },
        /** Provides additional context or guidance. For `helper-text` to be displayed, the `label` property must also be set. */
        helperText: { type: String, attribute: 'helper-text' },
        /** Hides the left slot. */
        hideLeftSlot: { type: Boolean, attribute: 'hide-left-slot' },
        /** Hides the right slot. */
        hideRightSlot: { type: Boolean, attribute: 'hide-right-slot' },
        /** Sets an `aria-invalid` attribute to indicate the value supplied was invalid. Also displays `error-text` and error state styling when set. */
        invalid: { type: Boolean },
        /** Identifies the purpose of the component. */
        label: { type: String },
        /** Sets a name for the form control. */
        name: { type: String },
        /** Prevents users from changing the value. Removes all slotted content. */
        readonly: { type: Boolean },
        /** Indicates a value is required. */
        required: { type: Boolean },
        /** Displays a clear button when the component contains a value and is focused or hovered. Clears the value when activated. */
        showClearButton: { type: Boolean, attribute: 'show-clear-button' },
        /** Adds a visual indicator next to the label. Indicates that a value is optional (by default) or required if the `required` property is also set. */
        showIndicator: { type: Boolean, attribute: 'show-indicator' },
        /** Sets the size of the component. */
        size: { type: String, reflect: true },
        /** Sets the value. */
        value: { type: String },
       };
    }

    constructor() {
      super();
      this._internals = this.attachInternals();
      this._layoutId = ++id;
      /** @type {?string} */
      this.accessibleLabel = null;
      /** @type {?string} */
      this.accessibleLabelClearButton = null;
      /** @type {?string} */
      this.autocomplete = null;
      /** @type {boolean} */
      this.disabled = false;
      /** @type {?string} */
      this.errorText = null;
      /** @type {?string} */
      this.helperText = null;
      /** @type {boolean} */
      this.hideLeftSlot = false;
      /** @type {boolean} */
      this.hideRightSlot = false;
      /** @type {boolean} */
      this.invalid = false;
      /** @type {?string} */
      this.label = null;
      /** @type {?string} */
      this.name = null;
      /** @type {boolean} */
      this.readonly = false;
      /** @type {boolean} */
      this.required = false;
      /** @type {boolean} */
      this.showClearButton = false;
      /** @type {boolean} */
      this.showIndicator = false;
      /** @type {'small'|'medium'|'large'} */
      this.size = 'medium';
      /** @type {?string} */
      this.value = null;
    }

    /** @ignore */
    get form() {
      return this._internals.form;
    }

    #value;
    get value() {
      return this.#value;
    }

    set value(newValue) {
      const oldValue = this.#value;
      if (newValue !== oldValue) {
        this.#value = newValue;
        this._internals.setFormValue(this.#value);
      }
      this.requestUpdate('value', oldValue);
    }

    firstUpdated() {
      super.firstUpdated?.();

      // Attach event listeners to show/hide clear button
      if (this.showClearButton) {
        ['focusin', 'focusout'].forEach((e) => {
          this.addEventListener(e, this._toggleFocus.bind(this));
        });
        let inputContainer = this.renderRoot?.querySelector('.input-container');
        ['mouseenter', 'mouseleave'].forEach((e) => {
          inputContainer?.addEventListener(e, this._toggleFocus.bind(this));
        });
      }

      const leftSlot = this.renderRoot?.querySelector('slot[name="jh-input-left"]');
      const rightSlot = this.renderRoot?.querySelector('slot[name="jh-input-right"]');

      if (leftSlot) leftSlot.classList.toggle('display-slot', this._checkSlotContent(leftSlot));
      if (rightSlot) rightSlot.classList.toggle('display-slot', this._checkSlotContent(rightSlot));

      // Clicking the wrapper should focus the input
      const wrapper = this.renderRoot?.querySelector('.input-wrapper');
      const inputEl = this.renderRoot?.querySelector('input');
      wrapper?.addEventListener('mousedown', (e) => {
        if (e.target === wrapper || e.target.tagName === 'SLOT') {
          if (this.renderRoot?.activeElement === inputEl) {
            e.preventDefault();
          } else {
            e.preventDefault();
            inputEl?.focus();
          }
        }
      });
    }

    _checkSlotContent(slot) {
      // Slotted and fallback elements
      const slottedElements = slot.assignedElements({ flatten: true });
      if (slottedElements.length > 0) {
        return true;
      }

      // Slotted and fallback text nodes that are not just whitespace
      if (
        slot
          .assignedNodes({ flatten: true })
          .some((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '')
      ) {
        return true;
      }
      return false;
    }

    _toggleFocus(e) {
      if (this.disabled || this.readonly || !this.showClearButton) {
        return;
      }

      if (this.matches(':focus-within') || e.type === 'mouseenter') {
        this.renderRoot?.querySelector('.input-container')?.classList.add('display-clear-button');
      } else {
        this.renderRoot?.querySelector('.input-container')?.classList.remove('display-clear-button');
      }
    }

    _handleClearButtonClick() {
      let previousValue = this.value;
      this.value = '';
      this.renderRoot?.querySelector('input')?.focus();
      this.dispatchEvent(
        new CustomEvent('jh-input:clear-button-click', {
          detail: {
            previousValue: previousValue,
          },
          bubbles: true,
          cancelable: true,
          composed: true,
        })
      );
    }

    renderClearButton() {
      if (!this.showClearButton || !this.value || this.disabled) return null;
      return html`
        <jh-button
          size="small"
          appearance="tertiary"
          class="clear-button"
          accessible-label=${ifDefined(this.accessibleLabelClearButton)}
          @click=${this._handleClearButtonClick}
        >
          <slot name="jh-input-clear-button" slot="jh-button-icon">
            <jh-icon-circle-xmark slot="jh-button-icon" aria-hidden="true" size="medium"></jh-icon-circle-xmark>
          </slot>
        </jh-button>
      `;
    }

    _handleSlotChange(e) {
      let newSlottedElement = e.target.assignedElements()[0];
      let slot = e.target;

      if (slot.name !== 'jh-input-left' && slot.name !== 'jh-input-right') {
        return;
      }

      let hasContent = this._checkSlotContent(slot);
      slot.classList.toggle('display-slot', hasContent);

      // Set icon size if applicable
      if (newSlottedElement?.tagName.startsWith('JH-ICON')) {
        newSlottedElement.setAttribute('size', 'medium');
      }
    }

    _getDescribedby() {
      let describedbyString = '';

      if (this.errorText) {
        describedbyString += `jh-input-error-${this._layoutId}`;
      }
      if (this.helperText) {
        describedbyString += ` jh-input-helper-${this._layoutId}`;
      }
      return describedbyString;
    }

    renderLabel() {
      let label;
      let indicator;
      let helperText;

      if (this.label) {
        if (this.showIndicator) {
          if (this.required) {
            indicator = html`<span class="indicator" aria-hidden="true"> *</span>`;
          } else {
            indicator = html`<span class="indicator"> (optional)</span>`;
          }
        }

        if (this.helperText) {
          helperText = html`
            <p id="jh-input-helper-${this._layoutId}" class="helper-text">
              ${this.helperText}
            </p>
          `;
        }

        label = html`
          <label for="jh-input-${this._layoutId}">${this.label}${indicator}</label>
          ${helperText}
        `;
      }
      return label;
    }

    renderFooter() {
      let footer;
      let errorText;

      if (this.invalid && this.errorText) {
        errorText = html`
          <p id="jh-input-error-${this._layoutId}" class="error-text">
            ${this.errorText}
          </p>
        `;
      }

      if (this.invalid && this.errorText) {
        footer = html`
          <div class="footer-content">
            ${errorText}
          </div>
        `;
      }
      return footer;
    }

    renderLeftSlot() {
      if (this.hideLeftSlot) return null;
      return html`
        <slot name="jh-input-left" @slotchange=${this._handleSlotChange}></slot>
      `;
    }

    renderRightSlot() {
      if (this.hideRightSlot) return null;
      return html`
        <slot name="jh-input-right" @slotchange=${this._handleSlotChange}></slot>
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
          <div class="input-wrapper">
            ${leftSlot}
            <input
              id="jh-input-${this._layoutId}"
              aria-describedby=${ifDefined(describedby)}
              aria-invalid=${ifDefined(this.invalid ? 'true' : null)}
              aria-label=${ifDefined(
                this.accessibleLabel === '' ? null : this.accessibleLabel
              )}
              autocomplete=${ifDefined(
                this.autocomplete === '' ? null : this.autocomplete
              )}
              ?disabled=${this.disabled}
              name=${ifDefined(this.name === '' ? null : this.name)}
              ?readonly=${this.readonly}
              ?required=${this.required}
              type="text"
              .value=${this.value ?? ''}
            />
            ${clearButton}
            ${rightSlot}
          </div>
        </div>
      `;
    }
    
    render() {
      const label = this.renderLabel();
      const input = this.renderInput();
      const footer = this.renderFooter();

      return html`
        ${label} ${input} ${footer}
      `;
    }
  };
