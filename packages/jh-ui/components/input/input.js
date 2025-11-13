// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../button/button.js';
import '@jack-henry/jh-icons/icons-wc/icon-magnifying-glass.js';
import '@jack-henry/jh-icons/icons-wc/icon-circle-xmark.js';
import '@jack-henry/jh-icons/icons-wc/icon-eye.js';
import '@jack-henry/jh-icons/icons-wc/icon-eye-slash.js';

let id = 0;


/**
 * @cssprop --jh-input-left-icon-color-fill - The left icon fill color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-input-right-icon-color-fill - The right icon fill color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-input-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-input-placeholder-color-text - The placeholder text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-input-color-background - The input field background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-input-color-border-enabled - The input field border-color. Defaults to `--jh-color-divider-primary`.
 * @cssprop --jh-input-border-radius - The input field border radius. Defaults to `--jh-border-radius-100`.
 * @cssprop --jh-input-shadow-focus - The input field box shadow when in focus. Defaults to `--jh-shadow-focus`.
 * @cssprop --jh-input-color-border-focus - The input field border-color when in focus. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-input-color-border-hover - The input field border-color when hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-input-color-border-active - The input field border-color when active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-input-color-border-disabled - The input field border-color when disabled. Defaults to `--jh-color-divider-primary`.
 * @cssprop --jh-input-opacity-disabled - The input opacity when disabled. Defaults to `--jh-opacity-300`.
 * @cssprop --jh-input-color-border-error - The input field border-color when invalid. Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-input-size-min-height-text-area-small - The input min-height when `type="textarea"` and `size="small"`. Defaults to `--jh-size-2000`.
 * @cssprop --jh-input-size-min-height-text-area-medium - The input min-height when `type="textarea"` and `size="medium"`. Defaults to `--jh-size-2200`.
 * @cssprop --jh-input-size-min-height-text-area-large - The input min-height when `type="textarea"` and `size="large"`. Defaults to `jh-size-2400`.
 * @cssprop --jh-input-required-color-text - The required indicator color. Defaults to `jh-color-content-negative-enabled`.
 * @cssprop --jh-input-optional-color-text - The optional indicator text color. Defaults to `jh-color-content-primary-enabled`.
 * @cssprop --jh-input-helper-color-text - The helper-text text color. Defaults to `jh-color-content-secondary-enabled`.
 * @cssprop --jh-input-color-text - The value text color. Defaults to `jh-color-content-primary-enabled`.
 * @cssprop --jh-input-error-color-text - The error message text color. Defaults to `jh-color-content-negative-enabled`.
 * @cssprop --jh-input-clear-border-radius - The clear button border-radius. Defaults to `jh-button-border-radius`.
 * @cssprop --jh-input-clear-color-background-enabled - The clear button background-color. Defaults to `jh-button-color-background-tertiary-enabled`.
 * @cssprop --jh-input-clear-color-border-enabled - The clear button border-color. Defaults to `jh-button-color-border-tertiary-enabled`.
 * @cssprop --jh-input-clear-icon-color-fill-enabled - The clear button icon fill color. Defaults to `jh-button-icon-color-fill-tertiary-enabled`.
 * @cssprop --jh-input-clear-color-background-focus - The clear button background-color when in focus. Defaults to
 * `jh-button-color-background-tertiary-focus`.
 * @cssprop --jh-input-clear-color-border-focus - The clear button border-color when in focus. Defaults to `jh-button-color-border-tertiary-focus`.
 * @cssprop --jh-input-clear-shadow-focus - The clear button box-shadow when in focus. Defaults to `jh-button-shadow-focus`.
 * @cssprop --jh-input-clear-icon-color-fill-focus - The clear button icon fill color when in focus. Defaults to
 * `jh-button-icon-color-fill-tertiary-focus`.
 * @cssprop --jh-input-clear-color-background-hover - The clear button background-color when hovered. Defaults to
 * `jh-button-color-background-tertiary-hover`.
 * @cssprop --jh-input-clear-color-border-hover - The clear button border-color when hovered. Defaults to `jh-button-color-border-tertiary-hover`.
 * @cssprop --jh-input-clear-icon-color-fill-hover - The clear button icon fill color when hovered. Defaults to
 * `jh-button-icon-color-fill-tertiary-hover`.
 * @cssprop --jh-input-clear-color-background-active - The clear button background-color when active. Defaults to
 * `jh-button-color-background-tertiary-active`.
 * @cssprop --jh-input-clear-color-border-active - The clear button border-color when active. Defaults to `jh-button-color-border-tertiary-active`.
 * @cssprop --jh-input-clear-icon-color-fill-active - The clear button icon fill color when active. Defaults to
 * `jh-button-icon-color-fill-tertiary-active`.
 * @cssprop --jh-input-clear-color-background-disabled - The clear button background-color when disabled. Defaults to `jh-button-color-background-tertiary-disabled`.
 * @cssprop --jh-input-clear-color-border-disabled - The clear button border-color when disabled. Defaults to `jh-button-color-border-tertiary-disabled`.
 * @cssprop --jh-input-clear-icon-color-fill-disabled - The clear button icon fill color when disabled. Defaults to
 * `jh-button-icon-color-fill-tertiary-disabled`.
 * @cssprop --jh-input-clear-opacity-disabled - The clear button container when disabled. Defaults to `jh-button-opacity-disabled`.
 *
 * @event jh-clear - Dispatched when the clear button is activated.
 * @event jh-select - Dispatched when text has been selected. Event payload includes the selected text and can be accessed via e.detail.selected.
 * @event jh-change - Dispatched when the value of the input has changed and input loses focus.
 *
 * @slot jh-input-left - Use to insert an icon or button to the left of the default slot. Not supported by `type="textarea"`.
 * @slot jh-input-right - Use to insert an icon or button to the right of the default slot. Not supported by `type="textarea"`.
 * @slot jh-input-password-visible - Use to insert a custom icon to the right of the default slot when input `type="password"` and `password-visible` is true.
 * @slot jh-input-password-hidden - Use to insert a custom icon to the right of the default slot when input `type="password"` and `password-visible` is false.
 * @slot jh-input-clear-button -  Use to insert a clear button icon, present when `show-clear-button` is true and input is neither
 * `disabled` or in `readonly` state. Not supported by `type="textarea"`.
 *
 * @customElement jh-input
 */
