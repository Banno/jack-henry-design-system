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
import { US_STATES_FLAT } from '@jack-henry/jh-datasets/datasets/us-states-flat.js';
import { US_STATES_GROUPED } from '@jack-henry/jh-datasets/datasets/us-states-grouped.js';
import { BIRTH_YEARS } from '@jack-henry/jh-datasets/datasets/birth-years.js';
import { manageDataset } from '@jack-henry/jh-datasets/utils/manageDataset.js';

const testOptions = [
  { groupLabel: "Account types", groupValues: [
    {  value: "checking-01" },
    {  value: "savings-01", disabled: true },
    { value: "money-market-01", selected: true },
  ]},
  { groupLabel: "Credit Cards", groupValues: [
    { label: "Cash Back Rewards with a much longer label for testing", value: "cc-cash-back" },
    { label: "Travel Rewards", value: "cc-travel" },
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
.scrollable-container {
  height: 200px;
  overflow: auto;
  border: 1px solid #ccc;
  padding: 16px;
}
.scrollable-content {
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.menu-flip-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 16px;
  box-sizing: border-box;
}
`;

const disableControls = {
  'accessible-label': { control: { disable: true } },
  autocomplete: { control: { disable: true } },
  disabled: { control: { disable: true } },
  'error-text': { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  'hide-left-slot': { control: { disable: true } },
  'hide-right-slot': { control: { disable: true } },
  invalid: { control: { disable: true } },
  label: { control: { disable: true } },
  name: { control: { disable: true } },
  'menu-position': { control: { disable: true } },
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
    'accessible-label': { control: 'text' },
    autocomplete: { control: 'text' },
    disabled: { control: 'boolean' },
    'error-text': { control: 'text' },
    'helper-text': { control: 'text' },
    'hide-left-slot': { control: 'boolean' },
    'hide-right-slot': { control: 'boolean' },
    invalid: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    'menu-position': {
      control: 'select',
      options: ['bottom', 'top'],
    },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
    'show-indicator': { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    'flip-disabled': { control: 'boolean' },
        'jh-input-right': {
      table: {
        disable: true,
      },
    },
    'jh-input-left': {
      table: {
        disable: true,
      },
    },
  },
};

export const Overview = { render: (args) => html`
  <jh-select .options=${US_STATES_FLAT}></jh-select>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <jh-select
    accessible-label=${ifDefined(args['accessible-label'] === '' ? null : args['accessible-label'])}
    autocomplete=${ifDefined(args.autocomplete === '' ? null : args.autocomplete)}
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
`};

Playground.args = {
  'accessible-label': null,
  'accessible-label-clear-button': null,
  autocomplete: null,
  disabled: false,
  'error-text': null,
  'helper-text': null,
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

Playground.parameters = {
  theme: 'both-themes',
};

export const Datasets = { render: (args) => {
  const customizedData = manageDataset({
    dataset: BIRTH_YEARS,
    initialValue: null,
    disabledItems: ["1910", "1920", "1930"],
    emptyLabel: 'Select your birth year...',
  });

  return html`
    <h3>US states flat</h3>
    <jh-select label="US States (flat)" .options=${US_STATES_FLAT}></jh-select>

    <h3>US states grouped</h3>
    <jh-select label="US States (grouped)" .options=${US_STATES_GROUPED}></jh-select>

    <h3>manageDataset — initial value, disabled items, empty label</h3>
    <jh-select label="Customized birth years" .options=${customizedData}></jh-select>
  `;
}};

Datasets.argTypes = {
  ...disableControls,
};

export const MenuFlip = { render: (args) => html`
  <div class="menu-flip-container">
    <div>
      <h3>Near the top — menu should open downward</h3>
      <jh-select label="Top select" .options=${US_STATES_FLAT} helper-text="helper text" menu-position="top" invalid error-text="Error text"></jh-select>
    </div>
    <div>
      <h3>Near the bottom — menu should flip upward</h3>
      <jh-select label="Bottom select" helper-text="helper text" .options=${US_STATES_FLAT}  invalid error-text="Error text" menu-position="bottom"></jh-select>
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
  `,
};

export const FormAssociated = {
  render: (args) => {
    const onClick = (event) => event.target.reset();
    return html`
      <form @submit=${submitAction()}>
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



