// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The input component offers a single-line text field for collecting user data.
 *
 * [Input Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-input--docs)
 *
 * @cssprop --jh-input-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-input-field-color-background - The input field background-color when in an editable state. This property does not apply when the component is set to `readonly`. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-input-field-color-border-enabled - The input field border-color. Defaults to `--jh-border-control-color`.
 * @cssprop --jh-input-field-border-radius - The input field border radius. Defaults to `--jh-border-radius-100`.
 * @cssprop --jh-input-color-focus - The input field outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-input-field-color-border-focus - The input field border-color when in focus. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-input-field-color-border-hover - The input field border-color when hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-input-field-color-border-active - The input field border-color when active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-input-field-color-border-disabled - The input field border-color when disabled. Defaults to `--jh-border-control-color`.
 * @cssprop --jh-input-opacity-disabled - The input opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-input-field-color-border-error - The input field border-color when invalid. Defaults to `--jh-border-error-color`.
 * @cssprop --jh-input-clear-border-radius - The clear button border radius. Defaults to `--jh-border-radius-100`.
 * @cssprop --jh-input-clear-color-background-enabled - The clear button background-color. Defaults to `transparent`.
 * @cssprop --jh-input-clear-color-border-enabled - The clear button border-color. Defaults to `transparent`.
 * @cssprop --jh-input-clear-icon-color-fill-enabled - The clear button icon fill color. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-input-clear-color-background-focus - The clear button background-color when in focus. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-input-clear-color-border-focus - The clear button border-color when in focus. Defaults to `transparent`.
 * @cssprop --jh-input-clear-color-focus - The clear button outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-input-clear-icon-color-fill-focus - The clear button icon fill color when in focus. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-input-clear-color-background-hover - The clear button background-color when hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-input-clear-color-border-hover - The clear button border-color when hovered. Defaults to `transparent`.
 * @cssprop --jh-input-clear-icon-color-fill-hover - The clear button icon fill color when hovered. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-input-clear-color-background-active - The clear button background-color when active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-input-clear-color-border-active - The clear button border-color when active. Defaults to `transparent`.
 * @cssprop --jh-input-clear-icon-color-fill-active - The clear button icon fill color when active. Defaults to `--jh-color-content-on-brand-active`.
 * @cssprop --jh-input-required-color-text - The required indicator color. Defaults to `jh-color-content-negative-enabled`.
 * @cssprop --jh-input-optional-color-text - The optional indicator text color. Defaults to `jh-color-content-primary-enabled`.
 * @cssprop --jh-input-helper-color-text - The helper-text text color. Defaults to `jh-color-content-secondary-enabled`.
 * @cssprop --jh-input-counter-color-text - The character counter text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-input-value-color-text - The value text color. Defaults to `jh-color-content-primary-enabled`.
 * @cssprop --jh-input-error-color-text - The error message text color. Defaults to `jh-color-content-negative-enabled`.
 *
 * @event jh-select - Dispatched when text is selected. Event payload contains the selected text, the starting index of the selection, and the ending index of the selection. These values can be accessed via `e.detail.state.selected`, `e.detail.state.selectionStart`, and `e.detail.state.selectionEnd`.
 * @event jh-change - Dispatched when the value of the input has changed and input loses focus. Event payload includes the value of the input and can be accessed via `e.detail.state.value`. Payload also includes the raw/unformatted value when an input mask is applied and can be accessed via `e.detail.state.rawValue`. Payload also includes the `maxlength` and `minlength` values and can be accessed via `e.detail.reference.maxlength` and `e.detail.reference.minlength` as well as the `pattern` value and can be accessed via `e.detail.reference.pattern`.
 * @event jh-input - Dispatched when the value of the input has changed. Event payload includes the value of the input and can be accessed via `e.detail.state.value`. Payload also includes the raw/unformatted value when an input mask is applied and can be accessed via `e.detail.state.rawValue`. Payload also includes the `maxlength` and `minlength` values and can be accessed via `e.detail.reference.maxlength` and `e.detail.reference.minlength` as well as the `pattern` value and can be accessed via `e.detail.reference.pattern`.
 * @event jh-maxlength - Dispatched when the `maxlength` property is set and it's value is reached. Event payload includes the `maxlength` value and can be accessed via `e.detail.reference.maxlength`.
 * @event jh-input:clear-button-click - Dispatched when the clear button is activated. Event payload contains the previous value of the input field before it was cleared and can be accessed via `e.detail.state.previousValue`. Payload also contains the method used to activate the clear button (mouse or keyboard) and can be accessed via `e.detail.reference.clearMethod`.
 *
 * @slot jh-input-left - Use to insert an element on the left side of the input field, such as an icon or button.
 * @slot jh-input-right - Use to insert an element on the right side of the input field, such as an icon or button.
 * @slot jh-input-clear-button - Use to insert an icon within the clear button.
 *
 * @customElement jh-input
 */
