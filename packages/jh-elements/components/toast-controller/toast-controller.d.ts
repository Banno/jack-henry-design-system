// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The toast controller component manages multiple toasts. Toasts can be generated and appended to the controller either by a DOM based method or an event based method.
 *
 * [Toast Controller Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-toast-controller--docs)
 *
 * @cssprop --jh-toast-controller-z-index - The toast controller z-index. Defaults to `--jh-z-index-positive-1000`.
 * @slot default - Use to insert `<jh-toast>` components if appending toasts manually.
 * @event jh-dismiss - Dispatched when the toast controller dismisses the oldest toast, and when toasts are dismissed manually by the user.
 *
 * @customElement jh-toast-controller
 */
export class JhToastController extends LitElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        maxCount: {
            type: NumberConstructor;
            attribute: string;
        };
        role: {
            type: StringConstructor;
        };
    };
    /**
     * Sets the maximum number of toasts to be displayed at a time.
     * @attr max-count
     * @type {number}
     */
    maxCount: number;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { LitElement } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'jh-toast-controller': JhToastController;
  }
}
