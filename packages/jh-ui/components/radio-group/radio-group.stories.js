// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import './radio-group.js';
import '../radio/radio.js';
import '../button/button.js';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit/directives/if-defined.js';

const storyStyles = css`
  div[id^="story-root"] {
    display: flex;
    justify-content: center;
  }
  .container {
    margin-right: 40px;
    margin-bottom: 20px;
    width: 400px;
  }
`;

const disableControls = {
  label: { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  'error-text': { control: { disable: true } },
  name: { control: { disable: true } },
  value: { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
  orientation: { control: { disable: true } },
  invalid: { control: { disable: true } },
  required: { control: { disable: true } },
  'show-indicator': { control: { disable: true } },
};

export default {
  component: 'jh-radio-group',
  title: 'Components/Radio Group',
  parameters: {
    actions: {
      handles: ['jh-change'],
    },
  },
  argTypes: {
    required: {
      control: 'boolean',
    },
    'show-indicator': {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    'helper-text': {
      control: 'text',
    },
    'error-text': {
      control: 'text',
    },
    'accessible-label': {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    form: { table: { disable: true } },
  },
};

export const Overview = {
  render: (args) => html` <div class="container">
      <jh-radio-group
        label="Label"
        helper-text="Helper text group"
        required
        show-indicator
        invalid
      >
        <jh-radio
          label="radio 1"
          helper-text="Helper text"
          value="radio-1"
        ></jh-radio>
        <jh-radio
          label="radio 2"
          helper-text="Helper text"
          value="radio-2"
        ></jh-radio>
        <jh-radio
          label="radio 3"
          helper-text="Helper text"
          value="radio-3"
          checked
        ></jh-radio>
      </jh-radio-group>
    </div>
    <div class="container">
      <jh-radio-group
        label="Label"
        helper-text="Helper text group"
        orientation="horizontal"
        error-text="Error text"
        invalid
      >
        <jh-radio label="radio 4" value="radio-4"></jh-radio>
        <jh-radio label="radio 5" value="radio-5" disabled></jh-radio>
        <jh-radio label="radio 6" value="radio-6"></jh-radio>
      </jh-radio-group>
    </div>`,
};

Overview.argTypes = { 
  ...disableControls 
};
Overview.parameters = {
  styles: storyStyles,
};

export const Playground = {
  render: (args) => html` <div>
    <jh-radio-group
      label=${ifDefined(args.label && args.label !== '' ? args.label : null)}
      helper-text=${args['helper-text']}
      ?required=${args.required}
      ?show-indicator=${args['show-indicator']}
      orientation=${args.orientation}
      accessible-label=${args['accessible-label']}
      name=${args.name}
      ?invalid=${args.invalid}
      error-text=${args['error-text']}
      value=${args.value}
    >
      <jh-radio
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur metus massa, mollis euismod lorem ut"
        value="radio-1"
      ></jh-radio>
      <jh-radio label="Label" value="radio-2"></jh-radio>
      <jh-radio label="Slightly longer label" value="radio-3"></jh-radio>
    </jh-radio-group>
  </div>`,
};

Playground.args = {
  label: 'Label',
  'helper-text': 'Helper text',
  required: true,
  'show-indicator': true,
  orientation: 'horizontal',
  'accessible-label': '',
  name: 'options',
  invalid: true,
  'error-text': 'Error',
  value: 'radio-1',
};
Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};

export const FormAssociated = {
  render: (args) => {
    const onClick = (event) => event.target.reset();
    return html`
      <form @submit=${submitAction()}>
        <div class="container">
          <jh-radio-group name="test radios">
            <jh-radio
              label="radio 1"
              helper-text="Helper text"
              value="radio-1"
              checked
            ></jh-radio>
            <jh-radio
              label="radio 2"
              helper-text="Helper text"
              value="radio-2"
            ></jh-radio>
            <jh-radio
              label="radio 3"
              helper-text="Helper text"
              value="radio-3"
            ></jh-radio>
          </jh-radio-group>
        </div>
        <jh-button label="Submit" submit @click=${onClick}></jh-button>
      </form>
    `;
  },
};

/**
 * Handle a form submit event and log the action but don't actually submit the form
 */
function submitAction() {
  const onSubmit = action('onSubmit');
  const onFormdata = action('onFormdata');
  return (event) => {
    event.preventDefault();
    onFormdata([...new FormData(event.target)]);
    onSubmit(event);
  };
}
FormAssociated.argTypes = { ...disableControls };
FormAssociated.parameters = {
  styles: storyStyles,
};
