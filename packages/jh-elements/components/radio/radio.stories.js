// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/actions';
import './radio.js';

const storyStyles = css`
  .story-decorator {
    display: flex;
    justify-content: center;
  }
  jh-radio {
    margin-right: 16px;
  }
`;

const disableControls = {
  label: { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  value: { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
  checked: { control: { disable: true } },
  disabled: { control: { disable: true } },
};

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
  component: 'jh-radio',
  title: 'Components/Radio',
  decorators: [
    (story) => html`
      <div class="story-decorator"
        @jh-change=${(e) => logCustomEvent('jh-change', e)}
      >
        ${story()}
      </div>
    `,
  ],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    'helper-text': {
      control: 'text',
    },
    'accessible-label': {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
};

export const Overview = {
  render: (args) => html`
    <jh-radio></jh-radio>
    <jh-radio checked></jh-radio>
    <jh-radio label="Label"></jh-radio>
    <jh-radio label="Label" helper-text="Helper text"></jh-radio>
    <jh-radio disabled></jh-radio>
    <jh-radio checked disabled></jh-radio>
    <jh-radio label="Label" helper-text="Helper text" disabled></jh-radio>
  `,
};

Overview.argTypes = { ...disableControls };

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = {
  render: (args) => html`
    <div style="width: 200px;">
      <jh-radio
        label="${args.label}"
        helper-text="${args['helper-text']}"
        value=${ifDefined(args.value)}
        accessible-label=${ifDefined(args['accessible-label'])}
        ?checked=${args.checked}
        ?disabled=${args.disabled}
      ></jh-radio>
    </div>
  `,
};

Playground.args = {
  checked: false,
  disabled: false,
  label: 'Label',
  'helper-text': 'Helper text',
  value: 'Label',
  'accessible-label': 'aria label',
};

Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};

export const Default = { render: (args) => html`<jh-radio></jh-radio>` };

Default.argTypes = { ...disableControls };

Default.parameters = {
  styles: storyStyles,
};
