import { html, css } from 'lit';
import './input-textarea.js';
import { ifDefined } from 'lit/directives/if-defined.js';

const storyStyles = css`
  .overview-story {
    width: 50%;
  }
 `;

const disableControls = {
  'auto-grow': { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
  autocomplete: { control: { disable: true } },
  cols: { control: { disable: true } },
  disabled: { control: { disable: true } },
  enterkeyhint: { control: { disable: true } },
  'error-text': { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  inputmode: { control: { disable: true } },
  invalid: { control: { disable: true } },
  label: { control: { disable: true } },
  maxlength: { control: { disable: true } },
  minlength: { control: { disable: true } },
  name: { control: { disable: true } },
  'no-resize': { control: { disable: true } },
  readonly: { control: { disable: true } },
  required: { control: { disable: true } },
  rows: { control: { disable: true } },
  'show-char-count': { control: { disable: true } },
  'show-indicator': { control: { disable: true } },
  size: { control: { disable: true } },
  value: { control: { disable: true } },
  wrap: { control: { disable: true } },
};

export default {
  component: 'jh-input-textarea',
  title: 'Components/Input Textarea',
  tags: ['beta'],
  parameters: {
    actions: {
      handles: ['jh-change', 'jh-select', 'jh-input', 'jh-maxlength'],
    },
  },
  argTypes: {
    'auto-grow': {
      control: 'boolean',
    },
    cols: {
      control: 'text',
    },
    'no-resize': {
      control: 'boolean',
    },
    rows: {
      control: 'text',
    },
    wrap: {
      control: 'select',
      options: ['hard', 'soft'],
    },
    'accessible-label': {
      control: 'text',
    },
    autocomplete: {
      control: 'text',
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
    'hide-left-slot': {
      table: { disable: true },
    },
    'hide-right-slot': {
      table: { disable: true },
    },
    'input-mask': {
      table: { disable: true },
    },
    'show-clear-button': {
      table: { disable: true },
    },
    'accessible-label-clear-button': {
      table: { disable: true },
    },
    'jh-input-right': {
      table: { disable: true },
    },
    'jh-input-left': {
      table: { disable: true },
    },
    'jh-input-clear-button': {
      table: { disable: true },
    },
    'jh-input:clear-button-click': {
      table: { disable: true },
    },
  },
};

export const Overview = {
  render: (args) => html`
  <div class="overview-story">
    <jh-input-textarea label="Label" helper-text="Helper text" no-resize></jh-input-textarea>
    <jh-input-textarea label="Label" required show-indicator invalid error-text="Error text" show-char-count maxlength="200"></jh-input-textarea>
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
  <jh-input-textarea 
  ?no-resize=${args['no-resize']}
  cols=${ifDefined(args.cols ? args.cols : null)}
  rows=${ifDefined(args.rows ? args.rows : null)}
  ?auto-grow=${args['auto-grow']}
  wrap=${ifDefined(args.wrap === '' ? null : args.wrap)}
  accessible-label=${ifDefined(
    args['accessible-label'] === '' ? null : args['accessible-label']
  )}
  autocomplete=${ifDefined(args.autocomplete === '' ? null : args.autocomplete)}
  ?disabled=${args.disabled}
  enterkeyhint=${ifDefined(args.enterkeyhint === '' ? null : args.enterkeyhint)}
  error-text=${ifDefined(args['error-text'] === '' ? null : args['error-text'])}
  helper-text=${ifDefined(
    args['helper-text'] === '' ? null : args['helper-text']
  )}
  inputmode=${ifDefined(args.inputmode === '' ? null : args.inputmode)}
  ?invalid=${args.invalid}
  label=${ifDefined(args.label === '' ? null : args.label)}
  maxlength=${ifDefined(args.maxlength ? args.maxlength : null)}
  minlength=${ifDefined(args.minlength ? args.minlength : null)}
  name=${ifDefined(args.name || args.name === '' ? null : args.name)}
  ?readonly=${args.readonly}
  ?required=${args.required}
  ?show-char-count=${args['show-char-count']}
  ?show-indicator=${args['show-indicator']}
  size=${args.size}
  value=${ifDefined(args.value === '' ? null : args.value)}></jh-input-textarea>
`,
};

Playground.args = {
  'auto-grow': false,
  cols: null,
  rows: null,
  'no-resize': false,
  wrap: null,
  size: 'medium',
  disabled: false,
  readonly: false,
  invalid: false,
  'show-indicator': false,
  'show-char-count': true,
  required: false,
  label: 'Share your feedback:',
  enterkeyhint: null,
  'error-text': 'Your feedback is too short. Please provide at least 10 characters.',
  'helper-text': 'Please be as detailed as possible to help us improve. (Max 500 characters)',
  'accessible-label': null,
  maxlength: '500',
  minlength: null,
  autocomplete: null,
  inputmode: null,
  name: null,
  value: null,
};

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = {
  render: (args) => html`
  <jh-input-textarea></jh-input-textarea>
`,
};

Default.argTypes = {
  ...disableControls,
};