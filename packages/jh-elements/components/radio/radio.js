// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Radio buttons, typically presented in radio groups, allow users to select only one option amongst a group of options.
 * 
 * [Radio Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-radio--docs)
 * 
 * @cssprop --jh-radio-opacity-disabled - The radio opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-radio-input-border-radius - The radio and status mark border-radius.
 * Defaults to `--jh-border-radius-circle`.
 * @cssprop --jh-radio-color-focus - The radio outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-radio-helper-color-text - The helper-text text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-radio-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-radio-input-color-background-unselected-enabled - The radio background-color when unselected.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-enabled - The radio border-color when unselected.
 * Defaults to `--jh-border-control-color`.
 * @cssprop --jh-radio-input-color-background-unselected-focus - The radio background-color when unselected and focused. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-focus - The radio border-color when unselected and focused.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-input-color-background-unselected-hover - The radio background-color when unselected and hovered.
 *  Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-hover - The radio border-color when unselected and hovered.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-input-color-background-unselected-active - The radio background-color when unselected and active.
 *  Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-active - The radio border-color when unselected and active.
 * Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-radio-input-color-background-unselected-disabled - The radio background-color when unselected and disabled.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-disabled - The radio border-color when unselected and disabled.
 * Defaults to `--jh-border-control-color`.
 * @cssprop --jh-radio-input-color-background-selected-enabled - The radio background-color when selected.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-enabled - The radio border-color when selected.
 * Defaults to `--jh-border-control-color`.
 * @cssprop --jh-radio-status-color-background-selected-enabled- The status mark color when selected.
 * Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-radio-input-color-background-selected-focus - The radio background-color when selected and focused. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-focus - The radio border-color when selected and focused.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-status-color-background-selected-focus - The status mark color when selected and focused.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-input-color-background-selected-hover - The radio background-color when selected and hovered. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-hover - The radio border-color when selected and hovered.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-status-color-background-selected-hover - The status mark color when selected and hovered.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-input-color-background-selected-active - The background-color when selected and active.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-active - The border-color when selected and active.
 * Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-radio-status-color-background-selected-active - The status mark color when selected and active.
 * Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-radio-input-color-background-selected-disabled - The background-color when selected and disabled.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-disabled - The border-color when selected and disabled.
 * Defaults to `--jh-border-control-color`.
 * @cssprop --jh-radio-status-color-background-selected-disabled - The status mark color when selected and disabled. Defaults to `--jh-color-content-brand-enabled`.
 *
 * @event jh-change - Dispatched when the state of the radio has changed. Event payload includes the value of the radio and can be accessed via `e.detail.state.value`. 
 *
 * @customElement jh-radio */

export class JhRadio extends JhElement {

  static get styles() {
    return css`
      :host {
        font-family: var(--jh-font-body-medium-1-font-family);
        font-weight: var(--jh-font-body-medium-1-font-weight);
        font-size: var(--jh-font-body-medium-1-font-size);
        line-height: var(--jh-font-body-medium-1-line-height);
        display: inline-flex;
        position: relative;
      }
      span {
        box-sizing: border-box;
        display: block;
      }
      .radio {
        border-color: var(
            --jh-radio-input-color-border-unselected-enabled,
            var(--jh-border-control-color)
          );
        border-style: var(--jh-border-control-style);
        border-width: var(--jh-border-control-width);
        background-color: var(
          --jh-radio-input-color-background-unselected-enabled,
          var(--jh-color-container-primary-enabled)
        );
        border-radius: var(
          --jh-radio-input-border-radius,
          var(--jh-border-radius-circle)
        );
        width: var(--jh-dimension-500);
        height: var(--jh-dimension-500);
        position: relative;
      }
      :host(:hover) {
        cursor: pointer;
      }
      :host(:focus) {
        outline: none;
      }
      :host(:focus-visible) .radio {
        outline-color: var(
          --jh-radio-color-focus,
          var(--jh-border-focus-color)
        );
        outline-style: var(--jh-border-focus-style);
        outline-width: var(--jh-border-focus-width);
        outline-offset: 1px;
        background-color: var(
          --jh-radio-input-color-background-unselected-focus,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-unselected-focus,
          var(--jh-color-content-brand-hover)
        );
      }
      :host .radio:hover {
        background-color: var(
          --jh-radio-input-color-background-unselected-hover,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-unselected-hover,
          var(--jh-color-content-brand-hover)
        );
      }
      :host .radio:active {
        background-color: var(
          --jh-radio-input-color-background-unselected-active,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-unselected-active,
          var(--jh-color-content-brand-active)
        );
      }
      :host([disabled]) .radio {
        background-color: var(
          --jh-radio-input-color-background-unselected-disabled,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-unselected-disabled,
          var(--jh-border-control-color)
        );
      }
      :host([checked]) .radio {
        background-color: var(
          --jh-radio-input-color-background-selected-enabled,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-selected-enabled,
          var(--jh-border-control-color)
        );
      }
      :host([checked]:focus-visible) .radio {
        background-color: var(
          --jh-radio-input-color-background-selected-focus,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-selected-focus,
          var(--jh-color-content-brand-hover)
        );
      }
      :host([checked]) .radio:hover {
        background-color: var(
          --jh-radio-input-color-background-selected-hover,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-selected-hover,
          var(--jh-color-content-brand-hover)
        );
      }
      :host([checked]) .radio:active {
        background-color: var(
          --jh-radio-input-color-background-selected-active,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-selected-active,
          var(--jh-color-content-brand-active)
        );
      }
      :host([checked][disabled]) .radio {
        background-color: var(
          --jh-radio-input-color-background-selected-disabled,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-selected-disabled,
          var(--jh-border-control-color)
        );
      }
      :host([checked]) .radio::before {
        background-color: var(
          --jh-radio-status-color-background-selected-enabled,
          var(--jh-color-content-brand-enabled)
        );
        border-radius: var(
          --jh-radio-input-border-radius,
          var(--jh-border-radius-circle)
        );
        width: var(--jh-dimension-300);
        height: var(--jh-dimension-300);
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
      }
      :host([checked]:focus-visible) .radio::before {
        background-color: var(
          --jh-radio-status-color-background-selected-focus,
          var(--jh-color-content-brand-hover)
        );
      }
      :host([checked]) .radio:hover::before {
        background-color: var(
          --jh-radio-status-color-background-selected-hover,
          var(--jh-color-content-brand-hover)
        );
      }
      :host([checked]) .radio:active::before {
        background-color: var(
          --jh-radio-status-color-background-selected-active,
          var(--jh-color-content-brand-active)
        );
      }
      :host([checked][disabled]) .radio::before {
        background-color: var(
          --jh-radio-status-color-background-selected-disabled,
          var(--jh-color-content-brand-enabled)
        );
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
          --jh-radio-label-color-text,
          var(--jh-color-content-primary-enabled)
        );
      }
      .helper-text {
        color: var(
          --jh-radio-helper-color-text,
          var(--jh-color-content-secondary-enabled)
        );
        font-family: var(--jh-font-helper-regular-font-family);
        font-weight: var(--jh-font-helper-regular-font-weight);
        font-size: var(--jh-font-helper-regular-font-size);
        line-height: var(--jh-font-helper-regular-line-height);
        margin: 0;
      }
      :host([disabled]) {
        opacity: var(--jh-radio-opacity-disabled, var(--jh-opacity-disabled));
        cursor: default;
      }
      :host([disabled]:focus-visible) .radio {
        outline: none;
      }
    `;
}

