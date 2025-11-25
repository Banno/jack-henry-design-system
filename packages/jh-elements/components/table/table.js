// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../table-header-cell/table-header-cell.js';
import '../table-data-cell/table-data-cell.js';
import '../table-row/table-row.js';

let id = 0;

/**
 * Table
 * @cssprop --jh-table-color-text-striped-enabled - The striped row text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-table-color-background-striped-enabled - The striped row background color. Defaults to `--jh-color-container-neutral-enabled`.
 * @cssprop --jh-table-color-text-striped-hover - The striped row text color on hover. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-table-color-background-striped-hover - The striped row background color on hover. Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-table-space-padding-vertical-medium - The vertical padding for medium padding for table-data-cells and table-header-cells. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-space-padding-vertical-small - The vertical padding for small padding for table-data-cells and table-header-cells. Defaults to `--jh-dimension-200`.
 * @cssprop --jh-table-caption-color-text - The caption text color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-table-color-focus - The outline color when the scrollable table receives keyboard focus. Defaults to `--jh-border-focus-color`.
 * 
 * @slot default - Use to insert table body.
 * @slot jh-table-header - Use to insert table header row.
 * @slot jh-table-footer - Use to insert table footer row.
 * @slot jh-table-caption - Use to insert table caption.
 * @slot jh-table-pagination - Use to insert pagination.
 * @slot jh-table-toolbar - Use to insert toolbar.
 * @customElement jh-table
 */
