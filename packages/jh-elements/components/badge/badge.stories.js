// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import '@jack-henry/jh-icons/icons-wc/icon-bell.js';
import '@jack-henry/jh-icons/icons-wc/icon-envelope.js';
import '../button/button.js';
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
  'show-cutout': { control: { disable: true } },
}

export default {
  component: 'jh-badge',
  title: 'Components/Badge',
  argTypes: {
    count: {
      control: 'number',
    },
    'max-count': {
      control: 'number',
    },
    appearance: {
      control: 'select',
      options: ['negative', 'neutral'],
    },
    'show-cutout': {
      control: 'boolean',
    },
  },
  parameters: {
    actions: {
      disable: true
    },
    interactions: {
      disable: true
    }
  }
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
        <jh-button accessible-label="Emails, 3 unread">
          <jh-icon-envelope slot="jh-button-icon-left"></jh-icon-envelope>
        </jh-button>
      </jh-badge>
      <jh-badge>
        <span class="anchor-circle" role="img" aria-label="Jordan Lee, online"></span>
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

export const ShowCutout = {
  render: (args) => html`
    <div class="overview-row">
      <jh-badge count="3" show-cutout>
        <span class="anchor-circle" role="img" aria-label="Jordan Lee, 3 unread messages"></span>
      </jh-badge>
      <jh-badge show-cutout>
        <span class="anchor-circle" role="img" aria-label="Jordan Lee, online"></span>
      </jh-badge>
    </div>
  `
};

ShowCutout.argTypes = {
  ...disableControls,
};

ShowCutout.parameters = {
  styles: storyStyles,
};

export const Playground = { render: (args) => html`
  <jh-badge
   count=${args.count} 
   max-count=${args['max-count']} 
   appearance=${args.appearance}
   ?show-cutout=${args['show-cutout']}
   ></jh-badge>
`};

Playground.args = {
count: 1,
'max-count': 99,
appearance: 'negative',
'show-cutout': false,
};

Playground.parameters = {
  theme: 'both-themes',
};
