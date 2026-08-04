// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';
import '../divider/divider.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * A list item represents one item in a list of connected objects. List items are used as building blocks in complex components such as lists, menus, and dropdowns.
 * 
 * [List Item Storybook Documentation](https://release-v2--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-list-item--docs)
 * 
 * @cssprop --jh-list-item-color-background-enabled - The list-item container's background-color.
 * Defaults to `transparent`.
 * @cssprop --jh-list-item-color-text-primary-enabled - The list-item text color for the default, left, right slots and primary text.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-color-text-primary-focus - The list-item text color for the default, left, right slots and primary text when interactive and focused.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-color-text-primary-hover - The list-item text color for the default, left, right slots and primary text when interactive and hovered.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-color-text-primary-active - The list-item text color for the default, left, right slots and primary text when interactive and active.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-color-text-primary-selected - The list-item text color for the default, left, right slots and primary text when interactive and selected.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-color-text-primary-disabled - The list-item text color for the default, left, right slots and primary text when interactive and disabled.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-color-text-secondary-enabled - The secondary text color.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-color-text-secondary-focus - The secondary text color when interactive and focused.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-color-text-secondary-hover - The secondary text color when interactive and hovered.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-color-text-secondary-active - The secondary text color when interactive and active.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-color-text-secondary-selected - The secondary text color when interactive and selected.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-color-text-secondary-disabled - The secondary text color when interactive and disabled.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-space-padding-right - The right padding on the list-item container. Defaults to `--jh-dimension-600`.
 * @cssprop --jh-list-item-space-padding-left - The left padding on the list-item container. Defaults to `--jh-dimension-600`.
 * @cssprop --jh-list-item-space-padding-top - The top padding on the list-item container. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-list-item-space-padding-bottom - The bottom padding on the list-item container. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-list-item-size-height - The list-item's height. Defaults to `auto`.
 * @cssprop --jh-list-item-color-background-focus - The list-item background-color when interactive and focused.
 * Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-list-item-color-focus - The list-item outline when it is interactive and receives keyboard focus.
 * Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-list-item-color-background-hover - The list-item background-color when interactive and hovered.
 * Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-list-item-color-background-active - The list-item background-color when interactive and active.
 * Defaults to `--jh-color-container-primary-active`.
 * @cssprop --jh-list-item-color-background-disabled - The list-item background-color when interactive and disabled.
 * Defaults to `transparent`.
 * @cssprop --jh-list-item-opacity-disabled - The list-item opacity when interactive and disabled.
 * Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-list-item-color-background-selected - The list-item background-color when interactive and selected. Defaults to `--jh-color-container-primary-selected`.
 * @cssprop --jh-list-item-color-border-selected - The list-item border-left-color when interactive and selected.
 * Defaults to `--jh-border-selected-color`.
 * @cssprop --jh-list-item-metadata-color-text-primary-enabled - The primary metadata text color.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-primary-focus - The primary metadata text color when interactive and focused.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-primary-hover - The primary metadata text color when interactive and hovered.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-primary-active - The primary metadata text color when interactive and active.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-primary-selected - The primary metadata text color when interactive and selected.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-primary-disabled - The primary metadata text color when interactive and disabled.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-secondary-enabled - The secondary metadata text color.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-secondary-focus - The secondary metadata text color when interactive and focused.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-secondary-hover - The secondary metadata text color when interactive and hovered.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-secondary-active - The secondary metadata text color when interactive and active.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-secondary-selected - The secondary metadata text color when interactive and selected.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-secondary-disabled - The secondary metadata text color when interactive and disabled.
 * Defaults to `--jh-color-content-secondary-enabled`.
 *
 * @slot default - Use to insert custom content into the list-item.
 * @slot jh-list-item-left - Use to insert custom content on the left the list-item. 
 * @slot jh-list-item-right - Use to insert custom content on the right the list-item.
 * @customElement jh-list-item
 */
export class JhListItem extends JhElement {
  static get styles() {
    return css`
      :host {
        background-color: var(--jh-list-item-color-background-enabled, transparent);
        color: var(
          --jh-list-item-color-text-primary-enabled,
          var(--jh-color-content-primary-enabled)
        );
        font-family: var(--jh-font-body-medium-1-font-family);
        font-weight: var(--jh-font-body-medium-1-font-weight);
        font-size: var(--jh-font-body-medium-1-font-size);
        line-height: var(--jh-font-body-medium-1-line-height);
        display: block;
      }
      /* list item height is set to auto when styling hook is not set */
      .list-item {
        padding-right: var(
          --jh-list-item-space-padding-right,
          var(--jh-dimension-600)
        );
        padding-left: var(
          --jh-list-item-space-padding-left,
          var(--jh-dimension-600)
        );
        height: var(--jh-list-item-size-height, auto);
        padding-top: var(--jh-list-item-space-padding-top, var(--jh-dimension-400));
        padding-bottom: var(--jh-list-item-space-padding-bottom, var(--jh-dimension-400));
        gap: var(--jh-dimension-200);
        display: flex;
        flex-direction: row;
        align-items: center;
        box-sizing: border-box;
      }
      .secondary-text {
        color: var(
          --jh-list-item-color-text-secondary-enabled,
          var(--jh-color-content-secondary-enabled)
        );
        font-family: var(--jh-font-helper-regular-font-family);
        font-weight: var(--jh-font-helper-regular-font-weight);
        font-size: var(--jh-font-helper-regular-font-size);
        line-height: var(--jh-font-helper-regular-line-height);
      }
      .primary-metadata {
        color: var(
          --jh-list-item-metadata-color-text-primary-enabled,
          var(--jh-list-item-color-text-primary-enabled, var(--jh-color-content-primary-enabled))
        );
      }
      .secondary-metadata {
        color: var(
          --jh-list-item-metadata-color-text-secondary-enabled,
          var(--jh-list-item-color-text-secondary-enabled, var(--jh-color-content-secondary-enabled))
        );
        font-family: var(--jh-font-helper-regular-font-family);
        font-weight: var(--jh-font-helper-regular-font-weight);
        font-size: var(--jh-font-helper-regular-font-size);
        line-height: var(--jh-font-helper-regular-line-height);
      }
      .primary-text,
      .secondary-text,
      .primary-metadata,
      .secondary-metadata {
        display: block;
        word-break: break-word;
      }
      /* states for interactive list-items*/
      :host([tabindex]:focus-visible) {
        color: var(
          --jh-list-item-color-text-primary-focus,
          var(--jh-list-item-color-text-primary-enabled, var(--jh-color-content-primary-enabled))
        );
        background-color: var(
          --jh-list-item-color-background-focus,
          var(--jh-color-container-primary-hover)
        );
        outline-color: var(
          --jh-list-item-color-focus,
          var(--jh-border-focus-color)
        );
        outline-style: var(--jh-border-focus-style);
        outline-width: var(--jh-border-focus-width);
        outline-offset: -2px;
      }
      :host([tabindex]:focus-visible) .secondary-text {
        color: var(
          --jh-list-item-color-text-secondary-focus,
          var(--jh-list-item-color-text-secondary-enabled, var(--jh-color-content-secondary-enabled))
        );
      }
      :host([tabindex]:focus-visible) .primary-metadata {
        color: var(
          --jh-list-item-metadata-color-text-primary-focus,
          var(--jh-list-item-metadata-color-text-primary-enabled,
            var(--jh-list-item-color-text-primary-enabled, var(--jh-color-content-primary-enabled)))
        );
      }
      :host([tabindex]:focus-visible) .secondary-metadata {
        color: var(
          --jh-list-item-metadata-color-text-secondary-focus,
          var(--jh-list-item-metadata-color-text-secondary-enabled,
            var(--jh-list-item-color-text-secondary-enabled, var(--jh-color-content-secondary-enabled)))
        );
      }
      :host([tabindex]:hover) {
        color: var(
          --jh-list-item-color-text-primary-hover,
          var(--jh-list-item-color-text-primary-enabled, var(--jh-color-content-primary-enabled))
        );
        background-color: var(
          --jh-list-item-color-background-hover,
          var(--jh-color-container-primary-hover)
        );
        cursor: pointer;
      }
      :host([tabindex]:hover) .secondary-text {
        color: var(
          --jh-list-item-color-text-secondary-hover,
          var(--jh-list-item-color-text-secondary-enabled, var(--jh-color-content-secondary-enabled))
        );
      }
      :host([tabindex]:hover) .primary-metadata {
        color: var(
          --jh-list-item-metadata-color-text-primary-hover,
          var(--jh-list-item-metadata-color-text-primary-enabled,
            var(--jh-list-item-color-text-primary-enabled, var(--jh-color-content-primary-enabled)))
        );
      }
      :host([tabindex]:hover) .secondary-metadata {
        color: var(
          --jh-list-item-metadata-color-text-secondary-hover,
          var(--jh-list-item-metadata-color-text-secondary-enabled,
            var(--jh-list-item-color-text-secondary-enabled, var(--jh-color-content-secondary-enabled)))
        );
      }
      :host([tabindex]:active) {
        color: var(
          --jh-list-item-color-text-primary-active,
          var(--jh-list-item-color-text-primary-enabled, var(--jh-color-content-primary-enabled))
        );
        background-color: var(
          --jh-list-item-color-background-active,
          var(--jh-color-container-primary-active)
        );
      }
      :host([tabindex]:active) .secondary-text {
        color: var(
          --jh-list-item-color-text-secondary-active,
          var(--jh-list-item-color-text-secondary-enabled, var(--jh-color-content-secondary-enabled))
        );
      }
      :host([tabindex]:active) .primary-metadata {
        color: var(
          --jh-list-item-metadata-color-text-primary-active,
          var(--jh-list-item-metadata-color-text-primary-enabled,
            var(--jh-list-item-color-text-primary-enabled, var(--jh-color-content-primary-enabled)))
        );
      }
      :host([tabindex]:active) .secondary-metadata {
        color: var(
          --jh-list-item-metadata-color-text-secondary-active,
          var(--jh-list-item-metadata-color-text-secondary-enabled,
            var(--jh-list-item-color-text-secondary-enabled, var(--jh-color-content-secondary-enabled)))
        );
      }
      :host([tabindex][disabled]) {
        color: var(
          --jh-list-item-color-text-primary-disabled,
          var(--jh-list-item-color-text-primary-enabled, var(--jh-color-content-primary-enabled))
        );
        background-color: var(--jh-list-item-color-background-disabled, transparent);
        cursor: default;
        pointer-events: none;
      }
      :host([tabindex][disabled]) .secondary-text {
        color: var(
          --jh-list-item-color-text-secondary-disabled,
          var(--jh-list-item-color-text-secondary-enabled, var(--jh-color-content-secondary-enabled))
        );
      }
      :host([tabindex][disabled]) .primary-metadata {
        color: var(
          --jh-list-item-metadata-color-text-primary-disabled,
          var(--jh-list-item-metadata-color-text-primary-enabled,
            var(--jh-list-item-color-text-primary-enabled, var(--jh-color-content-primary-enabled)))
        );
      }
      :host([tabindex][disabled]) .secondary-metadata {
        color: var(
          --jh-list-item-metadata-color-text-secondary-disabled,
          var(--jh-list-item-metadata-color-text-secondary-enabled,
            var(--jh-list-item-color-text-secondary-enabled, var(--jh-color-content-secondary-enabled)))
        );
      }
      :host([tabindex][disabled]) .list-item {
        opacity: var(--jh-list-item-opacity-disabled, var(--jh-opacity-disabled));
      }
      :host([tabindex][selected]) {
        color: var(
          --jh-list-item-color-text-primary-selected,
          var(--jh-list-item-color-text-primary-enabled, var(--jh-color-content-primary-enabled))
        );
        background-color: var(
          --jh-list-item-color-background-selected,
          var(--jh-color-container-primary-selected)
        );
      }
      :host([tabindex][selected]) .secondary-text {
        color: var(
          --jh-list-item-color-text-secondary-selected,
          var(--jh-list-item-color-text-secondary-enabled, var(--jh-color-content-secondary-enabled))
        );
      }
      :host([tabindex][selected]) .primary-metadata {
        color: var(
          --jh-list-item-metadata-color-text-primary-selected,
          var(--jh-list-item-metadata-color-text-primary-enabled,
            var(--jh-list-item-color-text-primary-enabled, var(--jh-color-content-primary-enabled)))
        );
      }
      :host([tabindex][selected]) .secondary-metadata {
        color: var(
          --jh-list-item-metadata-color-text-secondary-selected,
          var(--jh-list-item-metadata-color-text-secondary-enabled,
            var(--jh-list-item-color-text-secondary-enabled, var(--jh-color-content-secondary-enabled)))
        );
      }
      :host([tabindex][selected]) .list-item {
        padding-left: calc(var(
          --jh-list-item-space-padding-left,
          var(--jh-dimension-600)
        ) - var(--jh-border-selected-width));
        border-left-color: var(
          --jh-list-item-color-border-selected,
          var(--jh-border-selected-color)
        );
        border-left-style: var(--jh-border-selected-style);
        border-left-width: var(--jh-border-selected-width);
      }
      jh-divider {
        margin-top: 0;
        margin-bottom: 0;
      }
      slot[name="jh-list-item-left"],
      slot[name="jh-list-item-right"] {
        flex: 0 0 auto;
        align-items: center;
        display: none;
      }
      slot:not([name]) {
        flex: 1 1 auto;
        display: none;
        min-width: 0; 
      }
      .content {
        gap: var(--jh-dimension-200);
        display: none;
        flex-direction: row;
        flex: 1 1 auto;
        min-width: 0;
        align-items: center;
      }
      .text {
        gap: var(--jh-dimension-50);
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        min-width: 0;
      }
      .metadata {
        gap: var(--jh-dimension-50);
        display: flex;
        flex-direction: column;
        flex: 0 0 auto;
        min-width: 0;
        align-items: flex-end;
      }
      .display, 
      slot[name="jh-list-item-left"].has-content,
      slot[name="jh-list-item-right"].has-content,
      slot:not([name]).has-content {
        display: flex;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Disables the list-item and prevents all user interactions. May cause list-item to be ignored by assistive technologies(AT).
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The inset of the optional divider. Omit to use the divider-inset token instead.
       */
      dividerInset: {
        type: Number,
        attribute: 'divider-inset',
      },
      /**
       * The text to show as primary text.
       */
      primaryText: {
        type: String,
        attribute: 'primary-text',
      },
      /**
       * The text to show as secondary text.
       */
      secondaryText: {
        type: String,
        attribute: 'secondary-text',
      },
            /**
       * The text to show as primary metadata.
       */
      primaryMetadata: {
        type: String,
        attribute: 'primary-metadata',
      },
      /**
       * The text to show as secondary metadata.
       */
      secondaryMetadata: {
        type: String,
        attribute: 'secondary-metadata',
      },
      /**
       * Determines whether an interactive list-item is selected.
       */
      selected: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Determines whether the divider is displayed below the list-item.
       */
      showDivider: {
        type: Boolean,
        reflect: true,
        attribute: 'show-divider',
      },
      _showFallback: { type: Boolean, state: true },
      _hasLeftSlotContent: { type: Boolean, state: true },
      _hasRightSlotContent: { type: Boolean, state: true },
    };
  }

  constructor() {
    super();
    this.internals.role = 'listitem';
    /** @type {boolean} */
    this.disabled = false;
    /** @type { 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 | null } */
    this.dividerInset = null;
    /** @type {?string} */
    this.primaryText = null;
    /** @type {?string} */
    this.secondaryText = null;
    /** @type {?string} */
    this.primaryMetadata = null;
    /** @type {?string} */
    this.secondaryMetadata = null;
    /** @type {boolean} */
    this.selected = false;
    /** @type {boolean} */
    this.showDivider = false;
    this._showFallback = true;
    this._hasLeftSlotContent = false;
    this._hasRightSlotContent = false;
  }

#checkSlotContent(slot) {
  const slottedElements = slot.assignedElements({ flatten: true });
  if (slottedElements.length > 0) return true;
  if (slot.assignedNodes({ flatten: true }).some(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== ''
  )) return true;
  return false;
}

#handleSlotChange(e) {
  const slot = e.target;
  if (slot.name === 'jh-list-item-left') {
    this._hasLeftSlotContent = this.#checkSlotContent(slot);
  } else if (slot.name === 'jh-list-item-right') {
    this._hasRightSlotContent = this.#checkSlotContent(slot);
  } else {
    // default slot
    const nodes = slot.assignedNodes();
    this._showFallback = nodes.every(
      node => node.nodeType === Node.TEXT_NODE && !node.textContent.trim()
    );
  }
}

  render() {
    let showDivider;

    if (this.disabled === true && this.hasAttribute('tabindex')) {
      this.setAttribute('aria-disabled', 'true');
    } else {
      this.removeAttribute('aria-disabled');
    }

    if (this.showDivider) {
      showDivider = html`
        <jh-divider
          inset=${ifDefined(this.dividerInset ? this.dividerInset : null)}
        ></jh-divider>
      `;
    }

    return html`
      <div class="list-item">
        <slot
          name="jh-list-item-left"
          class=${this._hasLeftSlotContent ? 'has-content' : ''}
          @slotchange=${this.#handleSlotChange}
        ></slot>
        <slot @slotchange=${this.#handleSlotChange} 
          class=${this._showFallback ? '' : 'has-content'}></slot>
        <div class=${`content ${this._showFallback ? 'display' : ''}`}>
          <div class="text">
            ${this.primaryText ? html`<div class="primary-text">${this.primaryText}</div>` : ''}
            ${this.secondaryText ? html`<div class="secondary-text">${this.secondaryText}</div>` : ''}
          </div>
          <div class="metadata">
            ${this.primaryMetadata ? html`<div class="primary-metadata">${this.primaryMetadata}</div>` : ''}
            ${this.secondaryMetadata ? html`<div class="secondary-metadata">${this.secondaryMetadata}</div>` : ''}
          </div>
        </div>
        <slot
          name="jh-list-item-right"
          class=${this._hasRightSlotContent ? 'has-content' : ''}
          @slotchange=${this.#handleSlotChange}
        ></slot>
      </div>
      ${showDivider}
    `;
  }
}
JhListItem.register('jh-list-item', JhListItem);
