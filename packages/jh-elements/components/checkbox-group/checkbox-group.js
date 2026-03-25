// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

let id = 0;
/**
 *
 * @cssprop --jh-checkbox-group-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-checkbox-group-opacity-disabled - The opacity of the checkbox group when disabled. Defaults to `0.3`.
 * @cssprop --jh-checkbox-group-required-color-text - The required indicator color.
 * Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-checkbox-group-required-color-text-optional - The optional indicator text color.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-checkbox-group-helper-color-text - The helper-text text color.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-checkbox-group-error-color-text - The error-text text color.
 * Defaults to `--jh-color-content-negative-enabled`.
 *
 * @slot default - Use to insert `<jh-checkbox>` component(s).
 *
 * @customElement jh-checkbox-group
 */
export class JhCheckboxGroup extends LitElement {
  /** @type {?Number} */
  #id;

  static get styles() {
    return css`
      :host {
        font-family: var(--jh-font-helper-regular-font-family);
        font-weight: var(--jh-font-helper-regular-font-weight);
        font-size: var(--jh-font-helper-regular-font-size);
        line-height: var(--jh-font-helper-regular-line-height);
        display: block;
      }
      /* reset fieldset and legend for styling */
      :host fieldset {
        border: none;
        padding: 0;
        margin: 0;
      }
      :host([disabled]) .label,
      :host([disabled]) .helper-text {
        opacity: var(
          --jh-checkbox-group-opacity-disabled, 
          var(--jh-opacity-disabled)
        );
        pointer-events: none;
      }
      :host legend {
        padding: 0;
      }
      :host([label]) .controls {
        margin-top: var(--jh-dimension-200);
      }
      :host([orientation='vertical'])  .controls {
        display: flex;
        flex-direction: column;
      }
      :host([orientation='vertical'])  ::slotted(*) {
        margin-bottom: var(--jh-dimension-200);
        flex: 1;
      }
      :host([orientation='vertical'])  ::slotted(:last-of-type) {
        margin-bottom: 0;
      }
      :host([orientation='horizontal']) .controls {
        display: flex;
        flex-direction: row;
      }
      :host([orientation='horizontal']) ::slotted(*) {
        margin-right: var(--jh-dimension-400);
        margin-bottom: 0;
        flex: 1;
      }
      :host([orientation='horizontal']) ::slotted(:last-of-type) {
        margin-right: 0;
      }
      .label {
        color: var(
          --jh-checkbox-group-label-color-text,
          var(--jh-color-content-primary-enabled)
        );
      }
      .helper-text {
        color: var(
          --jh-checkbox-group-helper-color-text,
          var(--jh-color-content-secondary-enabled)
        );
        margin: 0;
      }
      .helper-text,
      :host([invalid]) .error-text {
        word-break: break-word;
      }
      :host([invalid]) .error-text {
        color: var(
          --jh-checkbox-group-error-color-text,
          var(--jh-color-content-negative-enabled)
        );
        margin: var(--jh-dimension-200) 0 0 0;
      }
      :host([show-indicator]) .indicator {
        color: var(
          --jh-checkbox-group-required-color-text-optional,
          var(--jh-color-content-primary-enabled)
        );
      }
      :host([show-indicator][required]) .indicator {
        color: var(
          --jh-checkbox-group-required-color-text,
          var(--jh-color-content-negative-enabled)
        );
      }
    `;
  }
  static get properties() {
    return {
      /** Sets an `aria-label` to assist screen reader users when no visible label is present. */
      accessibleLabel: {
        type: String,
        attribute: 'accessible-label',
      },
      /** Disables the checkbox group and prevents all user interactions. May cause the group to be ignored by assistive technologies (AT). */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /** Text to be displayed when checkbox group has failed validation and `invalid` is true. */
      errorText: {
        type: String,
        attribute: 'error-text',
      },
      /**
       * Provides additional context or guidance for using the checkbox group. For `helper-text` to be displayed, the `label` property must also be set.
       */
      helperText: {
        attribute: 'helper-text',
      },
      /** Sets an `aria-invalid` on the checkbox group to indicate the value supplied was invalid and displays `error-text` when set. */
      invalid: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Describes the type of data to be collected.
       */
      label: {
        type: String,
      },
      /** Indicates a value is required. */
      required: {
        type: Boolean,
        reflect: true,
      },
      /** Determines the orientation of the checkbox group. */
      orientation: {
        type: String,
        reflect: true,
      },
      /** 
       * Adds a visual indicator next to the label. Indicates that a value is optional (by default) or required if the `required` property is also set. For the indicator to be displayed, the `label` property must also be set. */
      showIndicator: {
        type: Boolean,
        reflect: true,
        attribute: 'show-indicator',
      },
    };
  }
  constructor() {
    super();
    /** @type {?boolean} */
    this.disabled = false;
    /** @type {?string} */
    this.accessibleLabel = null;
    /** @type {?string} */
    this.errorText = null;
    /** @type {?string} */
    this.helperText = null;
    /** @type {?boolean} */
    this.invalid = false;
    /** @type {?string} */
    this.label = null;
    /** @type {?boolean} */
    this.required = false;
    /** @type {'vertical'|'horizontal'} */
    this.orientation = 'vertical';
    /** @type {?boolean} */
    this.showIndicator = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.#id = id++;
  }

