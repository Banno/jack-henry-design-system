import { html, css } from 'lit';
import './progress.js';
import { ifDefined } from 'lit/directives/if-defined.js';

const storyStyles = css`
  div[id^="story-root"] {
    display: flex;
    justify-content: center;
  }
  .overview {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-self: center;
  }
  jh-progress {
    margin: 8px;
  }
`;

const disableControls = {
  'accessible-label': { control: { disable: true } },
  max: { control: { disable: true } },
  min: { control: { disable: true } },
  'accessible-valuetext': { control: { disable: true } },
  'hide-value': { control: { disable: true } },
  indeterminate: { control: { disable: true } },
  label: { control: { disable: true } },
  size: { control: { disable: true } },
  type: { control: { disable: true } },
  value: { control: { disable: true } },
};

export default {
  component: 'jh-progress',
  title: 'Components/Progress',
  argTypes: {
    type: {
      control: 'select',
      options: ['linear', 'circular'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    'hide-value': {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    value: {
      control: {
        type: 'number',
      },
    },
    'accessible-label': {
      control: {
        type: 'text',
      },
    },
    min: {
      control: {
        type: 'number',
      },
    },
    max: {
      control: {
        type: 'number',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    'accessible-valuetext': {
      control: {
        type: 'text',
      },
    },
  },
};

export const Overview = {
  render: (args) => html`
    <div class="overview">
      <jh-progress
        label=${args.label}
        type="linear"
        value=${args.value}
      ></jh-progress>
      <jh-progress indeterminate type="linear"></jh-progress>
    </div>
    <div class="overview">
      <jh-progress
        label=${args.label}
        size="large"
        type="circular"
        value=${args.value}
      >
      </jh-progress
      ><jh-progress indeterminate size="large" type="circular"></jh-progress>
    </div>
  `,
};

Overview.args = {
  label: 'Label',
  value: 75,
};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = {
  render: (args) => {
    return html`<jh-progress
      max=${ifDefined(args.max)}
      min=${ifDefined(args.min)}
      accessible-label=${ifDefined(
        args['accessible-label'] || args['accessible-label'] !== ''
          ? args['accessible-label']
          : null
      )}
      accessible-valuetext=${ifDefined(
        args['accessible-valuetext'] || args['accessible-valuetext'] !== ''
          ? args['accessible-valuetext']
          : null
      )}
      ?hide-value=${args['hide-value']}
      ?indeterminate=${args.indeterminate}
      label=${ifDefined(args.label)}
      size=${args.size}
      type=${args.type}
      value=${ifDefined(args.indeterminate ? null : args.value)}
    ></jh-progress>`;
  },
};

Playground.args = {
  'accessible-label': null,
  max: 100,
  min: 0,
  'accessible-valuetext': null,
  'hide-value': false,
  indeterminate: false,
  label: 'Label',
  size: 'medium',
  type: 'linear',
  value: 0,
};

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = { render: (args) => html`<jh-progress></jh-progress>` };

Default.argTypes = {
  ...disableControls,
};

export const Determinate = {
  render: (args) => html`
    <jh-progress
      label=${ifDefined(args.label || args.label !== '' ? args.label : null)}
      size=${args.size}
      value=${ifDefined(args.value || args.value !== '' ? args.value : null)}
      ?hide-value=${args['hide-value']}
    ></jh-progress>
    <jh-progress
      label=${ifDefined(args.label || args.label !== '' ? args.label : null)}
      size=${args.size}
      value=${ifDefined(args.value || args.value !== '' ? args.value : null)}
      ?hide-value=${args['hide-value']}
      type="circular"
    ></jh-progress>
  `,
};

Determinate.args = {
  label: 'Label',
  size: 'medium',
  value: 50,
  'hide-value': false,
};

Determinate.argTypes = {
  'accessible-label': { table: { disable: true } },
  indeterminate: { table: { disable: true } },
  type: { table: { disable: true } },
  max: { table: { disable: true } },
  min: { table: { disable: true } },
  'accessible-valuetext': { table: { disable: true } },
};

Determinate.parameters = {
  styles: storyStyles,
};

export const Indeterminate = {
  render: (args) => html`
    <jh-progress
      ?indeterminate=${args.indeterminate}
      label=${ifDefined(args.label || args.label !== '' ? args.label : null)}
      size=${args.size}
    ></jh-progress>
    <jh-progress
      ?indeterminate=${args.indeterminate}
      label=${ifDefined(args.label || args.label !== '' ? args.label : null)}
      size=${args.size}
      type="circular"
    ></jh-progress>
  `,
};

Indeterminate.args = {
  indeterminate: true,
  label: 'Label',
  size: 'medium',
};

Indeterminate.argTypes = {
  'accessible-label': { table: { disable: true } },
  max: { table: { disable: true } },
  min: { table: { disable: true } },
  'accessible-valuetext': { table: { disable: true } },
  type: { table: { disable: true } },
  value: { table: { disable: true } },
  'hide-value': { table: { disable: true } },
};

Indeterminate.parameters = {
  styles: storyStyles,
};
