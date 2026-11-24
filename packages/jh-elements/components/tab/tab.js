/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Tabs provide a way to navigate between multiple groups of related content within the same context.
 * 
 * [Tab Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-tab-tab--docs)
 * 
 * @cssprop --jh-tab-size - The tab height. Defaults to `--jh-dimension-800` when `size="small"` and `--jh-dimension-1000` when `size="medium"`.
 * @cssprop --jh-tab-color-background-enabled - The tab background-color when enabled. Defaults to `transparent`.
 * @cssprop --jh-tab-color-border-enabled - The tab border-color when enabled. Defaults to `transparent`.
 * @cssprop --jh-tab-label-color-text-enabled - The label text color when enabled. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-tab-icon-color-fill-enabled - The icon color when enabled. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-tab-color-focus - The focus outline color. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-tab-color-background-focus - The tab background-color when in focus. Defaults to `--jh-color-container-neutral-hover`.
 * @cssprop --jh-tab-color-border-focus - The tab border-color when in focus. Defaults to `transparent`.
 * @cssprop --jh-tab-label-color-text-focus - The label text color when in focus. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-tab-icon-color-fill-focus - The icon color when in focus. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-tab-color-background-hover - The tab background-color when hovered. Defaults to `--jh-color-container-neutral-hover`.
 * @cssprop --jh-tab-color-border-hover - The tab border-color when hovered. Defaults to `transparent`.
 * @cssprop --jh-tab-label-color-text-hover - The label text color when hovered. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-tab-icon-color-fill-hover - The icon color when hovered. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-tab-color-background-active - The tab background-color when active. Defaults to `--jh-color-container-neutral-active`.
 * @cssprop --jh-tab-color-border-active - The tab border-color when active. Defaults to `transparent`.
 * @cssprop --jh-tab-label-color-text-active - The label text color when active. Defaults to `--jh-color-content-primary-active`.
 * @cssprop --jh-tab-icon-color-fill-active - The icon color when active. Defaults to `--jh-color-content-primary-active`.
 * @cssprop --jh-tab-opacity-disabled - The tab opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-tab-color-background-disabled - The tab background-color when disabled. Defaults to `transparent`.
 * @cssprop --jh-tab-color-border-disabled - The tab border-color when disabled. Defaults to `transparent`.
 * @cssprop --jh-tab-label-color-text-disabled - The label text color when disabled. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-tab-icon-color-fill-disabled - The icon color when disabled. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-tab-color-border-selected - The selected indicator color. Defaults to `--jh-border-selected-color`.
 *
 * @slot jh-tab-left - Use to insert an icon on the left side of the tab.
 * @slot jh-tab-right - Use to insert an icon on the right side of the tab.
 *
 * @customElement jh-tab
 */
