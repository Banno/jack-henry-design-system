// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Tab groups provide a way to navigate between multiple groups of related content within the same context.
 *
 * [Tab Group Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-tab-tab-group--docs)
 *
 * @cssprop --jh-tab-group-list-color-border - The color of the border below the tab list. Defaults to `--jh-border-decorative-color`.
 *
 * @slot default - Use to insert `jh-tab-panel` elements. Each panel is matched to the tab in the same position.
 * @slot jh-tab-group-tabs - Use to insert `jh-tab` elements.
 *
 * @event jh-change - Dispatched when the user selects a different tab. Event payload includes the index of the selected tab and can be accessed via `e.detail.state.selectedIndex`. The selected tab and its panel can be accessed via `e.detail.reference.tab` and `e.detail.reference.panel`.
 *
 * @customElement jh-tab-group
 */
export class JhTabGroup extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        accessibleLabel: {
            type: StringConstructor;
            attribute: string;
        };
        _overflowing: {
            type: BooleanConstructor;
            state: boolean;
        };
    };
    /**
     * Sets an `aria-label` on the tab list to assist screen reader users.
     * @attr accessible-label
     * @type {string | null}
     */
    accessibleLabel: string | null;
    /** @internal @type {boolean} */
    _overflowing: boolean;
    /** @protected */
    protected firstUpdated(): void;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-tab-group': JhTabGroup;
  }
}
