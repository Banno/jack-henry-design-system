/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../menu/menu.js';
import '../input/input.js';
import '../list-item/list-item.js';
import '../list-group/list-group.js';
import { JhFilter } from './filtering.js';
import { US_STATES_FLAT, US_STATES_GROUPED } from './data-presets.js';

let id = 0;

const testOptions = [
  { groupLabel: "Account types", groupValues: [
    { label: "Basic Checking", value: "checking-01" },
    { label: "High-Yield Savings", value: "savings-01", disabled: true },
    { label: "Money Market", value: "money-market-01" }
  ]},
  { groupLabel: "Credit Cards", groupValues: [
    { label: "Cash Back Rewards", value: "cc-cash-back" },
    { label: "Travel Rewards", value: "cc-travel" },
    { label: "Low Interest", value: "cc-low-interest" },
  ]},
  { label: "Personal Loan", value: "loan-personal" },
  { label: "Mortgage Refinance", value: "mortgage-refi" },
  { label: "Certificate of Deposit", value: "cd-12-month" },
  { label: "IRA Investment", value: "ira-traditional" },
  { label: "Health Savings Account", value: "hsa-01" },
  { label: "Brokerage Account", value: "brokerage-standard" }
];

/**
 * Select
 * @customElement jh-select
 */
export class JhSelect extends LitElement {
  static get formAssociated() {
    return true;
  }

  /** @type {ElementInternals} */
  #internals;
  /** @type {number} */
  #id;
  /** @type {?string} */
  #displayValue = null;
  /** @type {string} */
  #buffer = '';
  /** @type {?number} */
  #timer = null;
  /** @type {?number} */
  #activeIndex = null;
  /** @type {boolean} */
  #open = false;
  /** @type {Array} All options flattened — source of truth, rebuilt only when options change */
  #allOptions = [];
  /** @type {Array} Currently visible/navigable options — same as #allOptions until search is added */
  #flatOptions = [];
  /** @type {ResizeObserver | null} */
  #resizeObserver = null;

static get styles() {
  return css`
    :host {
      display: block;
      position: relative;
    }
    .menu-container {
      /* Reset popover API defaults */
      box-sizing: border-box;
      inset: auto;
      margin: 0;
      border: none;
      padding: 0;
      background-color: transparent;
      color: inherit;
      overflow: visible;
    }
    jh-menu {
    max-height: 400px;  
      overflow: auto;
    }

    jh-list-group > jh-list-item {
      --jh-list-item-space-padding-left: var(--jh-dimension-800);
    }
    jh-list-item.is-active {
      background-color: var(
        --jh-list-item-color-background-focus,
        var(--jh-color-container-primary-hover));
      outline-color: var(--jh-list-item-color-focus,
        var(--jh-border-focus-color));
      outline-style: var(--jh-border-focus-style);
      outline-width: var(--jh-border-focus-width);
      outline-offset: -2px;
    }
  `;
}

  static get properties() {
    return {
      accessibleLabel: { type: String, attribute: 'accessible-label' },
      accessibleLabelClearButton: { type: String, attribute: 'accessible-label-clear-button' },
      autocomplete: { type: String },
      disabled: { type: Boolean },
      errorText: { type: String, attribute: 'error-text' },
      helperText: { type: String, attribute: 'helper-text' },
      hideLeftSlot: { type: Boolean, attribute: 'hide-left-slot' },
      hideRightSlot: { type: Boolean, attribute: 'hide-right-slot' },
      invalid: { type: Boolean },
      label: { type: String },
      name: { type: String },
      placement: { type: String, reflect: true },
      readonly: { type: Boolean },
      required: { type: Boolean },
      showClearButton: { type: Boolean, attribute: 'show-clear-button' },
      showIndicator: { type: Boolean, attribute: 'show-indicator' },
      size: { type: String, reflect: true },
      value: { type: String },
      options: { type: Array },
      preset: { type: String }
    };
  }

