/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import { html, css } from 'lit';
import { JhInput } from '../input/input.js';
import '@jack-henry/jh-icons/icons-wc/icon-chevron-up-small.js';
import '@jack-henry/jh-icons/icons-wc/icon-chevron-down-small.js';

/**
 * Input Trigger
 * @customElement jh-input-trigger
 */
export class JhInputTrigger extends JhInput {
  get #inputEl() {
    return this.renderRoot?.querySelector('input');
  }

  static get styles() {
    return [
      super.styles,
       css` 
       :host {

      }
    `,
    ];
  }

  static get properties() {
    return {
      /** Property description */
      open: { type: Boolean },
      accessibleExpanded: {
        type: Boolean,
        attribute: 'accessible-expanded',
      },
      accessibleControls: {
        type: String,
        attribute: 'accessible-controls',
      },
      accessibleActivedescendant: {
        type: String,
        attribute: 'accessible-activedescendant',
      },
  };
}

  constructor() {
    super();
    /** @type {boolean} */
    this.open = false;
    /** @type {boolean} */
    this.accessibleExpanded = false;
    /** @type {?string} */
    this.accessibleControls = null;
    /** @type {?string} */
    this.accessibleActivedescendant = null;
  }

    firstUpdated() {
    super.firstUpdated();
    this.#inputEl.setAttribute('role', 'combobox');
    this.#inputEl.setAttribute('readonly', '');
    this.#inputEl.setAttribute('aria-expanded', `${this.accessibleExpanded}`);
    if (this.accessibleControls) {
        this.#inputEl.setAttribute('aria-controls', `${this.accessibleControls}`);
     } 
    }

    updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has('accessibleExpanded')) {
      if (this.accessibleExpanded) {
        this.#inputEl.setAttribute('aria-expanded', 'true');
      } else {
        this.#inputEl.setAttribute('aria-expanded', 'false');
      }
    }
    if (changedProperties.has('accessibleControls')) {
      if (this.accessibleControls) {
        this.#inputEl.setAttribute('aria-controls', `${this.accessibleControls}`);
      } else {
        this.#inputEl.removeAttribute('aria-controls');
      }
    }
    if (changedProperties.has('accessibleActivedescendant')) {
      if (this.accessibleActivedescendant) {
        this.#inputEl.setAttribute('aria-activedescendant', `${this.accessibleActivedescendant}`);
      } else {
        this.#inputEl.removeAttribute('aria-activedescendant');
      }
    }
  }

  renderRightSlot() {
    return html`
      ${this.open ? html`<slot name="jh-input-trigger-open"><jh-icon-chevron-up-small></jh-icon-chevron-up-small></slot>` : html`<slot name="jh-input-trigger-closed"><jh-icon-chevron-down-small></jh-icon-chevron-down-small></slot>`}
    `;
  }
}

customElements.define('jh-input-trigger', JhInputTrigger);