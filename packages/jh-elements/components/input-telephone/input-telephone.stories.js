import { html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './input-telephone.js';

const storyStyles = css`
  .overview-story jh-input-telephone {
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
  component: 'jh-input-telephone',
  title: 'Components/Input Telephone',
  tags: ['beta'],
  parameters: {
    actions: {
      handles: ['jh-change', 'jh-select', 'jh-input', 'jh-maxlength', 'jh-input:clear-button-click'],
    },
  },
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
  <div class="overview-story">
    <jh-input-telephone label="Label" helper-text="Helper text"></jh-input-telephone>
    <jh-input-telephone label="Label" error-text="Error message" invalid></jh-input-telephone>
  </div>
`};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = { render: (args) => html`
  <jh-input-telephone
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
    input-mask=${ifDefined(args['input-mask'] === '' ? null : args['input-mask'])}
    inputmode=${ifDefined(args.inputmode === '' ? null : args.inputmode)}
    ?invalid=${args.invalid}
    label=${ifDefined(args.label === '' ? null : args.label)}
    maxlength=${ifDefined(args.maxlength ? args.maxlength :  null)}
    minlength=${ifDefined(args.minlength ? args.minlength : null)}
    name=${ifDefined(args.name || args.name === '' ? null : args.name)}
    ?readonly=${args.readonly}
    ?required=${args.required}
    ?show-char-count=${args['show-char-count']}
    ?show-clear-button=${args['show-clear-button']}
    ?show-indicator=${args['show-indicator']}
    size=${args.size}
    value=${ifDefined(args.value === '' ? null : args.value)}
    ></jh-input-telephone>
  `};
  
  Playground.args = {
    size: 'medium',
    disabled: false,
    readonly: false,
    invalid: false,
    'input-mask': null,
    'show-indicator': false,
    'show-clear-button': false,
    'show-char-count': false,
    required: false,
    label: 'Telephone number',
    enterkeyhint: null,
    'error-text': 'Error text',
    'helper-text': 'Include area code',
    'hide-left-slot': false,
    'hide-right-slot': false,
    'accessible-label': null,
    'accessible-label-clear-button': 'clear telephone number',
    maxlength: null,
    minlength: null,
    autocomplete: null,
    inputmode: null,
    name: null,
    value: null,
  };

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = { render: (args) => html`
  <jh-input-telephone></jh-input-telephone>
`};

Default.argTypes = {
  ...disableControls,
};