  firstUpdated() {
    const slot = this.renderRoot?.querySelector('slot');
    slot?.addEventListener('slotchange', () => this.#syncDisabledToChildren());
    this.#syncDisabledToChildren();
  }

  updated(changedProperties) {
    if (changedProperties.has('disabled')) {
      this.#syncDisabledToChildren();
    }
  }

  #syncDisabledToChildren() {
    const slot = this.renderRoot?.querySelector('slot');
    if(!slot) return;

    const checkboxes = slot.assignedElements().filter(el => el.tagName === 'JH-CHECKBOX');
    checkboxes.forEach(checkbox => {
      checkbox.disabled = this.disabled;
    })
  }

  #getAriaDescribedBy() {
    if (this.errorText && this.invalid && this.helperText && this.label) {
      return `checkbox-group-error-${this.#id} checkbox-group-helper-${
        this.#id
      }`;
    } else if (this.errorText && this.invalid) {
      return `checkbox-group-error-${this.#id}`;
    } else if (this.helperText && this.label) {
      return `checkbox-group-helper-${this.#id}`;
    }
  }

  render() {
    let indicator;
    let helperText;
    let label;
    let errorText;

    if (this.showIndicator) {
      if (this.required) {
        indicator = html`<span class="indicator" aria-hidden="true"> *</span>`;
      } else {
        indicator = html`<span class="indicator"> (optional)</span>`;
      }
    }

    if (this.helperText) {
      helperText = html`<p class="helper-text" id="checkbox-group-helper-${this.#id}">${this.helperText}</p>`;
    }

    if (this.label) {
      label = html`
        <legend class="label" for="checkbox-group-label-${this.#id}">
          ${this.label}${indicator}
        </legend>
        ${helperText}`;
    }

    if (this.invalid && this.errorText) {
      errorText = html`<p class="error-text" id="checkbox-group-error-${this.#id}">${this.errorText}</p>`;
    }

    return html`
      <fieldset
        id=${ifDefined(this.label ? `checkbox-group-label-${this.#id}` : null)}
        aria-describedby=${ifDefined(this.#getAriaDescribedBy())}
        ?required=${this.required}
        aria-invalid=${ifDefined(this.invalid ? 'true' : null)}
        aria-disabled=${ifDefined(this.disabled ? 'true' : null)}
        aria-label=${ifDefined(this.accessibleLabel)}>
        ${label}
        <div class="controls"><slot></slot></div>
        ${errorText}
      </fieldset>
    `;
  }
}
customElements.define('jh-checkbox-group', JhCheckboxGroup);
