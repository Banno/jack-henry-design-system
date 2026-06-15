/**
 * SPDX-FileCopyrightText: 2026 Jack Henry
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { JhInput } from '../input/input.js';
import '../menu/menu.js';
import '../list-item/list-item.js';
import '../list-group/list-group.js';
import '@jack-henry/jh-icons/icons-wc/icon-chevron-up-small.js';
import '@jack-henry/jh-icons/icons-wc/icon-chevron-down-small.js';
import { JhFilter } from './filtering.js';

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
 * @cssprop --jh-select-item-size-height - The list item height. Defaults to `auto`.
 * @cssprop --jh-select-item-space-padding-right - The list item right padding. Defaults to `--jh-dimension-600`.
 * @cssprop --jh-select-item-space-padding-left - The list item left padding. Defaults to `--jh-dimension-600`.
 * @cssprop --jh-select-item-color-text - The list item text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-select-item-color-background - The list item background color. Defaults to `transparent`.
 * @cssprop --jh-select-item-color-background-focus - The list item background color when focused. Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-select-item-color-focus - The list item outline color when focused. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-select-item-color-background-hover - The list item background color when hovered. Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-select-item-color-background-active - The list item background color when active. Defaults to `--jh-color-container-primary-active`.
 * @cssprop --jh-select-item-color-background-selected - The list item background color when selected. Defaults to `--jh-color-container-primary-selected`.
 * @cssprop --jh-select-item-color-border-selected - The list item border color when selected. Defaults to `--jh-border-selected-color`.
 * @cssprop --jh-select-item-space-padding-left-indent - The additional left padding for grouped list items. Defaults to `--jh-dimension-200`.
 *
 * @slot jh-select-trigger-left - Use to insert an element such as an icon on the left side of the select input field.
 * @slot jh-select-trigger-open - Use to replace the default chevron icon displayed when the select menu is open.
 * @slot jh-select-trigger-closed - Use to replace the default chevron icon displayed when the select menu is closed.
 *
 * @event jh-change - Dispatched when the selected value changes. Event payload includes the `value` and can be accessed via `e.detail.state.value`.
 */
export class JhSelect extends JhInput {
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

