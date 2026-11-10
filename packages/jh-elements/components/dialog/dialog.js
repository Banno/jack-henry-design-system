/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { JhElement } from '../element/element.js';
import '../button/button.js';
import '../divider/divider.js';
import '@jack-henry/jh-icons/icons-wc/icon-xmark.js';

/**
 * Dialogs are modal windows that appear on top of the main content to focus the user's attention on a task or important information.
 *
 * [Dialog Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-dialog--docs)
 *
 * @cssprop --jh-dialog-color-background - The dialog background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-dialog-border-radius - The dialog border-radius. Defaults to `--jh-border-radius-300`. When the viewport is 440px or smaller, defaults to `0`.
 * @cssprop --jh-dialog-shadow - The dialog box-shadow. Defaults to `--jh-shadow-overlay`. When the viewport is 440px or smaller, defaults to `none`.
 * @cssprop --jh-dialog-dimension-padding-horizontal - The horizontal padding for the dialog content. Defaults to `--jh-dimension-600`.
 * @cssprop --jh-dialog-overlay-color-background - The backdrop color displayed behind the dialog. Defaults to `--jh-color-overlay`.
 * @cssprop --jh-dialog-overlay-dimension-padding-vertical - The vertical padding for the dialog overlay. Defaults to `--jh-dimension-1000`.
 * @cssprop --jh-dialog-overlay-dimension-padding-horizontal - The horizontal padding for the dialog overlay. Defaults to `--jh-dimension-1000`.
 * @cssprop --jh-dialog-dimension-max-width - The dialog max-width. Defaults to `480px` when `size="small"`, `640px` when `size="medium"` and `800px` when `size="large"`. Not applied when the viewport is 440px or smaller, where the dialog fills the full viewport width and height.
 * @cssprop --jh-dialog-media-aspect-ratio - The media slot aspect-ratio. Defaults to `auto`.
 * @cssprop --jh-dialog-header-color-text - The header slot text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-dialog-default-color-text - The default slot text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-dialog-footer-color-text - The footer slot text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @slot default - Use to insert dialog body content.
 * @slot jh-dialog-media - Use to insert media content at the top of the dialog. User may need to add additional styling to elements such as border, object-fit, etc.
 * @slot jh-dialog-header - Use to insert custom dialog header layout. Used as the accessible name of the dialog.
 * @slot jh-dialog-footer - Use to insert custom dialog footer layout, such as action buttons.
 * @slot jh-dialog-dismiss-icon - Use to change the default icon within the dismiss button.
 *
 * @event jh-open - Dispatched when the dialog opens.
 * @event jh-close - Dispatched when the dialog closes. Event payload includes the close method of the dialog and can be accessed via `e.detail.reference.closeMethod`.
 * Possible values are `backdrop-click`, `dismiss-button`, `escape` and `programmatic`.
 *
 * @customElement jh-dialog
 */
