import { html, css } from 'lit';
import './checkbox.js';
import '../button/button.js';
import { action } from '@storybook/addon-actions';

const storyStyles = css`
  div[id^="story-root"] {
    display: flex;
    justify-content: center;
  }
  jh-checkbox {
    margin-right: 16px;
  }
`;

const disableControls = {
  label: { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  name: { control: { disable: true } },
  value: { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
  checked: { control: { disable: true } },
  disabled: { control: { disable: true } },
  indeterminate: { control: { disable: true } },
};

export default {
  component: 'jh-checkbox',
  title: 'Components/Checkbox',
  parameters: {
    actions: {
      handles: ['jh-change'],
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    'helper-text': {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    'accessible-label': {
      control: 'text',
    },
    form: { table: { disable: true } },
  },
};

export const Overview = {
  render: (args) => html`
    <jh-checkbox label="Label" helper-text="Helper text"></jh-checkbox>
    <jh-checkbox checked label="Label" helper-text="Helper text"></jh-checkbox>
    <jh-checkbox
      indeterminate
      label="Label"
      helper-text="Helper text"
    ></jh-checkbox>
    <jh-checkbox disabled label="Label" helper-text="Helper text"></jh-checkbox>
    <jh-checkbox
      checked
      disabled
      label="Label"
      helper-text="Helper text"
    ></jh-checkbox>
    <jh-checkbox
      indeterminate
      disabled
      label="Label"
      helper-text="Helper text"
    ></jh-checkbox>
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
    <div style="width: 200px;">
      <jh-checkbox
        label=${args.label}
        helper-text=${args['helper-text']}
        name=${args.name}
        value=${args.value}
        accessible-label=${args['accessible-label']}
        ?checked=${args.checked}
        ?disabled=${args.disabled}
        ?indeterminate=${args.indeterminate}
      ></jh-checkbox>
    </div>
  `,
};

Playground.args = {
  checked: false,
  disabled: false,
  indeterminate: false,
  label: 'Label',
  'helper-text': 'Helper text',
  name: 'Test checkbox',
  value: 'Label',
  'accessible-label': 'Aria label',
};

Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};

export const Default = { render: (args) => html`<jh-checkbox></jh-checkbox>` };

Default.argTypes = {
  ...disableControls,
};

Default.parameters = {
  styles: storyStyles,
};

export const Indeterminate = {
  render: (args) =>
    html`
      <jh-checkbox
        ?indeterminate=${args.indeterminate}
        ?checked=${args.checked}
        ?disabled=${args.disabled}
        label=${args.label}
      ></jh-checkbox>
    `,
};

Indeterminate.args = {
  indeterminate: true,
  checked: false,
  disabled: false,
  label: 'Indeterminate checkbox',
};

Indeterminate.argTypes = {
  label: { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  name: { control: { disable: true } },
  value: { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
};

Indeterminate.parameters = {
  styles: storyStyles,
};

export const FormAssociated = {
  render: (args) => {
    const onClick = (event) => event.target.reset();
    return html`
      <form @submit=${submitAction()}>
        <jh-checkbox
          name=${args.name}
          ?checked=${args.checked}
          ?disabled=${args.disabled}
          ?indeterminate=${args.indeterminate}
          value=${args.value}
          label=${args.label}
        ></jh-checkbox>
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
  name: 'Demo checkbox',
  value: 'Demo value',
  checked: false,
  indeterminate: false,
  label: 'Label',
  disabled: false,
};
FormAssociated.argTypes = {
  'helper-text': { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
};

FormAssociated.parameters = {
  styles: storyStyles,
};
