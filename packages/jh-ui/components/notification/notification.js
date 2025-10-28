import { LitElement, css, html } from 'lit';
import '../button/button.js';
import '@jack-henry/jh-icons/icons-wc/icon-xmark.js';

/**
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
 * @cssprop --jh-notification-dismiss-shadow-neutral-focus - The dismiss button box shadow when focused and `appearance="neutral"`. Defaults to `0px 0px 0px 1px --jh-color-content-primary-enabled, 0px 0px 0px 3px --jh-color-content-inverse-hover`. 
 * @cssprop --jh-notification-dismiss-shadow-positive-focus - The dismiss button box shadow when focused and `appearance="positive"`. Defaults to `0px 0px 0px 1px --jh-color-content-positive-enabled, 0px 0px 0px 3px --jh-color-content-inverse-hover`. 
 * @cssprop --jh-notification-dismiss-shadow-negative-focus - The dismiss button box shadow when focused and `appearance="negative"`. Defaults to `0px 0px 0px 1px --jh-color-content-negative-enabled, 0px 0px 0px 3px --jh-color-content-inverse-hover`. 
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
 * @cssprop --jh-notification-action-shadow-neutral-focus - The action button(s) box shadow when focused and `appearance="neutral"`. Defaults to `0px 0px 0px 1px --jh-color-content-primary-enabled, 0px 0px 0px 3px --jh-color-content-inverse-hover`.
 * @cssprop --jh-notification-action-shadow-positive-focus - The action button(s) box shadow when focused and `appearance="positive"`. Defaults to `0px 0px 0px 1px --jh-color-content-positive-enabled), 0px 0px 0px 3px --jh-color-content-inverse-hover`.
 * @cssprop --jh-notification-action-shadow-negative-focus - The action button(s) box shadow when focused and `appearance="negative"`. Defaults to `0px 0px 0px 1px --jh-color-content-negative-enabled), 0px 0px 0px 3px --jh-color-content-inverse-hover`.
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
 * @slot default - Use to insert contextual information.
 * @slot jh-notification-icon - Use to insert a button or icon to the left of the default slot. 
 * @slot jh-notification-dismiss-icon - Use to insert icon within the dismiss button. 
 * @slot jh-notification-action - Use to insert action button(s). Placed to the right of the default slot. Set `stacked` property to place slot below default slot. 
 * @event jh-dismiss - Dispatched when the notification is dismissed.
 *
 * @customElement jh-notification
 */
