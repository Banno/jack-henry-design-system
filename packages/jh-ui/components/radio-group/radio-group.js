// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

let id = 0;
/**
 *
 * @cssprop --jh-radio-group-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-radio-group-required-color-text - The required indicator color. 
 * Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-radio-group-required-color-text-optional - The optional indicator text color.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-radio-group-helper-color-text - The helper-text text color. 
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-radio-group-error-color-text - The error-text text color. 
 * Defaults to `--jh-color-content-negative-enabled`.
 *
 * @slot default - Use to insert `<jh-radio>` components(s).
 * 
 * @event jh-change - Dispatched when the value of the radio group has changed.
 *
 * @customElement jh-radio-group
 */
export class JhRadioGroup extends LitElement {
  static get formAssociated() {
    return true;
  }
  #checked;
  /** @type {?Number} */
  #id;
  /** @type {ElementInternals} */
  #internals;
  /** @type {?string} */
  #value;

  static get styles() {
    return css`
      :host {
        font: var(--jh-font-helper-regular);
        display: block;
      }
      /* reset styling on fieldset and legend */
      :host fieldset {
        border: none;
        padding: 0;
        margin: 0;
      }
      :host legend {
        padding: 0;
      }
      :host([label]) .controls {
        margin-top: var(--jh-space-200);
      }
      :host([orientation='vertical']) .controls {
        display: flex;
        flex-direction: column;
      }
      :host([orientation='vertical']) ::slotted(*) {
        margin-bottom: var(--jh-space-200);
        flex: 1;
      }
      :host([orientation='vertical']) ::slotted(:last-of-type) {
        margin-bottom: 0;
      }
      :host([orientation='horizontal']) .controls {
        display: flex;
        flex-direction: row;
      }
      :host([orientation='horizontal']) ::slotted(*) {
        margin-right: var(--jh-space-400);
        margin-bottom: 0;
        flex: 1;
      }
      :host([orientation='horizontal']) ::slotted(:last-of-type) {
        margin-right: 0;
      }
      .label {
        color: var(
          --jh-radio-group-label-color-text,
          var(--jh-color-content-primary-enabled)
        );
      }
      .helper-text {
        color: var(
          --jh-radio-group-helper-color-text,
          var(--jh-color-content-secondary-enabled)
        );
        margin: 0;
      }
      .label-text,
      .helper-text,
      :host([invalid]) .error-text {
        word-break: break-word;
      }
      :host([invalid]) .error-text {
        color: var(
          --jh-radio-group-error-color-text,
          var(--jh-color-content-negative-enabled)
        );
        margin: var(--jh-space-200) 0 0 0;
      }
      :host([show-indicator]) .indicator {
        color: var(
          --jh-radio-group-required-color-text-optional,
          var(--jh-color-content-primary-enabled)
        );
        font: var(--jh-font-helper-regular);
      }
      :host([show-indicator][required]) .indicator {
        color: var(
          --jh-radio-group-required-color-text,
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
      /** Text to be displayed when radio group has failed validation and `invalid` is true. */
      errorText: {
        type: String,
        attribute: 'error-text',
      },
      /**
       * Provides additional context or guidance for using the radio group. For `helper-text` to be displayed, the `label` property must also be set.
       */
      helperText: {
        attribute: 'helper-text',
      },
      /** Sets an `aria-invalid` on the radio group to indicate the value supplied was invalid and displays `error-text` when set. */
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
      /** Sets the name of the radio group data when submitted in a form. */
      name: {
        type: String,
      },
      /** Indicates a value is required. */
      required: {
        type: Boolean,
        reflect: true,
      },
      /** Determines the orientation of the radio group. */
      orientation: {
        type: String,
        reflect: true,
      },
      /** Adds a visual indicator next to the label. Indicates that a value is optional (by default) or required if the `required`
       * property is also set. For the indicator to be displayed, the `label` property must also be set.*/
      showIndicator: {
        type: Boolean,
        reflect: true,
        attribute: 'show-indicator',
      },
      /** Sets the value of the radio group. */
      value: {
        type: String,
        reflect: true,
      },
    };
  }
  constructor() {
    super();
    this.#internals = this.attachInternals();
    /** @type {?string} */
    this.accessibleLabel = null;
    /** @type {?string} */
    this.errorText = null;
    /** @type {?string} */
    this.helperText = null;
    /** @type {?Boolean} */
    this.invalid = false;
    /** @type {?string} */
    this.label = null;
    /** @type {?string} */
    this.name = null;
    /** @type {?Boolean} */
    this.required = false;
    /** @type {'vertical'|'horizontal'} */
    this.orientation = 'vertical';
    /** @type {?boolean} */
    this.showIndicator = false;
    /** @type {?string} */
    this.value = null;

    this.addEventListener('jh-change', this.#handleChange);
    this.addEventListener('keydown', this.#handleKeydown);
    this.addEventListener('focusout', this.#handleFocusOut);
  }

  connectedCallback() {
    super.connectedCallback();
    this.#id = id++;
  }

  /**
   * Returns the radio group's parent form element.
   * @type {?HTMLFormElement}
   */
  get form() {
    return this.#internals.form;
  }

  /** @ignore */
  get validity() {
    return this.#internals.validity;
  }

  /** @type {?string} */
  get value() {
    return this.#value;
  }

  set value(newValue) {
    const oldValue = this.#value;
    if (newValue !== oldValue) {
      this.#value = newValue;
      this.#internals.setFormValue(newValue);
    }
    this.requestUpdate('value', oldValue);
  }

  #getRadios() {
    return [...this.querySelectorAll('jh-radio')];
  }

  #handleSlotChange() {
    const radios = this.#getRadios();

    this.#checked = radios.find((radio) => radio.value === this.value && this.value !== null);
    
    if (!this.#checked) {
      const checkedRadio = radios.find((radio) => radio.checked);
      if (checkedRadio) {
        this.value = checkedRadio.value;
        this.#checked = checkedRadio;
      } else {
        this.value = null;
        this.#checked = null;
      }
    }
    this.#updateChecked();
    if (!this.#checked) {
      radios[0].tabIndex = 0;
    }
  }

  #handleChange(e) {
    if (e.target.tagName === 'JH-RADIO') {
      this.value = e.target.value;
      this.#checked = e.target;
      this.#updateChecked();

      const options = {
        bubbles: true,
        composed: true,
        cancelable: true,
      };
      this.dispatchEvent(new CustomEvent('jh-change', options));
    }
  }

  #handleKeydown(e) {
    const keyCodes = [
      'ArrowDown',
      'ArrowRight',
      'ArrowUp',
      'ArrowLeft',
      'Space',
    ];
    if (!keyCodes.includes(e.code)) return;
  
    const radios = this.#getRadios().filter((radio) => !radio.disabled);
    const numberOfItems = radios.length;
    let index = radios.findIndex((radio) => radio.checked);
    //if no radio is checked use the first radio as starting point.
    index = index === -1 ? 0 : index;

    if (e.code === 'ArrowDown' || e.code === 'ArrowRight') {
      e.preventDefault();
      if (index + 1 < numberOfItems) {
        index++;
      } else {
        index = 0;
      }
    } else if (e.code === 'ArrowUp' || e.code === 'ArrowLeft') {
      e.preventDefault();
      if (index - 1 >= 0) {
        index--;
      } else {
        index = numberOfItems - 1;
      }
    }
    this.value = radios[index].value;
    radios[index].click();
    this.#checked = radios[index];
    this.#updateChecked();
    radios[index].focus();
  }

  #handleFocusOut() {
    const radios = this.#getRadios().filter((radio) => !radio.disabled);

    if (!radios.some((radio) => radio.checked)) return;

    radios.forEach((radio) =>
      radio.checked ? (radio.tabIndex = 0) : (radio.tabIndex = -1)
    );
  }

  #updateChecked() {
    const radios = this.#getRadios();

    radios.forEach((radio) => {
      radio.checked = this.#checked === radio;
      radio.checked ? (radio.tabIndex = 0) : (radio.tabIndex = -1);
    });
  }

  #getAriaDescribedBy() {
    if (this.errorText && this.invalid && this.helperText && this.label) {
      return `radio-group-error-${this.#id} radio-group-helper-${this.#id}`;
    } else if (this.errorText && this.invalid) {
      return `radio-group-error-${this.#id}`;
    } else if (this.helperText && this.label) {
      return `radio-group-helper-${this.#id}`;
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
      helperText = html`<p
        class="helper-text"
        id="radio-group-helper-${this.#id}"
      >
        ${this.helperText}
      </p>`;
    }

    if (this.label) {
      label = html`<legend class="label" for="radio-group-label-${this.#id}">
          ${this.label}${indicator}
        </legend>
        ${helperText}`;
    }

    if (this.invalid && this.errorText) {
      errorText = html`<p class="error-text" id="radio-group-error-${this.#id}">
        ${this.errorText}
      </p>`;
    }
    return html`
      <fieldset
        role="radiogroup"
        id=${ifDefined(this.label ? `radio-group-label-${this.#id}` : null)}
        aria-describedby=${ifDefined(this.#getAriaDescribedBy())}
        aria-required=${ifDefined(this.required ? 'true' : 'false')}
        aria-invalid=${ifDefined(this.invalid ? 'true' : null)}
        aria-label=${ifDefined(this.accessibleLabel)}
      >
        ${label}
        <div class="controls">
          <slot @slotchange=${this.#handleSlotChange}></slot>
        </div>
        ${errorText}
      </fieldset>
    `;
  }
}
customElements.define('jh-radio-group', JhRadioGroup);
