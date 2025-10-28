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
  label: { control: { disable: true } },
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
    label: {
      control: {
        type: 'text',
      },
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
        <jh-tooltip label="top-start" position="top-start"
          ><jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
        <jh-tooltip label="top-center" position="top-center"
          ><jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
        <jh-tooltip label="top-end" position="top-end"
          ><jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
      </div>
      <div class="overviewSides">
        <jh-tooltip label="left" position="left"
          ><jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
        <jh-tooltip label="right" position="right"
          ><jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
      </div>
      <div>
        <jh-tooltip label="bottom-start" position="bottom-start"
          ><jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
        <jh-tooltip label="bottom-center" position="bottom-center"
          ><jh-button icon-position="before" accessible-label="view more"
            ><jh-icon-ellipsis
              slot="jh-button-icon"
            ></jh-icon-ellipsis></jh-button
        ></jh-tooltip>
        <jh-tooltip label="bottom-end" position="bottom-end"
          ><jh-button icon-position="before" accessible-label="view more"
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
        label=${args.label}
        position=${args.position}
        ?open=${args.open}
        ?flip-disabled=${args['flip-disabled']}
        ><jh-button label="Modify me!"></jh-button
      ></jh-tooltip>
    </div>`,
};

Playground.args = {
  label: 'Tooltip',
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
      <jh-tooltip label="top-center" position="top-center"
        ><jh-button label="Default"></jh-button
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
        label="Open Tooltip"
        position=${args.position}
        ?open=${args.open}
        ><jh-button label="Open"></jh-button
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
  label: { table: { disable: true } },
  'flip-disabled': { table: { disable: true } },
};

export const FlippingTooltip = {
  render: (args) =>
    html`
      <div class="flipping-tooltip">
        <jh-tooltip
          label="I am a default tooltip that flips"
          position=${args.position}
          ><jh-button label="Flip"></jh-button
        ></jh-tooltip>
        <jh-tooltip
          label="I am a tooltip that doesn't flip"
          position=${args.position}
          flip-disabled
          ><jh-button label="No Flip"></jh-button
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
  label: { table: { disable: true } },
  open: { table: { disable: true } },
  'flip-disabled': { table: { disable: true } },
};