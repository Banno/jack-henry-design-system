/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import './tab-panel.js';

const storyStyles = css`
  .custom-hooks {
    --jh-tab-panel-space-padding-top: var(--jh-dimension-800);
    --jh-tab-panel-space-padding-right: var(--jh-dimension-800);
    --jh-tab-panel-space-padding-bottom: var(--jh-dimension-800);
    --jh-tab-panel-space-padding-left: var(--jh-dimension-800);
    --jh-tab-panel-color-text: var(--jh-color-content-secondary-enabled);
  }
`;

export default {
  component: 'jh-tab-panel',
  title: 'Components/Tab/Tab Panel',
  tags: ['new'],
  parameters: {
    actions: { disable: true },
    interactions: { disable: true },
    controls: { disable: true },
    styles: storyStyles,
  },
};

const loremIpsum = 'Lorem ipsum dolor sit amet consectetur. Urna ornare dignissim aliquam hac in at non. Proin sit mi iaculis neque cursus. Maecenas magna faucibus massa etiam pretium neque commodo venenatis sodales. Commodo lectus praesent mauris adipiscing donec rhoncus nullam tortor.';

export const Overview = { render: (args) => html`
  <jh-tab-panel>${loremIpsum}</jh-tab-panel>
`};

export const Playground = { render: (args) => html`
  <jh-tab-panel>${loremIpsum}</jh-tab-panel>
`};

Playground.parameters = {
  theme: 'both-themes',
};




