/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html } from 'lit';
import './paragraph.js';

const disableControls = {
  size: { control: { disable: true } },
};

export default {
  component: 'forge-paragraph',
  title: 'Primitives/Paragraph',
  tags: ['beta'],
  argTypes: {
    size: {
      control: 'select',
      options: [1, 2],
    },
  },
};

export const Overview = { render: () => html`
  <forge-paragraph>
    Forge Paragraph is a typography primitive for general reading copy, like the body of an
    article, a card description, or a form's introductory text.
  </forge-paragraph>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <forge-paragraph size=${args.size}>
    Forge Paragraph is a typography primitive for general reading copy, like the body of an
    article, a card description, or a form's introductory text.
  </forge-paragraph>
`};

Playground.args = {
  size: 1,
};

Playground.parameters = {
  theme: 'both-themes',
};
