import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../divider/divider.js';

/**
 * @cssprop --jh-card-color-background - The card background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-card-border-radius - The card border-radius. Defaults to `--jh-border-radius-400`.
 * @cssprop --jh-card-shadow - The card box-shadow. Defaults to `--jh-shadow-low`.
 * @cssprop --jh-card-media-aspect-ratio - The media slot aspect-ratio. Defaults to `auto`.
 * @cssprop --jh-card-media-space-padding - The media slot padding. Defaults to `0`.
 * @cssprop --jh-card-header-color-text - The header text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-card-header-space-padding - The header slot padding. Defaults to `--jh-dimension-400 --jh-dimension-600 0`. When `padding="small"`, defaults to
 * `--jh-dimension-400 --jh-dimension-400 0`. When `padding="small"` and `show-header-divider`, defaults to `--jh-dimension-400`. When `padding="medium"` or
 * `padding="none'` and `show-header-divider`, defaults to `--jh-dimension-400 --jh-dimension-600`.
 * @cssprop --jh-card-default-color-text - The default slot text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-card-default-space-padding - The default slot padding. Defaults to `--jh-dimension-400 --jh-dimension-600`. When `padding="small"`, defaults
 * to `--jh-dimension-400`. When `padding="none"`, defaults to `--jh-dimension-400 0`.
 * @cssprop --jh-card-footer-color-text - The footer slot text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @cssprop --jh-card-footer-space-padding - The footer slot padding. Defaults to `0 --jh-dimension-600 --jh-dimension-400`. When `padding="small"`, defaults to
 * `0 --jh-dimension-400 --jh-dimension-400`. When `padding="small"` and `show-footer-divider`, defaults to `--jh-dimension-400`. When `padding="medium"` or
 * `padding="none"` and `show-footer-divider`, defaults to `--jh-dimension-400 --jh-dimension-600`.
 * @cssprop --jh-card-header-title-color-text - The header title text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-card-header-subtitle-color-text - The header subtitle text color. Defaults to `--jh-color-content-secondary-enabled`.
 * @slot default - Use to insert card body content.
 * @slot jh-card-media - Use to insert media content in the top section of the card. User may need to add addtional styling to elements such as border, object-fit, etc.
 * @slot jh-card-header - Use to insert custom card header layout. Default layout includes `headerTitle` and `headerSubtitle` properties.
 * @slot jh-card-footer - Use to insert card footer content.
 * @customElement jh-card
 */
