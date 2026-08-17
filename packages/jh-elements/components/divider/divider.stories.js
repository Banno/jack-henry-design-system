// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './divider.js';

const storyStyles = css`
  .divider-container {
    height: 300px;
  }
`;

export default {
  component: 'jh-divider',
  title: 'Components/Divider',
  argTypes: {
    inset: {
      control: 'select',
      options: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};



export const Overview = {
  render: (args) => html`
    <jh-divider inset=${ifDefined(args.inset)}></jh-divider>
    <div class="divider-container">
      <jh-divider orientation="vertical"></jh-divider>
    </div>
  `,
};

Overview.argTypes = {
  inset: { control: { disable: true } },
  orientation: { control: { disable: true } },
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = {
  render: (args) => html`
    <jh-divider inset=${ifDefined(args.inset)} orientation=${ifDefined(args.orientation)}></jh-divider>
  `,
};

Playground.args = {
  inset: null,
  orientation: 'horizontal',
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

InsetOverride.argTypes = {
  orientation: { control: { disable: true } },
};