export class JhDialog extends JhElement {
  static get styles() {
    return css`
      :host {
        --max-width: 640px;
        display: contents;
      }
      :host([size='small']) {
        --max-width: 480px;
      }
      :host([size='large']) {
        --max-width: 800px;
      }
      dialog {
        max-width: var(--jh-dialog-dimension-max-width, var(--max-width));
        border-radius: var(--jh-dialog-border-radius, var(--jh-border-radius-300));
        background-color: var(
          --jh-dialog-color-background,
          var(--jh-color-container-primary-enabled)
        );
        box-shadow: var(--jh-dialog-shadow, var(--jh-shadow-overlay));
        color: var(--jh-color-content-primary-enabled);
        box-sizing: border-box;
        width: 100%;
        word-break: break-word;
        overflow: hidden;
        padding: 0;
        border: none;
      }
      dialog::backdrop {
        background-color: var(--jh-dialog-overlay-color-background, var(--jh-color-overlay));
        padding: var(--jh-dialog-overlay-dimension-padding-vertical, var(--jh-dimension-1000)), var(--jh-dialog-overlay-dimension-padding-horizontal, var(--jh-dimension-1000));
      }
      dialog[open] {
        display: flex;
        flex-direction: column;
        outline: none;
      }
      slot[name='jh-dialog-media'],
      .header,
      jh-divider,
      slot[name='jh-dialog-footer'] {
        flex-shrink: 0;
      }
      slot[name='jh-dialog-media'],
      .header,
      slot[name='jh-dialog-footer'] {
        display: none;
      }
      slot[name='jh-dialog-media'].display-slot,
      slot[name='jh-dialog-footer'].display-slot {
        display: block;
      }
      .header.display-slot,
      :host([show-dismiss-button]) .header,
      slot[name='jh-dialog-footer'] {
        padding: var(--jh-dimension-400) var(--jh-dialog-dimension-padding-horizontal, var(--jh-dimension-600));
      }
      .header.display-slot,
      :host([show-dismiss-button]) .header {
        gap: var(--jh-dimension-200);
        display: flex;
        align-items: flex-start;
      }
      :host([show-header-divider]) .body {
        padding-top: var(--jh-dimension-400);
      }
      ::slotted([slot='jh-dialog-media']) {
        display: block;
        aspect-ratio: var(--jh-dialog-media-aspect-ratio, auto);
        width: 100%;
      }
      .header-content {
        color: var(
          --jh-dialog-header-color-text,
          var(--jh-color-content-primary-enabled)
        );
        font-family: var(--jh-font-heading-medium-3-font-family);
        font-weight: var(--jh-font-heading-medium-3-font-weight);
        font-size: var(--jh-font-heading-medium-3-font-size);
        line-height: var(--jh-font-heading-medium-3-line-height);
        flex: 1 1 auto;
        min-width: 0;
      }
      ::slotted([slot='jh-dialog-header']) {
        margin: 0;
        color: inherit;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        line-height: inherit;
      }
      .dismiss-button {
        flex-shrink: 0;
        margin-inline-start: auto;
      }
      jh-divider {
        margin-top: 0;
        margin-bottom: 0;
      }
      .body {
        padding: 0 var(--jh-dialog-dimension-padding-horizontal, var(--jh-dimension-600));
        color: var(
          --jh-dialog-default-color-text,
          var(--jh-color-content-primary-enabled)
        );
        font-family: var(--jh-font-body-regular-1-font-family);
        font-weight: var(--jh-font-body-regular-1-font-weight);
        font-size: var(--jh-font-body-regular-1-font-size);
        line-height: var(--jh-font-body-regular-1-line-height);
        display: block;
        flex: 1 1 auto;
        min-height: 0;
        overflow-y: auto;
      }
      slot[name='jh-dialog-footer'] {
        color: var(
          --jh-dialog-footer-color-text,
          var(--jh-color-content-secondary-enabled)
        );
        font-family: var(--jh-font-helper-regular-font-family);
        font-weight: var(--jh-font-helper-regular-font-weight);
        font-size: var(--jh-font-helper-regular-font-size);
        line-height: var(--jh-font-helper-regular-line-height);
      }
      :host([show-footer-divider]) .body {
        padding-bottom: var(--jh-dimension-400);
      }
      @media (max-width: 440px) {
        dialog {
          width: 100%;
          height: 100vh;
          height: 100dvh;
          max-width: none;
          max-height: none;
          margin: 0;
          border-radius: var(--jh-dialog-border-radius, 0);
          box-shadow: var(--jh-dialog-shadow, none);
        }
      }
    `;
  }

  static get properties() {
    return {
      dismissButtonAccessibleLabel: {
        type: String,
        attribute: 'dismiss-button-accessible-label',
      },
      footerInset: {
        type: Number,
        attribute: 'footer-inset',
      },
      headerInset: {
        type: Number,
        attribute: 'header-inset',
      },
      open: {
        type: Boolean,
        reflect: true,
      },
      showDismissButton: {
        type: Boolean,
        attribute: 'show-dismiss-button',
        reflect: true,
      },
      showFooterDivider: {
        type: Boolean,
        attribute: 'show-footer-divider',
        reflect: true,
      },
      showHeaderDivider: {
        type: Boolean,
        attribute: 'show-header-divider',
        reflect: true,
      },
      size: {
        type: String,
        reflect: true,
      },
      _isOverflowing: { state: true },
    };
  }

  /** @type {string} */
  #closeMethod = 'programmatic';

  /** @type {boolean} */
  #pointerDownOnBackdrop = false;

