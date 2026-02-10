// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../menu/menu.js';
import '../list-item/list-item.js';
import '@jack-henry/jh-icons/icons-wc/icon-chevron-down-small.js';
import '@jack-henry/jh-icons/icons-wc/icon-chevron-up-small.js';

let id = 0;

/**
 * A select component that allows users to choose one or more options from a dropdown list.
 * 
 * @cssprop --jh-select-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-select-field-color-background - The select field background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-select-field-color-border-enabled - The select field border-color. Defaults to `--jh-border-control-color`.
 * @cssprop --jh-select-field-border-radius - The select field border radius. Defaults to `--jh-border-radius-100`.
 * @cssprop --jh-select-color-focus - The select field outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-select-field-color-border-focus - The select field border-color when in focus. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-select-field-color-border-hover - The select field border-color when hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-select-field-color-border-active - The select field border-color when active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-select-field-color-border-disabled - The select field border-color when disabled. Defaults to `--jh-border-control-color`.
 * @cssprop --jh-select-opacity-disabled - The select opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-select-field-color-border-error - The select field border-color when invalid. Defaults to `--jh-border-error-color`.
 * @cssprop --jh-select-required-color-text - The required indicator color. Defaults to `jh-color-content-negative-enabled`.
 * @cssprop --jh-select-optional-color-text - The optional indicator text color. Defaults to `jh-color-content-primary-enabled`.
 * @cssprop --jh-select-helper-color-text - The helper-text text color. Defaults to `jh-color-content-secondary-enabled`.
 * @cssprop --jh-select-value-color-text - The value text color. Defaults to `jh-color-content-primary-enabled`.
 * @cssprop --jh-select-error-color-text - The error message text color. Defaults to `jh-color-content-negative-enabled`.
 * @cssprop --jh-select-menu-max-height - The maximum height of the dropdown menu. Defaults to `500px`.
 * 
 * @event jh-select:change - Dispatched when the selected value changes. Event payload includes the value and label(s). For single select: `e.detail.value` (string) and `e.detail.label` (string). For multiple select: `e.detail.value` (array) and `e.detail.labels` (array).
 * @event jh-select:open - Dispatched when the dropdown menu opens.
 * @event jh-select:close - Dispatched when the dropdown menu closes.
 * 
 * @customElement jh-select
 */
export class JhSelect extends LitElement {
  static get formAssociated() {
    return true;
  }

  /** @type {ElementInternals} */
  #internals;
  /** @type {?number} */
  #id;
  /** @type {string|string[]|null} */
  #value;
  /** @type {number} */
  #focusedIndex = -1;
  /** @type {number} */
  #lastSelectedIndex = -1;