  constructor() {
    super();
    this.#id = ++id;
    this.#internals = this.attachInternals();
    /** @type {?string} */
    this.accessibleLabel = null;
    /** @type {?string} */
    this.accessibleLabelClearButton = null;
    /** @type {?string} */
    this.autocomplete = 'off';
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
    /** @type {string} */
    this.placement = 'bottom';
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
    /** @type {Array} */
    this.options = testOptions;
    /** @type {'us-states-flat'|'us-states-grouped'|null} */
    this.preset = 'us-states-grouped';
    this.addEventListener('keydown', this.#handleKeydown);
  }

  willUpdate(changedProperties) {
    if (changedProperties.has('preset')) {
      if (this.preset === 'us-states-grouped') {
        this.options = US_STATES_GROUPED;
      } else if (this.preset === 'us-states-flat') {
        this.options = US_STATES_FLAT;
      }
    }
    if (changedProperties.has('options')) {
      this.#allOptions = this.options.flatMap(item => {
        if (item.groupValues) {
          return item.groupValues.map(subItem => ({
            ...subItem,
            groupLabel: item.groupLabel
          }));
        }
        return item;
      });
      this.#flatOptions = this.#allOptions;
      this.#activeIndex = null;
    }
  }

  /**
   * Extracts the flat index from a list-item's id.
   * id format: "jh-select-option-{componentId}-{flatIndex}"
   * @param {string|undefined} elementId
   * @returns {number|null}
   */
  #getIndexFromId(elementId) {
    const parts = elementId?.split('-');
    const index = Number(parts?.[parts.length - 1]);
    return Number.isNaN(index) ? null : index;
  }

  #scrollToActiveItem() {
    this.updateComplete.then(() => {
      const el = this.shadowRoot.getElementById(
        `jh-select-option-${this.#id}-${this.#activeIndex}`
      );
      el?.scrollIntoView({ block: 'nearest' });
    });
  }

  #toggleMenu(open) {
    const menu = this.shadowRoot?.querySelector('.menu-container');
    if (!menu) return;

    if (open) {
      menu.showPopover();
      this.#updatePosition();
      // window.addEventListener('resize', this.#updatePosition);
      // window.addEventListener('scroll', this.#updatePosition, {capture:true});
      const jhInput = this.shadowRoot?.querySelector('jh-input');
      if (!jhInput) return;

      this.#resizeObserver = new ResizeObserver(() => {
      this.#updatePosition();
     });
     this.#resizeObserver.observe(jhInput);

     this.#open = true;
      // Set initial active to selected item or first item
      if (this.#activeIndex === null) {
        const selectedIdx = this.#flatOptions.findIndex(
          opt => opt.value === this.value
        );
        this.#setActiveItem(selectedIdx !== -1 ? selectedIdx : 0);
      }
    } else {
      menu.hidePopover();
      this.#open = false;
      this.#activeIndex = null;
      window.removeEventListener('resize', this.#updatePosition);
      window.removeEventListener('scroll', this.#updatePosition, {capture:true});
        if (this.#resizeObserver) {
      this.#resizeObserver.disconnect();
      this.#resizeObserver = null;
    }
    this.requestUpdate();
  }
}

  #updatePosition() {
    const menu = this.shadowRoot.querySelector('.menu-container');
    const inputEl = this.shadowRoot.querySelector('jh-input').shadowRoot.querySelector('input');
    const inputBottomPos = inputEl.getBoundingClientRect().bottom;
    const inputTopPos = inputEl.getBoundingClientRect().top - menu.offsetHeight;
    const inputLeftPos = inputEl.getBoundingClientRect().left;
    const inputWidth = inputEl.getBoundingClientRect().width;

    if (this.placement === 'bottom') {
      menu.style.top = `${inputBottomPos}px`;
      menu.style.left = `${inputLeftPos}px`;
    } else if (this.placement === 'top') {
      menu.style.top = `${inputTopPos}px`;
      menu.style.left = `${inputLeftPos}px`;
    }
    // Set menu width to match input width
    menu.style.width = `${inputWidth}px`;
  }

  #handleToggleEvent(e) {
    // Sync state when popover closes via light dismiss or Escape
    this.#open = e.newState === 'open';
    if (!this.#open) {
      this.#activeIndex = null;
    }
    this.requestUpdate();
  }

  #setActiveItem(index) {
    const options = this.#flatOptions;
    if (!options.length) return;

    // Wrap around
    if (index < 0) index = options.length - 1;
    if (index >= options.length) index = 0;

    // Skip disabled items
    const start = index;
    const direction = index >= (this.#activeIndex ?? 0) ? 1 : -1;
    while (options[index]?.disabled) {
      index += direction;
      if (index < 0) index = options.length - 1;
      if (index >= options.length) index = 0;
      if (index === start) return; // all disabled
    }

    this.#activeIndex = index;
    this.requestUpdate();
    this.#scrollToActiveItem();
  }

  #handleKeydown(e) {
    if (e.ctrlKey || e.metaKey) return;

    // Open menu on trigger keys when closed
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key) && !this.#open) {
      e.preventDefault();
      this.#toggleMenu(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = this.#activeIndex === null ? 0 : this.#activeIndex + 1;
      this.#setActiveItem(nextIndex);
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex =
        this.#activeIndex === null
          ? this.#flatOptions.length - 1
          : this.#activeIndex - 1;
      this.#setActiveItem(prevIndex);
      return;
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (this.#open && this.#activeIndex !== null) {
        this.#handleSelection(this.#activeIndex);
        this.#toggleMenu(false);
      }
      return;
    }

    if (e.key === 'Escape') {
      // Popover API handles the actual close —
      // #handleToggleEvent syncs state
      this.#buffer = '';
      return;
    }

    if (e.key === 'Tab') {
      if (this.#open) {
        this.#toggleMenu(false);
      }
      return;
    }

    // Character keys — type-ahead
    if (e.key.length !== 1) return;
    e.preventDefault();
    clearTimeout(this.#timer);
    this.#buffer += e.key;
    const matchIndex = JhFilter.jumpAhead(
      this.#flatOptions,
      this.#buffer,
      'label'
    );
    if (matchIndex !== -1) {
      if (!this.#open) this.#toggleMenu(true);
      this.#setActiveItem(matchIndex);
      this.#handleSelection(matchIndex);
    }
    this.#timer = setTimeout(() => (this.#buffer = ''), 500);
  }

  #handleMenuClick(e) {
    const item = e.target.closest('jh-list-item');
    if (!item || item.disabled) return;

    const index = this.#getIndexFromId(item.id);
    if (index === null) return;

    this.#handleSelection(index);
    this.#toggleMenu(false);
  }

  #handleTriggerClick() {
    this.#toggleMenu(!this.#open);
  }

  #handleSelection(index) {
    const option = this.#flatOptions[index];
    if (!option || option.disabled) return;

    this.value = option.value;
    this.#displayValue = option.label;
    this.#activeIndex = index;
    this.#internals.setFormValue(this.value);
    this.requestUpdate();
    this.#scrollToActiveItem();
  }

  renderData(options) {
    let flatIndex = 0;

    return options.map((option) => {
      if (option.groupValues) {
        const groupItems = option.groupValues.map((groupOption) => {
          const idx = flatIndex++;
          return html`<jh-list-item
            role="option"
            tabindex="-1"
            ?disabled=${groupOption.disabled}
            ?selected=${this.value === groupOption.value}
            aria-selected=${this.value === groupOption.value}
            id="jh-select-option-${this.#id}-${idx}"
            class="${this.#activeIndex === idx ? 'is-active' : ''}"
          >${groupOption.label}</jh-list-item>`;
        });
        return html`<jh-list-group label=${option.groupLabel}
          >${groupItems}</jh-list-group
        >`;
      }
      const idx = flatIndex++;
      return html`<jh-list-item
        role="option"
        tabindex="-1"
        ?disabled=${option.disabled}
        ?selected=${this.value === option.value}
        aria-selected=${this.value === option.value}
        id="jh-select-option-${this.#id}-${idx}"
        class="${this.#activeIndex === idx ? 'is-active' : ''}"
      >${option.label}</jh-list-item>`;
    });
  }

  render() {
    return html`
      <jh-input
        role="combobox"
        aria-expanded=${this.#open}
        aria-haspopup="listbox"
        aria-controls="listbox-${this.#id}"
        aria-activedescendant=${ifDefined(
          this.#open && this.#activeIndex !== null
            ? `jh-select-option-${this.#id}-${this.#activeIndex}`
            : undefined
        )}
        aria-invalid=${ifDefined(this.invalid ? 'true' : null)}
        aria-label=${ifDefined(
          this.accessibleLabel === '' ? null : this.accessibleLabel
        )}
        autocomplete=${ifDefined(
          this.autocomplete === '' ? null : this.autocomplete
        )}
        ?disabled=${this.disabled}
        name=${ifDefined(this.name === '' ? null : this.name)}
        ?required=${this.required}
        .value=${ifDefined(
          this.#displayValue ? this.#displayValue : this.value
        )}
        @click=${this.#handleTriggerClick}
      ></jh-input>
      <div class="menu-container" popover="auto" @toggle=${this.#handleToggleEvent}>
      <jh-menu
        role="listbox"
        id="listbox-${this.#id}"
        @click=${this.#handleMenuClick}
      >
        ${this.renderData(this.options)}
      </jh-menu></div>
    `;
  }
}

customElements.define('jh-select', JhSelect);