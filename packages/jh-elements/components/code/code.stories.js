/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html } from 'lit';
import './code.js';
import '../paragraph/paragraph.js';

const disableControls = {
  size: { control: { disable: true } },
  display: { control: { disable: true } },
};

export default {
  component: 'forge-code',
  title: 'Primitives/Code',
  tags: ['beta'],
  argTypes: {
    size: {
      control: 'select',
      options: [1, 2],
    },
    display: {
      control: 'select',
      options: ['inline', 'block'],
    },
  },
};

export const Overview = { render: () => html`
  <forge-paragraph>
    Run <forge-code>npm install</forge-code> to install dependencies.
  </forge-paragraph>
  <forge-code display="block">const greeting = {
  text: 'hello world',
  locale: 'en-US',
  timestamp: Date.now(),
};</forge-code>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <forge-code size=${args.size} display=${args.display}>const greeting = 'hello world';</forge-code>
`};

Playground.args = {
  size: 1,
  display: 'inline',
};

Playground.parameters = {
  theme: 'both-themes',
};