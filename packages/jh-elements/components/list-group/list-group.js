import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

let id = 0;
/**
 * @cssprop --jh-list-group-subheader-color-background - The subheader background-color.
 * Defaults to `transparent`.
 * @cssprop --jh-list-group-subheader-color-text - The subheader text color.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-group-subheader-space-padding-right - The subheader padding-right.
 * Defaults to `--jh-dimension-600`
 * @cssprop --jh-list-group-subheader-space-padding-left - The subheader padding-left.
 * Defaults to `--jh-dimension-600`
 *
 * @slot default - Use to insert `<jh-list-item>` component(s).
 * @customElement jh-list-group
 */
export class JhListGroup extends LitElement {
  /** @type {?Number} */
  #id;

  static get styles() {
    return css`
      :host {
        display: block;
        box-sizing: border-box;
      }
      .subheader {
        background-color: var(
          --jh-list-group-subheader-color-background,
          transparent
        );
        color: var(
          --jh-list-group-subheader-color-text,
          var(--jh-color-content-secondary-enabled)
        );
        font-family: var(--jh-font-heading-medium-1-font-family);
        font-weight: var(--jh-font-heading-medium-1-font-weight);
        font-size: var(--jh-font-heading-medium-1-font-size);
        line-height: var(--jh-font-heading-medium-1-line-height);
        padding-top: var(--jh-dimension-400);
        padding-right: var(
          --jh-list-group-subheader-space-padding-right,
          var(--jh-dimension-600)
        );
        padding-bottom: var(--jh-dimension-400);
        padding-left: var(
          --jh-list-group-subheader-space-padding-left,
          var(--jh-dimension-600)
        );
        word-break: break-word;
      }
    `;
  }

  static get properties() {
    return {
      /** Describes the type of data to be collected. */
      label: {
        type: String,
      },
      /** Sets an `aria-label` to assist screen reader users when no visible label is present. */
      accessibleLabel: { type: String, attribute: 'accessible-label' },
    };
  }

  constructor() {
    super();
    /** @type {?string} */
    this.label = null;
    /** @type {?string} */
    this.accessibleLabel = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.#id = id++;
  }

  render() {
    return html`
      ${this.label
        ? html`<div class="subheader" id="list-group-labelledby-${this.#id}">
            ${this.label}
          </div>`
        : null}
      <div
        role="group"
        aria-labelledby=${ifDefined(
          this.label ? `list-group-labelledby-${this.#id}` : null
        )}
        aria-label=${ifDefined(this.accessibleLabel)}
      >
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('jh-list-group', JhListGroup);