export class JhCard extends LitElement {
  static get styles() {
    return css`
      :host {
        --border-radius: var(--jh-border-radius-400);
        background-color: var(
          --jh-card-color-background,
          var(--jh-color-container-primary-enabled)
        );
        border-radius: var(
          --jh-card-border-radius,
          var(--border-radius)
        );
        box-shadow: var(--jh-card-shadow, var(--jh-shadow-low));
        word-break: break-word;
        display: block;
      }
      .display-slot {
        display: block;
      }
      slot[name='jh-card-media'] {
        padding: var(--jh-card-media-space-padding, 0);
        border-radius: var(--border-radius) var(--border-radius) 0 0;
        overflow: hidden;
      }
      ::slotted([slot='jh-card-media']) {
        aspect-ratio: var(--jh-card-media-aspect-ratio, auto);
        width: 100%;
      }
      ::slotted([slot='jh-card-header']) {
        color: var(
          --jh-card-header-color-text,
          var(--jh-color-content-primary-enabled)
        );
        font-family: var(--jh-font-heading-medium-3-font-family);
        font-weight: var(--jh-font-heading-medium-3-font-weight);
        font-size: var(--jh-font-heading-medium-3-font-size);
        line-height: var(--jh-font-heading-medium-3-line-height);
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: var(
          --jh-card-header-title-color-text,
          var(--jh-color-content-primary-enabled)
        );
        font-family: var(--jh-font-heading-medium-3-font-family);
        font-weight: var(--jh-font-heading-medium-3-font-weight);
        font-size: var(--jh-font-heading-medium-3-font-size);
        line-height: var(--jh-font-heading-medium-3-line-height);
        margin: 0;
      }
      p {
        color: var(
          --jh-card-header-subtitle-color-text,
          var(--jh-color-content-secondary-enabled)
        );
        font-family: var(--jh-font-body-regular-1-font-family);
        font-weight: var(--jh-font-body-regular-1-font-weight);
        font-size: var(--jh-font-body-regular-1-font-size);
        line-height: var(--jh-font-body-regular-1-line-height);
        margin: 0;
      }
      slot:not([name]) {
        color: var(
          --jh-card-default-color-text,
          var(--jh-color-content-primary-enabled)
        );
        font-family: var(--jh-font-body-regular-1-font-family);
        font-weight: var(--jh-font-body-regular-1-font-weight);
        font-size: var(--jh-font-body-regular-1-font-size);
        line-height: var(--jh-font-body-regular-1-line-height);
      }
      ::slotted([slot='jh-card-footer']) {
        color: var(
          --jh-card-footer-color-text,
          var(--jh-color-content-secondary-enabled)
        );
        font-family: var(--jh-font-helper-regular-font-family);
        font-weight: var(--jh-font-helper-regular-font-weight);
        font-size: var(--jh-font-helper-regular-font-size);
        line-height: var(--jh-font-helper-regular-line-height);
      }
      .card-header-divider,
      .card-footer-divider {
        margin-top: 0px;
        margin-bottom: 0px;
      }
      /* padding */
      :host([padding='small']) .display-header,
      :host([padding='small']) slot[name='jh-card-header'] {
        padding: var(
          --jh-card-header-space-padding,
          var(--jh-dimension-400) var(--jh-dimension-400) 0
        );
      }
      :host([padding='none']) .display-header,
      :host([padding='medium']) .display-header,
      :host([padding='none']) slot[name='jh-card-header'],
      :host([padding='medium']) slot[name='jh-card-header'] {
        padding: var(
          --jh-card-header-space-padding,
          var(--jh-dimension-400) var(--jh-dimension-600) 0
        );
      }
      :host([padding='none']) slot:not([name]) {
        padding: var(--jh-card-default-space-padding, var(--jh-dimension-400) 0);
      }
      :host([padding='small']) slot:not([name]) {
        padding: var(--jh-card-default-space-padding, var(--jh-dimension-400));
      }
      :host([padding='medium']) slot:not([name]) {
        padding: var(
          --jh-card-default-space-padding,
          var(--jh-dimension-400) var(--jh-dimension-600)
        );
      }
      :host([padding='small']) slot[name='jh-card-footer'] {
        padding: var(
          --jh-card-footer-space-padding,
          0 var(--jh-dimension-400) var(--jh-dimension-400)
        );
      }
      :host([padding='none']) slot[name='jh-card-footer'],
      :host([padding='medium']) slot[name='jh-card-footer'] {
        padding: var(
          --jh-card-footer-space-padding,
          0 var(--jh-dimension-600) var(--jh-dimension-400)
        );
      }
      /* dividers and padding */
      :host([show-header-divider][padding='small']) .display-header,
      :host([show-header-divider][padding='small']) slot[name='jh-card-header'] {
        padding: var(--jh-card-header-space-padding, var(--jh-dimension-400));
      }
      :host([show-header-divider][padding='none']) .display-header,
      :host([show-header-divider][padding='medium']) .display-header,
      :host([show-header-divider][padding='none']) slot[name='jh-card-header'],
      :host([show-header-divider][padding='medium']) slot[name='jh-card-header'] {
        padding: var(
          --jh-card-header-space-padding,
          var(--jh-dimension-400) var(--jh-dimension-600)
        );
      }
      :host([show-footer-divider][padding='small']) slot[name='jh-card-footer'] {
        padding: var(--jh-card-footer-space-padding, var(--jh-dimension-400));
      }
      :host([show-footer-divider][padding='none']) slot[name='jh-card-footer'],
      :host([show-footer-divider][padding='medium']) slot[name='jh-card-footer'] {
        padding: var(
          --jh-card-footer-space-padding,
          var(--jh-dimension-400) var(--jh-dimension-600)
        );
      }
    `;
  }

