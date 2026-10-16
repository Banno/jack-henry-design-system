/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Stack
 *
 * @customElement forge-stack
 *
 * @slot default - Use to insert layered elements. Each slotted element occupies the same cell and stacks in source order, with the last element on top.
 */
export class ForgeStack extends JhElement {
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

      :host([align-y="start"]) { align-items: start; }
      :host([align-y="end"]) { align-items: end; }
      :host([align-y="center"]) { align-items: center; }
      :host([align-y="stretch"]) { align-items: stretch; }

      :host([align-x="start"]) { justify-items: start; }
      :host([align-x="end"]) { justify-items: end; }
      :host([align-x="center"]) { justify-items: center; }
      :host([align-x="stretch"]) { justify-items: stretch; }
    `;
  }

  static get properties() {
    return {
      /** Sets the alignment of layered elements along the vertical axis. */
      alignY: { type: String, reflect: true, attribute: 'align-y' },
      /** Sets the alignment of layered elements along the horizontal axis. */
      alignX: { type: String, reflect: true, attribute: 'align-x' }
    };
  }

  constructor() {
    super();
    /** @type {'start' | 'end' | 'center' | 'stretch'} */
    this.alignY = 'stretch';
    /** @type {'start' | 'end' | 'center' | 'stretch'} */
    this.alignX = 'stretch';
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
ForgeStack.register('forge-stack', ForgeStack);