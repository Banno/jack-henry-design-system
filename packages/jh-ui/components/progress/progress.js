import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * @cssprop --jh-progress-label-color - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-progress-value-color - The value text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-progress-track-color - The track color. Defaults to `--jh-color-control-enabled`.
 * @cssprop --jh-progress-track-border-radius - The track border-radius. Defaults to `--jh-border-radius-50`.
 * @cssprop --jh-progress-indicator-color - The indicator color. Defaults to `--jh-color-content-brand-enabled`.
 * @customElement jh-progress
 */
export class JhProgress extends LitElement {
  /** @type {ElementInternals} */
  #internals;

  /** @type {string} */
  #label;

  static get styles() {
    return css`
      @keyframes indicator {
        from {
          margin-left: -45%;
        }
        to {
          margin-left: 95%;
        }
      }
      @keyframes spin {
        100% {
          transform: rotate(360deg);
        }
      }
      :host {
        font: var(--jh-font-helper-regular);
        display: block;
        width: 100%;
      }
      .text-content {
        color: var(
          --jh-progress-label-color,
          var(--jh-color-content-primary-enabled)
        );
        margin-bottom: var(--jh-space-100);
      }
      label {
        overflow-wrap: anywhere;
        word-break: normal;
      }
      span {
        color: var(
          --jh-progress-value-color,
          var(--jh-color-content-secondary-enabled)
        );
      }
      /* Linear */
      :host([label][type='linear']) .text-content {
        display: flex;
        justify-content: space-between;
      }
      :host([label=''][type='linear']) .text-content,
      :host(:not([label])[type='linear']) .text-content {
        display: flex;
        justify-content: flex-end;
      }
      span {
        width: auto;
      }
      span.has-label {
        margin-left: var(--jh-space-200);
      }
      .linear-progress-bar {
        background-color: var(
          --jh-progress-track-color,
          var(--jh-color-control-enabled)
        );
        border-radius: var(
          --jh-progress-track-border-radius,
          var(--jh-border-radius-50)
        );
        overflow: hidden;
      }
      :host([size='small']) .linear-progress-bar {
        height: var(--jh-size-50);
      }
      :host([size='medium']) .linear-progress-bar {
        height: var(--jh-size-100);
      }
      :host([size='large']) .linear-progress-bar {
        height: var(--jh-size-200);
      }
      :host .linear-progress-bar-value {
        background-color: var(
          --jh-progress-indicator-color,
          var(--jh-color-content-brand-enabled)
        );
        height: 100%;
      }
      /* Circular */
      :host([type='circular']) .container {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
      }
      :host([type='circular']) .text-content {
        margin-top: var(--jh-space-200);
        display: flex;
        flex-direction: column;
      }
      svg {
        transform: rotate(-90deg);
        width: var(--progress-size);
        height: var(--progress-size);
        overflow: visible;
      }
      :host([size='small']) svg {
        --progress-size: var(--jh-size-300);
      }
      :host([size='medium']) svg {
        --progress-size: var(--jh-size-400);
        margin-bottom: 1px;
      }
      :host([size='large']) svg {
        --progress-size: var(--jh-size-800);
        margin-bottom: 2px;
      }
      circle {
        transform-origin: 50% 50%;
        fill: none;
      }
      .circular-progress-bar {
        stroke: var(--jh-progress-track-color, var(--jh-color-control-enabled));
        stroke-dashoffset: 0;
      }
      .circular-progress-bar-value {
        stroke: var(
          --jh-progress-indicator-color,
          var(--jh-color-content-brand-enabled)
        );
      }
      :host([size='small']) circle {
        stroke-width: 1;
        stroke-dasharray: 37.8px;
      }
      :host([size='medium']) circle {
        stroke-width: 2;
        stroke-dasharray: 50.3px;
      }
      :host([size='large']) circle {
        stroke-width: 4;
        stroke-dasharray: 100.8px;
      }
      :host([type='circular']) div {
        text-align: center;
      }
      /* Indeterminate */
      :host([indeterminate]) .linear-progress-bar-value {
        width: 50%;
        animation: 1.2s cubic-bezier(0.65, 0, 0.35, 1) infinite alternate
          indicator;
      }
      :host([indeterminate]) svg {
        transform: none;
        animation: spin 0.75s linear infinite;
      }
    `;
  }

