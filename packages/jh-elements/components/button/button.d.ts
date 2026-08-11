// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Buttons enable a user to initiate a specific action.
 *
 * [Button Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-button--docs)
 *
 * @cssprop --jh-button-color-background-primary-enabled - The button container background-color when enabled and `appearance="primary"`. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-button-color-border-primary-enabled - The button container border-color when enabled and `appearance="primary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-primary-focus - The button container background-color when in focus and `appearance="primary"`. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-button-color-border-primary-focus - The button container border-color when in focus and `appearance="primary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-primary-hover - The button container background-color when hovered and `appearance="primary"`. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-button-color-border-primary-hover - The button container border-color when hovered and `appearance="primary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-primary-active - The button container background-color when active and `appearance="primary"`. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-button-color-border-primary-active - The button container border-color when active and `appearance="primary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-primary-disabled - The button container background-color when disabled and `appearance="primary"`. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-button-color-border-primary-disabled - The button container border-color when disabled and `appearance="primary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-primary-pending - The button container background-color when pending and `appearance="primary"`. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-button-color-border-primary-pending - The button container border-color when pending and `appearance="primary"`. Defaults to `transparent`.
 * @cssprop --jh-button-label-color-text-primary-enabled - The label text color when enabled and `appearance="primary"`. Defaults to `--jh-color-content-on-brand-enabled`.
 * @cssprop --jh-button-label-color-text-primary-focus - The label text color when in focus and `appearance="primary"`. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-button-label-color-text-primary-hover - The label text color when hovered and `appearance="primary"`. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-button-label-color-text-primary-active - The label text color when active and `appearance="primary"`. Defaults to `--jh-color-content-on-brand-active`.
 * @cssprop --jh-button-label-color-text-primary-disabled - The label text color when disabled and `appearance="primary"`. Defaults to `--jh-color-content-on-brand-enabled`.
 * @cssprop --jh-button-icon-color-fill-primary-enabled - The icon color when enabled and `appearance="primary"`. Defaults to `--jh-color-content-on-brand-enabled`.
 * @cssprop --jh-button-icon-color-fill-primary-focus - The icon color when in focus and `appearance="primary"`. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-button-icon-color-fill-primary-hover - The icon color when hovered and `appearance="primary"`. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-button-icon-color-fill-primary-active - The icon color when active and `appearance="primary"`. Defaults to `--jh-color-content-on-brand-active`.
 * @cssprop --jh-button-icon-color-fill-primary-disabled - The icon color when disabled and `appearance="primary"`. Defaults to `--jh-color-content-on-brand-enabled`.
 * @cssprop --jh-button-progress-color-border-primary-pending - The progress indicator border-color when `appearance="primary"`. Defaults to `--jh-color-content-on-brand-enabled`.
 * @cssprop --jh-button-color-background-secondary-enabled - The button container background-color when enabled and `appearance="secondary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-border-secondary-enabled - The button container border-color when enabled and `appearance="secondary"`. Defaults to `--jh-border-action-color`.
 * @cssprop --jh-button-color-background-secondary-focus - The button container background-color when in focus and `appearance="secondary"`. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-button-color-border-secondary-focus - The button container border-color when in focus and `appearance="secondary"`. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-button-color-background-secondary-hover - The button container background-color when hovered and `appearance="secondary"`. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-button-color-border-secondary-hover - The button container border-color when hovered and `appearance="secondary"`. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-button-color-background-secondary-active - The button container background-color when active and `appearance="secondary"`. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-button-color-border-secondary-active - The button container border-color when active and `appearance="secondary"`. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-button-color-background-secondary-disabled - The button container background-color when disabled and `appearance="secondary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-border-secondary-disabled - The button container border-color when disabled and `appearance="secondary"`. Defaults to `--jh-border-action-color`.
 * @cssprop --jh-button-color-background-secondary-pending - The button container background-color when pending and `appearance="secondary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-border-secondary-pending - The button container border-color when pending and `appearance="secondary"`. Defaults to `--jh-border-action-color`.
 * @cssprop --jh-button-label-color-text-secondary-enabled - The label text color when enabled and `appearance="secondary"`. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-button-label-color-text-secondary-focus - The label text color when in focus and `appearance="secondary"`. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-button-label-color-text-secondary-hover - The label text color when hovered and `appearance="secondary"`. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-button-label-color-text-secondary-active - The label text color when active and `appearance="secondary"`. Defaults to `--jh-color-content-on-brand-active`.
 * @cssprop --jh-button-label-color-text-secondary-disabled - The label text color when disabled and `appearance="secondary"`. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-button-icon-color-fill-secondary-enabled - The icon color when enabled and `appearance="secondary"`. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-button-icon-color-fill-secondary-focus - The icon color when in focus and `appearance="secondary"`. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-button-icon-color-fill-secondary-hover - The icon color when hovered and `appearance="secondary"`. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-button-icon-color-fill-secondary-active - The icon color when active and `appearance="secondary"`. Defaults to `--jh-color-content-on-brand-active`.
 * @cssprop --jh-button-icon-color-fill-secondary-disabled - The icon color when disabled and `appearance="secondary"`. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-button-progress-color-border-secondary-pending - The progress indicator border-color when `appearance="secondary"`. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-button-color-background-tertiary-enabled - The button container background-color when enabled and `appearance="tertiary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-border-tertiary-enabled - The button container border-color when enabled and `appearance="tertiary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-tertiary-focus - The button container background-color when in focus and `appearance="tertiary"`. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-button-color-border-tertiary-focus - The button container border-color when in focus and `appearance="tertiary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-tertiary-hover - The button container background-color when hovered and `appearance="tertiary"`. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-button-color-border-tertiary-hover - The button container border-color when hovered and `appearance="tertiary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-tertiary-active - The button container background-color when active and `appearance="tertiary"`. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-button-color-border-tertiary-active - The button container border-color when active and `appearance="tertiary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-tertiary-disabled - The button container background-color when disabled and `appearance="tertiary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-border-tertiary-disabled - The button container border-color when disabled and `appearance="tertiary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-tertiary-pending - The button container background-color when pending and `appearance="tertiary"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-border-tertiary-pending - The button container border-color when pending and `appearance="tertiary"`. Defaults to `transparent`.
 * @cssprop --jh-button-label-color-text-tertiary-enabled - The label text color when enabled and `appearance="tertiary"`. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-button-label-color-text-tertiary-focus - The label text color when in focus and `appearance="tertiary"`. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-button-label-color-text-tertiary-hover - The label text color when hovered and `appearance="tertiary"`. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-button-label-color-text-tertiary-active - The label text color when active and `appearance="tertiary"`. Defaults to `--jh-color-content-on-brand-active`.
 * @cssprop --jh-button-label-color-text-tertiary-disabled - The label text color when disabled and `appearance="tertiary"`. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-button-icon-color-fill-tertiary-enabled - The icon color when enabled and `appearance="tertiary"`. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-button-icon-color-fill-tertiary-focus - The icon color when in focus and `appearance="tertiary"`. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-button-icon-color-fill-tertiary-hover - The icon color when hovered and `appearance="tertiary"`. Defaults to `--jh-color-content-on-brand-hover`.
 * @cssprop --jh-button-icon-color-fill-tertiary-active - The icon color when active and `appearance="tertiary"`. Defaults to `--jh-color-content-on-brand-active`.
 * @cssprop --jh-button-icon-color-fill-tertiary-disabled - The icon color when disabled and `appearance="tertiary"`. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-button-progress-color-border-tertiary-pending - The progress indicator border-color when `appearance="tertiary"`. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-button-color-background-danger-enabled - The button container background-color when enabled and `appearance="danger"`. Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-button-color-border-danger-enabled - The button container border-color when enabled and `appearance="danger"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-danger-focus - The button container background-color when in focus and `appearance="danger"`. Defaults to `--jh-color-content-negative-hover`.
 * @cssprop --jh-button-color-border-danger-focus - The button container border-color when in focus and `appearance="danger"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-danger-hover - The button container background-color when hovered and `appearance="danger"`. Defaults to `--jh-color-content-negative-hover`.
 * @cssprop --jh-button-color-border-danger-hover - The button container border-color when hovered and `appearance="danger"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-danger-active - The button container background-color when active and `appearance="danger"`. Defaults to `--jh-color-content-negative-active`.
 * @cssprop --jh-button-color-border-danger-active - The button container border-color when active and `appearance="danger"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-danger-disabled - The button container background-color when disabled and `appearance="danger"`. Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-button-color-border-danger-disabled - The button container border-color when disabled and `appearance="danger"`. Defaults to `transparent`.
 * @cssprop --jh-button-color-background-danger-pending - The button container background-color when pending and `appearance="danger"`. Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-button-color-border-danger-pending - The button container border-color when pending and `appearance="danger"`. Defaults to `transparent`.
 * @cssprop --jh-button-label-color-text-danger-enabled - The label text color when enabled and `appearance="danger"`. Defaults to `--jh-color-content-on-negative-enabled`.
 * @cssprop --jh-button-label-color-text-danger-focus - The label text color when in focus and `appearance="danger"`. Defaults to `--jh-color-content-on-negative-hover`.
 * @cssprop --jh-button-label-color-text-danger-hover - The label text color when hovered and `appearance="danger"`. Defaults to `--jh-color-content-on-negative-hover`.
 * @cssprop --jh-button-label-color-text-danger-active - The label text color when active and `appearance="danger"`. Defaults to `--jh-color-content-on-negative-active`.
 * @cssprop --jh-button-label-color-text-danger-disabled - The label text color when disabled and `appearance="danger"`. Defaults to `--jh-color-content-on-negative-enabled`.
 * @cssprop --jh-button-icon-color-fill-danger-enabled - The icon color when enabled and `appearance="danger"`. Defaults to `--jh-color-content-on-negative-enabled`.
 * @cssprop --jh-button-icon-color-fill-danger-focus - The icon color when in focus and `appearance="danger"`. Defaults to `--jh-color-content-on-negative-hover`.
 * @cssprop --jh-button-icon-color-fill-danger-hover - The icon color when hovered and `appearance="danger"`. Defaults to `--jh-color-content-on-negative-hover`.
 * @cssprop --jh-button-icon-color-fill-danger-active - The icon color when active and `appearance="danger"`. Defaults to `--jh-color-content-on-negative-active`.
 * @cssprop --jh-button-icon-color-fill-danger-disabled - The icon color when disabled and `appearance="danger"`. Defaults to `--jh-color-content-on-negative-enabled`.
 * @cssprop --jh-button-progress-color-border-danger-pending - The progress indicator border-color when `appearance="danger"`. Defaults to `--jh-color-content-on-negative-enabled`.
 * @cssprop --jh-button-border-radius - The button container border-radius. Defaults to `--jh-border-radius-100`.
 * @cssprop --jh-button-opacity-disabled - The button container opacity when disabled. Defaults to `--jh-opacity-disabled`.
 * @cssprop --jh-button-color-focus - The button container outline when it receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * @cssprop --jh-button-size - The button width of single icon buttons, and the button height. Button width and height defaults to `--jh-dimension-600` when `size="x-small"`,`--jh-dimension-800` when `size="small"`, `--jh-dimension-1000` when `size="medium"`, and `--jh-dimension-1200` when `size="large"`.
 *
 * @slot jh-button-icon-left - Use to insert an icon on the left side of the button and for single icon buttons.
 * @slot jh-button-icon-right - Use to insert an icon on the right side of the button and for single icon buttons.
 * @customElement jh-button
 */
