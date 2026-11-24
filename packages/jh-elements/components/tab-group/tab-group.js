/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../button/button.js';
import '../tab/tab.js';
import '../tab-panel/tab-panel.js';
import '@jack-henry/jh-icons/icons-wc/icon-chevron-left.js';
import '@jack-henry/jh-icons/icons-wc/icon-chevron-right.js';
import { JhElement } from '../element/element.js';

/**
 * Tab groups provide a way to navigate between multiple groups of related content within the same context.
 *
 * [Tab Group Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-tab-tab-group--docs)
 * 
 * @cssprop --jh-tab-group-list-color-border - The color of the border below the tab list. Defaults to `--jh-border-decorative-color`.
 *
 * @slot default - Use to insert `jh-tab-panel` elements. Each panel is matched to the tab in the same position.
 * @slot jh-tab-group-tabs - Use to insert `jh-tab` elements.
 *
 * @event jh-change - Dispatched when the user selects a different tab. Event payload includes the index of the selected tab and can be accessed via `e.detail.state.selectedIndex`. The selected tab and its panel can be accessed via `e.detail.reference.tab` and `e.detail.reference.panel`.
 *
 * @customElement jh-tab-group
 */
export class JhTabGroup extends JhElement {
  // check whether the tabs are overflowing.
  #resizeObserver = new ResizeObserver(() => {
    requestAnimationFrame(() => this.#updateOverflow());
  });
  // keeps the selected tab in sync if it is changed programmatically (i.e. no jh-activate is dispatched)
  #mutationObserver = new MutationObserver(() =>
    this.#handleSelectedChange()
  );
  /** @type {HTMLElement | null} */
  #selectedTab = null;

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        min-width: 0;
      }
      .nav {
        display: flex;
        align-items: flex-start;
        gap: var(--jh-dimension-200);
      }
      .tab-list-wrapper {
        box-sizing: border-box;
        flex: 1 1 0;
        min-width: 0;
        border-bottom-style: var(--jh-border-decorative-style);
        border-bottom-width: var(--jh-border-decorative-width);
        border-bottom-color: var(
          --jh-tab-group-list-color-border,
          var(--jh-border-decorative-color)
        );
      }
      .tab-list {
        /* the padding keeps the tabs' focus outline from being clipped by the overflow, the negative margin cancels its effect on layout */
        --tab-list-inset: var(--jh-dimension-100);
        overflow: hidden;
        padding: var(--tab-list-inset);
        margin: calc(-1 * var(--tab-list-inset));
      }
      .tabs {
        display: flex;
        gap: var(--jh-dimension-200);
        width: max-content;
        min-width: 100%;
      }

      /* overflow controls: jh-button, pointer-only. Only rendered while the tabs overflow. */
      .nav-control {
        flex: none;
      }
    `;
  }

  static get properties() {
    return {
      accessibleLabel: {
        type: String,
        attribute: 'accessible-label',
      },
      _overflowing: {
        type: Boolean,
        state: true,
      },
    };
  }

  constructor() {
    super();
    /**
     * Sets an `aria-label` on the tab list to assist screen reader users.
     * @attr accessible-label
     * @type {string | null}
     */
    this.accessibleLabel = null;
    /** @internal @type {boolean} */
    this._overflowing = false;

    // jh-activate does not bubble, so listen during the capture phase.
    this.addEventListener('jh-activate', this.#handleActivate, true);
    this.addEventListener('keydown', this.#handleKeydown);
    this.addEventListener('focusout', this.#handleFocusOut);
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.hasUpdated) {
      this.#observe();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#resizeObserver.disconnect();
    this.#mutationObserver.disconnect();
  }

  /** @protected */
  firstUpdated() {
    this.#observe();
  }

  get #tabList() {
    return this.renderRoot?.querySelector('.tab-list') ?? null;
  }

  get #tabs() {
    const slot = this.renderRoot?.querySelector('slot[name="jh-tab-group-tabs"]');
    return slot?.assignedElements().filter((el) => el.localName === 'jh-tab') ?? [];
  }

  get #panels() {
    const slot = this.renderRoot?.querySelector('slot:not([name])');
    return slot?.assignedElements().filter((el) => el.localName === 'jh-tab-panel') ?? [];
  }

  // the room kept inside the tab list for focus outlines
  get #tabListInset() {
    const tabList = this.#tabList;
    return tabList ? parseFloat(getComputedStyle(tabList).paddingLeft) || 0 : 0;
  }

  #observe() {
    const tabList = this.#tabList;
    if (!tabList) return;

    this.#resizeObserver.observe(tabList);
    const tabs = tabList.querySelector('.tabs');
    if (tabs) this.#resizeObserver.observe(tabs);
    this.#observeTabs();
  }

  #observeTabs() {
    this.#mutationObserver.disconnect();
    this.#tabs.forEach((tab) => {
      this.#mutationObserver.observe(tab, {
        attributes: true,
        attributeFilter: ['selected'],
      });
    });
  }

  #handleTabsSlotChange() {
    this.#observeTabs();
    this.#linkTabsAndPanels();
    this.#initializeSelection();

    requestAnimationFrame(async () => {
      await this.#updateOverflow();
      if (this.#selectedTab) this.#scrollTabIntoView(this.#selectedTab, 'auto');
    });
  }

  #handlePanelsSlotChange() {
    this.#linkTabsAndPanels();
    this.#initializeSelection();
  }

  // wires up the ARIA relationships between each tab and the panel in the same position
  #linkTabsAndPanels() {
    this.#panels.forEach((panel, index) => {
      const tab = this.#tabs[index];
      if (!tab) return;

      tab.setAttribute('aria-controls', panel.id);
      panel.setAttribute('aria-labelledby', tab.id);
    });
  }

  // keeps the current selection, or falls back to the first `selected` tab, then the first enabled tab
  #initializeSelection() {
    const tabs = this.#tabs;
    this.#applySelection(
      tabs.find((tab) => tab === this.#selectedTab) ??
        tabs.find((tab) => tab.selected) ??
        tabs.find((tab) => !tab.disabled) ??
        null
    );
  }

  // selects the tab and shows its panel
  #applySelection(selectedTab) {
    this.#selectedTab = selectedTab;

    this.#tabs.forEach((tab) => {
      tab.selected = tab === selectedTab;
    });

    this.#panels.forEach((panel, index) => {
      panel.hidden = !selectedTab || this.#tabs[index] !== selectedTab;
    });

    this.#syncTabindex();
  }

  // roving tabindex: only one tab is in the page tab sequence, the anchor, which defaults to the selected tab
  #syncTabindex(anchor) {
    const tabs = this.#tabs;
    const target =
      anchor ??
      (this.#selectedTab && !this.#selectedTab.disabled
        ? this.#selectedTab
        : tabs.find((tab) => !tab.disabled));

    tabs.forEach((tab) => {
      if (tab.disabled) {
        // a tabindex would still let a click focus the disabled tab
        tab.removeAttribute('tabindex');
      } else {
        tab.setAttribute('tabindex', tab === target ? '0' : '-1');
      }
    });
  }

  #handleActivate(e) {
    const tab = e.target;
    if (!this.#tabs.includes(tab) || tab.disabled || tab === this.#selectedTab) return;

    this.#applySelection(tab);
    this.#scrollTabIntoView(tab);

    const index = this.#tabs.indexOf(tab);
    this.dispatchCustomEvent('jh-change', {
      state: { selectedIndex: index },
      reference: { tab, panel: this.#panels[index] ?? null },
    });
  }

  // moves between tabs with left and right arrows and wraps around at the ends, skipping disabled tabs
  #handleKeydown(e) {
    const tab = e.target;
    if ((e.code !== 'ArrowLeft' && e.code !== 'ArrowRight') || !this.#tabs.includes(tab)) return;

    e.preventDefault();
    const enabledTabs = this.#tabs.filter((t) => !t.disabled);
    const step = e.code === 'ArrowRight' ? 1 : -1;
    const index = enabledTabs.indexOf(tab);
    const next = enabledTabs[(index + step + enabledTabs.length) % enabledTabs.length];
    if (!next || next === tab) return;

    this.#syncTabindex(next);
    next.focus();
    this.#scrollTabIntoView(next);
  }

  // syncs the tabindex so next time it enters the tab list, it is on the selected tab
  #handleFocusOut(e) {
    // skips it when the next focused element is another tab in the group
    if (e.relatedTarget && this.#tabs.includes(e.relatedTarget)) return;
    this.#syncTabindex();
  }

  #handleSelectedChange() {
    // handles `selected` being set programmatically, which updates the panels without dispatching jh-change
    const selected = this.#tabs.filter((tab) => tab.selected);
    if (selected.length === 1 && selected[0] === this.#selectedTab) return;

    const next = selected.find((tab) => tab !== this.#selectedTab) ?? this.#selectedTab;
    this.#applySelection(next);
  }

  async #updateOverflow() {
    const tabList = this.#tabList;
    if (!tabList) return;

    const overflowing = tabList.scrollWidth > tabList.clientWidth + 1;
    this._overflowing = overflowing;
    await this.updateComplete;

    if (!overflowing) {
      tabList.scrollLeft = 0;
    }
  }

  #scrollTabIntoView(tab, behavior = 'smooth') {
    const tabList = this.#tabList;
    if (!tabList || !this._overflowing) return;

    const tabListRect = tabList.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    // keep the tab inside the tab list's padding so its focus outline stays visible
    const inset = this.#tabListInset;
    const start = tabListRect.left + inset;
    const end = tabListRect.right - inset;
    let left = 0;
    if (tabRect.left < start) {
      left = tabRect.left - start;
    } else if (tabRect.right > end) {
      left = tabRect.right - end;
    }
    if (left) {
      tabList.scrollBy({ left, behavior });
    }
  }

  // like the arrow keys, scrolls only as far as needed to reveal one tab: the first hidden tab in the given
  // direction (-1 or 1). At the end of the tab list, wraps around to the opposite end.
  #scrollByTab(direction) {
    const tabList = this.#tabList;
    if (!tabList || this.#tabs.length === 0) return;

    const tabListRect = tabList.getBoundingClientRect();
    // a tab cut by no more than the tab list's inset still counts as visible
    const tolerance = this.#tabListInset;
    const ordered = direction > 0 ? this.#tabs : [...this.#tabs].reverse();
    const isHidden = (tab) => {
      const rect = tab.getBoundingClientRect();
      return direction > 0
        ? rect.right > tabListRect.right + tolerance
        : rect.left < tabListRect.left - tolerance;
    };
    this.#scrollTabIntoView(ordered.find(isHidden) ?? ordered[0]);
  }

  // the controls prevent the default mousedown action so that clicking one keeps focus where it is
  #renderControl(direction) {
    if (!this._overflowing) return nothing;

    return html`
      <jh-button
        class="nav-control"
        tabindex="-1"
        aria-hidden="true"
        appearance="tertiary"
        @mousedown=${(e) => e.preventDefault()}
        @click=${() => this.#scrollByTab(direction)}
      >
        ${direction < 0
          ? html`<jh-icon-chevron-left slot="jh-button-icon-left"></jh-icon-chevron-left>`
          : html`<jh-icon-chevron-right slot="jh-button-icon-left"></jh-icon-chevron-right>`}
      </jh-button>
    `;
  }

  /** @protected */
  render() {
    return html`
      <div class="nav">
        ${this.#renderControl(-1)}
        <div class="tab-list-wrapper">
          <div
            class="tab-list"
            role="tablist"
            aria-label=${ifDefined(this.accessibleLabel || undefined)}
          >
            <div class="tabs">
              <slot
                name="jh-tab-group-tabs"
                @slotchange=${this.#handleTabsSlotChange}
              ></slot>
            </div>
          </div>
        </div>
        ${this.#renderControl(1)}
      </div>
      <slot @slotchange=${this.#handlePanelsSlotChange}></slot>
    `;
  }
}
JhTabGroup.register('jh-tab-group', JhTabGroup );