export class JhInput extends JhElement {
    static get formAssociated(): boolean;
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        accessibleLabel: {
            type: StringConstructor;
            attribute: string;
        };
        accessibleLabelClearButton: {
            type: StringConstructor;
            attribute: string;
        };
        autocomplete: {
            type: StringConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        enterkeyhint: {
            type: StringConstructor;
        };
        errorText: {
            type: StringConstructor;
            attribute: string;
        };
        helperText: {
            type: StringConstructor;
            attribute: string;
        };
        hideLeftSlot: {
            type: BooleanConstructor;
            attribute: string;
        };
        hideRightSlot: {
            type: BooleanConstructor;
            attribute: string;
        };
        inputMask: {
            type: StringConstructor;
            attribute: string;
        };
        inputmode: {
            type: StringConstructor;
        };
        invalid: {
            type: BooleanConstructor;
        };
        label: {
            type: StringConstructor;
        };
        maxlength: {
            type: NumberConstructor;
        };
        minlength: {
            type: NumberConstructor;
        };
        name: {
            type: StringConstructor;
        };
        pattern: {
            type: StringConstructor;
        };
        readonly: {
            type: BooleanConstructor;
        };
        required: {
            type: BooleanConstructor;
        };
        showCharCount: {
            type: BooleanConstructor;
            attribute: string;
        };
        showClearButton: {
            type: BooleanConstructor;
            attribute: string;
        };
        showIndicator: {
            type: BooleanConstructor;
            attribute: string;
        };
        size: {
            type: StringConstructor;
            reflect: boolean;
        };
        value: {
            type: StringConstructor;
        };
    };
    /**
     * Sets an `aria-label` on the input field to assist screen reader users when no visible label is present.
     * @attr accessible-label
     * @type {string | null}
     */
    accessibleLabel: string | null;
    /**
     * Sets an aria-label on the clear button to assist screen reader users. Indicates that activating the button will clear the input field.
     * @attr accessible-label-clear-button
     * @type {string | null}
     */
    accessibleLabelClearButton: string | null;
    /**
     * Determines whether the browser can provide assistance in filling out the input value and what type of information is expected.
     * This property will override any autocomplete attribute present on the input's parent form element.
     *
     * [Visit MDN for information on supported autocomplete values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
     * @type {string | null}
     */
    autocomplete: string | null;
    /**
     * Disables the input and prevents all user interactions. May cause the input to be ignored by assistive technologies (AT).
     * @type {boolean}
     */
    disabled: boolean;
    /**
     * Specifies which action label or icon to present for the enter key on virtual keyboards.
     *
     * [Visit MDN for information on supported enterkeyhint values](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint)
     * @type {string | null}
     */
    enterkeyhint: string | null;
    /**
     * Text to be displayed when input has failed validation and `invalid` is true.
     * @attr error-text
     * @type {string | null}
     */
    errorText: string | null;
    /**
     * Provides additional context or guidance for using the input. For `helper-text` to be displayed, the `label` property must also be set.
     * @attr helper-text
     * @type {string | null}
     */
    helperText: string | null;
    /**
     * Hides the left slot from input.
     * @attr hide-left-slot
     * @type {boolean}
     */
    hideLeftSlot: boolean;
    /**
     * Hides the right slot from input.
     * @attr hide-right-slot
     * @type {boolean}
     */
    hideRightSlot: boolean;
    /**
     * Formats user entered data on input based on fixed lengths. This property does not support dynamic formatting or pasted values. See the input mask documentation above for implementation details.
     * @attr input-mask
     * @type {string | null}
     */
    inputMask: string | null;
    /**
     * Indicates expected input value type and allows for browsers to display appropriate virtual keyboard.
     *
     * [Visit MDN for information on supported inputmode values](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
     * @type {string | null}
     */
    inputmode: string | null;
    /**
     * Sets an `aria-invalid` attribute on input to indicate the value supplied was invalid. Also displays `error-text` and error state styling when set.
     * @type {boolean}
     */
    invalid: boolean;
    /**
     * Identifies what data should be entered into the input field.
     * @type {string | null}
     */
    label: string | null;
    /**
     * Sets the maximum number of characters a user can enter into the field.
     * @type {number | null}
     */
    maxlength: number | null;
    /**
     * Sets the minimum number of characters a user can enter into the field.
     * @type {number | null}
     */
    minlength: number | null;
    /**
     * Sets a name for the input control.
     * @type {string | null}
     */
    name: string | null;
    /**
     * Sets the pattern attribute on the input field.
     * @type {string | null}
     */
    pattern: string | null;
    /**
     * Prevents users from changing the input value. Removes all slotted content.
     * @type {boolean}
     */
    readonly: boolean;
    /**
     * Indicates a value is required.
     * @type {boolean}
     */
    required: boolean;
    /**
     * Displays a character counter at the bottom right corner below the input field.
     * @attr show-char-count
     * @type {boolean}
     */
    showCharCount: boolean;
    /**
     * Displays a clear button in the input field when it contains a value and is focused or hovered. Deletes input value when activated.
     * @attr show-clear-button
     * @type {boolean}
     */
    showClearButton: boolean;
    /**
     * Adds a visual indicator next to the label. Indicates that a value is optional(by default) or required if the `required` property is also set.
     * @attr show-indicator
     * @type {boolean}
     */
    showIndicator: boolean;
    /**
     * Sets the size of the input.
     * @type { 'small' | 'medium' | 'large' }
     */
    size: "small" | "medium" | "large";
    /** @param {string | null} newValue */
    set value(newValue: string | null);
    /**
     * Sets the value of the input.
     * @type {string | null}
     */
    get value(): string | null;
    /** @protected */
    protected firstUpdated(): void;
    /** @type {HTMLFormElement | null} */
    get form(): HTMLFormElement | null;
    /**
     * @protected
     * @param {InputEvent} e
     */
    protected _handleInput(e: InputEvent): void;
    /**
     * @protected
     * @param {KeyboardEvent} e
     */
    protected _handleKeydown(e: KeyboardEvent): void;
    /** @protected */
    protected _handleChange(): void;
    /**
     * @protected
     * @param {Event} e
     */
    protected _handleSelect(e: Event): void;
    /** @protected */
    protected _handleMaxlength(): void;
    /**
     * @protected
     * @param {PointerEvent} e
     */
    protected _handleClearButtonClick(e: PointerEvent): void;
    /**
     * @protected
     * @param {Event} e
     */
    protected _handleSlotChange(e: Event): void;
    /** @protected */
    protected renderLeftSlot(): import("lit").TemplateResult<1>;
    /** @protected */
    protected renderRightSlot(): import("lit").TemplateResult<1>;
    /** @protected */
    protected renderClearButton(): import("lit").TemplateResult<1>;
    /**
     * @protected
     * @returns {string}
     */
    protected _getDescribedby(): string;
    /** @protected */
    protected renderLabel(): import("lit").TemplateResult<1>;
    /** @protected */
    protected renderFooter(): import("lit").TemplateResult<1>;
    /** @protected */
    protected renderInput(): import("lit").TemplateResult<1>;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-input': JhInput;
  }
}
