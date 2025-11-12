// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

let id = 0;

/**
 * @cssprop --jh-checkbox-opacity-disabled - The checkbox opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-checkbox-input-border-radius - The checkbox border radius. Defaults to `--jh-border-radius-50`.
 * @cssprop --jh-checkbox-color-focus - The checkbox outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-checkbox-helper-color-text - The helper text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-checkbox-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-checkbox-input-color-background-unselected-enabled - The checkbox background-color when unselected. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-checkbox-input-color-border-unselected-enabled - The checkbox border-color when unselected. Defaults to `--jh-border-control-color`.
 * @cssprop --jh-checkbox-input-color-background-unselected-focus - The checkbox background-color when unselected and focused. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-checkbox-input-color-border-unselected-focus - The checkbox border-color when unselected and focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-input-color-background-unselected-hover - The checkbox background-color when unselected and hovered. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-checkbox-input-color-border-unselected-hover - The checkbox border-color when unselected and hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-input-color-background-unselected-active - The checkbox background-color when unselected and active. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-checkbox-input-color-border-unselected-active - The checkbox border-color when unselected and active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-checkbox-input-color-background-unselected-disabled - The  checkbox background-color when unselected and disabled. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-checkbox-input-color-border-unselected-disabled - The checkbox border-color when unselected and disabled. Defaults to `--jh-border-control-color`.
 * @cssprop --jh-checkbox-input-color-background-selected-enabled - The checkbox background-color when selected. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-input-color-border-selected-enabled - The checkbox border-color when selected. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-status-color-border-selected-enabled - The status mark color when selected. Defaults to `--jh-color-content-on-brand-enabled`.
 * @cssprop --jh-checkbox-input-color-background-selected-focus - The checkbox background-color when selected and focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-input-color-border-selected-focus - The checkbox border-color when selected and focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-status-color-border-selected-focus - The status mark color when selected and focused. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-checkbox-input-color-background-selected-hover - The checkbox background-color when selected and hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-input-color-border-selected-hover - The checkbox border-color when selected and hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-status-color-border-selected-hover - The status mark color when selected and hovered. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-checkbox-input-color-background-selected-active - The checkbox background-color when selected and active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-checkbox-input-color-border-selected-active - The checkbox border-color when selected and active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-checkbox-status-color-border-selected-active - The status mark color when selected and active. Defaults to `--jh-color-content-on-brand-active`.
 * @cssprop --jh-checkbox-input-color-background-selected-disabled - The checkbox background-color when selected and disabled. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-input-color-border-selected-disabled - The checkbox border-color when selected and disabled. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-status-color-border-selected-disabled - The status mark color when selected and disabled. Defaults to `--jh-color-content-on-brand-enabled`.
 * @cssprop --jh-checkbox-input-color-background-indeterminate-enabled - The checkbox background-color when indeterminate. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-input-color-border-indeterminate-enabled - The border-color when indeterminate checkbox. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-status-color-border-indeterminate-enabled - The status mark color when indeterminate. Defaults to `--jh-color-content-on-brand-enabled`.
 * @cssprop --jh-checkbox-input-color-background-indeterminate-focus - The checkbox background-color when indeterminate and focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-input-color-border-indeterminate-focus - The checkbox border-color when indeterminate and focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-status-color-border-indeterminate-focus - The checkbox color when indeterminate status mark when focused. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-checkbox-input-color-background-indeterminate-hover - The checkbox background-color when indeterminate and hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-input-color-border-indeterminate-hover - The checkbox border-color when indeterminate and hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-status-color-border-indeterminate-hover - The checkbox color when indeterminate status mark when hovered. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-checkbox-input-color-background-indeterminate-active - The checkbox background-color when indeterminate and active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-checkbox-input-color-border-indeterminate-active - The checkbox border-color when indeterminate and active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-checkbox-status-color-border-indeterminate-active - The checkbox color when indeterminate status mark when active. Defaults to `--jh-color-content-on-brand-active`.
 * @cssprop --jh-checkbox-input-color-background-indeterminate-disabled - The checkbox background-color when indeterminate and disabled. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-input-color-border-indeterminate-disabled - The checkbox border-color when indeterminate and disabled. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-status-color-border-indeterminate-disabled - The checkbox color when indeterminate status mark when disabled. Defaults to `--jh-color-content-on-brand-enabled`.
 *
 * @event jh-change - Dispatched when the state of the checkbox has changed.
 *
 * @customElement jh-checkbox
 */
export class JhCheckbox extends LitElement {
  static get formAssociated() {
    return true;
  }
  /** @type {?Boolean} */
  #checked;
  /** @type {?Number} */
  #id;
  /** @type {?Boolean} */
  #indeterminate;
  /** @type {ElementInternals} */
  #internals;
  /** @type {?string} */
  #value;

