import { LitElement, css, html } from 'lit';

let id = 0;

/**
 * @cssprop --jh-radio-opacity-disabled - The radio opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-radio-input-border-radius - The radio and status mark border-radius.
 * Defaults to `--jh-border-radius-circle`.
 * @cssprop --jh-radio-input-shadow-focus - The radio box-shadow when focused. Defaults to `--jh-shadow-focus`.
 * @cssprop --jh-radio-helper-color-text - The helper-text text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-radio-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-radio-input-color-background-unselected-enabled - The radio background-color when unselected.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-enabled - The radio border-color when unselected.
 * Defaults to `--jh-color-divider-primary`.
 * @cssprop --jh-radio-input-color-background-unselected-focus - The radio background-color when unselected and focused. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-focus - The radio border-color when unselected and focused.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-input-color-background-unselected-hover - The radio background-color when unselected and hovered.
 *  Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-hover - The radio border-color when unselected and hovered.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-input-color-background-unselected-active - The radio background-color when unselected and active.
 *  Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-active - The radio border-color when unselected and active.
 * Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-radio-input-color-background-unselected-disabled - The radio background-color when unselected and disabled.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-disabled - The radio border-color when unselected and disabled.
 * Defaults to `--jh-color-divider-primary`.
 * @cssprop --jh-radio-input-color-background-selected-enabled - The radio background-color when selected The radio.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-enabled - The radio border-color when selected The radio.
 * Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-radio-status-color-background-selected-enabled- The status mark color when selected.
 * Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-radio-input-color-background-selected-focus - The radio background-color when selected and focused. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-focus - The radio border-color when selected and focused.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-status-color-background-selected-focus - The status mark color when selected and focused.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-input-color-background-selected-hover - The radio background-color when selected and hovered. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-hover - The radio border-color when selected and hovered.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-status-color-background-selected-hover - The status mark color when selected and hovered.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-input-color-background-selected-active - The background-color when selected and active.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-active - The border-color when selected and active.
 * Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-radio-status-color-background-selected-active - The status mark color when selected and active.
 * Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-radio-input-color-background-selected-disabled - The background-color when selected and disabled.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-disabled - The border-color when selected and disabled.
 * Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-radio-status-color-background-selected-disabled - The status mark color when selected and disabled. Defaults to `--jh-color-content-brand-enabled`.
 *
 * @event jh-change - Dispatched when the state of the radio has changed.
 *
 * @customElement jh-radio */

export class JhRadio extends LitElement {

  /** @type {?Number} */
  #id;
  /** @type {ElementInternals} */
  #internals;

