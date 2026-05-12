/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import './select.js';
import "@jack-henry/jh-icons/icons-wc/icon-piggy-bank.js";
import "@jack-henry/jh-icons/icons-wc/icon-arrow-up-small.js";
import "@jack-henry/jh-icons/icons-wc/icon-arrow-down-small.js";
import "../button/button.js";
// import { US_STATES_FLAT } from '@jack-henry/jh-datasets/datasets/us-states-flat.js';
// import { US_STATES_GROUPED } from '@jack-henry/jh-datasets/datasets/us-states-grouped.js';
// import { manageDataset } from '@jack-henry/jh-datasets/utils/manageDataset.js';

const testOptions = [
  { groupLabel: "Account types", groupValues: [
    {  value: "checking-01" },
    {  value: "savings-01", disabled: true },
    { value: "money-market-01" },
  ]},
  { groupLabel: "Credit Cards", groupValues: [
    { label: "Cash Back Rewards with a much longer label for testing", value: "cc-cash-back" },
    { label: "Travel Rewards", value: "cc-travel", selected: true },
    { label: "Low Interest", value: "cc-low-interest" },
  ]},
  { label: "Personal Loan", value: "loan-personal" },
  { label: "Mortgage Refinance", value: "mortgage-refi" },
  { label: "Certificate of Deposit", value: "cd-12-month" },
  { label: "IRA Investment", value: "ira-traditional" },
  { label: "Health Savings Account", value: "hsa-01" },
  { label: "Brokerage Account", value: "brokerage-standard" }
];

const storyStyles = css`
.select-container {
  width: 300px;
  margin-bottom: 20px;
}
.menu-flip-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 16px;
  width: 300px;
  box-sizing: border-box;
}
`;