  static get styles() {
    return css`
      :host {
        font-family: var(--jh-font-body-regular-1-font-family);
        font-weight: var(--jh-font-body-regular-1-font-weight);
        font-size: var(--jh-font-body-regular-1-font-size);
        line-height: var(--jh-font-body-regular-1-line-height);
        display: inline-flex;
        position: relative;
      }
      input {
        width: var(--jh-dimension-500);
        height: var(--jh-dimension-500);
        position: absolute;
        opacity: 0;
        cursor: pointer;
        z-index: 2;
        box-sizing: border-box;
      }
      span {
        background-color: var(
          --jh-checkbox-input-color-background-unselected-enabled,
          var(--jh-color-container-primary-enabled)
        );
        border-width: var(--jh-border-control-width);
        border-style: var(--jh-border-control-style);
        border-color: var(
            --jh-checkbox-input-color-border-unselected-enabled,
            var(--jh-border-control-color)
          );
        border-radius: var(
          --jh-checkbox-input-border-radius,
          var(--jh-border-radius-50)
        );
        width: var(--jh-dimension-500);
        height: var(--jh-dimension-500);
        box-sizing: border-box;
        display: inline-block;
        position: relative;
      }
      span::before,
      span::after {
        content: '';
        position: absolute;
      }
      .label-container {
        margin-left: var(--jh-dimension-200);
        flex: 1;
      }
      .label-text,
      .helper-text {
        word-break: break-word;
      }
      .label-text {
        color: var(
          --jh-checkbox-label-color-text,
          var(--jh-color-content-primary-enabled)
        );
      }
      .helper-text {
        color: var(
          --jh-checkbox-helper-color-text,
          var(--jh-color-content-secondary-enabled)
        );
        font-family: var(--jh-font-helper-regular-font-family);
        font-weight: var(--jh-font-helper-regular-font-weight);
        font-size: var(--jh-font-helper-regular-font-size);
        line-height: var(--jh-font-helper-regular-line-height);
        margin: 0;
      }
      /* Unselected states */
      input:focus-visible + span {
        border-color: var(
          --jh-checkbox-input-color-border-unselected-focus,
          var(--jh-color-content-brand-hover)
        );
        background-color: var(
          --jh-checkbox-input-color-background-unselected-focus,
          var(--jh-color-container-primary-enabled)
        );
        outline-color: var(
          --jh-checkbox-color-focus,
          var(--jh-border-focus-color)
        );
        outline-style: var(--jh-border-focus-style);
        outline-width: var(--jh-border-focus-width);
        outline-offset: 1px;
      }
      input:hover + span {
        border-color: var(
          --jh-checkbox-input-color-border-unselected-hover,
          var(--jh-color-content-brand-hover)
        );
        background-color: var(
          --jh-checkbox-input-color-background-unselected-hover,
          var(--jh-color-container-primary-enabled)
        );
      }
      input:active + span {
        border-color: var(
          --jh-checkbox-input-color-border-unselected-active,
          var(--jh-color-content-brand-active)
        );
        background-color: var(
          --jh-checkbox-input-color-background-unselected-active,
          var(--jh-color-container-primary-enabled)
        );
      }

      /* selected status mark with css */
      input:checked + span::before {
        background-color: var(
          --jh-checkbox-status-color-border-selected-enabled,
          var(--jh-color-content-on-brand-enabled)
        );
        border-radius: var(--jh-border-radius-50);
        width: 12px;
        height: 2px;
        bottom: 4px;
        left: 7px;
        transform: rotate(-45deg);
        transform-origin: left bottom;
      }
      input:checked + span::after {
        background-color: var(
          --jh-checkbox-status-color-border-selected-enabled,
          var(--jh-color-content-on-brand-enabled)
        );
        border-radius: var(--jh-border-radius-50);
        bottom: 4px;
        left: 7px;
        height: 7px;
        width: 2px;
        transform: rotate(-45deg);
        transform-origin: left bottom;
      }
      /* selected states */
      input:checked + span {
        border-color: var(
          --jh-checkbox-input-color-border-selected-enabled,
          var(--jh-color-content-brand-enabled)
        );
        background-color: var(
          --jh-checkbox-input-color-background-selected-enabled,
          var(--jh-color-content-brand-enabled)
        );
      }
      input:checked:focus-visible + span {
        border-color: var(
          --jh-checkbox-input-color-border-selected-focus,
          var(--jh-color-content-brand-hover)
        );
        background-color: var(
          --jh-checkbox-input-color-background-selected-focus,
          var(--jh-color-content-brand-hover)
        );
      }
      input:checked:focus-visible + span::before,
      input:checked:focus-visible + span::after {
        background-color: var(
          --jh-checkbox-status-color-border-selected-focus,
          var(--jh-color-content-on-brand-hover)
        );
      }
      input:checked:hover + span {
        border-color: var(
          --jh-checkbox-input-color-border-selected-hover,
          var(--jh-color-content-brand-hover)
        );
        background-color: var(
          --jh-checkbox-input-color-background-selected-hover,
          var(--jh-color-content-brand-hover)
        );
      }
      input:checked:hover + span::before,
      input:checked:hover + span::after {
        background-color: var(
          --jh-checkbox-status-color-border-selected-hover,
          var(--jh-color-content-on-brand-hover)
        );
      }
      input:checked:active + span {
        border-color: var(
          --jh-checkbox-input-color-border-selected-active,
          var(--jh-color-content-brand-active)
        );
        background-color: var(
          --jh-checkbox-input-color-background-selected-active,
          var(--jh-color-content-brand-active)
        );
      }
      input:checked:active + span::before,
      input:checked:active + span::after {
        background-color: var(
          --jh-checkbox-status-color-border-selected-active,
          var(--jh-color-content-on-brand-active)
        );
      }

      /* indeterminate status mark with css */
      input:indeterminate + span::before {
        background-color: var(
          --jh-checkbox-status-color-border-indeterminate-enabled,
          var(--jh-color-content-on-brand-enabled)
        );
        border-radius: var(--jh-border-radius-50);
        width: 10px;
        height: 2px;
        top: 8px;
        left: 4px;
        transform: rotate(0deg);
      }
      input:indeterminate + span::after {
        height: 0px;
        width: 0px;
      }

      /* indeterminate states */
      input:indeterminate + span {
        border-color: var(
          --jh-checkbox-input-color-border-indeterminate-enabled,
          var(--jh-color-content-brand-enabled)
        );
        background-color: var(
          --jh-checkbox-input-color-background-indeterminate-enabled,
          var(--jh-color-content-brand-enabled)
        );
      }
      input:indeterminate:focus-visible + span {
        border-color: var(
          --jh-checkbox-input-color-border-indeterminate-focus,
          var(--jh-color-content-brand-hover)
        );
        background-color: var(
          --jh-checkbox-input-color-background-indeterminate-focus,
          var(--jh-color-content-brand-hover)
        );
      }
      input:indeterminate:focus-visible + span::before {
        background-color: var(
          --jh-checkbox-status-color-border-indeterminate-focus,
          var(--jh-color-content-on-brand-hover)
        );
      }
      input:indeterminate:hover + span {
        border-color: var(
          --jh-checkbox-input-color-border-indeterminate-hover,
          var(--jh-color-content-brand-hover)
        );
        background-color: var(
          --jh-checkbox-input-color-background-indeterminate-hover,
          var(--jh-color-content-brand-hover)
        );
      }
      input:indeterminate:hover + span::before {
        background-color: var(
          --jh-checkbox-status-color-border-indeterminate-hover,
          var(--jh-color-content-on-brand-hover)
        );
      }
      input:indeterminate:active + span {
        border-color: var(
          --jh-checkbox-input-color-border-indeterminate-active,
          var(--jh-color-content-brand-active)
        );
        background-color: var(
          --jh-checkbox-input-color-background-indeterminate-active,
          var(--jh-color-content-brand-active)
        );
      }
      input:indeterminate:active + span::before {
        background-color: var(
          --jh-checkbox-status-color-border-indeterminate-active,
          var(--jh-color-content-on-brand-active)
        );
      }
      
      /* disabled states */
      input:disabled {
        cursor: default;
      }
      input:disabled + span {
        background-color: var(
          --jh-checkbox-input-color-background-unselected-disabled,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-checkbox-input-color-border-unselected-disabled,
          var(--jh-border-control-color)
        );
      }
      :host([disabled]) {
        opacity: var(
          --jh-checkbox-opacity-disabled,
          var(--jh-opacity-disabled)
        );
      }
      input:checked:disabled + span {
        border-color: var(
          --jh-checkbox-input-color-border-selected-disabled,
          var(--jh-color-content-brand-enabled)
        );
        background-color: var(
          --jh-checkbox-input-color-background-selected-disabled,
          var(--jh-color-content-brand-enabled)
        );
      }
      input:checked:disabled + span::before,
      input:checked:disabled + span::after {
        background-color: var(
          jh-checkbox-status-color-border-selected-disabled,
          var(--jh-color-content-on-brand-enabled)
        );
      }
      input:indeterminate:disabled + span {
        border-color: var(
          --jh-checkbox-input-color-border-indeterminate-disabled,
          var(--jh-color-content-brand-enabled)
        );
        background-color: var(
          --jh-checkbox-input-color-background-indeterminate-disabled,
          var(--jh-color-content-brand-enabled)
        );
      }
      input:indeterminate:disabled + span::before {
        background-color: var(
          jh-checkbox-status-color-border-indeterminate-disabled,
          var(--jh-color-content-on-brand-enabled)
        );
      }
    `;
  }

