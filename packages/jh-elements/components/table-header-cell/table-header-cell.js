import { LitElement, css, html } from 'lit';
import '@jack-henry/jh-icons/icons-wc/icon-arrow-up-arrow-down.js';
import '@jack-henry/jh-icons/icons-wc/icon-arrow-up-small.js';
import '@jack-henry/jh-icons/icons-wc/icon-arrow-down-small.js';

let id = 0;

/**
 * Table Header Cell
 * 
 * @cssprop --jh-table-header-cell-color-text-enabled - The header cell text color when enabled. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-table-header-cell-color-text-hover - The sortable header cell text color when hovered. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-table-header-cell-color-text-focus - The sortable header cell text color when focused. Defaults to `--jh-color-content-primary-hover`.
 * @cssprop --jh-table-header-cell-color-text-active - The sortable header cell text color when active. Defaults to `--jh-color-content-primary-active`.
 * @cssprop --jh-table-header-cell-color-text-selected - The sortable header cell text color when selected. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-table-header-cell-color-background-enabled - The header cell background color when enabled. Defaults to `--jh-color-container-primary-enabled`.
 * @cssprop --jh-table-header-cell-color-background-hover - The sortable header cell background color when hovered. Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-table-header-cell-color-background-focus - The sortable header cell background color when focused. Defaults to `--jh-color-container-primary-hover`.
 * @cssprop --jh-table-header-cell-color-background-active - The sortable header cell background color when active. Defaults to `--jh-color-container-primary-active`.
 * @cssprop --jh-table-header-cell-color-background-selected - The sortable header cell background color when selected. Defaults to `--jh-color-container-primary-selected`.
 * @cssprop --jh-table-header-cell-color-border-bottom-enabled - The header cell border bottom color when enabled. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-border-bottom-width - The header cell border bottom width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-header-cell-border-bottom-style - The header cell border bottom style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-header-cell-color-border-top-enabled - The header cell border top color when enabled. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-border-top-width - The header cell border top width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-header-cell-border-top-style - The header cell border top style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-header-cell-color-border-left-enabled - The header cell border left color when enabled. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-border-left-width - The header cell border left width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-header-cell-border-left-style - The header cell border left style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-header-cell-color-border-right-enabled - The header cell border right color when enabled. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-border-right-width - The header cell border right width. Defaults to `--jh-border-decorative-width`.
 * @cssprop --jh-table-header-cell-border-right-style - The header cell border right style. Defaults to `--jh-border-decorative-style`.
 * @cssprop --jh-table-header-cell-icon-color-fill-enabled - The sortable header cell icon color when enabled. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-table-header-cell-icon-color-fill-hover - The sortable header cell icon color when hovered. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-table-header-cell-icon-color-fill-focus - The sortable header cell icon color when focused. Defaults to `--jh-color-content-brand-hover`.
 * @cssprop --jh-table-header-cell-icon-color-fill-active - The sortable header cell icon color when active. Defaults to `--jh-color-content-brand-active`.
 * @cssprop --jh-table-header-cell-icon-color-fill-selected - The sortable header cell icon color when selected. Defaults to `--jh-color-content-brand-enabled`.
 * @cssprop --jh-table-header-cell-color-border-bottom-hover - The sortable header cell border bottom color when hovered. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-bottom-focus - The sortable header cell border bottom color when focused. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-bottom-active - The sortable header cell border bottom color when active. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-bottom-selected - The sortable header cell border bottom color when selected. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-top-hover - The sortable header cell border top color when hovered. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-top-focus - The sortable header cell border top color when focused. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-top-active - The sortable header cell border top color when active. Defaults to `--jh-border-decorative-color`. 
 * @cssprop --jh-table-header-cell-color-border-top-selected - The sortable header cell border top color when selected. Defaults to `--jh-border-decorative-color`.
 * @cssprop --jh-table-header-cell-color-border-right-hover - The sortable header cell border right color when hovered. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-color-border-right-focus - The sortable header cell border right color when focused. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-color-border-right-active - The sortable header cell border right color when active. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-color-border-right-selected - The sortable header cell border right color when selected. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-color-border-left-hover - The sortable header cell border left color when hovered. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-color-border-left-focus - The sortable header cell border left color when focused. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-color-border-left-active - The sortable header cell border left color when active. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-color-border-left-selected - The sortable header cell border left color when selected. Defaults to `transparent`.
 * @cssprop --jh-table-header-cell-space-padding-top - The header cell padding top. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-header-cell-space-padding-right - The header cell padding right. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-header-cell-space-padding-bottom - The header cell padding bottom. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-header-cell-space-padding-left - The header cell padding left. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-table-header-cell-color-focus - The header cell outline color when it receives keyboard focus. Defaults to `--jh-border-color-focus`.
 * 
 * @slot jh-table-sorted-ascending - Use to insert a custom icon for ascending sort.
 * @slot jh-table-sorted-descending - Use to insert a custom icon for descending sort.
 * @slot jh-table-sorted-none - Use to insert a custom icon for no sort.
 * @slot default - Use to insert table header text.
 * 
 * @event jh-sort - Dispatched when a sortable header cell is activated. Event payload includes the column, sorted state, and id of the header cell and can be accessed via `e.detail.column`, `e.detail.sorted`, and ` e.detail.id`.  
 * @customElement jh-table-header-cell
 */