  get #menuContainer() {
    return this.renderRoot?.querySelector('.menu-container');
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
          --jh-input-field-color-border-disabled: var(
            --jh-select-input-field-color-border-disabled
          );
          --jh-input-opacity-disabled: var(--jh-select-opacity-disabled);
          --jh-input-error-color-text: var(--jh-select-error-color-text);
          --jh-list-item-size-height: var(--jh-select-item-size-height);
          --jh-list-item-space-padding-right: var(--jh-select-item-space-padding-right);
          --jh-list-item-space-padding-left: var(--jh-select-item-space-padding-left);
          --jh-list-item-color-text: var(--jh-select-item-color-text);
          --jh-list-item-color-background: var(--jh-select-item-color-background);
          --jh-list-item-color-background-focus: var(--jh-select-item-color-background-focus);
          --jh-list-item-color-focus: var(--jh-select-item-color-focus);
          --jh-list-item-color-background-hover: var(--jh-select-item-color-background-hover);
          --jh-list-item-color-background-active: var(--jh-select-item-color-background-active);
          --jh-list-item-color-background-selected: var(--jh-select-item-color-background-selected);
          --jh-list-item-color-border-selected: var(--jh-select-item-color-border-selected);
          --jh-select-item-space-padding-left-indent: var(--jh-dimension-200);
          display: block;
          position: relative;
          width: 100%;
        }
        .menu-container {
          max-width: var(--jh-select-menu-size-max-width, none);
          min-width: var(--jh-select-menu-size-min-width, none);
          box-sizing: border-box;
          overflow: visible;
          position: absolute;
          visibility: hidden;
          opacity: 0;
          width: 100%;
        }
        .menu-container.show {
          visibility: visible;
          opacity: 1;
        }
        input::selection {
          background-color: transparent;
        }
        jh-menu {
          max-height: var(--jh-select-menu-size-max-height, 480px);
          overscroll-behavior: contain;
        }
        /* fallback values added otherwise calc would fail if the custom properties are not set. */
        jh-list-group > jh-list-item {
          --jh-list-item-space-padding-left: calc(
            var(--jh-select-item-space-padding-left, var(--jh-dimension-600)) +
              var(--jh-select-item-space-padding-left-indent, var(--jh-dimension-200))
          );
        }
        /* remove list item focus styles so active class styles are applied correctly */
        jh-list-item:focus-visible {
          background-color: inherit;
          outline: none;
        }
        jh-list-item:not([selected]):focus-visible {
          background-color: inherit;
        }
        jh-list-item.is-active {
          background-color: var(
            --jh-list-item-color-background-focus,
            var(--jh-color-container-primary-hover)
          );
          outline-color: var(--jh-list-item-color-focus, var(--jh-border-focus-color));
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
      `,
    ];
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
    /** @type {string} */
    this.menuPosition = 'bottom';
    /** @type {Array} */
    this.options = [];
    /** @type {boolean} */
    this.flipDisabled = false;
    this.addEventListener('keydown', this.#handleKeydown);
    this.#boundDocumentClick = this.#handleDocumentClick.bind(this);
    this.#boundDocumentScroll = this.#handleDocumentScroll.bind(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.#handleKeydown);
    document.removeEventListener('click', this.#boundDocumentClick, true);
    document.removeEventListener('scroll', this.#boundDocumentScroll, true);
    clearTimeout(this.#timer);
  }

  willUpdate(changedProperties) {
    if (changedProperties.has('options')) {
      if (!this.options) {
        this.#allOptions = [];
        this.#flatOptions = [];
        return;
      }
      this.#allOptions = this.options.flatMap((item) => {
        if (item.groupValues) {
          return item.groupValues.map((subItem) => ({
            label: subItem.label != null ? subItem.label : String(subItem.value),
            ...subItem,
            groupLabel: item.groupLabel,
          }));
        }
        return {
          label: item.label != null ? item.label : String(item.value),
          ...item,
        };
      });
      // These will be the same until we add search functionality, at which point #flatOptions will be the filtered list and #allOptions will remain the source of truth.
      this.#flatOptions = this.#allOptions;
      this.#activeIndex = null;

      // Set initial value from the selected flag in the data array
      const selectedOption = this.#flatOptions.find((opt) => opt.selected);
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
      `jh-select-option-${this.uniqueId}-${this.#activeIndex}`);
    if (!el) return;

    const menu = this.shadowRoot.querySelector('jh-menu');
    if (!menu) return;
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
    if (this.disabled || this.readonly || !this.#flatOptions.length) return;
    if (!this.#inputWrapper || !this.#menuContainer) return;

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
        (opt) => String(opt.value) === String(this.value));
      this.#setActiveItem(selectedIdx !== -1 ? selectedIdx : 0);
    }
    this.requestUpdate();
  }
  #handleCloseSelect() {
    this.#open = false;
    this.#buffer = '';
    clearTimeout(this.#timer);
    if (this.#menuContainer) {
      this.#menuContainer.style.top = '';
      this.#menuContainer.style.bottom = '';
    }
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
      if (index < 0 || index >= options.length) {
        return; // no more options in this direction
      }
      if (index === start) return; // all disabled
    }

    this.#activeIndex = index;
    this.requestUpdate();
    this.#scrollToActiveItem();
  }

  #handleKeydown(e) {
    if (e.ctrlKey || e.metaKey) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!this.#open) {
          this.#handleOpenSelect();
        } else {
          this.#setActiveItem(this.#activeIndex === null ? 0 : this.#activeIndex + 1);
        }
        return;

      case 'ArrowUp':
        e.preventDefault();
        if (!this.#open) {
          this.#handleOpenSelect();
        } else {
          this.#setActiveItem(
            this.#activeIndex === null ? this.#flatOptions.length - 1 : this.#activeIndex - 1);
        }
        return;

      case 'Enter':
      case ' ':
        e.preventDefault();
        if (!this.#open) {
          this.#handleOpenSelect();
        } else if (this.#activeIndex !== null) {
          this.#handleSelection(this.#activeIndex);
          this.#handleCloseSelect();
        }
        return;

      case 'Escape':
        this.#handleCloseSelect();
        return;

      case 'Tab':
        this.#handleCloseSelect();
        return;

      default:
        this.#handleTypeAhead(e);
    }
  }

  #handleTypeAhead(e) {
    if (e.key.length !== 1) return;
    e.preventDefault();
    clearTimeout(this.#timer);
    this.#buffer += e.key;

    const matchIndex = JhFilter.jumpAhead(
      this.#flatOptions,
      this.#buffer,
      this.#activeIndex,
      'label',
    );

    if (matchIndex !== -1) {
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
      this.dispatchCustomEvent('jh-change');
    }
  }

  //method to flip the menu if it is not fully visible on the viewport.
  //the menu will only flip if it is fully visible in the opposite direction.
  //if there is not enough space in either direction, the menu will stay in the original position.
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

    //if only 1 position is available, set the menu anchor to that position, otherwise keep the current position.
    const newPosition = availablePositions.length === 1 ? availablePositions[0] : currentPosition;
    this.#setMenuAnchor(newPosition);
  }

  #setMenuAnchor(position) {
    const hostRect = this.getBoundingClientRect();
    const inputRect = this.#inputWrapper.getBoundingClientRect();

    // Convert viewport coordinates to host-relative coordinates
    const inputTopRelative = inputRect.top - hostRect.top;
    const inputBottomRelative = inputRect.bottom - hostRect.top;

    this.#menuContainer.style.top = '';
    this.#menuContainer.style.bottom = '';

    if (position === 'bottom') {
      // Menu opens right below the native input
      this.#menuContainer.style.top = `${inputBottomRelative}px`;
    } else if (position === 'top') {
      // Menu opens right above the native input
      // bottom is relative to the bottom of :host
      const inputTopFromHostBottom = hostRect.height - inputTopRelative;
      this.#menuContainer.style.bottom = `${inputTopFromHostBottom}px`;
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
      top: topOutTop,
      bottom: bottomOutBottom,
    };

    //add valid positions to an array and return it.
    const validPositions = Object.entries(allPositions).reduce(
      (positions, [key, value]) => (value ? [...positions, key] : positions),
      [],
    );
    return validPositions;
  }

  //get the height of the menu
  #getDimensions() {
    return {
      menuHeight: this.shadowRoot.querySelector('jh-menu').getBoundingClientRect().height
    };
  }

  //get the coordinates of the top and bottom edge of the input without label/error text.
  #getCoordinates() {
    const inputRect = this.#inputWrapper.getBoundingClientRect();
    return {
      elemTop: inputRect.top,
      elemBottom: inputRect.bottom,
    };
  }

  renderLeftSlot() {
    return html` <slot name="jh-input-left" @slotchange=${this._handleSlotChange}>
      <slot name="jh-select-trigger-left"></slot>
    </slot>`;
  }
  renderRightSlot() {
    return html` <slot name="jh-input-right" @slotchange=${this._handleSlotChange}>
      ${this.#open
        ? html`<slot name="jh-select-trigger-open"><jh-icon-chevron-up-small></jh-icon-chevron-up-small></slot>`
        : html`<slot name="jh-select-trigger-closed"><jh-icon-chevron-down-small></jh-icon-chevron-down-small></slot>`}
    </slot>`;
  }

  renderInput() {
    const describedby =
      this.helperText || (this.errorText && this.invalid) ? this._getDescribedby() : undefined;
    const leftSlot = this.readonly ? null : this.renderLeftSlot();
    const rightSlot = this.readonly ? null : this.renderRightSlot();
    const clearButton = this.renderClearButton();

    return html`
      <div class="input-container">
        <div class="input-wrapper" @click=${this.#handleTriggerClick}>
          ${leftSlot}
          <input
            role="combobox"
            type="text"
            readonly
            autocomplete="off"
            aria-haspopup="listbox"
            aria-controls="jh-select-listbox-${this.uniqueId}"
            id="jh-input-${this.uniqueId}"
            aria-expanded=${this.#open ? 'true' : 'false'}
            aria-activedescendant=${ifDefined(
              this.#activeIndex !== null
                ? `jh-select-option-${this.uniqueId}-${this.#activeIndex}`
                : undefined,
            )}
            aria-describedby=${ifDefined(describedby)}
            aria-invalid=${ifDefined(this.invalid ? 'true' : undefined)}
            aria-label=${ifDefined(this.accessibleLabel)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            .value=${this.#displayValue ?? ''} />
          ${clearButton} ${rightSlot}
        </div>
      </div>
    `;
  }

  renderData(options) {
    if (!options) return null;
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
            id="jh-select-option-${this.uniqueId}-${idx}"
            class="${this.#activeIndex === idx ? 'is-active' : ''}"
            primary-text=${groupOption.label != null
              ? groupOption.label
              : String(groupOption.value)}></jh-list-item>`;
        });
        return html`<jh-list-group label=${option.groupLabel}>${groupItems}</jh-list-group>`;
      }
      const idx = flatIndex++;
      return html`<jh-list-item
        role="option"
        tabindex="-1"
        ?disabled=${option.disabled}
        ?selected=${String(this.value) === String(option.value)}
        aria-selected=${String(this.value) === String(option.value)}
        id="jh-select-option-${this.uniqueId}-${idx}"
        class="${this.#activeIndex === idx ? 'is-active' : ''}"
        primary-text=${option.label != null ? option.label : String(option.value)}></jh-list-item>`;
    });
  }

  render() {
    const label = this.renderLabel();
    const input = this.renderInput();
    const footer = this.renderFooter();

    return html`
      ${label} ${input} ${footer}
      ${this.options && this.options.length
        ? html` <div class="menu-container ${this.#open ? 'show' : ''}">
            <jh-menu
              role="listbox"
              id="jh-select-listbox-${this.uniqueId}"
              @click=${this.#handleMenuClick}>
              ${this.renderData(this.options)}
            </jh-menu>
          </div>`
        : null}
    `;
  }
}

JhSelect.register('jh-select', JhSelect);
