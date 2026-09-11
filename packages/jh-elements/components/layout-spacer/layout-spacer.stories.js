/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import './layout-spacer.js';
import '../layout-flex/layout-flex.js';
import '../button/button.js';

const storyStyles = css`
jh-layout-spacer {
  background-color: lightblue;
}
`;

export default {
  component: 'jh-layout-spacer',
  title: 'Primitives/Layout Spacer',
  tags: ['beta'],
};

export const Overview = { render: (args) => html`
  <jh-layout-flex orientation="horizontal" padding="100">
    <jh-button label="Button 1"></jh-button>
    <jh-layout-spacer></jh-layout-spacer>
    <jh-button label="Button 2"></jh-button>
  </jh-layout-flex>
`};


Overview.parameters = {
  styles: storyStyles,
};

export const Playground = { render: (args) => html`
  <jh-layout-flex orientation="horizontal" padding="100">
    <jh-button label="Button 1"></jh-button>
    <jh-button label="Button 2"></jh-button>
    <jh-layout-spacer></jh-layout-spacer>
    <jh-button label="Button 3"></jh-button>
  </jh-layout-flex>
`};

Playground.parameters = {
  theme: 'both-themes',
  styles: storyStyles,
};