  static get properties() {
    return {
      /** Sets an `aria-label` to assist screen reader users when no visible label is present. */
      accessibleLabel: { type: String, attribute: 'accessible-label' },
      /** Sets `aria-valuetext` on progress indicator to provide text alternative of `aria-valuenow`. To be used when progress cannot be represented as a number. */
      accessibleValueText: { type: String, attribute: 'accessible-valuetext' },
      /** Hides the `value` text.  */
      hideValue: { type: Boolean, attribute: 'hide-value' },
      /** Sets the indeterminate state on progress. To be used when progress cannot be calculated. */
      indeterminate: { type: Boolean, reflect: true },
      /**
       * Provides information about the item which triggered the progress component.
       */
      label: { type: String, reflect: true },
      /** Defines the maximum allowed value and sets `aria-valuemax` attribute. */
      max: { type: Number },
      /** Defines the minimum allowed value and sets `aria-valuemin` attribute. */
      min: { type: Number },
      /** Sets the size of the progress component. */
      size: { type: String, reflect: true },
      /** Determines the style of progress to display. */
      type: { type: String, reflect: true },
      /** Specifies how much of the task has been completed. This value is used to calculate the percentage complete based on the min and max values. */
      value: { type: Number },
    };
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
    /** @type {Boolean} */
    this.indeterminate = false;
    /** @type {?string} */
    this.label = null;
    /** @type {'small'|'medium'|'large'} */
    this.size = 'medium';
    /** @type {'linear'|'circular'} */
    this.type = 'linear';
    /** @type {Boolean} */
    this.hideValue = false;
    /** @type {?string} */
    this.#internals.ariaLabel;
    /** @type {number} */
    this.#internals.ariaValueMax;
    /** @type {number} */
    this.#internals.ariaValueMin;
    /** @type {?number} */
    this.#internals.ariaValueNow;
    /** @type {?string} */
    this.#internals.ariaValueText;
    /** @type {?string} */
    this.#internals.role = 'progressbar';
    /** @type {?string} */
    this.accessibleLabel = null;
    /** @type {?number} */
    this.max = 100;
    /** @type {?number} */
    this.min = 0;
    /** @type {?number} */
    this.value = 0;
    /** @type {?string} */
    this.accessibleValueText = null;
  }

  connectedCallback() {
    super.connectedCallback();
    let observer = new MutationObserver(this.#updateState.bind(this));
    observer.observe(this, { attributeFilter: ['indeterminate'] });
  }

  #updateState(){
    if (this.indeterminate) {
      this.value = null;
    }
  }

  // Shared setter for elementInternals properties
  #setAttribute(ariaAttribute, newValue) {
    const oldValue = this.#internals[ariaAttribute];

    if (newValue !== oldValue) {
      this.#internals[ariaAttribute] = newValue;
    }
    this.requestUpdate(ariaAttribute, oldValue);
  }

  get label() {
    return this.#label;
  }

  set label(newValue) {
    const oldValue = this.label;
    if (newValue !== oldValue) {
      this.#label = newValue;
      if (this.accessibleLabel === null) {
        this.accessibleLabel = newValue;
      }
    }
    this.requestUpdate('label', oldValue);
  }

  get accessibleLabel() {
    return this.#internals.ariaLabel;
  }

  set accessibleLabel(newValue) {
    this.#setAttribute('ariaLabel', newValue);
  }

  get min() {
    return this.#internals.ariaValueMin;
  }

  set min(newValue) {
    this.#setAttribute('ariaValueMin', newValue);
  }

  get max() {
    return this.#internals.ariaValueMax;
  }

  set max(newValue) {
    this.#setAttribute('ariaValueMax', newValue);
  }

  get accessibleValueText() {
    return this.#internals.ariaValueText;
  }

  set accessibleValueText(newValue) {
    this.#setAttribute('ariaValueText', newValue);
  }

  get value() {
    return this.#internals.ariaValueNow; 
  }

  set value(newValue) {
    this.#setAttribute('ariaValueNow', newValue);
  }

  #getCircularIndicator(size, indeterminate, percentage) {
    let percentComplete;

    if (indeterminate) {
      percentComplete = 75;
    } else if (percentage === null) {
      percentComplete = 0;
    } else {
      percentComplete = percentage;
    }

    const circle = {
      // Numbers represent radius, x&y axis, and circumference
      small: [6, 6, 37.8],
      medium: [8, 8, 50.3],
      large: [16, 16, 100.8],
    };

    const [r, axis, c] = circle[size];

    let percentOfCircleFilled = c - (c * Number(percentComplete)) / 100;

    return html`
      <svg>
        <circle
          class="circular-progress-bar"
          r=${r}
          cx=${axis}
          cy=${axis}
          c=${c}
        ></circle>
        <circle
          class="circular-progress-bar-value"
          r=${r}
          cx=${axis}
          cy=${axis}
          c=${c}
          style="stroke-dashoffset:${percentOfCircleFilled}px"
        ></circle>
      </svg>
    `;
  }

  #getLinearIndicator(percentage) {
    return html`
      <div class="linear-progress-bar">
        <div
          class="linear-progress-bar-value"
          style=${ifDefined(
            this.indeterminate ? null : `width:${percentage || 0}%`
          )}
        ></div>
      </div>
    `;
  }

  render() {
    let indicator;
    let value;
    let valueStyles;
    let label;

    let percentage = Math.round(
      ((+this.value - +this.min) / (+this.max - +this.min)) * 100
    );

    if (this.label) {
      label = html`<label>${this.label}</label>`;
    }

    if (this.type === 'linear') {
      indicator = this.#getLinearIndicator(percentage);
    } else if (this.type === 'circular') {
      indicator = this.#getCircularIndicator(
        this.size,
        this.indeterminate,
        percentage
      );
    }

    if (this.value && !this.hideValue && !this.indeterminate) {
      if (this.label && this.type === 'linear') {
        valueStyles = 'has-label';
      }
      value = html`
        <span class=${ifDefined(valueStyles)}>${percentage + '%'}</span>
      `;
    }

    return html`
      <div class="container">
        ${this.label || (this.value && !this.hideValue)
          ? html`<div class="text-content">${label} ${value}</div>`
          : null}
        ${indicator}
      </div>
    `;
  }
}

customElements.define('jh-progress', JhProgress);