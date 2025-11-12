// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { JhInput } from '../input/input.js';

let id = 0;

/**
 * @cssprop --jh-input-textarea-field-dimension-min-height - The input field minimum height. Defaults to `--jh-dimension-2000` when `size='small'`, `--jh-dimension-2200` when `size='medium'`, and `--jh-dimension-2400` when `size='large'`.
 *
 * @event jh-change - Dispatched when the value of the input has changed and input loses focus. Event payload includes the value of the input and can be accessed via `e.detail.value`.
 * @event jh-input - Dispatched when the value of the input has changed. Event payload includes the value of the input and can be accessed via `e.detail.value`. 
 * @customElement jh-input-textarea
 */
export class JhInputTextarea extends JhInput {
  /** @type {?number} */
  #id;

  static get styles() {
    return [
      super.styles,
      css`
      :host {
        --textarea-small-padding: 10px var(--jh-dimension-400) 10px var(--jh-dimension-400);
        --textarea-medium-padding: 14px var(--jh-dimension-400) 14px var(--jh-dimension-400);
        --textarea-large-padding: 18px var(--jh-dimension-400) 18px var(--jh-dimension-400);
      }
      textarea {
        background-color: var(
          --jh-input-field-color-background,
          var(--jh-color-container-primary-enabled)
        );
        border-radius: var(
          --jh-input-field-border-radius,
          var(--jh-border-radius-100)
        );
        border-width: var(--jh-border-control-width);
        border-style: var(--jh-border-control-style);
        border-color: var(
          --jh-input-field-color-border-enabled,
            var(--jh-border-control-color)
          );
        color: var(--jh-input-value-color-text, var(--jh-color-content-primary-enabled));
        font-family: var(--jh-font-body-regular-1-font-family);
        font-weight: var(--jh-font-body-regular-1-font-weight);
        font-size: var(--jh-font-body-regular-1-font-size);
        line-height: var(--jh-font-body-regular-1-line-height);
        box-sizing: border-box;
        display: block;
      }
      :host([label]) textarea {
        margin-top: var(--jh-dimension-200);
      }
      :host(:not([cols])) textarea {
        min-width: 100%;
      }
      :host([rows]) textarea {
        min-height: 0;
      }
      /** sizes */
      :host([size='small']) textarea {
        min-height: var(
          --jh-input-textarea-field-dimension-min-height,
          var(--jh-dimension-2000)
        );
        padding: var(--textarea-small-padding);
        scroll-padding: var(--textarea-small-padding);
      }
      :host([size='medium']) textarea {
        min-height: var(
          --jh-input-textarea-field-dimension-min-height,
          var(--jh-dimension-2200)
        );
        padding: var(--textarea-medium-padding);
        scroll-padding: var(--textarea-medium-padding);
      }
      :host([size='large']) textarea {
        min-height: var(
          --jh-input-textarea-field-dimension-min-height,
          var(--jh-dimension-2400)
        );
        padding: var(--textarea-large-padding);
        scroll-padding: var(--textarea-large-padding);
      }
      /** textarea states */
      textarea:active {
        border-color: var(
          --jh-input-field-color-border-active,
          var(--jh-color-content-brand-active)
        );
      }
      textarea:hover {
        border-color: var(
          --jh-input-field-color-border-hover,
          var(--jh-color-content-brand-hover)
        );
      }
      textarea:focus-visible {
        box-shadow: var(--jh-input-shadow-focus, var(--jh-shadow-focus));
        border-color: var(
          --jh-input-field-color-border-focus,
          var(--jh-color-content-brand-hover)
        );
        outline: none;
      }
      :host([disabled]) textarea {
        border-color: var(
          --jh-input-field-color-border-disabled,
          var(--jh-border-control-color)
        );
      }
      :host([readonly]) textarea {
        height: auto;
        border: none;
        padding-left: 0;
        padding-right: 0;
      }
      :host([invalid]) textarea {
        border-color: var(
          --jh-input-field-color-border-error,
          var(--jh-border-error-color)
        );
        border-width: var(--jh-border-error-width);
        border-style: var(--jh-border-error-style);
      }
      /* resize and auto-grow */
      :host([readonly]) textarea,
      :host([no-resize]) textarea {
        resize: none;
        height: 100%;
      }
      :host([auto-grow]) textarea {
        height: auto; 
        scrollbar-width: none;
      }
      `,
    ];
  }

  static get properties() {
    return {
      /** Enables the input height to grow automatically to accommodate user input. `auto-grow` will also remove the input's native resize capability. */
      autoGrow: {
        type: Boolean,
        attribute: 'auto-grow',
      },
      /** Sets the width of the input field. */
      cols: { type: String },
      /** Removes native resize capability of the input field. */
      noResize: {
        type: Boolean,
        attribute: 'no-resize',
      },
      /** Sets the height of the input field. */
      rows: { type: String },
      /** Specifies how text should be wrapped when submitted in a form. The `cols` property must be set for `wrap='hard'` to take effect. */
      wrap: { type: String },
      /** Prevents users from changing the input value. */
      readonly: { type: Boolean },
    };
  }

