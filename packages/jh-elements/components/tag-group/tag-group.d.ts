// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * A tag group is used to group `<jh-tag>` components to provide layout and alignment support.
 *
 * [Tag Group Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-tag-group--docs)
 *
 * @slot default - Use to insert `<jh-tag>` component(s).
 * @customElement jh-tag-group
 */
export class JhTagGroup extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        alignment: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    /**
     * Sets the alignment of the tags.
     * @type { 'start' | 'end' }
     */
    alignment: "start" | "end";
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-tag-group': JhTagGroup;
  }
}