  static get properties() {
    return {
      /** Sets the alignment of the left edge of the divider above the footer. */
      footerDividerInset: {
        type: Number,
        attribute: 'footer-divider-inset',
      },
      /** Sets the alignment of the left edge of the divider below the header. */
      headerDividerInset: {
        type: Number,
        attribute: 'header-divider-inset',
      },
      /** Adds a divider above the footer to create a clearer definition between the body and footer.  */
      showFooterDivider: {
        type: Boolean,
        attribute: 'show-footer-divider',
        reflect: true,
      },
      /** Adds a divider below the header to create a clearer definition between the header and body.  */
      showHeaderDivider: {
        type: Boolean,
        attribute: 'show-header-divider',
        reflect: true,
      },
      /** Sets padding on all slots. Set `padding='none'` to remove padding solely from default slot. To override padding property, set component level token for desired slot.*/
      padding: {
        type: String,
        reflect: true,
      },
      /** Adds additional information about the card below the title.  */
      headerSubtitle: { 
        type: String,
        attribute: 'header-subtitle',
       },
      /** Provides context for the content of the card.  */
      headerTitle: { 
        type: String,
        attribute: 'header-title',
       },
      /** Informs assistive technologies what heading level the card title represents. Defaults to h2.  */
      titleHeadingLevel: {
        type: Number,
        attribute: 'title-heading-level',
      },
    };
  }
  
  constructor() {
    super();
    /** @type {0|8|16|24|32|40|48|56|64|72|80|88|96} */
    this.footerDividerInset = null;
    /** @type {0|8|16|24|32|40|48|56|64|72|80|88|96} */
    this.headerDividerInset = null;
    /** @type {1|2|3|4|5|6} */
    this.titleHeadingLevel = 2;
    /** @type {'small'|'medium'|'none'} */
    this.padding = 'medium';
    /** @type {boolean} */
    this.showFooterDivider = false;
    /** @type {boolean} */
    this.showHeaderDivider = false;
    /** @type {?string} */
    this.headerSubtitle = null;
    /** @type {?string} */
    this.headerTitle = null;
  }

  #getTitle() {
    switch (this.titleHeadingLevel) {
      case 1:
        return html`<h1>${this.headerTitle}</h1>`;
      case 2:
        return html`<h2>${this.headerTitle}</h2>`;
      case 3:
        return html`<h3>${this.headerTitle}</h3>`;
      case 4:
        return html`<h4>${this.headerTitle}</h4>`;
      case 5:
        return html`<h5>${this.headerTitle}</h5>`;
      case 6:
        return html`<h6>${this.headerTitle}</h6>`;
      default:
        return html`<h2>${this.headerTitle}</h2>`;
    }
  }

  #handleSlotChange(e) {
    e.target.classList.add("display-slot");
  }

  render() {
    let cardHeader;
    let headerDivider;
    let footerDivider;

    if (this.headerTitle || this.headerSubtitle) {
      cardHeader = html`
        <div class="display-header">
          ${this.headerTitle ? this.#getTitle() : null}
          ${this.headerSubtitle ? html`<p>${this.headerSubtitle}</p>` : null}
        </div>
      `;
    }

    if (this.showHeaderDivider) {
      headerDivider = html`
        <jh-divider
          class="card-header-divider"
          inset=${ifDefined(
            this.headerDividerInset ? this.headerDividerInset : null
          )}
        >
        </jh-divider>
      `;
    }

    if (this.showFooterDivider) {
      footerDivider = html`
        <jh-divider
          class="card-footer-divider"
          inset=${ifDefined(
            this.footerDividerInset ? this.footerDividerInset : null
          )}
        >
        </jh-divider>
      `;
    }

    return html`
      <slot name="jh-card-media" @slotchange=${this.#handleSlotChange}></slot>
      <slot name="jh-card-header" @slotchange=${this.#handleSlotChange}>${cardHeader}</slot>
      ${headerDivider}
      <slot @slotchange=${this.#handleSlotChange}></slot>
      ${footerDivider}
      <slot name="jh-card-footer" @slotchange=${this.#handleSlotChange}></slot>
    `;
  }
}

customElements.define('jh-card', JhCard);
