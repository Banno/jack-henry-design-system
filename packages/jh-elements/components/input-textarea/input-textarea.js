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
  /** @type {?ResizeObserver} */
  #resizeObserver;
  /** @type {?HTMLTextAreaElement} */
  #textareaEl;
  /** @type {?HTMLElement} */
  #footerContent;

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
        border-color: var(
          --jh-input-field-color-border-focus,
          var(--jh-color-content-brand-hover)
        );
        outline-color: var(
          --jh-input-color-focus,
          var(--jh-border-focus-color)
        );
        outline-style: var(--jh-border-focus-style);
        outline-width: var(--jh-border-focus-width);
        outline-offset: 1px;
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
    this.autoGrow = false;
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

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.#resizeObserver) {
      this.#resizeObserver.unobserve(this.#textareaEl);
      this.#resizeObserver.disconnect();
      this.#resizeObserver = null;
    }
    this.#textareaEl = null;
    this.#footerContent = null;
  }

  firstUpdated() {
    this.#textareaEl = this.shadowRoot.querySelector('textarea');
    this.#footerContent = this.shadowRoot.querySelector('.footer-content');
    
    // add resize observer to update width of footer when textarea width changes
    if (this.#footerContent) {
      this.#resizeObserver = new ResizeObserver(() => {
        this.#updateFooterWidth();
      });
      this.#resizeObserver.observe(this.#textareaEl);
    }
  }

  #updateFooterWidth() {
    if (this.#footerContent) {
      this.#footerContent.style.width = this.#textareaEl.offsetWidth + 'px';
    }
  }

  _handleInput(e) {
    super._handleInput(e);
    
    // add textarea specific autogrow
    if (this.autoGrow) {
      this.#autoGrowTextarea();
    }
  }

  #autoGrowTextarea() {
    if (!this.#textareaEl) {
      this.#textareaEl = this.shadowRoot.querySelector('textarea');
    }
    
    if (this.#textareaEl) {
      // Reset height to auto to get the correct scrollHeight
      this.#textareaEl.style.height = 'auto';
      // Set height to scrollHeight to accommodate content
      this.#textareaEl.style.height = `${this.#textareaEl.scrollHeight}px`;
    }
  }

  renderInput() {
    return html`
      <textarea
        id="jh-input-${this.#id}"
        aria-describedby=${this._getDescribedby()}
        aria-invalid=${ifDefined(this.invalid ? 'true' : null)}
        aria-label=${ifDefined(this.accessibleLabel === '' ? null : this.accessibleLabel)}
        autocomplete=${ifDefined(this.autocomplete === '' ? null : this.autocomplete)}
        cols=${ifDefined(this.cols ? Number(this.cols) : null)}
        ?disabled=${this.disabled}
        enterkeyhint=${ifDefined(this.enterkeyhint || null)}
        inputmode=${ifDefined(this.inputmode || null)}
        maxlength=${ifDefined(this.maxlength ? Number(this.maxlength) : null)}
        minlength=${ifDefined(this.minlength ? Number(this.minlength) : null)}
        name=${ifDefined(this.name || null)}
        ?readonly=${this.readonly}
        ?required=${this.required}
        rows=${ifDefined(this.rows ? Number(this.rows) : null)}
        .value=${this.value}
        wrap=${ifDefined(this.wrap || null)}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @select=${this._handleSelect}
        ></textarea>
    `
  }
}
customElements.define('jh-input-textarea', JhInputTextarea);