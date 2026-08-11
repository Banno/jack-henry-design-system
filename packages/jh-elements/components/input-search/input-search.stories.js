// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import './input-search.js';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@jack-henry/jh-icons/icons-wc/icon-credit-card.js';

const storyStyles = css`
  .overview-story jh-input-search {
    margin-bottom: 8px;
  }
`;

const disableControls = {
  'accessible-label-clear-button': { control: { disable: true } },
  'show-clear-button': { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
  autocomplete: { control: { disable: true } },
  disabled: { control: { disable: true } },
  enterkeyhint: { control: { disable: true } },
  'error-text': { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  'hide-left-slot': { control: { disable: true } },
  'hide-right-slot': { control: { disable: true } },
  'input-mask': { control: { disable: true } },
  inputmode: { control: { disable: true } },
  invalid: { control: { disable: true } },
  label: { control: { disable: true } },
  maxlength: { control: { disable: true } },
  minlength: { control: { disable: true } },
  name: { control: { disable: true } },
  readonly: { control: { disable: true } },
  required: { control: { disable: true } },
  'show-char-count': { control: { disable: true } },
  'show-indicator': { control: { disable: true } },
  size: { control: { disable: true } },
  value: { control: { disable: true } },
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
  component: 'jh-input-search',
  title: 'Components/Input Search',
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
    'show-clear-button': {
      control: 'boolean',
    },
    'accessible-label-clear-button': {
      control: 'text',
    },
    'accessible-label': {
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
      control: 'boolean',
    },
    'horizontal-align': {
      table: { disable: true },
    },
    'input-mask': {
      control: 'text'
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
      control: 'text',
    },
    minlength: {
      control: 'text',
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
      control: 'boolean'
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
    <jh-input-search label="Label" helper-text="Helper text" show-clear-button accessible-label-clear-button="clear search field"></jh-input-search>
    <jh-input-search label="Label" invalid error-text="Error text" hide-left-slot></jh-input-search>
  </div>
`};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = {
  render:(args) => html`
    <jh-input-search
      accessible-label-clear-button=${ifDefined(args['accessible-label-clear-button'] === '' ? null : args['accessible-label-clear-button'])}
      ?show-clear-button=${args['show-clear-button']}
      accessible-label=${ifDefined(args['accessible-label'] === '' ? null: args['accessible-label'])}
      autocomplete=${ifDefined(args.autocomplete === '' ? null : args.autocomplete)}   
      ?disabled=${args.disabled}
      enterkeyhint=${ifDefined(args.enterkeyhint === '' ? null : args.enterkeyhint)}   
      error-text=${ifDefined(args['error-text'] === '' ? null : args['error-text'])}   
      helper-text=${ifDefined(args['helper-text'] === '' ? null : args['helper-text'])}   
      ?hide-left-slot=${args['hide-left-slot']}
      ?hide-right-slot=${args['hide-right-slot']}
      input-mask=${ifDefined(args['input-mask'] === '' ? null : args['input-mask'])}
      inputmode=${ifDefined(args.inputmode === '' ? null : args.inputmode)}
      ?invalid=${args.invalid}
      label=${ifDefined(args.label === '' ? null : args.label)}
      maxlength=${ifDefined(args.maxlength ? args.maxlength :  null)}
      minlength=${ifDefined(args.minlength ? args.minlength : null)}
      name=${ifDefined(args.name || args.name === '' ? null : args.name)}
      prefix=${ifDefined(args.prefix === '' ? null : args.prefix)}
      ?readonly=${args.readonly}
      ?required=${args.required}
      ?show-char-count=${args['show-char-count']}
      ?show-indicator=${args['show-indicator']}
      size=${args.size}
      suffix=${ifDefined(args.suffix === '' ? null : args.suffix)}
      value=${ifDefined(args.value === '' ? null : args.value)}>
        <jh-icon-credit-card slot="jh-input-right"></jh-icon-credit-card>
      </jh-input-search>
  `
};

Playground.args = {
  'show-clear-button': true,
  'accessible-label-clear-button': 'clear search field',
  size: 'medium',
  disabled: false,
  readonly: false,
  invalid: false,
  'input-mask': null,
  'show-indicator': false,
  'show-char-count': false,
  required: false,
  label: 'Transactions',
  enterkeyhint: null,
  'error-text': 'Error text',
  'helper-text': 'Search by merchant, category, or amount',
  'hide-left-slot': false,
  'hide-right-slot': false,
  'accessible-label': null,
  maxlength: null,
  minlength: null,
  autocomplete: null,
  inputmode: null,
  name: null,
  prefix: null,
  suffix: null,
  value: null,
};

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = { render: (args) => html`
  <jh-input-search></jh-input-search>
`};

Default.argTypes = {
  ...disableControls,
};