// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';
import '../toast/toast.js';

/**
 * @cssprop --jh-toast-controller-z-index - The toast controller z-index. Defaults to `--jh-z-index-positive-1000`.
 * @slot default - Use to insert `<jh-toast>` components if appending toasts manually.
 * @event jh-dismiss - Dispatched when the toast controller dismisses the oldest toast, and when toasts are dismissed manually by the user.
 * 
 * @customElement jh-toast-controller
 */
export class JhToastController extends JhElement {
  static get styles() {
    return css`
      :host {
        z-index: var(--jh-toast-controller-z-index, var(--jh-z-index-positive-1000));
        bottom: var(--jh-dimension-800);
        left: var(--jh-dimension-800);
        position: fixed;
      }
      ::slotted(jh-toast) {
        margin-top: var(--jh-dimension-200);
      }
    `;
  }

  static get properties() {
    return {
      /** Sets the maximum number of toasts to be displayed at a time. */
      maxCount: { type: Number, attribute: 'max-count' },
      /** Sets the role of the toast controller and establishes a live region to expose changes to assistive technologies. */
      role: { type: String },
    };
  }

  constructor() {
    super();
    /** @type {number} */
    this.maxCount = 3;
    /** @type {'status'|'alert'} */
    this.role = 'status';

    window.addEventListener('jh-create-toast', this.#createToast.bind(this));
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.getAttribute('role')) {
      this.setAttribute('role', this.role);
    }
  }

  #handleSlotChange() {
    let currentToasts = this.children.length; 
    
    if (currentToasts > this.maxCount) {
      let extraToast = currentToasts - this.maxCount;
      for (let i = 0; i < extraToast; i++) {
        this.dispatchCustomEvent('jh-dismiss');
        this.#handleDismiss(this.children[i]);
      }
    }
  }

  // adds dismiss animation to toast and removes from DOM once completed 
  #handleDismiss(toast) {
    toast.classList.add('remove');
    toast.addEventListener("animationend", () =>  {
      toast.remove();
    });
  }

  #createToast(e) {
    const toast = document.createElement('jh-toast');
    const {
      toastAction,
      toastDismissIcon,
      text,
      toastIcon,
      dismissButtonAccessibleLabel,
      appearance,
      hideDismissButton,
      timeout,
      stacked,
    } = e.detail;
 
    toastAction ? toast.innerHTML += toastAction : null;
    toastDismissIcon ? toast.innerHTML += toastDismissIcon : null;
    text ? toast.innerHTML += text : null;
    toastIcon ? toast.innerHTML += toastIcon : null;
    dismissButtonAccessibleLabel ? toast.setAttribute('dismiss-button-accessible-label', dismissButtonAccessibleLabel) : null;
    appearance ? toast.setAttribute('appearance', appearance) : null;
    hideDismissButton ? toast.setAttribute('hide-dismiss-button', '') : null;
    timeout >= 0 ? toast.setAttribute('timeout', timeout) : null;
    stacked ? toast.setAttribute('stacked', '') : null;

    this.appendChild(toast);
  }

  render() {
    return html`
      <slot @slotchange=${this.#handleSlotChange}></slot>
    `;
  }
}
JhElement.register('jh-toast-controller', JhToastController);


