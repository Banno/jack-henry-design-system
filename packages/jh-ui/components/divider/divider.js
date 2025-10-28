import { LitElement, css } from 'lit';

/**
 * @cssprop --jh-divider-border-width - The divider width. Defaults to `1px`.
 * @cssprop --jh-divider-border-style - The divider style. Defaults to solid.
 * @cssprop --jh-divider-color-border - The divider color. Defaults to `--jh-color-divider-secondary`.
 * @cssprop --jh-divider-space-inset - The divider margin-left. Defaults to `0`.
 * @customElement jh-divider
 */
export class JhDivider extends LitElement {
  static get styles() {
    return css`
        :host {
          border-bottom:
            var(--jh-divider-border-width, 1px)
            var(--jh-divider-border-style, solid)
            var(
              --jh-divider-color-border,
              var(--jh-color-divider-secondary)
            );
          display: block;
          margin-top: 16px;
          margin-bottom: 16px;
          box-sizing: content-box;
        }
        :host([inset='0']) {
          --inset: 0;
        }
        :host([inset='8']) {
          --inset: var(--jh-space-200);
        }
        :host([inset='16']) {
          --inset: var(--jh-space-400);
        }
        :host([inset='24']) {
          --inset: var(--jh-space-600);
        }
        :host([inset='32']) {
          --inset: var(--jh-space-800);
        }
        :host([inset='40']) {
          --inset: var(--jh-space-1000);
        }
        :host([inset='48']) {
          --inset: var(--jh-space-1200);
        }
        :host([inset='56']) {
          --inset: var(--jh-space-1400);
        }
        :host([inset='64']) {
          --inset: var(--jh-space-1600);
        }
        :host([inset='72']) {
          --inset: var(--jh-space-1800);
        }
        :host([inset='80']) {
          --inset: var(--jh-space-2000);
        }
        :host([inset='88']) {
          --inset: var(--jh-space-2200);
        }
        :host([inset='96']) {
          --inset: var(--jh-space-2400);
        }
        :host,
        :host[inset] {
          margin-left: var(--inset, var(--jh-divider-space-inset));
        }
      `
        }

  static get properties() {
    return {
      /**
       * The alignment of the left edge of the divider.
       */
      inset: {
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    /** @type {0|8|16|24|32|40|48|56|64|72|80|88|96} */
    this.inset = null;
  }
}

customElements.define('jh-divider', JhDivider);