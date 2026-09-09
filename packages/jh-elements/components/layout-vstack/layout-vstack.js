/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Layout Vstack
 * @customElement jh-layout-vstack
 */
export class JhLayoutVstack extends JhElement {
  static get styles() {
    return css`
        :host {
          display: flex;
          flex-direction: column;
          border: 1px solid green;
      }

      :host([gap="0"]) { gap: var(--jh-dimension-0); }
      :host([gap="25"]) { gap: var(--jh-dimension-25); }
      :host([gap="50"]) { gap: var(--jh-dimension-50); }
      :host([gap="100"]) { gap: var(--jh-dimension-100); }
      :host([gap="200"]) { gap: var(--jh-dimension-200); }
      :host([gap="300"]) { gap: var(--jh-dimension-300); }
      :host([gap="400"]) { gap: var(--jh-dimension-400); }
      :host([gap="500"]) { gap: var(--jh-dimension-500); }
      :host([gap="600"]) { gap: var(--jh-dimension-600); }
      :host([gap="700"]) { gap: var(--jh-dimension-700); }
      :host([gap="800"]) { gap: var(--jh-dimension-800); }
      :host([gap="900"]) { gap: var(--jh-dimension-900); }
      :host([gap="1000"]) { gap: var(--jh-dimension-1000); }

      :host([padding="0"]) { padding: var(--jh-dimension-0); }
      :host([padding="25"]) { padding: var(--jh-dimension-25); }
      :host([padding="50"]) { padding: var(--jh-dimension-50); }
      :host([padding="100"]) { padding: var(--jh-dimension-100); }
      :host([padding="200"]) { padding: var(--jh-dimension-200); }
      :host([padding="300"]) { padding: var(--jh-dimension-300); }
      :host([padding="400"]) { padding: var(--jh-dimension-400); }
      :host([padding="500"]) { padding: var(--jh-dimension-500); }
      :host([padding="600"]) { padding: var(--jh-dimension-600); }
      :host([padding="700"]) { padding: var(--jh-dimension-700); }
      :host([padding="800"]) { padding: var(--jh-dimension-800); }
      :host([padding="900"]) { padding: var(--jh-dimension-900); }
      :host([padding="1000"]) { padding: var(--jh-dimension-1000); }

      :host([align="start"]) { align-items: flex-start; }
      :host([align="end"]) { align-items: flex-end; }
      :host([align="center"]) { align-items: center; }
      :host([align="stretch"]) { align-items: stretch; }
      :host([align="baseline"]) { align-items: baseline; }

      :host([justify="start"]) { justify-content: flex-start; }
      :host([justify="end"]) { justify-content: flex-end; }
      :host([justify="center"]) { justify-content: center; }
      :host([justify="between"]) { justify-content: space-between; }
      :host([justify="around"]) { justify-content: space-around; }
      :host([justify="evenly"]) { justify-content: space-evenly; }

      :host([wrap]) { flex-wrap: wrap; }
    `;
  }

  static get properties() {
    return {
      /** Maps to the `--jh-dimension-{gap}` token to set the space between children */
      gap: { type: String, reflect: true },
      /** Maps to the `--jh-dimension-{padding}` token to set the inner padding */
      padding: { type: String, reflect: true },
      /** Maps to `align-items`: `start`, `end`, `center`, `stretch`, `baseline` */
      align: { type: String, reflect: true },
      /** Maps to `justify-content`: `start`, `end`, `center`, `between`, `around`, `evenly` */
      justify: { type: String, reflect: true },
      /** Enables `flex-wrap: wrap` */
      wrap: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    /** @type {?string} */
    this.gap = null;
    /** @type {?string} */
    this.padding = null;
    /** @type {?string} */
    this.align = null;
    /** @type {?string} */
    this.justify = null;
    /** @type {boolean} */
    this.wrap = false;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
JhLayoutVstack.register('jh-layout-vstack', JhLayoutVstack);