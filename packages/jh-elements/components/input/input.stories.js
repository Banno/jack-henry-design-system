// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import './input.js';
import '../button/button.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import '@jack-henry/jh-icons/icons-wc/icon-id-card.js';
import '@jack-henry/jh-icons/icons-wc/icon-magnifying-glass.js';

const storyStyles = css`
  .overview-story jh-input {
    margin-bottom: 8px;
  }
  #myForm {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    width: 95%;
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
  component: 'jh-input',
  title: 'Components/Input',
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

 // Reset input value when input-mask is updated
 const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'input-mask') {
      let inputEl = document.querySelector('jh-input')
      inputEl.setAttribute('value', '');
    }
  })
});

let storybookRoot = document.querySelector('#storybook-root');

observer.observe(storybookRoot, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ['input-mask'],
});

export const Overview = {
  render: (args) => html`
    <div class="overview-story">
        <jh-input
          label="Label"
          helper-text="Helper text"
          required
          show-indicator>
          <jh-icon-id-card
          slot="jh-input-right"
          aria-hidden="true"
        ></jh-icon-id-card>
        </jh-input>
        <jh-input label="Label" error-text="Error message" show-clear-button invalid></jh-input>
    </div>
  `
};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = { render: (args) => html`
  <jh-input
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
  ></jh-input>
`};

Playground.args = {
  size: 'medium',
  disabled: false,
  readonly: false,
  invalid: false,
  'input-mask': null,
  'show-indicator': false,
  'show-clear-button': true,
  'show-char-count': false,
  required: false,
  label: 'Label',
  enterkeyhint: null,
  'error-text': 'Error text',
  'helper-text': 'Helper text',
  'hide-left-slot': false,
  'hide-right-slot': false,
  'accessible-label': null,
  'accessible-label-clear-button': null,
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
  <jh-input></jh-input>
`};

Default.argTypes = {
  ...disableControls,
};

export const Slots = {
  render: (args) => html`
    <jh-input size=${args.size} label="User search" helper-text="Search by last name" ?hide-left-slot=${args['hide-left-slot']} ?hide-right-slot=${args['hide-right-slot']} ?show-clear-button=${args['show-clear-button']} ?readonly=${args.readonly} 
    ?disabled=${args.disabled} 
    value="${ifDefined(args.value === '' ? null : args.value)}"
    accessible-label-clear-button=${ifDefined(
    args['accessible-label-clear-button'] === ''
      ? null
      : args['accessible-label-clear-button'])}><jh-icon-magnifying-glass slot="jh-input-left"></jh-icon-magnifying-glass><jh-button appearance="tertiary" slot="jh-input-right"><jh-icon-id-card slot="jh-button-icon"></jh-icon-id-card></jh-button></jh-input>
`,
};

Slots.args = {
  'hide-left-slot': false,
  'hide-right-slot': false,
  'show-clear-button': true,
  readonly: false,
  disabled: false,
  'accessible-label-clear-button': null,
  size: 'medium',
};

Slots.argTypes = {
  ...disableControls,
  disabled: { table: { disable: false } },
  size: { table: { disable: false } },
  'hide-left-slot': { table: { disable: false } },
  'hide-right-slot': { table: { disable: false } }, 
  'show-clear-button': { table: { disable: false } },
  readonly: { table: { disable: false } }
}

export const CharacterCount = { 
  render: (args) => html`
    <jh-input 
      label=${args.label} 
      helper-text=${args['helper-text']} 
      error-text=${args['error-text']} 
      ?show-char-count=${args['show-char-count']} 
      maxlength=${args.maxlength}
    ></jh-input>
  `
};

CharacterCount.args = {
  'show-char-count': true,
  maxlength: '5',
  label: 'Label',
  'helper-text': 'Helper Text',
  'error-text': 'Max length reached.',
};

CharacterCount.argTypes = {
  ...disableControls,
  'show-char-count': true,
  maxlength: { table: { disable: false } },
  label: { table: { disable: false } },
  'helper-text': { table: { disable: false } },
  'error-text': { table: { disable: false } },
}

export const InputMask = { render: (args) => html`
  <jh-input 
    label='Phone Number' 
    helper-text='10 digit, (999) 999-9999'
    input-mask=${args['input-mask']} 
    maxlength=${args.maxlength}
    ?show-char-count=${args['show-char-count']}></jh-input>
`};

InputMask.args = {
  'input-mask': '(999) 999-9999',
  maxlength: null,
  'show-char-count': false,
};

InputMask.argTypes = {
  ...disableControls,
  'input-mask': { table: { disable: false } },
  maxlength: { table: { disable: false } },
  'show-char-count': { table: { disable: false } },
};

export const FormAssociated = {
  render: (args) => {
    const onClick = (event) => event.target.reset();
    return html`
      <form id="myForm" @submit=${submitAction()}>
        <jh-input label='ZIP Code' helper-text='9 digit, XXXXX-XXXX' input-mask=${args['input-mask']} maxlength=${args.maxlength}></jh-input>
        <jh-button label="Submit" submit @click=${onClick}></jh-button>
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

FormAssociated.args = {
  'input-mask': '99-999',
  maxlength: null,
};

FormAssociated.argTypes = {
  ...disableControls,
  'input-mask': { table: { disable: false } },
  maxlength: { table: { disable: false } },
};

FormAssociated.parameters = {
  styles: storyStyles,
};