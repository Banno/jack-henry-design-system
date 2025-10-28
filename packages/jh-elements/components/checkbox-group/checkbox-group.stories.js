import { html, css } from 'lit';
import './checkbox-group.js';
import '../checkbox/checkbox.js';
import '../button/button.js';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit/directives/if-defined.js';

const storyStyles = css`
  div[id^="story-root"] {
    display: flex;
    justify-content: center;
  }
  .container {
    margin-right: 40px;
    width: 400px;
  }
`;

const disableControls = {
  label: { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  'error-text': { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
  orientation: { control: { disable: true } },
  invalid: { control: { disable: true } },
  required: { control: { disable: true } },
  'show-indicator': { control: { disable: true } },
  form: { table: { disable: true } },
};

export default {
  component: 'jh-checkbox-group',
  title: 'Components/Checkbox Group',
  parameters: {
    actions: {
      handles: ['jh-change'],
    },
  },
  argTypes: {
    required: {
      control: 'boolean',
    },
    'show-indicator': {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    'helper-text': {
      control: 'text',
    },
    'error-text': {
      control: 'text',
    },
    'accessible-label': {
      control: 'text',
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
};

export const Overview = {
  render: (args) => html` <div class="container">
      <jh-checkbox-group invalid>
        <jh-checkbox
          label="checkbox 1"
          helper-text="Helper text"
          name="checkbox-1"
        ></jh-checkbox>
        <jh-checkbox
          label="checkbox 2"
          helper-text="Helper text"
          name="checkbox-2"
        ></jh-checkbox>
        <jh-checkbox
          label="checkbox 3"
          helper-text="Helper text"
          name="checkbox-3"
          checked
        ></jh-checkbox>
      </jh-checkbox-group>
    </div>
    <div class="container">
      <jh-checkbox-group
        label="Label"
        helper-text="Helper text group"
        orientation="horizontal"
        error-text="Error text"
        invalid
      >
        <jh-checkbox label="checkbox 4" name="checkbox-4"></jh-checkbox>
        <jh-checkbox
          label="checkbox 5"
          name="checkbox-5"
          disabled
        ></jh-checkbox>
        <jh-checkbox label="checkbox 6" name="checkbox-6"></jh-checkbox>
      </jh-checkbox-group>
    </div>`,
};

Overview.argTypes = { ...disableControls };

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = {
  render: (args) => html` <div>
    <jh-checkbox-group
      label=${ifDefined(args.label && args.label !== '' ? args.label : null)}
      helper-text=${args['helper-text']}
      ?required=${args.required}
      ?show-indicator=${args['show-indicator']}
      orientation=${args.orientation}
      accessible-label=${args['accessible-label']}
      ?invalid=${args.invalid}
      error-text=${args['error-text']}
    >
      <jh-checkbox
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur metus massa, mollis euismod lorem ut, tincidunt dignissim ex."
        name="checkbox-1"
        helper-text="Helper text"
      ></jh-checkbox>
      <jh-checkbox
        label="Label"
        name="checkbox-2"
        helper-text="Helper text"
      ></jh-checkbox>
      <jh-checkbox
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        name="checkbox-3"
        helper-text="Helper text"
      ></jh-checkbox>
      <jh-checkbox
        label="Slightly longer label"
        name="checkbox-3"
        helper-text="Helper text"
      ></jh-checkbox>
    </jh-checkbox-group>
  </div>`,
};

Playground.args = {
  label: 'Label',
  'helper-text': 'Select at least 2 options',
  required: true,
  'show-indicator': true,
  orientation: 'horizontal',
  'accessible-label': '',
  invalid: true,
  'error-text': 'Error',
};

Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};

export const FormAssociated = {
  render: (args) => {
    const onClick = (event) => event.target.reset();
    return html`
      <form @submit=${submitAction()}>
        <jh-checkbox-group>
          <jh-checkbox
            label="checkbox 1"
            helper-text="Helper text"
            value="value-1"
            name="checkbox-1"
          ></jh-checkbox>
          <jh-checkbox
            label="checkbox 2"
            helper-text="Helper text"
            name="checkbox-2"
            value="value-2"
          ></jh-checkbox>
          <jh-checkbox
            label="checkbox 3"
            helper-text="Helper text"
            name="checkbox-3"
          ></jh-checkbox>
        </jh-checkbox-group>
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
FormAssociated.argTypes = { ...disableControls };
FormAssociated.parameters = {
  styles: storyStyles,
};