  constructor() {
    super();
    /**
     * Adds an aria-label to the dismiss button to assist screen readers.
     * @attr dismiss-button-accessible-label
     * @type {string | null}
     */
    this.dismissButtonAccessibleLabel = null;
    /**
     * Sets the alignment of the left edge of the divider above the footer.
     * @attr footer-inset
     * @type { 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 }
     */
    this.footerInset = 0;
    /**
     * Sets the alignment of the left edge of the divider below the header.
     * @attr header-inset
     * @type { 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 }
     */
    this.headerInset = 0;
    /**
     * Determines whether the dialog is open or closed.
     * @type {boolean}
     */
    this.open = false;
    /**
     * Displays a dismiss button. When true, the dialog can also be closed by clicking the backdrop outside the dialog.
     * @attr show-dismiss-button
     * @type {boolean}
     */
    this.showDismissButton = false;
    /**
     * Adds a divider above the footer to create a clearer definition between the body and footer.
     * @attr show-footer-divider
     * @type {boolean}
     */
    this.showFooterDivider = false;
    /**
     * Adds a divider below the header to create a clearer definition between the header and body.
     * @attr show-header-divider
     * @type {boolean}
     */
    this.showHeaderDivider = false;
    /**
     * Sets the max-width of the dialog container.
     * @type { 'small' | 'medium' | 'large' }
     */
    this.size = 'medium';
    /**
     * @internal
     * @type {boolean}
     */
    this._isOverflowing = false;
  }

  /** @type {ResizeObserver | null} */
  #resizeObserver = null;

