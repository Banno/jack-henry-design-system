// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

let id = 0;

/**
 * @cssprop --jh-switch-opacity-disabled - The switch opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-switch-thumb-color-background - The thumb background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-switch-shadow-focus - The switch box-shadow when focused. Defaults to `--jh-shadow-focus`.
 * @cssprop --jh-switch-helper-color-text - The helper-text text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-switch-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-switch-track-color-background-unselected-enabled - The track color when unselected. Defaults to `--jh-color-control-enabled`.
 * @cssprop --jh-switch-track-color-background-unselected-focus - The track color when unselected and focused. Defaults to `--jh-color-control-hover`.
 * @cssprop --jh-switch-track-color-background-unselected-hover - The track color when unselected and hovered. Defaults to `--jh-color-control-hover`.
 * @cssprop --jh-switch-track-color-background-unselected-active - The track color when unselected and active. Defaults to `--jh-color-control-active`.
 * @cssprop --jh-switch-track-color-background-unselected-disabled - The track color when unselected and disabled. Defaults to `--jh-color-control-enabled`.
 * @cssprop --jh-switch-track-color-background-selected-enabled - The track color when selected. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-switch-track-color-background-selected-focus - The track color when selected and focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-switch-track-color-background-selected-hover - The track color when selected and hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-switch-track-color-background-selected-active - The track color when selected and active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-switch-track-color-background-selected-disabled - The track color when selected and disabled. Defaults to `--jh-color-content-brand-enabled`.
 *
 * @event jh-change - Dispatched when the state of the switch has changed.
 *
 * @customElement jh-switch
 */
export class JhSwitch extends LitElement {
  /** @type {?Number} */
  #id;

  static get styles() {
    return css`
      :host {
        font: var(--jh-font-body-regular-1);
        display: inline-flex;
        position: relative;
      }
      button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
        z-index: 2;
      }
      span {
        width: var(--jh-size-1400);
        height: var(--jh-size-600);
        display: inline-block;
        position: relative;
      }
      span::before,
      span::after {
        content: '';
        position: absolute;
      }
      /* track */
      span::before {
        background-color: var(
          --jh-switch-track-color-background-unselected-enabled,
          var(--jh-color-control-enabled)
        );
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: var(--jh-border-radius-300);
        transition: background-color 0.3s cubic-bezier(0.1, 0.5, 0.1, 1);
      }
      /* thumb */
      span::after {
        background-color: var(
          --jh-switch-thumb-color-background,
          var(--jh-color-container-primary-enabled)
        );
        border-radius: var(--jh-border-radius-circle);
        top: 2px;
        left: 2px;
        width: var(--jh-size-500);
        height: var(--jh-size-500);
        box-shadow: var(--jh-shadow-100);
        transition: all 0.3s cubic-bezier(0.1, 0.5, 0.1, 1);
      }
      /* Unselected states */
      button:focus-visible + span::before {
        box-shadow: var(--jh-switch-shadow-focus, var(--jh-shadow-focus));
        background-color: var(
          --jh-switch-track-color-background-unselected-focus,
          var(--jh-color-control-hover)
        );
      }
      button:hover + span::before {
        background-color: var(
          --jh-switch-track-color-background-unselected-hover,
          var(--jh-color-control-hover)
        );
      }
      button:active + span::before {
        background-color: var(
          --jh-switch-track-color-background-unselected-active,
          var(--jh-color-control-active)
        );
      }
      button:disabled + span::before,
      :host([accessible-disabled='true']) span::before {
        background-color: var(
          --jh-switch-track-color-background-unselected-disabled,
          var(--jh-color-control-enabled)
        );
      }
      /* Selected states */
      button[checked] + span::before {
        background-color: var(
          --jh-switch-track-color-background-selected-enabled,
          var(--jh-color-content-brand-enabled)
        );
      }
      button[checked]:focus-visible + span::before {
        box-shadow: var(--jh-switch-shadow-focus, var(--jh-shadow-focus));
        background-color: var(
          --jh-switch-track-color-background-selected-focus,
          var(--jh-color-content-brand-hover)
        );
      }
      button[checked]:hover + span::before {
        background-color: var(
          --jh-switch-track-color-background-selected-hover,
          var(--jh-color-content-brand-hover)
        );
      }
      button[checked]:active + span::before {
        background-color: var(
          --jh-switch-track-color-background-selected-active,
          var(--jh-color-content-brand-active)
        );
      }
      button[checked]:disabled + span::before,
      :host([accessible-disabled='true'][checked]) span::before {
        background-color: var(
          --jh-switch-track-color-background-selected-disabled,
          var(--jh-color-content-brand-enabled)
        );
      }
      :host([disabled]),
      :host([accessible-disabled='true']) {
        opacity: var(--jh-switch-opacity-disabled, var(--jh-opacity-disabled));
      }
      :host([accessible-disabled='true']:focus) span::before {
        box-shadow: none;
      }
      button:disabled,
      :host([accessible-disabled='true']) button {
        cursor: default;
        pointer-events: none;
      }
      button[checked] + span::after {
        transform: translateX(32px);
      }
      .label-container {
        margin-top: var(--jh-space-50);
        margin-left: var(--jh-space-200);
        flex: 1;
      }
      .label-text,
      .helper-text {
        word-break: break-word;
      }
      .label-text {
        color: var(
          --jh-switch-label-color-text,
          var(--jh-color-content-primary-enabled)
        );
      }
      .helper-text {
        color: var(
          --jh-switch-helper-color-text,
          var(--jh-color-content-secondary-enabled)
        );
        font: var(--jh-font-helper-regular);
        margin: 0;
      }
    `;
  }

