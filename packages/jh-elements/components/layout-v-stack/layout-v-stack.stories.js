/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import { action } from 'storybook/actions';
import './layout-v-stack.js';
import '../button/button.js';

const storyStyles = css`

`;

const dimensionOptions = ['0', '25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'];

const alignOptions = ['start', 'end', 'center', 'stretch', 'baseline'];

const justifyOptions = ['start', 'end', 'center', 'between', 'around', 'evenly'];

const disableControls = {
  gap: { control: { disable: true } },
  padding: { control: { disable: true } },
  align: { control: { disable: true } },
  justify: { control: { disable: true } },
  wrap: { control: { disable: true } },
};

export default {
  component: 'jh-layout-v-stack',
  title: 'Primitives/Layout V Stack',
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
    align: {
      control: 'select',
      options: alignOptions,
    },
    justify: {
      control: 'select',
      options: justifyOptions,
    },
    wrap: {
      control: 'boolean',
    },
  },
};

export const Overview = { render: (args) => html`
  <jh-layout-v-stack>
    <jh-button label="Button 1"></jh-button>
    <jh-button label="Button 2"></jh-button>
    <jh-button label="Button 3"></jh-button>
  </jh-layout-v-stack>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <jh-layout-v-stack
    gap=${args.gap}
    padding=${args.padding}
    align=${args.align}
    justify=${args.justify}
    ?wrap=${args.wrap}
  >
    <jh-button label="Button 1"></jh-button>
    <jh-button label="Button 2"></jh-button>
    <jh-button label="Button 3"></jh-button>
  </jh-layout-v-stack>
`};

Playground.args = {
  gap: '100',
  padding: '100',
  align: 'stretch',
  justify: 'start',
  wrap: false,
};

Playground.parameters = {
  theme: 'both-themes',
};
