/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import { action } from '@storybook/addon-actions';
import './select.js';
import { US_STATES_FLAT, US_STATES_GROUPED, getPresetData } from './data-presets.js';

const testOptions = [
  { groupLabel: "Account types", groupValues: [
    { label: "Basic Checking", value: "checking-01" },
    { label: "High-Yield Savings", value: "savings-01", disabled: true },
    { label: "Money Market", value: "money-market-01", selected: true },
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
  attribute: { control: { disable: true } },
  'some-attribute': { control: { disable: true } },
}

export default {
  component: 'jh-select',
  title: 'Components/Select',
  parameters: {
    actions: {
      handles: ['jh-event'],
    },
  },
  argTypes: {
    'menu-position': {
      control: 'select',
      options: [
        'bottom',
        'top',
      ],
    },
    'flip-disabled': {
      control: 'boolean',
    }
  },
};

export const Overview = { render: (args) => html`
  <jh-select preset="us-states-flat"></jh-select>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => {
  const el = document.createElement('jh-select');
  el.options = testOptions;
  el.setAttribute('menu-position', args['menu-position']);
  if (args['flip-disabled']) el.setAttribute('flip-disabled', '');
  return el;
}};

Playground.args = {
  'menu-position': 'bottom',
  'flip-disabled': false,
};

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = { render: (args) => html`
  <jh-select></jh-select>
`};

Default.argTypes = {
  ...disableControls,
};

export const ScrollableContainer = { render: (args) => html`
  <div class="scrollable-container">
    <div class="scrollable-content">
      <p>Scroll down to find the select</p>
      <jh-select></jh-select>
      <p>Extra content to enable scrolling</p>
      <p>Keep scrolling...</p>
      <p>More content below</p>
      <jh-select></jh-select>
      <p>Bottom of scrollable area</p>
    </div>
  </div>
`};

ScrollableContainer.argTypes = {
  ...disableControls,
};
ScrollableContainer.parameters = {
  styles: storyStyles,
};

export const PresetDatasets = { render: (args) => {
  const customizedData = getPresetData({
    dataset: US_STATES_FLAT,
    initialValue: null,
    disabledItems: ['AK', 'HI'],
    emptyLabel: 'Select a state...',
  });

  return html`
    <h3>Flat preset (via attribute)</h3>
    <jh-select label="US States (flat)" preset="us-states-flat"></jh-select>

    <h3>Grouped preset (via attribute)</h3>
    <jh-select label="US States (grouped)" preset="us-states-grouped"></jh-select>

    <h3>getPresetData — initial value, disabled items, empty label</h3>
    <jh-select label="Customized states" .options=${customizedData}></jh-select>
  `;
}};

PresetDatasets.argTypes = {
  ...disableControls,
};

export const MenuFlip = { render: (args) => html`
  <div class="menu-flip-container">
    <div>
      <h3>Near the top — menu should open downward</h3>
      <jh-select label="Top select" preset="us-states-flat" menu-position="top"></jh-select>
    </div>
    <div>
      <h3>Near the bottom — menu should flip upward</h3>
      <jh-select label="Bottom select" preset="us-states-flat" menu-position="bottom"></jh-select>
    </div>
  </div>
`};

MenuFlip.argTypes = {
  ...disableControls,
};
MenuFlip.parameters = {
  styles: storyStyles,
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
          preset="us-states-flat"
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
  name: 'state',
  label: 'Select a state',
  required: false,
};

FormAssociated.argTypes = {
  ...disableControls,
};

FormAssociated.parameters = {
  styles: storyStyles,
};