export class JhTableHeaderCell extends LitElement {

  /** @type {ElementInternals} */
  #internals;

  static get styles() {
    return css`
      :host {
        border-top-color: var(--jh-table-header-cell-color-border-top-enabled, var(--jh-border-decorative-color));
        border-top-width: var(--jh-table-header-cell-border-top-width, var(--jh-border-decorative-width));
        border-top-style: var(--jh-table-header-cell-border-top-style, var(--jh-border-decorative-style));
        border-right-color: var(--jh-table-header-cell-color-border-right-enabled, transparent);
        border-right-width: var(--jh-table-header-cell-border-right-width, var(--jh-border-decorative-width));
        border-right-style: var(--jh-table-header-cell-border-right-style, var(--jh-border-decorative-style));
        border-left-color: var(--jh-table-header-cell-color-border-left-enabled, transparent);
        border-left-width: var(--jh-table-header-cell-border-left-width, var(--jh-border-decorative-width));
        border-left-style: var(--jh-table-header-cell-border-left-style, var(--jh-border-decorative-style));
        border-bottom-color: var(--jh-table-header-cell-color-border-bottom-enabled, var(--jh-border-decorative-color));
        border-bottom-width: var(--jh-table-header-cell-border-bottom-width, var(--jh-border-decorative-width));
        border-bottom-style: var(--jh-table-header-cell-border-bottom-style, var(--jh-border-decorative-style));
        color: var(--jh-table-header-cell-color-text-enabled, var(--jh-color-content-primary-enabled));
        background-color: var(--jh-table-header-cell-color-background-enabled, var(--jh-color-container-primary-enabled));
        line-height: var(--jh-font-body-bold-1-line-height);
        font-weight: var(--jh-font-body-bold-1-font-weight);          
        font-size: var(--jh-font-body-bold-1-font-size);      
        font-family: var(--jh-font-body-bold-1-font-family);
        --jh-icon-color-fill: var(--jh-table-header-cell-icon-color-fill-enabled, var(--jh-color-content-brand-enabled));
        vertical-align: var(--vertical-align, top);
        display: table-cell;
        box-sizing: border-box;
        width: 100%;
      }
      :host([sortable]:hover) {
        border-bottom-color: var(--jh-table-header-cell-color-border-bottom-hover, var(--jh-border-decorative-color));
        border-top-color: var(--jh-table-header-cell-color-border-top-hover, var(--jh-border-decorative-color));
        border-right-color: var(--jh-table-header-cell-color-border-right-hover, transparent);
        border-left-color: var(--jh-table-header-cell-color-border-left-hover, transparent);
        color: var(--jh-table-header-cell-color-text-hover, var(--jh-color-content-primary-hover));
        background-color: var(--jh-table-header-cell-color-background-hover, var(--jh-color-container-primary-hover));
        --jh-icon-color-fill: var(--jh-table-header-cell-icon-color-fill-hover, var(--jh-color-content-brand-hover));
      }
      :host([sortable]:focus-visible) {
        border-bottom-color: var(--jh-table-header-cell-color-border-bottom-focus, var(--jh-border-decorative-color));
        border-top-color: var(--jh-table-header-cell-color-border-top-focus, var(--jh-border-decorative-color));
        border-right-color: var(--jh-table-header-cell-color-border-right-focus, transparent);
        border-left-color: var(--jh-table-header-cell-color-border-left-focus, transparent);
        color: var(--jh-table-header-cell-color-text-focus, var(--jh-color-content-primary-hover));
        background-color: var(--jh-table-header-cell-color-background-focus, var(--jh-color-container-primary-hover));
        --jh-icon-color-fill: var(--jh-table-header-cell-icon-color-fill-focus, var(--jh-color-content-brand-hover));
        outline-color: var(--jh-table-header-cell-color-focus, var(--jh-border-focus-color));
        outline-width: var(--jh-border-focus-width);
        outline-style: var(--jh-border-focus-style);
        outline-offset: -2px;
      }
      :host([sortable]:active) {
        border-bottom-color: var(--jh-table-header-cell-color-border-bottom-active, var(--jh-border-decorative-color));
        border-top-color: var(--jh-table-header-cell-color-border-top-active, var(--jh-border-decorative-color));
        border-right-color: var(--jh-table-header-cell-color-border-right-active, transparent);
        border-left-color: var(--jh-table-header-cell-color-border-left-active, transparent);
        color: var(--jh-table-header-cell-color-text-active, var(--jh-color-content-primary-active));
        background-color: var(--jh-table-header-cell-color-background-active, var(--jh-color-container-primary-active));
        --jh-icon-color-fill: var(--jh-table-header-cell-icon-color-fill-active, var(--jh-color-content-brand-active));
      }
      :host([sortable][sorted="ascending"]), 
      :host([sortable][sorted="descending"]) {
        border-bottom-color: var(--jh-table-header-cell-color-border-bottom-selected, var(--jh-border-decorative-color));
        border-top-color: var(--jh-table-header-cell-color-border-top-selected, var(--jh-border-decorative-color));
        border-right-color: var(--jh-table-header-cell-color-border-right-selected, transparent);
        border-left-color: var(--jh-table-header-cell-color-border-left-selected, transparent);
        color: var(--jh-table-header-cell-color-text-selected, var(--jh-color-content-primary-enabled));
        background-color: var(--jh-table-header-cell-color-background-selected, var(--jh-color-container-primary-selected));
        --jh-icon-color-fill: var(--jh-table-header-cell-icon-color-fill-selected, var(--jh-color-content-brand-enabled));
      }
      button {
        all: unset;
        cursor: pointer;
      }
      .sortable-header {
        gap: var(--jh-dimension-200);
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        justify-content: space-between;
      }
      .fixed-header,
      .sortable-header {
        padding-top: var(--jh-table-header-cell-space-padding-top, var(--jh-dimension-400));
        padding-right: var(--jh-table-header-cell-space-padding-right, var(--jh-dimension-400));
        padding-bottom: var(--jh-table-header-cell-space-padding-bottom, var(--jh-dimension-400));
        padding-left: var(--jh-table-header-cell-space-padding-left, var(--jh-dimension-400));
      }
      .header-text {
        align-self: var(--flex-vertical-align, flex-start);
        display: block;
        width: 100%;
      }
      button:focus-visible {
        outline: none;
      }
      :host([horizontal-align="left"]) .header-text, 
      :host([horizontal-align="left"]) .fixed-header {
        text-align: left;
      }
      :host([horizontal-align="center"]) .header-text, 
      :host([horizontal-align="center"]) .fixed-header {
        text-align: center;
      }
      :host([horizontal-align="right"]) .header-text, 
      :host([horizontal-align="right"]) .fixed-header {
        text-align: right;
      }
      slot[name^='jh-table-sorted-'] *, slot[name^='jh-table-sorted-']::slotted(*) {
        flex: 0 0 auto;
      }
    `;
  }