  static get styles() {
    return css`
      :host {
        font-family: var(--jh-font-helper-regular-font-family);
        font-weight: var(--jh-font-helper-regular-font-weight);
        font-size: var(--jh-font-helper-regular-font-size);
        line-height: var(--jh-font-helper-regular-line-height);
        display: inline-block;
        width: 100%;
        --select-value-color-text: var(
          --jh-select-value-color-text,
          var(--jh-color-content-primary-enabled)
        );
      }

      label {
        color: var(
          --jh-select-label-color-text,
          var(--jh-color-content-primary-enabled)
        );
        display: block;
      }

      .helper-text {
        color: var(
          --jh-select-helper-color-text,
          var(--jh-color-content-secondary-enabled)
        );
      }

      label,
      .helper-text,
      .error-text {
        word-break: normal;
        overflow-wrap: anywhere;
      }

      .select-container {
        position: relative;
      }

      :host([label]) .select-container {
        margin-top: var(--jh-dimension-200);
      }

      .select-trigger {
        background-color: var(
          --jh-select-field-color-background,
          var(--jh-color-container-primary-enabled)
        );
        border-width: var(--jh-border-control-width);
        border-style: var(--jh-border-control-style);
        border-color: var(
          --jh-select-field-color-border-enabled,
          var(--jh-border-control-color)
        );
        border-radius: var(
          --jh-select-field-border-radius,
          var(--jh-border-radius-100)
        );
        color: var(--select-value-color-text);
        font-family: var(--jh-font-body-regular-1-font-family);
        font-weight: var(--jh-font-body-regular-1-font-weight);
        font-size: var(--jh-font-body-regular-1-font-size);
        line-height: var(--jh-font-body-regular-1-line-height);
        padding: var(--jh-dimension-0) var(--jh-dimension-400);
        box-sizing: border-box;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        user-select: none;
      }

      .select-trigger:focus-visible {
        border-color: var(
          --jh-select-field-color-border-focus,
          var(--jh-color-content-brand-hover)
        );
        outline-color: var(
          --jh-select-color-focus,
          var(--jh-border-focus-color)
        );
        outline-style: var(--jh-border-focus-style);
        outline-width: var(--jh-border-focus-width);
        outline-offset: 1px;
      }

      .select-trigger:hover {
        border-color: var(
          --jh-select-field-color-border-hover,
          var(--jh-color-content-brand-hover)
        );
      }

      .select-trigger:active {
        border-color: var(
          --jh-select-field-color-border-active,
          var(--jh-color-content-brand-active)
        );
      }

      :host([disabled]) {
        opacity: var(--jh-select-opacity-disabled, var(--jh-opacity-disabled));
        pointer-events: none;
      }

      :host([disabled]) .select-trigger {
        border-color: var(
          --jh-select-field-color-border-disabled,
          var(--jh-border-control-color)
        );
        cursor: default;
      }

      :host([invalid]) .select-trigger {
        border-width: var(--jh-border-error-width);
        border-style: var(--jh-border-error-style);
        border-color: var(
          --jh-select-field-color-border-error,
          var(--jh-border-error-color)
        );
      }

      /* Sizes */
      :host([size='small']) .select-trigger {
        height: var(--jh-dimension-1000);
      }

      :host([size='medium']) .select-trigger {
        height: var(--jh-dimension-1200);
      }

      :host([size='large']) .select-trigger {
        height: var(--jh-dimension-1400);
      }

      .select-value {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .select-icon {
        flex-shrink: 0;
        margin-left: var(--jh-dimension-200);
        display: flex;
        align-items: center;
      }

      .menu-container {
        position: absolute;
        left: 0;
        right: 0;
        z-index: var(--jh-z-index-positive-1000);
        display: none;
      }

      .menu-container.open {
        display: block;
      }

      :host([open-direction='down']) .menu-container {
        top: 100%;
        margin-top: var(--jh-dimension-100);
      }

      :host([open-direction='up']) .menu-container {
        bottom: 100%;
        margin-bottom: var(--jh-dimension-100);
      }

      jh-menu {
        width: 100%;
        max-height: var(--jh-select-menu-max-height, 500px);
        overflow-y: auto;
      }

      jh-list-item {
        --jh-list-item-space-padding-left: var(--jh-dimension-400);
        --jh-list-item-space-padding-right: var(--jh-dimension-400);
      }

      jh-list-item.focused {
        --jh-list-item-color-background: var(--jh-color-container-primary-hover);
      }

      .footer-content {
        margin: var(--jh-dimension-200) 0 0 0;
        gap: var(--jh-dimension-200);
        display: flex;
        justify-content: space-between;
      }

      .error-text {
        color: var(
          --jh-select-error-color-text,
          var(--jh-color-content-negative-enabled)
        );
      }

      p {
        margin: 0;
      }

      /* Optional/Required/Show-indicator */
      :host([show-indicator]) span {
        color: var(
          --jh-select-optional-color-text,
          var(--jh-color-content-primary-enabled)
        );
      }

      :host([show-indicator][required]) span {
        color: var(
          --jh-select-required-color-text,
          var(--jh-color-content-negative-enabled)
        );
      }
    `;
  }

