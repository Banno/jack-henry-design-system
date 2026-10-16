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
  .demo-container {
    display: inline-block;
    border: 1px dashed var(--jh-border-control-color);
    padding: 16px;
  }
  .demo-box {
    border: 1px solid var(--jh-color-content-brand-enabled);
  }
  .demo-box.is-playground {
    width: 240px;
    height: 240px;
  }
  .demo-box.is-wrapping {
    width: 280px;
    height: 180px;
  }
`;

const dimensionOptions = ['0', '25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'];

const alignOptions = ['start', 'end', 'center', 'stretch', 'baseline'];

const justifyOptions = ['start', 'end', 'center', 'between', 'around', 'evenly'];

const alignContentOptions = ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];

const wrapOptions = ['nowrap', 'wrap', 'wrap-reverse'];

const disableControls = {
  gap: { control: { disable: true } },
  padding: { control: { disable: true } },
  'align-x': { control: { disable: true } },
  'align-y': { control: { disable: true } },
  'align-wrap': { control: { disable: true } },
  reverse: { control: { disable: true } },
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
    'align-wrap': {
      control: 'select',
      options: alignContentOptions,
    },
    reverse: {
      control: 'boolean',
    },
    wrap: {
      control: 'select',
      options: wrapOptions,
    },
  },
  parameters: {
    actions: {
      disable: true
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
  <div class="demo-container">
    <forge-column
      class="demo-box is-playground"
      gap=${args.gap}
      padding=${args.padding}
      align-x=${args['align-x']}
      align-y=${args['align-y']}
      ?reverse=${args.reverse}
    >
      <jh-button label="Button 1"></jh-button>
      <jh-button label="Button 2"></jh-button>
      <jh-button label="Button 3"></jh-button>
    </forge-column>
  </div>
`};

Playground.args = {
  gap: '100',
  padding: '100',
  'align-x': 'center',
  'align-y': 'start',
  reverse: false,
};

Playground.argTypes = {
  'align-wrap': { control: { disable: true } },
  wrap: { control: { disable: true } },
};

Playground.parameters = {
  theme: 'both-themes',
  styles: storyStyles,
};

export const Wrapping = { render: (args) => html`
  <div class="demo-container">
    <forge-column
      class="demo-box is-wrapping"
      gap="100"
      wrap=${args.wrap}
      align-wrap=${args['align-wrap']}
    >
      <jh-button label="Button 1"></jh-button>
      <jh-button label="Button 2"></jh-button>
      <jh-button label="Button 3"></jh-button>
      <jh-button label="Button 4"></jh-button>
      <jh-button label="Button 5"></jh-button>
      <jh-button label="Button 6"></jh-button>
    </forge-column>
  </div>
`};

Wrapping.args = {
  wrap: 'wrap',
  'align-wrap': 'start',
};

Wrapping.argTypes = {
  ...disableControls,
  wrap: { control: 'select', options: wrapOptions },
  'align-wrap': { control: 'select', options: alignContentOptions },
};

Wrapping.parameters = {
  theme: 'both-themes',
  styles: storyStyles,
};