export class JhButton extends JhElement {
    static get formAssociated(): boolean;
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
        appearance: {
            type: StringConstructor;
            reflect: boolean;
        };
        block: {
            type: BooleanConstructor;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        href: {
            type: StringConstructor;
        };
        pending: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        label: {
            type: StringConstructor;
        };
        name: {
            type: StringConstructor;
        };
        size: {
            type: StringConstructor;
            reflect: boolean;
        };
        submit: {
            type: BooleanConstructor;
        };
        target: {
            type: StringConstructor;
        };
        value: {
            type: StringConstructor;
        };
        _hasLeftSlotContent: {
            type: BooleanConstructor;
            state: boolean;
        };
        _hasRightSlotContent: {
            type: BooleanConstructor;
            state: boolean;
        };
    };
    /**
     * Sets an `aria-disabled` to signify to screen readers that the disabled button should remain perceivable while disabled.
     * @attr accessible-disabled
     * @type { 'true' | 'false' | null}
     */
    accessibleDisabled: "true" | "false" | null;
    /**
     * Sets an `aria-label` to assist screen reader users when no visible label is present.
     * @attr accessible-label
     * @type {string | null}
     */
    accessibleLabel: string | null;
    /**
     * Determines the button color.
     * @type { 'primary' | 'secondary' | 'tertiary' | 'danger' }
     */
    appearance: "primary" | "secondary" | "tertiary" | "danger";
    /**
     * Sets the button width to its parent container.
     * @type {boolean}
     */
    block: boolean;
    /**
     * Disables the button and prevents all user interactions. May cause button to be ignored by assistive technologies(AT). See `accessible-disabled` attribute if the button should remain perceivable to AT.
     * @type {boolean}
     */
    disabled: boolean;
    /**
     * Sets the link's destination.
     * @type {string | null}
     */
    href: string | null;
    /**
     * Displays a progress indicator.
     * @type {boolean}
     */
    pending: boolean;
    /**
     * Describes the intent of the button.
     * @type {string | null}
     */
    label: string | null;
    /**
     * Sets the name of the button data when submitted in a form.
     * @type {string | null}
     */
    name: string | null;
    /**
     * Sets the size of the button.
     * @type { 'x-small' | 'small' | 'medium' | 'large' }
     */
    size: "x-small" | "small" | "medium" | "large";
    /**
     * Sets button `type='submit'`. Button defaults to `type='button'`.
     * @type {boolean}
     */
    submit: boolean;
    /**
     * Specifies where to display the linked URL set by the `href` property.
     * @type { '_blank' | '_self' | '_parent' | '_top' | null }
     */
    target: "_blank" | "_self" | "_parent" | "_top" | null;
    /**
    * @param {string | null} newValue
    */
    set value(newValue: string | null);
    /**
     * Sets the value of the button.
     * @type {string | null}
     */
    get value(): string | null;
    /**
     * @internal
     * @type {boolean}
     * */
    _hasLeftSlotContent: boolean;
    /**
     * @internal
     * @type {boolean}
     * */
    _hasRightSlotContent: boolean;
    /** @protected */
    protected firstUpdated(): void;
    /** @param {boolean} disabled */
    formDisabledCallback(disabled: boolean): void;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-button': JhButton;
  }
}
