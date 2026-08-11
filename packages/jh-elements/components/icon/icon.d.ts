// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
* The icon component provides authors with a means to use their own SVG icons while still enabling access
* to our design tokens, encouraging consistency across your product. In addition to the icon component, Jack Henry
* also maintains a robust icon library available as raw SVGs and as discrete web components, with each component
* utilizing our design tokens.
*
* [Icon Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-icon--docs)
*
* @cssprop --jh-icon-color-fill - The icon color. Defaults to `--jh-color-content-secondary-enabled`.
* @cssprop --jh-icon-size-extra-small - The icon size when `size="extra-small"`. Defaults to `--jh-dimension-400`.
* @cssprop --jh-icon-size-small - The icon size when `size="small"`. Defaults to `--jh-dimension-500`.
* @cssprop --jh-icon-size-medium - The icon size when `size="medium"`. Defaults to `--jh-dimension-600`.
* @cssprop --jh-icon-size-large - The icon size when `size="large"`. Defaults to `--jh-dimension-900`.
* @cssprop --jh-icon-size-extra-large - The icon size when `size="extra-large"`. Defaults to `--jh-dimension-1400`.
* @cssprop --jh-icon-size-extra-extra-large - The icon size when `size="extra-extra-large"`. Defaults to `--jh-dimension-2100`.
* @slot default - Use to insert the icon SVG content.
*
* @customElement jh-icon
*/
export class JhIcon extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        size: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    /**
     * Sets the size of the icon.
     * @type { 'x-small' | 'small' | 'medium' | 'large' | 'x-large'|'xx-large' }
     */
    size: "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large";
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-icon': JhIcon;
  }
}
