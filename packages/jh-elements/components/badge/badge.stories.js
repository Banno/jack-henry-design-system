// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@jack-henry/jh-icons/icons-wc/icon-bell.js';
import './badge.js';

const storyStyles = css`
div[id^="story-root"] {
  text-align: center;
}
.overview-row {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2%;
  width: 100%;
}
.anchor-circle {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--jh-color-container-neutral-enabled);
}
`;

const disableControls = {
  count: { control: { disable: true } },
  'max-count': { control: { disable: true } },
  appearance: { control: { disable: true } },
  'show-zero': { control: { disable: true } },
  label: { control: { disable: true } },
}

export default {
  component: 'jh-badge',
  title: 'Components/Badge',
  argTypes: {
    count: {
      control: 'text',
    },
    'max-count': {
      control: 'text',
    },
    appearance: {
      control: 'select',
      options: ['negative', 'neutral'],
    },
    'show-zero': {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
};

export const Overview = { 
  render: (args) => html`
    <div class="overview-row">
      <jh-badge></jh-badge>
      <jh-badge count="50"></jh-badge>
      <jh-badge count="100"></jh-badge>
    </div>
  `
};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Neutral = {
  render: (args) => html`
    <div class="overview-row">
      <jh-badge appearance="neutral"></jh-badge>
      <jh-badge appearance="neutral" count="50"></jh-badge>
      <jh-badge appearance="neutral" count="100"></jh-badge>
    </div>
  `
};

Neutral.argTypes = {
  ...disableControls,
};

Neutral.parameters = {
  styles: storyStyles,
};

export const Anchored = {
  render: (args) => html`
    <div class="overview-row">
      <jh-badge count="3">
        <jh-icon-bell size="medium"></jh-icon-bell>
      </jh-badge>
      <jh-badge count="3">
        <span class="anchor-circle"></span>
      </jh-badge>
    </div>
  `
};

Anchored.argTypes = {
  ...disableControls,
};

Anchored.parameters = {
  styles: storyStyles,
};

export const DotWithLabel = {
  render: (args) => html`
    <jh-badge label="Unread notifications">
      <jh-icon-bell size="medium"></jh-icon-bell>
    </jh-badge>
  `
};

DotWithLabel.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <jh-badge
   count=${args.count} 
   max-count=${args['max-count']} 
   appearance=${args.appearance}
   ?show-zero=${args['show-zero']}
   label=${ifDefined(args.label || undefined)}
   ></jh-badge>
`};

Playground.args = {
count: '1',
'max-count': '99',
appearance: 'negative',
'show-zero': false,
label: '',
};

Playground.parameters = {
  theme: 'both-themes',
};
