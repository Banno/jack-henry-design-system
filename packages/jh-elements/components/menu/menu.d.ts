// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Menus display lists of choices or actions. This is not a Navigation component.
 *
 * [Menu Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-menu--docs)
 *
 * @cssprop --jh-menu-z-index - The menu z-index. Defaults to `--jh-z-index-positive-1000`.
 * @cssprop --jh-menu-color-background - The menu container background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-menu-shadow - The menu box-shadow. Defaults to `--jh-shadow-high`.
 * @cssprop --jh-menu-border-radius - The menu border-radius. Defaults to `--jh-border-radius-200`.
 * @cssprop --jh-menu-space-padding - The menu container padding. Defaults to `--jh-dimension-200 0`.
 * @cssprop --jh-menu-color-text - The text color. Defaults to `--jh-color-content-primary-enabled`.
 *
 * @slot default - Use to insert menu items.
 * @customElement jh-menu
 */
export class JhMenu extends JhElement {
    static get styles(): import("lit").CSSResult;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-menu': JhMenu;
  }
}
