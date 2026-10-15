/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Row
 * 
 * @customElement forge-row
 * @cssprop --forge-row-gap - The space between slotted elements. Defaults to the `--jh-dimension-{gap}` token.
 * @cssprop --forge-row-padding - The padding inside the layout container. Defaults to the `--jh-dimension-{padding}` token.
 * 
 * @slot default - Use to insert slotted elements inside the layout container.
 */
export class ForgeRow extends JhElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: row;
      }
      /* gap */
      :host([gap="0"]) { gap: var(--forge-row-gap, var(--jh-dimension-0)); }
      :host([gap="25"]) { gap: var(--forge-row-gap, var(--jh-dimension-25)); }
      :host([gap="50"]) { gap: var(--forge-row-gap, var(--jh-dimension-50)); }
      :host([gap="100"]) { gap: var(--forge-row-gap, var(--jh-dimension-100)); }
      :host([gap="200"]) { gap: var(--forge-row-gap, var(--jh-dimension-200)); }
      :host([gap="300"]) { gap: var(--forge-row-gap, var(--jh-dimension-300)); }
      :host([gap="400"]) { gap: var(--forge-row-gap, var(--jh-dimension-400)); }
      :host([gap="500"]) { gap: var(--forge-row-gap, var(--jh-dimension-500)); }
      :host([gap="600"]) { gap: var(--forge-row-gap, var(--jh-dimension-600)); }
      :host([gap="700"]) { gap: var(--forge-row-gap, var(--jh-dimension-700)); }
      :host([gap="800"]) { gap: var(--forge-row-gap, var(--jh-dimension-800)); }
      :host([gap="900"]) { gap: var(--forge-row-gap, var(--jh-dimension-900)); }
      :host([gap="1000"]) { gap: var(--forge-row-gap, var(--jh-dimension-1000)); }

      /* padding */
      :host([padding="0"]) { padding: var(--forge-row-padding, var(--jh-dimension-0)); }
      :host([padding="25"]) { padding: var(--forge-row-padding, var(--jh-dimension-25)); }
      :host([padding="50"]) { padding: var(--forge-row-padding, var(--jh-dimension-50)); }
      :host([padding="100"]) { padding: var(--forge-row-padding, var(--jh-dimension-100)); }
      :host([padding="200"]) { padding: var(--forge-row-padding, var(--jh-dimension-200)); }
      :host([padding="300"]) { padding: var(--forge-row-padding, var(--jh-dimension-300)); }
      :host([padding="400"]) { padding: var(--forge-row-padding, var(--jh-dimension-400)); }
      :host([padding="500"]) { padding: var(--forge-row-padding, var(--jh-dimension-500)); }
      :host([padding="600"]) { padding: var(--forge-row-padding, var(--jh-dimension-600)); }
      :host([padding="700"]) { padding: var(--forge-row-padding, var(--jh-dimension-700)); }
      :host([padding="800"]) { padding: var(--forge-row-padding, var(--jh-dimension-800)); }
      :host([padding="900"]) { padding: var(--forge-row-padding, var(--jh-dimension-900)); }
      :host([padding="1000"]) { padding: var(--forge-row-padding, var(--jh-dimension-1000)); }
      :host([align-y="start"]) { align-items: flex-start; }
      :host([align-y="end"]) { align-items: flex-end; }
      :host([align-y="center"]) { align-items: center; }
      :host([align-y="stretch"]) { align-items: stretch; }
      :host([align-y="baseline"]) { align-items: baseline; }
      :host([align-x="start"]) { justify-content: flex-start; }
      :host([align-x="end"]) { justify-content: flex-end; }
      :host([align-x="center"]) { justify-content: center; }
      :host([align-x="between"]) { justify-content: space-between; }
      :host([align-x="around"]) { justify-content: space-around; }
      :host([align-x="evenly"]) { justify-content: space-evenly; }
      :host([wrap]) { flex-wrap: wrap; }
    `;
  }

  static get properties() {
    return {
      /** Sets the gap between elements slotted in the container. */
      gap: { type: String, reflect: true },
      /** Sets the inner padding of the layout container.  */
      padding: { type: String, reflect: true },
      /** Sets the alignment of slotted elements along the vertical axis. */
      alignY: { type: String, reflect: true, attribute: 'align-y' },
      /** Sets the alignment of the slotted elements along the horizontal axis. */
      alignX: { type: String, reflect: true, attribute: 'align-x' },
      /** Determines whether the slotted elements should wrap onto multiple lines. */
      wrap: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    /** @type {'0' | '25' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'} */
    this.gap = '0';
    /** @type {'0' | '25' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'} */
    this.padding = '0';
    /** @type {'start' | 'end' | 'center' | 'stretch' | 'baseline'} */
    this.alignY = 'stretch';
    /** @type {'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'} */
    this.alignX = 'start';
    /** @type {boolean} */
    this.wrap = false;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
ForgeRow.register('forge-row', ForgeRow);