  static get properties() {
    return {
      /** Sets the selected or 'checked' state on the checkbox. */
      checked: {
        type: Boolean,
        reflect: true,
      },
      /** Sets the indeterminate state on the checkbox. */
      indeterminate: {
        type: Boolean,
        reflect: true,
      },
      /** Disables the checkbox and prevents all user interactions. May cause checkbox to be ignored by assistive technologies(AT). */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Sets the value of the data to be collected when selected.
       */
      label: {
        type: String,
      },
      /**
       * Provides additional context or guidance for using the checkbox. For `helper-text` to be displayed, the `label` property must also be set.
       */
      helperText: {
        type: String,
        attribute: 'helper-text',
      },
      /** Sets the name of the checkbox data when submitted in a form. */
      name: {
        type: String,
      },
      /** Sets the value of the checkbox. */
      value: {
        type: String,
      },
      /**
       * Sets an `aria-label` to assist screen reader users when no visible label is present.
       */
      accessibleLabel: {
        type: String,
        attribute: 'accessible-label',
      },
    };
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
    /** @type {?boolean} */
    this.checked = false;
    /** @type {?boolean} */
    this.indeterminate = false;
    /** @type {?boolean} */
    this.disabled = false;
    /** @type {?string} */
    this.label = null;
    /** @type {?string} */
    this.helperText = null;
    /** @type {?string} */
    this.name = null;
    /** @type {?string} */
    this.value = null;
    /** @type {?string} */
    this.accessibleLabel = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.#id = id++;
  }

