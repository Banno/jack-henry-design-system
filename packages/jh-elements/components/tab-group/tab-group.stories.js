/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/actions';
import '@jack-henry/jh-icons/icons-wc/icon-bell.js';
import '@jack-henry/jh-icons/icons-wc/icon-box-archive.js';
import '@jack-henry/jh-icons/icons-wc/icon-chart-pie.js';
import '@jack-henry/jh-icons/icons-wc/icon-gear.js';
import '@jack-henry/jh-icons/icons-wc/icon-house.js';
import './tab-group.js';
import '../table/table.js';
import '../select/select.js';
import '../input-currency/input-currency.js';
import '../radio-group/radio-group.js';
import '../radio/radio.js';
import '../button/button.js';

const storyStyles = css`
  .overflow-container {
    width: 420px;
    max-width: 100%;
  }
  .transfer-form {
    display: flex;
    flex-direction: column;
    gap: var(--jh-dimension-400);
    max-width: 480px;
  }
  .form-actions {
    display: flex;
    gap: var(--jh-dimension-200);
  }
  .scrollable-text {
    max-height: 200px;
    overflow-y: auto;
  }
`;

const accountOptions = [
  { label: 'Select an account', value: '', selected: true },
  { label: 'Everyday Checking', value: 'checking' },
  { label: 'High-Yield Savings', value: 'savings' },
  { label: 'Money Market', value: 'money-market' },
];

const accounts = [
  { name: 'Everyday Checking', number: '••••4821', type: 'Checking', balance: '$4,215.38', status: 'Active' },
  { name: 'High-Yield Savings', number: '••••7390', type: 'Savings', balance: '$18,902.15', status: 'Active' },
  { name: 'Money Market', number: '••••1156', type: 'Money market', balance: '$52,640.00', status: 'Active' },
  { name: '12-Month Certificate', number: '••••9084', type: 'Certificate', balance: '$10,000.00', status: 'Matures 06/2027' },
  { name: 'Holiday Club', number: '••••3372', type: 'Savings', balance: '$650.00', status: 'Inactive' },
];

const disableControls = {
  'accessible-label': { control: { disable: true } },
}

function logCustomEvent(name, e) {
  return action(name)({
    detail: e.detail,
    type: e.type,
    bubbles: e.bubbles,
    cancelable: e.cancelable,
    composed: e.composed,
    currentTarget: e.currentTarget,
    defaultPrevented: e.defaultPrevented,
    eventPhase: e.eventPhase,
    isTrusted: e.isTrusted,
    target: e.target,
    timeStamp: e.timeStamp,
  });
}

export default {
  component: 'jh-tab-group',
  title: 'Components/Tab/Tab Group',
  tags: ['new'],
  decorators: [
    (story) => html`
      <div
        @jh-change=${(e) => {
          // jh-change also bubbles from components placed inside tab panels
          if (e.detail.reference.originHost === 'jh-tab-group') {
            logCustomEvent('jh-change', e);
          }
        }}
      >
        ${story()}
      </div>
    `,
  ],
  argTypes: {
    'accessible-label': {
      control: 'text',
    },
  },
  parameters: {
    styles: storyStyles,
  },
};

export const Overview = { render: (args) => html`
  <jh-tab-group accessible-label="Account">
    <jh-tab slot="jh-tab-group-tabs" label="Overview"></jh-tab>
    <jh-tab slot="jh-tab-group-tabs" label="Reports"></jh-tab>
    <jh-tab slot="jh-tab-group-tabs" label="Settings"></jh-tab>
    <jh-tab-panel>Overview content</jh-tab-panel>
    <jh-tab-panel>Reports content</jh-tab-panel>
    <jh-tab-panel>Settings content</jh-tab-panel>
  </jh-tab-group>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <jh-tab-group accessible-label=${ifDefined(args['accessible-label'] || null)}>
    <jh-tab slot="jh-tab-group-tabs" label="Overview">
      <jh-icon-house slot="jh-tab-left"></jh-icon-house>
    </jh-tab>
    <jh-tab slot="jh-tab-group-tabs" label="Reports" selected>
      <jh-icon-chart-pie slot="jh-tab-left"></jh-icon-chart-pie>
    </jh-tab>
    <jh-tab slot="jh-tab-group-tabs" label="Settings">
      <jh-icon-gear slot="jh-tab-left"></jh-icon-gear>
    </jh-tab>
    <jh-tab slot="jh-tab-group-tabs" accessible-label="Notifications" selected>
      <jh-icon-bell slot="jh-tab-left"></jh-icon-bell>
    </jh-tab>
    <jh-tab slot="jh-tab-group-tabs" label="Archived" disabled>
      <jh-icon-box-archive slot="jh-tab-left"></jh-icon-box-archive>
    </jh-tab>
    <jh-tab-panel>Overview content</jh-tab-panel>
    <jh-tab-panel>Reports content</jh-tab-panel>
    <jh-tab-panel>Settings content</jh-tab-panel>
    <jh-tab-panel>Notifications content</jh-tab-panel>
    <jh-tab-panel>Archived content</jh-tab-panel>
  </jh-tab-group>
`};

