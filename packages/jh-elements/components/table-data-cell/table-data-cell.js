// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';

/**
 * Table Cell
 * 
 * @cssprop --jh-table-data-cell-color-text - The cell text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-table-data-cell-color-background - The cell background color. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-table-data-cell-color-border-top - The cell border top color. Defaults to `transparent`.
 * @cssprop --jh-table-data-cell-color-border-right - The cell border right color. Defaults to `transparent`.
 * @cssprop --jh-table-data-cell-color-border-left - The cell border left color. Defaults to `transparent`.
 * @cssprop --jh-table-data-cell-color-border-bottom - The cell border bottom color. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-data-cell-border-top-width - The cell border top width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-data-cell-border-right-width - The cell border right width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-data-cell-border-left-width - The cell border left width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-data-cell-border-bottom-width - The cell border bottom width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-data-cell-border-top-style - The cell border top style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-data-cell-border-right-style - The cell border right style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-data-cell-border-left-style - The cell border left style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-data-cell-border-bottom-style - The cell border bottom style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-data-cell-space-padding-top - The cell padding top. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-data-cell-space-padding-right - The cell padding right. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-data-cell-space-padding-bottom - The cell padding bottom. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-data-cell-space-padding-left - The cell padding left. Defaults to `--jh-dimension-400`.
 * 
 * @slot default - Use to insert content.
 * 
 * @customElement jh-table-cell
 */
export class JhTableDataCell extends LitElement {

  /** @type {ElementInternals} */
  #internals;

  static get styles() {
    return css`
      :host {
        border-top-color: var(--jh-table-data-cell-color-border-top, transparent);
        border-top-width: var(--jh-table-data-cell-border-top-width, var(--jh-border-decorative-width));
        border-top-style: var(--jh-table-data-cell-border-top-style, var(--jh-border-decorative-style));
        border-right-color: var(--jh-table-data-cell-color-border-right, transparent);
        border-right-width: var(--jh-table-data-cell-border-right-width, var(--jh-border-decorative-width));
        border-right-style: var(--jh-table-data-cell-border-right-style, var(--jh-border-decorative-style));
        border-left-color: var(--jh-table-data-cell-color-border-left, transparent);
        border-left-width: var(--jh-table-data-cell-border-left-width, var(--jh-border-decorative-width));
        border-left-style: var(--jh-table-data-cell-border-left-style, var(--jh-border-decorative-style));
        border-bottom-color: var(--jh-table-data-cell-color-border-bottom, var(--jh-border-decorative-color));
        border-bottom-width: var(--jh-table-data-cell-border-bottom-width, var(--jh-border-decorative-width));
        border-bottom-style: var(--jh-table-data-cell-border-bottom-style, var(--jh-border-decorative-style));
        color: var(--jh-table-data-cell-color-text, var(--jh-color-content-primary-enabled));
        background-color: var(--jh-table-data-cell-color-background, var(--jh-color-container-primary-enabled));
        padding-top: var(--jh-table-data-cell-space-padding-top, var(--jh-dimension-400));
        padding-right: var(--jh-table-data-cell-space-padding-right, var(--jh-dimension-400));
        padding-bottom: var(--jh-table-data-cell-space-padding-bottom, var(--jh-dimension-400));
        padding-left: var(--jh-table-data-cell-space-padding-left, var(--jh-dimension-400));
        vertical-align: var(--vertical-align, top);
        line-height: var(--footer-line-height, var(--jh-font-body-regular-1-line-height));
        font-weight: var(--footer-font-weight, var(--jh-font-body-regular-1-font-weight));          
        font-size: var(--footer-font-size, var(--jh-font-body-regular-1-font-size));      
        font-family: var(--footer-font-family, var(--jh-font-body-regular-1-font-family));
        display: table-cell;
        width: 100%;
      }
      :host([horizontal-align="left"]) {
        text-align: left;
      }
      :host([horizontal-align="center"]) {
        text-align: center;
      }
      :host([horizontal-align="right"]) {
        text-align: right;
      }
    `;
  }

  static get properties() {
    return {
      horizontalAlign: { 
        type: String,
        reflect: true,
        attribute: 'horizontal-align'
      }
    };
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#internals.role = 'cell';
    /** 
     * Sets the horizontal alignment of the content.
     * @attr horizontal-align
     * @type {'left' | 'center' | 'right'} 
     * 
    */
    this.horizontalAlign = 'left';
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('jh-table-data-cell', JhTableDataCell);