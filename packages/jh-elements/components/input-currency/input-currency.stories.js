// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/actions';
import './input-currency.js';

const storyStyles = css`
  .overview-story jh-input-currency {
    margin-bottom: 8px;
  }
`;

const disableControls = {
  'accessible-label': { control: { disable: true } },
  'accessible-label-clear-button': { control: { disable: true } },
  autocomplete: { control: { disable: true } },
  disabled: { control: { disable: true } },
  enterkeyhint: { control: { disable: true } },
  'error-text': { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  'hide-left-slot': { control: { disable: true } },
  'hide-right-slot': { control: { disable: true } },
  'horizontal-align': { control: { disable: true } },
  inputmode: { control: { disable: true } },
  invalid: { control: { disable: true } },
  label: { control: { disable: true } },
  name: { control: { disable: true } },
  prefix: { control: { disable: true } },
  readonly: { control: { disable: true } },
  required: { control: { disable: true } },
  suffix: { control: { disable: true } },
  'show-commas': { control: { disable: true } },
  'show-decimal': { control: { disable: true } },
  'show-clear-button': { control: { disable: true } },
  'show-indicator': { control: { disable: true } },
  size: { control: { disable: true } },
  value: { control: { disable: true } },
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
  component: 'jh-input-currency',
  title: 'Components/Input Currency',
  tags: ['new'],
  decorators: [
    (story) => html`
      <div class="story-decorator"
        @jh-change=${(e) => logCustomEvent('jh-change', e)}
        @jh-select=${(e) => logCustomEvent('jh-select', e)}
        @jh-input=${(e) => logCustomEvent('jh-input', e)}
        @jh-maxlength=${(e) => logCustomEvent('jh-maxlength', e)}
        @jh-input:clear-button-click=${(e) => logCustomEvent('jh-input:clear-button-click', e)}
      >
        ${story()}
      </div>
    `,
  ],
  argTypes: {
    'accessible-label': {
      control: 'text',
    },
    'accessible-label-clear-button': {
      control: 'text',
    },
    autocomplete: {
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
      control: 'boolean',
    },
    'horizontal-align': {
      control: 'select',
      options: ['left', 'right'],
    },
    'input-mask': {
      table: { disable: true },
    },
    inputmode: {
      control: 'text',
    },
    invalid: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    maxlength: {
      table: { disable: true },
    },
    minlength: {
      table: { disable: true },
    },
    name: {
      control: 'text',
    },
    prefix: {
      control: 'text',
    },
    readonly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    'show-char-count': {
      table: { disable: true },
    },
    'show-clear-button': {
      control: 'boolean'
    },
    'show-commas': {
      control: 'boolean',
    },
    'show-decimal': {
      control: 'boolean',
    },
    'show-indicator': {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    suffix: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
};

export const Overview = { render: (args) => html`
  <div class="overview-story">
    <jh-input-currency label="Amount" helper-text="Enter the transaction amount" inputmode="decimal" value="1,000.00"></jh-input-currency>
    <jh-input-currency label="Amount" error-text="Enter a valid amount" suffix="USD" inputmode="decimal" horizontal-align="right" invalid value="10.00"></jh-input-currency>
  </div>
`};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = { render: (args) => html`
  <jh-input-currency
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
    ?hide-right-slot=${args['hide-right-slot']}
    horizontal-align=${ifDefined(
      args['horizontal-align'] === '' ? null : args['horizontal-align']
    )}
    inputmode=${ifDefined(args.inputmode === '' ? null : args.inputmode)}
    ?invalid=${args.invalid}
    label=${ifDefined(args.label === '' ? null : args.label)}
    name=${ifDefined(args.name === '' ? null : args.name)}
    prefix=${ifDefined(args.prefix === '' ? null : args.prefix)}
    ?readonly=${args.readonly}
    ?required=${args.required}
    .showCommas=${args['show-commas']}
    ?show-char-count=${args['show-char-count']}
    ?show-clear-button=${args['show-clear-button']}
    .showDecimal=${args['show-decimal']}
    ?show-indicator=${args['show-indicator']}
    size=${args.size}
    suffix=${ifDefined(args.suffix === '' ? null : args.suffix)}
    value=${ifDefined(args.value === '' ? null : args.value)}
  ></jh-input-currency>
`};

Playground.args = {
  size: 'medium',
  'show-commas': false,
  'show-decimal': false,
  prefix: null,
  suffix: 'USD',
  disabled: false,
  readonly: false,
  invalid: false,
  'show-indicator': false,
  'show-clear-button': false,
  'show-char-count': false,
  required: false,
  label: 'Amount',
  enterkeyhint: null,
  'error-text': 'Enter a valid amount',
  'helper-text': 'Enter the transaction amount',
  'hide-left-slot': false,
  'hide-right-slot': false,
  'accessible-label': null,
  'accessible-label-clear-button': 'clear amount input',
  autocomplete: null,
  'horizontal-align': 'left',
  inputmode: null,
  name: null,
  value: null,
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