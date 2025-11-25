// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './divider.js';

export default {
  component: 'jh-divider',
  title: 'Components/Divider',
  argTypes: {
    inset: {
      control: 'select',
      options: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
    },
  },
};

export const Overview = {
  render: (args) => html`
    <jh-divider inset=${ifDefined(args.inset)}></jh-divider>
  `,
};

Overview.argTypes = {
  inset: { control: { disable: true } },
};

export const Playground = {
  render: (args) => html`
    <jh-divider inset=${ifDefined(args.inset)}></jh-divider>
  `,
};

Playground.args = {
  inset: null,
};

Playground.parameters = {
  theme: 'both-themes',
};

export const InsetOverride = {
  render: (args) => html`
    <style>
      .failed-override-inset {
        --jh-divider-space-inset: 31px;
      }
    </style>
    <jh-divider
      class="failed-override-inset"
      inset=${ifDefined(args.inset)}
    ></jh-divider>
  `,
};

InsetOverride.args = {
  inset: 88,
};
