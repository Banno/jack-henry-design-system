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
import { US_STATES_FLAT, US_STATES_GROUPED, getPresetData } from './data-presets.js';

let id = 0;

const testOptions = [
  { groupLabel: "Account types", groupValues: [
    { label: "Basic Checking", value: "checking-01" },
    { label: "High-Yield Savings", value: "savings-01", disabled: true },
    { label: "Money Market", value: "money-market-01", selected: true },
  ]},
  { groupLabel: "Credit Cards", groupValues: [
    { label: "Cash Back Rewards with a much longer label for testing", value: "cc-cash-back" },
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
 *
 * @cssprop --jh-select-input-field-border-radius - The input field border radius. Defaults to `--jh-border-radius-100`.
 * @cssprop --jh-select-input-field-color-background - The input field background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-select-icon-color-fill - The select icons color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-select-menu-z-index - The menu z-index. Defaults to `--jh-z-index-positive-1000`.
 * @cssprop --jh-select-menu-border-radius - The menu border-radius. Defaults to `--jh-border-radius-200`.
 * @cssprop --jh-select-menu-shadow - The menu box-shadow. Defaults to `--jh-shadow-high`.
 * @cssprop --jh-select-menu-color-background - The menu container background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-select-menu-space-padding - The menu container padding. Defaults to `--jh-dimension-200 0`.
 * @cssprop --jh-select-menu-size-max-width - The menu maximum width. Defaults to `none`.
 * @cssprop --jh-select-menu-size-min-width - The menu minimum width. Defaults to `none`.
 * @cssprop --jh-select-input-field-color-border-error - The input field border-color when invalid. Defaults to `--jh-border-error-color`.
 * @cssprop --jh-select-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-select-helper-color-text - The helper-text text color. Defaults to `jh-color-content-secondary-enabled`.
 * @cssprop --jh-select-required-color-text - The required indicator color. Defaults to `jh-color-content-negative-enabled`.
 * @cssprop --jh-select-optional-color-text - The optional indicator text color. Defaults to `jh-color-content-primary-enabled`.
 * @cssprop --jh-select-value-color-text - The value text color. Defaults to `jh-color-content-primary-enabled`.
 * @cssprop --jh-select-input-field-color-border-enabled - The input field border-color. Defaults to `--jh-border-control-color`.
 * @cssprop --jh-select-input-field-color-border-focus - The input field border-color when in focus. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-select-input-color-focus - The input field outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-select-input-field-color-border-hover - The input field border-color when hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-select-input-field-color-border-active - The input field border-color when active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-select-input-field-color-border-disabled - The input field border-color when disabled. Defaults to `--jh-border-control-color`.
 * @cssprop --jh-select-opacity-disabled - The select opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-select-error-color-text - The error message text color. Defaults to `jh-color-content-negative-enabled`.
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
  /** @type {(e: Event) => void} */
  #boundDocumentClick;
  /** @type {(e: Event) => void} */
  #boundDocumentScroll;

static get styles() {
  return css`
    :host {
      --jh-input-field-border-radius: var(--jh-select-input-field-border-radius);
      --jh-input-field-color-background: var(--jh-select-input-field-color-background);
      --jh-icon-color-fill: var(--jh-select-icon-color-fill);
      --jh-menu-z-index: var(--jh-select-menu-z-index);
      --jh-menu-border-radius: var(--jh-select-menu-border-radius);
      --jh-menu-shadow: var(--jh-select-menu-shadow);
      --jh-menu-color-background: var(--jh-select-menu-color-background);
      --jh-menu-space-padding: var(--jh-select-menu-space-padding);
      --jh-input-field-color-border-error: var(--jh-select-input-field-color-border-error);
      --jh-input-label-color-text: var(--jh-select-label-color-text);
      --jh-input-helper-color-text: var(--jh-select-helper-color-text);
      --jh-input-required-color-text: var(--jh-select-required-color-text);
      --jh-input-optional-color-text: var(--jh-select-optional-color-text);
      --jh-input-value-color-text: var(--jh-select-value-color-text);
      --jh-input-field-color-border-enabled: var(--jh-select-input-field-color-border-enabled);
      --jh-input-field-color-border-focus: var(--jh-select-input-field-color-border-focus);
      --jh-input-color-focus: var(--jh-select-input-color-focus);
      --jh-input-field-color-border-hover: var(--jh-select-input-field-color-border-hover);
      --jh-input-field-color-border-active: var(--jh-select-input-field-color-border-active);
      --jh-input-field-color-border-disabled: var(--jh-select-input-field-color-border-disabled);
      --jh-input-opacity-disabled: var(--jh-select-opacity-disabled);
      --jh-input-error-color-text: var(--jh-select-error-color-text);
      display: block;
      position: relative;
      width: 200px;
    }
    .menu-container {
      box-sizing: border-box;
      overflow: visible;
      position: absolute;
      visibility: hidden;
      opacity: 0;
      width: 100%;
      max-width: var(--jh-select-menu-size-max-width, none);
      min-width: var(--jh-select-menu-size-min-width, none);
    }
    .menu-container.show {
      visibility: visible;
      opacity: 1;
    }
    :host([menu-position="bottom"]) .menu-container {
      top: 100%;
    }
    :host([menu-position="top"]) .menu-container {
      bottom: 100%;
    }
    jh-menu {
    max-height: var(--jh-select-menu-size-max-height, 480px);
    overflow: auto;
    overscroll-behavior: contain;
   
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
    jh-list-item[selected].is-active {
      background-color: var(
          --jh-list-item-color-background-selected,
          var(--jh-color-container-primary-selected)
        );
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
      menuPosition: { type: String, reflect: true, attribute: 'menu-position' },
      readonly: { type: Boolean },
      required: { type: Boolean },
      showClearButton: { type: Boolean, attribute: 'show-clear-button' },
      showIndicator: { type: Boolean, attribute: 'show-indicator' },
      size: { type: String, reflect: true },
      value: { type: String },
      options: { type: Array },
      preset: { type: String },
      flipDisabled: { type: Boolean, attribute: 'flip-disabled' },
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
    this.menuPosition = 'bottom';
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
    /** @type {'us-states-flat'|'us-states-grouped'| null} */
    this.preset = 'us-states-flat';
    /** @type {boolean} */
    this.flipDisabled = false;
    this.addEventListener('keydown', this.#handleKeydown);
    this.#boundDocumentClick = this.#handleDocumentClick.bind(this);
    this.#boundDocumentScroll = this.#handleDocumentScroll.bind(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.#boundDocumentClick, true);
    document.removeEventListener('scroll', this.#boundDocumentScroll, true);
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

      // Set initial value from the selected flag in the data array
      const selectedOption = this.#flatOptions.find(opt => opt.selected);
      if (selectedOption && !this.value) {
        this.value = selectedOption.value;
        this.#displayValue = selectedOption.label;
        // this.#internals.setFormValue(this.value);
      }
    }
  }
  //calls flipMenu whenever the menu is updated, including manually opened with 'open' property.
  updated() {
    if (this.#open) this.#flipMenu();
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

  async #scrollToActiveItem() {
    await this.updateComplete;
    const el = this.shadowRoot.getElementById(
      `jh-select-option-${this.#id}-${this.#activeIndex}`
    );
    if (!el) return;

      const menu = this.shadowRoot.querySelector('jh-menu');
      const menuRect = menu.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      //account for vertical padding on the menu
      const menuStyles = getComputedStyle(menu);
      const paddingTop = parseFloat(menuStyles.paddingTop);
      const paddingBottom = parseFloat(menuStyles.paddingBottom);

      const visibleTop = menuRect.top + paddingTop;
      const visibleBottom = menuRect.bottom - paddingBottom;

      if (elRect.bottom > visibleBottom) {
        menu.scrollTop += elRect.bottom - visibleBottom;
      } else if (elRect.top < visibleTop) {
        menu.scrollTop -= visibleTop - elRect.top;
      }
  }

  #handleDocumentClick(e) {
    if (!e.composedPath().includes(this)) {
      this.#handleCloseSelect();
    }
  }
  #handleDocumentScroll(e) {
    if (!e.composedPath().includes(this)) {
      this.#handleCloseSelect();
    }
  }

  #handleOpenSelect() {
     this.#open = true;
     document.addEventListener('click', this.#boundDocumentClick, true);
      // Delay adding scroll listener so the menu's own layout change doesn't trigger it
    requestAnimationFrame(() => {
      document.addEventListener('scroll', this.#boundDocumentScroll, true);
    });
      // Set initial active to selected item or first item
      if (this.#activeIndex === null) {
        const selectedIdx = this.#flatOptions.findIndex(
          opt => opt.value === this.value
        );
        this.#setActiveItem(selectedIdx !== -1 ? selectedIdx : 0);
      }
      this.requestUpdate();
  }
  #handleCloseSelect() {
    this.#open = false;
    document.removeEventListener('click', this.#boundDocumentClick, true);
    document.removeEventListener('scroll', this.#boundDocumentScroll, true);
    this.#activeIndex = null;
    this.requestUpdate();
  }

  #setActiveItem(index) {
    const options = this.#flatOptions;
    if (!options.length) return;

    // Stop at bounds, don't wrap around
    if (index < 0) index = 0;
    if (index >= options.length) index = options.length - 1;

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
      if (this.#open) {
      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowUp':
        case ' ':
          e.preventDefault();
          break;
      }
    }

    // Open menu on trigger keys when closed
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key) && !this.#open) {
      e.preventDefault();
      this.#handleOpenSelect();
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
        this.#handleCloseSelect();
      }
      return;
    }

    if (e.key === 'Escape') {
      this.#handleCloseSelect();
      this.#buffer = '';
      return;
    }

    if (e.key === 'Tab') {
      if (this.#open) {
        this.#handleCloseSelect();
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
      this.#activeIndex,
      'label'
    );
    console.log('matchIndex', matchIndex, 'buffer', this.#buffer);
    if (matchIndex === -1) {
      this.#buffer = e.key; // if nothing is found, start new search with the latest character
    }
    else if (matchIndex !== -1) {
      // if (!this.#open) this.#handleOpenSelect(); Can get the type aheade even without opening.
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
    this.#handleCloseSelect();
  }

  #handleTriggerClick() {
    if (this.#open) {
      this.#handleCloseSelect();
    } else {
      this.#handleOpenSelect();
    }
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

  //method to flip the menu if it is not fully visible on the viewport
  #flipMenu() {
    //get current position from attribute on hover 
    const currentPosition = this.getAttribute('menu-position');
    console.log('currentPosition', currentPosition);
    //check if current position is a valid position otherwise make it fail.
    if (!['top', 'bottom'].includes(currentPosition)) return;
    
    if (this.flipDisabled === false) {

      //get an array of the available positions
      const availablePositions = this.#getValidPositions();
      console.log('availablePositions', availablePositions);
      //check if position selected by developer is available
      const currentPositionAvailable = (position) =>
        currentPosition === position;

      //set the position attribute if the position selected by developer is valid but not available.
        if (!availablePositions.some(currentPositionAvailable)) {
          const newPosition =
            availablePositions[0];
          console.log('newPosition', newPosition);
          this.setAttribute('menu-position', newPosition);
        }
      }
    }

  //method to check if the menu is fully visible on the screen
  #getValidPositions() {
    const { menuHeight } =
      this.#getDimensions();

    const { elemTop, elemBottom } = this.#getCoordinates();

    //Returns false if menu with position top (start/center/end) is out of the screen on the top
    const topOutTop = elemTop - menuHeight > 0;

    //Returns false if menu with position bottom (start/center/end) is out of the screen on the bottom
    const bottomOutBottom = elemBottom - menuHeight > 0;

    //returns true if the 3 conditions are met. Means the tooltip is fully visible on the screen in that position.
    const allPositions = {
      'top': topOutTop,
      'bottom': bottomOutBottom,
    };

    //add valid positions to an array and return it.
    const validPositions = Object.entries(allPositions).reduce(
      (positions, [key, value]) => (value ? [...positions, key] : positions),
      []
    );
    return validPositions;
  }

  //get the dimensions of the tooltip and the originating element
  #getDimensions() {
    return {
      menuHeight: this.shadowRoot
        .querySelector('jh-menu')
        .getBoundingClientRect().height,
      elemHeight: this.shadowRoot.querySelector('jh-input').getBoundingClientRect().height,
    };
  }

  //get the coordinates of the 4 edges of the originating element
  #getCoordinates() {
    return {
      elemTop: this.shadowRoot.querySelector('jh-input').getBoundingClientRect().top,
      elemBottom: window.innerHeight - this.shadowRoot.querySelector('jh-input').getBoundingClientRect().bottom,
    };
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
            primary-text=${groupOption.label}
          ></jh-list-item>`;
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
      <div class="menu-container ${this.#open ? 'show' : ''}">
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