const disableControls = {
  'accessible-label': { control: { disable: true } },
  disabled: { control: { disable: true } },
  'error-text': { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  'hide-left-slot': { control: { disable: true } },
  'hide-right-slot': { control: { disable: true } },
  invalid: { control: { disable: true } },
  label: { control: { disable: true } },
  name: { control: { disable: true } },
  'menu-position': { control: { disable: true } },
  options: { control: { disable: true } },
  readonly: { control: { disable: true } },
  required: { control: { disable: true } },
  'show-indicator': { control: { disable: true } },
  size: { control: { disable: true } },
  'flip-disabled': { control: { disable: true } },
}

export default {
  component: 'jh-select',
  title: 'Components/Select',
  tags: ['beta'],
  parameters: {
    actions: {
      handles: ['jh-change', 'jh-select'],
    },
  },
  argTypes: {
    'accessible-label': {
      control: 'text',
      description: 'Sets an `aria-label` on the select to assist screen reader users when no visible label is present.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select and prevents all user interactions. May cause the select to be ignored by assistive technologies (AT).',
    },
    'error-text': {
      control: 'text',
      description: 'Text to be displayed when the select has failed validation and `invalid` is true.',
    },
    'helper-text': {
      control: 'text',
      description: 'Provides additional context or guidance for using the select. For `helper-text` to be displayed, the `label` property must also be set.',
    },
    invalid: {
      control: 'boolean',
      description: 'Sets an `aria-invalid` attribute on the select to indicate the value supplied was invalid. Also displays `error-text` and error state styling when set.',
    },
    label: {
      control: 'text',
      description: 'Identifies what data should be selected.',
    },
    name: {
      control: 'text',
      description: 'Sets a name for the select control.',
    },
    'menu-position': {
      control: 'select',
      options: ['bottom', 'top'],
    },
    readonly: {
      control: 'boolean',
      description: 'Prevents users from changing the selected value. Removes all slotted content.',
    },
    required: { control: 'boolean' },
    'show-indicator': { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Sets the size of the select.',
    },
    value: {
      description: 'Sets the value of the select.',
      table: { disable: true }
    },
    'flip-disabled': { control: 'boolean' },
    // Hide inherited jh-input slots
    'jh-input-right': { table: { disable: true } },
    'jh-input-left': { table: { disable: true } },
    'jh-input-clear-button': { table: { disable: true } },
    // Hide inherited jh-input attributes/properties not relevant to select
    autocomplete: { table: { disable: true } },
    'accessible-label-clear-button': { table: { disable: true } },
    'enterkeyhint': { table: { disable: true } },
    'hide-left-slot': { table: { disable: true } },
    'hide-right-slot': { table: { disable: true } },
    'input-mask': { table: { disable: true } },
    'inputmode': { table: { disable: true } },
    'maxlength': { table: { disable: true } },
    'minlength': { table: { disable: true } },
    'show-char-count': { table: { disable: true } },
    'show-clear-button': { table: { disable: true } },
    // Hide inherited jh-input events not relevant to select
    'jh-select': { table: { disable: true } },
    'jh-input': { table: { disable: true } },
    'jh-maxlength': { table: { disable: true } },
    'jh-input:clear-button-click': { table: { disable: true } },
    // Hide inherited jh-input CSS custom properties
    '--jh-input-label-color-text': { table: { disable: true } },
    '--jh-input-field-color-background': { table: { disable: true } },
    '--jh-input-field-color-border-enabled': { table: { disable: true } },
    '--jh-input-field-border-radius': { table: { disable: true } },
    '--jh-input-color-focus': { table: { disable: true } },
    '--jh-input-field-color-border-focus': { table: { disable: true } },
    '--jh-input-field-color-border-hover': { table: { disable: true } },
    '--jh-input-field-color-border-active': { table: { disable: true } },
    '--jh-input-field-color-border-disabled': { table: { disable: true } },
    '--jh-input-opacity-disabled': { table: { disable: true } },
    '--jh-input-field-color-border-error': { table: { disable: true } },
    '--jh-input-clear-border-radius': { table: { disable: true } },
    '--jh-input-clear-color-background-enabled': { table: { disable: true } },
    '--jh-input-clear-color-border-enabled': { table: { disable: true } },
    '--jh-input-clear-icon-color-fill-enabled': { table: { disable: true } },
    '--jh-input-clear-color-background-focus': { table: { disable: true } },
    '--jh-input-clear-color-border-focus': { table: { disable: true } },
    '--jh-input-clear-color-focus': { table: { disable: true } },
    '--jh-input-clear-icon-color-fill-focus': { table: { disable: true } },
    '--jh-input-clear-color-background-hover': { table: { disable: true } },
    '--jh-input-clear-color-border-hover': { table: { disable: true } },
    '--jh-input-clear-icon-color-fill-hover': { table: { disable: true } },
    '--jh-input-clear-color-background-active': { table: { disable: true } },
    '--jh-input-clear-color-border-active': { table: { disable: true } },
    '--jh-input-clear-icon-color-fill-active': { table: { disable: true } },
    '--jh-input-required-color-text': { table: { disable: true } },
    '--jh-input-optional-color-text': { table: { disable: true } },
    '--jh-input-helper-color-text': { table: { disable: true } },
    '--jh-input-counter-color-text': { table: { disable: true } },
    '--jh-input-value-color-text': { table: { disable: true } },
    '--jh-input-error-color-text': { table: { disable: true } },
  },
};

export const Overview = { render: (args) => html`
  <jh-select .options=${testOptions} label="Select an account" helper-text="The accounts are grouped by type"></jh-select>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <div class="select-container">
  <jh-select
    accessible-label=${ifDefined(args['accessible-label'] === '' ? null : args['accessible-label'])}
    ?disabled=${args.disabled}
    error-text=${ifDefined(args['error-text'] === '' ? null : args['error-text'])}
    helper-text=${ifDefined(args['helper-text'] === '' ? null : args['helper-text'])}
    ?hide-left-slot=${args['hide-left-slot']}
    ?hide-right-slot=${args['hide-right-slot']}
    ?invalid=${args.invalid}
    label=${ifDefined(args.label === '' ? null : args.label)}
    name=${ifDefined(args.name === '' ? null : args.name)}
    menu-position=${args['menu-position']}
    ?readonly=${args.readonly}
    ?required=${args.required}
    ?show-indicator=${args['show-indicator']}
    size=${args.size}
    ?flip-disabled=${args['flip-disabled']}
    .options=${testOptions}
  ></jh-select>
  </div>`
};

Playground.args = {
  'accessible-label': null,
  'accessible-label-clear-button': null,
  autocomplete: null,
  disabled: false,
  'error-text': 'Error text',
  'helper-text': 'Helper text',
  'hide-left-slot': false,
  'hide-right-slot': false,
  invalid: false,
  label: 'Account',
  name: null,
  'menu-position': 'bottom',
  readonly: false,
  required: false,
  'show-clear-button': false,
  'show-indicator': false,
  size: 'medium',
  'flip-disabled': false,
};

Playground.argTypes = {
  options: { control: { disable: true } },
};

Playground.parameters = {
  theme: 'both-themes',
  styles: storyStyles,
};

// export const Datasets = { render: (args) => {
//   const customizedData = manageDataset({
//     dataset: US_STATES_FLAT,
//     initialValue: null,
//     disabledItems: ['AK', 'HI', 'PR', 'VI', 'GU', 'AS'],
//     emptyLabel: 'Select your state...',
//   });

//   return html`
//     <div class="select-container">
//       <jh-select label="US States (flat)" .options=${US_STATES_FLAT}></jh-select>
//     </div>
//     <div class="select-container">
//       <jh-select label="US States (grouped)" .options=${US_STATES_GROUPED}></jh-select>
//     </div>

//     <h3></h3>
//     <div class="select-container">
//       <jh-select label="US states customized" helper-text="Uses manageDataset to set initial value, disabled items, empty label" .options=${customizedData}></jh-select>
//     </div>
//   `;
// }};

// Datasets.argTypes = {
//   ...disableControls,
// };

// Datasets.parameters = {
//   styles: storyStyles,
// };

export const Empty = { render: (args) => html`
  <div class="select-container">
    <jh-select label="Select an account" .options=${null}></jh-select>
  </div>
`};

Empty.argTypes = {
  ...disableControls,
};

Empty.parameters = {
  styles: storyStyles,
};

export const MenuFlip = { render: (args) => html`
  <div class="menu-flip-container">
    <div>
      <jh-select label="Top select" .options=${testOptions} helper-text="should open on bottom" menu-position="top" invalid error-text="Error text"></jh-select>
    </div>
    <div>
      <jh-select label="Bottom select" helper-text="should open on top" .options=${testOptions}  invalid error-text="Error text" menu-position="bottom"></jh-select>
    </div>
  </div>
`};

MenuFlip.argTypes = {
  ...disableControls,
};
MenuFlip.parameters = {
  styles: storyStyles,
};

export const Slots = {
  args: {
    label: 'Select with all the Slots',
    options: [
      { value: 'checking', },
      { value: 'savings',  },
      { value: 'money-market', label: 'Money Market' },
    ],
  },
  render: (args) => html`
  <div class="select-container">
    <jh-select
      label=${args.label}
      .options=${args.options}
    >
    <jh-button slot="jh-select-trigger-left">
        <jh-icon-piggy-bank slot="jh-button-icon"></jh-icon-piggy-bank>
      </jh-button>
      <jh-icon-arrow-up-small slot="jh-select-trigger-open"></jh-icon-arrow-up-small>
      <jh-icon-arrow-down-small slot="jh-select-trigger-closed"></jh-icon-arrow-down-small>
    </jh-select>
  </div>
  `,
};

Slots.argTypes = {
  ...disableControls,
};
Slots.parameters = {
  styles: storyStyles,
};

export const FormAssociated = {
  render: (args) => {
    const onClick = (event) => event.target.reset();
    return html`
      <form @submit=${submitAction()} class="select-container">
        <jh-select
          name=${args.name}
          label=${args.label}
          ?required=${args.required}
          .options=${testOptions}
        ></jh-select>
        <jh-button label="Submit" submit @click=${onClick}></jh-button>
      </form>
    `;
  },
};

function submitAction() {
  const onSubmit = action('onSubmit');
  const onFormdata = action('onFormdata');
  return (event) => {
    event.preventDefault();
    onFormdata([...new FormData(event.target)]);
    onSubmit(event);
  };
}

FormAssociated.args = {
  name: 'account-type',
  label: 'Select an account type',
  required: false,
};

FormAssociated.argTypes = {
  ...disableControls,
};

FormAssociated.parameters = {
  styles: storyStyles,
};



