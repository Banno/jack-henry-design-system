---
to: components/<%= unprefixedName %>/<%= unprefixedName %>.stories.js
# 
# Copyright 2025 Jack Henry.
# SPDX-License-Identifier: Apache-2.0
# See LICENSE file in project root for full terms.
---
/**
 * Copyright 2025 Jack Henry.
 * SPDX-License-Identifier: Apache-2.0
 * * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * * http://www.apache.org/licenses/LICENSE-2.0
 * * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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