export class JhTable extends LitElement {
  /** @type {?Number} */
  #id;

  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        max-height: 100%;
      }
      .table {
        display: table;
        table-layout: fixed;
        width: 100%;
        height: 100%;
      }

      /* vertical scroll styles for non-scrollable */
      .table-wrapper {
        position: relative;
        overflow: auto;
        flex: 1 1 auto;
      }
      :host([vertical-align='top']) {
        --vertical-align: top;
        --flex-vertical-align: flex-start;
      }
      :host([vertical-align='middle']) {
        --vertical-align: middle;
        --flex-vertical-align: center;
      }
      :host([vertical-align='bottom']) {
        --vertical-align: bottom;
        --flex-vertical-align: flex-end;
      }
      :host([striped]) .body::slotted(jh-table-row:nth-child(even)) {
        --jh-table-row-color-text-enabled: var(
          --jh-table-color-text-striped-enabled);
        --jh-table-row-color-background-enabled: var(
          --jh-table-color-background-striped-enabled,
          var(--jh-color-container-neutral-enabled)
        );
      }
      :host([striped]) .body::slotted(jh-table-row:nth-child(even):hover) {
        --jh-table-row-color-text-hover: var(
          --jh-table-color-text-striped-hover);
        --jh-table-row-color-background-hover: var(
          --jh-table-color-background-striped-hover,
          var(--jh-color-container-neutral-hover)
        );
      }
      :host([padding='medium']) {
        --jh-table-data-cell-space-padding-top: var(
          --jh-table-space-padding-vertical-medium
        );
        --jh-table-data-cell-space-padding-bottom: var(
          --jh-table-space-padding-vertical-medium
        );
        --jh-table-header-cell-space-padding-top: var(
          --jh-table-space-padding-vertical-medium
        );
        --jh-table-header-cell-space-padding-bottom: var(
          --jh-table-space-padding-vertical-medium
        );
      }
      :host([padding='small']) {
        --jh-table-data-cell-space-padding-top: var(
          --jh-table-space-padding-vertical-small,
          var(--jh-dimension-200)
        );
        --jh-table-data-cell-space-padding-bottom: var(
          --jh-table-space-padding-vertical-small,
          var(--jh-dimension-200)
        );
        --jh-table-header-cell-space-padding-top: var(
          --jh-table-space-padding-vertical-small,
          var(--jh-dimension-200)
        );
        --jh-table-header-cell-space-padding-bottom: var(
          --jh-table-space-padding-vertical-small,
          var(--jh-dimension-200)
        );
      }
      .header {
        display: table-header-group;
      }
      .body {
        display: table-row-group;
      }
      .footer {
        display: table-footer-group;
        /* these have to be passed down into the table-data-cell, can't target them directly from here because nested in slot */
        --footer-line-height: var(--jh-font-body-bold-1-line-height);
        --footer-font-weight: var(--jh-font-body-bold-1-font-weight);
        --footer-font-size: var(--jh-font-body-bold-1-font-size);
        --footer-font-family: var(--jh-font-body-bold-1-font-family);
      }
      :host([sticky-header]) .header {
        position: sticky;
        top: 0;
      }
      :host([sticky-footer]) .footer {
        --jh-table-data-cell-color-border-top: var(
          --jh-border-decorative-color
        );
        position: sticky;
        bottom: 0;
      }
      :host([sticky-footer]) .body::slotted(jh-table-row:nth-last-of-type(2)) {
        --jh-table-data-cell-color-border-bottom: transparent;
      }

      .display-caption {
        color: var(
          --jh-table-caption-color-text,
          var(--jh-color-content-primary-enabled)
        );
        line-height: var(--jh-font-heading-bold-1-line-height);
        font-weight: var(--jh-font-heading-bold-1-font-weight);
        font-size: var(--jh-font-heading-bold-1-font-size);
        font-family: var(--jh-font-heading-bold-1-font-family);
        margin-bottom: var(--jh-dimension-200);
        flex: 0 0 auto;
        display: block;
      }
      .display-toolbar {
        margin-bottom: var(--jh-dimension-200);
        flex: 0 0 auto;
        display: block;
      }
      .display-pagination {
        margin-top: var(--jh-dimension-200);
        flex: 0 0 auto;
        display: block;
      }

      /* horizontal scrollable styles */
      :host([scrollable]) .table-wrapper {
        position: relative;
        overflow-x: hidden;
        flex: 1 1 auto;
        /* display grid makes sticky work and shadows go till bottom. */
        display: grid;
      }

      :host([scrollable]) .table-container {
        overflow: scroll;
        height: 100%;
        /* removes bouncy scroll behavior in Safari and FF */
        /* overscroll-behavior: none; */
      }
      :host([scrollable]) .scrollable {
        width: auto;
        position: relative;
      }
      .table-wrapper:has(.table-container:focus-visible) {
        outline-color: var(
          --jh-table-color-focus,
          var(--jh-border-focus-color)
        );
        outline-width: var(--jh-border-focus-width);
        outline-style: var(--jh-border-focus-style);
      }
      .table-wrapper:focus-visible {
        outline: none;
      }
    `;
  }

  static get properties() {
    return {
      verticalAlign: {
        type: String,
        reflect: true,
        attribute: 'vertical-align',
      },
      striped: {
        type: Boolean,
        reflect: true,
      },
      padding: {
        type: String,
        reflect: true,
      },
      accessibleLabel: {
        type: String,
        attribute: 'accessible-label',
      },
      stickyHeader: {
        type: Boolean,
        reflect: true,
        attribute: 'sticky-header',
      },
      stickyFooter: {
        type: Boolean,
        reflect: true,
        attribute: 'sticky-footer',
      },
      scrollable: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    /**
     * Sets the vertical alignment for each table cell.
     * @attr vertical-align
     * @type {'top' | 'middle' | 'bottom'}
     */
    this.verticalAlign = 'top';
    /**
     * Applies alternating background colors to rows.
     * @attr striped
     * @type {Boolean}
     */
    this.striped = false;
    /**
     * Adjusts the padding between the rows.
     * @attr padding
     * @type {'medium' | 'small'}
     *
     */
    this.padding = 'medium';
    /**
     * Sets an `aria-label` to assist screen reader users when no visible caption is present.
     * @attr accessible-label
     * @type {String}
     */
    this.accessibleLabel = null;
    /**
     * Allows the header row to remain visible while scrolling.
     * @attr sticky-header
     * @type {Boolean}
     */
    this.stickyHeader = false;
    /**
     * Allows the footer row to remain visible while scrolling.
     * @attr sticky-footer
     * @type {Boolean}
     */
    this.stickyFooter = false;
    /**
     * Makes the table horizontally scrollable on smaller screens.
     * @attr scrollable
     * @type {Boolean}
     */
    this.scrollable = false;

    this.addEventListener('jh-sort', this.#handleSort);
  }

  connectedCallback() {
    super.connectedCallback();
    this.#id = id++;
  }

  async firstUpdated() {
    if (!this.scrollable) return;

    const container = this.shadowRoot.querySelector('.table-container');
    let scrollTable = this.shadowRoot.querySelector('.table');
    await scrollTable.updateComplete;
    let originalTableWidth = scrollTable.getBoundingClientRect().width;

    this.observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        let table = entry.target.shadowRoot.querySelector('.table');
        let tableContainer =
          entry.target.shadowRoot.querySelector('.table-container');
        if (table.scrollWidth > tableContainer.clientWidth) {
          table.classList.add('scrollable');
        } else {
          if (table.scrollWidth >= originalTableWidth) {
            table.classList.remove('scrollable');
            tableContainer.removeAttribute('tabindex');
          } else {
            table.classList.add('scrollable');
            tableContainer.setAttribute('tabindex', '0');
          }
        }
      });
    });

    this.observer.observe(this);
  }

  #handleSlot(e) {
    if (e.target.name === 'jh-table-pagination') {
      e.target.classList.add('display-pagination');
    }
    if (e.target.name === 'jh-table-toolbar') {
      e.target.classList.add('display-toolbar');
    }
    if (e.target.name === 'jh-table-caption') {
      e.target.classList.add('display-caption');
    }
  }

  //resets the sort state of all other header cells
  #handleSort(e) {
    const headerCells = this.shadowRoot
      .querySelector('slot.header')
      .assignedElements({ flatten: true })[0].children;
    for (const cell of headerCells) {
      if (cell.hasAttribute('sortable') && cell.id !== e.detail.id) {
        cell.sorted = 'none';
        cell.setAttribute('aria-sort', cell.sorted);
      }
    }
  }

  render() {
    return html`
      <slot name="jh-table-caption" id="table-caption-${this.#id}" @slotchange=${this.#handleSlot}></slot>
      <slot name="jh-table-toolbar" @slotchange=${this.#handleSlot}></slot>
      <div class="table-wrapper">
        <div class="table-container" tabindex="${ifDefined(this.scrollable ? '0' : null)}">
          <div class="table ${this.scrollable ? 'scrollable' : ''}" role="table" 
          aria-labelledby="table-caption-${this.#id}" aria-label=${ifDefined(this.accessibleLabel === '' ? null : this.accessibleLabel)}>
            <slot name="jh-table-header" class="header" role="rowgroup"></slot>
            <slot class="body" role="rowgroup"></slot>
            <slot name="jh-table-footer" class="footer" role="rowgroup"></slot>
          </div>
        </div>
      </div>
      <slot name="jh-table-pagination" @slotchange=${this.#handleSlot}></slot>
    `;
  }
}

customElements.define('jh-table', JhTable);