  static get styles() {
    return css`
      :host {
        font: var(--jh-font-body-regular-1);
        display: inline-flex;
        position: relative;
      }
      span {
        box-sizing: border-box;
        display: block;
      }
      .radio {
        border: 1px solid
          var(
            --jh-radio-input-color-border-unselected-enabled,
            var(--jh-color-divider-primary)
          );
        background-color: var(
          --jh-radio-input-color-background-unselected-enabled,
          var(--jh-color-container-primary-enabled)
        );
        border-radius: var(
          --jh-radio-input-border-radius,
          var(--jh-border-radius-circle)
        );
        width: var(--jh-size-500);
        height: var(--jh-size-500);
        position: relative;
      }
      :host(:hover) {
        cursor: pointer;
      }
      :host(:focus) {
        outline: none;
      }
      :host(:focus-visible) .radio {
        box-shadow: var(--jh-radio-input-shadow-focus, var(--jh-shadow-focus));
        background-color: var(
          --jh-radio-input-color-background-unselected-focus,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-unselected-focus,
          var(--jh-color-content-brand-hover)
        );
      }
      :host .radio:hover {
        background-color: var(
          --jh-radio-input-color-background-unselected-hover,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-unselected-hover,
          var(--jh-color-content-brand-hover)
        );
      }
      :host .radio:active {
        background-color: var(
          --jh-radio-input-color-background-unselected-active,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-unselected-active,
          var(--jh-color-content-brand-active)
        );
      }
      :host([disabled]) .radio {
        background-color: var(
          --jh-radio-input-color-background-unselected-disabled,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-unselected-disabled,
          var(--jh-color-divider-primary)
        );
      }
      :host([checked]) .radio {
        background-color: var(
          --jh-radio-input-color-background-selected-enabled,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-selected-enabled,
          var(--jh-color-content-brand-enabled)
        );
      }
      :host([checked]:focus-visible) .radio {
        box-shadow: var(--jh-radio-input-shadow-focus, var(--jh-shadow-focus));
        background-color: var(
          --jh-radio-input-color-background-selected-focus,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-selected-focus,
          var(--jh-color-content-brand-hover)
        );
      }
      :host([checked]) .radio:hover {
        background-color: var(
          --jh-radio-input-color-background-selected-hover,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-selected-hover,
          var(--jh-color-content-brand-hover)
        );
      }
      :host([checked]) .radio:active {
        background-color: var(
          --jh-radio-input-color-background-selected-active,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-selected-active,
          var(--jh-color-content-brand-active)
        );
      }
      :host([checked][disabled]) .radio {
        background-color: var(
          --jh-radio-input-color-background-selected-disabled,
          var(--jh-color-container-primary-enabled)
        );
        border-color: var(
          --jh-radio-input-color-border-selected-disabled,
          var(--jh-color-content-brand-enabled)
        );
      }
      :host([checked]) .radio::before {
        background-color: var(
          --jh-radio-status-color-background-selected-enabled,
          var(--jh-color-content-brand-enabled)
        );
        border-radius: var(
          --jh-radio-input-border-radius,
          var(--jh-border-radius-circle)
        );
        width: var(--jh-size-300);
        height: var(--jh-size-300);
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
      }
      :host([checked]:focus-visible) .radio::before {
        background-color: var(
          --jh-radio-status-color-background-selected-focus,
          var(--jh-color-content-brand-hover)
        );
      }
      :host([checked]) .radio:hover::before {
        background-color: var(
          --jh-radio-status-color-background-selected-hover,
          var(--jh-color-content-brand-hover)
        );
      }
      :host([checked]) .radio:active::before {
        background-color: var(
          --jh-radio-status-color-background-selected-active,
          var(--jh-color-content-brand-active)
        );
      }
      :host([checked][disabled]) .radio::before {
        background-color: var(
          --jh-radio-status-color-background-selected-disabled,
          var(--jh-color-content-brand-enabled)
        );
      }
      .label-container {
        margin-left: var(--jh-space-200);
        flex: 1;
      }
      .label-text,
      .helper-text {
        word-break: break-word;
      }
      .label-text {
        color: var(
          --jh-radio-label-color-text,
          var(--jh-color-content-primary-enabled)
        );
      }
      .helper-text {
        color: var(
          --jh-radio-helper-color-text,
          var(--jh-color-content-secondary-enabled)
        );
        font: var(--jh-font-helper-regular);
        margin: 0;
      }
      :host([disabled]) {
        opacity: var(--jh-radio-opacity-disabled, var(--jh-opacity-disabled));
        cursor: default;
        box-shadow: none;
      }
      :host([disabled]:focus-visible) .radio {
        box-shadow: none;
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
      /** Sets the selected or 'checked' state on the radio. */
      checked: {
        type: Boolean,
        reflect: true,
      },
      /** Disables the radio and prevents all user interactions. May cause radio to be ignored by assistive technologies(AT). */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Provides additional context or guidance for using the radio. For `helper-text` to be displayed, the `label` property must also be set.
       */
      helperText: {
        type: String,
        attribute: 'helper-text',
      },
      /**
       * Sets the value of the data to be collected when selected.
       */
      label: {
        type: String,
      },
      /** Sets the value of the radio. */
      value: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#internals.role = 'radio';
    /** @type {?string} */
    this.accessibleLabel = null;
    /** @type {?boolean} */
    this.checked = false;
    /** @type {?boolean} */
    this.disabled = false;
    /** @type {?string} */
    this.helperText = null;
    /** @type {?string} */
    this.label = null;
    /** @type {?string} */
    this.value = null;

    this.addEventListener('click', this.#handleClick);
    this.addEventListener('keydown', this.#handleKeydown);
  }

  connectedCallback() {
    super.connectedCallback();
    this.#id = id++;
    this.setAttribute('tabindex', '0');
    this.setAttribute('aria-checked', `${this.checked}`);
    if (this.accessibleLabel) {
      this.setAttribute('aria-label', `${this.accessibleLabel}`);
    }
    if (this.helperText) {
      this.setAttribute('aria-describedby', `radio-helper-text-${this.#id}`);
    }

    let observer = new MutationObserver(this.#updateArias.bind(this));
    let options = {
      attributes: true,
    };
    observer.observe(this, options);
  }

  #updateArias(mutations) {
    for (const mutation of mutations) {
      if (mutation.attributeName === 'checked') {
        this.setAttribute('aria-checked', `${this.checked}`);
      }
      if (mutation.attributeName === 'disabled') {
        this.setAttribute('aria-disabled', `${this.disabled}`);
      }
      if (mutation.attributeName === 'accessible-label') {
        this.setAttribute('aria-label', `${this.accessibleLabel}`);
      }
    }
  }

  #handleClick() {
    if (this.disabled) return;
    if (this.checked) return;

    this.checked = true;
    const options = {
      bubbles: true,
      composed: true,
      cancelable: true,
    };
    this.dispatchEvent(new CustomEvent('jh-change', options));
  }

  #handleKeydown(e) {
    if (e.code === 'Space') {
      this.#handleClick();
    }
  }

  render() {
    let helperText;
    let label;

    if (this.helperText) {
      helperText = html`
        <p class="helper-text" id="radio-helper-text-${this.#id}">
          ${this.helperText}
        </p>
      `;
    }

    if (this.label) {
      label = html`
        <span class="label-container">
          <span class="label-text">${this.label}</span>
          ${helperText}
        </span>
      `;
    }

    return html`
      <span class="radio" aria-hidden="true"></span>
      ${label}
    `;
  }
}
customElements.define('jh-radio', JhRadio);
