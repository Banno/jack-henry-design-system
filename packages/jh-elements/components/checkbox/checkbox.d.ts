// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Checkboxes allow users to select one or more options from a group of options.
 *
 * [Checkbox Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-checkbox--docs)
 *
 * @cssprop --jh-checkbox-opacity-disabled - The checkbox opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-checkbox-input-border-radius - The checkbox border radius. Defaults to `--jh-border-radius-50`.
 * @cssprop --jh-checkbox-color-focus - The checkbox outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-checkbox-helper-color-text - The helper text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-checkbox-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-checkbox-input-color-background-unselected-enabled - The checkbox background-color when unselected. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-checkbox-input-color-border-unselected-enabled - The checkbox border-color when unselected. Defaults to `--jh-border-control-color`.
 * @cssprop --jh-checkbox-input-color-background-unselected-focus - The checkbox background-color when unselected and focused. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-checkbox-input-color-border-unselected-focus - The checkbox border-color when unselected and focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-input-color-background-unselected-hover - The checkbox background-color when unselected and hovered. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-checkbox-input-color-border-unselected-hover - The checkbox border-color when unselected and hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-input-color-background-unselected-active - The checkbox background-color when unselected and active. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-checkbox-input-color-border-unselected-active - The checkbox border-color when unselected and active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-checkbox-input-color-background-unselected-disabled - The  checkbox background-color when unselected and disabled. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-checkbox-input-color-border-unselected-disabled - The checkbox border-color when unselected and disabled. Defaults to `--jh-border-control-color`.
 * @cssprop --jh-checkbox-input-color-background-selected-enabled - The checkbox background-color when selected. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-input-color-border-selected-enabled - The checkbox border-color when selected. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-status-color-border-selected-enabled - The status mark color when selected. Defaults to `--jh-color-content-on-brand-enabled`.
 * @cssprop --jh-checkbox-input-color-background-selected-focus - The checkbox background-color when selected and focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-input-color-border-selected-focus - The checkbox border-color when selected and focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-status-color-border-selected-focus - The status mark color when selected and focused. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-checkbox-input-color-background-selected-hover - The checkbox background-color when selected and hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-input-color-border-selected-hover - The checkbox border-color when selected and hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-status-color-border-selected-hover - The status mark color when selected and hovered. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-checkbox-input-color-background-selected-active - The checkbox background-color when selected and active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-checkbox-input-color-border-selected-active - The checkbox border-color when selected and active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-checkbox-status-color-border-selected-active - The status mark color when selected and active. Defaults to `--jh-color-content-on-brand-active`.
 * @cssprop --jh-checkbox-input-color-background-selected-disabled - The checkbox background-color when selected and disabled. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-input-color-border-selected-disabled - The checkbox border-color when selected and disabled. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-status-color-border-selected-disabled - The status mark color when selected and disabled. Defaults to `--jh-color-content-on-brand-enabled`.
 * @cssprop --jh-checkbox-input-color-background-indeterminate-enabled - The checkbox background-color when indeterminate. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-input-color-border-indeterminate-enabled - The border-color when indeterminate checkbox. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-status-color-border-indeterminate-enabled - The status mark color when indeterminate. Defaults to `--jh-color-content-on-brand-enabled`.
 * @cssprop --jh-checkbox-input-color-background-indeterminate-focus - The checkbox background-color when indeterminate and focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-input-color-border-indeterminate-focus - The checkbox border-color when indeterminate and focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-status-color-border-indeterminate-focus - The checkbox color when indeterminate status mark when focused. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-checkbox-input-color-background-indeterminate-hover - The checkbox background-color when indeterminate and hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-input-color-border-indeterminate-hover - The checkbox border-color when indeterminate and hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-checkbox-status-color-border-indeterminate-hover - The checkbox color when indeterminate status mark when hovered. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-checkbox-input-color-background-indeterminate-active - The checkbox background-color when indeterminate and active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-checkbox-input-color-border-indeterminate-active - The checkbox border-color when indeterminate and active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-checkbox-status-color-border-indeterminate-active - The checkbox color when indeterminate status mark when active. Defaults to `--jh-color-content-on-brand-active`.
 * @cssprop --jh-checkbox-input-color-background-indeterminate-disabled - The checkbox background-color when indeterminate and disabled. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-input-color-border-indeterminate-disabled - The checkbox border-color when indeterminate and disabled. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-checkbox-status-color-border-indeterminate-disabled - The checkbox color when indeterminate status mark when disabled. Defaults to `--jh-color-content-on-brand-enabled`.
 *
 * @event jh-change - Dispatched when the state of the checkbox has changed. Event payload includes the `checked` state of the checkbox and can be accessed via `e.detail.state.checked`.
 *
 * @customElement jh-checkbox
 */
export class JhCheckbox extends JhElement {
    static get formAssociated(): boolean;
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        checked: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        indeterminate: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        label: {
            type: StringConstructor;
        };
        helperText: {
            type: StringConstructor;
            attribute: string;
        };
        name: {
            type: StringConstructor;
        };
        value: {
            type: StringConstructor;
        };
        accessibleLabel: {
            type: StringConstructor;
            attribute: string;
        };
    };
    /** @param {boolean} newValue */
    set checked(newValue: boolean);
    /**
     * Sets the selected or 'checked' state on the checkbox.
     * @type {boolean}
     */
    get checked(): boolean;
    /** @param {boolean} newValue */
    set indeterminate(newValue: boolean);
    /**
     * Sets the indeterminate state on the checkbox.
     * @type {boolean}
     */
    get indeterminate(): boolean;
    /**
     * Disables the checkbox and prevents all user interactions. May cause checkbox to be ignored by assistive technologies(AT).
     * @type {boolean}
     */
    disabled: boolean;
    /**
     * Sets the value of the data to be collected when selected.
     * @type {string | null}
     */
    label: string | null;
    /**
     * Provides additional context or guidance for using the checkbox. For `helper-text` to be displayed, the `label` property must also be set.
     * @attr helper-text
     * @type {string | null}
     */
    helperText: string | null;
    /**
     * Sets the name of the checkbox data when submitted in a form.
     * @type {string | null}
     */
    name: string | null;
    /** @param {string | null} newValue */
    set value(newValue: string | null);
    /**
     * Sets the value of the checkbox.
     * @type {string | null}
     */
    get value(): string | null;
    /**
     * Sets an `aria-label` to assist screen reader users when no visible label is present.
     * @attr accessible-label
     * @type {string | null}
     */
    accessibleLabel: string | null;
    /**
     * Returns the checkbox's parent form element.
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
    'jh-checkbox': JhCheckbox;
  }
}
