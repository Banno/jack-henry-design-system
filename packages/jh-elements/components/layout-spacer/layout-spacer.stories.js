/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import { action } from 'storybook/actions';
import './layout-spacer.js';
import '../layout-hstack/layout-hstack.js';
import '../button/button.js';

const storyStyles = css`
jh-layout-spacer {
  background-color: lightblue;
}
`;

const disableControls = {
  attribute: { control: { disable: true } },
  'some-attribute': { control: { disable: true } },
}

function logCustomEvent(name, e) {
  return action(name)({
    detail: e.detail,
    type: e.type,
    bubbles: e.bubbles,
    cancelable: e.cancelable,
    composed: e.composed,
    currentTarget: e.currentTarget,
    defaultPrevented: e.defaultPrevented,
    eventPhase: e.eventPhase,
    isTrusted: e.isTrusted,
    target: e.target,
    timeStamp: e.timeStamp,
  });
}

export default {
  component: 'jh-layout-spacer',
  title: 'Primitives/Layout Spacer',
  tag: 'beta',
  decorators: [
    (story) => html`
      <div
        @jh-event=${(e) => logCustomEvent('jh-event', e)}
      >
        ${story()}
      </div>
    `,
  ],
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
  <jh-layout-hstack padding="100">
    <jh-button label="Button 1"></jh-button>
    <jh-layout-spacer></jh-layout-spacer>
    <jh-button label="Button 2"></jh-button>
  </jh-layout-hstack>
`};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = { render: (args) => html`
  <jh-layout-hstack padding="100">
    <jh-button label="Button 1"></jh-button>
    <jh-button label="Button 2"></jh-button>
    <jh-layout-spacer></jh-layout-spacer>
    <jh-button label="Button 3"></jh-button>
  </jh-layout-hstack>
`};

Playground.args = {

};

Playground.parameters = {
  theme: 'both-themes',
  styles: storyStyles,
};

export const Default = { render: (args) => html`
  <jh-layout-spacer></jh-layout-spacer>
`};

Default.argTypes = {
  ...disableControls,
};



