// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * A switch or toggle button is used to make an on/off selection that takes effect immediately on the page. It is not meant to be used in forms.
 *
 * [Switch Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-switch--docs)
 *
 * @cssprop --jh-switch-opacity-disabled - The switch opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-switch-thumb-color-background - The thumb background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-switch-color-focus - The switch outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-switch-helper-color-text - The helper-text text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-switch-label-color-text - The label text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-switch-track-color-background-unselected-enabled - The track color when unselected. Defaults to `--jh-color-control-enabled`.
 * @cssprop --jh-switch-track-color-background-unselected-focus - The track color when unselected and focused. Defaults to `--jh-color-control-hover`.
 * @cssprop --jh-switch-track-color-background-unselected-hover - The track color when unselected and hovered. Defaults to `--jh-color-control-hover`.
 * @cssprop --jh-switch-track-color-background-unselected-active - The track color when unselected and active. Defaults to `--jh-color-control-active`.
 * @cssprop --jh-switch-track-color-background-unselected-disabled - The track color when unselected and disabled. Defaults to `--jh-color-control-enabled`.
 * @cssprop --jh-switch-track-color-background-selected-enabled - The track color when selected. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-switch-track-color-background-selected-focus - The track color when selected and focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-switch-track-color-background-selected-hover - The track color when selected and hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-switch-track-color-background-selected-active - The track color when selected and active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-switch-track-color-background-selected-disabled - The track color when selected and disabled. Defaults to `--jh-color-content-brand-enabled`.
 *
 * @event jh-change - Dispatched when the state of the switch has changed.
 *
 * @customElement jh-switch
 */
export class JhSwitch extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        accessibleDisabled: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
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
    };
    /**
     * Sets an `aria-disabled` to signify to screen readers that the disabled switch should remain perceivable while disabled.
     * @attr accessible-disabled
     * @type { 'true' | 'false' | null }
     */
    accessibleDisabled: "true" | "false" | null;
    /**
     * Sets an `aria-label` to assist screen reader users when no visible label is present.
     * @attr accessible-label
     * @type {string | null}
     */
    accessibleLabel: string | null;
    /**
     * Sets the selected or 'checked' state on the switch
     * @type {boolean}
     */
    checked: boolean;
    /**
     * Disables the switch and prevents all user interactions. May cause switch to be ignored by assistive technologies(AT). See `accessible-disabled` if switch should remain perceivable to AT.
     * @type {boolean}
     */
    disabled: boolean;
    /**
     * Provides additional context or guidance for using the switch. For `helper-text` to be displayed, the `label` property must also be set.
     * @attr helper-text
     * @type {string | null}
     */
    helperText: string | null;
    /**
     * Describes the intent of the switch.
     * @type {string | null}
     */
    label: string | null;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-switch': JhSwitch;
  }
}
