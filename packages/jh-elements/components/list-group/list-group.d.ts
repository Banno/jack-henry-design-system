// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The list group component is a container used to group together list items within a list.
 *
 * [List Group Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-list-group--docs)
 *
 * @cssprop --jh-list-group-subheader-color-background - The subheader background-color.
 * Defaults to `transparent`.
 * @cssprop --jh-list-group-subheader-color-text - The subheader text color.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-list-group-subheader-space-padding-right - The subheader padding-right.
 * Defaults to `--jh-dimension-600`
 * @cssprop --jh-list-group-subheader-space-padding-left - The subheader padding-left.
 * Defaults to `--jh-dimension-600`
 *
 * @slot default - Use to insert `<jh-list-item>` component(s).
 * @customElement jh-list-group
 */
export class JhListGroup extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        label: {
            type: StringConstructor;
        };
        accessibleLabel: {
            type: StringConstructor;
            attribute: string;
        };
    };
    /**
     * Describes the type of data to be collected.
     * @type {string | null}
     */
    label: string | null;
    /**
     * Sets an `aria-label` to assist screen reader users when no visible label is present.
     * @attr accessible-label
     * @type {string | null}
     */
    accessibleLabel: string | null;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-list-group': JhListGroup;
  }
}
