/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html } from 'lit';
import './heading.js';

const disableControls = {
  level: { control: { disable: true } },
};

export default {
  component: 'forge-heading',
  title: 'Primitives/Heading',
  tags: ['beta'],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
  },
};

export const Overview = { render: () => html`
  <forge-heading level="1">Page title</forge-heading>
  <forge-heading level="2">Section title</forge-heading>
  <forge-heading level="3">Subsection title</forge-heading>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <forge-heading level=${args.level}>
    Open a checking account in minutes.
  </forge-heading>
`};

Playground.args = {
  level: 2,
};

Playground.parameters = {
  theme: 'both-themes',
};

