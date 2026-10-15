/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import { action } from 'storybook/actions';
import './column.js';
import '../button/button.js';

const storyStyles = css`

`;

const dimensionOptions = ['0', '25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'];

const alignOptions = ['start', 'end', 'center', 'stretch', 'baseline'];

const justifyOptions = ['start', 'end', 'center', 'between', 'around', 'evenly'];

const disableControls = {
  gap: { control: { disable: true } },
  padding: { control: { disable: true } },
  'align-x': { control: { disable: true } },
  'align-y': { control: { disable: true } },
  wrap: { control: { disable: true } },
};

export default {
  component: 'forge-column',
  title: 'Primitives/Column',
  tags: ['beta'],
  argTypes: {
    gap: {
      control: 'select',
      options: dimensionOptions,
    },
    padding: {
      control: 'select',
      options: dimensionOptions,
    },
    'align-x': {
      control: 'select',
      options: alignOptions,
    },
    'align-y': {
      control: 'select',
      options: justifyOptions,
    },
    wrap: {
      control: 'boolean',
    },
  },
};

export const Overview = { render: (args) => html`
  <forge-column>
    <jh-button label="Button 1"></jh-button>
    <jh-button label="Button 2"></jh-button>
    <jh-button label="Button 3"></jh-button>
  </forge-column>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <forge-column
    gap=${args.gap}
    padding=${args.padding}
    align-x=${args['align-x']}
    align-y=${args['align-y']}
    ?wrap=${args.wrap}
  >
    <jh-button label="Button 1"></jh-button>
    <jh-button label="Button 2"></jh-button>
    <jh-button label="Button 3"></jh-button>
  </forge-column>
`};

Playground.args = {
  gap: '100',
  padding: '100',
  'align-x': 'stretch',
  'align-y': 'start',
  wrap: false,
};

Playground.parameters = {
  theme: 'both-themes',
};
