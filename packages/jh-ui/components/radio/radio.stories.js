import { html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './radio.js';

const storyStyles = css`
  div[id^="story-root"] {
    display: flex;
    justify-content: center;
  }
  jh-radio {
    margin-right: 16px;
  }
`;

const disableControls = {
  label: { control: { disable: true } },
  'helper-text': { control: { disable: true } },
  value: { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
  checked: { control: { disable: true } },
  disabled: { control: { disable: true } },
};

export default {
  component: 'jh-radio',
  title: 'Components/Radio',
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
    label: {
      control: 'text',
    },
    'helper-text': {
      control: 'text',
    },
    'accessible-label': {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
};

export const Overview = {
  render: (args) => html`
    <jh-radio></jh-radio>
    <jh-radio checked></jh-radio>
    <jh-radio label="Label"></jh-radio>
    <jh-radio label="Label" helper-text="Helper text"></jh-radio>
    <jh-radio disabled></jh-radio>
    <jh-radio checked disabled></jh-radio>
    <jh-radio label="Label" helper-text="Helper text" disabled></jh-radio>
  `,
};

Overview.argTypes = { ...disableControls };

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = {
  render: (args) => html`
    <div style="width: 200px;">
      <jh-radio
        label="${args.label}"
        helper-text="${args['helper-text']}"
        value=${ifDefined(args.value)}
        accessible-label=${ifDefined(args['accessible-label'])}
        ?checked=${args.checked}
        ?disabled=${args.disabled}
      ></jh-radio>
    </div>
  `,
};

Playground.args = {
  checked: false,
  disabled: false,
  label: 'Label',
  'helper-text': 'Helper text',
  value: 'Label',
  'accessible-label': 'aria label',
};

Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};

export const Default = { render: (args) => html`<jh-radio></jh-radio>` };

Default.argTypes = { ...disableControls };

Default.parameters = {
  styles: storyStyles,
};
