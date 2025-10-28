import { html, css } from 'lit';
import './list-item.js';
import '@jack-henry/jh-icons/icons-wc/icon-user.js';
import '@jack-henry/jh-icons/icons-wc/icon-ellipsis.js';

const storyStyles = css`
  div[id^="story-root"] {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  div[id^='story-root'] .list {
    width: 400px;
    margin: 10px;
  }
`;

const disableControls = {
  'primary-text': { control: { disable: true } },
  'secondary-text': { control: { disable: true } },
  'primary-metadata': { control: { disable: true } },
  'secondary-metadata': { control: { disable: true } },
  'show-divider': { control: { disable: true } },
  'divider-inset': { control: { disable: true } },
  disabled: { control: { disable: true } },
  selected: { control: { disable: true } },
};

export default {
  component: 'jh-list-item',
  title: 'Components/List Item',
  argTypes: {
    'primary-text': {
      control: {
        type: 'text',
      },
    },
    'primary-metadata': {
      control: {
        type: 'text',
      },
    },
    'secondary-text': {
      control: {
        type: 'text',
      },
    },
    'secondary-metadata': {
      control: {
        type: 'text',
      },
    },
    'divider-inset': {
      control: 'select',
      options: [null, 0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
    },
    'show-divider': {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    selected: {
      control: 'boolean',
    },
  },
};

export const Overview = {
  render: (args) => html`
    <div role="list" class="list">
      <jh-list-item show-divider>Default Slot</jh-list-item>
      <jh-list-item
        >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-list-item
      >
    </div>
    <div role="list" class="list">
      <jh-list-item>
        <div slot="jh-list-item-left">Left slot</div>
        <div slot="jh-list-item-content">Content slot</div>
        <div slot="jh-list-item-metadata">Metadata slot</div>
        <div slot="jh-list-item-right">Right slot</div>
      </jh-list-item>
      <jh-list-item>
        <jh-icon-user slot="jh-list-item-left"></jh-icon-user>
        <jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis>
        <div slot="jh-list-item-content">Lorem ipsum dolor sit amet</div>
        <div slot="jh-list-item-metadata">Lorem ipsum</div>
      </jh-list-item>
    </div>
    <div role="list" class="list">
      <jh-list-item
        show-divider
        primary-text=${args['primary-text']}
        secondary-text=${args['secondary-text']}
        primary-metadata=${args['primary-metadata']}
        secondary-metadata=${args['secondary-metadata']}
      >
        <div slot="jh-list-item-left">Left slot</div>
        <div slot="jh-list-item-right">Right slot</div>
      </jh-list-item>
      <jh-list-item
        primary-text=${args['primary-text']}
        secondary-text=${args['secondary-text']}
        primary-metadata=${args['primary-metadata']}
        secondary-metadata=${args['secondary-metadata']}
      >
        <jh-icon-user slot="jh-list-item-left"></jh-icon-user>
        <jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis>
      </jh-list-item>
    </div>
    <div role="list" class="interactive-list">
      <jh-list-item
        tabindex="0"
        primary-text=${args['primary-text']}
        secondary-text=${args['secondary-text']}
        primary-metadata=${args['primary-metadata']}
        secondary-metadata=${args['secondary-metadata']}
      >
        <div slot="jh-list-item-left">Left slot</div>
        <div slot="jh-list-item-right">Right slot</div>
      </jh-list-item>
      <jh-list-item
        tabindex="0"
        primary-text=${args['primary-text']}
        secondary-text=${args['secondary-text']}
        primary-metadata=${args['primary-metadata']}
        secondary-metadata=${args['secondary-metadata']}
      >
        <jh-icon-user slot="jh-list-item-left"></jh-icon-user>
        <jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis>
      </jh-list-item>
    </div>
  `,
};

Overview.args = {
  'primary-text': 'Primary text',
  'primary-metadata': 'Primary metadata',
  'secondary-text': 'Secondary text',
  'secondary-metadata': 'Secondary metadata',
};
Overview.parameters = {
  styles: storyStyles,
};
Overview.argTypes = {
  ...disableControls,
};

export const Playground = {
  render: (args) =>
    html` <div role="list" class="list">
      <jh-list-item
        divider-inset=${args['divider-inset']}
        ?show-divider=${args['show-divider']}
        ?disabled=${args.disabled}
        ?selected=${args.selected}
        primary-text=${args['primary-text']}
        secondary-text=${args['secondary-text']}
        primary-metadata=${args['primary-metadata']}
        secondary-metadata=${args['secondary-metadata']}
      >
        <jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis>
        <jh-icon-user slot="jh-list-item-left"></jh-icon-user>
      </jh-list-item>
    </div>`,
};

Playground.args = {
  'primary-text': 'Primary text',
  'primary-metadata': 'Primary metadata',
  'secondary-text': 'Secondary text',
  'secondary-metadata': 'Secondary metadata',
  'show-divider': false,
  'divider-inset': null,
  disabled: false,
  selected: false,
};
Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};
Playground.argTypes = {
  disabled: { control: { disable: true } },
  selected: { control: { disable: true } },
};

export const Default = {
  render: (args) =>
    html` <div role="list" class="list">
      <jh-list-item>Default</jh-list-item>
    </div>`,
};

Default.parameters = {
  styles: storyStyles,
};
Default.argTypes = {
  ...disableControls,
};

export const DefaultLayout = {
  render: (args) =>
    html` <div role="list" class="list">
      <jh-list-item>
        <div slot="jh-list-item-left">Left slot</div>
        <div slot="jh-list-item-content">Content slot</div>
        <div slot="jh-list-item-metadata">Metadata slot</div>
        <div slot="jh-list-item-right">Right slot</div>
      </jh-list-item>
      <jh-list-item>
        <jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis>
        <jh-icon-user slot="jh-list-item-left"></jh-icon-user>
        <div slot="jh-list-item-content">Lorem ipsum dolor sit amet</div>
        <div slot="jh-list-item-metadata">Lorem ipsum</div>
      </jh-list-item>
    </div>`,
};

DefaultLayout.parameters = {
  styles: storyStyles,
};
DefaultLayout.argTypes = {
  ...disableControls,
};

export const LayoutWithProperties = {
  render: (args) =>
    html` <div role="list" class="list">
      <jh-list-item
        primary-text=${args['primary-text']}
        secondary-text=${args['secondary-text']}
        primary-metadata=${args['primary-metadata']}
        secondary-metadata=${args['secondary-metadata']}
      >
        <div slot="jh-list-item-left">Left slot</div>
        <div slot="jh-list-item-right">Right slot</div>
      </jh-list-item>
      <jh-list-item
        primary-text=${args['primary-text']}
        secondary-text=${args['secondary-text']}
        primary-metadata=${args['primary-metadata']}
        secondary-metadata=${args['secondary-metadata']}
      >
        <jh-icon-user slot="jh-list-item-left"></jh-icon-user>
        <jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis>
      </jh-list-item>
    </div>`,
};

LayoutWithProperties.args = {
  'primary-text': 'Primary text',
  'primary-metadata': 'Primary metadata',
  'secondary-text': 'Secondary text',
  'secondary-metadata': 'Secondary metadata',
};
LayoutWithProperties.parameters = {
  styles: storyStyles,
};
LayoutWithProperties.argTypes = {
  ...disableControls,
};

export const InteractiveList = {
  render: (args) =>
    html` <div role="list" class="list">
      <jh-list-item
        tabindex="0"
        show-divider
        primary-text=${args['primary-text']}
        secondary-text=${args['secondary-text']}
        primary-metadata=${args['primary-metadata']}
        secondary-metadata=${args['secondary-metadata']}
      >
        <jh-icon-user slot="jh-list-item-left"></jh-icon-user>
        <jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis>
      </jh-list-item>
      <jh-list-item
        show-divider
        tabindex="0"
        ?disabled=${args.disabled}
        ?selected=${args.selected}
        primary-text=${args['primary-text']}
        secondary-text=${args['secondary-text']}
        primary-metadata=${args['primary-metadata']}
        secondary-metadata=${args['secondary-metadata']}
      >
        <jh-icon-user slot="jh-list-item-left"></jh-icon-user>
        <jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis>
      </jh-list-item>
      <jh-list-item
        show-divider
        tabindex="0"
        primary-text=${args['primary-text']}
        secondary-text=${args['secondary-text']}
        primary-metadata=${args['primary-metadata']}
        secondary-metadata=${args['secondary-metadata']}
      >
        <jh-icon-user slot="jh-list-item-left"></jh-icon-user>
        <jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis>
      </jh-list-item>
    </div>`,
};

InteractiveList.args = {
  selected: false,
  disabled: false,
  'primary-text': 'Primary text',
  'primary-metadata': 'Primary metadata',
  'secondary-text': 'Secondary text',
  'secondary-metadata': 'Secondary metadata',
};
InteractiveList.parameters = {
  styles: storyStyles,
};
InteractiveList.argTypes = {
  'primary-text': { control: { disable: true } },
  'secondary-text': { control: { disable: true } },
  'primary-metadata': { control: { disable: true } },
  'secondary-metadata': { control: { disable: true } },
  'show-divider': { control: { disable: true } },
  'divider-inset': { control: { disable: true } },
};

export const TextTruncation = {
  render: (args) =>
    html`
      <div role="list" class="list">
        <jh-list-item
          primary-text="Primary text - long text gets truncated"
          primary-metadata="Primary metadata"
          secondary-text="Secondary text"
          secondary-metadata="Secondary metadata"
        >
          <jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis>
          <jh-icon-user slot="jh-list-item-left"></jh-icon-user>
        </jh-list-item>
        <jh-list-item
          primary-text="Primary text"
          primary-metadata="Long primary metadata"
          secondary-text="Secondary text - lorem ipsum dolor"
          secondary-metadata="Secondary metadata"
        >
          <jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis>
          <jh-icon-user slot="jh-list-item-left"></jh-icon-user>
        </jh-list-item>
        <jh-list-item
          primary-text="Primary text - long text gets truncated"
          secondary-text="Secondary text - lorem ipsum dolor"
        >
          <jh-icon-ellipsis slot="jh-list-item-right"></jh-icon-ellipsis>
          <jh-icon-user slot="jh-list-item-left"></jh-icon-user>
          <div slot="jh-list-item-metadata">Metadata Slot - Lorem ipsum</div>
        </jh-list-item>
      </div>
    `,
};
TextTruncation.parameters = {
  styles: storyStyles,
};
TextTruncation.argTypes = {
  ...disableControls,
};
