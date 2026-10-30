/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import { action } from 'storybook/actions';
import './column.js';

const storyStyles = css`
  .demo-container {
    display: inline-block;
    border: 1px dashed var(--jh-border-control-color);
    padding: 16px;
  }
  .demo-box {
    border: 1px solid var(--jh-color-content-brand-enabled);
  }
  .demo-box.is-playground {
    width: 240px;
    height: 240px;
  }
  .demo-box.is-wrapping {
    width: 280px;
    height: 120px;
  }
  .demo-box.is-overview {
    width: 200px;
    height: 120px;
  }
  .demo-overview {
    display: flex;
    flex-wrap: wrap;
    gap: var(--jh-dimension-400);
  }
  .demo-item {
    padding: var(--jh-dimension-100) var(--jh-dimension-200);
    background-color: var(--jh-color-container-neutral-enabled);
    border: 1px solid var(--jh-border-control-color);
    /* border-radius: var(--jh-border-radius-100); */
    color: var(--jh-color-content-primary-enabled);
    font-family: var(--jh-font-helper-regular-font-family);
    font-size: var(--jh-font-helper-regular-font-size);
    line-height: var(--jh-font-helper-regular-line-height);
  }
`;

const dimensionOptions = ['0', '25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'];

const alignOptions = ['start', 'end', 'center', 'stretch'];

const justifyOptions = ['start', 'end', 'center', 'between', 'around', 'evenly'];

const alignContentOptions = ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];

const wrapOptions = ['nowrap', 'wrap', 'wrap-reverse'];

const disableControls = {
  gap: { control: { disable: true } },
  padding: { control: { disable: true } },
  'align-x': { control: { disable: true } },
  'align-y': { control: { disable: true } },
  'align-wrap': { control: { disable: true } },
  reverse: { control: { disable: true } },
  wrap: { control: { disable: true } },
};

export default {
  component: 'forge-column',
  title: 'Primitives/Column',
  tags: ['beta'],
  argTypes: {
    gap: {
      control: 'select',
      options: dimensionOptions,
    },
    padding: {
      control: 'select',
      options: dimensionOptions,
    },
    'align-x': {
      control: 'select',
      options: alignOptions,
    },
    'align-y': {
      control: 'select',
      options: justifyOptions,
    },
    'align-wrap': {
      control: 'select',
      options: alignContentOptions,
    },
    reverse: {
      control: 'boolean',
    },
    wrap: {
      control: 'select',
      options: wrapOptions,
    },
  },
  parameters: {
    actions: {
      disable: true
    },
  },
};

export const Overview = { render: (args) => html`
  <div class="demo-overview">
    <div class="demo-container">
      <forge-column class="demo-box is-overview" gap="100" padding="100" align-x="center" align-y="center">
        <div class="demo-item">Item 1</div>
        <div class="demo-item">Item 2</div>
        <div class="demo-item">Item 3</div>
      </forge-column>
    </div>
    <div class="demo-container">
      <forge-column class="demo-box is-overview" gap="100" padding="100" align-x="start" align-y="between">
        <div class="demo-item">Item 1</div>
        <div class="demo-item">Item 2</div>
        <div class="demo-item">Item 3</div>
      </forge-column>
    </div>
    <div class="demo-container">
      <forge-column class="demo-box is-overview" gap="100" padding="100" wrap="wrap">
        <div class="demo-item">Item 1</div>
        <div class="demo-item">Item 2</div>
        <div class="demo-item">Item 3</div>
        <div class="demo-item">Item 4</div>
        <div class="demo-item">Item 5</div>
        <div class="demo-item">Item 6</div>
      </forge-column>
    </div>
    <div class="demo-container">
      <forge-column class="demo-box is-overview" gap="100" padding="100" align-x="end" reverse>
        <div class="demo-item">Item 1</div>
        <div class="demo-item">Item 2</div>
        <div class="demo-item">Item 3</div>
      </forge-column>
    </div>
  </div>
`};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = { render: (args) => html`
  <div class="demo-container">
    <forge-column
      class="demo-box is-playground"
      gap=${args.gap}
      padding=${args.padding}
      align-x=${args['align-x']}
      align-y=${args['align-y']}
      ?reverse=${args.reverse}
    >
      <div class="demo-item">Item 1</div>
      <div class="demo-item">Longer item 2</div>
      <div class="demo-item">The longest item 3</div>
    </forge-column>
  </div>
`};

Playground.args = {
  gap: '100',
  padding: '100',
  'align-x': 'center',
  'align-y': 'start',
  reverse: false,
};

Playground.argTypes = {
  'align-wrap': { control: { disable: true } },
  wrap: { control: { disable: true } },
};

Playground.parameters = {
  theme: 'both-themes',
  styles: storyStyles,
};

export const Wrapping = { render: (args) => html`
  <div class="demo-container">
    <forge-column
      class="demo-box is-wrapping"
      gap="100"
      wrap=${args.wrap}
      align-wrap=${args['align-wrap']}
    >
      <div class="demo-item">Item 1</div>
      <div class="demo-item">Item 2</div>
      <div class="demo-item">Item 3</div>
      <div class="demo-item">Item 4</div>
      <div class="demo-item">Item 5</div>
      <div class="demo-item">Item 6</div>
    </forge-column>
  </div>
`};

Wrapping.args = {
  wrap: 'wrap',
  'align-wrap': 'start',
};

Wrapping.argTypes = {
  ...disableControls,
  wrap: { control: 'select', options: wrapOptions },
  'align-wrap': { control: 'select', options: alignContentOptions },
};

Wrapping.parameters = {
  theme: 'both-themes',
  styles: storyStyles,
};
