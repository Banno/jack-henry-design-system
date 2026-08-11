// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Radio buttons, typically presented in radio groups, allow users to select only one option amongst a group of options.
 *
 * [Radio Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-radio--docs)
 *
 * @cssprop --jh-radio-opacity-disabled - The radio opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-radio-input-border-radius - The radio and status mark border-radius.
 * Defaults to `--jh-border-radius-circle`.
 * @cssprop --jh-radio-color-focus - The radio outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-radio-helper-color-text - The helper-text text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-radio-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-radio-input-color-background-unselected-enabled - The radio background-color when unselected.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-enabled - The radio border-color when unselected.
 * Defaults to `--jh-border-control-color`.
 * @cssprop --jh-radio-input-color-background-unselected-focus - The radio background-color when unselected and focused. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-focus - The radio border-color when unselected and focused.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-input-color-background-unselected-hover - The radio background-color when unselected and hovered.
 *  Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-hover - The radio border-color when unselected and hovered.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-input-color-background-unselected-active - The radio background-color when unselected and active.
 *  Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-active - The radio border-color when unselected and active.
 * Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-radio-input-color-background-unselected-disabled - The radio background-color when unselected and disabled.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-unselected-disabled - The radio border-color when unselected and disabled.
 * Defaults to `--jh-border-control-color`.
 * @cssprop --jh-radio-input-color-background-selected-enabled - The radio background-color when selected.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-enabled - The radio border-color when selected.
 * Defaults to `--jh-border-control-color`.
 * @cssprop --jh-radio-status-color-background-selected-enabled- The status mark color when selected.
 * Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-radio-input-color-background-selected-focus - The radio background-color when selected and focused. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-focus - The radio border-color when selected and focused.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-status-color-background-selected-focus - The status mark color when selected and focused.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-input-color-background-selected-hover - The radio background-color when selected and hovered. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-hover - The radio border-color when selected and hovered.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-status-color-background-selected-hover - The status mark color when selected and hovered.
 * Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-radio-input-color-background-selected-active - The background-color when selected and active.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-active - The border-color when selected and active.
 * Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-radio-status-color-background-selected-active - The status mark color when selected and active.
 * Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-radio-input-color-background-selected-disabled - The background-color when selected and disabled.
 * Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-radio-input-color-border-selected-disabled - The border-color when selected and disabled.
 * Defaults to `--jh-border-control-color`.
 * @cssprop --jh-radio-status-color-background-selected-disabled - The status mark color when selected and disabled. Defaults to `--jh-color-content-brand-enabled`.
 *
 * @event jh-change - Dispatched when the state of the radio has changed. Event payload includes the value of the radio and can be accessed via `e.detail.state.value`.
 *
 * @customElement jh-radio */
export class JhRadio extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        accessibleLabel: {
            type: StringConstructor;
            attribute: string;
        };
        checked: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        helperText: {
            type: StringConstructor;
            attribute: string;
        };
        label: {
            type: StringConstructor;
        };
        value: {
            type: StringConstructor;
        };
    };
    /**
     * Sets an `aria-label` to assist screen reader users when no visible label is present.
     * @attr accessible-label
     * @type {string | null}
     */
    accessibleLabel: string | null;
    /**
     * Sets the selected or 'checked' state on the radio.
     * @type {boolean}
     */
    checked: boolean;
    /**
     * Disables the radio and prevents all user interactions. May cause radio to be ignored by assistive technologies(AT).
     * @type {boolean}
     */
    disabled: boolean;
    /**
     * Provides additional context or guidance for using the radio. For `helper-text` to be displayed, the `label` property must also be set.
     * @attr helper-text
     * @type {string | null}
     */
    helperText: string | null;
    /**
     * Sets the value of the data to be collected when selected.
     * @type {string | null}
     */
    label: string | null;
    /**
     * Sets the value of the radio.
     * @type {string | null}
     */
    value: string | null;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-radio': JhRadio;
  }
}
