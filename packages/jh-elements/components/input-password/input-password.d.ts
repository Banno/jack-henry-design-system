// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The input password component provides a single-line text field that includes a toggle password button, allowing users to mask and unmask the input value.
 *
 * [Input Password Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-input-password--docs)
 *
 * @slot jh-input-password-hidden - Use to insert a custom icon within the toggle password button when the input value is masked.
 * @slot jh-input-password-visible - Use to insert a custom icon within the toggle password button when the input value is unmasked.
 *
 * @customElement jh-input-password
 */
export class JhInputPassword extends JhInput {
    static get properties(): {
        passwordVisible: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        accessibleLabelHidePassword: {
            type: StringConstructor;
            attribute: string;
        };
        accessibleLabelShowPassword: {
            type: StringConstructor;
            attribute: string;
        };
    };
    /**
     * Sets an `aria-label` on the toggle password button, which encapsulates the `jh-input-password-visible` slot, to assist screen reader users. The label should indicate that activating the button will mask the password.
     * @attr accessible-label-hide-password
     * @type {string | null}
     */
    accessibleLabelHidePassword: string | null;
    /**
     * Sets an `aria-label` on the toggle password button, which encapsulates the `jh-input-password-hidden` slot, to assist screen reader users. The label should indicate that activating the button will unmask the password.
     * @attr accessible-label-show-password
     * @type {string | null}
     */
    accessibleLabelShowPassword: string | null;
    /**
     * Unmasks the input field value when set.
     * @attr password-visible
     * @type {boolean}
     */
    passwordVisible: boolean;
    #private;
}
import { JhInput } from '../input/input.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-input-password': JhInputPassword;
  }
}
