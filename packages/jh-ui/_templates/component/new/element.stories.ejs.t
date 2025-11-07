---
to: components/<%= unprefixedName %>/<%= unprefixedName %>.stories.js
#
# SPDX-FileCopyrightText: 2025 Jack Henry
# 
# SPDX-License-Identifier: Apache-2.0
---
/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
 
import { html, css } from 'lit';
import './<%= unprefixedName %>.js';

const storyStyles = css`

`;

const disableControls = {
  attribute: { control: { disable: true } },
  'some-attribute': { control: { disable: true } },
}

export default {
  component: '<%= elementName %>',
  title: 'Components/<%= titleName %>',
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
  <<%= elementName %>></<%= elementName %>>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <<%= elementName %>></<%= elementName %>>
`};

Playground.args = {

};

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = { render: (args) => html`
  <<%= elementName %>></<%= elementName %>>
`};

Default.argTypes = {
  ...disableControls,
};



