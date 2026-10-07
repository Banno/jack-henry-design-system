// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Cards are content structures that provide an entry point for more complex and detailed information.
 *
 * [Card Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-card--docs)
 * @cssprop --jh-card-color-background - The card background-color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-card-border-radius - The card border-radius. Defaults to `--jh-border-radius-200`.
 * @cssprop --jh-card-color-border - The card border color. Defaults to `--jh-border-decorative-color`.
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
 *
 * @slot default - Use to insert card body content.
 * @slot jh-card-media - Use to insert media content in the top section of the card. User may need to add addtional styling to elements such as border, object-fit, etc.
 * @slot jh-card-header - Use to insert custom card header layout. Default layout includes `headerTitle` and `headerSubtitle` properties.
 * @slot jh-card-footer - Use to insert card footer content.
 *
 * @customElement jh-card
 */
export class JhCard extends JhElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        footerDividerInset: {
            type: NumberConstructor;
            attribute: string;
        };
        headerDividerInset: {
            type: NumberConstructor;
            attribute: string;
        };
        showFooterDivider: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        showHeaderDivider: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        padding: {
            type: StringConstructor;
            reflect: boolean;
        };
        headerSubtitle: {
            type: StringConstructor;
            attribute: string;
        };
        headerTitle: {
            type: StringConstructor;
            attribute: string;
        };
        titleHeadingLevel: {
            type: NumberConstructor;
            attribute: string;
        };
    };
    /**
     * Sets the alignment of the left edge of the divider above the footer.
     * @attr footer-divider-inset
     * @type { 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 | null}
     */
    footerDividerInset: 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 | null;
    /**
     * Sets the alignment of the left edge of the divider below the header.
     * @attr header-divider-inset
     * @type { 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 | null}
     */
    headerDividerInset: 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 | null;
    /**
     * Informs assistive technologies what heading level the card title represents. Defaults to h2.
     * @attr title-heading-level
     * @type {1|2|3|4|5|6}
     */
    titleHeadingLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Sets padding on all slots. Set `padding='none'` to remove padding solely from default slot. To override padding property, set component level token for desired slot.
     * @type { 'small' | 'medium' | 'none' }
     */
    padding: "small" | "medium" | "none";
    /**
     * Adds a divider above the footer to create a clearer definition between the body and footer.
     * @attr show-footer-divider
     * @type {boolean}
     */
    showFooterDivider: boolean;
    /**
     * Adds a divider below the header to create a clearer definition between the header and body.
     * @attr show-header-divider
     * @type {boolean}
     */
    showHeaderDivider: boolean;
    /**
     * Adds additional information about the card below the title.
     * @attr header-subtitle
     * @type {string | null}
     */
    headerSubtitle: string | null;
    /**
     * Provides context for the content of the card.
     * @attr header-title
     * @type {string | null}
     */
    headerTitle: string | null;
    /** @protected */
    protected render(): import("lit").TemplateResult<1>;
    #private;
}
import { JhElement } from '../element/element.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-card': JhCard;
  }
}
