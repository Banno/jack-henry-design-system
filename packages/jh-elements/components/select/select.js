/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhInput } from '../input/input.js';
import '../menu/menu.js';
import '../list-item/list-item.js';
import '../list-group/list-group.js';
import '@jack-henry/jh-icons/icons-wc/icon-chevron-up-small.js';
import '@jack-henry/jh-icons/icons-wc/icon-chevron-down-small.js';
import { JhFilter } from './filtering.js';

let id = 0;

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
 * @cssprop --jh-select-menu-size-max-height - The menu maximum height. Defaults to `480px`.
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
 *
 * @slot jh-select-trigger-left - Use to insert an element such as an icon on the left side of the select input field.
 * @slot jh-select-trigger-open - Use to replace the default chevron icon displayed when the select menu is open.
 * @slot jh-select-trigger-closed - Use to replace the default chevron icon displayed when the select menu is closed.
 *
 * @event jh-change - Dispatched when the selected value changes.
 */
export class JhSelect extends JhInput {
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

  get #inputWrapper() {
    return this.renderRoot?.querySelector('.input-wrapper');
  }

  get #inputEl() {
    return this.renderRoot?.querySelector('input');
  }

static get styles() {
  return [
    super.styles,
    css`
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
    jh-menu {
    max-height: var(--jh-select-menu-size-max-height, 480px);
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
  `];
}

  static get properties() {
    return {
      /** Sets the position of the dropdown menu relative to the input field. The menu automatically flips when there is insufficient space unless `flip-disabled` is set. */
      menuPosition: { type: String, reflect: true, attribute: 'menu-position' },
      /** Sets the list of options to display in the dropdown menu. Accepts an array of flat options or grouped options. See documentation for the expected data format. */
      options: { type: Array, attribute: false },
      /** Prevents the dropdown menu from automatically flipping its position when there is insufficient viewport space. */
      flipDisabled: { type: Boolean, attribute: 'flip-disabled' },
    };
  }

  constructor() {
    super();
    this.#id = ++id;
    /** @type {?string} */
    this.autocomplete = 'off';
    /** @type {string} */
    this.menuPosition = 'bottom';
    /** @type {?Array} */
    this.options = null;
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

  firstUpdated() {
    super.firstUpdated();
    const input = this.#inputEl;
    if (!input) return;
    // Set combobox ARIA attributes on the native input
    input.setAttribute('role', 'combobox');
    input.setAttribute('readonly', '');
    input.setAttribute('aria-haspopup', 'listbox');
    input.setAttribute('aria-expanded', 'false');
    input.setAttribute('aria-controls', `listbox-${this.#id}`);
    // Remove name from native input — form submission is via ElementInternals on the host
    input.removeAttribute('name');
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    const input = this.#inputEl;
    if (!input) return;

    // Update display value — show the label text, not the form value
    const displayValue = this.#displayValue || this.value || '';
    input.value = displayValue;

    // Update ARIA state
    input.setAttribute('aria-expanded', String(this.#open));
    if (this.#open && this.#activeIndex !== null) {
      input.setAttribute('aria-activedescendant', `jh-select-option-${this.#id}-${this.#activeIndex}`);
    } else {
      input.removeAttribute('aria-activedescendant');
    }
  }

  willUpdate(changedProperties) {
    if (changedProperties.has('options')) {
      this.#allOptions = this.options.flatMap(item => {
        if (item.groupValues) {
          return item.groupValues.map(subItem => ({
            label: subItem.label != null ? subItem.label : String(subItem.value),
            ...subItem,
            groupLabel: item.groupLabel
          }));
        }
        return {
          label: item.label != null ? item.label : String(item.value),
          ...item
        };
      });
      this.#flatOptions = this.#allOptions;
      this.#activeIndex = null;

      // Set initial value from the selected flag in the data array
      const selectedOption = this.#flatOptions.find(opt => opt.selected);
      if (selectedOption && !this.value) {
        this.value = String(selectedOption.value);
        this.#displayValue = selectedOption.label;
      }
    }
  }

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
    const scrollContainer = menu.shadowRoot?.querySelector('.menu-content') ?? menu;
    const menuRect = scrollContainer.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    // account for vertical padding on the menu
    const menuStyles = getComputedStyle(scrollContainer);
    const paddingTop = parseFloat(menuStyles.paddingTop);
    const paddingBottom = parseFloat(menuStyles.paddingBottom);

    const visibleTop = menuRect.top + paddingTop;
    const visibleBottom = menuRect.bottom - paddingBottom;

    if (elRect.bottom > visibleBottom) {
      scrollContainer.scrollTop += elRect.bottom - visibleBottom;
    } else if (elRect.top < visibleTop) {
      scrollContainer.scrollTop -= visibleTop - elRect.top;
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
    if (this.disabled || this.readonly) {
      return;
    }
     this.#flipMenu();
     this.#open = true;
     document.addEventListener('click', this.#boundDocumentClick, true);
      // Delay adding scroll listener so the menu's own layout change doesn't trigger it
    requestAnimationFrame(() => {
      document.addEventListener('scroll', this.#boundDocumentScroll, true);
    });
      // Set initial active to selected item or first item
      if (this.#activeIndex === null) {
        const selectedIdx = this.#flatOptions.findIndex(
          opt => String(opt.value) === String(this.value)
        );
        this.#setActiveItem(selectedIdx !== -1 ? selectedIdx : 0);
      }
      this.requestUpdate();
  }
  #handleCloseSelect() {
    this.#open = false;
    const menuContainer = this.shadowRoot.querySelector('.menu-container');
    menuContainer.style.top = '';
    menuContainer.style.bottom = '';
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

    if (matchIndex === -1) {
      this.#buffer = e.key; // if nothing is found, start new search with the latest character
    }
    else if (matchIndex !== -1) {
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

    if (this.value !== String(option.value)) {
    this.value = String(option.value);
    this.#displayValue = option.label != null ? option.label : String(option.value);
    this.#activeIndex = index;
    this.requestUpdate();
    this.#scrollToActiveItem();

    //dispatch a jh-change event when the selected value changes.
    const options = {
      bubbles: true,
      composed: true,
      cancelable: true,
    };
    this.dispatchEvent(new CustomEvent('jh-change', options));
  }
  }

  //method to flip the menu if it is not fully visible on the viewport
  #flipMenu() { 
    const currentPosition = this.menuPosition;

    //check if current position is a valid position otherwise make it fail.
    if (!['top', 'bottom'].includes(currentPosition)) return;
    
    if (this.flipDisabled) {
        this.#setMenuAnchor(currentPosition);
        return;
    }

      //get an array of the available positions
      const availablePositions = this.#getValidPositions();

      //if only 1 position is available, set the menu anchor to that position.
      const newPosition = availablePositions.length === 1 ? availablePositions[0] : currentPosition;
      this.#setMenuAnchor(newPosition);
    }

  #setMenuAnchor(position) {
    const menuContainer = this.shadowRoot.querySelector('.menu-container');
    const hostRect = this.getBoundingClientRect();
    const inputRect = this.#inputWrapper.getBoundingClientRect();

    // Convert viewport coordinates to host-relative coordinates
    const inputTopRelative = inputRect.top - hostRect.top;
    const inputBottomRelative = inputRect.bottom - hostRect.top;

    menuContainer.style.top = '';
    menuContainer.style.bottom = '';

    if (position === 'bottom') {
      // Menu opens right below the native input
      menuContainer.style.top = `${inputBottomRelative}px`;
    } else if (position === 'top') {
      // Menu opens right above the native input
      // bottom is relative to the bottom of :host
      const inputTopFromHostBottom = hostRect.height - inputTopRelative;
      menuContainer.style.bottom = `${inputTopFromHostBottom}px`;
    }
  }

  //method to check if the menu is fully visible on the screen
  #getValidPositions() {
    const { menuHeight } = this.#getDimensions();

    const { elemTop, elemBottom } = this.#getCoordinates();

    const elemFromBottom = window.innerHeight - elemBottom;

    //Returns false if menu with position top is out of the screen on the top
    const topOutTop = elemTop - menuHeight > 0;

    //Returns false if menu with position bottom is out of the screen on the bottom
    const bottomOutBottom = elemFromBottom - menuHeight > 0;

    //returns true if the condition is met.
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
    };
  }

  //get the coordinates of the top and bottom edge of the native input.
  #getCoordinates() {
    const inputRect = this.#inputWrapper.getBoundingClientRect();
   return {
      elemTop: inputRect.top,
      elemBottom: inputRect.bottom,
    };
  }

  renderLeftSlot() {
    return html`
    <slot name="jh-input-left" @slotchange=${this._handleSlotChange}>
      <slot name="jh-select-trigger-left"></slot>
    </slot>`;
  }
  renderRightSlot() {
    return html`
    <slot name="jh-input-right" @slotchange=${this._handleSlotChange}>
      ${this.#open
        ? html`<slot name="jh-select-trigger-open"><jh-icon-chevron-up-small></jh-icon-chevron-up-small></slot>`
        : html`<slot name="jh-select-trigger-closed"><jh-icon-chevron-down-small></jh-icon-chevron-down-small></slot>`}
    </slot>`;
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
            ?selected=${String(this.value) === String(groupOption.value)}
            aria-selected=${String(this.value) === String(groupOption.value)}
            id="jh-select-option-${this.#id}-${idx}"
            class="${this.#activeIndex === idx ? 'is-active' : ''}"
            primary-text=${groupOption.label != null ? groupOption.label : String(groupOption.value)}
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
        ?selected=${String(this.value) === String(option.value)}
        aria-selected=${String(this.value) === String(option.value)}
        id="jh-select-option-${this.#id}-${idx}"
        class="${this.#activeIndex === idx ? 'is-active' : ''}"
      >${option.label != null ? option.label : String(option.value)}</jh-list-item>`;
    });
  }

  render() {
    const label = this.renderLabel();
    const input = this.renderInput();
    const footer = this.renderFooter();

    return html`
      ${label}
      <div @click=${this.#handleTriggerClick}>
        ${input}
      </div>
      ${footer}
      <div class="menu-container ${this.#open ? 'show' : ''}">
        <jh-menu
          role="listbox"
          id="listbox-${this.#id}"
          @click=${this.#handleMenuClick}
        >
          ${this.renderData(this.options)}
        </jh-menu>
      </div>
    `;
  }
}

customElements.define('jh-select', JhSelect);