/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Column
 * 
 * @customElement forge-column
 * @cssprop --forge-column-gap - The space between slotted elements. Defaults to the `--jh-dimension-{gap}` token.
 * @cssprop --forge-column-padding - The padding inside the layout container. Defaults to the `--jh-dimension-{padding}` token.
 * 
 * @slot default - Use to insert slotted elements inside the layout container.
 */
export class ForgeColumn extends JhElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }
      /* gap */
      :host([gap="0"]) { gap: var(--forge-column-gap, var(--jh-dimension-0)); }
      :host([gap="25"]) { gap: var(--forge-column-gap, var(--jh-dimension-25)); }
      :host([gap="50"]) { gap: var(--forge-column-gap, var(--jh-dimension-50)); }
      :host([gap="100"]) { gap: var(--forge-column-gap, var(--jh-dimension-100)); }
      :host([gap="200"]) { gap: var(--forge-column-gap, var(--jh-dimension-200)); }
      :host([gap="300"]) { gap: var(--forge-column-gap, var(--jh-dimension-300)); }
      :host([gap="400"]) { gap: var(--forge-column-gap, var(--jh-dimension-400)); }
      :host([gap="500"]) { gap: var(--forge-column-gap, var(--jh-dimension-500)); }
      :host([gap="600"]) { gap: var(--forge-column-gap, var(--jh-dimension-600)); }
      :host([gap="700"]) { gap: var(--forge-column-gap, var(--jh-dimension-700)); }
      :host([gap="800"]) { gap: var(--forge-column-gap, var(--jh-dimension-800)); }
      :host([gap="900"]) { gap: var(--forge-column-gap, var(--jh-dimension-900)); }
      :host([gap="1000"]) { gap: var(--forge-column-gap, var(--jh-dimension-1000)); }

      /* padding */
      :host([padding="0"]) { padding: var(--forge-column-padding, var(--jh-dimension-0)); }
      :host([padding="25"]) { padding: var(--forge-column-padding, var(--jh-dimension-25)); }
      :host([padding="50"]) { padding: var(--forge-column-padding, var(--jh-dimension-50)); }
      :host([padding="100"]) { padding: var(--forge-column-padding, var(--jh-dimension-100)); }
      :host([padding="200"]) { padding: var(--forge-column-padding, var(--jh-dimension-200)); }
      :host([padding="300"]) { padding: var(--forge-column-padding, var(--jh-dimension-300)); }
      :host([padding="400"]) { padding: var(--forge-column-padding, var(--jh-dimension-400)); }
      :host([padding="500"]) { padding: var(--forge-column-padding, var(--jh-dimension-500)); }
      :host([padding="600"]) { padding: var(--forge-column-padding, var(--jh-dimension-600)); }
      :host([padding="700"]) { padding: var(--forge-column-padding, var(--jh-dimension-700)); }
      :host([padding="800"]) { padding: var(--forge-column-padding, var(--jh-dimension-800)); }
      :host([padding="900"]) { padding: var(--forge-column-padding, var(--jh-dimension-900)); }
      :host([padding="1000"]) { padding: var(--forge-column-padding, var(--jh-dimension-1000)); }
      :host([align-x="start"]) { align-items: flex-start; }
      :host([align-x="end"]) { align-items: flex-end; }
      :host([align-x="center"]) { align-items: center; }
      :host([align-x="stretch"]) { align-items: stretch; }
      :host([align-x="baseline"]) { align-items: baseline; }
      :host([align-y="start"]) { justify-content: flex-start; }
      :host([align-y="end"]) { justify-content: flex-end; }
      :host([align-y="center"]) { justify-content: center; }
      :host([align-y="between"]) { justify-content: space-between; }
      :host([align-y="around"]) { justify-content: space-around; }
      :host([align-y="evenly"]) { justify-content: space-evenly; }
      :host([align-wrap="start"]) { align-content: flex-start; }
      :host([align-wrap="end"]) { align-content: flex-end; }
      :host([align-wrap="center"]) { align-content: center; }
      :host([align-wrap="between"]) { align-content: space-between; }
      :host([align-wrap="around"]) { align-content: space-around; }
      :host([align-wrap="evenly"]) { align-content: space-evenly; }
      :host([align-wrap="stretch"]) { align-content: stretch; }
      :host([reverse]) { flex-direction: column-reverse; }
      :host([wrap="nowrap"]) { flex-wrap: nowrap; }
      :host([wrap="wrap"]) { flex-wrap: wrap; }
      :host([wrap="wrap-reverse"]) { flex-wrap: wrap-reverse; }
    `;
  }

  static get properties() {
    return {
      /** Sets the gap between elements slotted in the container. */
      gap: { type: String, reflect: true },
      /** Sets the inner padding of the layout container.  */
      padding: { type: String, reflect: true },
      /** Sets the alignment of slotted elements along the horizontal axis. */
      alignX: { type: String, reflect: true, attribute: 'align-x' },
      /** Sets the alignment of slotted elements along the vertical axis. */
      alignY: { type: String, reflect: true, attribute: 'align-y' },
      /** Distributes wrapped columns along the horizontal axis. Only applies when `wrap` is set and content spans multiple columns. */
      alignWrap: { type: String, reflect: true, attribute: 'align-wrap' },
      /** Reverses the order in which slotted elements are displayed. */
      reverse: { type: Boolean, reflect: true },
      /** Determines whether and how slotted elements wrap onto multiple columns. */
      wrap: { type: String, reflect: true }
    };
  }

  constructor() {
    super();
    /** @type {'0' | '25' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'} */
    this.gap = '0';
    /** @type {'0' | '25' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'} */
    this.padding = '0';
    /** @type {'start' | 'end' | 'center' | 'stretch' | 'baseline'} */
    this.alignX = 'stretch';
    /** @type {'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'} */
    this.alignY = 'start';
    /** @type {'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch'} */
    this.alignWrap = 'stretch';
    /** @type {boolean} */
    this.reverse = false;
    /** @type {'nowrap' | 'wrap' | 'wrap-reverse'} */
    this.wrap = 'nowrap';
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
ForgeColumn.register('forge-column', ForgeColumn);
