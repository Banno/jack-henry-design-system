import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../progress/progress.js';

/**
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
 * @cssprop --jh-button-size - The button width when no label is set, and the button height. Button width and height defaults to `--jh-dimension-1000` when `size="small"`, `--jh-dimension-1200` when `size="medium"`, and `--jh-dimension-1400` when `size="large"`. 
 *
 * @slot jh-button-icon - Use to insert an icon.
 * @customElement jh-button
 */
export class JhButton extends LitElement {
  /** @ignore */
  static get formAssociated() {
    return true;
  }

  /** @type {ElementInternals} */
  #internals;

  /** @type {?string} */
  #value;

  static get styles() {
    return css`
      :host {
        display: inline-block;
        touch-action: manipulation;
        vertical-align: middle;
      }
      a {
        text-decoration: none;
        box-sizing: border-box;
      }
      button,
      a {
        border-radius: var(
          --jh-button-border-radius,
          var(--jh-border-radius-100)
        );
        font-family: var(--jh-font-body-medium-1-font-family);
        font-weight: var(--jh-font-body-medium-1-font-weight);
        font-size: var(--jh-font-body-medium-1-font-size);
        line-height: var(--jh-font-body-medium-1-line-height);
        border-width: var(--jh-border-action-width);
        border-style: var(--jh-border-action-style);
        border-color: var(--button-border-color);
        padding: 0 var(--jh-dimension-400);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 0;
        cursor: pointer;
        transition: background-color ease 0.2s;
      }
      .content-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      button:focus,
      a:focus {
        outline: none;
      }
        button:focus-visible,
      a:focus-visible {
        outline-color: var(
          --jh-button-color-focus,
          var(--jh-border-focus-color)
        );
        outline-style: var(--jh-border-focus-style);
        outline-width: var(--jh-border-focus-width);
        outline-offset: 1px;
      }
      :host([pending]),
      :host([accessible-disabled='true']),
      :host([disabled]) button,
      :host([disabled]) a {
        cursor: default;
        pointer-events: none;
      }
      /* Size styling ('medium' is default) */
      :host([size='small']) button,
      :host([size='small']) a {
        height: var(--jh-button-size, var(--jh-dimension-1000));
      }
      :host([size='medium']) button,
      :host([size='medium']) a {
        height: var(--jh-button-size, var(--jh-dimension-1200));
      }
      :host([size='large']) button,
      :host([size='large']) a {
        height: var(--jh-button-size, var(--jh-dimension-1400));
      }
      /* appearance='primary' ('secondary' is default) */
      :host([appearance='primary']) button,
      :host([appearance='primary']) a {
        background-color: var(
          --jh-button-color-background-primary-enabled,
          var(--jh-color-content-brand-enabled)
        );
        color: var(
          --jh-button-label-color-text-primary-enabled,
          var(--jh-color-content-on-brand-enabled)
        );
        --button-border-color: var(
          --jh-button-color-border-primary-enabled,
          transparent
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-primary-enabled,
          var(--jh-color-content-on-brand-enabled)
        );
      }
      :host([appearance='primary']) button:focus-visible,
      :host([appearance='primary']) a:focus-visible {
        background-color: var(
          --jh-button-color-background-primary-focus,
          var(--jh-color-content-brand-hover)
        );
        color: var(
          --jh-button-label-color-text-primary-focus,
          var(--jh-color-content-on-brand-hover)
        );
        --button-border-color: var(
          --jh-button-color-border-primary-focus,
          transparent
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-primary-focus,
          var(--jh-color-content-on-brand-hover)
        );
      }
      :host([appearance='primary']) button:hover,
      :host([appearance='primary']) a:hover {
        background-color: var(
          --jh-button-color-background-primary-hover,
          var(--jh-color-content-brand-hover)
        );
        color: var(
          --jh-button-label-color-text-primary-hover,
          var(--jh-color-content-on-brand-hover)
        );
        --button-border-color: var(
          --jh-button-color-border-primary-hover,
          transparent
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-primary-hover,
          var(--jh-color-content-on-brand-hover)
        );
      }
      :host([appearance='primary']) button:active,
      :host([appearance='primary']) a:active {
        background-color: var(
          --jh-button-color-background-primary-active,
          var(--jh-color-content-brand-active)
        );
        color: var(
          --jh-button-label-color-text-primary-active,
          var(--jh-color-content-on-brand-active)
        );
        --button-border-color: var(
          --jh-button-color-border-primary-active,
          transparent
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-primary-active,
          var(--jh-color-content-on-brand-active)
        );
      }
      :host([appearance='primary'][accessible-disabled='true'][pending]) button,
      :host([appearance='primary']) button[aria-disabled='true'],
      :host([appearance='primary']) a[aria-disabled='true'],
      :host([appearance='primary'][disabled][pending]) button,
      :host([appearance='primary']) button[disabled],
      :host([appearance='primary']) a[disabled] {
        background-color: var(
          --jh-button-color-background-primary-disabled,
          var(--jh-color-content-brand-enabled)
        );
        color: var(
          --jh-button-label-color-text-primary-disabled,
          var(--jh-color-content-on-brand-enabled)
        );
        --button-border-color: var(
          --jh-button-color-border-primary-disabled,
          transparent
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-primary-disabled,
          var(--jh-color-content-on-brand-enabled)
        );
      }
      /* appearance='secondary' */
      :host([appearance='secondary']) button,
      :host([appearance='secondary']) a {
        background-color: var(
          --jh-button-color-background-secondary-enabled,
          transparent
        );
        color: var(
          --jh-button-label-color-text-secondary-enabled,
          var(--jh-color-content-brand-enabled)
        );
        --button-border-color: var(
          --jh-button-color-border-secondary-enabled,
          var(--jh-border-action-color)
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-secondary-enabled,
          var(--jh-color-content-brand-enabled)
        );
      }
      :host([appearance='secondary']) button:focus-visible,
      :host([appearance='secondary']) a:focus-visible {
        background-color: var(
          --jh-button-color-background-secondary-focus,
          var(--jh-color-content-brand-hover)
        );
        color: var(
          --jh-button-label-color-text-secondary-focus,
          var(--jh-color-content-on-brand-hover)
        );
        --button-border-color: var(
          --jh-button-color-border-secondary-focus,
          var(--jh-color-content-brand-hover)
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-secondary-focus,
          var(--jh-color-content-on-brand-hover)
        );
      }
      :host([appearance='secondary']) button:hover,
      :host([appearance='secondary']) a:hover {
        background-color: var(
          --jh-button-color-background-secondary-hover,
          var(--jh-color-content-brand-hover)
        );
        color: var(
          --jh-button-label-color-text-secondary-hover,
          var(--jh-color-content-on-brand-hover)
        );
        --button-border-color: var(
          --jh-button-color-border-secondary-hover,
          var(--jh-color-content-brand-hover)
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-secondary-hover,
          var(--jh-color-content-on-brand-hover)
        );
      }
      :host([appearance='secondary']) button:active,
      :host([appearance='secondary']) a:active {
        background-color: var(
          --jh-button-color-background-secondary-active,
          var(--jh-color-content-brand-active)
        );
        color: var(
          --jh-button-label-color-text-secondary-active,
          var(--jh-color-content-on-brand-active)
        );
        --button-border-color: var(
          --jh-button-color-border-secondary-active,
          var(--jh-color-content-brand-active)
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-secondary-active,
          var(--jh-color-content-on-brand-active)
        );
      }
      :host([appearance='secondary'][accessible-disabled='true'][pending])
        button,
      :host([appearance='secondary']) button[aria-disabled='true'],
      :host([appearance='secondary']) a[aria-disabled='true'],
      :host([appearance='secondary'][disabled][pending]) button,
      :host([appearance='secondary']) button[disabled],
      :host([appearance='secondary']) a[disabled] {
        background-color: var(
          --jh-button-color-background-secondary-disabled,
          transparent
        );
        color: var(
          --jh-button-label-color-text-secondary-disabled,
          var(--jh-color-content-brand-enabled)
        );
        --button-border-color: var(
          --jh-button-color-border-secondary-disabled,
          var(--jh-border-action-color)
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-secondary-disabled,
          var(--jh-color-content-brand-enabled)
        );
      }
      /* appearance='tertiary' */
      :host([appearance='tertiary']) button,
      :host([appearance='tertiary']) a {
        background-color: var(
          --jh-button-color-background-tertiary-enabled,
          transparent
        );
        color: var(
          --jh-button-label-color-text-tertiary-enabled,
          var(--jh-color-content-brand-enabled)
        );
        --button-border-color: var(
          --jh-button-color-border-tertiary-enabled,
          transparent
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-tertiary-enabled,
          var(--jh-color-content-brand-enabled)
        );
      }
      :host([appearance='tertiary']) button:focus-visible,
      :host([appearance='tertiary']) a:focus-visible {
        background-color: var(
          --jh-button-color-background-tertiary-focus,
          var(--jh-color-content-brand-hover)
        );
        color: var(
          --jh-button-label-color-text-tertiary-focus,
          var(--jh-color-content-on-brand-hover)
        );
        --button-border-color: var(
          --jh-button-color-border-tertiary-focus,
          transparent
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-tertiary-focus,
          var(--jh-color-content-on-brand-hover)
        );
      }
      :host([appearance='tertiary']) button:hover,
      :host([appearance='tertiary']) a:hover {
        background-color: var(
          --jh-button-color-background-tertiary-hover,
          var(--jh-color-content-brand-hover)
        );
        color: var(
          --jh-button-label-color-text-tertiary-hover,
          var(--jh-color-content-on-brand-hover)
        );
        --button-border-color: var(
          --jh-button-color-border-tertiary-hover,
          transparent
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-tertiary-hover,
          var(--jh-color-content-on-brand-hover)
        );
      }
      :host([appearance='tertiary']) button:active,
      :host([appearance='tertiary']) a:active {
        background-color: var(
          --jh-button-color-background-tertiary-active,
          var(--jh-color-content-brand-active)
        );
        color: var(
          --jh-button-label-color-text-tertiary-active,
          var(--jh-color-content-on-brand-active)
        );
        --button-border-color: var(
          --jh-button-color-border-tertiary-active,
          transparent
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-tertiary-active,
          var(--jh-color-content-on-brand-active)
        );
      }
      :host([appearance='tertiary'][accessible-disabled='true'][pending])
        button,
      :host([appearance='tertiary']) button[aria-disabled='true'],
      :host([appearance='tertiary']) a[aria-disabled='true'],
      :host([appearance='tertiary'][disabled][pending]) button,
      :host([appearance='tertiary']) button[disabled],
      :host([appearance='tertiary']) a[disabled] {
        background-color: var(
          --jh-button-color-background-tertiary-disabled,
          transparent
        );
        color: var(
          --jh-button-label-color-text-tertiary-disabled,
          var(--jh-color-content-brand-enabled)
        );
        --button-border-color: var(
          --jh-button-color-border-tertiary-disabled,
          transparent
        );
      }
      :host([appearance='tertiary']) button[aria-disabled='true'],
      :host([appearance='tertiary']) a[aria-disabled='true'],
      :host([appearance='tertiary']) button[disabled],
      :host([appearance='tertiary']) a[disabled] {
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-tertiary-disabled,
          var(--jh-color-content-brand-enabled)
        );
      }
      /* appearance='danger' */
      :host([appearance='danger']) button,
      :host([appearance='danger']) a {
        background-color: var(
          --jh-button-color-background-danger-enabled,
          var(--jh-color-content-negative-enabled)
        );
        color: var(
          --jh-button-label-color-text-danger-enabled,
          var(--jh-color-content-on-negative-enabled)
        );
        --button-border-color: var(
          --jh-button-color-border-danger-enabled,
          transparent
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-danger-enabled,
          var(--jh-color-content-on-negative-enabled)
        );
      }
      :host([appearance='danger']) button:focus-visible,
      :host([appearance='danger']) a:focus-visible {
        background-color: var(
          --jh-button-color-background-danger-focus,
          var(--jh-color-content-negative-hover)
        );
        color: var(
          --jh-button-label-color-text-danger-focus,
          var(--jh-color-content-on-negative-hover)
        );
        --button-border-color: var(
          --jh-button-color-border-danger-focus,
          transparent
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-danger-focus,
          var(--jh-color-content-on-negative-hover)
        );
      }
      :host([appearance='danger']) button:hover,
      :host([appearance='danger']) a:hover {
        background-color: var(
          --jh-button-color-background-danger-hover,
          var(--jh-color-content-negative-hover)
        );
        color: var(
          --jh-button-label-color-text-danger-hover,
          var(--jh-color-content-on-negative-hover)
        );
        --button-border-color: var(
          --jh-button-color-border-danger-hover,
          transparent
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-danger-hover,
          var(--jh-color-content-on-negative-hover)
        );
      }
      :host([appearance='danger']) button:active,
      :host([appearance='danger']) a:active {
        background-color: var(
          --jh-button-color-background-danger-active,
          var(--jh-color-content-negative-active)
        );
        color: var(
          --jh-button-label-color-text-danger-active,
          var(--jh-color-content-on-negative-active)
        );
        --button-border-color: var(
          --jh-button-color-border-danger-active,
          transparent
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-danger-active,
          var(--jh-color-content-on-negative-active)
        );
      }
      :host([appearance='danger'][accessible-disabled='true'][pending]) button,
      :host([appearance='danger']) button[aria-disabled='true'],
      :host([appearance='danger']) a[aria-disabled='true'],
      :host([appearance='danger'][disabled][pending]) button,
      :host([appearance='danger']) button[disabled],
      :host([appearance='danger']) a[disabled] {
        background-color: var(
          --jh-button-color-background-danger-disabled,
          var(--jh-color-content-negative-enabled)
        );
        color: var(
          --jh-button-label-color-text-danger-disabled,
          var(--jh-color-content-on-negative-enabled)
        );
        --button-border-color: var(
          --jh-button-color-border-danger-disabled,
         transparent
        );
        --jh-icon-color-fill: var(
          --jh-button-icon-color-fill-danger-disabled,
          var(--jh-color-content-on-negative-enabled)
        );
      }
      /* additional disabled/aria-disabled/pending styling */
      :host([accessible-disabled='true'][pending]) button,
      button[aria-disabled='true'],
      a[aria-disabled='true'],
      :host([disabled][pending]) button,
      button[disabled],
      a[disabled] {
        opacity: var(--jh-button-opacity-disabled, var(--jh-opacity-disabled));
      }
      /* additional focus styling */
      :host([accessible-disabled='true']) button:focus-visible,
      :host([accessible-disabled='true']) a:focus-visible,
      :host([pending]) button:focus-visible,
      :host([pending]) a:focus-visible {
        outline: none;
      }
      /* pending styling */
      :host([pending]) button,
      :host([pending]) a {
        width: var(--populated-button-width);
      }
      :host([pending][appearance='primary']) button,
      :host([pending][appearance='primary']) a {
        background-color: var(
          --jh-button-color-background-primary-pending,
          var(--jh-color-content-brand-enabled)
        );
        --button-border-color: var(
          --jh-button-color-border-primary-pending,
          transparent
        );
      }
      :host([pending][appearance='primary']) jh-progress {
        --jh-progress-indicator-color: var(
          --jh-button-progress-color-border-primary-pending,
          var(--jh-color-content-on-brand-enabled)
        );
      }
      :host([pending][appearance='secondary']) button,
      :host([pending][appearance='secondary']) a {
        background-color: var(
          --jh-button-color-background-secondary-pending,
          transparent
        );
        --button-border-color: var(
          --jh-button-color-border-secondary-pending,
          var(--jh-border-action-color)
        );
      }
      :host([pending][appearance='secondary']) jh-progress {
        --jh-progress-indicator-color: var(
          --jh-button-progress-color-border-secondary-pending,
          var(--jh-color-content-brand-enabled)
        );
      }
      :host([pending][appearance='tertiary']) button,
      :host([pending][appearance='tertiary']) a {
        background-color: var(
          --jh-button-color-background-tertiary-pending,
          transparent
        );
        --button-border-color: var(
          --jh-button-color-border-tertiary-pending,
          transparent
        );
      }
      :host([pending][appearance='tertiary']) jh-progress {
        --jh-progress-indicator-color: var(
          --jh-button-progress-color-border-tertiary-pending,
          var(--jh-color-content-brand-enabled)
        );
      }
      :host([pending][appearance='danger']) button,
      :host([pending][appearance='danger']) a {
        background-color: var(
          --jh-button-color-background-danger-pending,
          var(--jh-color-content-negative-enabled)
        );
        --button-border-color: var(
          --jh-button-color-border-danger-pending,
          transparent
        );
      }
      :host([pending][appearance='danger']) jh-progress {
        --jh-progress-indicator-color: var(
          --jh-button-progress-color-border-danger-pending,
          var(--jh-color-content-on-negative-enabled)
        );
      }
      /* Icon-related Type option styling */
      :host([icon-position='before'][label]) ::slotted(*) {
        margin-right: var(--jh-dimension-200);
      }
      :host([icon-position='after'][label]) ::slotted(*) {
        margin-left: var(--jh-dimension-200);
      }
      :host([icon-position='after']) .content-wrapper {
        flex-direction: row-reverse;
      }
      /* Icon only styling */
      :host(:not([label])[size='small']) button,
      :host(:not([label])[size='small']) a {
        width: var(--jh-button-size, var(--jh-dimension-1000));
      }
      :host(:not([label])[size='medium']) button,
      :host(:not([label])[size='medium']) a {
        width: var(--jh-button-size, var(--jh-dimension-1200));
      }
      :host(:not([label])[size='large']) button,
      :host(:not([label])[size='large']) a {
        width: var(--jh-button-size, var(--jh-dimension-1400));
      }
      :host(:not([label])) button,
      :host(:not([label])) a {
        padding: 0;
      }
      /* Block styling */
      :host([block]) {
        display: block;
        text-align: center;
      }
      :host(:not([label])[block]) button,
      :host(:not([label])[block]) a,
      :host([block]) button,
      :host([block]) a {
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      /** Sets an `aria-disabled` to signify to screen readers that the disabled button should remain perceivable while disabled. */
      accessibleDisabled: {
        type: String,
        attribute: 'accessible-disabled',
        reflect: true,
      },
      /** Sets an `aria-label` to assist screen reader users when no visible label is present. */
      accessibleLabel: {
        type: String,
        attribute: 'accessible-label',
      },
      /** Determines the button color. */
      appearance: {
        type: String,
        reflect: true,
      },
      /** Sets the button width to its parent container. */
      block: {
        type: Boolean,
      },
      /** Disables the button and prevents all user interactions. May cause button to be ignored by assistive technologies(AT). See `accessible-disabled` attribute if the button should remain perceivable to AT. */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /** Sets the link's destination. */
      href: {
        type: String,
      },
      /** Sets location of icon in relation to the label. */
      iconPosition: {
        type: String,
        attribute: 'icon-position',
        reflect: true,
      },
      /** Displays a progress indicator. */
      pending: {
        type: Boolean,
        reflect: true,
      },
      /** Describes the intent of the button.*/
      label: {
        type: String,
      },
      /** Sets the name of the button data when submitted in a form. */
      name: {
        type: String,
      },
      /** Sets the size of the button. */
      size: {
        type: String,
        reflect: true,
      },
      /** Sets button `type='submit'`. Button defaults to `type='button'`. */
      submit: {
        type: Boolean,
      },
      /** Specifies where to display the linked URL set by the `href` property. */
      target: {
        type: String,
      },
      /** Sets the value of the button. */
      value: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    /** @type {ElementInternals} */
    this.#internals = this.attachInternals();
    /** @type {ElementInternals} */
    this.#internals.form;
    /** @type {'true'|'false'} */
    this.accessibleDisabled = null;
    /** @type {?string} */
    this.accessibleLabel = null;
    /** @type {'primary'|'secondary'|'tertiary'|'danger'} */
    this.appearance = 'secondary';
    /** @type {boolean} */
    this.block = false;
    /** @type {boolean} */
    this.disabled = false;
    /** @type {?string} */
    this.href = null;
    /** @type {'before'|'after'} */
    this.iconPosition = 'before';
    /** @type {?boolean} */
    this.pending = false;
    /** @type {?string} */
    this.label = null;
    /** @type {?string} */
    this.name = null;
    /** @type {'small'|'medium'|'large'} */
    this.size = 'medium';
    /** @type {?boolean} */
    this.submit = false;
    /** @type {'_blank'|'_self'|'_parent'|'_top'} */
    this.target = null;
    /** @type {?string} */
    this.value = null;

    this.addEventListener('click', this.#onClick);
    this.addEventListener('keydown', this.#handleKeydown);
  }

  /** @type {?string} */
  get value() {
    return this.#value;
  }

  set value(newValue) {
    const oldValue = this.#value;
    if (newValue !== oldValue) {
      this.#value = newValue;
      this.#internals.setFormValue(newValue);
    }
    this.requestUpdate('value', oldValue);
  }

  firstUpdated() {
    this.#cacheButtonDimensions();
    new ResizeObserver(this.#cacheButtonDimensions.bind(this)).observe(this);
  }

  #cacheButtonDimensions() {
    const { width } = this.getBoundingClientRect();

    this.style.setProperty('--populated-button-width', `${width}px`);
  }

  formDisabledCallback(disabled) {
    this.disabled = disabled;
  }

  #onClick(event) {
    //If I'm a submit button in a form and I'm not disabled submit the form
    if (this.submit && this.#internals.form && !this.disabled) {
      this.#internals.form.requestSubmit();
    }
  }

  //disable button when accessible-disabled='true'
  #handleKeydown(e) {
    if (
      (e.code === 'Space' || e.code === 'Enter') &&
      (this.accessibleDisabled === 'true' || this.pending)
    ) {
      e.preventDefault();
    }
  }

  #handleSlotChange() {
    this.firstElementChild.setAttribute('aria-hidden', 'true');
    this.firstElementChild.setAttribute('size', 'medium');
  }

  #renderButtonContent(pending, label) {
    let buttonContent;
    let buttonLabel;

    if (label) {
      buttonLabel = html`<span>${label}</span>`;
    }

    if (pending && !this.disabled) {
      buttonContent = html`
        <jh-progress type="circular" indeterminate></jh-progress>
      `;
    } else {
      buttonContent = html`
        <slot
          name="jh-button-icon"
          @slotchange=${this.#handleSlotChange}
        ></slot>
        ${buttonLabel}
      `;
    }

    return html` <span class="content-wrapper">${buttonContent}</span> `;
  }

  render() {
    const buttonContent = this.#renderButtonContent(this.pending, this.label);
    let ariaDisabled;

    if (this.accessibleDisabled !== 'false') {
      ariaDisabled = this.accessibleDisabled;
    }

    if (this.href) {
      return html`
        <a
          tabindex="0"
          aria-disabled=${ifDefined(ariaDisabled)}
          aria-label=${ifDefined(this.accessibleLabel)}
          ?disabled=${this.disabled}
          href=${ifDefined(!this.disabled ? this.href : null)}
          target=${ifDefined(!this.disabled ? this.target : null)}
        >
          ${buttonContent}
        </a>
      `;
    } else {
      return html`
        <button
          tabindex="0"
          aria-disabled=${ifDefined(ariaDisabled)}
          aria-label=${ifDefined(this.accessibleLabel)}
          ?disabled=${this.disabled}
          type=${this.submit ? 'submit' : 'button'}
        >
          ${buttonContent}
        </button>
      `;
    }
  }
}

customElements.define('jh-button', JhButton);