export class JhInput extends LitElement {
  static get formAssociated() {
    return true;
  }
  /** @type {ElementInternals} */
  #internals;
  /** @type {?string} */
  #value;
  /** @type {?Number} */
  #id;

  static get styles() {
    return css`
      :host {
        font: var(--jh-font-helper-regular);
        display: inline-block;
        width: 100%;
        --icon-wrapper: var(--jh-size-800);
        --padding-no-slotted-content: var(--jh-space-400);
        --padding-with-slotted-content: calc(
          var(--jh-space-200) + var(--jh-space-400) + var(--jh-size-800)
        );
        --padding-double-slotted-content: calc(
          var(--jh-space-200) + var(--jh-space-200) + var(--jh-space-400) +
            var(--jh-size-800) + var(--jh-size-800)
        );
        --textarea-small-padding: calc(var(--jh-size-200) + var(--jh-size-50));
        --textarea-medium-padding: calc(var(--jh-size-300) + var(--jh-size-50));
        --textarea-large-padding: calc(var(--jh-size-400) + var(--jh-size-50));
        --set-icon-size: var(--jh-size-600);
      }
      label {
        color: var(
          --jh-input-label-color-text,
          var(--jh-color-content-primary-enabled)
        );
      }
      .helper-text {
        color: var(
          --jh-input-helper-color-text,
          var(--jh-color-content-secondary-enabled)
        );
        margin: 0;
      }
      label,
      .helper-text,
      .error-text {
        word-break: normal;
        overflow-wrap: anywhere;
      }
      .input-container {
        position: relative;
      }
      textarea {
        display: block;
      }
      :host([label]) .input-container,
      :host([label]) textarea {
        margin-top: var(--jh-space-200);
      }
      input,
      textarea,
      :host([hide-left-slot][hide-right-slot]) input {
        background-color: var(
          --jh-input-color-background,
          var(--jh-color-container-primary-enabled)
        );
        border: 1px solid
          var(--jh-input-color-border-enabled, var(--jh-color-divider-primary));
        border-radius: var(
          --jh-input-border-radius,
          var(--jh-border-radius-100)
        );
        color: var(
          --jh-input-color-text,
          var(--jh-color-content-primary-enabled)
        );
        font: var(--jh-font-body-regular-1);
        box-sizing: border-box;
      }
      input {
        width: 100%;
      }
      /* Sizes */
      :host([size='small']) input {
        height: var(--jh-size-1000);
      }
      :host([size='small']) textarea {
        min-height: var(
          --jh-input-size-min-height-text-area-small,
          var(--jh-size-2000)
        );
        padding: var(--textarea-small-padding, var(--jh-space-400));
        scroll-padding: var(--textarea-small-padding, var(--jh-space-400));
      }
      :host([size='medium']) input {
        height: var(--jh-size-1200);
      }
      :host([size='medium']) textarea {
        min-height: var(
          --jh-input-size-min-height-text-area-medium,
          var(--jh-size-2200)
        );
        padding: var(--textarea-medium-padding, var(--jh-space-400));
        scroll-padding: var(--textarea-medium-padding, var(--jh-space-400));
      }
      :host([size='large']) input {
        height: var(--jh-size-1400);
      }
      :host([size='large']) textarea {
        min-height: var(
          --jh-input-size-min-height-text-area-large,
          var(--jh-size-2400)
        );
        padding: var(--textarea-large-padding, var(--jh-space-400));
        scroll-padding: var(--textarea-large-padding, var(--jh-space-400));
      }
      /* Input padding */
      input,
      :host([hide-left-slot]) input,
      :host([type='search'][hide-left-slot]) input,
      .input-right-slot {
        padding-left: var(--padding-no-slotted-content);
      }
      input,
      :host([type='password'][hide-right-slot]) input:placeholder-shown,
      :host([type="password"][hide-right-slot]) input {
        padding-right: var(--padding-no-slotted-content);
      }
      .input-right-slot,
      :host([type='password']) input,
      :host([type='password']) input:placeholder-shown {
        padding-right: var(--padding-with-slotted-content);
      }
      :host([type='search']) input,
      .input-left-slot {
        padding-left: var(--padding-with-slotted-content);
      }
      .input-both-slots {
        padding: 0 var(--padding-with-slotted-content);
      }
      input::placeholder,
      textarea::placeholder {
        color: var(
          --jh-input-placeholder-color-text,
          var(--jh-color-content-secondary-enabled)
        );
      }
      .error-text {
        color: var(
          --jh-input-error-color-text,
          var(--jh-color-content-negative-enabled)
        );
        margin: var(--jh-space-200) 0 0 0;
      }
      /* Textarea */
      :host(:not([cols])) textarea {
        min-width: 100%;
      }
      :host([rows]) textarea {
        min-height: 0;
      }
      /* Textarea Resize/autoGrow */
      :host([auto-grow]) textarea,
      :host([no-resize]) textarea {
        resize: none;
        height: 100%;
      }
      :host([auto-grow]) textarea::-webkit-scrollbar {
        display: none;
      }
      :host([auto-grow]) textarea {
        overflow: hidden;
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .left-slot,
      .right-slot {
        --jh-icon-size-extra-small: var(--set-icon-size);
        --jh-icon-size-small: var(--set-icon-size);
        --jh-icon-size-medium: var(--set-icon-size);
        --jh-icon-size-large: var(--set-icon-size);
        --jh-icon-size-extra-large: var(--set-icon-size);
      }
      /* icon positioning */
      .left-slot,
      .right-slot,
      .clear-button {
        height: var(--icon-wrapper);
        width: var(--icon-wrapper);
        position: absolute;
      }
      :host([size='small']) .left-slot,
      :host([size='small']) .right-slot,
      :host([size='small']) .clear-button {
        top: 4px;
      }
      :host([size='medium']) .left-slot,
      :host([size='medium']) .right-slot,
      :host([size='medium']) .clear-button {
        top: 8px;
      }
      :host([size='large']) .left-slot,
      :host([size='large']) .right-slot,
      :host([size='large']) .clear-button {
        top: 12px;
      }
      .left-slot {
        --jh-icon-color-fill: var(
          --jh-input-left-icon-color-fill,
          var(--jh-color-content-secondary-enabled)
        );
        --jh-button-size: var(--jh-size-800);
        left: var(--jh-space-400);
      }
      .right-slot {
        --jh-icon-color-fill: var(
          --jh-input-right-icon-color-fill,
          var(--jh-color-content-secondary-enabled)
        );
        --jh-button-size: var(--jh-size-800);
        right: var(--jh-space-400);
      }
      /* remove unused left and right icon styles */
      .left-slot,
      .right-slot {
        display: none;
      }
      .clear-button,
      :host([type='search']) .left-slot,
      :host([type='password']) .right-slot,
      .input-left-slot ~ .left-slot,
      .input-both-slots ~ .left-slot,
      .input-both-slots ~ .right-slot,
      .input-right-slot ~ .right-slot {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .clear-button,
      :host([type='password'][hide-right-slot]) .clear-button,
      :host([hide-right-slot]) .clear-button {
        right: var(--jh-space-400);
      }
      :host([type='password']) .clear-button,
      .input-right-slot ~ .clear-button,
      .input-both-slots ~ .clear-button {
        right: calc(
          var(--jh-space-200) + var(--jh-space-400) + var(--jh-size-800)
        );
      }
      /* Clear button icon styles */
      .clear-button {
        --jh-button-size: var(--jh-size-800);
        --jh-button-border-radius: var(--jh-input-clear-border-radius);
        --jh-button-color-background-tertiary-enabled: var(
          --jh-input-clear-color-background-enabled
        );
        --jh-button-color-border-tertiary-enabled: var(
          --jh-input-clear-color-border-enabled
        );
        --jh-button-icon-color-fill-tertiary-enabled: var(
          --jh-input-clear-icon-color-fill-enabled
        );
        --jh-button-color-background-tertiary-focus: var(
          --jh-input-clear-color-background-focus
        );
        --jh-button-color-border-tertiary-focus: var(
          --jh-input-clear-color-border-focus
        );
        --jh-button-shadow-focus: var(--jh-input-clear-shadow-focus);
        --jh-button-icon-color-fill-tertiary-focus: var(
          --jh-input-clear-icon-color-fill-focus
        );
        --jh-button-color-background-tertiary-hover: var(
          --jh-input-clear-color-background-hover
        );
        --jh-button-color-border-tertiary-hover: var(
          --jh-input-clear-color-border-hover
        );
        --jh-button-icon-color-fill-tertiary-hover: var(
          --jh-input-clear-icon-color-fill-hover
        );
        --jh-button-color-background-tertiary-active: var(
          --jh-input-clear-color-background-active
        );
        --jh-button-color-border-tertiary-active: var(
          --jh-input-clear-color-border-active
        );
        --jh-button-icon-color-fill-tertiary-active: var(
          --jh-input-clear-icon-color-fill-active
        );
        --jh-button-color-background-tertiary-disabled: var(
          --jh-input-clear-color-background-disabled
        );
        --jh-button-color-border-tertiary-disabled: var(
          --jh-input-clear-color-border-disabled
        );
        --jh-button-opacity-disabled: var(--jh-input-clear-opacity-disabled);
        --jh-button-icon-color-fill-tertiary-disabled: var(
          --jh-input-clear-icon-color-fill-disabled
        );
      }
      .hide-clear-button {
        display: none;
      }
      /* show-clear-button input padding  */
      :host([show-clear-button][type='password'][hide-right-slot]) input:placeholder-shown,
      :host([show-clear-button]) input:placeholder-shown {
        padding-right: var(--padding-no-slotted-content);
      }
      :host([show-clear-button]) input,
      :host([show-clear-button][type='password'][hide-right-slot]) input,
      :host([show-clear-button][type='password']) input:placeholder-shown,
      :host([show-clear-button]) input:placeholder-shown.input-right-slot,
      :host([show-clear-button]) input:placeholder-shown.input-both-slots {
        padding-right: var(--padding-with-slotted-content);
      }
      :host([show-clear-button][type='password']) input,
      :host([show-clear-button]) .input-right-slot,
      :host([show-clear-button]) .input-both-slots {
        padding-right: var(--padding-double-slotted-content);
      }
      /* Input States */
      input:active,
      textarea:active {
        border-color: var(
          --jh-input-color-border-active,
          var(--jh-color-content-brand-active)
        );
      }
      :host([disabled]) {
        opacity: var(--jh-input-opacity-disabled, var(--jh-opacity-300));
      }
      :host([disabled]) input,
      :host([disabled]) textarea {
        border-color: var(
          --jh-input-color-border-disabled,
          var(--jh-color-divider-primary)
        );
      }
      input:focus-visible,
      textarea:focus-visible {
        box-shadow: var(--jh-input-shadow-focus, var(--jh-shadow-focus));
        border-color: var(
          --jh-input-color-border-focus,
          var(--jh-color-content-brand-hover)
        );
      }
      input:focus-visible,
      textarea:focus-visible {
        outline: none;
      }
      input:hover,
      textarea:hover {
        border-color: var(
          --jh-input-color-border-hover,
          var(--jh-color-content-brand-hover)
        );
      }
      :host([invalid]) input,
      :host([invalid]) textarea {
        border-color: var(
          --jh-input-color-border-error,
          var(--jh-color-content-negative-enabled)
        );
      }
      :host([invalid]) input:focus-visible,
      :host([invalid]) textarea:focus-visible {
        box-shadow: none;
        outline: none;
      }
      /* readonly styles */
      :host([readonly]) input,
      :host([readonly]) textarea,
      :host([readonly][type="search"][hide-left-slot]) input,
      :host([type="password"][readonly]) input, 
      :host([type="password"][readonly]) input:placeholder-shown,
      :host([show-clear-button][readonly]) input:placeholder-shown {
        height: auto;
        background-color: transparent;
        border: none;
        padding-left: 0;
        padding-right: 0;
      }
      :host([readonly]) textarea {
        padding-top: 0;
      }
      /* Optional/Required/Show-indicator */
      :host([show-indicator]) span {
        color: var(
          --jh-input-optional-color-text,
          var(--jh-color-content-primary-enabled)
        );
      }
      :host([show-indicator][required]) span {
        color: var(
          --jh-input-required-color-text,
          var(--jh-color-content-negative-enabled)
        );
      }
      /* remove native input browser styles */
      input::-webkit-search-decoration,
      input::-webkit-search-cancel-button,
      input::-webkit-search-results-button,
      input::-webkit-search-results-decoration {
        display: none;
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      ::-ms-reveal {
        display: none;
      }
      /* Remove chrome autocomplete input styles */
      input:-webkit-autofill {
        transition: background-color 5000s ease-in-out 0s;
      }
    `;
  }

