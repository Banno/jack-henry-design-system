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

      :host([alignment='fill']) { place-items: stretch; }
      :host([alignment='top-leading']) { place-items: start start; }
      :host([alignment='top']) { place-items: start center; }
      :host([alignment='top-trailing']) { place-items: start end; }
      :host([alignment='leading']) { place-items: center start; }
      :host([alignment='center']) { place-items: center; }
      :host([alignment='trailing']) { place-items: center end; }
      :host([alignment='bottom-leading']) { place-items: end start; }
      :host([alignment='bottom']) { place-items: end center; }
      :host([alignment='bottom-trailing']) { place-items: end end; }
    `;
  }

  static get properties() {
    return {
      /** Sets where layers sit within the stack. `fill` makes each layer cover the whole stack; the other values pin every layer to that edge or corner at its natural size. */
      alignment: { type: String, reflect: true }
    };
  }

  constructor() {
    super();
    /** @type {'fill' | 'top-leading' | 'top' | 'top-trailing' | 'leading' | 'center' | 'trailing' | 'bottom-leading' | 'bottom' | 'bottom-trailing'} */
    this.alignment = 'fill';
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
ForgeStack.register('forge-stack', ForgeStack);