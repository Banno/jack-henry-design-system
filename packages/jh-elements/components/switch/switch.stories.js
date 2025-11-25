// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './switch.js';

const storyStyles = css`
  div[id^="story-root"] {
    display: flex;
    justify-content: center;
  }
  jh-switch {
    margin-right: 16px;
  }
  .playground {
    width: 200px;
  }
`;

const disableControls = {
  label: { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
  'accessible-disabled': { control: { disable: true } },
  checked: { control: { disable: true } },
  disabled: { control: { disable: true } },
};

export default {
  component: 'jh-switch',
  title: 'Components/Switch',
  parameters: {
    actions: {
      handles: ['jh-change'],
    },
  },
  argTypes: {
    label: {
      control: 'text',
    },
    'helper-text': {
      control: 'text',
    },
    'accessible-label': {
      control: 'text',
    },
    'accessible-disabled': {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Overview = {
  render: (args) => html`
    <jh-switch accessible-label="aria label"></jh-switch>
    <jh-switch checked></jh-switch>
    <jh-switch accessible-disabled="true"></jh-switch>
    <jh-switch checked disabled></jh-switch>
    <jh-switch label="Label"></jh-switch>
    <jh-switch label="Label" helper-text="Helper text"></jh-switch>
  `,
};

Overview.argTypes = {
  ...disableControls,
};
Overview.parameters = {
  styles: storyStyles,
};

export const Playground = {
  render: (args) => html`
    <div class="playground">
      <jh-switch
        label="${args.label}"
        helper-text="${args['helper-text']}"
        accessible-label=${ifDefined(
          args['accessible-label'] && args['accessible-label'] !== ''
            ? args['accessible-label']
            : null
        )}
        ?checked=${args.checked}
        ?disabled=${args.disabled}
        accessible-disabled=${ifDefined(
          args['accessible-disabled'] && args['accessible-disabled'] !== 'false'
            ? args['accessible-disabled']
            : null
        )}
      >
      </jh-switch>
    </div>
  `,
};
Playground.args = {
  checked: false,
  disabled: false,
  'accessible-disabled': false,
  label: 'Label',
  'helper-text': 'Helper text',
  'accessible-label': '',
};

Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};

export const Default = { render: (args) => html`<jh-switch></jh-switch>` };

Default.parameters = {
  styles: storyStyles,
};

Default.argTypes = {
  ...disableControls,
};
