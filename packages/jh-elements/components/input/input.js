// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../button/button.js';
import '@jack-henry/jh-icons/icons-wc/icon-circle-xmark.js';

let id = 0;

/**
 * @cssprop --jh-input-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-input-field-color-background - The input field background-color when in an editable state. This property does not apply when the component is set to `readonly`. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-input-field-color-border-enabled - The input field border-color. Defaults to `--jh-border-control-color`.
 * @cssprop --jh-input-field-border-radius - The input field border radius. Defaults to `--jh-border-radius-100`.
 * @cssprop --jh-input-color-focus - The input field outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-input-field-color-border-focus - The input field border-color when in focus. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-input-field-color-border-hover - The input field border-color when hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-input-field-color-border-active - The input field border-color when active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-input-field-color-border-disabled - The input field border-color when disabled. Defaults to `--jh-border-control-color`.
 * @cssprop --jh-input-opacity-disabled - The input opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-input-field-color-border-error - The input field border-color when invalid. Defaults to `--jh-border-error-color`.
 * @cssprop --jh-input-clear-border-radius - The clear button border radius. Defaults to `--jh-border-radius-100`.
 * @cssprop --jh-input-clear-color-background-enabled - The clear button background-color. Defaults to `transparent`.
 * @cssprop --jh-input-clear-color-border-enabled - The clear button border-color. Defaults to `transparent`.
 * @cssprop --jh-input-clear-icon-color-fill-enabled - The clear button icon fill color. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-input-clear-color-background-focus - The clear button background-color when in focus. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-input-clear-color-border-focus - The clear button border-color when in focus. Defaults to `transparent`.
 * @cssprop --jh-input-clear-color-focus - The clear button outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-input-clear-icon-color-fill-focus - The clear button icon fill color when in focus. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-input-clear-color-background-hover - The clear button background-color when hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-input-clear-color-border-hover - The clear button border-color when hovered. Defaults to `transparent`.
 * @cssprop --jh-input-clear-icon-color-fill-hover - The clear button icon fill color when hovered. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-input-clear-color-background-active - The clear button background-color when active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-input-clear-color-border-active - The clear button border-color when active. Defaults to `transparent`.
 * @cssprop --jh-input-clear-icon-color-fill-active - The clear button icon fill color when active. Defaults to `--jh-color-content-on-brand-active`. 
 * @cssprop --jh-input-required-color-text - The required indicator color. Defaults to `jh-color-content-negative-enabled`.
 * @cssprop --jh-input-optional-color-text - The optional indicator text color. Defaults to `jh-color-content-primary-enabled`.
 * @cssprop --jh-input-helper-color-text - The helper-text text color. Defaults to `jh-color-content-secondary-enabled`.
 * @cssprop --jh-input-counter-color-text - The character counter text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-input-value-color-text - The value text color. Defaults to `jh-color-content-primary-enabled`.
 * @cssprop --jh-input-error-color-text - The error message text color. Defaults to `jh-color-content-negative-enabled`.
 * 
 * @event jh-select - Dispatched when text is selected. Event payload contains the selected text, the starting index of the selection, and the ending index of the selection. These values can be accessed via `e.detail.selected`, `e.detail.selectionStart`, and `e.detail.selectionEnd`.
 * @event jh-change - Dispatched when the value of the input has changed and input loses focus. Event payload includes the value of the input and can be accessed via `e.detail.value`. Payload also includes the raw/unformatted value when an input mask is applied and can be accessed via `e.detail.rawValue`.
 * @event jh-input - Dispatched when the value of the input has changed. Event payload includes the value of the input and can be accessed via `e.detail.value`. Payload also includes the raw/unformatted value when an input mask is applied and can be accessed via `e.detail.rawValue`.
 * @event jh-maxlength - Dispatched when the `maxlength` property is set and it's value is reached.
 * @event jh-input:clear-button-click - Dispatched when the clear button is activated. Event payload contains the previous value of the input field before it was cleared and can be accessed via `e.detail.previousValue`.
 * @slot jh-input-left - Use to insert an element on the left side of the input field, such as an icon or button.
 * @slot jh-input-right - Use to insert an element on the right side of the input field, such as an icon or button.
 * @slot jh-input-clear-button - Use to insert an icon within the clear button. 
 * 
 * @customElement jh-input
 */
export class JhInput extends LitElement {
  static get formAssociated() {
    return true;
  }

