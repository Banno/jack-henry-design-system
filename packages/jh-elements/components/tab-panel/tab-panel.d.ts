// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Tab panels hold the content for their respective tab. Place them in the default slot of `jh-tab-group`.
 *
 * [Tab Panel Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-tab-tab-panel--docs)
 *
 * @cssprop --jh-tab-panel-space-padding-top - The top padding of the tab panel. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-tab-panel-space-padding-right - The right padding of the tab panel. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-tab-panel-space-padding-bottom - The bottom padding of the tab panel. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-tab-panel-space-padding-left - The left padding of the tab panel. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-tab-panel-color-text - The default text color of the tab panel content. Defaults to `--jh-color-content-primary-enabled`.
 *
 * @slot default - Use to insert the tab panel content.
 *
 * @customElement jh-tab-panel
 */
export class JhTabPanel extends JhElement {
    static get styles(): import("lit").CSSResult;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-tab-panel': JhTabPanel;
  }
}
