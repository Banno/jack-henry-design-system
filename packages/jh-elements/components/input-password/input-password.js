// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, render, css } from 'lit';
import { JhInput } from '../input/input.js';
import '@jack-henry/jh-icons/icons-wc/icon-eye-slash.js';
import '@jack-henry/jh-icons/icons-wc/icon-eye.js';

/**
 * @slot jh-input-password-hidden - Use to insert a custom icon within the toggle password button when the input value is masked. 
 * @slot jh-input-password-visible - Use to insert a custom icon within the toggle password button when the input value is unmasked.
 * @customElement jh-input-password
 */
export class JhInputPassword extends JhInput {
  #inputEl;

  static get styles() {
    return [
      super.styles,
      css`
        .password-toggle-btn {
          position: absolute;
          right: var(--jh-dimension-400);
        }
        .clear-button {
          right: var(--jh-dimension-1400);
        }
        .display-clear-button input {
          padding-right: var(--jh-dimension-2400);
        }
        input {
          padding-right: var(--jh-dimension-1400);
        }
        :host([size='small']) .password-toggle-btn {
          top: 4px;
        }
        :host([size='medium']) .password-toggle-btn {
          top: 8px;
        }
        :host([size='large']) .password-toggle-btn {
          top: 12px;
        }
      `
    ];
  }

  static get properties() {
    return {
      /** Unmasks the input field value when set. */
      passwordVisible: { type: Boolean, attribute: 'password-visible'},
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
    this.hideRightSlot = true;
    /** @type {boolean} */
    this.passwordVisible = false;
  }

  firstUpdated() {
    super.firstUpdated();
    this.#inputEl = this.shadowRoot.querySelector('input');
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has('passwordVisible')) {
      if (this.passwordVisible) {
        this.#inputEl.setAttribute('type', 'text');
      } else {
        this.#inputEl.setAttribute('type', 'password');
      }
    }
    this.#insertTogglePasswordBtn();
  }

  #insertTogglePasswordBtn() {
    let inputContainerEl = this.shadowRoot.querySelector('.input-container');
    let togglePasswordButton = this.#createTogglePasswordBtn();
    render(togglePasswordButton, inputContainerEl);
  }

  #createTogglePasswordBtn() {
    if (this.readonly) {
      return;
    }

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