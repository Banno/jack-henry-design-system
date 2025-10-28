import { LitElement, css, html } from 'lit';
import '@jack-henry/jh-icons/icons-wc/icon-xmark.js';
import '../button/button.js';
import '../tooltip/tooltip.js';

/**
 * Tag
 * @cssprop --jh-tag-size-max-width - The tag max width. Defaults to `200px`.
 * @cssprop --jh-tag-shadow-focus - The tag box shadow when in focus. Defaults to `--jh-shadow-focus`.
 * @cssprop --jh-tag-border-radius - The tag border radius. Defaults to `--jh-border-radius-pill`.
 * @cssprop --jh-tag-color-background-enabled- The tag background color. Defaults to `--jh-color-container-neutral-enabled`.
 * @cssprop --jh-tag-color-background-focus- The tag background color when focused. Defaults to `--jh-color-container-neutral-hover`.
 * @cssprop --jh-tag-color-background-hover- The tag background color when hovered. Defaults to `--jh-color-container-neutral-hover`.
 * @cssprop --jh-tag-color-background-active- The tag background color when active. Defaults to `--jh-color-container-neutral-active`.
 * @cssprop --jh-tag-color-border-enabled - The tag border color. Defaults to `transparent`.
 * @cssprop --jh-tag-color-border-focus - The tag border color when focused. Defaults to `transparent`.
 * @cssprop --jh-tag-color-border-hover - The tag border color when hovered. Defaults to `transparent`.
 * @cssprop --jh-tag-color-border-active - The tag border color when active. Defaults to `transparent`.
 * @cssprop --jh-tag-icon-color-fill-enabled - The tag icon fill color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-tag-icon-color-fill-focus - The tag icon fill color when focused. Defaults to `--jh-color-content-secondary-hover`.
 * @cssprop --jh-tag-icon-color-fill-hover - The tag icon fill color when hovered. Defaults to `--jh-color-content-secondary-hover`.
 * @cssprop --jh-tag-icon-color-fill-active - The tag icon fill color when active. Defaults to `--jh-color-content-secondary-active`.
 * @cssprop --jh-tag-color-text-enabled - The tag font color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-tag-color-text-focus - The tag font color when focused. Defaults to `--jh-color-content-secondary-hover`.
 * @cssprop --jh-tag-color-text-hover - The tag font color when hovered. Defaults to `--jh-color-content-secondary-hover`.
 * @cssprop --jh-tag-color-text-active - The tag font color when active. Defaults to `--jh-color-content-secondary-active`.
 * @cssprop --jh-tag-dismiss-color-background-enabled - The dismiss button background color. Defaults to `--jh-color-container-neutral-enabled`.
 * @cssprop --jh-tag-dismiss-color-background-focus - The dismiss button background color when focused. Defaults to `--jh-color-container-neutral-hover`.
 * @cssprop --jh-tag-dismiss-color-background-hover - The dismiss button background color when hovered. Defaults to `--jh-color-container-neutral-hover`.
 * @cssprop --jh-tag-dismiss-color-background-active - The dismiss button background color when active. Defaults to `--jh-color-container-neutral-active`.
 * @cssprop --jh-tag-dismiss-color-background-disabled - The dismiss button background color when disabled. Defaults to `--jh-color-container-neutral-enabled`.
 * @cssprop --jh-tag-dismiss-icon-color-fill-enabled - The dismiss button icon fill color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-tag-dismiss-icon-color-fill-focus - The dismiss button icon fill color when focused. Defaults to `--jh-color-content-secondary-hover`.
 * @cssprop --jh-tag-dismiss-icon-color-fill-hover - The dismiss button icon fill color when hovered. Defaults to `--jh-color-content-secondary-hover`.
 * @cssprop --jh-tag-dismiss-icon-color-fill-active - The dismiss button icon fill color when active. Defaults to `--jh-color-content-secondary-active`.
 * @cssprop --jh-tag-dismiss-icon-color-fill-disabled - The dismiss button icon fill color when disabled. Defaults to `--jh-color-content-secondary-enabled`.
 *
 *
 * @slot jh-tag-icon - Use to insert an icon to the left of the tag.
 * @slot jh-tag-dismiss-icon - Use to insert a custom icon within the dismiss button.
 * @event jh-dismiss - Dispatched when the tag is dismissed.
 * @customElement jh-tag
 */
export class JhTag extends LitElement {

  /** @type {?Boolean} */
  #truncationTooltip = false;

  /** @type {?String} */
  #truncationTabindex;

