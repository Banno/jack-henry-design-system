// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { JhInput } from '../input/input.js';
import '@jack-henry/jh-icons/icons-wc/icon-eye-slash.js';
import '@jack-henry/jh-icons/icons-wc/icon-eye.js';

let id = 0;

/**
 * @slot jh-input-password-hidden - Use to insert a custom icon within the toggle password button when the input value is masked. 
 * @slot jh-input-password-visible - Use to insert a custom icon within the toggle password button when the input value is unmasked.
 * @customElement jh-input-password
 */
export class JhInputPassword extends JhInput {

  /** @type {?number} */
  #id;

  static get properties() {
    return {
      /** Unmasks the input field value when set. */
      passwordVisible: { type: Boolean, attribute: 'password-visible', reflect: true},
      /** Sets an `aria-label` on the toggle password button, which encapsulates the `jh-input-password-visible` slot, to assist screen reader users. The label should indicate that activating the button will mask the password. */
      accessibleLabelHidePassword: {
        type: String,
        attribute: 'accessible-label-hide-password',
      },
      /** Sets an `aria-label` on the toggle password button, which encapsulates the `jh-input-password-hidden` slot, to assist screen reader users. The label should indicate that activating the button will unmask the password. */
      accessibleLabelShowPassword: {
        type: String,
        attribute: 'accessible-label-show-password',
      },
    };
  }

  constructor() {
    super();
    /** @type {?string} */
    this.accessibleLabelHidePassword = null;
    /** @type {?string} */
    this.accessibleLabelShowPassword = null;
    /** @type {boolean} */
    this.passwordVisible = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.#id = id++;
  }

renderInput() {
    let describedby;

    if (this.helperText || (this.errorText && this.invalid)) {
      describedby = this._getDescribedby();
    }

    const leftSlot = this.readonly ? null : this.renderLeftSlot();
    const rightSlot = this.readonly ? null : this.renderRightSlot();
    const clearButton = this.readonly ? null : this.renderClearButton();

    return html`
      <div class="input-container">
        <div class="input-wrapper">
          ${leftSlot}
          <input
            id="jh-input-${this.#id}"
            aria-describedby=${describedby}
            aria-invalid=${ifDefined(this.invalid ? 'true' : null)}
            aria-label=${ifDefined(
              this.accessibleLabel === '' ? null : this.accessibleLabel
            )}
            autocomplete=${ifDefined(
              this.autocomplete === '' ? null : this.autocomplete
            )}
            ?disabled=${this.disabled}
            enterkeyhint=${ifDefined(
              this.enterkeyhint === '' ? null : this.enterkeyhint
            )}
            inputmode=${ifDefined(this.inputmode === '' ? null : this.inputmode)}
            maxlength=${ifDefined(this.maxlength === '' ? null : this.maxlength)}
            minlength=${ifDefined(this.minlength === '' ? null : this.minlength)}
            name=${ifDefined(this.name === '' ? null : this.name)}
            ?readonly=${this.readonly}
            ?required=${this.required}
            type=${this.passwordVisible ? 'text' : 'password'}
            .value=${this.value}
            @keydown=${this.inputMask ? this._handleKeydown : null}
            @change=${this._handleChange}
            @input=${this._handleInput}
            @select=${this._handleSelect}
          />
          ${clearButton}
          ${rightSlot}
        </div>
      </div>
    `;
  }

  renderRightSlot() {
    if (this.hideRightSlot) return;
    
    return html`
      <slot name="jh-input-right" @slotchange=${this._handleSlotChange}>${this.#renderTogglePasswordBtn()}</slot>
      
    `;
  }

  #renderTogglePasswordBtn() {
    if (this.readonly) return;

    let accessibleLabel = this.passwordVisible
      ? this.accessibleLabelHidePassword
      : this.accessibleLabelShowPassword;

    let passwordBtn = html`
        <jh-button
          class="password-toggle-btn"
          size="small"
          appearance="tertiary"
          ?disabled=${this.disabled}
          accessible-label=${accessibleLabel}
          @click=${this.#togglePassword.bind(this)}
        >
          ${this.passwordVisible
            ? html`
                <slot
                  name="jh-input-password-visible"
                  slot="jh-button-icon"
                >
                  <jh-icon-eye-slash
                    slot="jh-button-icon"
                    aria-hidden="true"
                    size="medium"
                  ></jh-icon-eye-slash>
                </slot>
              `
            : html`
                <slot
                  name="jh-input-password-hidden"
                  slot="jh-button-icon"
                >
                  <jh-icon-eye
                    slot="jh-button-icon"
                    aria-hidden="true"
                    size="medium"
                  ></jh-icon-eye>
                </slot>
              `}
        </jh-button>
    `;
    return passwordBtn;
  }

  #togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
}
customElements.define('jh-input-password', JhInputPassword);