  /**
   * Returns the checkbox's parent form element.
   * @type {?HTMLFormElement}
   */
  get form() {
    return this.#internals.form;
  }

  /** @ignore */
  get validity() {
    return this.#internals.validity;
  }

  /** @type {?string} */
  get value() {
    return this.#value;
  }

  set value(newValue) {
    const oldValue = this.#value;
    if (newValue !== oldValue) {
      this.#value = newValue;
      this.#updateFormValue(this.#value, this.checked, this.indeterminate);
    }
    this.requestUpdate('value', oldValue);
  }

  /** @type {?Boolean} */
  get checked() {
    return this.#checked;
  }

  set checked(newValue) {
    const oldValue = this.#checked;
    if (newValue !== oldValue) {
      this.#checked = newValue;
      this.#updateFormValue(this.value, this.#checked, this.indeterminate);
    }
    this.requestUpdate('checked', oldValue);
  }

  /** @type {?Boolean} */
  get indeterminate() {
    return this.#indeterminate;
  }

  set indeterminate(newValue) {
    const oldValue = this.#indeterminate;
    if (newValue !== oldValue) {
      this.#indeterminate = newValue;
      this.#updateFormValue(this.value, this.checked, this.#indeterminate);
    }
    this.requestUpdate('indeterminate', oldValue);
  }

  #updateFormValue(value, checked, indeterminate) {
    if (!indeterminate) {
      this.#internals.setFormValue(checked ? value || 'on' : null);
    } else this.#internals.setFormValue(null);
  }

  #handleChange(e) {
    this.checked = e.target.checked;
    this.indeterminate = false;
    this.#updateFormValue(this.value, this.checked, this.indeterminate);
    const options = {
      bubbles: true,
      composed: true,
      cancelable: true,
    };
    this.dispatchEvent(new CustomEvent('jh-change', options));
  }

  render() {
    let helperText;
    let label;

    if (this.helperText) {
      helperText = html`
        <p class="helper-text" id="checkbox-helper-text-${this.#id}">
          ${this.helperText}
        </p>
      `;
    }

    if (this.label) {
      label = html`
        <div class="label-container">
          <label class="label-text" for="checkbox-label-${this.#id}">
            ${this.label}
          </label>
          ${helperText}
        </div>
      `;
    }

    return html`
      <input
        tabindex="0"
        @change=${this.#handleChange}
        type="checkbox"
        .checked=${this.checked}
        .indeterminate=${this.indeterminate}
        ?disabled=${this.disabled}
        aria-label=${ifDefined(this.accessibleLabel)}
        value=${ifDefined(this.value)}
        name=${ifDefined(this.name)}
        id=${ifDefined(this.label ? `checkbox-label-${this.#id}` : null)}
        aria-describedby=${ifDefined(
          this.helperText ? `checkbox-helper-text-${this.#id}` : null
        )}
      />
      <span aria-hidden="true"></span>
      ${label}
    `;
  }
}

customElements.define('jh-checkbox', JhCheckbox);