export class JhNotification extends LitElement {
  static get styles() {
    return css`
    :host {
      font: var(--jh-font-body-regular-1);
      padding: var(--jh-space-300) var(--jh-space-400);
      display: block;
    }
    :host([type='alert']) {
      border-radius: var(
        --jh-notification-border-radius-alert,
        var(--jh-border-radius-100)
      );
    }
    :host([type='banner']) {
      border-radius: var(
        --jh-notification-border-radius-banner,
        var(--jh-border-radius-0)
      );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
    }
    /* Appearances */
    :host([appearance='neutral']) {
      background-color: var(
        --jh-notification-color-background-neutral,
        var(--jh-color-content-primary-enabled)
      );
      color: var(
        --jh-notification-color-text-neutral,
        var(--jh-color-content-on-primary-enabled)
      );
    }
    :host([appearance='positive']) {
      background-color: var(
        --jh-notification-color-background-positive,
        var(--jh-color-content-positive-enabled)
      );
      color: var(
        --jh-notification-color-text-positive,
        var(--jh-color-content-on-positive-enabled)
      );
    }
    :host([appearance='negative']) {
      background-color: var(
        --jh-notification-color-background-negative,
        var(--jh-color-content-negative-enabled)
      );
      color: var(
        --jh-notification-color-text-negative,
        var(--jh-color-content-on-negative-enabled)
      );
    }
    :host([appearance='neutral']) jh-button {
      --jh-button-shadow-focus: var(--jh-notification-dismiss-shadow-neutral-focus, 0px 0px 0px 1px var(--jh-color-content-primary-enabled), 0px 0px 0px 3px var(--jh-color-content-inverse-hover));
    }
    :host([appearance='positive']) jh-button {
      --jh-button-shadow-focus: var(--jh-notification-dismiss-shadow-positive-focus, 0px 0px 0px 1px var(--jh-color-content-positive-enabled), 0px 0px 0px 3px var(--jh-color-content-inverse-hover));
    }
    :host([appearance='negative']) jh-button {
      --jh-button-shadow-focus: var(--jh-notification-dismiss-shadow-negative-focus, 0px 0px 0px 1px var(--jh-color-content-negative-enabled), 0px 0px 0px 3px var(--jh-color-content-inverse-hover));
    }
    jh-button {
      --jh-button-icon-color-fill-secondary-enabled: var(--jh-notification-dismiss-icon-color-enabled, var(--jh-color-content-inverse-enabled));
      --jh-button-color-background-secondary-enabled: var(--jh-notification-dismiss-color-background-enabled, (transparent));
      --jh-button-color-border-secondary-enabled: var(--jh-notification-dismiss-color-border-enabled, (transparent));
      --jh-button-icon-color-fill-secondary-active: var(--jh-notification-dismiss-icon-color-active, var(--jh-color-content-on-inverse-active));
      --jh-button-color-background-secondary-active: var(--jh-notification-dismiss-color-background-active, var(--jh-color-content-inverse-active));
      --jh-button-color-border-secondary-active: var(--jh-notification-dismiss-color-border-active, (transparent));
      --jh-button-icon-color-fill-secondary-focus: var(--jh-notification-dismiss-icon-color-focus, var(--jh-color-content-on-inverse-hover));
      --jh-button-color-background-secondary-focus: var(--jh-notification-dismiss-color-background-focus, var(--jh-color-content-inverse-hover));
      --jh-button-color-border-secondary-focus: var(--jh-notification-dismiss-color-border-focus, (transparent));
      --jh-button-icon-color-fill-secondary-hover: var(--jh-notification-dismiss-icon-color-hover, var(--jh-color-content-on-inverse-hover));
      --jh-button-color-background-secondary-hover: var(--jh-notification-dismiss-color-background-hover, var(--jh-color-content-inverse-hover));
      --jh-button-color-border-secondary-hover: var(--jh-notification-dismiss-color-border-hover, (transparent));
      margin-left: var(--jh-space-400);
    }
    /* Default slot styling */
    .display-default-slot {
      padding: var(--jh-space-200) 0;
      margin: var(--jh-space-50) 0;
      font: var(--jh-font-body-regular-1);
      display: flex;
      flex: 1;
      word-break: break-all;
    }
    /* Icon slot styling */
    slot[name="jh-notification-icon"] {
      display: block;
    }
    slot[name="jh-notification-icon"]::slotted(*) {
      margin-right: var(--jh-space-400);
      padding: var(--jh-space-200) 0;
    }
    :host([appearance='neutral']) slot[name="jh-notification-icon"] {
      --jh-icon-color-fill: var(--jh-notification-icon-color-fill-neutral, var(--jh-color-content-on-primary-enabled));
    }
    :host([appearance='positive']) slot[name="jh-notification-icon"] {
      --jh-icon-color-fill: var(--jh-notification-icon-color-fill-positive, var(--jh-color-content-on-positive-enabled));
    }
    :host([appearance='negative']) slot[name="jh-notification-icon"] {
      --jh-icon-color-fill: var(--jh-notification-icon-color-fill-negative, var(--jh-color-content-on-negative-enabled));
    }
    /* action slot styling*/
    :host([appearance='neutral']) slot[name="jh-notification-action"]::slotted(*) {
      --jh-button-shadow-focus: var(--jh-notification-action-shadow-neutral-focus, 0px 0px 0px 1px var(--jh-color-content-primary-enabled), 0px 0px 0px 3px var(--jh-color-content-inverse-hover));
    }
    :host([appearance='positive']) slot[name="jh-notification-action"]::slotted(*) {
      --jh-button-shadow-focus: var(--jh-notification-action-shadow-positive-focus, 0px 0px 0px 1px var(--jh-color-content-positive-enabled), 0px 0px 0px 3px var(--jh-color-content-inverse-hover));
    }
    :host([appearance='negative']) slot[name="jh-notification-action"]::slotted(*) {
      --jh-button-shadow-focus: var(--jh-notification-action-shadow-negative-focus, 0px 0px 0px 1px var(--jh-color-content-negative-enabled), 0px 0px 0px 3px var(--jh-color-content-inverse-hover));
    }
    slot[name="jh-notification-action"]::slotted(*) {
      --jh-button-label-color-text-secondary-enabled: var(--jh-notification-action-label-color-text-enabled, var(--jh-color-content-inverse-enabled));
      --jh-button-color-background-secondary-enabled: var(--jh-notification-action-color-background-enabled, (transparent));
      --jh-button-color-border-secondary-enabled: var(--jh-notification-action-color-border-enabled, (transparent));
      --jh-button-label-color-text-secondary-focus: var(--jh-notification-action-label-color-text-focus, var(--jh-color-content-on-inverse-hover));
      --jh-button-color-background-secondary-focus: var(--jh-notification-action-color-background-focus, var(--jh-color-content-inverse-hover));
      --jh-button-color-border-secondary-focus: var(--jh-notification-action-color-border-focus, (transparent));
      --jh-button-label-color-text-secondary-hover: var(--jh-notification-action-label-color-text-hover, var(--jh-color-content-on-inverse-hover));
      --jh-button-color-background-secondary-hover: var(--jh-notification-action-color-background-hover, var(--jh-color-content-inverse-hover));
      --jh-button-color-border-secondary-hover: var(--jh-notification-action-color-border-hover, (transparent));
      --jh-button-label-color-text-secondary-active: var(--jh-notification-action-label-color-text-active, var(--jh-color-content-on-inverse-active));
      --jh-button-color-background-secondary-active: var(--jh-notification-action-color-background-active, var(--jh-color-content-inverse-active));
      --jh-button-color-border-secondary-active: var(--jh-notification-action-color-border-active, (transparent));
      --jh-button-color-background-secondary-pending: var(--jh-notification-action-color-background-pending, (transparent));
      --jh-button-color-border-secondary-pending: var(--jh-notification-action-color-border-pending, (transparent));
      --jh-button-icon-color-fill-secondary-enabled: var(--jh-notification-action-icon-color-fill-enabled, var(--jh-color-content-inverse-enabled));
      --jh-button-icon-color-fill-secondary-focus: var(--jh-notification-action-icon-color-fill-focus, var(--jh-color-content-on-inverse-hover));
      --jh-button-icon-color-fill-secondary-hover: var(--jh-notification-action-icon-color-fill-hover, var(--jh-color-content-on-inverse-hover));
      --jh-button-icon-color-fill-secondary-active: var(--jh-notification-action-icon-color-fill-active, var(--jh-color-content-on-inverse-active));
      --jh-button-progress-color-border-secondary-pending: var(--jh-notification-action-progress-color-border-pending, var(--jh-color-content-inverse-enabled));
    }
    slot[name="jh-notification-action"]::slotted(:first-of-type) {
      margin-left: var(--jh-space-400);
    }
    slot[name="jh-notification-action"]::slotted(:not(:first-of-type)) {
      margin-left: var(--jh-space-200);
    }
    :host([stacked]) {
      display: flex;
      flex-direction: column;
    }
    :host([stacked]) slot[name="jh-notification-action"]::slotted(:first-of-type) {
      margin-left: 0;
    }
    .stacked-action-btn {
      margin-top: var(--jh-space-400);
      display: flex;
      justify-content: flex-end;
    }
    .stacked-container,
    .inline-container {
      display: flex;
      align-items: flex-start;
    }
    `;
  }

