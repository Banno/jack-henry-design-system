/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

/**
 * Tab panels hold the content for their respective tab. Place them in the default slot of `jh-tab-group`.
 * 
 * [Tab Panel Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-tab-tab-panel--docs)
 *
 * @cssprop --jh-tab-panel-space-padding-top - The top padding of the tab panel. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-tab-panel-space-padding-right - The right padding of the tab panel. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-tab-panel-space-padding-bottom - The bottom padding of the tab panel. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-tab-panel-space-padding-left - The left padding of the tab panel. Defaults to `--jh-dimension-400`.
 * @cssprop --jh-tab-panel-color-text - The default text color of the tab panel content. Defaults to `--jh-color-content-primary-enabled`.
 *
 * @slot default - Use to insert the tab panel content.
 *
 * @customElement jh-tab-panel
 */
export class JhTabPanel extends JhElement {
  static get styles() {
    return css`
      :host {
        display: block;
        box-sizing: border-box;
        padding-top: var(--jh-tab-panel-space-padding-top, var(--jh-dimension-400));
        padding-right: var(--jh-tab-panel-space-padding-right, var(--jh-dimension-400));
        padding-bottom: var(--jh-tab-panel-space-padding-bottom, var(--jh-dimension-400));
        padding-left: var(--jh-tab-panel-space-padding-left, var(--jh-dimension-400));
        color: var(
          --jh-tab-panel-color-text,
          var(--jh-color-content-primary-enabled)
        );
        font-family: var(--jh-font-body-regular-1-font-family);
        font-weight: var(--jh-font-body-regular-1-font-weight);
        font-size: var(--jh-font-body-regular-1-font-size);
        line-height: var(--jh-font-body-regular-1-line-height);
        overflow-wrap: break-word;
      }
      :host([hidden]) {
        display: none;
      }
      :host(:focus-visible) {
        outline-color: var(--jh-border-focus-color);
        outline-style: var(--jh-border-focus-style);
        outline-width: var(--jh-border-focus-width);
        outline-offset: calc(-1 * var(--jh-border-focus-width));
      }
    `;
  }

  constructor() {
    super();
    this.internals.role = 'tabpanel';
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.id) {
      this.id = `jh-tab-panel-${this.uniqueId}`;
    }
    // hidden panels are display: none, so only the displayed panel is in the page tab sequence
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '0');
    }
  }

  /** @protected */
  render() {
    return html`
    <slot></slot>
    `;
  }
}
JhTabPanel.register('jh-tab-panel', JhTabPanel );