  static get properties() {
    return {
      /** Sets an `aria-disabled` to signify to screen readers that the disabled switch should remain perceivable while disabled. */
      accessibleDisabled: {
        type: String,
        attribute: 'accessible-disabled',
        reflect: true,
      },
      /** Sets an `aria-label` to assist screen reader users when no visible label is present. */
      accessibleLabel: {
        type: String,
        attribute: 'accessible-label',
      },
      /** Sets the selected or 'checked' state on the switch */
      checked: {
        type: Boolean,
        reflect: true,
      },
      /** Disables the switch and prevents all user interactions. May cause switch to be ignored by assistive technologies(AT). See `accessible-disabled` if switch should remain perceivable to AT. */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Provides additional context or guidance for using the switch. For `helper-text` to be displayed, the `label` property must also be set.
       */
      helperText: {
        type: String,
        attribute: 'helper-text',
      },
      /**
       * Describes the intent of the switch.
       */
      label: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    /** @type {'true'|'false'} */
    this.accessibleDisabled = null;
    /** @type {?string} */
    this.accessibleLabel = null;
    /** @type {?boolean} */
    this.checked = false;
    /** @type {?boolean} */
    this.disabled = false;
    /** @type {?string} */
    this.helperText = null;
    /** @type {?string} */
    this.label = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.#id = id++;
  }

  #handleClick() {
    if (!this.disabled && this.accessibleDisabled !== 'true') {
      this.checked = !this.checked;
      const options = {
        bubbles: true,
        composed: true,
        cancelable: true,
      };
      this.dispatchEvent(new CustomEvent('jh-change', options));
    }
  }

  render() {
    let helperText;
    let label;

    if (this.helperText) {
      helperText = html`
        <p class="helper-text" id="switch-helper-text-${this.#id}">
          ${this.helperText}
        </p>
      `;
    }

    if (this.label) {
      label = html`
        <div class="label-container">
          <label class="label-text" for="switch-label-${this.#id}">
            ${this.label}
          </label>
          ${helperText}
        </div>
      `;
    }

    return html`
      <button
        tabindex="0"
        @click=${this.#handleClick}
        aria-label="${ifDefined(this.accessibleLabel)}"
        aria-disabled="${ifDefined(this.accessibleDisabled)}"
        type="button"
        aria-describedby=${this.helperText ? `switch-helper-text-${this.#id}` : null}
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        aria-pressed="${this.checked}"
        id="switch-label-${this.#id}"
      ></button>
      <span aria-hidden="true"></span>
      ${label}
    `;
  }
}

customElements.define('jh-switch', JhSwitch);
