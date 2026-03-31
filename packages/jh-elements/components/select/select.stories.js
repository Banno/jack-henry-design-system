/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import './select.js';
import { US_STATES_FLAT, US_STATES_GROUPED, getPresetData } from './data-presets.js';

const storyStyles = css`
.scrollable-container {
  height: 200px;
  overflow: auto;
  border: 1px solid #ccc;
  padding: 16px;
}
.scrollable-content {
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
`;

const disableControls = {
  attribute: { control: { disable: true } },
  'some-attribute': { control: { disable: true } },
}

export default {
  component: 'jh-select',
  title: 'Components/Select',
  parameters: {
    actions: {
      handles: ['jh-event'],
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: [
        'bottom',
        'top',
      ],
    },
    attribute: {
      control: 'boolean',
    }
  },
};

export const Overview = { render: (args) => html`
  <jh-select></jh-select>
`};

Overview.argTypes = {
  ...disableControls,
};

export const Playground = { render: (args) => html`
  <jh-select position=${args.position}></jh-select>
`};

Playground.args = {
  position: 'bottom',
};

Playground.parameters = {
  theme: 'both-themes',
};

export const Default = { render: (args) => html`
  <jh-select></jh-select>
`};

Default.argTypes = {
  ...disableControls,
};

export const ScrollableContainer = { render: (args) => html`
  <div class="scrollable-container">
    <div class="scrollable-content">
      <p>Scroll down to find the select</p>
      <jh-select></jh-select>
      <p>Extra content to enable scrolling</p>
      <p>Keep scrolling...</p>
      <p>More content below</p>
      <jh-select></jh-select>
      <p>Bottom of scrollable area</p>
    </div>
  </div>
`};

ScrollableContainer.argTypes = {
  ...disableControls,
};
ScrollableContainer.parameters = {
  styles: storyStyles,
};

export const PresetDatasets = { render: (args) => {
  const customizedData = getPresetData({
    dataset: US_STATES_FLAT,
    initialValue: null,
    disabledItems: ['AK', 'HI'],
    emptyLabel: 'Select a state...',
  });

  return html`
    <h3>Flat preset (via attribute)</h3>
    <jh-select label="US States (flat)" preset="us-states-flat"></jh-select>

    <h3>Grouped preset (via attribute)</h3>
    <jh-select label="US States (grouped)" preset="us-states-grouped"></jh-select>

    <h3>getPresetData — initial value, disabled items, empty label</h3>
    <jh-select label="Customized states" .options=${customizedData}></jh-select>
  `;
}};

PresetDatasets.argTypes = {
  ...disableControls,
};