  static get properties() {
    return {
      /** Sets an `aria-label` on the clear button to assist screen reader users. Indicates that clicking on the button will clear the input field. */
      accessibleLabelClearButton: {
        type: String,
        attribute: 'accessible-label-clear-button',
      },
      /** Sets an `aria-label` on the input field to assist screen reader users when no visible label is present. */
      accessibleLabelInput: {
        type: String,
        attribute: 'accessible-label-input',
      },
      /**
       * Sets an `aria-label` on the button encapsulating the `jh-input-password-visible` slot to assist screen reader users. Present when input `type="password"` and `password-visible` is false. Indicates that
       * clicking on the button will result in a masked password.
       */
      accessibleLabelHidePassword: {
        type: String,
        attribute: 'accessible-label-hide-password',
      },
      /** Sets an `aria-label` on the button encapsulating `jh-input-password-hidden` slot to assist screen reader users. Present when input `type="password"` and `password-visible` is true. Indicates that
       * clicking on the button will result in an unmasked password.
       */
      accessibleLabelShowPassword: {
        type: String,
        attribute: 'accessible-label-show-password',
      },
      /**
       * Determines whether the browser can provide assistance in filling out the input value and what type of information is expected.
       * This property will override any autocomplete attribute present on the input's parent form
       * element.
       *
       * [Visit MDN for information on supported autocomplete values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
       */
      autocomplete: {
        type: String,
      },
      /**
       * Enables the input height to grow automatically to accomodate user input when `type="textarea"`.
       * `auto-grow` will also remove the textarea's native resize capability.
       */
      autoGrow: {
        type: Boolean,
        attribute: 'auto-grow',
        reflect: true,
      },
      /** Sets the width of input when `type=”textarea”`.  */
      cols: {
        type: String,
      },
      /** Disables the input and prevents all user interactions. May cause the input to be ignored by assistive technologies (AT). Removes the clear button and password show/hide buttons if set. */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /** Specifies which action label or icon to present for the enter key on virtual keyboards.
       *
       * [Visit MDN for information on supported enterkeyhint values](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint)
       */
      enterkeyhint: {
        type: String,
      },
      /** Text to be displayed when input has failed validation and `invalid` is true. */
      errorText: {
        type: String,
        attribute: 'error-text',
      },
      /** Provides additional context or guidance for using the input. For `helper-text` to be displayed, the `label` property must also be set. */
      helperText: {
        type: String,
        attribute: 'helper-text',
        reflect: true,
      },
      /** Hides the left slot from input. */
      hideLeftSlot: {
        type: Boolean,
        attribute: 'hide-left-slot',
        reflect: true,
      },
      /** Unmasks password when input `type="password"`. */
      passwordVisible: {
        type: Boolean,
        attribute: 'password-visible',
      },
      /** Hides the right slot from input. */
      hideRightSlot: {
        type: Boolean,
        attribute: 'hide-right-slot',
        reflect: true,
      },
      /** Indicates expected input value type and allows for browsers to display appropriate virtual keyboard.
       *
       * [Visit MDN for information on supported inputmode values](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
       */
      inputmode: {
        type: String,
      },
      /** Sets an `aria-invalid` attribute on input to indicate the value supplied was invalid. Also displays `error-text` and error state styling when set. */
      invalid: {
        type: Boolean,
        reflect: true,
      },
      /** Identifies what data should be entered into the input. */
      label: {
        type: String,
      },
      /** Sets the maximum number of characters a user can enter into the field. */
      maxlength: {
        type: String,
      },
      /** Sets the minimum number of characters a user can enter into the field. */
      minlength: {
        type: String,
      },
      /** Sets a name for the input control. */
      name: {
        type: String,
      },
      /** Removes native resize capability when input `type=”textarea”`. */
      noResize: {
        type: Boolean,
        attribute: 'no-resize',
        reflect: true,
      },
      /** Sets placeholder text. */
      placeholder: {
        type: String,
      },
      /** Prevents users from changing the value of input. Removes all slotted content. */
      readonly: {
        type: Boolean,
        reflect: true,
      },
      /** Indicates a value is required. */
      required: {
        type: Boolean,
        reflect: true,
      },
      /** The number of visible text lines when `type=”textarea”`. */
      rows: {
        type: String,
      },
      /** Displays a clear button once a value is set; when activated deletes input value. */
      showClearButton: {
        type: Boolean,
        attribute: 'show-clear-button',
        reflect: true,
      },
      /** Adds a visual indicator next to the label. Indicates that a value is optional(by default) or required if the `required`
       * property is also set. */
      showIndicator: {
        type: Boolean,
        attribute: 'show-indicator',
        reflect: true,
      },
      /** Sets the size of the input field. */
      size: {
        type: String,
        reflect: true,
      },
      /** Defines whether to enable browser spell checking. */
      spellcheck: {
        type: String,
      },
      /** Sets type of input control. */
      type: {
        type: String,
        reflect: true,
      },
      /** Sets the value of the input. */
      value: {
        type: String,
      },
      /** Specifies how text should be wrapped when submitted in a form and input `type="textarea"`. */
      wrap: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
    /** @type {?string} */
    this.accessibleLabelInput = null;
    /** @type {?string} */
    this.accessibleLabelClearButton = null;
    /** @type {?string} */
    this.accessibleLabelHidePassword = null;
    /** @type {?string} */
    this.accessibleLabelShowPassword = null;
    /** @type {?string} */
    this.autocomplete = null;
    /** @type {boolean} */
    this.autoGrow = false;
    /** @type {?string} */
    this.cols = null;
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
    this.passwordVisible = false;
    /** @type {boolean} */
    this.hideRightSlot = false;
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
    this.noResize = false;
    /** @type {?string} */
    this.placeholder = null;
    /** @type {boolean} */
    this.readonly = false;
    /** @type {boolean} */
    this.required = false;
    /** @type {?string} */
    this.rows = null;
    /** @type {boolean} */
    this.showClearButton = false;
    /** @type {boolean} */
    this.showIndicator = false;
    /** @type {'small'|'medium'|'large'} */
    this.size = 'medium';
    /** @type {'true'|'false'} */
    this.spellcheck = null;
    /** @type {'text'|'search'|'password'|'email'|'tel'|'url'|'textarea'} */
    this.type = 'text';
    /** @type {?string} */
    this.value = null;
    /** @type {'hard'|'soft'} */
    this.wrap = null;
  }

  /** @ignore */
  get form() {
    return this.#internals.form;
  }

  /** @ignore */
  get validity() {
    return this.#internals.validity;
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

  connectedCallback() {
    super.connectedCallback();
    this.#id = id++;
  }

  // clear input value, remove clear button, return focus to input, and dispatch custom event
  #clearInputValue() {
    this.value = null;
    this.shadowRoot.querySelector('input').focus();
    this.#dispatch('jh-clear');
  }

  // shared custom event dispatch for jh-clear and jh-change
  #dispatch(name) {
    this.dispatchEvent(
      new CustomEvent(name, {
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
  }

  // toggle show/hide password when type='password' and input is not disabled or readonly
  #togglePassword() {
    if (!this.readonly && !this.disabled) {
      this.passwordVisible = !this.passwordVisible;
    }
  }

  // determine which slots have user slotted content and call #addClass method
  #handleSlotChange() {
    let leftSlottedItem = false;
    let rightSlottedItem = false;

    for (const child of this.children) {
      if (child.slot === 'jh-input-left') {
        if (child.assignedSlot !== null) {
          leftSlottedItem = true;
        }
      } else if (
        child.slot === 'jh-input-right' ||
        child.slot === 'jh-input-password-visible' ||
        child.slot === 'jh-input-password-hidden'
      ) {
        if (child.assignedSlot !== null) {
          rightSlottedItem = true;
        }
      }
    }
    this.#addClass(leftSlottedItem, rightSlottedItem);
  }

  // adds class to input based on location of slotted items
  #addClass(leftSlottedItem, rightSlottedItem) {
    let inputClassName;

    const inputEl = this.shadowRoot.querySelector('input');

    if (leftSlottedItem && rightSlottedItem) {
      inputClassName = 'input-both-slots';
    } else if (leftSlottedItem) {
      inputClassName = 'input-left-slot';
    } else if (rightSlottedItem) {
      inputClassName = 'input-right-slot';
    }

    if (inputClassName) {
      // if current class exists, remove class and add new class
      if (inputEl.className) {
        inputEl.classList.remove(inputEl.className);
      }
      inputEl.classList.add(inputClassName);
    } else {
      inputEl.classList.remove(inputEl.className);
    }
  }

