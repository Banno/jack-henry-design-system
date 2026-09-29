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

const validationMixin = (superClass) =>
  class extends superClass {

    static get formAssociated() {
      return true;
    }
    // temp code: ElementInternals will be added to base element
    #internals;
    #checkedCount = 0;

    #singleControlRules = [
      {
        condition: () => this.required && !this.value,
        type: VALIDATION_ERROR_TYPES.VALUE_MISSING,
      },
      {
        condition: () => this.maxlength && this.value?.length > this.maxlength,
        type: VALIDATION_ERROR_TYPES.TOO_LONG,
      },
      {
        condition: () => this.minlength && this.value?.length < this.minlength,
        type: VALIDATION_ERROR_TYPES.TOO_SHORT,
      },
      {
        condition: () => this.pattern && this.value && !new RegExp(this.pattern).test(this.value),
        type: VALIDATION_ERROR_TYPES.PATTERN_MISMATCH,
      },
            {
        condition: () => this.min && Number(this.value) < Number(this.min),
        type: VALIDATION_ERROR_TYPES.RANGE_UNDERFLOW,
      },
      {
        condition: () => this.max && Number(this.value) > Number(this.max),
        type: VALIDATION_ERROR_TYPES.RANGE_OVERFLOW,
      },
      {
        condition: () => this.step && Number(this.value) % Number(this.step) !== 0,
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
          this.minRequired && this.#checkedCount < this.minRequired,
        type: VALIDATION_ERROR_TYPES.TOO_SHORT,
      },
      {
        condition: () =>
          this.maxRequired && this.#checkedCount > this.maxRequired,
        type: VALIDATION_ERROR_TYPES.TOO_LONG,
      },
    ];

    constructor() {
      super();
      // TEMP code: elementInternals will be added to base element
      this.#internals = this.attachInternals();
    }

    connectedCallback() {
      super.connectedCallback();

      // controls with the isGroupControl property are treated as groups
      if (this.constructor.groupControl) {
        this.addEventListener('focusout', (event) => {
          // check that focus has left the group before validating
          if (event.relatedTarget && !this.contains(event.relatedTarget) || !event.relatedTarget) {
            this.validateGroup();
          }
        });
      } else {
        // single control validation 
        this.addEventListener('blur', this.handleBlur);
      }
    }

    disconnectedCallback() {
      super.disconnectedCallback?.();
      this.removeEventListener('blur', this.handleBlur);
      this.removeEventListener('focusout', this.validateGroup);
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

    handleBlur() {
      this.checkValidity(this.#singleControlRules);
    }

    validateGroup() {
      this.calculateCheckedCount();
      this.checkValidity(this.#groupControlRules);
    }

    checkValidity(rules) {
      let failedRules = rules.filter(rule => rule.condition());

      if (failedRules.length > 0) {
        this.invalid = true;
        let errors = failedRules.map((rule) => rule.type);

        // Map errors to native validity flags for ElementInternals
        const flags = [];
        errors.forEach(err => flags[err] = true);
        this.#internals.setValidity(flags, `Validation failed: ${errors.join(', ')}`, this);
        this.dispatch(errors);
      } else {
        this.invalid = false;
        this.#internals.setValidity({});
      }
    }

    dispatch(errors) {
      this.dispatchEvent(new CustomEvent('jh-invalid', {
        detail: {
          error: errors,
          validityState: this.validity,
          element: this,
        },
        bubbles: true,
        composed: true,
        cancelable: true,
      }));
    // replace dispatch method when jh-element is merged 
    //   this.dispatchCustomEvent('jh-invalid', e, {
    //     state: {
    //       validity: errors,
    //     },
    //   });
    // }
    }
  };
  
export { validationMixin };