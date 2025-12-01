// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';
import '../tooltip/tooltip.js';
import '../divider/divider.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * @cssprop --jh-list-item-color-background - The list-item container's background-color.
 * Defaults to `transparent`.
 * @cssprop --jh-list-item-color-text - The default, left, text, metadata, right, primary, and secondary slot text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-space-padding-right - The right padding on the list-item container. Defaults to `--jh-space-600`.
 * @cssprop --jh-list-item-space-padding-left - The left padding on the list-item container. Defaults to `--jh-space-600`.
 * @cssprop --jh-list-item-size-height - The list-item's height. Defaults to `auto`.
 * @cssprop --jh-list-item-color-text-primary - The primary text color.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-color-text-secondary - The secondary text color.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-primary - The primary metadata text color.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-list-item-metadata-color-text-secondary - The secondary metadata text color.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-item-color-background-focus - The list-item background-color when interactive and focused.
 * Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-list-item-color-outline-focus - The list-item outline-color when interactive and focused.
 * Defaults to `--jh-color-interactive-focus-outer`.
 * @cssprop --jh-list-item-color-background-hover - The list-item background-color when interactive and hovered.
 * Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-list-item-color-background-active - The list-item background-color when interactive and active.
 * Defaults to `--jh-color-container-primary-active`.
 * @cssprop --jh-list-item-color-background-selected - The list-item background-color when interactive and selected. Defaults to `--jh-color-container-primary-selected`.
 * @cssprop --jh-list-item-color-border-selected - The list-item border-left-color when interactive and selected.
 * Defaults to `--jh-color-content-brand-enabled`.
 *
 * @slot default - Use to insert fully customized content into the list-item. Cannot be used with the other slots.
 * @slot jh-list-item-left - Use to insert custom content on the left the list-item. 
 * @slot jh-list-item-right - Use to insert custom content on the right the list-item.
 * @slot jh-list-item-content -  Use to insert custom content into the list-item.
 * @slot jh-list-item-metadata - Use to insert custom metadata into the list-item.
 * @customElement jh-list-item
 */
export class JhListItem extends LitElement {
  /** @type {ElementInternals} */
  #internals;

