// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';
import '../notification/notification.js';

/**
 * @cssprop --jh-toast-shadow - The toast box-shadow. Defaults to `--jh-shadow-200`.
 * @cssprop --jh-toast-z-index - The toast z-index. Defaults to `--jh-z-index-positive-1000`.
 * @slot default - Use to insert contextual information.
 * @slot jh-toast-icon - Use to insert a button or icon to the left of the default slot.
 * @slot jh-toast-dismiss-icon - Use to insert icon within the dismiss button.
 * @slot jh-toast-action - Use to insert action button(s). Placed to the right of the default slot. Set `stacked` property to place slot below default slot.
 * @event jh-dismiss - Dispatched when the toast is dismissed.
 * @customElement jh-toast
 */
export class JhToast extends LitElement {
  static get styles() {
    return css`
      @keyframes fadeInUp  {
        0% {
          opacity: 0;
          transform: translateY(105%);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes fadeOutDown {
        0% {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
        100% {
          opacity: 0;
          transform: translate3d(0, 15%, 0);
        }
      }
      :host {
        z-index: var(--jh-toast-z-index, var(--jh-z-index-positive-1000));
        font: var(--jh-font-body-regular-1);
        animation: 0.75s cubic-bezier(0.1, 0.5, 0.1, 1) fadeInUp;
        animation-delay: initial;
        animation-iteration-count: 1;
        animation-fill-mode: backwards;
        animation-play-state: initial;
        opacity: 1;
        transform: translateY(0);
        transition: opacity, transform cubic-bezier(0.1, 0.5, 0.1, 1) 0.75s;
        will-change: opacity, transform;
        box-sizing: border-box;
        display: block;
        position: relative;
      }
      :host(.remove) {
        animation: 0.75s cubic-bezier(0.1, 0.5, 0.1, 1) fadeOutDown;
        animation-delay: initial;
        animation-iteration-count: 1;
        animation-fill-mode: backwards;
        animation-play-state: initial;
        transition: opacity, transform cubic-bezier(0.1, 0.5, 0.1, 1) 0.75s;
        opacity: 0;
      }
      jh-notification {
        box-shadow: var(--jh-toast-shadow, var(--jh-shadow-200));
      }
    `;
  }

  static get properties() {
    return {
      /** Sets the background color of the toast to convey message connotation. */
      appearance: { type: String, reflect: true },
      /** Adds an aria-label to the dismiss button to assist screen readers. */
      dismissButtonAccessibleLabel: {
        type: String,
        attribute: 'dismiss-button-accessible-label',
      },
      /** Removes dismiss button from toast. */
      hideDismissButton: { type: Boolean, attribute: 'hide-dismiss-button' },
      /** Places action button(s) on new line, below default slot. */
      stacked: { type: Boolean, reflect: true },
      /** Sets a timer, in milliseconds, to auto-dismiss the toast. To disable timeout, set to 0. */
      timeout: { type: Number },
    };
  }

  constructor() {
    super();
    /** @type {number} */
    this.timeout = 5000;
    /** @type {'positive'|'neutral'|'negative'} */
    this.appearance = 'neutral';
    /** @type {string} */
    this.dismissButtonAccessibleLabel = null;
    /** @type {boolean} */
    this.hideDismissButton = false;
    /** @type {boolean} */
    this.stacked = false;
    this.addEventListener('jh-dismiss', this.#handleDismiss);
  }

  firstUpdated() {
    this.#startTimeout();
  }

  #startTimeout() {
    if (this.timeout > 0) {
      setTimeout(() => {
        this.#removeToast();
      }, this.timeout);
    }
  }

  #removeToast() {
    this.#dispatch('jh-dismiss');
  }

  #dispatch(name) {
    this.dispatchEvent(
      new CustomEvent(name, {
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
  }

  #handleDismiss() {
    this.classList.add('remove');
    this.onanimationend = () => {
      this.remove();
    };
  }

  #handleSlotChange() {
    let actionBtns = this.querySelectorAll('jh-button');

    for (const btn of actionBtns) {
      if (btn.getAttribute('size') !== 'small') {
        btn.setAttribute('size', 'small');
      }
    }
  }

  render() {
    return html`
      <jh-notification
        appearance=${this.appearance}
        dismiss-button-accessible-label=${this.dismissButtonAccessibleLabel}
        ?hide-dismiss-button=${this.hideDismissButton}
        ?stacked=${this.stacked}>
          <slot name="jh-toast-icon" slot="jh-notification-icon"></slot>
          <slot></slot>
          <slot name="jh-toast-action" slot="jh-notification-action" @slotchange=${
            this.#handleSlotChange
          }>
          </slot>
          <slot name="jh-toast-dismiss-icon" slot="jh-notification-dismiss-icon">
            <jh-icon-xmark></jh-icon-xmark>
          </slot>
      </jh-notification>
    `;
  }
}

customElements.define('jh-toast', JhToast);