  /** @type {HTMLDialogElement | null} */
  get #dialog() {
    return this.shadowRoot?.querySelector('dialog') ?? null;
  }

  /** @type {HTMLElement | null} */
  get #body() {
    return this.shadowRoot?.querySelector('.body') ?? null;
  }

  /**
   * Opens the dialog as a modal.
   */
  show() {
    this.open = true;
  }

  /**
   * Closes the dialog.
   */
  close() {
    this.open = false;
  }

  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    if (this.hasUpdated) {
      this.#observeBody();
    }
  }

  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.#resizeObserver?.disconnect();
    this.#resizeObserver = null;
  }

  /** @protected */
  firstUpdated() {
    this.#observeBody();
  }

  /** @protected */
  updated(changedProperties) {
    if (changedProperties.has('open')) {
      this.#syncOpenState();
    }
  }

  #syncOpenState() {
    const dialog = this.#dialog;
    if (!dialog || !this.isConnected) {
      return;
    }

    if (this.open && !dialog.open) {
      dialog.showModal();
      this.dispatchCustomEvent('jh-open');
    } else if (!this.open && dialog.open) {
      dialog.close();
    }
  }

  #handleCancel() {
    this.#closeMethod = 'escape';
  }

  #handleClose() {
    const closeMethod = this.#closeMethod;
    this.#closeMethod = 'programmatic';
    this.open = false;
    this.dispatchCustomEvent('jh-close', { reference: { closeMethod } });
  }

  #handleDismissal() {
    this.#closeMethod = 'dismiss-button';
    this.open = false;
  }

  // Clicks on the backdrop target the dialog element itself but land outside its bounds.
  #isBackdropEvent(e) {
    const dialog = this.#dialog;
    if (!dialog || e.target !== dialog) {
      return false;
    }
    const rect = dialog.getBoundingClientRect();
    return (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    );
  }

  #handlePointerDown(e) {
    this.#pointerDownOnBackdrop = this.#isBackdropEvent(e);
  }

  // Requires both press and release on the backdrop so drags out of the dialog don't close it.
  #handleClick(e) {
    const startedOnBackdrop = this.#pointerDownOnBackdrop;
    this.#pointerDownOnBackdrop = false;
    if (!this.showDismissButton || !startedOnBackdrop || !this.#isBackdropEvent(e)) {
      return;
    }
    this.#closeMethod = 'backdrop-click';
    this.open = false;
  }

  // Keeps Tab and Shift + Tab focus movement contained within the modal dialog.
  #handleKeydown(e) {
    if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey) {
      return;
    }

    const dialog = this.#dialog;
    if (!dialog?.open) {
      return;
    }

    const tabbables = this.#getTabbableElements(dialog);
    if (tabbables.length === 0) {
      e.preventDefault();
      dialog.focus();
      return;
    }

    const first = tabbables[0];
    const last = tabbables[tabbables.length - 1];
    const index = tabbables.indexOf(this.#getDeepActiveElement());

    if (e.shiftKey && index <= 0) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && (index === -1 || index === tabbables.length - 1)) {
      e.preventDefault();
      first.focus();
    }
  }

  #getDeepActiveElement() {
    let active = document.activeElement;
    while (active?.shadowRoot?.activeElement) {
      active = active.shadowRoot.activeElement;
    }
    return active;
  }

  // Collects tabbable elements in composed tree order, traversing shadow roots and slots.
  #getTabbableElements(root) {
    const tabbables = [];

    const visit = (node) => {
      if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
        return;
      }
      if (node.hasAttribute('inert') || node.hidden) {
        return;
      }

      if (node instanceof HTMLSlotElement) {
        node.assignedElements({ flatten: true }).forEach(visit);
        return;
      }

      if (this.#isTabbable(node)) {
        tabbables.push(node);
      }

      const children = node.shadowRoot ? node.shadowRoot.children : node.children;
      Array.from(children).forEach(visit);
    };

    Array.from(root.children).forEach(visit);
    return tabbables;
  }

  #isTabbable(el) {
    if (el.tabIndex < 0 || el.disabled || el.shadowRoot?.delegatesFocus) {
      return false;
    }
    if (typeof el.checkVisibility === 'function') {
      return el.checkVisibility({ visibilityProperty: true });
    }
    return el.getClientRects().length > 0;
  }

  // Observes the body and its slotted content so overflow is detected when either resizes.
  #observeBody() {
    const body = this.#body;
    if (!body || typeof ResizeObserver === 'undefined') {
      return;
    }

    this.#resizeObserver?.disconnect();
    this.#resizeObserver = new ResizeObserver(() => this.#checkOverflow());
    this.#resizeObserver.observe(body);
    body
      .querySelector('slot')
      ?.assignedElements()
      .forEach((el) => this.#resizeObserver.observe(el));
    this.#checkOverflow();
  }

  #checkOverflow() {
    const body = this.#body;
    this._isOverflowing = !!body && body.scrollHeight > body.clientHeight;
  }

  #handleBodySlotChange() {
    this.#observeBody();
  }

  #checkSlotContent(slot) {
    if (slot.assignedElements().length > 0) {
      return true;
    }

    return slot
      .assignedNodes()
      .some((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '');
  }

  #handleSlotChange(e) {
    const slot = e.target;
    slot.classList.toggle('display-slot', this.#checkSlotContent(slot));
  }

  #handleHeaderSlotChange(e) {
    const hasHeader = this.#checkSlotContent(e.target);
    this.shadowRoot.querySelector('.header').classList.toggle('display-slot', hasHeader);
    if (hasHeader) {
      this.#dialog.setAttribute('aria-labelledby', 'header');
    } else {
      this.#dialog.removeAttribute('aria-labelledby');
    }
  }

  /** @protected */
  render() {
    let dismissBtn;
    let headerDivider;
    let footerDivider;

    if (this.showDismissButton) {
      dismissBtn = html`
        <jh-button
          class="dismiss-button"
          size="small"
          appearance="tertiary"
          accessible-label=${ifDefined(this.dismissButtonAccessibleLabel ?? undefined)}
          @click=${this.#handleDismissal}
        >
          <slot name="jh-dialog-dismiss-icon" slot="jh-button-icon-left">
            <jh-icon-xmark></jh-icon-xmark>
          </slot>
        </jh-button>
      `;
    }

    if (this.showHeaderDivider) {
      headerDivider = html`
        <jh-divider inset=${ifDefined(this.headerInset ?? undefined)}></jh-divider>
      `;
    }

    if (this.showFooterDivider) {
      footerDivider = html`
        <jh-divider inset=${ifDefined(this.footerInset ?? undefined)}></jh-divider>
      `;
    }

    return html`
      <dialog
        part="dialog"
        @cancel=${this.#handleCancel}
        @close=${this.#handleClose}
        @keydown=${this.#handleKeydown}
        @pointerdown=${this.#handlePointerDown}
        @click=${this.#handleClick}
      >
        <slot name="jh-dialog-media" @slotchange=${this.#handleSlotChange}></slot>
        <div class="header">
          <div id="header" class="header-content">
            <slot name="jh-dialog-header" @slotchange=${this.#handleHeaderSlotChange}></slot>
          </div>
          ${dismissBtn}
        </div>
        ${headerDivider}
        <div class="body" tabindex=${ifDefined(this._isOverflowing ? '0' : undefined)}>
          <slot @slotchange=${this.#handleBodySlotChange}></slot>
        </div>
        ${footerDivider}
        <slot name="jh-dialog-footer" @slotchange=${this.#handleSlotChange}></slot>
      </dialog>
    `;
  }
}
JhDialog.register('jh-dialog', JhDialog);