  static get properties() {
    return {
      /** Sets an `aria-label` on the select trigger to assist screen reader users when no visible label is present. */
      accessibleLabel: { type: String, attribute: 'accessible-label' },
      /** Disables the select and prevents all user interactions. May cause the select to be ignored by assistive technologies (AT). */
      disabled: { type: Boolean, reflect: true },
      /** Text to be displayed when select has failed validation and `invalid` is true. */
      errorText: { type: String, attribute: 'error-text' },
      /** Provides additional context or guidance for using the select. For `helper-text` to be displayed, the `label` property must also be set. */
      helperText: { type: String, attribute: 'helper-text' },
      /** Sets an `aria-invalid` attribute on select to indicate the value supplied was invalid. Also displays `error-text` and error state styling when set. */
      invalid: { type: Boolean, reflect: true },
      /** Identifies what data should be selected. */
      label: { type: String, reflect: true },
      /** Allows multiple options to be selected. When enabled, Ctrl/Cmd+Click toggles individual options, Shift+Click selects a range, and Space toggles the focused option. */
      multiple: { type: Boolean, reflect: true },
      /** Sets a name for the select control. */
      name: { type: String },
      /** Determines whether the dropdown menu is open. */
      open: { type: Boolean, reflect: true },
      /** Determines whether the dropdown opens upward or downward. */
      openDirection: { type: String, attribute: 'open-direction', reflect: true },
      /** The options to display in the dropdown. Each option should have a `label` and `value` property. */
      options: { type: Array },
      /** Indicates a value is required. */
      required: { type: Boolean, reflect: true },
      /** Adds a visual indicator next to the label. Indicates that a value is optional (by default) or required if the `required` property is also set. */
      showIndicator: { type: Boolean, attribute: 'show-indicator', reflect: true },
      /** Sets the size of the select. */
      size: { type: String, reflect: true },
      /** Sets the value of the select. For single select, this is a string. For multiple select, this is an array of strings. */
      value: {},
    };
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#internals.role = 'combobox';
    /** @type {?string} */
    this.accessibleLabel = null;
    /** @type {boolean} */
    this.disabled = false;
    /** @type {?string} */
    this.errorText = null;
    /** @type {?string} */
    this.helperText = null;
    /** @type {boolean} */
    this.invalid = false;
    /** @type {?string} */
    this.label = null;
    /** @type {boolean} */
    this.multiple = false;
    /** @type {?string} */
    this.name = null;
    /** @type {boolean} */
    this.open = false;
    /** @type {'up'|'down'} */
    this.openDirection = 'down';
    /** @type {Array<{label: string, value: string}>} */
    this.options = [];
    /** @type {boolean} */
    this.required = false;
    /** @type {boolean} */
    this.showIndicator = false;
    /** @type {'small'|'medium'|'large'} */
    this.size = 'medium';
    /** @type {string|string[]|null} */
    this.value = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.#id = id++;
    document.addEventListener('click', this.#handleOutsideClick);
    document.addEventListener('keydown', this.#handleGlobalKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.#handleOutsideClick);
    document.removeEventListener('keydown', this.#handleGlobalKeydown);
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
      // For form submission, join array values with comma or use single value
      if (Array.isArray(newValue)) {
        this.#internals.setFormValue(newValue.join(','));
      } else if (typeof newValue === 'string') {
        this.#internals.setFormValue(newValue);
      } else {
        this.#internals.setFormValue('');
      }
    }
    this.requestUpdate('value', oldValue);
  }

  /**
   * Gets the label(s) of the currently selected option(s).
   * @returns {string|string[]|null}
   */
  get selectedLabel() {
    if (this.multiple) {
      const values = Array.isArray(this.value) ? this.value : [];
      return values.map(v => {
        const opt = this.options.find(o => o.value === v);
        return opt ? opt.label : '';
      }).filter(Boolean);
    }
    const selectedOption = this.options.find(opt => opt.value === this.value);
    return selectedOption ? selectedOption.label : null;
  }

  /**
   * Checks if a value is currently selected.
   * @param {string} value
   * @returns {boolean}
   */
  #isSelected(value) {
    if (this.multiple) {
      return Array.isArray(this.value) && this.value.includes(value);
    }
    return this.value === value;
  }

  #dispatch(eventName, details = {}) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail: details,
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
  }

