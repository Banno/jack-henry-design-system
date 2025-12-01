// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit/directives/if-defined.js';
import './button.js';
import '@jack-henry/jh-icons/icons-wc/icon-ellipsis.js';

const storyStyles = css`
  div[id^="story-root"] {
    text-align: center;
  }
  .overview-row {
    display: flex;
    justify-content: space-evenly;
    margin: 2%;
    width: 100%;
  }
`;

const disableControls = {
  appearance: { control: { disable: true } },
  'accessible-disabled': { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
  block: { control: { disable: true } },
  disabled: { control: { disable: true } },
  formAssociated: { table: { disable: true } },
  href: { control: { disable: true } },
  label: { control: { disable: true } },
  name: { control: { disable: true } },
  pending: { control: { disable: true } },
  size: { control: { disable: true } },
  submit: { control: { disable: true } },
  target: { control: { disable: true } },
  'icon-position': { control: { disable: true } },
  value: { table: { disable: true } },
};

export default {
  component: 'jh-button',
  title: 'Components/Button',
  argTypes: {
    'icon-position': {
      control: 'select',
      options: ['before', 'after'],
    },
    appearance: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    block: {
      control: 'boolean',
    },
    'accessible-disabled': {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    pending: {
      control: 'boolean',
    },
    submit: {
      control: 'boolean',
    },
    'accessible-label': {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    target: {
      control: 'select',
      options: ['_blank', '_self', '_parent', '_top'],
    },
    form: { table: { disable: true } },
  },
};

export const Overview = {
  render: (args) => html`
    <div class="overview-row">
      <jh-button label="Label"></jh-button>
      <jh-button icon-position="before" label="Label">
        <jh-icon-ellipsis slot="jh-button-icon"></jh-icon-ellipsis>
      </jh-button>
      <jh-button icon-position="after" label="Label">
        <jh-icon-ellipsis slot="jh-button-icon"></jh-icon-ellipsis>
      </jh-button>
      <jh-button accessible-label="label">
        <jh-icon-ellipsis slot="jh-button-icon"></jh-icon-ellipsis>
      </jh-button>
    </div>
  `,
};

Overview.parameters = {
  styles: storyStyles,
};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = {
  render: (args) => html`
  <jh-button
    accessible-disabled=${ifDefined(
      args['accessible-disabled'] && args['accessible-disabled'] !== 'false'
        ? args['accessible-disabled']
        : null
    )}
    accessible-label=${ifDefined(
      args['accessible-label'] || args['accessible-label'] !== ''
        ? args['accessible-label']
        : null
    )}
    appearance=${args.appearance}
    ?block=${args.block}
    ?disabled=${args.disabled}
    href=${ifDefined(args.href || args.href !== '' ? args.href : null)}
    ?pending=${args.pending}
    size=${args.size}
    ?submit=${args.submit}
    target=${ifDefined(args.target ? args.target : null)}
    icon-position=${args['icon-position']}
    label=${ifDefined(args.label || args.label !== '' ? args.label : null)}>
    <jh-icon-ellipsis slot="jh-button-icon"></jh-icon-ellipsis>
  </jh-button>`,
};

Playground.args = {
  'accessible-disabled': null,
  'accessible-label': null,
  appearance: 'secondary',
  block: false,
  disabled: false,
  href: null,
  label: 'Label',
  pending: false,
  size: 'medium',
  submit: false,
  target: null,
  'icon-position': 'after',
};

Playground.argTypes = {
  name: { table: { disable: true } },
  value: { table: { disable: true } },
};

Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};

export const Block = {
  render: (args) => html`
  <jh-button block label="Block" icon-position="before">
    <jh-icon-ellipsis slot="jh-button-icon"></jh-icon-ellipsis>
  </jh-button>`,
};

Block.argTypes = {
  ...disableControls,
};

export const FormAssociated = {
  render: (args) => {
    const onClick = (event) =>
      event.target.isLoading &&
      (event.stopImmediatePropagation(), event.target.reset());
    return html`
      <form @submit=${submitAction()}>
        <jh-button
          accessible-disabled=${ifDefined(
            args['accessible-disabled'] !== 'false'
              ? args['accessible-disabled']
              : null
          )}
          ?disabled=${args.disabled}
          name=${args.name}
          ?submit=${args.submit}
          value=${args.value}
          @click=${onClick}
          label="Submit" >
        </jh-button>
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
  'accessible-disabled': false,
  disabled: false,
  name: 'demo button',
  submit: true,
  value: 'submit button value',
};

FormAssociated.argTypes = {
  appearance: { table: { disable: true } },
  'accessible-label': { table: { disable: true } },
  block: { table: { disable: true } },
  href: { table: { disable: true } },
  label: { table: { disable: true } },
  pending: { table: { disable: true } },
  size: { table: { disable: true } },
  target: { table: { disable: true } },
  'icon-position': { table: { disable: true } },
};