  /** @type {ElementInternals} */
  #internals;
  /** @type {?number} */
  #id;
  /** @type {?string} */
  #value;
  /** @type {string} */
  #rawValue = '';
  /** @type {number} */
  #startLastFixedChar;
  /** @type {boolean} */
  #deletedChar = false;
  /** @type {number} */
  #adjustCaretPositionStart = null;
  /** @type {Object} */
  #selectedText = {
    selected: false,
    selectionStart: null,
    selectionEnd: null,
  };
  /** @type {Array} */
  #maskMetaCharIndexes;
  /** @type {Array} */
  #maskFixedCharIndexes;
  /** @type {Object} */
  #regexSubset = {
    // digits -> phone numbers, CC, etc
    '9': /[0-9]/,
    // alphabetical characters -> names, address, etc
    'a': /[A-Za-z]/,
    // alphanumeric characters -> usernames, product codes, etc.
    '*': /[A-Za-z0-9]/,
  };

  get #inputEl() {
    return this.renderRoot?.querySelector('input');
  }

  get #leftSlot() {
    return this.renderRoot?.querySelector('slot[name="jh-input-left"]');
  }

  get #rightSlot() {
    return this.renderRoot?.querySelector('slot[name="jh-input-right"]');
  }

  static get styles() {
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
        width: 100%;
        --jh-button-size: var(--jh-dimension-800);
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
      :host([show-char-count]) .helper-text {
        display: inline-block;
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
      .footer-content:has(.counter):not(:has(.error-text)) {
        justify-content: flex-end;
      }
      .counter {
        color: var(--jh-input-counter-color-text, 
          var(--jh-color-content-secondary-enabled)
        );
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
       * Determines whether the browser can provide assistance in filling out the input value and what type of information is expected.
       * This property will override any autocomplete attribute present on the input's parent form element.
       *
       * [Visit MDN for information on supported autocomplete values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
       */
      autocomplete: { type: String },
      /** Disables the input and prevents all user interactions. May cause the input to be ignored by assistive technologies (AT). */
      disabled: { type: Boolean },
      /** Specifies which action label or icon to present for the enter key on virtual keyboards.
       *
       * [Visit MDN for information on supported enterkeyhint values](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint)
       */
      enterkeyhint: { type: String },
      /** Text to be displayed when input has failed validation and `invalid` is true. */
      errorText: { type: String, attribute: 'error-text' },
      /** Provides additional context or guidance for using the input. For `helper-text` to be displayed, the `label` property must also be set. */
      helperText: { type: String, attribute: 'helper-text' },
      /** Hides the left slot from input. */
      hideLeftSlot: { type: Boolean, attribute: 'hide-left-slot' },
      /** Hides the right slot from input. */
      hideRightSlot: { type: Boolean, attribute: 'hide-right-slot' },
      /** Formats user entered data on input based on fixed lengths. This property does not support dynamic formatting or pasted values. See the input mask documentation above for implementation details. */
      inputMask: { type: String, attribute: 'input-mask' },
      /** Indicates expected input value type and allows for browsers to display appropriate virtual keyboard.
       *
       * [Visit MDN for information on supported inputmode values](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
       */
      inputmode: { type: String },
      /** Sets an `aria-invalid` attribute on input to indicate the value supplied was invalid. Also displays `error-text` and error state styling when set. */
      invalid: { type: Boolean },
      /** Identifies what data should be entered into the input field. */
      label: { type: String },
      /** Sets the maximum number of characters a user can enter into the field. */
      maxlength: { type: String },
      /** Sets the minimum number of characters a user can enter into the field. */
      minlength: { type: String },
      /** Sets a name for the input control. */
      name: { type: String },
      /** Prevents users from changing the input value. Removes all slotted content. */
      readonly: { type: Boolean },
      /** Indicates a value is required. */
      required: { type: Boolean },
      /** Displays a character counter at the bottom right corner below the input field. */
      showCharCount: { type: Boolean, attribute: 'show-char-count' },
      /** Displays a clear button in the input field when it contains a value and is focused or hovered. Deletes input value when activated. */
      showClearButton: {type: Boolean, attribute: 'show-clear-button'}, 
      /** Adds a visual indicator next to the label. Indicates that a value is optional(by default) or required if the `required` property is also set. */
      showIndicator: { type: Boolean, attribute: 'show-indicator' },
      /** Sets the size of the input. */
      size: { type: String, reflect: true },
      /** Sets the value of the input. */
      value: { type: String },
    };
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
    /** @type {?string} */
    this.accessibleLabel = null;
    /** @type {?string} */
    this.accessibleLabelClearButton = null;
    /** @type {?string} */
    this.autocomplete = null;
    /** @type {boolean} */
    this.disabled = false;
    /** @type {?string} */
    this.enterkeyhint = null;
    /** @type {?string} */
    this.errorText = null;
    /** @type {?string} */
    this.helperText = null;
    /** @type {boolean} */
    this.hideLeftSlot = false;
    /** @type {boolean} */
    this.hideRightSlot = false;
    /** @type {?string} */
    this.inputMask = null;
    /** @type {?string} */
    this.inputmode = null;
    /** @type {boolean} */
    this.invalid = false;
    /** @type {?string} */
    this.label = null;
    /** @type {?string} */
    this.maxlength = null;
    /** @type {?string} */
    this.minlength = null;
    /** @type {?string} */
    this.name = null;
    /** @type {boolean} */
    this.readonly = false;
    /** @type {boolean} */
    this.required = false;
    /** @type {boolean} */
    this.showCharCount = false;
    /** @type {boolean} */
    this.showClearButton = false;
    /** @type {boolean} */
    this.showIndicator = false;
    /** @type {'small'|'medium'|'large'} */
    this.size = 'medium';
    /** @type {?string} */
    this.value = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.#id = id++;
    this.#captureMaskIndexes();
    let observer = new MutationObserver(this.#captureMaskIndexes.bind(this));
    observer.observe(this, { attributeFilter: ['input-mask'] });
    this.addEventListener('jh-select', this.#setSelection);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.inputMask) {
      this.removeEventListener('jh-select', this.#setSelection);
    }
  }

  firstUpdated() {
    // attach event listeners to show/hide clear button
    if (this.showClearButton) {
      ['focusin', 'focusout'].forEach(e => {
        this.addEventListener(e, this.#toggleFocus);
      });
      let inputContainer = this.shadowRoot.querySelector('.input-container');
      ['mouseenter', 'mouseleave'].forEach(e => {
        inputContainer.addEventListener(e, this.#toggleFocus.bind(this));
      });
    }

    if (this.#leftSlot) this.#leftSlot.classList.toggle('display-slot', this.#checkSlotContent(this.#leftSlot));
    if (this.#rightSlot) this.#rightSlot.classList.toggle('display-slot', this.#checkSlotContent(this.#rightSlot));

    // clicking the wrapper should focus the input
    const wrapper = this.shadowRoot.querySelector('.input-wrapper');
    wrapper?.addEventListener('mousedown', (e) => {
      if (e.target === wrapper || e.target.tagName === 'SLOT') {
        //if the input already has focus, don't do anything. Prevent default to avoid flickering of the focus ring.
        if (this.shadowRoot.activeElement === this.#inputEl) {
          e.preventDefault();
        } else {
          //otherwise set focus to the input.
          e.preventDefault();
          this.#inputEl?.focus();
        }
      }
    });
  }

  #checkSlotContent(slot) {
    // Slotted and fallback elements
    const slottedElements = slot.assignedElements({ flatten: true });
    if (slottedElements.length > 0) {
        return true;
    }

    // Slotted and fallback text nodes that are not just whitespace
    if (slot.assignedNodes({ flatten: true }).some(
        (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== ''
    )) {
        return true;
    }
    return false;
}

  #toggleFocus(e) {
    if (this.disabled || this.readonly || !this.showClearButton) {
      return;
    }

    // clear button to remain visible on mouseleave if input field or slotted content is focused
    if (this.matches(':focus-within') || e.type === 'mouseenter') {
      this.shadowRoot.querySelector('.input-container').classList.add('display-clear-button');
    } else {
      this.shadowRoot.querySelector('.input-container').classList.remove('display-clear-button');
    }
  }

  // create index of meta and fixed chars of input mask w/ corresponding formatted value indexes
  #captureMaskIndexes() {

    if (!this.inputMask) {
      return;
    }

    let maskIndex = 0;
    let escapeCharCount = 0;
    let fixedCharCount = 0;
    let mask = this.inputMask;
    let lastCharIsFixed = false;
    this.#maskFixedCharIndexes = [];
    this.#maskMetaCharIndexes = [];

    while (maskIndex < mask.length) {
      let maskChar = mask[maskIndex];
      let metaChar = this.#regexSubset[maskChar];

      // escape char located, record fixed char index and skip to next char
      if (maskChar === '\\' && mask[maskIndex + 1] === '\\') {
        escapeCharCount += 2;
        this.#maskFixedCharIndexes.push({'maskIndex' : maskIndex + 2, 'escapeCharCount': escapeCharCount, 'fixedCharCount': fixedCharCount, 'formattedValIndex': maskIndex + 2 - escapeCharCount});
        maskIndex += 3;
        fixedCharCount++;
        continue;
      }
      
      if (!metaChar) {
        lastCharIsFixed = maskIndex === mask.length - 1;
        this.#maskFixedCharIndexes.push({'maskIndex' : maskIndex, 'escapeCharCount': escapeCharCount, 'fixedCharCount': fixedCharCount, 'formattedValIndex': maskIndex - escapeCharCount});
        maskIndex++;
        fixedCharCount++;
      } else {
        this.#maskMetaCharIndexes.push({'maskIndex' : maskIndex, 'escapeCharCount': escapeCharCount, 'fixedCharCount': fixedCharCount, 'formattedValIndex': maskIndex - escapeCharCount });
        maskIndex++;
      }
    }
    
    if (lastCharIsFixed) {
      this.#startLastFixedChar = this.#captureLastFixedCharIndex()
    } else {
      this.#startLastFixedChar = -1;
    }
  }

  #setSelection(e) {
    this.#selectedText = {
      selected: true,
      selectionStart: e.detail.selectionStart,
      selectionEnd: e.detail.selectionEnd,
    }
  }

  /** @ignore */
  get form() {
    return this.#internals.form;
  }

  get value() {
    return this.#value;
  }

  set value(newValue) {
    const oldValue = this.#value;
    if (newValue !== oldValue) {
      this.#value = newValue;
      this.#internals.setFormValue(this.#value);
    }
    this.requestUpdate('value', oldValue);
  }

  #dispatch(eventName, details) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail: details,
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
  }

  _handleInput(e) {
    this.value = e.target.value;
    let inputType = e.inputType;
    this.#deletedChar = inputType === 'deleteContentBackward' || inputType === 'deleteByCut' || inputType === 'deleteContentForward';

    if (this.inputMask) {
      // format only typed values; no paste
      if (inputType === 'insertText' || this.#deletedChar) {
        this.#applyInputMask(e);
      }
    } else {
      this.#dispatch('jh-input', { value: this.value });
    }
  }

  _handleKeydown(e) {
    const value = e.target.value;
    let selectionStart = e.target.selectionStart;
    let selectionEnd = e.target.selectionEnd;


    const testKey = (metaChar, key) => {
      if (!this.#regexSubset[metaChar].test(key)) {
        e.preventDefault();
      }
    }

    // don't validate autofill or keyboard shortcuts ie ctrl + c, ctrl + v, etc
    if (e.key === undefined || e.ctrlKey || e.metaKey) {
      return;
    }

    // only validate single char keys 
    if (e.key.length === 1) {
      if (selectionStart < value.length) {
        this.#validateInsertion(e, selectionStart, testKey);
      } else {
        this.#validateAppending(e, testKey);
      }
    }

    if (e.key === 'Backspace' || e.key === 'Delete') {
      this.#checkForFixedCharRemoval(e, selectionStart, selectionEnd);
    }
  }

  #checkForFixedCharRemoval(e, selectionStart, selectionEnd) {

    if (e.key === 'Backspace') {
      if (this.#selectedText?.selected) {
        let fixedCharSelected = this.#maskFixedCharIndexes.find((fixedChar) => fixedChar.formattedValIndex === selectionStart);
        let metaCharSelected = this.#maskMetaCharIndexes.find((metaChar) => metaChar.formattedValIndex >= selectionStart && metaChar.formattedValIndex < selectionEnd);

        // if user only selected fixed char(s), move caret to beginning of selection
        if (fixedCharSelected && !metaCharSelected) {
          this.#setCaretPosition(e.target, 'Backspace', selectionStart);
          this.#selectedText.selected = false;
          e.preventDefault();
        }
      } else {
        // if user deleted a fixed char, move caret before fixed char
        let fixedCharDeleted = this.#maskFixedCharIndexes.find((fixedChar) => fixedChar.formattedValIndex === selectionStart - 1);
  
        if (fixedCharDeleted) {
          this.#setCaretPosition(e.target, 'Backspace', selectionStart - 1);
        }
      }
    }

    if (e.key === 'Delete') {
      if (this.#selectedText?.selected) {
        let fixedCharSelected = this.#maskFixedCharIndexes.find((fixedChar) => fixedChar.formattedValIndex === selectionStart);
        let metaCharSelected = this.#maskMetaCharIndexes.find((metaChar) => metaChar.formattedValIndex >= selectionStart && metaChar.formattedValIndex < selectionEnd);

        // if user only selected fixed char(s), move caret to end of selection
        if (fixedCharSelected && !metaCharSelected) {
          this.#setCaretPosition(e.target, 'Delete', selectionStart, selectionEnd);
          this.#selectedText.selected = false;
          e.preventDefault();
        }
      } else {
        // if user deleted a fixed char, move caret behind fixed char
        let fixedCharDeleted = this.#maskFixedCharIndexes.find((fixedChar) => fixedChar.formattedValIndex === selectionStart);

        if (fixedCharDeleted) {
          this.#setCaretPosition(e.target, 'Delete', selectionStart);
        }
      }
    }
  }

  // move caret to prevent deletion of fixed chars
  #setCaretPosition(input, key, selectionStart, selectionEnd) {
    let metaCharIndex;
    let newCaretIndex;

    // find the first meta char before the fixed char that user attempted to delete
    if (key === "Backspace") {

      if (this.#selectedText?.selected) {
        // user only selected fixed char(s), move caret to beginning of selection
        newCaretIndex = selectionStart;
      } else {
        // find last meta char before fixed char that user attempted to delete
        metaCharIndex = this.#maskMetaCharIndexes.toReversed().find((metaChar) => metaChar.formattedValIndex <= selectionStart);

        if (metaCharIndex) {
          // place caret after last meta char before fixed char so it can be deleted
          newCaretIndex = metaCharIndex.formattedValIndex + 1;
        } else {
          // place caret at beginning of input if user attempting to delete fixed char at beginning of input mask
          newCaretIndex = 0;
        }
      }
    }

    // find the first meta char after the fixed char that user attempted to delete
    if (key === "Delete") {

      if (this.#selectedText?.selected) {
        // user only selected fixed char(s), move caret to end of selection
        newCaretIndex = selectionEnd;
      } else {
        // find first meta char after fixed char that user attempted to delete
        metaCharIndex = this.#maskMetaCharIndexes.find((metaChar) => metaChar.formattedValIndex >= selectionStart);

        if (metaCharIndex) {
          // place caret before first meta char after fixed char so it can be deleted
          newCaretIndex = metaCharIndex.formattedValIndex;
        } else {
          // place caret at end of input if no following meta char
          if (this.#startLastFixedChar >= 0) {
            newCaretIndex = this.#maskFixedCharIndexes[this.#maskFixedCharIndexes.length - 1].formattedValIndex + 1;
          }
        }
      }
    }
    input.setSelectionRange(newCaretIndex, newCaretIndex);
  }

  #validateInsertion(e, selectionStart, testKey) {
    // Find corresponding mask and fixed char indexes
    let metaCharIndex = this.#maskMetaCharIndexes.find((metaChar) => metaChar.formattedValIndex === selectionStart);
    let fixedCharIndex = this.#maskFixedCharIndexes.find((fixedChar) => fixedChar.formattedValIndex === selectionStart);

    // inserting char at index of a fixed char; find following meta char
    if (fixedCharIndex) {
      // set meta char index to first meta char following fixed char 
      metaCharIndex = this.#maskMetaCharIndexes.find((metaChar) => metaChar.formattedValIndex >= fixedCharIndex.formattedValIndex + 1);
    }

    // test key against meta char
    if (metaCharIndex) {
      testKey(this.inputMask[metaCharIndex.maskIndex], e.key);
    }
  }

  #validateAppending(e, testKey) {
    let metaCharIndex = this.#maskMetaCharIndexes[this.#rawValue.length]?.maskIndex;
    if (metaCharIndex !== undefined) {
      testKey(this.inputMask[metaCharIndex], e.key);
    }
  }

  #captureLastFixedCharIndex() {
    // initialize index to the last element in the mask fixed character indexes array
    let index = this.#maskFixedCharIndexes.length - 1;

    for (let i = this.#maskFixedCharIndexes.length - 1; i >= 0; i--) {
      let previousIndex = i - 1;
      
      // check if the current fixed char follows immediately after fixed char, ie input-mask="99AA"
      if (this.#maskFixedCharIndexes[i].maskIndex === this.#maskFixedCharIndexes[previousIndex]?.maskIndex + 1) {
        index = previousIndex;
      } else {
        // break the loop if the fixed chars are not consecutive
        break;
      }
    }
    return index;
  }
    
  #removeMask(e, value) {
    let insertedChar =  e.target.selectionStart < value.length;
    this.#adjustCaretPositionStart = insertedChar ? e.target.selectionStart : null;
    let replacedChar = this.#selectedText?.selected;
    let valueArray = value.split('');

    if (replacedChar) {
      // handle deletion or replacement of selected text
      return this.#handleReplacement(valueArray);
    }
    if (this.#deletedChar) {
      // handle deletion of single char
      return this.#handleDeletion(e, valueArray);
    } 
    if (insertedChar) {
      // handle insertion of single char
      return this.#handleInsertion(e, valueArray);
    } 
    // handle appending of single char
    return this.#handleAppending(valueArray);
  }

  #handleReplacement(valueArray) {
    let selectionStart = this.#selectedText.selectionStart;
    let selectionEnd = this.#selectedText.selectionEnd;

    // browsers delete blank space before selection start on backspace when user double clicks to select text to be deleted 
    if (this.#deletedChar) {
      this.#reinsertBlankSpace(selectionStart, selectionEnd, valueArray);
    }

    this.#maskFixedCharIndexes.toReversed().forEach((fixedChar) => {

      let selectedFixedChars = fixedChar.formattedValIndex >= selectionStart && fixedChar.formattedValIndex < selectionEnd;

      // fixed char within selection and deleted, no longer present in valueArray
      if (selectedFixedChars) {
        return;
      }

      // fixed char after selection, adjust index of fixed char to account for deleted/replaced chars
      if (fixedChar.formattedValIndex >= selectionEnd) {
        if (this.#deletedChar) {
          // get new index of fixed char
          let adjustedIndex = fixedChar.formattedValIndex - (selectionEnd - selectionStart);
          return valueArray.splice(adjustedIndex, 1);
        } else {
          // get new index of fixed char, subtract 1 to account for added char within selection
          let adjustedIndex = fixedChar.formattedValIndex - (selectionEnd - selectionStart - 1);
          return valueArray.splice(adjustedIndex, 1);
        }
      }
      // fixed char before selection, no adjustment needed
      valueArray.splice(fixedChar.formattedValIndex, 1);
    });
    this.#selectedText.selected = false;
    return valueArray.join('');
  }

  #reinsertBlankSpace(selectionStart, selectionEnd, valueArray) {
    let previousFixedChar = this.#maskFixedCharIndexes.find((fixedChar) => fixedChar.formattedValIndex === selectionStart - 1);

    if (previousFixedChar && this.inputMask[previousFixedChar.maskIndex] === ' ') {
      //check to see if following fixed char is also a blank space
      let followingFixedChar = this.#maskFixedCharIndexes.find((fixedChar) => fixedChar.formattedValIndex === selectionEnd);

      if (this.inputMask[followingFixedChar.maskIndex] === ' ') {
        // if blank space located at beginning and end of selection, there should be two blank spaces in valueArray
        if (valueArray[selectionStart - 1] !== ' ' || valueArray[selectionStart] !== ' ') {
          valueArray.splice(selectionStart - 1, 0, ' ');
        }
      } else {
        // blank space may be present if user clicked and dragged to select text
        if (valueArray[selectionStart - 1] !== ' ') {
          valueArray.splice(selectionStart - 1, 0, ' ');
        }
      }
    }
    return valueArray;
  }

  #handleDeletion(e, valueArray) {
    let selectionStart = e.target.selectionStart;

    this.#maskFixedCharIndexes.toReversed().forEach((fixedChar) => {

      // fixed char deleted, no longer present in valueArray
      if (selectionStart === fixedChar.formattedValIndex) {
        return;
      }

      // deleted char before fixed char, decrease index to account for deleted char
      if (selectionStart < fixedChar.formattedValIndex) {
        return valueArray.splice(fixedChar.formattedValIndex - 1, 1);
      }

      valueArray.splice(fixedChar.formattedValIndex, 1);
    });
    return valueArray.join('');
  }

  #handleInsertion(e, valueArray) {
    let selectionStart = e.target.selectionStart;

    this.#maskFixedCharIndexes.toReversed().forEach((fixedChar) => {
      let fixedCharIndex = fixedChar.formattedValIndex;

      // inserted char at or before fixed char, increase index to account for new char
      if (selectionStart - 1 === fixedCharIndex || selectionStart <= fixedCharIndex) {
        valueArray.splice(fixedChar.formattedValIndex + 1, 1);
      } else {
        // inserted char after fixed char
        valueArray.splice(fixedChar.formattedValIndex, 1);
      }
    });
    return valueArray.join('');
  }

  #handleAppending(valueArray) {
    this.#maskFixedCharIndexes.toReversed().forEach((fixedChar) => {
      // remove fixed chars that are located in the value
      if (valueArray.length - 1 > fixedChar.formattedValIndex) {
        valueArray.splice(fixedChar.formattedValIndex, 1);
      } 
    });
    return valueArray.join('');
  }

  #applyInputMask(e) {
    // only remove mask if fixed chars are present
    this.#rawValue = this.#maskFixedCharIndexes.length ? this.#removeMask(e, this.value) : this.value;
    const mask = this.inputMask;

    // create array to store formatted result, initialized with null values
    let formattedResult = this.#initializeFormattedResult();
    const initialResultLength = formattedResult.length;

    // add fixed and meta chars to result array
    this.#populateFormattedResult(mask, formattedResult);

    // remove null values from result array
    formattedResult = formattedResult.filter(value => value !== null);

    // if last char of mask is fixed, add it to the formatted result when index is reached
    if (this.#startLastFixedChar >= 0) {
      // get index of last fixed char in the input mask
      let indexOfLastFixedChar = this.#maskFixedCharIndexes[this.#startLastFixedChar]?.formattedValIndex;

      // if following char is the ending fixed char of the input mask, add it to the formatted result. Account for temp loss of fixed char when deleted
      if (formattedResult.length === indexOfLastFixedChar) {
        this.#appendEndingFixedChars(mask, formattedResult); 
      }
    }

    // if input mask length is reached, add additional chars to the formatted result
    if (formattedResult.length === initialResultLength) {
      let additionalCharacters = this.#getAdditionalCharacters(formattedResult, mask);

      if (additionalCharacters) {
        formattedResult.push(additionalCharacters);
      }
    }

    // remove chars that exceed maxlength
    if (this.maxlength && formattedResult.length > Number(this.maxlength)) {
      formattedResult = formattedResult.slice(0, this.maxlength);
    }

    this.value = formattedResult.join('');

    // Dispatch a custom event with the formatted and raw values
    this.#dispatch('jh-input', {
      'value': this.value,
      'rawValue': this.#rawValue
    });
  }

  #initializeFormattedResult() {
    return Array(Math.max(...this.#maskFixedCharIndexes.map(fixedChar => fixedChar.formattedValIndex).concat(this.#maskMetaCharIndexes.map(metaChar => metaChar.formattedValIndex))) + 1).fill(null);
  }

  #populateFormattedResult(mask, formattedResult) {   
    // reinsert fixed chars into formatted result
    this.#maskFixedCharIndexes.forEach((fixedChar) => {
 
      // add fixed chars within the length of the total value (raw value + fixed chars)
      if (fixedChar.formattedValIndex < fixedChar.fixedCharCount + this.#rawValue.length) {
        formattedResult[fixedChar.formattedValIndex] = mask[fixedChar.maskIndex];
      } 
    });

    // reinsert meta chars into formatted result
    this.#maskMetaCharIndexes.forEach(metaChar => {
      // add chars that are within the length of the total value (raw value + fixed chars)
      if (metaChar.formattedValIndex < metaChar.fixedCharCount + this.#rawValue.length) {
        formattedResult[metaChar.formattedValIndex] = this.#rawValue[metaChar.formattedValIndex - metaChar.fixedCharCount];
      }
    });
  }

  #appendEndingFixedChars(mask, formattedResult) {
    let lastFixedCharMaskIndex = this.#maskFixedCharIndexes[this.#startLastFixedChar].maskIndex;

    let endMaskIndex = mask.length;

    // capture fixed characters from the input mask 
    let endingFixedChars = mask.slice(
      lastFixedCharMaskIndex,
      endMaskIndex
    );
  
    endingFixedChars.split('').forEach((char) => {
      formattedResult.push(char);
    });
  }

  #getAdditionalCharacters(formattedResult, mask) {
    if (this.#maskFixedCharIndexes.length) {
      // account for fixed chars present in the value
      return this.#rawValue.slice(formattedResult.length - this.#maskFixedCharIndexes.length);
    } 
    return this.#rawValue.slice(mask.length);
  }

  // restore caret position after input mask is applied if change to the value is within the value length
  updated(changedProperties) {
    if (this.#adjustCaretPositionStart) {
      if (changedProperties.has('value')) {
        let input = this.shadowRoot.querySelector('input');
        let selectionStart = this.#selectedText.selectionStart ? this.#selectedText.selectionStart : this.#adjustCaretPositionStart;

        input.setSelectionRange(selectionStart, selectionStart);
        this.#selectedText.selectionStart = null;
      }
    }

    // Handle slot visibility updates
    if (changedProperties.has('hideLeftSlot')) {
      this.#updateSlotVisibility(this.#leftSlot);
    }
    if (changedProperties.has('hideRightSlot')) {
      this.#updateSlotVisibility(this.#rightSlot);
    }
    if (changedProperties.has('readonly')) {
      this.#updateSlotVisibility(this.#leftSlot);
      this.#updateSlotVisibility(this.#rightSlot);
    }
  }

  #updateSlotVisibility(slot) {
    if (slot) {
      slot.classList.toggle('display-slot', this.#checkSlotContent(slot));
    }
  }

  _handleChange() {
    let payload = {
      'value': this.value,
    }

    if (this.inputMask) {
      payload.rawValue = this.#rawValue;
    }

    this.#dispatch('jh-change', payload);
  }

  _handleSelect(e) {
    const selectedString = e.target.value.substring(
      e.target.selectionStart,
      e.target.selectionEnd
    );

    // ensure selected string present before dispatching event. Can be empty due to caret positioning when user attempts to delete fixed char.
    if (selectedString) {
      this.#dispatch('jh-select', {
        selected: selectedString,
        selectionStart: e.target.selectionStart,
        selectionEnd: e.target.selectionEnd
      });
    }
  }

  _handleMaxlength() {
    this.#dispatch('jh-maxlength');
  }

  _handleClearButtonClick() {
    let previousValue = this.value;
    // clear input value
    this.value = '';
    // focus input field
    this.shadowRoot.querySelector('input').focus();
    // dispatch clear event
    this.dispatchEvent(
      new CustomEvent('jh-input:clear-button-click', {
        detail: { 
          'previousValue': previousValue 
        },
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
  }

  _handleSlotChange(e) {
    let newSlottedElement = e.target.assignedElements()[0];
    let slot = e.target;

    if (slot.name !== 'jh-input-left' && slot.name !== 'jh-input-right') {
      return;
    }
    
    let hasContent = this.#checkSlotContent(slot);
    slot.classList.toggle('display-slot', hasContent);

    // Set icon size if applicable
    if (newSlottedElement?.tagName.startsWith('JH-ICON')) {
      newSlottedElement.setAttribute('size', 'medium');
    }
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

  renderClearButton() {
    if (!this.showClearButton || !this.value || this.disabled) return null;
    return html`
      <jh-button 
        size="small" appearance="tertiary" class="clear-button" 
        accessible-label=${ifDefined(this.accessibleLabelClearButton)}
        @click=${this._handleClearButtonClick}>
        <slot name="jh-input-clear-button" slot="jh-button-icon">
          <jh-icon-circle-xmark slot="jh-button-icon" aria-hidden="true" size="medium"></jh-icon-circle-xmark>
        </slot>
      </jh-button>
    `;
  }

  _getDescribedby() {
    let describedbyString = '';

    if (this.errorText) {
      describedbyString += `jh-input-error-${this.#id}`;
    }
    if (this.helperText) {
      describedbyString += ` jh-input-helper-${this.#id}`;
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
          <p id="jh-input-helper-${this.#id}" class="helper-text">
            ${this.helperText}
          </p>
        `;
      }

      label = html`
        <label for="jh-input-${this.#id}">${this.label}${indicator}</label>
        ${helperText}
      `;
    }
    return label;
  }

  renderFooter() {
    let footer;
    let errorText;
    let charCount;

    if (this.showCharCount) {
      let valueLength = this.value ? this.value.length : 0;

      let charCountValue = `${
        this.maxlength ? `${valueLength}/${this.maxlength}` : valueLength
      }`;

      if (valueLength && valueLength === Number(this.maxlength)) {
        this._handleMaxlength();
      }

      charCount = html`
        <p class="counter" aria-hidden="true">${charCountValue}</p>
      `;
    }

    if (this.invalid && this.errorText) {
      errorText = html`
        <p id="jh-input-error-${this.#id}" class="error-text">
          ${this.errorText}
        </p>
      `;
    }

    if ((this.invalid && this.errorText) || this.showCharCount) {
      footer = html`
        <div class="footer-content">
          ${errorText}
          ${charCount}
        </div>
      `;
    }
    return footer;
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
            id="jh-input-${this.#id}"
            aria-describedby=${describedby}
            aria-invalid=${ifDefined(this.invalid ? 'true' : null)}
            aria-label=${ifDefined(
              this.accessibleLabel === '' ? null : this.accessibleLabel
            )}
            autocomplete=${ifDefined(
              this.autocomplete === '' ? null : this.autocomplete
            )}
            ?disabled=${this.disabled}
            enterkeyhint=${ifDefined(
              this.enterkeyhint === '' ? null : this.enterkeyhint
            )}
            inputmode=${ifDefined(this.inputmode === '' ? null : this.inputmode)}
            maxlength=${ifDefined(this.maxlength === '' ? null : this.maxlength)}
            minlength=${ifDefined(this.minlength === '' ? null : this.minlength)}
            name=${ifDefined(this.name === '' ? null : this.name)}
            ?readonly=${this.readonly}
            ?required=${this.required}
            type="text"
            .value=${this.value}
            @keydown=${this.inputMask ? this._handleKeydown : null}
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

  render() {
    const label = this.renderLabel();
    const input = this.renderInput();
    const footer = this.renderFooter();

    return html`
      ${label} ${input} ${footer}
    `;
  }
}

customElements.define('jh-input', JhInput);