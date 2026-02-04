// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css, LitElement } from 'lit';
import '@jack-henry/jh-elements/components/button/button.js';
import '@jack-henry/jh-elements/components/card/card.js';
import '@jack-henry/jh-elements/components/toast/toast.js';
import '@jack-henry/jh-elements/components/checkbox/checkbox.js';
import '@jack-henry/jh-elements/components/checkbox-group/checkbox-group.js';
import '@jack-henry/jh-elements/components/list-item/list-item.js';
import '@jack-henry/jh-elements/components/input/input.js';
import '@jack-henry/jh-elements/components/badge/badge.js';
import '@jack-henry/jh-elements/components/radio-group/radio-group.js';
import '@jack-henry/jh-elements/components/radio/radio.js';
import '@jack-henry/jh-elements/components/divider/divider.js';
import '@jack-henry/jh-elements/components/icon/icon.js';
import '@jack-henry/jh-icons/icons-wc/icon-airplane.js';
import '@jack-henry/jh-elements/components/input-email/input-email.js';
import '@jack-henry/jh-elements/components/input-password/input-password.js';
import '@jack-henry/jh-elements/components/input-search/input-search.js';
import '@jack-henry/jh-elements/components/input-telephone/input-telephone.js';
import '@jack-henry/jh-elements/components/input-textarea/input-textarea.js';
import '@jack-henry/jh-elements/components/input-url/input-url.js';
import '@jack-henry/jh-elements/components/list-group/list-group.js';
import '@jack-henry/jh-elements/components/menu/menu.js';
import '@jack-henry/jh-elements/components/notification/notification.js';
import '@jack-henry/jh-elements/components/progress/progress.js';
import '@jack-henry/jh-elements/components/switch/switch.js';
import '@jack-henry/jh-elements/components/table/table.js';
import '@jack-henry/jh-elements/components/table-row/table-row.js';
import '@jack-henry/jh-elements/components/table-header-cell/table-header-cell.js';
import '@jack-henry/jh-elements/components/table-data-cell/table-data-cell.js';
import '@jack-henry/jh-elements/components/tag-group/tag-group.js';
import '@jack-henry/jh-elements/components/tag/tag.js';
import '@jack-henry/jh-elements/components/tooltip/tooltip.js';
// import { customElement, property } from 'lit/decorators.js'; 
import { setJhTheme } from '@jack-henry/jh-elements/utils/themeProvider.js';

// @customElement('app-ts')
export class AppTs extends LitElement {
  static styles = css`
    jh-card {
      width: 700px;
      margin-bottom: 20px;
    }
    jh-menu {
      width: 300px;
    }
    .inputs-flex,
    .groups-flex {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }
    .inputs-flex > *,
    .groups-flex > * {
      flex: 1 1 45%;
      min-width: 280px;
      box-sizing: border-box;
    }
  `;

  constructor() {
    super();
    setJhTheme();
  }

  render() {
    let checkbox = document.createElement('jh-checkbox');
    checkbox.label = 'Checkbox created in code';

    return html`
      <jh-card header-title="Typescript Vite Test Card">
        <jh-notification type="alert">
          <span>Notification text</span>
        </jh-notification>
        <jh-badge count="5"></jh-badge>
        <div class="groups-flex">
          <jh-checkbox-group label="Checkbox Group">
            <jh-checkbox label="Checkbox 1" value="1"></jh-checkbox>
            <jh-checkbox label="Checkbox 2" value="2"></jh-checkbox>
            <jh-checkbox label="Checkbox 3" value="3"></jh-checkbox>
          </jh-checkbox-group>
          <jh-radio-group label="Radio Group">
            <jh-radio label="Radio 1" value="1"></jh-radio>
            <jh-radio label="Radio 2" value="2"></jh-radio>
            <jh-radio label="Radio 3" value="3"></jh-radio>
          </jh-radio-group>
        </div>
        <jh-divider></jh-divider>
        <jh-icon-airplane></jh-icon-airplane>
        <div class="inputs-flex">
          <jh-input label="Input"></jh-input>
          <jh-input-email label="Email"></jh-input-email>
          <jh-input-password label="Password"></jh-input-password>
          <jh-input-search label="Search"></jh-input-search>
          <jh-input-telephone label="Telephone"></jh-input-telephone>
          <jh-input-textarea label="Textarea" wrap="off"></jh-input-textarea>
          <jh-input-url label="URL"></jh-input-url>
        </div>
        <jh-progress value="50" max="100"></jh-progress>
        <jh-switch label="Switch"></jh-switch>
        <jh-table>
          <jh-table-row>
            <jh-table-header-cell>Header 1</jh-table-header-cell>
            <jh-table-header-cell>Header 2</jh-table-header-cell>
          </jh-table-row>
          <jh-table-row>
            <jh-table-data-cell>Data 1</jh-table-data-cell>
            <jh-table-data-cell>Data 2</jh-table-data-cell>
          </jh-table-row>
        </jh-table>
        <jh-tag-group>
          <jh-tag label="Tag 1"></jh-tag>
          <jh-tag label="Tag 2"></jh-tag>
        </jh-tag-group>
        <jh-toast timeout="0">Toast message</jh-toast>
        <jh-tooltip label="Tooltip text">
          <span>Hover me</span>
        </jh-tooltip>
        <div slot="jh-card-footer">
          <jh-button appearance="danger" label="Button"></jh-button>
        </div>
      </jh-card>
      <jh-menu>
        <jh-list-group label="Menu Group">
          <jh-list-item
            show-divider
            primary-metadata="metadata"
            tabindex="0"
            selected>Item 1</jh-list-item>
          <jh-list-item show-divider tabindex="0">Item 2</jh-list-item>
          <jh-list-item show-divider tabindex="0">Item 3</jh-list-item>
          <jh-list-item primary-metadata="metadata" tabindex="0">Item 4</jh-list-item>
        </jh-list-group>
      </jh-menu>
      <jh-icon></jh-icon>
    `;
  }
}
customElements.define('app-ts', AppTs);