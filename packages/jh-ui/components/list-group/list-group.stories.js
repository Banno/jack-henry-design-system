import { html, css } from 'lit';
import './list-group.js';
import '../list-item/list-item.js';
import '@jack-henry/jh-icons/icons-wc/icon-user.js';
import '@jack-henry/jh-icons/icons-wc/icon-ellipsis.js';

const storyStyles = css`
  div[id^="story-root"] {
    display: flex;
    justify-content: center;
  }
  .list {
    width: 400px;
    margin: 10px;
  }
`;

export default {
  component: 'jh-list-group',
  title: 'Components/List Group',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    'accessible-label': {
      control: {
        type: 'text',
      },
    },
  },
};

export const Overview = {
  render: (args) => html`
    <div role="list" class="list">
      <jh-list-group accessible-label="aria-label">
        <jh-list-item
          primary-text="Primary text"
          primary-metadata="Primary metadata"
          secondary-text="Secondary text"
          secondary-metadata="Secondary metadata"
          ><jh-icon-user slot="jh-list-item-left"></jh-icon-user
          ><jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis
        ></jh-list-item>
        <jh-list-item
          primary-text="Primary text"
          primary-metadata="Primary metadata"
          secondary-text="Secondary text"
          secondary-metadata="Secondary metadata"
          ><jh-icon-user slot="jh-list-item-left"></jh-icon-user
          ><jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis
        ></jh-list-item>
        <jh-list-item
          primary-text="Primary text"
          primary-metadata="Primary metadata"
          secondary-text="Secondary text"
          secondary-metadata="Secondary metadata"
          ><jh-icon-user slot="jh-list-item-left"></jh-icon-user
          ><jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis
        ></jh-list-item>
      </jh-list-group>
      <jh-list-group label="Label">
        <jh-list-item
          primary-text="Primary text"
          primary-metadata="Primary metadata"
          secondary-text="Secondary text"
          secondary-metadata="Secondary metadata"
          ><jh-icon-user slot="jh-list-item-left"></jh-icon-user
          ><jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis
        ></jh-list-item>
        <jh-list-item
          primary-text="Primary text"
          primary-metadata="Primary metadata"
          secondary-text="Secondary text"
          secondary-metadata="Secondary metadata"
          ><jh-icon-user slot="jh-list-item-left"></jh-icon-user
          ><jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis
        ></jh-list-item>
        <jh-list-item
          primary-text="Primary text"
          primary-metadata="Primary metadata"
          secondary-text="Secondary text"
          secondary-metadata="Secondary metadata"
          ><jh-icon-user slot="jh-list-item-left"></jh-icon-user
          ><jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis
        ></jh-list-item>
      </jh-list-group>
    </div>
  `,
};

Overview.argTypes = {
  label: { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
};
Overview.parameters = {
  styles: storyStyles,
};

export const Playground = {
  render: (args) => html`
    <div role="list" class="list">
      <jh-list-group
        label=${args.label}
        accessible-label=${args['accessible-label']}
      >
        <jh-list-item
          primary-text="Primary text"
          primary-metadata="Primary metadata"
          secondary-text="Secondary text"
          secondary-metadata="Secondary metadata"
          ><jh-icon-user slot="jh-list-item-left"></jh-icon-user
          ><jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis
        ></jh-list-item>
        <jh-list-item
          primary-text="Primary text"
          primary-metadata="Primary metadata"
          secondary-text="Secondary text"
          secondary-metadata="Secondary metadata"
          ><jh-icon-user slot="jh-list-item-left"></jh-icon-user
          ><jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis
        ></jh-list-item>
        <jh-list-item
          primary-text="Primary text"
          primary-metadata="Primary metadata"
          secondary-text="Secondary text"
          secondary-metadata="Secondary metadata"
          ><jh-icon-user slot="jh-list-item-left"></jh-icon-user
          ><jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis
        ></jh-list-item>
      </jh-list-group>
    </div>
  `,
};

Playground.args = {
  label: 'Label',
  'accessible-label': 'aria-label',
};
Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};
