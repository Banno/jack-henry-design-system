// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * The notification component displays information to the user, and supports both alerts and banner type notifications.
 *
 * [Notification Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-notification--docs)
 *
 * @cssprop --jh-notification-border-radius-alert - The notification border-radius when `type="alert"`. Defaults to `--jh-border-radius-100`.
 * @cssprop --jh-notification-border-radius-banner - The notification border-radius when `type="banner"`. Defaults to `--jh-border-radius-0`.
 * @cssprop --jh-notification-color-background-neutral - The notification background color when `appearance="neutral"`. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-notification-color-background-positive - The notification background color when `appearance="positive"`. Defaults to `--jh-color-content-positive-enabled`.
 * @cssprop --jh-notification-color-background-negative - The notification background color when `appearance="negative"`. Defaults to `--jh-color-content-negative-enabled`.
 * @cssprop --jh-notification-color-text-neutral - The notification text color when `appearance="neutral"`. Defaults to `--jh-color-content-on-primary-enabled`.
 * @cssprop --jh-notification-color-text-positive - The notification text color when `appearance="positive"`. Defaults to `--jh-color-content-on-positive-enabled`.
 * @cssprop --jh-notification-color-text-negative - The notification text color when `appearance="negative"`. Defaults to `--jh-color-content-on-negative-enabled`.
 * @cssprop --jh-notification-icon-color-fill-neutral - The icon fill color when `appearance="neutral"`. Defaults to `--jh-color-content-on-primary-enabled`.
 * @cssprop --jh-notification-icon-color-fill-positive - The icon fill color when `appearance="positive"`. Defaults to `--jh-color-content-on-positive-enabled`.
 * @cssprop --jh-notification-icon-color-fill-negative - The icon fill color when `appearance="negative"`. Defaults to `--jh-color-content-on-negative-enabled`.
 * @cssprop --jh-notification-dismiss-icon-color-enabled - The dismiss button icon fill color. Defaults to `--jh-color-content-inverse-enabled`.
 * @cssprop --jh-notification-dismiss-color-background-enabled - The dismiss button background color. Defaults to transparent.
 * @cssprop --jh-notification-dismiss-color-border-enabled - The dismiss button border color. Defaults to transparent.
 * @cssprop --jh-notification-dismiss-color-focus - The dismiss button outline when it receives keyboard focus. Defaults to `--jh-color-content-inverse-enabled`.
 * @cssprop --jh-notification-dismiss-icon-color-focus - The dismiss button icon fill color when focused. Defaults to `--jh-color-content-on-inverse-hover`.
 * @cssprop --jh-notification-dismiss-color-background-focus - The dismiss button background color when focused. Defaults to `--jh-color-content-inverse-hover`.
 * @cssprop --jh-notification-dismiss-color-border-focus - The dismiss button border color when focused. Defaults to transparent.
 * @cssprop --jh-notification-dismiss-icon-color-hover - The dismiss button icon fill color when hovered. Defaults to `--jh-color-content-on-inverse-hover`.
 * @cssprop --jh-notification-dismiss-color-background-hover - The dismiss button background color when hovered. Defaults to `--jh-color-content-inverse-hover`.
 * @cssprop --jh-notification-dismiss-color-border-hover - The dismiss button border color when hovered. Defaults to transparent.
 * @cssprop --jh-notification-dismiss-icon-color-active - The dismiss button icon fill color when activated. Defaults to `--jh-color-content-on-inverse-active`.
 * @cssprop --jh-notification-dismiss-color-background-active - The dismiss button background color when activated. Defaults to `--jh-color-content-inverse-active`.
 * @cssprop --jh-notification-dismiss-color-border-active - The dismiss button border color when activated. Defaults to transparent.
 * @cssprop --jh-notification-action-label-color-text-enabled - The action button(s) text color. Defaults to `--jh-color-content-inverse-enabled`.
 * @cssprop --jh-notification-action-color-background-enabled - The action button(s) background color. Defaults to transparent.
 * @cssprop --jh-notification-action-color-border-enabled - The action button(s) border color. Defaults to transparent.
 * @cssprop --jh-notification-action-color-focus - The action button(s) outline when they receive keyboard focus. Defaults to `--jh-color-content-inverse-enabled`.
 * @cssprop --jh-notification-action-label-color-text-focus - The action button(s) text color when focused. Defaults to `--jh-color-content-on-inverse-hover`.
 * @cssprop --jh-notification-action-color-background-focus - The action button(s) background color when focused. Defaults to `--jh-color-content-inverse-hover`.
 * @cssprop --jh-notification-action-color-border-focus - The action button(s) border color when focused. Defaults to transparent.
 * @cssprop --jh-notification-action-label-color-text-hover - The action button(s) text color when hovered. Defaults to `--jh-color-content-on-inverse-hover`.
 * @cssprop --jh-notification-action-color-background-hover - The action button(s) background color when hovered. Defaults to `--jh-color-content-inverse-hover`.
 * @cssprop --jh-notification-action-color-border-hover - The action button(s) border color when hovered. Defaults to transparent.
 * @cssprop --jh-notification-action-label-color-text-active - The action button(s) text color when active. Defaults to `--jh-color-content-on-inverse-active`.
 * @cssprop --jh-notification-action-color-background-active - The action button(s) background color when active. Defaults to `--jh-color-content-inverse-active`.
 * @cssprop --jh-notification-action-color-border-active - The action button(s) border color when active. Defaults to transparent.
 * @cssprop --jh-notification-action-color-background-pending - The action button(s) background color when pending. Defaults to transparent.
 * @cssprop --jh-notification-action-color-border-pending - The action button(s) border color when pending. Defaults to transparent.
 * @cssprop --jh-notification-action-icon-color-fill-enabled - The action button(s) icon fill color. Defaults to `--jh-color-content-inverse-enabled`.
 * @cssprop --jh-notification-action-icon-color-fill-focus - The action button(s) icon fill color when focused. Defaults to `--jh-color-content-on-inverse-hover`.
 * @cssprop --jh-notification-action-icon-color-fill-hover - The action button(s) icon fill color when hovered. Defaults to `--jh-color-content-on-inverse-hover`.
 * @cssprop --jh-notification-action-icon-color-fill-active - The action button(s) icon fill color when active. Defaults to `--jh-color-content-on-inverse-active`.
 * @cssprop --jh-notification-action-progress-color-border-pending - The action button(s) progress indicator color when pending. Defaults to `--jh-color-content-inverse-enabled`.
 *
 * @slot default - Use to insert contextual information.
 * @slot jh-notification-icon - Use to insert a button or icon to the left of the default slot.
 * @slot jh-notification-dismiss-icon - Use to insert icon within the dismiss button.
 * @slot jh-notification-action - Use to insert action button(s). Placed to the right of the default slot. Set `stacked` property to place slot below default slot.
 *
 * @event jh-dismiss - Dispatched when the notification is dismissed.
 *
 * @customElement jh-notification
 */
export class JhNotification extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        appearance: {
            type: StringConstructor;
            reflect: boolean;
        };
        dismissButtonAccessibleLabel: {
            type: StringConstructor;
            attribute: string;
        };
        hideDismissButton: {
            type: BooleanConstructor;
            attribute: string;
        };
        stacked: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        type: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    /**
     * Sets background color of container to convey message connotation.
     * @type { 'positive' | 'neutral' | 'negative' }
     */
    appearance: "positive" | "neutral" | "negative";
    /**
     * Adds an aria-label to the dismiss button to assist screen readers.
     * @attr dismiss-button-accessible-label
     * @type {string | null}
     */
    dismissButtonAccessibleLabel: string | null;
    /**
     * Removes dismiss button from notification.
     * @attr hide-dismiss-button
     * @type {boolean}
     */
    hideDismissButton: boolean;
    /**
     * Places action button(s) on new line, below default slot.
     * @type {boolean}
     */
    stacked: boolean;
    /**
     * Determines where in viewport notification is displayed. Alerts will follow typical content flow, while banners will break out of standard flow and go edge-to-edge within a container.
     * @type { 'alert' | 'banner' }
     */
    type: "alert" | "banner";
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-notification': JhNotification;
  }
}
