// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Radio groups contain sets of radios from which only one option can be selected.
 *
 * [Radio Group Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-radio-group--docs)
 *
 * @cssprop --jh-radio-group-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-radio-group-required-color-text - The required indicator color.
 * Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-radio-group-required-color-text-optional - The optional indicator text color.
 * Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-radio-group-helper-color-text - The helper-text text color.
 * Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-radio-group-error-color-text - The error-text text color.
 * Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-radio-group-opacity-disabled - The opacity of the radio group when disabled. Defaults to `--jh-opacity-disabled`.
 *
 * @slot default - Use to insert `<jh-radio>` components(s).
 *
 * @event jh-change - Dispatched when the value of the radio group has changed. Event payload includes the `value` and can be accessed via `e.detail.state.value`.
 *
 * @customElement jh-radio-group
 */
export class JhRadioGroup extends JhElement {
    static get formAssociated(): boolean;
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
        name: {
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
        value: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    /**
     * Sets an `aria-label` to assist screen reader users when no visible label is present.
     * @attr accessible-label
     * @type {string | null}
     */
    accessibleLabel: string | null;
    /**
     * Disables the radio group and prevents all user interactions. May cause the group to be ignored by assistive technologies (AT).
     * @type {boolean}
     */
    disabled: boolean;
    /**
     * Text to be displayed when radio group has failed validation and `invalid` is true.
     * @attr error-text
     * @type {string | null}
     */
    errorText: string | null;
    /**
     * Provides additional context or guidance for using the radio group. For `helper-text` to be displayed, the `label` property must also be set.
     * @attr helper-text
     * @type {string | null}
     */
    helperText: string | null;
    /**
     * Sets an `aria-invalid` on the radio group to indicate the value supplied was invalid and displays `error-text` when set.
     * @type {boolean}
     */
    invalid: boolean;
    /**
     * Describes the type of data to be collected.
     * @type {string | null}
     */
    label: string | null;
    /**
     * Sets the name of the radio group data when submitted in a form.
     * @type {string | null}
     */
    name: string | null;
    /**
     * Indicates a value is required.
     * @type {boolean}
     */
    required: boolean;
    /**
     * Determines the orientation of the radio group.
     * @type { 'vertical' | 'horizontal' }
     */
    orientation: "vertical" | "horizontal";
    /**
     * Adds a visual indicator next to the label. Indicates that a value is optional (by default) or required if the `required` property is also set. For the indicator to be displayed, the `label` property must also be set.
     * @attr show-indicator
     * @type {boolean}
     */
    showIndicator: boolean;
    /** @param {string | null} newValue */
    set value(newValue: string | null);
    /**
     * Sets the value of the radio group.
     * @type {string | null}
     */
    get value(): string | null;
    /** @protected */
    protected firstUpdated(): void;
    /**
     * Returns the radio group's parent form element.
     * @type {HTMLFormElement | null}
     */
    get form(): HTMLFormElement | null;
    /** @type {ValidityState} */
    get validity(): ValidityState;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-radio-group': JhRadioGroup;
  }
}
