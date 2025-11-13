// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit/directives/if-defined.js';
import './input.js';
import '../button/button.js';
import '@jack-henry/jh-icons/icons-wc/icon-id-card.js';
import '@jack-henry/jh-icons/icons-wc/icon-credit-card.js';

const storyStyles = css`
  div[id^="story-root"] {
    display: flex;
    justify-content: center;
  }
  .overview-story {
    display: flex;
    justify-content: center;
    gap: 5%;
    width: 100%;
  }
  .overview-story-row {
    display: flex;
    flex-direction: column;
    width: 35%;
  }
  jh-input {
    margin: 10px;
  }
  .playground-story,
  .password-story,
  .search-story,
  #myForm {
    width: 280px;
  }
  #myForm {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  }
  jh-button {
    margin: 10px;
  }
`;

const disableControls = {
  'accessible-label-input': { control: { disable: true } },
  'accessible-label-clear-button': { control: { disable: true } },
  'accessible-label-hide-password': { control: { disable: true } },
  'accessible-label-show-password': { control: { disable: true } },
  'auto-grow': { control: { disable: true } },
  autocomplete: { control: { disable: true } },
  cols: { control: { disable: true } },
  disabled: { control: { disable: true } },
  enterkeyhint: { control: { disable: true } },
  'error-text': { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  'hide-left-slot': { control: { disable: true } },
  'password-visible': { control: { disable: true } },
  'hide-right-slot': { control: { disable: true } },
  inputmode: { control: { disable: true } },
  invalid: { control: { disable: true } },
  label: { control: { disable: true } },
  maxlength: { control: { disable: true } },
  minlength: { control: { disable: true } },
  name: { control: { disable: true } },
  'no-resize': { control: { disable: true } },
  placeholder: { control: { disable: true } },
  readonly: { control: { disable: true } },
  required: { control: { disable: true } },
  rows: { control: { disable: true } },
  'show-clear-button': { control: { disable: true } },
  'show-indicator': { control: { disable: true } },
  size: { control: { disable: true } },
  spellcheck: { control: { disable: true } },
  type: { control: { disable: true } },
  value: { control: { disable: true } },
  wrap: { control: { disable: true } },
};

export default {
  component: 'jh-input',
  title: 'Components/Input',
  parameters: {
    actions: {
      handles: ['jh-clear', 'jh-change', 'jh-select'],
    },
  },
  argTypes: {
    'accessible-label-input': {
      control: 'text',
    },
    'accessible-label-clear-button': {
      control: 'text',
    },
    'accessible-label-hide-password': {
      control: 'text',
    },
    'accessible-label-show-password': {
      control: 'text',
    },
    autocomplete: {
      control: {
        type: 'text',
      },
    },
    'auto-grow': {
      control: 'boolean',
    },
    cols: {
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
    'hide-left-slot': {
      control: 'boolean',
    },
    'password-visible': {
      control: 'boolean',
    },
    'hide-right-slot': {
      control: 'boolean',
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
    'no-resize': {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    readonly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    rows: {
      control: 'text',
    },
    'show-clear-button': {
      control: 'boolean',
    },
    'show-indicator': {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    spellcheck: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: [
        'text',
        'search',
        'password',
        'email',
        'tel',
        'url',
        'textarea',
      ],
    },
    value: {
      control: 'text',
    },
    wrap: {
      control: 'text',
    },
  },
};

export const Overview = {
  render: (args) =>
    html` <div class="overview-story">
      <div class="overview-story-row">
        <jh-input label="Label" helper-text="Helper text"></jh-input>
        <jh-input
          helper-text="Helper text"
          placeholder="placeholder"
        ></jh-input>
      </div>
      <div class="overview-story-row">
        <jh-input
          label="Label"
          helper-text="Helper text"
          required
          show-indicator
        ></jh-input>
        <jh-input label="Label" error-text="Error message" invalid></jh-input>
      </div>
    </div>`,
};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = {
  render: (args) =>
    html`
      <div class="playground-story">
        <jh-input
          accessible-label-clear-button=${ifDefined(
            args['accessible-label-clear-button'] === ''
              ? null
              : args['accessible-label-clear-button']
          )}
          accessible-label-input=${ifDefined(
            args['accessible-label-input'] === ''
              ? null
              : args['accessible-label-input']
          )}
          accessible-label-hide-password=${ifDefined(
            args['accessible-label-hide-password'] === ''
              ? null
              : args['accessible-label-hide-password']
          )}
          accessible-label-show-password=${ifDefined(
            args['accessible-label-show-password'] === ''
              ? null
              : args['accessible-label-show-password']
          )}
          autocomplete=${ifDefined(
            args.autocomplete === '' ? null : args.autocomplete
          )}
          ?auto-grow=${args['auto-grow']}
          cols=${ifDefined(args.cols === '' ? null : args.cols)}
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
          ?password-visible=${args['password-visible']}
          ?hide-left-slot=${args['hide-left-slot']}
          ?hide-right-slot=${args['hide-right-slot']}
          inputmode=${ifDefined(args.inputmode === '' ? null : args.inputmode)}
          ?invalid=${args.invalid}
          label=${ifDefined(args.label === '' ? null : args.label)}
          maxlength=${ifDefined(args.maxlength === '' ? null : args.maxlength)}
          minlength=${ifDefined(args.minlength === '' ? null : args.minlength)}
          name=${ifDefined(args.name || args.name === '' ? null : args.name)}
          ?no-resize=${args['no-resize']}
          placeholder=${ifDefined(
            args.placeholder === '' ? null : args.placeholder
          )}
          ?readonly=${args.readonly}
          ?required=${args.required}
          rows=${ifDefined(args.rows === '' ? null : args.rows)}
          ?show-clear-button=${args['show-clear-button']}
          ?show-indicator=${args['show-indicator']}
          size=${args.size}
          spellcheck=${ifDefined(
            args.spellcheck === '' ? null : args.spellcheck
          )}
          type=${ifDefined(args.type === '' ? null : args.type)}
          value=${ifDefined(args.value === '' ? null : args.value)}
          wrap=${ifDefined(args.wrap === '' ? null : args.wrap)}
          ><jh-icon-credit-card slot="jh-input-right"></jh-icon-credit-card>
        </jh-input>
      </div>
    `,
};

Playground.args = {
  type: 'text',
  size: 'medium',
  disabled: false,
  readonly: false,
  invalid: false,
  placeholder: 'placeholder',
  'show-indicator': false,
  required: false,
  label: 'Label',
  enterkeyhint: null,
  'error-text': 'Error message',
  'helper-text': 'Helper text',
  'password-visible': false,
  'show-clear-button': true,
  'hide-left-slot': false,
  'hide-right-slot': false,
  'accessible-label-input': null,
  'accessible-label-clear-button': 'clear search',
  'accessible-label-hide-password': 'hide password',
  'accessible-label-show-password': 'show password',
  maxlength: null,
  minlength: null,
  autocomplete: null,
  'auto-grow': false,
  cols: null,
  inputmode: null,
  name: null,
  'no-resize': false,
  rows: null,
  spellcheck: null,
  value: null,
  wrap: null,
};

Playground.argTypes = {
  'accessible-label-clear-button': {
    control: 'text',
    if: { arg: 'type', neq: 'textarea' },
  },
  'accessible-label-hide-password': {
    control: 'text',
    if: { arg: 'type', eq: 'password' },
  },
  'accessible-label-show-password': {
    control: 'text',
    if: { arg: 'type', eq: 'password' },
  },
  'auto-grow': {
    control: 'boolean',
    if: { arg: 'type', eq: 'textarea' },
  },
  cols: {
    control: 'text',
    if: { arg: 'type', eq: 'textarea' },
  },
  'hide-left-slot': {
    control: 'boolean',
    if: { arg: 'type', neq: 'textarea' },
  },
  'password-visible': {
    control: 'boolean',
    if: { arg: 'type', eq: 'password' },
  },
  'hide-right-slot': {
    control: 'boolean',
    if: { arg: 'type', neq: 'textarea' },
  },
  'no-resize': {
    control: 'boolean',
    if: { arg: 'type', eq: 'textarea' },
  },
  rows: {
    control: 'text',
    if: { arg: 'type', eq: 'textarea' },
  },
  'show-clear-button': {
    control: 'boolean',
    if: { arg: 'type', neq: 'textarea' },
  },
  wrap: {
    control: 'text',
    if: { arg: 'type', eq: 'textarea' },
  },
};

Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};

export const Default = { render: (args) => html` <jh-input></jh-input> ` };

Default.argTypes = {
  ...disableControls,
};

export const Password = {
  render: (args) =>
    html`<div class="password-story">
      <jh-input
        type="password"
        accessible-label-input=${ifDefined(
          args['accessible-label-input'] === ''
            ? null
            : args['accessible-label-input']
        )}
        accessible-label-hide-password=${ifDefined(
          args['accessible-label-hide-password'] === ''
            ? null
            : args['accessible-label-hide-password']
        )}
        accessible-label-show-password=${ifDefined(
          args['accessible-label-show-password'] === ''
            ? null
            : args['accessible-label-show-password']
        )}
        ?disabled=${args.disabled}
        helper-text=${ifDefined(
          args['helper-text'] === '' ? null : args['helper-text']
        )}
        ?password-visible=${args['password-visible']}
        ?hide-right-slot=${args['hide-right-slot']}
        label=${ifDefined(args.label === '' ? null : args.label)}
        ?readonly=${args.readonly}
        ?show-clear-button=${args['show-clear-button']}
      ></jh-input>
    </div>`,
};

Password.args = {
  'password-visible': false,
  'hide-right-slot': false,
  'show-clear-button': false,
  'accessible-label-input': null,
  'accessible-label-hide-password': 'Hide password',
  'accessible-label-show-password': 'Show password',
  disabled: false,
  readonly: false,
  label: 'Enter password',
  'helper-text': '8 characters minimum',
};

Password.argTypes = {
  'password-visible': { table: { disable: true } },
  'helper-text': { control: { disable: true } },
  'accessible-label-clear-button': { control: { disable: true } },
  'auto-grow': { table: { disable: true } },
  autocomplete: { control: { disable: true } },
  cols: { table: { disable: true } },
  enterkeyhint: { control: { disable: true } },
  'error-text': { control: { disable: true } },
  'hide-left-slot': { control: { disable: true } },
  inputmode: { control: { disable: true } },
  invalid: { control: { disable: true } },
  maxlength: { control: { disable: true } },
  minlength: { control: { disable: true } },
  name: { control: { disable: true } },
  'no-resize': { table: { disable: true } },
  placeholder: { control: { disable: true } },
  required: { control: { disable: true } },
  rows: { table: { disable: true } },
  'show-indicator': { control: { disable: true } },
  size: { control: { disable: true } },
  spellcheck: { control: { disable: true } },
  type: { control: { disable: true } },
  value: { control: { disable: true } },
  wrap: { table: { disable: true } },
};

Password.parameters = {
  styles: storyStyles,
};

export const Search = {
  render: (args) =>
    html`<div class="search-story">
      <jh-input
        type="search"
        accessible-label-clear-button=${ifDefined(
          args['accessible-label-clear-button'] === ''
            ? null
            : args['accessible-label-clear-button']
        )}
        accessible-label-input=${ifDefined(
          args['accessible-label-input'] === ''
            ? null
            : args['accessible-label-input']
        )}
        ?disabled=${args.disabled}
        ?hide-left-slot=${args['hide-left-slot']}
        label=${ifDefined(args.label === '' ? null : args.label)}
        placeholder=${ifDefined(
          args.placeholder === '' ? null : args.placeholder
        )}
        ?readonly=${args.readonly}
        ?show-clear-button=${args['show-clear-button']}
      ></jh-input>
    </div>`,
};

Search.args = {
  'hide-left-slot': false,
  'show-clear-button': true,
  'accessible-label-clear-button': 'clear search',
  readonly: false,
  disabled: false,
  'accessible-label-input': null,
  placeholder: 'Enter Symbol',
  label: 'Search Quote',
};

Search.argTypes = {
  'accessible-label-hide-password': { table: { disable: true } },
  'accessible-label-show-password': { table: { disable: true } },
  autocomplete: { control: { disable: true } },
  'auto-grow': { table: { disable: true } },
  cols: { table: { disable: true } },
  enterkeyhint: { control: { disable: true } },
  'error-text': { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  'password-visible': { table: { disable: true } },
  'hide-right-slot': { control: { disable: true } },
  inputmode: { control: { disable: true } },
  invalid: { control: { disable: true } },
  label: { control: { disable: true } },
  maxlength: { control: { disable: true } },
  minlength: { control: { disable: true } },
  name: { control: { disable: true } },
  'no-resize': { table: { disable: true } },
  placeholder: { control: { disable: true } },
  required: { control: { disable: true } },
  rows: { table: { disable: true } },
  'show-indicator': { control: { disable: true } },
  size: { control: { disable: true } },
  spellcheck: { control: { disable: true } },
  type: { control: { disable: true } },
  value: { control: { disable: true } },
  wrap: { table: { disable: true } },
};

Search.parameters = {
  styles: storyStyles,
};

export const Textarea = {
  render: (args) =>
    html` <div class="playground-story">
      <jh-input
        type=${args.type}
        accessible-label-input=${ifDefined(
          args['accessible-label-input'] === ''
            ? null
            : args['accessible-label-input']
        )}
        ?auto-grow=${args['auto-grow']}
        helper-text=${ifDefined(
          args['helper-text'] === '' ? null : args['helper-text']
        )}
        cols=${ifDefined(args.cols === '' ? null : args.cols)}
        ?disabled=${args.disabled}
        error-text=${ifDefined(
          args['error-text'] === '' ? null : args['error-text']
        )}
        label=${ifDefined(args.label === '' ? null : args.label)}
        ?no-resize=${args['no-resize']}
        placeholder=${ifDefined(
          args.placeholder === '' ? null : args.placeholder
        )}
        ?readonly=${args.readonly}
        rows=${ifDefined(args.rows === '' ? null : args.rows)}
        size=${args.size}
      >
      </jh-input>
    </div>`,
};

Textarea.args = {
  'auto-grow': false,
  'no-resize': false,
  cols: null,
  rows: null,
  disabled: false,
  readonly: false,
  'error-text': null,
  'helper-text': 'Helper Text',
  label: 'Label',
  'accessible-label-input': null,
  placeholder: 'placeholder',
  size: 'small',
  type: 'textarea',
};

Textarea.argTypes = {
  'accessible-label-clear-button': { table: { disable: true } },
  'accessible-label-hide-password': { table: { disable: true } },
  'accessible-label-show-password': { table: { disable: true } },
  autocomplete: { control: { disable: true } },
  'hide-left-slot': { table: { disable: true } },
  enterkeyhint: { control: { disable: true } },
  'password-visible': { table: { disable: true } },
  'hide-right-slot': { table: { disable: true } },
  inputmode: { control: { disable: true } },
  invalid: { control: { disable: true } },
  maxlength: { control: { disable: true } },
  minlength: { control: { disable: true } },
  name: { control: { disable: true } },
  required: { control: { disable: true } },
  'show-clear-button': { table: { disable: true } },
  'show-indicator': { control: { disable: true } },
  spellcheck: { control: { disable: true } },
  type: { control: { disable: true } },
  value: { control: { disable: true } },
  wrap: { control: { disable: true } },
};

Textarea.parameters = {
  styles: storyStyles,
};

export const FormAssociated = {
  render: (args) => {
    const onClick = (event) => event.target.reset();
    return html`
      <form id="myForm" @submit=${submitAction()}>
        <jh-input
          accessible-label-input=${ifDefined(
            args['accessible-label-input'] === ''
              ? null
              : args['accessible-label-input']
          )}
          accessible-label-clear-button=${ifDefined(
            args['accessible-label-clear-button'] === ''
              ? null
              : args['accessible-label-clear-button']
          )}
          accessible-label-hide-password=${ifDefined(
            args['accessible-label-hide-password'] === ''
              ? null
              : args['accessible-label-hide-password']
          )}
          accessible-label-show-password=${ifDefined(
            args['accessible-label-show-password'] === ''
              ? null
              : args['accessible-label-show-password']
          )}
          autocomplete=${ifDefined(
            args.autocomplete === '' ? null : args.autocomplete
          )}
          ?disabled=${args.disabled}
          helper-text=${ifDefined(
            args['helper-text'] === '' ? null : args['helper-text']
          )}
          ?invalid=${args.invalid}
          label=${ifDefined(args.label === '' ? null : args.label)}
          name=${args.name}
          placeholder=${ifDefined(
            args.placeholder === '' ? null : args.placeholder
          )}
          ?readonly=${args.readonly}
          ?required=${args.required}
          ?show-indicator=${args['show-indicator']}
          type=${ifDefined(args.type === '' ? null : args.type)}
          value=${args.value}
        >
          <jh-icon-id-card
            slot="jh-input-right"
            aria-hidden="true"
          ></jh-icon-id-card
        ></jh-input>
        <jh-button @click=${onClick} submit label="Submit"></jh-button>
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
  type: 'text',
  required: true,
  'show-indicator': true,
  label: 'Full name',
  name: 'name',
  disabled: false,
  readonly: false,
  'helper-text': 'Enter as it appears on ID',
  invalid: false,
  placeholder: null,
  autocomplete: null,
  'accessible-label-input': null,
  'accessible-label-clear-button': null,
  'accessible-label-hide-password': null,
  'accessible-label-show-password': null,
};

FormAssociated.argTypes = {
  'auto-grow': {
    control: { disable: true },
    if: { arg: 'type', eq: 'textarea' },
  },
  'accessible-label-clear-button': {
    control: 'text',
    if: { arg: 'type', neq: 'textarea' },
  },
  'accessible-label-hide-password': {
    control: 'text',
    if: { arg: 'type', eq: 'password' },
  },
  'accessible-label-show-password': {
    control: 'text',
    if: { arg: 'type', eq: 'password' },
  },
  cols: { control: { disable: true }, if: { arg: 'type', eq: 'textarea' } },
  enterkeyhint: { control: { disable: true } },
  'error-text': { control: { disable: true } },
  'hide-left-slot': {
    control: { disable: true },
    if: { arg: 'type', neq: 'textarea' },
  },
  'hide-right-slot': {
    control: { disable: true },
    if: { arg: 'type', neq: 'textarea' },
  },
  'password-visible': {
    control: { disable: true },
    if: { arg: 'type', eq: 'password' },
  },
  inputmode: { control: { disable: true } },
  maxlength: { control: { disable: true } },
  minlength: { control: { disable: true } },
  'no-resize': {
    control: { disable: true },
    if: { arg: 'type', eq: 'textarea' },
  },
  rows: { control: { disable: true }, if: { arg: 'type', eq: 'textarea' } },
  'show-clear-button': {
    control: { disable: true },
    if: { arg: 'type', neq: 'textarea' },
  },
  size: { control: { disable: true } },
  spellcheck: { control: { disable: true } },
  value: { control: { disable: true } },
  wrap: { control: { disable: true }, if: { arg: 'type', eq: 'textarea' } },
};

FormAssociated.parameters = {
  styles: storyStyles,
};