  static get properties() {
    return {
      horizontalAlign: { 
        type: String,
        reflect: true,
        attribute: 'horizontal-align'
      },
      sortable: { 
        type: Boolean,
        reflect: true
      },
      sorted: { 
        type: String,
        reflect: true
      },
    };
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#internals.role = 'columnheader';
    /** 
     * Sets the horizontal alignment of the content.
     * @attr horizontal-align
     * @type {'left' | 'center' | 'right'} 
     */
    this.horizontalAlign = 'left';
    /** 
     * Makes a column sortable.
     * @attr sortable
    * @type {boolean} 
    */
    this.sortable = false;
    /** 
     * Sets the order in which the items in the column are sorted.
     * @attr sorted
    * @type {'none' | 'ascending' | 'descending'} 
    */
    this.sorted = 'none';
  }

  connectedCallback() {
    super.connectedCallback();
    /** @ignore */
    this.id = `table-header-${id++}`;
    if (this.sortable) {
    this.setAttribute('tabindex', '0');
    this.setAttribute('aria-sort', this.sorted);
    this.addEventListener('click', this.#handleSort);
    this.addEventListener('keydown', this.#handleKeydown);
    } else {
      this.sorted = null;
    }
  }
  #handleKeydown(e) {
    if (e.code === 'Space'|| e.code === 'Enter') {
      e.preventDefault();
      this.#handleSort();
    }
  }

  #handleSort() {
    if (this.sorted==='none') {
      this.sorted = 'ascending';
    } else if (this.sorted==='ascending') {
      this.sorted = 'descending';
    } else {
      this.sorted = 'none';
    }
    
    this.setAttribute('aria-sort', this.sorted);

    this.dispatchEvent(
      new CustomEvent('jh-sort', {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          column: this,
          sorted: this.sorted,
          id: this.id,
        },
      })
    );
  }

  #getSortingIcon() {
    if (!this.sortable) {
      return;
    }
    switch (this.sorted) {
      case 'ascending':
        return html`
        <slot name="jh-table-sorted-ascending" class="icon-slot">
          <jh-icon-arrow-up-small>
          </jh-icon-arrow-up-small>
        </slot>
        `;
      case 'descending':
        return html`
        <slot name="jh-table-sorted-descending" class="icon-slot">
          <jh-icon-arrow-down-small>
          </jh-icon-arrow-down-small>
        </slot>  
        `;
      case 'none':
        return html`
        <slot name="jh-table-sorted-none" class="icon-slot">
          <jh-icon-arrow-up-arrow-down>
          </jh-icon-arrow-up-arrow-down>
        </slot>
        `;
    }
  } 

  render() {
    return this.sortable ? 
    html`
    <button class="sortable-header" tabindex="-1">
      <div class="header-text"><slot></slot></div>
    ${this.#getSortingIcon()}
  </button>` : 
  html`
  <div class="fixed-header">
    <slot></slot>
    </div>`;
    }
}

customElements.define('jh-table-header-cell', JhTableHeaderCell);