  static get styles() {
    return css`
      :host {
        display: inline-block;
        vertical-align: middle;
        min-width: 0;
      }
      .container {
        background: var(
          --jh-tag-color-background-enabled,
          var(--jh-color-container-neutral-enabled)
        );
        color: var(
          --jh-tag-color-text-enabled,
          var(--jh-color-content-secondary-enabled)
        );
        border-color: var(--jh-tag-color-border-enabled, transparent);
        border-radius: var(
          --jh-tag-border-radius,
          var(--jh-border-radius-pill)
        );
        max-width: var(--jh-tag-size-max-width, 200px);
        font: var(--jh-font-helper-bold);
        column-gap: var(--jh-space-100);
        padding-left: var(--jh-space-200);
        padding-right: var(--jh-space-200);
        box-sizing: border-box;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-style: solid;
        border-width: 1px;
      }
      .label-container {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        min-width: 0;
      }
      a:link,
      a:visited,
      a:hover,
      a:active {
        text-decoration: none;
        color: inherit;
      }
      jh-button {
        --jh-button-border-radius: var(--jh-border-radius-circle);
        --jh-button-color-background-secondary-enabled: var(
          --jh-tag-dismiss-color-background-enabled,
          var(--jh-color-container-neutral-enabled)
        );
        --jh-button-color-background-secondary-focus: var(
          --jh-tag-dismiss-color-background-focus,
          var(--jh-color-container-neutral-hover)
        );
        --jh-button-color-background-secondary-hover: var(
          --jh-tag-dismiss-color-background-hover,
          var(--jh-color-container-neutral-hover)
        );
        --jh-button-color-background-secondary-active: var(
          --jh-tag-dismiss-color-background-active,
          var(--jh-color-container-neutral-active)
        );
        --jh-button-color-background-secondary-disabled: var(
          --jh-tag-dismiss-color-background-disabled,
          var(--jh-color-container-neutral-enabled)
        );
        --jh-button-color-border-secondary-enabled: transparent;
        --jh-button-color-border-secondary-focus: transparent;
        --jh-button-color-border-secondary-hover: transparent;
        --jh-button-color-border-secondary-active: transparent;
        --jh-button-color-border-secondary-disabled: transparent;
        --jh-button-icon-color-fill-secondary-enabled: var(
          --jh-tag-dismiss-icon-color-fill-enabled,
          var(--jh-color-content-secondary-enabled)
        );
        --jh-button-icon-color-fill-secondary-focus: var(
          --jh-tag-dismiss-icon-color-fill-focus,
          var(--jh-color-content-secondary-hover)
        );
        --jh-button-icon-color-fill-secondary-hover: var(
          --jh-tag-dismiss-icon-color-fill-hover,
          var(--jh-color-content-secondary-hover)
        );
        --jh-button-icon-color-fill-secondary-active: var(
          --jh-tag-dismiss-icon-color-fill-active,
          var(--jh-color-content-secondary-active)
        );
        --jh-button-icon-color-fill-secondary-disabled: var(
          --jh-tag-dismiss-icon-color-fill-disabled,
          var(--jh-color-content-secondary-enabled)
        );
        --jh-icon-size-medium: var(--jh-size-400);
        --jh-button-size: 18px;
        align-self: self-start;
      }
      slot[name='jh-tag-icon']::slotted(*) {
        padding: 1px 0;
        flex: 0 0 auto;
      }
      /* sizes */
      :host([size='small']) {
        height: var(--jh-size-500);
      }
      :host([size='medium']) {
        height: var(--jh-size-600);
      }
      :host([size='medium']) jh-button {
        padding: var(--jh-space-50) var(--jh-space-0);;
        padding-right: var(--jh-space-50);
      }

      /* vertical align of button with tooltip */
      jh-tooltip:has(jh-button) {
        align-self: self-start;
      }
      /* padding adjustments */
      .container:has(jh-button) {
        padding-right: var(--jh-space-0);
      }
      .container:has(.label:empty) {
        column-gap: var(--jh-space-50);
      }

      /* ellipsis truncation */
      .label {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 2px 0;
      }

      :host([tabindex]:hover) .container,
      :host([href]:hover) .container {
        background: var(
          --jh-tag-color-background-hover,
          var(--jh-color-container-neutral-hover)
        );
        border-color: var(--jh-tag-color-border-hover, transparent);
        color: var(
          --jh-tag-color-text-hover,
          var(--jh-color-content-secondary-hover)
        );
        cursor: pointer;
      }

      /* focus ring */
      :host([tabindex]:focus-visible) .container,
      .container:has(a:focus-visible) {
        box-shadow: var(--jh-tag-shadow-focus, var(--jh-shadow-focus));
        background: var(
          --jh-tag-color-background-focus,
          var(--jh-color-container-neutral-hover)
        );
        color: var(
          --jh-tag-color-text-focus,
          var(--jh-color-content-secondary-hover)
        );
        border-color: var(--jh-tag-color-border-focus, transparent);
      }

      :host([tabindex]:active) .container,
      :host([href]:active) .container {
        background: var(
          --jh-tag-color-background-active,
          var(--jh-color-container-neutral-active)
        );
        border-color: var(--jh-tag-color-border-active, transparent);
        color: var(
          --jh-tag-color-text-active,
          var(--jh-color-content-secondary-active)
        );
      }
      :host([tabindex]:focus-visible),
      a:focus-visible {
        outline: none;
      }

      /* remove state styles from host when button has a state */
      :host([tabindex]:hover) .container:has(jh-button:hover),
      :host([href]:hover) .container:has(jh-button:hover),
      :host([tabindex]:active) .container:has(jh-button:active),
      :host([href]:active) .container:has(jh-button:active) {
        background: var(
          --jh-tag-color-background-enabled,
          var(--jh-color-container-neutral-enabled)
        );
        color: var(
          --jh-tag-color-text-enabled,
          var(--jh-color-content-secondary-enabled)
        );
        border-color: var(--jh-tag-color-border-enabled, transparent);
      }

      slot[name='jh-tag-icon'],
      :host([tabindex]:hover)
        .container:has(jh-button:hover)
        slot[name='jh-tag-icon'],
      :host([href]:hover)
        .container:has(jh-button:hover)
        slot[name='jh-tag-icon'],
        slot[name='jh-tag-icon'],
      :host([tabindex]:active)
        .container:has(jh-button:active)
        slot[name='jh-tag-icon'],
      :host([href]:active)
        .container:has(jh-button:active)
        slot[name='jh-tag-icon'] {
        --jh-icon-color-fill: var(
          --jh-tag-icon-color-fill-enabled,
          var(--jh-color-content-secondary-enabled)
        );
      }
      :host([tabindex]:hover) slot[name='jh-tag-icon'],
      :host([href]:hover) slot[name='jh-tag-icon'] {
        --jh-icon-color-fill: var(
          --jh-tag-icon-color-fill-hover,
          var(--jh-color-content-secondary-hover)
        );
      }
      :host([tabindex]:active) slot[name='jh-tag-icon'],
      :host([href]:active) slot[name='jh-tag-icon'] {
        --jh-icon-color-fill: var(
          --jh-tag-icon-color-fill-active,
          var(--jh-color-content-secondary-active)
        );
      }
      :host([tabindex]:focus-visible) slot[name='jh-tag-icon'],
      :host([href]:focus-visible) slot[name='jh-tag-icon'] {
        --jh-icon-color-fill: var(
          --jh-tag-icon-color-fill-focus,
          var(--jh-color-content-secondary-hover)
        );
      }
    `;
  }