  constructor() {
    super();
    /** @type {boolean} */
    this.autoGrow = null;
    /** @type {?string} */
    this.cols = null;
    /** @type {boolean} */
    this.noResize = true;
    /** @type {?string} */
    this.rows = null;
    /** @type {'small'|'medium'|'large'} */
    this.size = 'medium';
    /** @type {'hard'|'soft'} */
    this.wrap = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.#id = id++;
  }

  firstUpdated() {
    // add resize observer to update width of footer when textarea width changes
    let footerContent = this.shadowRoot.querySelector('.footer-content');
    let textareaEl = this.shadowRoot.querySelector('textarea');

    if (footerContent) {
      new ResizeObserver(() => {
        this.#updateFooterWidth(footerContent, textareaEl);
      }).observe(textareaEl);
    }
  }

  #updateFooterWidth(footerContent, textareaEl) {
    footerContent.style.width = textareaEl.offsetWidth + 'px';
  }

  #dispatch(eventName, details) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail: details,
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
  }

  #handleInput(e) {
    this.value = e.target.value;

    this.#dispatch('jh-input', { value: this.value } );

    if (this.autoGrow) {
      this.#autoGrowTextarea();
    }
  }

  #autoGrowTextarea() {
    let textareaEl = this.shadowRoot.querySelector('textarea');
    textareaEl.style.height = 'auto';
    textareaEl.style.height = textareaEl.scrollHeight + 'px';
  }

  #handleChange() {
    let payload = {
      'value': this.value,
    };
    this.#dispatch('jh-change', payload);
  }

  #handleSelect(e) {
    const selectedString = e.target.value.substring(
      e.target.selectionStart,
      e.target.selectionEnd
    );

    if (selectedString) {
      this.#dispatch('jh-select', {
        selected: selectedString,
        selectionStart: e.target.selectionStart,
        selectionEnd: e.target.selectionEnd,
      });
    }
  }

  #handleMaxlength() {
    this.#dispatch('jh-maxlength');
  }

  #getDescribedby() {
    let describedbyString = '';

    if (this.errorText) {
      describedbyString += `jh-input-error-${this.#id}`;
    }
    if (this.helperText) {
      describedbyString += ` jh-input-helper-${this.#id}`;
    }
    if (this.showCharCount) {
      describedbyString += ` jh-input-counter-${this.#id}`;
    }
    return describedbyString;
  }

  render() {
    let label;
    let indicator;
    let helperText;
    let input;
    let footer;
    let errorText;
    let charCount;
    let describedby;

    if (this.label) {
      if (this.showIndicator) {
        if (this.required) {
          indicator = html`<span class="indicator" aria-hidden="true"> *</span>`;
        } else {
          indicator = html`<span class="indicator"> (optional)</span>`;
        }
      }

      if (this.helperText) {
        helperText = html`
          <p id="jh-input-helper-${this.#id}" class="helper-text">
            ${this.helperText}
          </p>
        `;
      }

      label = html`
        <label for="jh-input-${this.#id}">${this.label}${indicator}</label>
        ${helperText}
      `;
    }

    if (this.showCharCount) {
      let valueLength = this.value ? this.value.length : 0;
      let charCountValue = `${this.maxlength ? `${valueLength}/${this.maxlength}` : valueLength}`;

      if (valueLength && valueLength === Number(this.maxlength)) {
        this.#handleMaxlength();
      }

      charCount = html`
        <p class="counter" aria-hidden="true">${charCountValue}</p>
      `;
    }

    if (this.invalid && this.errorText) {
      errorText = html`
        <p id="jh-input-error-${this.#id}" class="error-text">
          ${this.errorText}
        </p>
      `;
    }

    if ((this.invalid && this.errorText) || this.showCharCount) {
      footer = html`
        <div class="footer-content">
          ${errorText}
          ${charCount}
        </div>
      `;
    }

    if (helperText || errorText || charCount) {
      describedby = this.#getDescribedby();
    }

    input = html`
        <textarea
          id="jh-input-${this.#id}"
          aria-describedby=${describedby}
          aria-invalid=${ifDefined(this.invalid ? 'true' : null)}
          aria-label=${ifDefined(
            this.accessibleLabel === '' ? null : this.accessibleLabel
          )}
          autocomplete=${ifDefined(
            this.autocomplete === '' ? null : this.autocomplete
          )}          
          cols=${ifDefined(this.cols === '' ? null : this.cols)}
          ?disabled=${this.disabled}
          enterkeyhint=${ifDefined(
            this.enterkeyhint === '' ? null : this.enterkeyhint
          )}
          inputmode=${ifDefined(this.inputmode === '' ? null : this.inputmode)}
          maxlength=${ifDefined(this.maxlength === '' ? null : this.maxlength)}
          minlength=${ifDefined(this.minlength === '' ? null : this.minlength)}
          name=${ifDefined(this.name === '' ? null : this.name)}
          ?readonly=${this.readonly}
          ?required=${this.required}
          rows=${ifDefined(this.rows === '' ? null : this.rows)}
          .value=${this.value}
          wrap=${ifDefined(this.wrap === '' ? null : this.wrap)}
          @change=${this.#handleChange}
          @select=${this.#handleSelect}
          @input=${this.#handleInput}
        ></textarea>
    `;

    return html`
      ${label} ${input} ${footer}
    `;
  }
}
customElements.define('jh-input-textarea', JhInputTextarea);
