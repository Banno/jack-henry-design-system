// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { JhElement } from '../element/element';

/**
 * Tag Group
 *
 * @slot default - Use to insert `<jh-tag>` component(s).
 * @customElement jh-tag-group
 */
export class JhTagGroup extends JhElement {
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
    this.internals.role = 'group';
    /** @type {'start'| 'end'} */
    this.alignment = 'start';
  }

  render() {
    return html` <slot></slot> `;
  }
}
JhElement.register('jh-tag-group', JhTagGroup);
