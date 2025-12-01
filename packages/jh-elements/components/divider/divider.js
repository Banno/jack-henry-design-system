// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css } from 'lit';

/**
 * @cssprop --jh-divider-border-width - The divider width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-divider-border-style - The divider style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-divider-color-border - The divider color. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-divider-space-inset - The divider margin-left. Defaults to `0`.
 * @customElement jh-divider
 */
export class JhDivider extends LitElement {
  static get styles() {
    return css`
        :host {
          border-bottom-width: var(--jh-divider-border-width, var(--jh-border-decorative-width));
          border-bottom-style: var(--jh-divider-border-style, var(--jh-border-decorative-style));
          border-bottom-color: var(--jh-divider-color-border, var(--jh-border-decorative-color));
          display: block;
          margin-top: 16px;
          margin-bottom: 16px;
          box-sizing: content-box;
        }
        :host([inset='0']) {
          --inset: 0;
        }
        :host([inset='8']) {
          --inset: var(--jh-dimension-200);
        }
        :host([inset='16']) {
          --inset: var(--jh-dimension-400);
        }
        :host([inset='24']) {
          --inset: var(--jh-dimension-600);
        }
        :host([inset='32']) {
          --inset: var(--jh-dimension-800);
        }
        :host([inset='40']) {
          --inset: var(--jh-dimension-1000);
        }
        :host([inset='48']) {
          --inset: var(--jh-dimension-1200);
        }
        :host([inset='56']) {
          --inset: var(--jh-dimension-1400);
        }
        :host([inset='64']) {
          --inset: var(--jh-dimension-1600);
        }
        :host([inset='72']) {
          --inset: var(--jh-dimension-1800);
        }
        :host([inset='80']) {
          --inset: var(--jh-dimension-2000);
        }
        :host([inset='88']) {
          --inset: var(--jh-dimension-2200);
        }
        :host([inset='96']) {
          --inset: var(--jh-dimension-2400);
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