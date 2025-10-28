import { html, css } from 'lit';
import './input-password.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@jack-henry/jh-icons/icons-wc/icon-id-card.js';

const disableControls = {
  'password-visible': { control: { disable: true } },
  'accessible-label-hide-password': { control: { disable: true } },
  'accessible-label-show-password': { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
  'accessible-label-clear-button': { control: { disable: true } },
  autocomplete: { control: { disable: true } },
  disabled: { control: { disable: true } },
  enterkeyhint: { control: { disable: true } },
  'error-text': { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  'hide-left-slot': { control: { disable: true } },
  'hide-right-slot': { table: { disable: true } },
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
  'show-clear-button': { control: { disable: true } },
  'show-indicator': { control: { disable: true } },
  size: { control: { disable: true } },
  value: { control: { disable: true } },
};

export default {
  component: 'jh-input-password',
  title: 'Components/Input Password',
  tags: ['beta'],
  parameters: {
    actions: {
      handles: ['jh-change', 'jh-select', 'jh-input', 'jh-maxlength', 'jh-input:clear-button-click'],
    },
  },
  argTypes: {
    'jh-input-right' : {
      table: {
        disable: true,
      }
    },
    'password-visible': {
      control: 'boolean',
    },
    'accessible-label-hide-password': {
      control: 'text',
    },
    'accessible-label-show-password': {
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
  <jh-input-password label="Label" helper-text="Helper text" required show-indicator></jh-input-password>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = {
  render: (args) => html`
  <jh-input-password 
    ?password-visible=${args['password-visible']} 
    accessible-label-show-password=${ifDefined(
      args['accessible-label-show-password'] === ''
        ? null
        : args['accessible-label-show-password']
    )}
    accessible-label-hide-password=${
      args['accessible-label-hide-password'] === ''
        ? null
        : args['accessible-label-hide-password']
    }
    accessible-label=${ifDefined(
      args['accessible-label'] === '' ? null : args['accessible-label']
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
    input-mask=${ifDefined(
      args['input-mask'] === '' ? null : args['input-mask']
    )}
    inputmode=${ifDefined(args.inputmode === '' ? null : args.inputmode)}
    ?invalid=${args.invalid}
    label=${ifDefined(args.label === '' ? null : args.label)}
    maxlength=${ifDefined(args.maxlength ? args.maxlength : null)}
    minlength=${ifDefined(args.minlength ? args.minlength : null)}
    name=${ifDefined(args.name === '' ? null : args.name)}
    ?readonly=${args.readonly}
    ?required=${args.required}
    ?show-char-count=${args['show-char-count']}
    ?show-clear-button=${args['show-clear-button']}
    ?show-indicator=${args['show-indicator']}
    size=${args.size}
    value=${ifDefined(args.value === '' ? null : args.value)}>
  </jh-input-password>
`,
};

Playground.argTypes = {
  ...disableControls,
  'password-visible': { control: { disable: false } },
  'accessible-label-show-password':  { control: { disable: false } },
  'accessible-label-hide-password': { control: { disable: false } },
  size: { control: { disable: false } },
  disabled: { control: { disable: false } },
  readonly: { control: { disable: false } },
  invalid: { control: { disable: false } },
  'input-mask': { control: { disable: false } },
  'show-indicator': { control: { disable: false } },
  'show-char-count': { control: { disable: false } },
  'show-clear-button': { control: { disable: false } },
  required: { control: { disable: false } },
  label: { control: { disable: false } },
  enterkeyhint: { control: { disable: false } },
  'error-text': { control: { disable: false } },
  'helper-text': { control: { disable: false } },
  'hide-left-slot': { control: { disable: false } },
  'accessible-label': { control: { disable: false } },
  maxlength: { control: { disable: false } },
  minlength: { control: { disable: false } },
  autocomplete: { control: { disable: false } },
  inputmode: { control: { disable: false } },
  name: { control: { disable: false } },
  value: { control: { disable: false } },
}

Playground.args = {
  'password-visible': false,
  'accessible-label-show-password':  'show password',
  'accessible-label-hide-password': 'hide password',
  size: 'medium',
  disabled: false,
  readonly: false,
  invalid: false,
  'input-mask': null,
  'show-indicator': false,
  'show-char-count': false,
  'show-clear-button': true,
  required: false,
  label: 'Label',
  enterkeyhint: null,
  'error-text': 'Error text',
  'helper-text': 'Helper text',
  'hide-left-slot': false,
  'accessible-label': null,
  maxlength: null,
  minlength: null,
  autocomplete: 'off',
  inputmode: null,
  name: null,
  value: null,
};

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = { render: (args) => html`
  <jh-input-password></jh-input-password>
`};

Default.argTypes = {
  ...disableControls,
};