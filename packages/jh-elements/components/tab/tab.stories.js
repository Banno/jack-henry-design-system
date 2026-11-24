/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@jack-henry/jh-icons/icons-wc/icon-bell.js';
import '@jack-henry/jh-icons/icons-wc/icon-chart-pie.js';
import '@jack-henry/jh-icons/icons-wc/icon-chevron-down-small.js';
import './tab.js';

const storyStyles = css`
  .overview-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--jh-dimension-400);
    margin: 2%;
  }
`;

const disableControls = {
  'accessible-label': { control: { disable: true } },
  disabled: { control: { disable: true } },
  label: { control: { disable: true } },
  selected: { control: { disable: true } },
  size: { control: { disable: true } },
};

export default {
  component: 'jh-tab',
  title: 'Components/Tab/Tab',
  tags: ['new'],
  argTypes: {
    'accessible-label': { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    selected: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
  },
  parameters: {
    actions: { disable: true },
    interactions: { disable: true },
    styles: storyStyles,
  },
};

export const Overview = {
  render: (args) => html`
    <div class="overview-row">
      <jh-tab label="Label"></jh-tab>
      <jh-tab label="Label">
        <jh-icon-bell slot="jh-tab-left"></jh-icon-bell>
      </jh-tab>
      <jh-tab label="Label">
        <jh-icon-chevron-down-small slot="jh-tab-right"></jh-icon-chevron-down-small>
      </jh-tab>
      <jh-tab accessible-label="Notifications">
        <jh-icon-bell slot="jh-tab-left"></jh-icon-bell>
      </jh-tab>
      <jh-tab accessible-label="More reports">
        <jh-icon-chart-pie slot="jh-tab-left"></jh-icon-chart-pie>
        <jh-icon-chevron-down-small slot="jh-tab-right"></jh-icon-chevron-down-small>
      </jh-tab>
      <jh-tab label="Label" selected></jh-tab>
      <jh-tab label="Label" disabled></jh-tab>
      <jh-tab label="Label" selected disabled></jh-tab>
    </div>
  `,
};
Overview.argTypes = { ...disableControls };

export const Playground = {
  render: (args) => html`
    <jh-tab
      accessible-label=${ifDefined(args['accessible-label'] || null)}
      ?disabled=${args.disabled}
      label=${ifDefined(args.label || null)}
      ?selected=${args.selected}
      size=${args.size}
    ><jh-icon-bell slot="jh-tab-left"></jh-icon-bell></jh-tab>
  `,
};
Playground.args = {
  'accessible-label': '',
  disabled: false,
  label: 'Label',
  selected: false,
  size: 'medium',
};
Playground.parameters = { theme: 'both-themes' };

