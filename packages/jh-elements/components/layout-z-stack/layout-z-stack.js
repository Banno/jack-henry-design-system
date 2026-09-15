/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Layout Z Stack
 *
 * @customElement jh-layout-z-stack
 *
 * @slot default - Use to insert layered elements. Each slotted element occupies the same cell and stacks in source order, with the last element on top.
 */
export class JhLayoutZStack extends JhElement {
  static get styles() {
    return css`
        :host {
          display: grid;
      }

      /* Every slotted element shares one grid cell so they stack on top of each other. */
      /* isolation contains each layer's stacking so positioned descendants can't paint above later layers. */
      ::slotted(*) {
        grid-area: 1 / 1;
        isolation: isolate;
      }

      :host([align="start"]) { align-items: start; }
      :host([align="end"]) { align-items: end; }
      :host([align="center"]) { align-items: center; }
      :host([align="stretch"]) { align-items: stretch; }

      :host([justify="start"]) { justify-items: start; }
      :host([justify="end"]) { justify-items: end; }
      :host([justify="center"]) { justify-items: center; }
      :host([justify="stretch"]) { justify-items: stretch; }
    `;
  }

  static get properties() {
    return {
      /** Sets the alignment of layered elements along the block (vertical) axis. */
      align: { type: String, reflect: true },
      /** Sets the alignment of layered elements along the inline (horizontal) axis. */
      justify: { type: String, reflect: true }
    };
  }

  constructor() {
    super();
    /** @type {'start' | 'end' | 'center' | 'stretch'} */
    this.align = 'stretch';
    /** @type {'start' | 'end' | 'center' | 'stretch'} */
    this.justify = 'stretch';
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
JhLayoutZStack.register('jh-layout-z-stack', JhLayoutZStack);