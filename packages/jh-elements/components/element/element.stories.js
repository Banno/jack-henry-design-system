/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import './element.js';

const storyStyles = css`

`;

const disableControls = {
  attribute: { control: { disable: true } },
  'some-attribute': { control: { disable: true } },
}

export default {
  component: 'jh-element',
  title: 'Components/Element',
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
  <jh-element></jh-element>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <jh-element></jh-element>
`};

Playground.args = {

};

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = { render: (args) => html`
  <jh-element></jh-element>
`};

Default.argTypes = {
  ...disableControls,
};



