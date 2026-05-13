/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './input-number.js';
import '@jack-henry/jh-icons/icons-wc/icon-thumbs-up.js';
import '@jack-henry/jh-icons/icons-wc/icon-thumbs-down.js';
import '@jack-henry/jh-icons/icons-wc/icon-user.js';

const disableControls = {
  'max': { control: { disable: true } },
  'min': { control: { disable: true } },
  'step': { control: { disable: true } },
  'accessible-label-increment-stepper': { control: { disable: true } },
  'accessible-label-decrement-stepper': { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
  'accessible-label-clear-button': { control: { disable: true } },
  autocomplete: { control: { disable: true } },
  disabled: { control: { disable: true } },
  enterkeyhint: { control: { disable: true } },
  'error-text': { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  'hide-left-slot': { control: { disable: true } },
  inputmode: { control: { disable: true } },
  invalid: { control: { disable: true } },
  label: { control: { disable: true } },
  name: { control: { disable: true } },
  readonly: { control: { disable: true } },
  required: { control: { disable: true } },
  'show-char-count': { control: { disable: true } },
  'show-clear-button': { control: { disable: true } },
  'show-indicator': { control: { disable: true } },
  size: { control: { disable: true } },
  value: { control: { disable: true } },
};

const storyStyles = css`
  div[id^="story-root"] {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .overview-story {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
  }
`;

export default {
  component: 'jh-input-number',
  title: 'Components/Input Number',
  tags: ['beta'],
  parameters: {
    actions: {
      handles: ['jh-change', 'jh-select', 'jh-input', 'jh-input:clear-button-click'],
    },
  },
  argTypes: {
    'max': {
      control: 'text',
    },
    'min': {
      control: 'text',
    },
    'step': {
      control: 'text',
    },
    'accessible-label-increment-stepper': {
      control: 'text',
    },
    'accessible-label-decrement-stepper': {
      control: 'text',
    },
    'accessible-label': {
      control: 'text',
    },
    'accessible-label-clear-button': {
      control: 'text',
    },
    autocomplete: {
      control: 'text'
    },
    accessibleCounterText: {
      control: 'text'
    },
    disabled: {
      control: 'boolean',
    },
    enterkeyhint: {
      control: 'text',
    },
    'error-text': {
      control: 'text',
    },
    'helper-text': {
      control: 'text',
    },
    'hide-left-slot': {
      control: 'boolean',
    },
    'hide-right-slot': {
      table: { 
        disable: true 
      },
    },
    inputmode: {
      control: 'text',
    },
    invalid: {
      control: 'boolean',
    },
    'input-mask': {
      table: { 
        disable: true 
      },
    },
    'jh-input-right': {
      table: { 
        disable: true 
      },
    },
    'jh-maxlength': {
      table: { 
        disable: true 
      },
    },
    label: {
      control: 'text',
    },
    maxlength: {
      table: { 
        disable: true 
      }
    },
    minlength: {
      table: { 
        disable: true 
      }
    },
    name: {
      control: 'text',
    },
    readonly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    'show-char-count': {
      control: 'boolean'
    },
    'show-clear-button': {
      control: 'boolean'
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
  },
};

export const Overview = { render: (args) => html`
  <div class="overview-story">
    <jh-input-number label="Rate (%)" step="0.25"></jh-input-number>
    <jh-input-number label="Quantity" helper-text="Enter a number between 1 and 10" min="1" max="10"></jh-input-number>
    <jh-input-number label="Amount" invalid error-text="This field is required" required show-indicator></jh-input-number>
  </div>
`};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = { render: (args) => html`
  <jh-input-number
      min=${ifDefined(args.min === '' ? null : args.min)}
      max=${ifDefined(args.max === '' ? null : args.max)}
      step=${ifDefined(args.step === '' ? null : args.step)}
      accessible-label-increment-stepper=${ifDefined(
        args['accessible-label-increment-stepper'] === ''
          ? null
          : args['accessible-label-increment-stepper']
      )}
      accessible-label-decrement-stepper=${ifDefined(
        args['accessible-label-decrement-stepper'] === ''
          ? null
          : args['accessible-label-decrement-stepper']
      )}
     accessible-label=${ifDefined(
        args['accessible-label'] === ''
          ? null
          : args['accessible-label']
      )}
      accessible-label-clear-button=${ifDefined(
        args['accessible-label-clear-button'] === ''
          ? null
          : args['accessible-label-clear-button']
      )}
      autocomplete=${ifDefined(
        args.autocomplete === '' ? null : args.autocomplete
      )}
      ?disabled=${args.disabled}
      enterkeyhint=${ifDefined(
        args.enterkeyhint === '' ? null : args.enterkeyhint
      )}
      error-text=${ifDefined(
        args['error-text'] === '' ? null : args['error-text']
      )}
      helper-text=${ifDefined(
        args['helper-text'] === '' ? null : args['helper-text']
      )}
      ?hide-left-slot=${args['hide-left-slot']}
      inputmode=${ifDefined(args.inputmode === '' ? null : args.inputmode)}
      ?invalid=${args.invalid}
      label=${ifDefined(args.label === '' ? null : args.label)}
      name=${ifDefined(args.name || args.name === '' ? null : args.name)}
      ?readonly=${args.readonly}
      ?required=${args.required}
      ?show-char-count=${args['show-char-count']}
      ?show-clear-button=${args['show-clear-button']}
      ?show-indicator=${args['show-indicator']}
      size=${args.size}
      value=${ifDefined(args.value === '' ? null : args.value)}
  ></jh-input-number>
`};

Playground.args = {
  min: null,
  max: null,
  step: null,
  'accessible-label-increment-stepper': null,
  'accessible-label-decrement-stepper': null,
  size: 'medium',
  disabled: false,
  readonly: false,
  invalid: false,
  'show-indicator': false,
  'show-clear-button': true,
  'show-char-count': false,
  required: false,
  label: 'Label',
  enterkeyhint: null,
  'error-text': 'Error text',
  'helper-text': 'Helper text',
  'hide-left-slot': false,
  'accessible-label': null,
  'accessible-label-clear-button': null,
  autocomplete: null,
  inputmode: null,
  name: null,
  value: null,
};

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = { render: (args) => html`
  <jh-input-number></jh-input-number>
`};

Default.argTypes = {
  ...disableControls,
};

export const Slots = { render: (args) => html`
  <jh-input-number
      min=${ifDefined(args.min === '' ? null : args.min)}
      max=${ifDefined(args.max === '' ? null : args.max)}
      step=${ifDefined(args.step === '' ? null : args.step)}
      accessible-label-increment-stepper=${ifDefined(
        args['accessible-label-increment-stepper'] === ''
          ? null
          : args['accessible-label-increment-stepper']
      )}
      accessible-label-decrement-stepper=${ifDefined(
        args['accessible-label-decrement-stepper'] === ''
          ? null
          : args['accessible-label-decrement-stepper']
      )}
      ?hide-left-slot=${args['hide-left-slot']}
      label="User rating"
      helper-text="Use thumbs down and thumbs up to decrease or increase this user's rating"
      ?disabled=${args.disabled}
      ?readonly=${args.readonly}
  ><jh-icon-user slot="jh-input-left"></jh-icon-user><jh-icon-thumbs-down slot="jh-input-number-stepper-decrement"></jh-icon-thumbs-down><jh-icon-thumbs-up slot="jh-input-number-stepper-increment"></jh-icon-thumbs-up></jh-input-number>
`};

Slots.args = {
  'hide-left-slot': false,
  min: null,
  max: null,
  step: null,
  'accessible-label-increment-stepper': null,
  'accessible-label-decrement-stepper': null,
  disabled: false,
  readonly: false,
};

Slots.argTypes = {
  ...disableControls,
  'hide-left-slot': { table: { disable: false } },
  min: { table: { disable: false } },
  max: { table: { disable: false } },
  'accessible-label-increment-stepper': { table: { disable: false } },
  'accessible-label-decrement-stepper': { table: { disable: false } },
  step: { table: { disable: false } },
  disabled: { table: { disable: false } },
  readonly: { table: { disable: false } },
};
