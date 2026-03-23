/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import './select.js';

const storyStyles = css`

`;

const disableControls = {
  attribute: { control: { disable: true } },
  'some-attribute': { control: { disable: true } },
}

export default {
  component: 'jh-select',
  title: 'Components/Select',
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
  <jh-select></jh-select>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <jh-select></jh-select>
`};

Playground.args = {

};

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = { render: (args) => html`
  <jh-select></jh-select>
`};

Default.argTypes = {
  ...disableControls,
};



