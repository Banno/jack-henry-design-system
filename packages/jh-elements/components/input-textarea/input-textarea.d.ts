// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The input textarea component provides a multi-line text field that allows users to submit detailed, unstructured, free-form text.
 *
 * [Input Textarea Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-input-textarea--docs)
 *
 * @cssprop --jh-input-textarea-field-dimension-min-height - The input field minimum height. Defaults to `--jh-dimension-2000` when `size='small'`, `--jh-dimension-2200` when `size='medium'`, and `--jh-dimension-2400` when `size='large'`.
 *
 * @event jh-change - Dispatched when the value of the input has changed and input loses focus. Event payload includes the value of the input and can be accessed via `e.detail.state.value`.
 * @event jh-input - Dispatched when the value of the input has changed. Event payload includes the value of the input and can be accessed via `e.detail.state.value`.
 *
 * @customElement jh-input-textarea
 */
export class JhInputTextarea extends JhInput {
    static get styles(): import("lit").CSSResult[];
    static get properties(): {
        autoGrow: {
            type: BooleanConstructor;
            attribute: string;
        };
        cols: {
            type: NumberConstructor;
        };
        noResize: {
            type: BooleanConstructor;
            attribute: string;
        };
        rows: {
            type: NumberConstructor;
        };
        wrap: {
            type: StringConstructor;
        };
        readonly: {
            type: BooleanConstructor;
        };
    };
    /**
     * Enables the input height to grow automatically to accommodate user input. `auto-grow` will also remove the input's native resize capability.
     * @attr auto-grow
     * @type {boolean}
     */
    autoGrow: boolean;
    /**
     * Sets the width of the input field.
     * @type {number | null}
     */
    cols: number | null;
    /**
     * Removes native resize capability of the input field.
     * @attr no-resize
     * @type {boolean}
     */
    noResize: boolean;
    /**
     * Sets the height of the input field.
     * @type {number | null}
     */
    rows: number | null;
    /**
     * Specifies how text should be wrapped when submitted in a form. The `cols` property must be set for `wrap='hard'` to take effect.
     * @type { 'hard' | 'soft' | 'off' | null }
     */
    wrap: "hard" | "soft" | "off" | null;
    #private;
}
import { JhInput } from '../input/input.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-input-textarea': JhInputTextarea;
  }
}