  static get properties() {
    return {
      /**
       * Sets background color of container to convey message connotation.
       */
      appearance: { type: String, reflect: true },
      /**
       * Adds an aria-label to the dismiss button to assist screen readers.
       */
      dismissButtonAccessibleLabel: {
        type: String,
        attribute: 'dismiss-button-accessible-label',
      },
      /**
       * Removes dismiss button from notification.
       */
      hideDismissButton: { type: Boolean, attribute: 'hide-dismiss-button' },
      /**
       * Places action button(s) on new line, below default slot.
       */
      stacked: { type: Boolean, reflect: true },
      /**
       * Determines where in viewport notification is displayed. Alerts will follow typical content flow, while banners will break out of standard flow and go edge-to-edge within a container. 
       */
      type: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    /** @type {'positive'|'neutral'|'negative'} */
    this.appearance = 'neutral';
    /** @type {string} */
    this.dismissButtonAccessibleLabel = null;
    /** @type {boolean} */
    this.hideDismissButton = false;
    /** @type {boolean} */
    this.stacked = false;
    /** @type {'alert'|'banner'} */
    this.type = 'alert';
  }

  #handleDismissal() {
    this.#dispatch('jh-dismiss');
    // if notification is wrapped by jh-toast component, do not remove notification from DOM
    if (this.parentNode.host?.nodeName === 'JH-TOAST') {
      return;
    } else {
      this.remove();
    }   
  }

  #dispatch(name) {
    this.dispatchEvent(
      new CustomEvent(name, {
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
  }

  #getActionButtons() {
    let className = this.stacked ? 'stacked-action-btn' : 'inline-action-btn';
    return html`
        <slot name="jh-notification-action" class=${className} @slotchange=${this.#handleActionSlotChange}></slot>
    `;
  }

  #handleActionSlotChange() {
    let actionBtns = this.querySelectorAll('jh-button');

    for (const btn of actionBtns) {
      if (btn.getAttribute('size') !== 'small') {
        btn.setAttribute('size', 'small');
      }
    };
  }

  #handleSlotChange(e) {
    if (e) {
      let defaultSlot = this.shadowRoot.querySelector('slot:not([name])');
      defaultSlot.classList.add("display-default-slot");
    }
  }

  render() {
    let dismissBtn;
    
    if (!this.hideDismissButton) {
      dismissBtn = html`
        <jh-button
          size="small"
          appearance="secondary"
          accessible-label=${this.dismissButtonAccessibleLabel}
          @click=${this.#handleDismissal}
          ><slot name="jh-notification-dismiss-icon" slot="jh-button-icon">
            <jh-icon-xmark slot="jh-button-icon"></jh-icon-xmark>
          </slot>
        </jh-button>
      `;
    }

    return html`
      <div class=${this.stacked ? 'stacked-container' : 'inline-container'}>
        <slot aria-hidden="true" name="jh-notification-icon"></slot>
        <slot @slotchange=${this.#handleSlotChange}></slot>
        ${this.stacked ? null : this.#getActionButtons()}
        ${dismissBtn}
      </div>
      ${this.stacked ? this.#getActionButtons() : null}
    `;
  }
}

customElements.define('jh-notification', JhNotification);
