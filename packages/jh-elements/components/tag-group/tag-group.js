import { LitElement, css, html } from 'lit';

/**
 * Tag Group
 *
 * @slot default - Use to insert `<jh-tag>` component(s).
 * @customElement jh-tag-group
 */
export class JhTagGroup extends LitElement {
  /** @type {ElementInternals} */
  #internals;

  static get styles() {
    return css`
      :host {
        gap: var(--jh-dimension-100);
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
      }
      :host([alignment='start']) {
        justify-content: flex-start;
      }
      :host([alignment='end']) {
        justify-content: flex-end;
      }
    `;
  }

  static get properties() {
    return {
      /** Sets the alignment of the tags. */
      alignment: {
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#internals.role = 'group';
    /** @type {'start'| 'end'} */
    this.alignment = 'start';
  }

  render() {
    return html` <slot></slot> `;
  }
}

customElements.define('jh-tag-group', JhTagGroup);
