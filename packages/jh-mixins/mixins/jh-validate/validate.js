// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

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

const isSet = (val) => val !== undefined && val !== null && val !== '';

const validationMixin = (superClass) =>
  class extends superClass {

    static get formAssociated() {
      return true;
    }

    static get properties() {
      return {
        ...super.properties,
        invalid: { type: Boolean, reflect: true },
      };
    }

    #internals;
    #checkedCount = 0;
    #handleFocusOut;

    #singleControlRules = [
      {
        condition: () => this.required && !isSet(this.value),
        type: VALIDATION_ERROR_TYPES.VALUE_MISSING,
      },
      {
        condition: () => isSet(this.maxlength) && this.value?.length > this.maxlength,
        type: VALIDATION_ERROR_TYPES.TOO_LONG,
      },
      {
        condition: () => isSet(this.minlength) && this.value?.length < this.minlength,
        type: VALIDATION_ERROR_TYPES.TOO_SHORT,
      },
      {
        condition: () => this.pattern && this.value && !new RegExp(this.pattern).test(this.value),
        type: VALIDATION_ERROR_TYPES.PATTERN_MISMATCH,
      },
      {
        condition: () => isSet(this.min) && Number(this.value) < Number(this.min),
        type: VALIDATION_ERROR_TYPES.RANGE_UNDERFLOW,
      },
      {
        condition: () => isSet(this.max) && Number(this.value) > Number(this.max),
        type: VALIDATION_ERROR_TYPES.RANGE_OVERFLOW,
      },
      {
        condition: () => isSet(this.step) && Number(this.value) % Number(this.step) !== 0,
        type: VALIDATION_ERROR_TYPES.STEP_MISMATCH,
      }
    ];

    #groupControlRules = [
      {
        condition: () => this.required && this.#checkedCount === 0,
        type: VALIDATION_ERROR_TYPES.VALUE_MISSING,
      },
      {
        condition: () =>
          isSet(this.minRequired) && this.#checkedCount < this.minRequired,
        type: VALIDATION_ERROR_TYPES.TOO_SHORT,
      },
      {
        condition: () =>
          isSet(this.maxRequired) && this.#checkedCount > this.maxRequired,
        type: VALIDATION_ERROR_TYPES.TOO_LONG,
      },
    ];

    constructor() {
      super();
      // reuse ElementInternals already attached by JhElement or another superclass
      this.#internals = super.internals ?? this.attachInternals();
    }

    connectedCallback() {
      super.connectedCallback();

      this.#handleFocusOut ??= (event) => {
        // check that focus has truly left the control/group before validating
        if ((event.relatedTarget && !this.contains(event.relatedTarget)) || !event.relatedTarget) {
          if (this.constructor.isGroupControl) {
            this.validateGroup();
          } else {
            this.validateControl();
          }
        }
      };
      this.addEventListener('focusout', this.#handleFocusOut);
    }

    disconnectedCallback() {
      super.disconnectedCallback?.();
      if (this.#handleFocusOut) {
        this.removeEventListener('focusout', this.#handleFocusOut);
      }
    }

    formResetCallback() {
      this.invalid = false;
      this.#internals.setValidity({});
    }

    formDisabledCallback(disabled) {
      this.disabled = disabled;
    }

    get validity() { 
      return this.#internals.validity; 
    }

    get form() {
      return this.#internals.form;
    }

    setFormValue(value) {
      this.#internals.setFormValue(value);
    }

    // standard form-control contract delegated to ElementInternals
    checkValidity() {
      return this.#internals.checkValidity();
    }

    reportValidity() {
      return this.#internals.reportValidity();
    }

    calculateCheckedCount() {
      let childrenEl = this.children;
      let checkedCount = 0;
      for (let childEl of childrenEl) {
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

    #runValidationRules(rules) {
      let failedRules = rules.filter(rule => rule.condition());

      if (failedRules.length > 0) {
        this.invalid = true;
        let errors = failedRules.map((rule) => rule.type);

        // Map errors to native validity flags for ElementInternals
        const flags = {};
        errors.forEach(err => flags[err] = true);
        this.#internals.setValidity(flags, `Validation failed: ${errors.join(', ')}`, this);
        this.dispatch(errors);
      } else {
        this.invalid = false;
        this.#internals.setValidity({});
      }
    }

    dispatch(errors) {
      const detail = {
        state: {
          validity: errors,
          validityState: this.validity,
        },
      };
      // prefer JhElement's event pattern when available, else fall back to a plain CustomEvent
      if (typeof this.dispatchCustomEvent === 'function') {
        this.dispatchCustomEvent('jh-invalid', detail);
      } else {
        this.dispatchEvent(new CustomEvent('jh-invalid', {
          detail,
          bubbles: true,
          composed: true,
          cancelable: true,
        }));
      }
    }
  };
  
export { validationMixin };