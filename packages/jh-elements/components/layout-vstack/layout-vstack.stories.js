/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import { action } from 'storybook/actions';
import './layout-vstack.js';
import '../button/button.js';

const storyStyles = css`

`;

const dimensionOptions = ['0', '25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'];

const alignOptions = ['start', 'end', 'center', 'stretch', 'baseline'];

const justifyOptions = ['start', 'end', 'center', 'between', 'around', 'evenly'];

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
  component: 'jh-layout-vstack',
  title: 'Primitives/Layout Vstack',
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
    gap: {
      control: 'select',
      options: dimensionOptions,
    },
    padding: {
      control: 'select',
      options: dimensionOptions,
    },
    align: {
      control: 'select',
      options: alignOptions,
    },
    justify: {
      control: 'select',
      options: justifyOptions,
    },
    wrap: {
      control: 'boolean',
    },
    'some-attribute': {
      control: 'text',
    },
    attribute: {
      control: 'boolean',
    }
  },
};

export const Overview = { render: (args) => html`
  <jh-layout-vstack>
    <jh-button label="Button 1"></jh-button>
    <jh-button label="Button 2"></jh-button>
    <jh-button label="Button 3"></jh-button>
  </jh-layout-vstack>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <jh-layout-vstack
    gap=${args.gap}
    padding=${args.padding}
    align=${args.align}
    justify=${args.justify}
    ?wrap=${args.wrap}
  >
    <jh-button label="Button 1"></jh-button>
    <jh-button label="Button 2"></jh-button>
    <jh-button label="Button 3"></jh-button>
  </jh-layout-vstack>
`};

Playground.args = {
  gap: '100',
  padding: '100',
  align: 'stretch',
  justify: 'start',
  wrap: false,
};

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = { render: (args) => html`
  <jh-layout-vstack></jh-layout-vstack>
`};

Default.argTypes = {
  ...disableControls,
};