  static get styles() {
    return css`
      :host {
        background-color: var(--jh-list-item-color-background, transparent);
        padding-bottom: var(--jh-space-400);
        font: var(--jh-font-body-medium-1);
        color: var(
          --jh-list-item-color-text,
          var(--jh-color-content-primary-enabled)
        );
        display: block;
        box-sizing: border-box;
      }
      /* list item height is set to auto when styling hook is not set */
      .list-item {
        padding-right: var(
          --jh-list-item-space-padding-right,
          var(--jh-space-600)
        );
        padding-left: var(
          --jh-list-item-space-padding-left,
          var(--jh-space-600)
        );
        padding-top: var(--jh-space-400);
        display: flex;
        flex-direction: row;
        align-items: center;
        height: calc(var(--jh-list-item-size-height, auto) - var(--jh-size-400));
        box-sizing: border-box;
      }
      :host([show-divider]) .list-item {
        height: calc(var(--jh-list-item-size-height, auto) - var(--jh-size-400) - 1px);
      }

      /* states for interactive list-items*/
      :host([tabindex]:focus-visible) {
        background-color: var(
          --jh-list-item-color-background-focus,
          var(--jh-color-container-primary-hover)
        );
        outline-color: var(
          --jh-list-item-color-outline-focus,
          var(--jh-color-interactive-focus-outer)
        );
        outline-style: solid;
        outline-width: 2px;
        outline-offset: -2px;
      }
      :host([tabindex]:hover) {
        background-color: var(
          --jh-list-item-color-background-hover,
          var(--jh-color-container-primary-hover)
        );
        cursor: pointer;
      }
      :host([tabindex]:active) {
        background-color: var(
          --jh-list-item-color-background-active,
          var(--jh-color-container-primary-active)
        );
      }
      :host([tabindex][selected]) {
        background-color: var(
          --jh-list-item-color-background-selected,
          var(--jh-color-container-primary-selected)
        );
        border-left-width: 8px;
        border-left-color: var(
          --jh-list-item-color-border-selected,
          var(--jh-color-content-brand-enabled)
        );
        border-left-style: solid;
      }
      :host([tabindex][selected]) .list-item {
        padding-left: var(--jh-space-400);
      }
      :host([tabindex][disabled]) {
        opacity: var(--jh-opacity-disabled);
        cursor: default;
        pointer-events: none;
      }

      :host([show-divider]) {
        padding-bottom: 0;
      }
      jh-divider {
        margin-bottom: 0;
      }
      ::slotted([slot='jh-list-item-left']) {
        color: var(
          --jh-list-item-color-text,
          var(--jh-color-content-primary-enabled)
        );
        margin-right: var(--jh-space-200);
        flex: 0 0 auto;
      }
      ::slotted([slot='jh-list-item-content']) {
        color: var(
          --jh-list-item-color-text,
          var(--jh-color-content-primary-enabled)
        );
        flex: 1 1 auto;
      }
      .text {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        min-width: 0;
      }
      ::slotted([slot='jh-list-item-metadata']) {
        color: var(
          --jh-list-item-color-text,
          var(--jh-color-content-primary-enabled)
        );
        margin-left: var(--jh-space-200);
        flex: 0 0 auto;
      }
      .metadata {
        margin-left: var(--jh-space-200);
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
      }
      ::slotted([slot='jh-list-item-right']) {
        color: var(
          --jh-list-item-color-text,
          var(--jh-color-content-primary-enabled)
        );
        margin-left: var(--jh-space-200);
        flex: 0 0 auto;
      }
      .primary-text {
        color: var(
          --jh-list-item-color-text-primary,
          var(--jh-color-content-primary-enabled)
        );
      }
      .secondary-text {
        color: var(
          --jh-list-item-color-text-secondary,
          var(--jh-color-content-secondary-enabled)
        );
        font: var(--jh-font-helper-regular);
        margin-top: var(--jh-space-50);
      }

      /* text truncation */
      .primary-text,
      .secondary-text {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .primary-metadata {
        color: var(
          --jh-list-item-metadata-color-text-primary,
          var(--jh-color-content-primary-enabled)
        );
        text-align: right;
        white-space: nowrap;
      }
      .secondary-metadata {
        color: var(
          --jh-list-item-metadata-color-text-secondary,
          var(--jh-color-content-secondary-enabled)
        );
        font: var(--jh-font-helper-regular);
        margin-top: var(--jh-space-50);
        text-align: right;
        white-space: nowrap;
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
       * The text to show as primary metadata.
       */
      primaryMetadata: {
        type: String,
        attribute: 'primary-metadata',
      },
      /**
       * The text to show as primary text.
       */
      primaryText: {
        type: String,
        attribute: 'primary-text',
      },
      /**
       * The text to show as secondary metadata.
       */
      secondaryMetadata: {
        type: String,
        attribute: 'secondary-metadata',
      },
      /**
       * The text to show as secondary text.
       */
      secondaryText: {
        type: String,
        attribute: 'secondary-text',
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
    };
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#internals.role = 'listitem';
    /** @type {?boolean} */
    this.disabled = false;
    /** @type {null|0|8|16|24|32|40|48|56|64|72|80|88|96} */
    this.dividerInset = null;
    /** @type {?string} */
    this.primaryMetadata = null;
    /** @type {?string} */
    this.primaryText = null;
    /** @type {?string} */
    this.secondaryMetadata = null;
    /** @type {?string} */
    this.secondaryText = null;
    /** @type {?boolean} */
    this.selected = false;
    /** @type {?boolean} */
    this.showDivider = false;
    /** @ignore */
    this.primaryTooltip = false;
    /** @ignore */
    this.secondaryTooltip = false;
  }

  #displayTooltips() {
    const oldPrimaryTooltip = this.primaryTooltip;
    const oldSecondaryTooltip = this.secondaryTooltip;
    const primaryTextDiv = this.shadowRoot.querySelector('.primary-text');
    const secondaryTextDiv = this.shadowRoot.querySelector('.secondary-text');

    this.primaryTooltip =
      primaryTextDiv.offsetWidth < primaryTextDiv.scrollWidth;
    this.secondaryTooltip =
      secondaryTextDiv.offsetWidth < secondaryTextDiv.scrollWidth;

    if (
      oldPrimaryTooltip !== this.primaryTooltip ||
      oldSecondaryTooltip !== this.secondaryTooltip
    )
      this.update();
  }

  async firstUpdated() {
    const possibleTooltips = this.shadowRoot.querySelectorAll('jh-tooltip');
    const options = {
      characterData: true,
      subtree: true,
    };

    await possibleTooltips.forEach((tooltip) => {
      Promise.all(
        Array.from(tooltip.children).map((text) => text.updateComplete)
      );
      new MutationObserver(this.#displayTooltips.bind(this)).observe(
        tooltip.children[0],
        options
      );
      new ResizeObserver(this.#displayTooltips.bind(this)).observe(
        tooltip.children[0]
      );
    });
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
        <slot></slot>
        <slot name="jh-list-item-left"></slot>
        <slot name="jh-list-item-content">
          <div class="text">
            <jh-tooltip
              label=${this.primaryTooltip ? this.primaryText : null}
              position="top-center"
              ><div class="primary-text">${this.primaryText}</div>
            </jh-tooltip>
            <jh-tooltip
              label=${this.secondaryTooltip ? this.secondaryText : null}
              position="top-center"
              ><div class="secondary-text">${this.secondaryText}</div>
            </jh-tooltip>
          </div>
        </slot>
        <slot name="jh-list-item-metadata">
          <div class="metadata">
            <div class="primary-metadata">${this.primaryMetadata}</div>
            <div class="secondary-metadata">${this.secondaryMetadata}</div>
          </div>
        </slot>
        <slot name="jh-list-item-right"></slot>
      </div>
      ${showDivider}
    `;
  }
}

customElements.define('jh-list-item', JhListItem);