export class JhTab extends JhElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        position: relative;
        vertical-align: middle;
        touch-action: manipulation;
        user-select: none;
        cursor: pointer;
        outline: none;
      }
      :host([disabled]) {
        cursor: default;
      }
      .tab-wrapper {
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: var(--jh-dimension-200);
        height: var(--jh-tab-size, var(--jh-dimension-1000));
        padding: 0 var(--jh-dimension-400);
        white-space: nowrap;
        font-family: var(--jh-font-body-medium-1-font-family);
        font-weight: var(--jh-font-body-medium-1-font-weight);
        font-size: var(--jh-font-body-medium-1-font-size);
        line-height: var(--jh-font-body-medium-1-line-height);
        border-width: var(--jh-border-action-width);
        border-style: var(--jh-border-action-style);
        transition: background-color ease 0.2s;

        /* enabled */
        background-color: var(
          --jh-tab-color-background-enabled,
          transparent
        );
        border-color: var(--jh-tab-color-border-enabled, transparent);
        color: var(
          --jh-tab-label-color-text-enabled,
          var(--jh-color-content-primary-enabled)
        );
        --jh-icon-color-fill: var(
          --jh-tab-icon-color-fill-enabled,
          var(--jh-color-content-primary-enabled)
        );
      }
      :host([size='small']) .tab-wrapper {
        height: var(--jh-tab-size, var(--jh-dimension-800));
      }
      /* icon-only tab with a single icon */
      .tab-wrapper.single-icon {
        padding: 0;
        width: var(--jh-tab-size, var(--jh-dimension-1000));
      }
      :host([size='small']) .tab-wrapper.single-icon {
        width: var(--jh-tab-size, var(--jh-dimension-800));
      }

      /* focus */
      :host(:not([disabled]):focus-visible) .tab-wrapper {
        outline-color: var(
          --jh-tab-color-focus,
          var(--jh-border-focus-color)
        );
        outline-style: var(--jh-border-focus-style);
        outline-width: var(--jh-border-focus-width);
        outline-offset: 1px;
        background-color: var(
          --jh-tab-color-background-focus,
          var(--jh-color-container-neutral-hover)
        );
        border-color: var(--jh-tab-color-border-focus, transparent);
        color: var(
          --jh-tab-label-color-text-focus,
          var(--jh-color-content-primary-hover)
        );
        --jh-icon-color-fill: var(
          --jh-tab-icon-color-fill-focus,
          var(--jh-color-content-primary-hover)
        );
      }
      /* hover */
      :host(:not([disabled]):hover) .tab-wrapper {
        background-color: var(
          --jh-tab-color-background-hover,
          var(--jh-color-container-neutral-hover)
        );
        border-color: var(--jh-tab-color-border-hover, transparent);
        color: var(
          --jh-tab-label-color-text-hover,
          var(--jh-color-content-primary-hover)
        );
        --jh-icon-color-fill: var(
          --jh-tab-icon-color-fill-hover,
          var(--jh-color-content-primary-hover)
        );
      }
      /* active */
      :host(:not([disabled]):active) .tab-wrapper {
        background-color: var(
          --jh-tab-color-background-active,
          var(--jh-color-container-neutral-active)
        );
        border-color: var(--jh-tab-color-border-active, transparent);
        color: var(
          --jh-tab-label-color-text-active,
          var(--jh-color-content-primary-active)
        );
        --jh-icon-color-fill: var(
          --jh-tab-icon-color-fill-active,
          var(--jh-color-content-primary-active)
        );
      }
      /* disabled */
      :host([disabled]) .tab-wrapper {
        opacity: var(
          --jh-tab-opacity-disabled,
          var(--jh-opacity-disabled)
        );
        background-color: var(
          --jh-tab-color-background-disabled,
          transparent
        );
        border-color: var(--jh-tab-color-border-disabled, transparent);
        color: var(
          --jh-tab-label-color-text-disabled,
          var(--jh-color-content-primary-enabled)
        );
        --jh-icon-color-fill: var(
          --jh-tab-icon-color-fill-disabled,
          var(--jh-color-content-primary-enabled)
        );
      }

      /* selected indicator, independent of the state styling above */
      :host([selected])::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: var(--jh-dimension-50);
        background-color: var(
          --jh-tab-color-border-selected,
          var(--jh-border-selected-color)
        );
        pointer-events: none;
      }
    `;
  }

  static get properties() {
    return {
      accessibleLabel: {
        type: String,
        attribute: 'accessible-label',
      },
      disabled: {
        type: Boolean,
        reflect: true,
      },
      label: {
        type: String,
      },
      selected: {
        type: Boolean,
        reflect: true,
      },
      size: {
        type: String,
        reflect: true,
      },
      _hasLeftSlotContent: {
        type: Boolean,
        state: true,
      },
      _hasRightSlotContent: {
        type: Boolean,
        state: true,
      },
    };
  }

  constructor() {
    super();
    this.internals.role = 'tab';
    /**
     * Sets an `aria-label` on the tab. Required for icon-only tabs.
     * @attr accessible-label
     * @type {string | null}
     */
    this.accessibleLabel = null;
    /**
     * Disables the tab and prevents all user interactions.
     * @type {boolean}
     */
    this.disabled = false;
    /**
     * The tab text. When omitted, an icon-only tab is displayed.
     * @type {string | null}
     */
    this.label = null;
    /**
     * Whether the tab is selected.
     * @type {boolean}
     */
    this.selected = false;
    /**
     * Sets the size of the tab.
     * @type {'small' | 'medium'}
     */
    this.size = 'medium';
    /** @internal @type {boolean} */
    this._hasLeftSlotContent = false;
    /** @internal @type {boolean} */
    this._hasRightSlotContent = false;

    this.addEventListener('click', this.#handleClick);
    this.addEventListener('keydown', this.#handleKeydown);
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.id) {
      this.id = `jh-tab-${this.uniqueId}`;
    }
    // jh-tab-group manages roving tabindex; a standalone tab stays reachable.
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '0');
    }
  }

  #activate() {
    if (this.disabled) return;
    this.dispatchCustomEvent('jh-activate', {}, { bubbles: false, composed: false });
  }

  #handleClick() {
    this.#activate();
  }

  #handleKeydown(e) {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      this.#activate();
    }
  }

  /**
   * @protected
   */
  updated(changedProperties) {
    if (changedProperties.has('selected')) {
      this.internals.ariaSelected = String(this.selected);
    }
    if (changedProperties.has('disabled')) {
      this.internals.ariaDisabled = this.disabled ? 'true' : null;
    }
    if (changedProperties.has('accessibleLabel')) {
      this.internals.ariaLabel = this.accessibleLabel;
    }
  }

  #handleSlotChange(e) {
    const slot = e.target;
    const elements = slot.assignedElements({ flatten: true });

    elements.forEach((el) => {
      if (el.tagName.startsWith('JH-ICON')) {
        el.setAttribute('aria-hidden', 'true');
        el.setAttribute('size', 'medium');
      }
    });

    if (slot.name === 'jh-tab-left') {
      this._hasLeftSlotContent = elements.length > 0;
    } else if (slot.name === 'jh-tab-right') {
      this._hasRightSlotContent = elements.length > 0;
    }
  }

  render() {
    const singleIcon = !this.label && this._hasLeftSlotContent !== this._hasRightSlotContent;

    return html`
      <div class="tab-wrapper ${singleIcon ? 'single-icon' : ''}">
        <slot
          name="jh-tab-left"
          @slotchange=${this.#handleSlotChange}
        ></slot>
        ${this.label ? html`<span class="label">${this.label}</span>` : null}
        <slot
          name="jh-tab-right"
          @slotchange=${this.#handleSlotChange}
        ></slot>
      </div>
    `;
  }
}
JhTab.register('jh-tab', JhTab);
