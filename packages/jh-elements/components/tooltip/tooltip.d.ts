// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Tooltips are floating components that appears when a user hovers or focuses onto an originating element
 * such as a button, icon or link. They display additional information about the originating element which is not
 * critical in nature.
 *
 * [Tooltip Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-tooltip--docs)
 *
 * @cssprop --jh-tooltip-color-background - The tooltip and arrow background-color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-tooltip-color-text - The tooltip text color. Defaults to `--jh-color-content-on-primary-enabled`.
 * @cssprop --jh-tooltip-size-max-width - The maximum width of the tooltip. Defaults to `160px`.
 *
 * @slot default - Use to insert the element that triggers the tooltip.
 * @slot jh-tooltip-content - Use to insert the content of the tooltip.
 *
 * @customElement jh-tooltip
 */
export class JhTooltip extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        flipDisabled: {
            type: BooleanConstructor;
            attribute: string;
        };
        open: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        position: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    /**
     * Determines whether the tooltip flips to a different position when it reaches the edge of the viewport.
     * @attr flip-disabled
     * @type {boolean}
     */
    flipDisabled: boolean;
    /**
     * Determines whether the tooltip is open or closed. Can be set on the tooltip to force it open.
     * @type {boolean}
     */
    open: boolean;
    /**
     * The position of the tooltip and its arrow.
     * @type { 'left' | 'right' | 'top-start' | 'top-end' | 'top-center' | 'bottom-start' | 'bottom-end' | 'bottom-center' }
     */
    position: "left" | "right" | "top-start" | "top-end" | "top-center" | "bottom-start" | "bottom-end" | "bottom-center";
    /** @protected */
    protected updated(): void;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-tooltip': JhTooltip;
  }
}
