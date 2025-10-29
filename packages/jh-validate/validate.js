const VALIDATION_ERROR_TYPES = {
  VALUE_MISSING: 'valueMissing',
  TOO_LONG: 'tooLong',
  TOO_SHORT: 'tooShort',
  PATTERN_MISMATCH: 'patternMismatch',
  TYPE_MISMATCH: 'typeMismatch',
};

const validationMixin = (superClass) =>
  class extends superClass {    
    #checkedCount = 0;

    #singleControlRules = [
      {
        condition: () => this.required && !this.value,
        state: { valueMissing: true },
        type: VALIDATION_ERROR_TYPES.VALUE_MISSING,
      },
      {
        condition: () => this.maxlength && this.value?.length > this.maxlength,
        state: { tooLong: true },
        type: VALIDATION_ERROR_TYPES.TOO_LONG,
      },
      {
        condition: () => this.minlength && this.value?.length < this.minlength,
        state: { tooShort: true },
        type: VALIDATION_ERROR_TYPES.TOO_SHORT,
      },
      {
        condition: () => this.pattern && this.value && !new RegExp(this.pattern).test(this.value),
        state: { patternMismatch: true },
        type: VALIDATION_ERROR_TYPES.PATTERN_MISMATCH,
      },
    ];

    #groupControlRules = [
      {
        condition: () => this.required && this.#checkedCount === 0,
        state: { valueMissing: true },
        type: VALIDATION_ERROR_TYPES.VALUE_MISSING,
      },
      {
        condition: () =>
          this.minRequired && this.#checkedCount < this.minRequired,
        state: { tooShort: true },
        type: VALIDATION_ERROR_TYPES.TOO_SHORT,
      },
      {
        condition: () =>
          this.maxRequired && this.#checkedCount > this.maxRequired,
        state: { tooLong: true },
        type: VALIDATION_ERROR_TYPES.TOO_LONG,
      },
    ];

    constructor() {
      super();
    }

    connectedCallback() {
      super.connectedCallback();

      // controls with the data-group attribute are treated as groups (ie checkbox-group, radio-group)
      if (
        this.constructor.isGroupControl ||
        this.tagName === 'JH-CHECKBOX-GROUP' ||
        this.tagName === 'JH-RADIO-GROUP'
      ) {
        this.addEventListener('focusout', (event) => {
          // check that focus has left the group
          if (event.relatedTarget && !this.contains(event.relatedTarget)) {
            this.validateGroup();
          }
        });
      } else {
        // single control validation 
        this.addEventListener('blur', this.handleBlur);
      }
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener('blur', this.handleBlur);
      this.removeEventListener('focusout', this.validateGroup);
    }

    setInvalid() {
      this.invalid = true;
    }

    resetValidity() {
      this.invalid = false;
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
      this.validateSingleControl();
    }

    validateGroup() {
      this.calculateCheckedCount();
      this.applyValidationRule(this.#groupControlRules);
    }

    validateSingleControl() {
      this.applyValidationRule(this.#singleControlRules);
    }

    applyValidationRule(rules) {
      const failedRule = rules.find((rule) => rule.condition());

      if (failedRule) {
        this.setInvalid();
        this.dispatch(failedRule.type);
      } else {
        this.resetValidity();
      }
    }

    dispatch(errorType) {
      const event = new CustomEvent('jh-invalid', {
        detail: {
          type: errorType,
          element: this,
        },
        bubbles: true,
        composed: true,
        cancelable: true,
      });
      this.dispatchEvent(event);
    }
  };
  
export { validationMixin };