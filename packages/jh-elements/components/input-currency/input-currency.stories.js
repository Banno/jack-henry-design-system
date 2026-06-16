/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import { action } from 'storybook/actions';
import './input-currency.js';

const storyStyles = css`

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
  component: 'jh-input-currency',
  title: 'Components/Input Currency',
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
  <jh-input-currency></jh-input-currency>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <jh-input-currency></jh-input-currency>
`};

Playground.args = {

};

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = { render: (args) => html`
  <jh-input-currency></jh-input-currency>
`};

Default.argTypes = {
  ...disableControls,
};