  static get properties() {
    return {
      /** Describes the intent of the tag. */
      label: {
        type: String,
      },
      /** Adds an aria-label to the dismiss button to assist screen readers. */
      dismissButtonAccessibleLabel: {
        type: String,
        attribute: 'dismiss-button-accessible-label',
      },
      /** Adds a dismiss button to tag. See `remove-on-dismiss` attribute for tag removal.*/
      dismissible: {
        type: Boolean,
      },
      /** Adds a tooltip with this string on the dismiss button. */
      tooltipLabel: {
        type: String,
        attribute: 'tooltip-label',
      },
      /** Sets the size of the tag. */
      size: {
        type: String,
        reflect: true,
      },
      /** Sets the link's destination. */
      href: {
        type: String,
      },
      /** Specifies where to display the linked URL set by the href property. */
      target: {
        type: String,
      },
      /** Removes the tag after the dismiss button is activated. */ 
      removeOnDismiss: {
        type: Boolean,
        attribute: 'remove-on-dismiss'
      },
    };
  }

  constructor() {
    super();
    /** @type {?string} */
    this.label = null;
    /** @type {?Boolean} */
    this.dismissible = false;
    /** @type {?string} */
    this.dismissButtonAccessibleLabel = null;
    /** @type {?string} */
    this.tooltipLabel = null;
    /** @type {'small'| 'medium'} */
    this.size = 'small';
    /** @type {?string} */
    this.href = null;
    /** @type {?string} */
    this.target = null;
    /** @type {?Boolean} */
    this.removeOnDismiss = false;

    this.addEventListener('keyup', this.#handleTruncationTooltip);
    this.addEventListener('keyup', this.#handleClick);
    this.addEventListener('blur', this.#closeTruncationTooltip);
  }

  connectedCallback() {
    super.connectedCallback();
    new ResizeObserver(this.#addTruncationTooltip.bind(this)).observe(this);
  }

  #handleClick(e) {
    if (e.code === 'Space' || e.code === 'Enter') {
      this.click();
    }
  }

  #addTruncationTooltip() {
    if(!this.label) return;
    const oldTooltip = this.#truncationTooltip;
    const label = this.shadowRoot.querySelector('.label');
    //boolean to check if truncation is happening on label
    this.#truncationTooltip = label.offsetWidth < label.scrollWidth;

    if (oldTooltip !== this.#truncationTooltip) {
      //all tags with truncation tooltip have to be interactive so keyboard users can open the tooltip
      //but tabindex is not needed if href is present
      if (this.#truncationTooltip && !this.href) {
        //get tag's existing tabindex to maintain that if tooltip is removed
        this.#truncationTabindex = this.getAttribute('tabindex');
        this.setAttribute('tabindex', '0');
        //when tooltip is removed, reset tabindex to its original state
      } else if (!this.#truncationTooltip) {
        if (this.#truncationTabindex) {
          this.setAttribute('tabindex', this.#truncationTabindex);
         }
         else {
          this.removeAttribute('tabindex');
         }
      }
      this.update();
    }
  }

  #handleTruncationTooltip(e) {
    if (e.target.#truncationTooltip && (e.key === 'Tab' || (e.shiftKey && e.key === 'Tab'))) {
      let tooltip = this.shadowRoot.querySelector('jh-tooltip');
      if (e.composedPath()[0].localName === 'jh-tag' ||e.composedPath()[0].localName === 'a') {
        tooltip.open = !tooltip.open;
      }
      if (e.composedPath()[0].localName === 'button') {
        tooltip.open = false;
      }
    }
  }

  #closeTruncationTooltip(e) {
    if (e.target.#truncationTooltip) {
      let tooltip = this.shadowRoot.querySelector('jh-tooltip');
      tooltip.open = false;
    }
  }

  #handleSlotChange(e) {
    if (e) {
      let iconSlot = this.shadowRoot.querySelector('slot[name="jh-tag-icon"]');
      iconSlot.classList.add('display-icon-slot');
      this.firstElementChild.setAttribute('size', 'x-small');
    }
  }

