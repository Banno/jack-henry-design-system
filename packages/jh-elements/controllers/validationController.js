// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/** @typedef {import('lit').ReactiveController} ReactiveController */
/** @typedef {import('lit').ReactiveControllerHost} ReactiveControllerHost */
/**
 * @typedef {Element & { checked?: boolean }} CheckableElement
 */
/**
 * @typedef {ReactiveControllerHost & HTMLElement & {
 *   invalid: boolean,
 *   value?: string | null,
 *   required?: boolean,
 *   maxlength?: number,
 *   minlength?: number,
 *   pattern?: string,
 *   min?: number | string,
 *   max?: number | string,
 *   step?: number | string,
 *   minRequired?: number,
 *   maxRequired?: number,
 *   internals?: ElementInternals,
 *   attachInternals?: () => ElementInternals,
 *   dispatchCustomEvent?: (eventName: string, detail?: object) => void,
 * }} ValidationControllerHost
 */

const VALIDATION_ERROR_TYPES = {
  VALUE_MISSING: 'valueMissing',
  TOO_LONG: 'tooLong',
  TOO_SHORT: 'tooShort',
  PATTERN_MISMATCH: 'patternMismatch',
  TYPE_MISMATCH: 'typeMismatch',
  RANGE_UNDERFLOW: 'rangeUnderflow',
  RANGE_OVERFLOW: 'rangeOverflow',
  STEP_MISMATCH: 'stepMismatch',
};

/** @param {unknown} val */
const isSet = (val) => val !== undefined && val !== null && val !== '';

/**
 * Reactive controller implementing the validation behavior shared by jh-elements form
 * controls. The host must be a form-associated `JhElement` (expose an `internals`
 * getter, declare a reactive `invalid` property, and set `static formAssociated = true`).
 * The host must also delegate the native `formResetCallback`/`formDisabledCallback`
 * callbacks to this controller, since those callbacks are only invoked on the custom
 * element itself, never on its controllers.
 *
 * @example
 * export class JhInput extends JhElement {
 *   static get formAssociated() { return true; }
 *   static get properties() {
 *     return { ...super.properties, invalid: { type: Boolean, reflect: true } };
 *   }
 *
 *   #validation = new ValidationController(this);
 *
 *   formResetCallback() {
 *     this.#validation.reset();
 *   }
 *
 *   formDisabledCallback(disabled) {
 *     this.disabled = disabled;
 *   }
 * }
 *
 * @implements {ReactiveController}
 */
class ValidationController {
  /** @type {ValidationControllerHost} */
  host;
  /** @type {boolean} */
  #isGroupControl;
  /** @type {ElementInternals | null} */
  #internals = null;
  /** @type {number} */
  #checkedCount = 0;