Playground.args = {
  'accessible-label': 'Account',
};

Playground.parameters = {
  theme: 'both-themes',
};

export const Overflow = { render: (args) => html`
  <div class="overflow-container">
    <jh-tab-group accessible-label="Accounts">
      <jh-tab slot="jh-tab-group-tabs" label="Checking"></jh-tab>
      <jh-tab slot="jh-tab-group-tabs" label="Savings"></jh-tab>
      <jh-tab slot="jh-tab-group-tabs" label="Money market"></jh-tab>
      <jh-tab slot="jh-tab-group-tabs" label="Certificates"></jh-tab>
      <jh-tab slot="jh-tab-group-tabs" label="Loans"></jh-tab>
      <jh-tab slot="jh-tab-group-tabs" label="Credit cards"></jh-tab>
      <jh-tab slot="jh-tab-group-tabs" label="Investments"></jh-tab>
      <jh-tab slot="jh-tab-group-tabs" label="Retirement"></jh-tab>
      <jh-tab-panel>Checking content</jh-tab-panel>
      <jh-tab-panel>Savings content</jh-tab-panel>
      <jh-tab-panel>Money market content</jh-tab-panel>
      <jh-tab-panel>Certificates content</jh-tab-panel>
      <jh-tab-panel>Loans content</jh-tab-panel>
      <jh-tab-panel>Credit cards content</jh-tab-panel>
      <jh-tab-panel>Investments content</jh-tab-panel>
      <jh-tab-panel>Retirement content</jh-tab-panel>
    </jh-tab-group>
  </div>
`};

Overflow.argTypes = {
  ...disableControls,
};

export const RealisticContent = { render: (args) => html`
  <jh-tab-group accessible-label="Banking">
    <jh-tab slot="jh-tab-group-tabs" label="Accounts"></jh-tab>
    <jh-tab slot="jh-tab-group-tabs" label="Transfer"></jh-tab>
    <jh-tab slot="jh-tab-group-tabs" label="Terms"></jh-tab>
    <jh-tab-panel>
      <jh-table>
        <div slot="jh-table-caption">Your accounts</div>
        <jh-table-row slot="jh-table-header">
          <jh-table-header-cell>Account</jh-table-header-cell>
          <jh-table-header-cell>Number</jh-table-header-cell>
          <jh-table-header-cell>Type</jh-table-header-cell>
          <jh-table-header-cell horizontal-align="right">Balance</jh-table-header-cell>
          <jh-table-header-cell>Status</jh-table-header-cell>
        </jh-table-row>
        ${accounts.map((account) => html`
          <jh-table-row>
            <jh-table-data-cell>${account.name}</jh-table-data-cell>
            <jh-table-data-cell>${account.number}</jh-table-data-cell>
            <jh-table-data-cell>${account.type}</jh-table-data-cell>
            <jh-table-data-cell horizontal-align="right">${account.balance}</jh-table-data-cell>
            <jh-table-data-cell>${account.status}</jh-table-data-cell>
          </jh-table-row>
        `)}
      </jh-table>
    </jh-tab-panel>
    <jh-tab-panel>
      <form class="transfer-form" @submit=${(e) => e.preventDefault()}>
        <jh-select label="From" .options=${accountOptions}></jh-select>
        <jh-select label="To" .options=${accountOptions}></jh-select>
        <jh-input-currency label="Amount" helper-text="Enter the transfer amount" inputmode="decimal"></jh-input-currency>
        <jh-radio-group label="Frequency">
          <jh-radio label="One time" value="once" checked></jh-radio>
          <jh-radio label="Weekly" value="weekly"></jh-radio>
          <jh-radio label="Monthly" value="monthly"></jh-radio>
        </jh-radio-group>
        <div class="form-actions">
          <jh-button type="submit" appearance="primary" label="Transfer"></jh-button>
          <jh-button type="reset" label="Cancel"></jh-button>
        </div>
      </form>
    </jh-tab-panel>
    <jh-tab-panel>
      <div class="scrollable-text" tabindex="0" role="region" aria-label="Terms and conditions">
        ${Array.from({ length: 8 }, () => html`
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </p>
        `)}
      </div>
    </jh-tab-panel>
  </jh-tab-group>
`};

RealisticContent.argTypes = {
  ...disableControls,
};