  #handleDismissal(e) {
    e.stopPropagation();
    this.dispatchEvent(
      new CustomEvent('jh-dismiss', {
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );

    if (this.removeOnDismiss) {
      this.remove();
    }
  }

  #getDismissBtn() {
    let dismissBtn;

    if (this.dismissible) {
      dismissBtn = html`
      <jh-button
        size="medium"
        appearance="secondary"
        accessible-label=${this.dismissButtonAccessibleLabel}
        @click=${this.#handleDismissal}>
        <slot name="jh-tag-dismiss-icon" slot="jh-button-icon">
          <jh-icon-xmark slot="jh-button-icon"></jh-icon-xmark>
        </slot>
      </jh-button>
      `;
    }

    if (this.dismissible && this.tooltipLabel) {
      dismissBtn = html`<jh-tooltip label=${this.tooltipLabel}>${dismissBtn}</jh-tooltip>`;
    }
    return dismissBtn;
  }

  #getContent() {
    let content;
 
    let label = html`<span class="label">${this.label}</span>`;

    if (this.#truncationTooltip) {
      label = html`<jh-tooltip label=${this.label}>${label}</jh-tooltip>`;
    }

    if (this.href) {
      //remove tabindex if set. Href takes precedence.
      this.removeAttribute('tabindex');
      content = html` <a class="label-container" tabindex="0" href=${this.href}>${label}</a>`;
    } else {
      content = html` <div class="label-container">${label}</div>`;
    }
    return content;
  }

  render() {
    return html` 
    <span class="container">
      <slot name="jh-tag-icon" @slotchange=${this.#handleSlotChange}></slot>
      ${this.#getContent()}
      ${this.#getDismissBtn()}
    </span>
    `;
  }
}

customElements.define('jh-tag', JhTag);
