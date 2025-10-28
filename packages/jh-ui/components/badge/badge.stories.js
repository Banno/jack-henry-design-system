import { html, css } from 'lit';
import './badge.js';

const storyStyles = css`
div[id^="story-root"] {
  text-align: center;
}
.overview-row {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2%;
  width: 100%;
}
`;

const disableControls = {
  count: { control: { disable: true } },
  'max-count': { control: { disable: true } },
}

export default {
  component: 'jh-badge',
  title: 'Components/Badge',
  argTypes: {
    count: {
      control: 'text',
    },
    'max-count': {
      control: 'text',
    },
  },
};

export const Overview = { 
  render: (args) => html`
    <div class="overview-row">
      <jh-badge></jh-badge>
      <jh-badge count="50"></jh-badge>
      <jh-badge count="100" max-count="99"></jh-badge>
    </div>
  `
};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = { render: (args) => html`
  <jh-badge
   count=${args.count} 
   max-count=${args['max-count']} 
   ></jh-badge>
`};

Playground.args = {
count: '1',
'max-count': '99',
};

Playground.parameters = {
  theme: 'both-themes',
};




