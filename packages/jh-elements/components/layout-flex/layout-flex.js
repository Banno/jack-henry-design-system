/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Layout Flex
 * 
 * @customElement jh-layout-flex
 * @cssprop --jh-layout-flex-gap - The space between slotted elements. Defaults to the `--jh-dimension-{gap}` token.
 * @cssprop --jh-layout-flex-padding - The padding inside the layout flex container. Defaults to the `--jh-dimension-{padding}` token.
 * 
 * @slot default - Use to insert slotted elements inside the layout flex container.
 */
export class JhLayoutFlex extends JhElement {
  static get styles() {
    return css`
        :host {
          display: flex;
      }

      :host([orientation="horizontal"]) { flex-direction: row; }
      :host([orientation="vertical"]) { flex-direction: column; }

      :host([gap="0"]) { gap: var(--jh-layout-flex-gap, var(--jh-dimension-0)); }
      :host([gap="25"]) { gap: var(--jh-layout-flex-gap, var(--jh-dimension-25)); }
      :host([gap="50"]) { gap: var(--jh-layout-flex-gap, var(--jh-dimension-50)); }
      :host([gap="100"]) { gap: var(--jh-layout-flex-gap, var(--jh-dimension-100)); }
      :host([gap="200"]) { gap: var(--jh-layout-flex-gap, var(--jh-dimension-200)); }
      :host([gap="300"]) { gap: var(--jh-layout-flex-gap, var(--jh-dimension-300)); }
      :host([gap="400"]) { gap: var(--jh-layout-flex-gap, var(--jh-dimension-400)); }
      :host([gap="500"]) { gap: var(--jh-layout-flex-gap, var(--jh-dimension-500)); }
      :host([gap="600"]) { gap: var(--jh-layout-flex-gap, var(--jh-dimension-600)); }
      :host([gap="700"]) { gap: var(--jh-layout-flex-gap, var(--jh-dimension-700)); }
      :host([gap="800"]) { gap: var(--jh-layout-flex-gap, var(--jh-dimension-800)); }
      :host([gap="900"]) { gap: var(--jh-layout-flex-gap, var(--jh-dimension-900)); }
      :host([gap="1000"]) { gap: var(--jh-layout-flex-gap, var(--jh-dimension-1000)); }

      :host([padding="0"]) { padding: var(--jh-layout-flex-padding, var(--jh-dimension-0)); }
      :host([padding="25"]) { padding: var(--jh-layout-flex-padding, var(--jh-dimension-25)); }
      :host([padding="50"]) { padding: var(--jh-layout-flex-padding, var(--jh-dimension-50)); }
      :host([padding="100"]) { padding: var(--jh-layout-flex-padding, var(--jh-dimension-100)); }
      :host([padding="200"]) { padding: var(--jh-layout-flex-padding, var(--jh-dimension-200)); }
      :host([padding="300"]) { padding: var(--jh-layout-flex-padding, var(--jh-dimension-300)); }
      :host([padding="400"]) { padding: var(--jh-layout-flex-padding, var(--jh-dimension-400)); }
      :host([padding="500"]) { padding: var(--jh-layout-flex-padding, var(--jh-dimension-500)); }
      :host([padding="600"]) { padding: var(--jh-layout-flex-padding, var(--jh-dimension-600)); }
      :host([padding="700"]) { padding: var(--jh-layout-flex-padding, var(--jh-dimension-700)); }
      :host([padding="800"]) { padding: var(--jh-layout-flex-padding, var(--jh-dimension-800)); }
      :host([padding="900"]) { padding: var(--jh-layout-flex-padding, var(--jh-dimension-900)); }
      :host([padding="1000"]) { padding: var(--jh-layout-flex-padding, var(--jh-dimension-1000)); }

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
      /** Sets the orientation of the layout container. */
      orientation: { type: String, reflect: true },
      /** Sets the gap between elements slotted in the container. */
      gap: { type: String, reflect: true },
      /** Sets the inner padding of the layout container.  */
      padding: { type: String, reflect: true },
      /** Sets the alignment of slotted elements along the cross axis. */
      align: { type: String, reflect: true },
      /** Sets the alignment of the slotted elements along the main axis. */
      justify: { type: String, reflect: true },
      /** Determines whether the slotted elements should wrap onto multiple lines or columns. */
      wrap: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    /** @type {'horizontal' | 'vertical'} */
    this.orientation = 'horizontal';
    /** @type {'0' | '25' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'} */
    this.gap = '0';
    /** @type {'0' | '25' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'} */
    this.padding = '0';
    /** @type {'start' | 'end' | 'center' | 'stretch' | 'baseline'} */
    this.align = 'stretch';
    /** @type {'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'} */
    this.justify = 'start';
    /** @type {boolean} */
    this.wrap = false;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
JhLayoutFlex.register('jh-layout-flex', JhLayoutFlex);
