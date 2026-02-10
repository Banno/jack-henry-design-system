// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import './select.js';
import '../button/button.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';

const storyStyles = css`
  .overview-story jh-select {
    margin-bottom: 8px;
  }
`;

const disableControls = {
  'accessible-label': { control: { disable: true } },
  disabled: { control: { disable: true } },
  'error-text': { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  invalid: { control: { disable: true } },
  label: { control: { disable: true } },
  multiple: { control: { disable: true } },
  name: { control: { disable: true } },
  'open-direction': { control: { disable: true } },
  required: { control: { disable: true } },
  'show-indicator': { control: { disable: true } },
  size: { control: { disable: true } },
  value: { control: { disable: true } },
};

const sampleOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
  { label: 'Option 5', value: 'option5' },
];

const countryOptions = [
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Spain', value: 'es' },
  { label: 'Italy', value: 'it' },
  { label: 'Australia', value: 'au' },
  { label: 'Japan', value: 'jp' },
  { label: 'Brazil', value: 'br' },
];

const manyOptions = Array.from({ length: 50 }, (_, i) => ({
  label: `Item ${i + 1}`,
  value: `item${i + 1}`,
}));

export default {
  component: 'jh-select',
  title: 'Components/Select',
  parameters: {
    actions: {
      handles: ['jh-select:change', 'jh-select:open', 'jh-select:close'],
    },
  },
  argTypes: {
    'accessible-label': {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    'error-text': {
      control: 'text',
    },
    'helper-text': {
      control: 'text',
    },
    invalid: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    multiple: {
      control: 'boolean',
    },
    name: {
      control: 'text',
    },
    'open-direction': {
      control: 'select',
      options: ['down', 'up'],
    },
    required: {
      control: 'boolean',
    },
    'show-indicator': {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    value: {
      control: 'text',
    },
    form: { table: { disable: true } },
  },
};

export const Overview = {
  render: (args) => html`
    <div class="overview-story">
      <jh-select
        label="Label"
        helper-text="Helper text"
        required
        show-indicator
        .options=${sampleOptions}
      ></jh-select>
      <jh-select
        label="Label"
        error-text="Error message"
        invalid
        .options=${sampleOptions}
      ></jh-select>
    </div>
  `,
};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = {
  render: (args) => html`
    <jh-select
      accessible-label=${ifDefined(
        args['accessible-label'] === '' ? null : args['accessible-label']
      )}
      ?disabled=${args.disabled}
      error-text=${ifDefined(
        args['error-text'] === '' ? null : args['error-text']
      )}
      helper-text=${ifDefined(
        args['helper-text'] === '' ? null : args['helper-text']
      )}
      ?invalid=${args.invalid}
      label=${ifDefined(args.label === '' ? null : args.label)}
      ?multiple=${args.multiple}
      name=${ifDefined(args.name === '' ? null : args.name)}
      open-direction=${args['open-direction']}
      ?required=${args.required}
      ?show-indicator=${args['show-indicator']}
      size=${args.size}
      value=${ifDefined(args.value === '' ? null : args.value)}
      .options=${sampleOptions}
    ></jh-select>
  `,
};

Playground.args = {
  'accessible-label': null,
  disabled: false,
  'error-text': 'Error text',
  'helper-text': 'Helper text',
  invalid: false,
  label: 'Label',
  multiple: false,
  name: null,
  'open-direction': 'down',
  required: false,
  'show-indicator': false,
  size: 'medium',
  value: null,
};

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = {
  render: (args) => html`
    <jh-select .options=${sampleOptions}></jh-select>
  `,
};

Default.argTypes = {
  ...disableControls,
};

export const Sizes = {
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
      <jh-select
        label="Small"
        size="small"
        .options=${sampleOptions}
      ></jh-select>
      <jh-select
        label="Medium"
        size="medium"
        .options=${sampleOptions}
      ></jh-select>
      <jh-select
        label="Large"
        size="large"
        .options=${sampleOptions}
      ></jh-select>
    </div>
  `,
};

Sizes.argTypes = {
  ...disableControls,
};

export const States = {
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
      <jh-select
        label="Default"
        .options=${sampleOptions}
      ></jh-select>
      <jh-select
        label="With value"
        value="option2"
        .options=${sampleOptions}
      ></jh-select>
      <jh-select
        label="Disabled"
        disabled
        value="option1"
        .options=${sampleOptions}
      ></jh-select>
      <jh-select
        label="Invalid"
        invalid
        error-text="This field is required."
        .options=${sampleOptions}
      ></jh-select>
    </div>
  `,
};

States.argTypes = {
  ...disableControls,
};

export const OpenDirection = {
  render: (args) => html`
    <div style="display: flex; gap: 24px; margin-top: 200px;">
      <jh-select
        label="Opens down (default)"
        open-direction="down"
        .options=${sampleOptions}
      ></jh-select>
      <jh-select
        label="Opens up"
        open-direction="up"
        .options=${sampleOptions}
      ></jh-select>
    </div>
  `,
};

OpenDirection.argTypes = {
  ...disableControls,
};

export const ManyOptions = {
  render: (args) => html`
    <jh-select
      label="Select with many options"
      .options=${manyOptions}
    ></jh-select>
  `,
};

ManyOptions.argTypes = {
  ...disableControls,
};

export const MultipleSelect = {
  render: (args) => html`
    <jh-select
      label="Select multiple countries"
      ?multiple=${args.multiple}
      .options=${countryOptions}
    ></jh-select>
  `,
};

MultipleSelect.args = {
  multiple: true,
};

MultipleSelect.argTypes = {
  ...disableControls,
  multiple: { control: { disable: false } },
};

export const MultipleWithPreselection = {
  render: (args) => html`
    <jh-select
      label="Select countries"
      multiple
      .options=${countryOptions}
      .value=${['us', 'ca', 'uk']}
    ></jh-select>
  `,
};

MultipleWithPreselection.argTypes = {
  ...disableControls,
};

export const SingleVsMultiple = {
  render: (args) => html`
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <div style="flex: 1; min-width: 250px;">
        <jh-select
          label="Single select"
          .options=${countryOptions}
        ></jh-select>
      </div>
      <div style="flex: 1; min-width: 250px;">
        <jh-select
          label="Multiple select"
          multiple
          .options=${countryOptions}
        ></jh-select>
      </div>
    </div>
  `,
};

SingleVsMultiple.argTypes = {
  ...disableControls,
};

export const FormAssociated = {
  render: (args) => {
    const onClick = (event) => event.target.reset();
    return html`
      <form @submit=${submitAction()}>
        <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
          <jh-select
            label="Country"
            name="country"
            required
            show-indicator
            .options=${countryOptions}
          ></jh-select>
          <jh-button label="Submit" submit @click=${onClick}></jh-button>
        </div>
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

FormAssociated.argTypes = {
  ...disableControls,
};

FormAssociated.parameters = {
  styles: storyStyles,
};