  // auto grow textarea
  #autoGrowTextarea() {
    let textarea = this.shadowRoot.querySelector('textarea');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  #handleChange() {
    this.#dispatch('jh-change');
  }

  // capture input value. Calls autoGrowTextarea if type='textarea' and auto-grow is true
  #handleInput(e) {
    this.value = e.target.value;

    if (this.type === 'textarea' && this.autoGrow) {
      this.#autoGrowTextarea();
    }
  }

  #handleSelect(e) {
    const selectedString = e.target.value.substring(
      e.target.selectionStart,
      e.target.selectionEnd
    );
    this.dispatchEvent(
      new CustomEvent('jh-select', {
        detail: {
          selected: selectedString,
        },
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
  }

  #getLeftSlot() {
    return html`
      <slot
        class="left-slot"
        name="jh-input-left"
        @slotchange=${this.#handleSlotChange}
        >${this.type === 'search'
          ? html`
              <jh-icon-magnifying-glass aria-hidden="true" size="small"></jh-icon-magnifying-glass>
            `
          : null}
      </slot>
    `;
  }

  #getClearBtn() {
    let hideClearBtnClass = this.value ? null : 'hide-clear-button';

    return html`
      <jh-button size="small" appearance="tertiary" class="clear-button ${hideClearBtnClass}" 
      accessible-label=${ifDefined(this.accessibleLabelClearButton)} 
      ?disabled=${this.disabled || this.readonly} 
      @click=${this.#clearInputValue}
      >
        <slot name="jh-input-clear-button" slot="jh-button-icon">
          <jh-icon-circle-xmark slot="jh-button-icon" aria-hidden="true" size="small"></jh-icon-circle-xmark>
        </slot>
      </jh-button>
    `;
  }

  #getRightSlot() {
    if (this.type === 'password') {
      let accessibleLabel = this.passwordVisible
        ? this.accessibleLabelHidePassword
        : this.accessibleLabelShowPassword;

      return html`
        <jh-button
          size="small"
          class="right-slot"
          appearance="tertiary"
          ?disabled=${this.disabled || this.readonly}
          accessible-label=${ifDefined(accessibleLabel)}
          @click=${this.#togglePassword}
        >
          ${this.passwordVisible
            ? html`
                <slot
                  name="jh-input-password-visible"
                  slot="jh-button-icon"
                  @slotchange=${this.#handleSlotChange}
                >
                  <jh-icon-eye-slash
                    slot="jh-button-icon"
                    aria-hidden="true"
                    size="small"
                  ></jh-icon-eye-slash>
                </slot>
              `
            : html`
                <slot
                  name="jh-input-password-hidden"
                  slot="jh-button-icon"
                  @slotchange=${this.#handleSlotChange}
                >
                  <jh-icon-eye
                    slot="jh-button-icon"
                    aria-hidden="true"
                    size="small"
                  ></jh-icon-eye>
                </slot>
              `}
        </jh-button>
      `;
    } else {
      return html`
        <slot
          class="right-slot"
          name="jh-input-right"
          @slotchange=${this.#handleSlotChange}
        ></slot>
      `;
    }
  }

  #getSlots() {
    if (this.readonly) {
      return;
    }

    let displayClearBtn =
      this.showClearButton && !this.readonly && !this.disabled;
    const leftIcon = this.hideLeftSlot ? null : this.#getLeftSlot();
    const clearBtn = displayClearBtn ? this.#getClearBtn() : null;
    let rightIcon;

    if (this.hideRightSlot || (this.type === 'password' && this.disabled)) {
      rightIcon = null;
    } else {
      rightIcon = this.#getRightSlot();
    }
    return html`${leftIcon}${clearBtn}${rightIcon}`;
  }

  #getDescribedby() {
    if (this.label && this.helperText && this.errorText) {
      return `jh-input-error-${this.#id} jh-input-desc-${this.#id}`;
    } else if (this.label && this.helperText) {
      return `jh-input-desc-${this.#id}`;
    } else if (this.invalid && this.errorText) {
      return `jh-input-error-${this.#id}`;
    }
  }

  render() {
    const supportedInputTypes = ['email', 'password', 'search', 'tel', 'text', 'textarea', 'url'];
    let label;
    let input;
    let indicator;
    let helperText;
    let errorText;
    let inputType;
    let describedby =
      (this.label && this.helperText) || (this.invalid && this.errorText)
        ? this.#getDescribedby()
        : null;

    if (this.showIndicator) {
      if (this.required) {
        indicator = html`<span class="indicator" aria-hidden="true"> *</span>`;
      } else {
        indicator = html`<span class="indicator"> (optional)</span>`;
      }
    }

    if (this.helperText) {
      helperText = html`
        <p id="jh-input-desc-${this.#id}" class="helper-text">
          ${this.helperText}
        </p>
      `;
    }

    if (this.label) {
      label = html`
        <label for="jh-input-${this.#id}"> ${this.label}${indicator} </label>
        ${helperText}
      `;
    }

    if (this.invalid && this.errorText) {
      errorText = html`
        <div id="jh-input-error-${this.#id}" class="error-text">
          ${this.errorText}
        </div>
      `;
    }

    if (supportedInputTypes.includes(this.type)) {
      if (this.type === 'password' && this.passwordVisible) {
        inputType = 'text';
      } else {
        inputType = this.type;
      }
    }

    if (this.type === 'textarea') {
      input = html`
        <textarea
          id="jh-input-${this.#id}"
          aria-describedby=${ifDefined(describedby)}
          aria-invalid=${ifDefined(this.invalid ? 'true' : null)}
          aria-label=${ifDefined(
            this.accessibleLabelInput === '' ? null : this.accessibleLabelInput
          )}
          autocomplete=${ifDefined(
            this.autocomplete === '' ? null : this.autocomplete
          )}
          ?disabled=${this.disabled}
          inputmode=${ifDefined(this.inputmode === '' ? null : this.inputmode)}
          ?invalid=${this.invalid}
          maxlength=${ifDefined(this.maxlength === '' ? null : this.maxlength)}
          minlength=${ifDefined(this.minlength === '' ? null : this.minlength)}
          name=${ifDefined(this.name === '' ? null : this.name)}
          placeholder=${ifDefined(
            this.placeholder === '' ? null : this.placeholder
          )}
          ?readonly=${this.readonly}
          ?required=${this.required}
          spellcheck=${ifDefined(
            this.spellcheck === '' ? null : this.spellcheck
          )}
          .value=${this.value}
          @change=${this.#handleChange}
          @input=${this.#handleInput}
          @select=${this.#handleSelect}
          cols=${ifDefined(this.cols === '' ? null : this.cols)}
          rows=${ifDefined(this.rows === '' ? null : this.rows)}
          wrap=${ifDefined(this.wrap === '' ? null : this.wrap)}
        ></textarea>
      `;
    } else {
      input = html`
        <div class="input-container">
          <input
            id="jh-input-${this.#id}"
            aria-describedby=${ifDefined(describedby)}
            aria-invalid=${ifDefined(this.invalid ? 'true' : null)}
            aria-label=${ifDefined(
              this.accessibleLabelInput === ''
                ? null
                : this.accessibleLabelInput
            )}
            autocomplete=${ifDefined(
              this.autocomplete === '' ? null : this.autocomplete
            )}
            ?disabled=${this.disabled}
            inputmode=${ifDefined(
              this.inputmode === '' ? null : this.inputmode
            )}
            ?invalid=${this.invalid}
            maxlength=${ifDefined(
              this.maxlength === '' ? null : this.maxlength
            )}
            minlength=${ifDefined(
              this.minlength === '' ? null : this.minlength
            )}
            name=${ifDefined(this.name === '' ? null : this.name)}
            placeholder=${ifDefined(
              this.placeholder === '' ? null : this.placeholder
            )}
            ?readonly=${this.readonly}
            ?required=${this.required}
            spellcheck=${ifDefined(
              this.spellcheck === '' ? null : this.spellcheck
            )}
            .value=${this.value}
            @change=${this.#handleChange}
            @input=${this.#handleInput}
            @select=${this.#handleSelect}
            type=${ifDefined(inputType)}
          />${this.#getSlots()}
        </div>
      `;
    }

    return html` ${label} ${input} ${errorText} `;
  }
}

customElements.define('jh-input', JhInput);
