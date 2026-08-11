// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Checkbox groups contain sets of checkboxes where several options can be selected.
 *
 * [Checkbox Group Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-checkbox-group--docs)
 *
 * @cssprop --jh-checkbox-group-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-checkbox-group-opacity-disabled - The opacity of the checkbox group when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-checkbox-group-required-color-text - The required indicator color.
 * Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-checkbox-group-required-color-text-optional - The optional indicator text color.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-checkbox-group-helper-color-text - The helper-text text color.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-checkbox-group-error-color-text - The error-text text color.
 * Defaults to `--jh-color-content-negative-enabled`.
 *
 * @slot default - Use to insert `<jh-checkbox>` component(s).
 *
 * @customElement jh-checkbox-group
 */
export class JhCheckboxGroup extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        accessibleLabel: {
            type: StringConstructor;
            attribute: string;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        errorText: {
            type: StringConstructor;
            attribute: string;
        };
        helperText: {
            type: StringConstructor;
            attribute: string;
        };
        invalid: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        label: {
            type: StringConstructor;
        };
        required: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        orientation: {
            type: StringConstructor;
            reflect: boolean;
        };
        showIndicator: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    /**
     * Disables the checkbox group and prevents all user interactions. May cause the group to be ignored by assistive technologies (AT).
     * @type {boolean}
     */
    disabled: boolean;
    /**
     * Sets an `aria-label` to assist screen reader users when no visible label is present.
     * @attr accessible-label
     * @type {string | null}
     */
    accessibleLabel: string | null;
    /**
     * Text to be displayed when checkbox group has failed validation and `invalid` is true.
     * @attr error-text
     * @type {string | null}
     */
    errorText: string | null;
    /**
     * Provides additional context or guidance for using the checkbox group. For `helper-text` to be displayed, the `label` property must also be set.
     * @attr helper-text
     * @type {string | null}
     */
    helperText: string | null;
    /**
     * Sets an `aria-invalid` on the checkbox group to indicate the value supplied was invalid and displays `error-text` when set.
     * @type {boolean}
     */
    invalid: boolean;
    /**
     * Describes the type of data to be collected.
     * @type {string | null}
     */
    label: string | null;
    /**
     * Indicates a value is required.
     * @type {boolean}
     */
    required: boolean;
    /**
     * Determines the orientation of the checkbox group.
     * @type { 'vertical' | 'horizontal' }
     */
    orientation: "vertical" | "horizontal";
    /**
     * Adds a visual indicator next to the label. Indicates that a value is optional (by default) or required if the `required` property is also set. For the indicator to be displayed, the `label` property must also be set.
     * @attr show-indicator
     * @type {boolean}
     */
    showIndicator: boolean;
    /** @protected */
    protected firstUpdated(): void;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-checkbox-group': JhCheckboxGroup;
  }
}