  static get properties() {
    return {
      accessibleLabel: {
        type: String,
        attribute: 'accessible-label',
      },
      checked: {
        type: Boolean,
        reflect: true,
      },
      disabled: {
        type: Boolean,
        reflect: true,
      },
      helperText: {
        type: String,
        attribute: 'helper-text',
      },
      label: {
        type: String,
      },
      value: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.internals.role = 'radio';
    /**
     * Sets an `aria-label` to assist screen reader users when no visible label is present.
     * @attr accessible-label
     * @type {string | null}
     */
    this.accessibleLabel = null;
    /**
     * Sets the selected or 'checked' state on the radio.
     * @type {boolean}
     */
    this.checked = false;
    /**
     * Disables the radio and prevents all user interactions. May cause radio to be ignored by assistive technologies(AT).
     * @type {boolean}
     */
    this.disabled = false;
    /**
     * Provides additional context or guidance for using the radio. For `helper-text` to be displayed, the `label` property must also be set.
     * @attr helper-text
     * @type {string | null}
     */
    this.helperText = null;
    /**
     * Sets the value of the data to be collected when selected.
     * @type {string | null}
     */
    this.label = null;
    /**
     * Sets the value of the radio.
     * @type {string | null}
     */
    this.value = null;

    this.addEventListener('click', this.#handleClick);
    this.addEventListener('keydown', this.#handleKeydown);
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('tabindex', '0');
    this.setAttribute('aria-checked', `${this.checked}`);
    if (this.accessibleLabel) {
      this.setAttribute('aria-label', `${this.accessibleLabel}`);
    }
    if (this.helperText) {
      this.setAttribute('aria-describedby', `radio-helper-text-${this.uniqueId}`);
    }

    let observer = new MutationObserver(this.#updateArias.bind(this));
    let options = {
      attributes: true,
    };
    observer.observe(this, options);
  }

  #updateArias(mutations) {
    for (const mutation of mutations) {
      if (mutation.attributeName === 'checked') {
        this.setAttribute('aria-checked', `${this.checked}`);
      }
      if (mutation.attributeName === 'disabled') {
        this.setAttribute('aria-disabled', `${this.disabled}`);
      }
      if (mutation.attributeName === 'accessible-label') {
        this.setAttribute('aria-label', `${this.accessibleLabel}`);
      }
    }
  }

  #handleClick() {
    if (this.disabled) return;
    if (this.checked) return;

    this.checked = true;
    this.dispatchCustomEvent('jh-change');
  }

  #handleKeydown(e) {
    if (e.code === 'Space') {
      this.#handleClick();
    }
  }

  /** @protected */
  render() {
    let helperText;
    let label;

    if (this.helperText) {
      helperText = html`
        <p class="helper-text" id="radio-helper-text-${this.uniqueId}">
          ${this.helperText}
        </p>
      `;
    }

    if (this.label) {
      label = html`
        <span class="label-container">
          <span class="label-text">${this.label}</span>
          ${helperText}
        </span>
      `;
    }

    return html`
      <span class="radio" aria-hidden="true"></span>
      ${label}
    `;
  }
}
JhRadio.register('jh-radio', JhRadio);
