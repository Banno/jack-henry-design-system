// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * A tag group is used to group `<jh-tag>` components to provide layout and alignment support. 
 * 
 * [Tag Group Storybook Documentation](https://release-v2--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-tag-group--docs)
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
      alignment: {
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.internals.role = 'group';
    /**
     * Sets the alignment of the tags.
     * @type { 'start' | 'end' }
     */
    this.alignment = 'start';
  }

  /** @protected */
  render() {
    return html` <slot></slot> `;
  }
}

JhTagGroup.register('jh-tag-group', JhTagGroup);
