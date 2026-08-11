// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * Checkbox groups contain sets of checkboxes where several options can be selected.
 * 
 * [Checkbox Group Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-checkbox-group--docs)
 * 
 * @cssprop --jh-checkbox-group-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-checkbox-group-opacity-disabled - The opacity of the checkbox group when disabled. Defaults to `--jh-opacity-disabled`.
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
export class JhCheckboxGroup extends JhElement {
  static get styles() {
    return css`
      :host {
        --checkbox-group-helper-regular-font-family: var(--jh-font-helper-regular-font-family);
        --checkbox-group-helper-regular-font-weight: var(--jh-font-helper-regular-font-weight);
        --checkbox-group-helper-regular-font-size: var(--jh-font-helper-regular-font-size);
        --checkbox-group-helper-regular-line-height: var(--jh-font-helper-regular-line-height);
        font-family: var(--checkbox-group-helper-regular-font-family);
        font-weight: var(--checkbox-group-helper-regular-font-weight);
        font-size: var(--checkbox-group-helper-regular-font-size);
        line-height: var(--checkbox-group-helper-regular-line-height);
        display: block;
      }
      /* reset fieldset and legend for styling */
      :host fieldset {
        border: none;
        padding: 0;
        margin: 0;
      }
      :host([disabled]) {
        --group-disabled-opacity: var(
          --jh-checkbox-group-opacity-disabled, 
          var(--jh-opacity-disabled)
        );
      }
      :host([disabled]) .label,
      :host([disabled]) .helper-text,
      :host([disabled]) .error-text {
        opacity: var(--group-disabled-opacity);
        pointer-events: none;
      }
      :host([disabled]) ::slotted(jh-checkbox) {
        --jh-checkbox-opacity-disabled: var(--group-disabled-opacity);
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
        font-family: var(--jh-font-helper-medium-font-family);
        font-weight: var(--jh-font-helper-medium-font-weight);
        font-size: var(--jh-font-helper-medium-font-size);
        line-height: var(--jh-font-helper-medium-line-height);
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
        font-family: var(--checkbox-group-helper-regular-font-family);
        font-weight: var(--checkbox-group-helper-regular-font-weight);
        font-size: var(--checkbox-group-helper-regular-font-size);
        line-height: var(--checkbox-group-helper-regular-line-height);
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
      accessibleLabel: {
        type: String,
        attribute: 'accessible-label',
      },
      disabled: {
        type: Boolean,
        reflect: true,
      },
      errorText: {
        type: String,
        attribute: 'error-text',
      },
      helperText: {
        type: String,
        attribute: 'helper-text',
      },
      invalid: {
        type: Boolean,
        reflect: true,
      },
      label: {
        type: String,
      },
      required: {
        type: Boolean,
        reflect: true,
      },
      orientation: {
        type: String,
        reflect: true,
      },
      showIndicator: {
        type: Boolean,
        reflect: true,
        attribute: 'show-indicator',
      },
    };
  }
  constructor() {
    super();
    /**
     * Disables the checkbox group and prevents all user interactions. May cause the group to be ignored by assistive technologies (AT).
     * @type {boolean}
     */
    this.disabled = false;
    /**
     * Sets an `aria-label` to assist screen reader users when no visible label is present.
     * @attr accessible-label
     * @type {string | null}
     */
    this.accessibleLabel = null;
    /**
     * Text to be displayed when checkbox group has failed validation and `invalid` is true.
     * @attr error-text
     * @type {string | null}
     */
    this.errorText = null;
    /**
     * Provides additional context or guidance for using the checkbox group. For `helper-text` to be displayed, the `label` property must also be set.
     * @attr helper-text
     * @type {string | null}
     */
    this.helperText = null;
    /**
     * Sets an `aria-invalid` on the checkbox group to indicate the value supplied was invalid and displays `error-text` when set.
     * @type {boolean}
     */
    this.invalid = false;
    /**
     * Describes the type of data to be collected.
     * @type {string | null}
     */
    this.label = null;
    /**
     * Indicates a value is required.
     * @type {boolean}
     */
    this.required = false;
    /**
     * Determines the orientation of the checkbox group.
     * @type { 'vertical' | 'horizontal' }
     */
    this.orientation = 'vertical';
    /**
     * Adds a visual indicator next to the label. Indicates that a value is optional (by default) or required if the `required` property is also set. For the indicator to be displayed, the `label` property must also be set.
     * @attr show-indicator
     * @type {boolean}
     */
    this.showIndicator = false;
  }

  /** @protected */
  firstUpdated() {
    const slot = this.renderRoot?.querySelector('slot');
    this.#syncDisabledToChildren();
  }

  /**
   * @protected
   * @param {import('lit').PropertyValues} changedProperties
   */
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
      return `checkbox-group-error-${this.uniqueId} checkbox-group-helper-${
        this.uniqueId
      }`;
    } else if (this.errorText && this.invalid) {
      return `checkbox-group-error-${this.uniqueId}`;
    } else if (this.helperText && this.label) {
      return `checkbox-group-helper-${this.uniqueId}`;
    }
  }

  /** @protected */
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
      helperText = html`<p class="helper-text" id="checkbox-group-helper-${this.uniqueId}">${this.helperText}</p>`;
    }

    if (this.label) {
      label = html`
        <legend class="label" for="checkbox-group-label-${this.uniqueId}">
          ${this.label}${indicator}
        </legend>
        ${helperText}`;
    }

    if (this.invalid && this.errorText) {
      errorText = html`<p class="error-text" id="checkbox-group-error-${this.uniqueId}">${this.errorText}</p>`;
    }

    return html`
      <fieldset
        id=${ifDefined(this.label ? `checkbox-group-label-${this.uniqueId}` : null)}
        aria-describedby=${ifDefined(this.#getAriaDescribedBy())}
        ?required=${this.required}
        aria-invalid=${ifDefined(this.invalid ? 'true' : null)}
        aria-disabled=${ifDefined(this.disabled ? 'true' : null)}
        aria-label=${ifDefined(this.accessibleLabel)}>
        ${label}
        <div class="controls"><slot @slotchange=${() => this.#syncDisabledToChildren()} ></slot></div>
        ${errorText}
      </fieldset>
    `;
  }
}
JhCheckboxGroup.register('jh-checkbox-group', JhCheckboxGroup);