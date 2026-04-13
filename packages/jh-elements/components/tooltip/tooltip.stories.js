// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import './tooltip.js';
import '../button/button.js';
import '@jack-henry/jh-icons/icons-wc/icon-ellipsis.js';

const storyStyles = css`
  .flipping-tooltip {
    margin-top: 30px;
    margin-left: 30px;
  }
  .overview {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-bottom: 50px;
    margin-top: 30px;
    margin-left: 30px;
  }
  .overviewSides {
    display: flex;
    justify-content: space-between;
    width: 250px;
    margin: 10px 0;
    align-items: flex-end;
  }
  .center {
    display: flex;
    justify-content: center;
    height: 100px;
    align-items: center;
    width: 100%;
  }
`;

const disabledControls = {
  position: { control: { disable: true } },
  open: { control: { disable: true } },
  'flip-disabled': { control: { disable: true } },
};

export default {
  component: 'jh-tooltip',
  title: 'Components/Tooltip',
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top-center',
        'top-start',
        'top-end',
        'right',
        'left',
        'bottom-center',
        'bottom-start',
        'bottom-end',
      ],
    },
    open: {
      control: {
        type: 'boolean',
      },
    },
    'flip-disabled': {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Overview = {
  render: (args) =>
    html`<div class="overview">
      <div>
        <jh-tooltip position="top-start">
          <span slot="jh-tooltip-content">top-start</span>
          <jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
        <jh-tooltip position="top-center">
          <span slot="jh-tooltip-content">top-center</span>
          <jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
        <jh-tooltip position="top-end">
          <span slot="jh-tooltip-content">top-end</span>
          <jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
      </div>
      <div class="overviewSides">
        <jh-tooltip position="left">
          <span slot="jh-tooltip-content">left</span>
          <jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
        <jh-tooltip position="right">
          <span slot="jh-tooltip-content">right</span>
          <jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
      </div>
      <div>
        <jh-tooltip position="bottom-start">
          <span slot="jh-tooltip-content">bottom-start</span>
          <jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
        <jh-tooltip position="bottom-center">
          <span slot="jh-tooltip-content">bottom-center</span>
          <jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
        <jh-tooltip position="bottom-end">
          <span slot="jh-tooltip-content">bottom-end</span>
          <jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
      </div>
    </div>`,
};
Overview.parameters = {
  styles: storyStyles,
};
Overview.argTypes = {
  ...disabledControls,
};

export const Playground = {
  render: (args) =>
    html` <div class="center">
      <jh-tooltip
        position=${args.position}
        ?open=${args.open}
        ?flip-disabled=${args['flip-disabled']}>
        <jh-button label="Modify me!"></jh-button>
        <div slot="jh-tooltip-content">I am a tooltip with a long text that will wrap to the next line at 160px</div>
      </jh-tooltip>
    </div>`,
};

Playground.args = {
  position: 'top-center',
  open: false,
  'flip-disabled': false,
};
Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};

export const Default = {
  render: (args) =>
    html` <div class="center">
      <jh-tooltip position="top-center">
        <span slot="jh-tooltip-content">top-center</span>
        <jh-button label="Default"></jh-button
      ></jh-tooltip>
    </div>`,
};

Default.parameters = {
  styles: storyStyles,
};
Default.argTypes = {
  ...disabledControls,
};

export const ManuallyOpen = {
  render: (args) =>
    html` <div class="center">
      <jh-tooltip
        position=${args.position}
        ?open=${args.open}>
        <span slot="jh-tooltip-content">Open Tooltip</span>
        <jh-button label="Open"></jh-button
      ></jh-tooltip>
    </div>`,
};
ManuallyOpen.args = {
  open: true,
  position: 'top-center',
};
ManuallyOpen.parameters = {
  styles: storyStyles,
};
ManuallyOpen.argTypes = {
  'flip-disabled': { table: { disable: true } },
};

export const FlippingTooltip = {
  render: (args) =>
    html`
      <div class="flipping-tooltip">
        <jh-tooltip position=${args.position}>
          <span slot="jh-tooltip-content">I am a default tooltip that flips</span>
          <jh-button label="Flip"></jh-button
        ></jh-tooltip>
        <jh-tooltip position=${args.position} flip-disabled>
          <span slot="jh-tooltip-content">I am a tooltip that doesn't flip</span>
          <jh-button label="No Flip"></jh-button
        ></jh-tooltip>
      </div>
    `,
};

FlippingTooltip.args = {
  position: 'left',
};
FlippingTooltip.parameters = {
  styles: storyStyles,
};
FlippingTooltip.argTypes = {
  open: { table: { disable: true } },
  'flip-disabled': { table: { disable: true } },
};