  #handleTriggerClick = () => {
    if (this.disabled) return;
    this.#toggleOpen();
  };

  #handleTriggerKeydown = (e) => {
    if (this.disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (this.open && this.#focusedIndex >= 0) {
          // Select the focused option
          const option = this.options[this.#focusedIndex];
          if (this.multiple) {
            this.#toggleOption(option, this.#focusedIndex);
          } else {
            this.#selectOption(option, this.#focusedIndex);
            this.#closeMenu();
            this.#focusTrigger();
          }
        } else {
          this.#toggleOpen();
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!this.open) {
          this.#openMenu();
        }
        if (this.multiple && e.shiftKey) {
          this.#focusNextOption();
          this.#extendSelection(this.#focusedIndex);
        } else {
          this.#focusNextOption();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!this.open) {
          this.#openMenu();
        }
        if (this.multiple && e.shiftKey) {
          this.#focusPreviousOption();
          this.#extendSelection(this.#focusedIndex);
        } else {
          this.#focusPreviousOption();
        }
        break;
      case 'Home':
        e.preventDefault();
        if (this.open) {
          this.#focusFirstOption();
        }
        break;
      case 'End':
        e.preventDefault();
        if (this.open) {
          this.#focusLastOption();
        }
        break;
      case 'Escape':
        if (this.open) {
          e.preventDefault();
          this.#closeMenu();
          this.#focusTrigger();
        }
        break;
      case 'Tab':
        if (this.open) {
          this.#closeMenu();
        }
        break;
      case 'a':
      case 'A':
        // Ctrl/Cmd + A to select all (multi-select only)
        if (this.multiple && (e.ctrlKey || e.metaKey) && this.open) {
          e.preventDefault();
          this.#selectAll();
        }
        break;
    }
  };

  #handleOptionClick = (option, index, e) => {
    if (this.multiple) {
      if (e.shiftKey && this.#lastSelectedIndex >= 0) {
        // Shift+Click: range select
        this.#selectRange(this.#lastSelectedIndex, index);
      } else if (e.ctrlKey || e.metaKey) {
        // Ctrl/Cmd+Click: toggle this option
        this.#toggleOption(option, index);
      } else {
        // Regular click: select only this option
        this.#selectOnly(option, index);
      }
    } else {
      this.#selectOption(option, index);
      this.#closeMenu();
      this.#focusTrigger();
    }
  };

  #handleOptionKeydown = (e, option, index) => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        if (this.multiple) {
          this.#toggleOption(option, index);
        } else {
          this.#selectOption(option, index);
          this.#closeMenu();
          this.#focusTrigger();
        }
        break;
      case ' ':
        e.preventDefault();
        if (this.multiple) {
          // Space toggles in multi-select
          this.#toggleOption(option, index);
        } else {
          this.#selectOption(option, index);
          this.#closeMenu();
          this.#focusTrigger();
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (this.multiple && e.shiftKey) {
          this.#focusNextOption();
          this.#extendSelection(this.#focusedIndex);
        } else {
          this.#focusNextOption();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (this.multiple && e.shiftKey) {
          this.#focusPreviousOption();
          this.#extendSelection(this.#focusedIndex);
        } else {
          this.#focusPreviousOption();
        }
        break;
      case 'Home':
        e.preventDefault();
        this.#focusFirstOption();
        break;
      case 'End':
        e.preventDefault();
        this.#focusLastOption();
        break;
      case 'Escape':
        e.preventDefault();
        this.#closeMenu();
        this.#focusTrigger();
        break;
      case 'Tab':
        this.#closeMenu();
        break;
      case 'a':
      case 'A':
        // Ctrl/Cmd + A to select all (multi-select only)
        if (this.multiple && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          this.#selectAll();
        }
        break;
    }
  };

  #handleOutsideClick = (e) => {
    if (this.open && !this.contains(e.target)) {
      this.#closeMenu();
    }
  };

  #handleGlobalKeydown = (e) => {
    if (e.key === 'Escape' && this.open) {
      this.#closeMenu();
      this.#focusTrigger();
    }
  };

  #toggleOpen() {
    if (this.open) {
      this.#closeMenu();
    } else {
      this.#openMenu();
    }
  }

  #openMenu() {
    this.open = true;
    // Set initial focus to first selected option or first option
    if (this.multiple) {
      const values = Array.isArray(this.value) ? this.value : [];
      const firstSelectedIndex = this.options.findIndex(opt => values.includes(opt.value));
      this.#focusedIndex = firstSelectedIndex >= 0 ? firstSelectedIndex : 0;
    } else {
      const selectedIndex = this.options.findIndex(opt => opt.value === this.value);
      this.#focusedIndex = selectedIndex >= 0 ? selectedIndex : 0;
    }
    this.#dispatch('jh-select:open');
  }

  #closeMenu() {
    this.open = false;
    this.#focusedIndex = -1;
    this.#dispatch('jh-select:close');
  }

  /**
   * Single select: select this option
   */
  #selectOption(option, index) {
    const oldValue = this.value;
    this.value = option.value;
    this.#lastSelectedIndex = index;
    if (oldValue !== option.value) {
      this.#dispatch('jh-select:change', {
        value: option.value,
        label: option.label,
      });
    }
  }

  /**
   * Multi-select: toggle this option
   */
  #toggleOption(option, index) {
    const currentValues = Array.isArray(this.value) ? [...this.value] : [];
    const valueIndex = currentValues.indexOf(option.value);
    
    if (valueIndex >= 0) {
      // Remove from selection
      currentValues.splice(valueIndex, 1);
    } else {
      // Add to selection
      currentValues.push(option.value);
    }
    
    this.#lastSelectedIndex = index;
    this.value = currentValues;
    this.#dispatchMultiChange();
  }

  /**
   * Multi-select: select only this option (deselect all others)
   */
  #selectOnly(option, index) {
    this.#lastSelectedIndex = index;
    this.value = [option.value];
    this.#dispatchMultiChange();
  }

  /**
   * Multi-select: select a range of options
   */
  #selectRange(fromIndex, toIndex) {
    const start = Math.min(fromIndex, toIndex);
    const end = Math.max(fromIndex, toIndex);
    const newValues = [];
    
    for (let i = start; i <= end; i++) {
      newValues.push(this.options[i].value);
    }
    
    this.value = newValues;
    this.#lastSelectedIndex = toIndex;
    this.#dispatchMultiChange();
  }

  /**
   * Multi-select: extend selection to include the focused option
   */
  #extendSelection(index) {
    if (this.#lastSelectedIndex < 0) {
      this.#lastSelectedIndex = index;
    }
    
    const currentValues = Array.isArray(this.value) ? [...this.value] : [];
    const optionValue = this.options[index].value;
    
    if (!currentValues.includes(optionValue)) {
      currentValues.push(optionValue);
      this.value = currentValues;
      this.#dispatchMultiChange();
    }
  }

  /**
   * Multi-select: select all options
   */
  #selectAll() {
    this.value = this.options.map(opt => opt.value);
    this.#dispatchMultiChange();
  }

  /**
   * Dispatch change event for multi-select
   */
  #dispatchMultiChange() {
    const values = Array.isArray(this.value) ? this.value : [];
    const labels = values.map(v => {
      const opt = this.options.find(o => o.value === v);
      return opt ? opt.label : '';
    }).filter(Boolean);
    
    this.#dispatch('jh-select:change', {
      value: values,
      labels: labels,
    });
  }

  #focusTrigger() {
    /** @type {HTMLElement|null} */
    const trigger = this.shadowRoot?.querySelector('.select-trigger');
    trigger?.focus();
  }

  #focusOption(index) {
    if (index < 0 || index >= this.options.length) return;
    this.#focusedIndex = index;
    this.requestUpdate();
    
    // Scroll the focused option into view
    this.updateComplete.then(() => {
      const menu = this.shadowRoot?.querySelector('jh-menu');
      const focusedItem = menu?.querySelectorAll('jh-list-item')[index];
      focusedItem?.scrollIntoView({ block: 'nearest' });
    });
  }

  #focusNextOption() {
    const nextIndex = this.#focusedIndex < this.options.length - 1 
      ? this.#focusedIndex + 1 
      : 0;
    this.#focusOption(nextIndex);
  }

  #focusPreviousOption() {
    const prevIndex = this.#focusedIndex > 0 
      ? this.#focusedIndex - 1 
      : this.options.length - 1;
    this.#focusOption(prevIndex);
  }

  #focusFirstOption() {
    this.#focusOption(0);
  }

  #focusLastOption() {
    this.#focusOption(this.options.length - 1);
  }

  #getDescribedby() {
    let describedbyString = '';

    if (this.errorText) {
      describedbyString += `jh-select-error-${this.#id}`;
    }
    if (this.helperText) {
      describedbyString += ` jh-select-helper-${this.#id}`;
    }
    return describedbyString.trim();
  }

  render() {
    let labelEl;
    let indicator;
    let helperText;
    let footer;
    let errorText;
    let describedby = this.#getDescribedby();

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
          <p id="jh-select-helper-${this.#id}" class="helper-text">
            ${this.helperText}
          </p>
        `;
      }

      labelEl = html`
        <label id="jh-select-label-${this.#id}" for="jh-select-trigger-${this.#id}">${this.label}${indicator}</label>
        ${helperText}
      `;
    }

    if (this.invalid && this.errorText) {
      errorText = html`
        <p id="jh-select-error-${this.#id}" class="error-text">
          ${this.errorText}
        </p>
      `;
      footer = html`
        <div class="footer-content">
          ${errorText}
        </div>
      `;
    }

    const chevronIcon = this.open
      ? html`<jh-icon-chevron-up-small aria-hidden="true" size="medium"></jh-icon-chevron-up-small>`
      : html`<jh-icon-chevron-down-small aria-hidden="true" size="medium"></jh-icon-chevron-down-small>`;

    // Display value for trigger
    let displayValue = '';
    if (this.multiple) {
      const labels = this.selectedLabel;
      if (Array.isArray(labels) && labels.length > 0) {
        if (labels.length === 1) {
          displayValue = labels[0];
        } else if (labels.length === 2) {
          displayValue = labels.join(', ');
        } else {
          displayValue = `${labels[0]}, ${labels[1]}, +${labels.length - 2} more`;
        }
      }
    } else {
      const singleLabel = this.selectedLabel;
      displayValue = (typeof singleLabel === 'string') ? singleLabel : '';
    }

    // Determine aria-multiselectable for listbox
    const multiselectable = this.multiple ? 'true' : null;

    return html`
      ${labelEl}
      <div class="select-container">
        <div
          id="jh-select-trigger-${this.#id}"
          class="select-trigger"
          role="combobox"
          aria-controls="jh-select-listbox-${this.#id}"
          aria-expanded="${this.open}"
          aria-haspopup="listbox"
          aria-invalid=${ifDefined(this.invalid ? 'true' : null)}
          aria-label=${ifDefined(this.accessibleLabel === '' ? null : this.accessibleLabel)}
          aria-labelledby=${ifDefined(this.label ? `jh-select-label-${this.#id}` : null)}
          aria-describedby=${ifDefined(describedby || null)}
          aria-activedescendant=${ifDefined(
            this.open && this.#focusedIndex >= 0
              ? `jh-select-option-${this.#id}-${this.#focusedIndex}`
              : null
          )}
          tabindex=${this.disabled ? '-1' : '0'}
          @click=${this.#handleTriggerClick}
          @keydown=${this.#handleTriggerKeydown}
        >
          <span class="select-value">${displayValue}</span>
          <span class="select-icon">${chevronIcon}</span>
        </div>
        <div class="menu-container ${this.open ? 'open' : ''}">
          <jh-menu
            id="jh-select-listbox-${this.#id}"
            role="listbox"
            aria-labelledby=${ifDefined(this.label ? `jh-select-label-${this.#id}` : null)}
            aria-multiselectable=${ifDefined(multiselectable)}
          >
            ${this.options.map(
              (option, index) => html`
                <jh-list-item
                  id="jh-select-option-${this.#id}-${index}"
                  role="option"
                  tabindex="-1"
                  aria-selected="${this.#isSelected(option.value)}"
                  ?selected="${this.#isSelected(option.value)}"
                  class="${this.#focusedIndex === index ? 'focused' : ''}"
                  primary-text="${option.label}"
                  @click=${(e) => this.#handleOptionClick(option, index, e)}
                  @keydown=${(e) => this.#handleOptionKeydown(e, option, index)}
                ></jh-list-item>
              `
            )}
          </jh-menu>
        </div>
      </div>
      ${footer}
    `;
  }
}

customElements.define('jh-select', JhSelect);
