/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import './test.js';

const storyStyles = css`

`;

const disableControls = {
  attribute: { control: { disable: true } },
  'some-attribute': { control: { disable: true } },
}

export default {
  component: 'jh-test',
  title: 'Components/Test',
  parameters: {
    actions: {
      handles: ['jh-event'],
    },
  },
  argTypes: {
    'some-attribute': {
      control: 'text',
    },
    attribute: {
      control: 'boolean',
    }
  },
};

export const Overview = { render: (args) => html`
  <jh-test></jh-test>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <jh-test></jh-test>
`};

Playground.args = {

};

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = { render: (args) => html`
  <jh-test></jh-test>
`};

Default.argTypes = {
  ...disableControls,
};