  #singleControlRules = [
    {
      condition: () => this.host.required && !isSet(this.host.value),
      type: VALIDATION_ERROR_TYPES.VALUE_MISSING,
    },
    {
      condition: () => isSet(this.host.maxlength) && (this.host.value?.length ?? 0) > Number(this.host.maxlength),
      type: VALIDATION_ERROR_TYPES.TOO_LONG,
    },
    {
      condition: () => isSet(this.host.minlength) && (this.host.value?.length ?? 0) < Number(this.host.minlength),
      type: VALIDATION_ERROR_TYPES.TOO_SHORT,
    },
    {
      condition: () => this.host.pattern && this.host.value && !new RegExp(this.host.pattern).test(this.host.value),
      type: VALIDATION_ERROR_TYPES.PATTERN_MISMATCH,
    },
    {
      // relies on the native input's own type to flag format mismatches
      condition: () => isSet(this.host.value) && this.host.shadowRoot?.querySelector('input')?.validity?.typeMismatch,
      type: VALIDATION_ERROR_TYPES.TYPE_MISMATCH,
    },
    {
      condition: () => isSet(this.host.min) && Number(this.host.value) < Number(this.host.min),
      type: VALIDATION_ERROR_TYPES.RANGE_UNDERFLOW,
    },
    {
      condition: () => isSet(this.host.max) && Number(this.host.value) > Number(this.host.max),
      type: VALIDATION_ERROR_TYPES.RANGE_OVERFLOW,
    },
    {
      condition: () => isSet(this.host.step) && Number(this.host.value) % Number(this.host.step) !== 0,
      type: VALIDATION_ERROR_TYPES.STEP_MISMATCH,
    },
  ];

  #groupControlRules = [
    {
      condition: () => this.host.required && this.#checkedCount === 0,
      type: VALIDATION_ERROR_TYPES.VALUE_MISSING,
    },
    {
      condition: () => isSet(this.host.minRequired) && this.#checkedCount < Number(this.host.minRequired),
      type: VALIDATION_ERROR_TYPES.TOO_SHORT,
    },
    {
      condition: () => isSet(this.host.maxRequired) && this.#checkedCount > Number(this.host.maxRequired),
      type: VALIDATION_ERROR_TYPES.TOO_LONG,
    },
  ];

  /** @param {FocusEvent} event */
  #handleFocusOut = (event) => {
    // check that focus has truly left the control/group before validating
    if ((event.relatedTarget && !this.host.contains(/** @type {Node} */ (event.relatedTarget))) || !event.relatedTarget) {
      if (this.#isGroupControl) {
        this.validateGroup();
      } else {
        this.validateControl();
      }
    }
  };

  /**
   * @param {ValidationControllerHost} host
   * @param {{ isGroupControl?: boolean }} [options]
   */
  constructor(host, { isGroupControl = false } = {}) {
    this.host = host;
    this.#isGroupControl = isGroupControl;
    host.addController(this);
  }

  hostConnected() {
    // reuse ElementInternals already attached by JhElement
    this.#internals = this.host.internals ?? this.host.attachInternals();
    this.host.addEventListener('focusout', this.#handleFocusOut);
  }

  hostDisconnected() {
    this.host.removeEventListener('focusout', this.#handleFocusOut);
  }

  // #internals is only ever read after hostConnected has run
  get #safeInternals() {
    return /** @type {ElementInternals} */ (this.#internals);
  }

  get validity() {
    return this.#safeInternals.validity;
  }

  get form() {
    return this.#safeInternals.form;
  }

  /** @param {string} value */
  setFormValue(value) {
    this.#safeInternals.setFormValue(value);
  }

  // standard form-control contract delegated to ElementInternals
  checkValidity() {
    return this.#safeInternals.checkValidity();
  }

  /** Call from the host's `formResetCallback`. */
  reset() {
    this.host.invalid = false;
    this.#safeInternals.setValidity({});
  }

  calculateCheckedCount() {
    let checkedCount = 0;
    for (let childEl of /** @type {HTMLCollectionOf<CheckableElement>} */ (this.host.children)) {
      if (childEl.checked) {
        checkedCount++;
      }
    }
    this.#checkedCount = checkedCount;
  }

  validateControl() {
    this.#runValidationRules(this.#singleControlRules);
  }

  validateGroup() {
    this.calculateCheckedCount();
    this.#runValidationRules(this.#groupControlRules);
  }

  /** @param {Array<{ condition: () => unknown, type: string }>} rules */
  #runValidationRules(rules) {
    let failedRules = rules.filter((rule) => rule.condition());

    if (failedRules.length > 0) {
      this.host.invalid = true;
      let errors = failedRules.map((rule) => rule.type);

      // Map errors to native validity flags for ElementInternals
      /** @type {Record<string, boolean>} */
      const flags = {};
      errors.forEach((err) => (flags[err] = true));
      this.#safeInternals.setValidity(flags, `Validation failed: ${errors.join(', ')}`);
      this.#dispatch(errors);
    } else {
      this.host.invalid = false;
      this.#safeInternals.setValidity({});
    }
  }

  /** @param {string[]} errors */
  #dispatch(errors) {
    const detail = {
      state: {
        validity: errors,
        validityState: this.validity,
      },
    };
    // prefer JhElement's event pattern when available, else fall back to a plain CustomEvent
    if (typeof this.host.dispatchCustomEvent === 'function') {
      this.host.dispatchCustomEvent('jh-invalid', detail);
    } else {
      this.host.dispatchEvent(
        new CustomEvent('jh-invalid', {
          detail,
          bubbles: true,
          composed: true,
          cancelable: true,
        })
      );
    }
  }
}

export { ValidationController, VALIDATION_ERROR_TYPES }; 