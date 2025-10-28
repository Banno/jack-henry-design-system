import { html, css } from 'lit';
import './notification.js';
import '@jack-henry/jh-icons/icons-wc/icon-circle-info.js';
import '../button/button.js';

const storyStyles = css`
  div[id^="story-root"] {
    display: flex;
  }
  .overview-story {
    margin: auto;
    padding: 3%;
    width: 50%;
  }
  .overview-story jh-notification[type='alert'] {
    margin-top: 40px;
  }
  .playground-story {
    position: absolute;
    width: 43%;
  }
  .trigger-notification-button {
    position: absolute;
    bottom: 2%;
  }
`;

const disableAllControls = {
  appearance: { control: false },
  'dismiss-button-accessible-label': { control: false },
  'hide-dismiss-button': { control: false },
  stacked: { control: false },
  type: { control: false },
};

export default {
  component: 'jh-notification',
  title: 'Components/Notification',
  parameters: {
    actions: {
      handles: ['jh-dismiss'],
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['banner', 'alert'],
    },
    appearance: {
      control: 'select',
      options: ['neutral', 'positive', 'negative'],
    },
    stacked: {
      control: { type: 'boolean' },
    },
    'hide-dismiss-button': {
      control: { type: 'boolean' },
    },
    'dismiss-button-accessible-label': {
      control: { type: 'text' },
    },
  },
};

export const Overview = {
  render: (args) =>
    html`
      <div class="overview-story">
        <jh-notification type="banner" hide-dismiss-button
          ><jh-icon-circle-info
            slot="jh-notification-icon"
          ></jh-icon-circle-info
          >Banner</jh-notification
        >
        <jh-notification
          type="alert"
          dismiss-button-accessible-label="dismiss notification"
          >Alert<jh-button
            label="Action button"
            slot="jh-notification-action"
          ></jh-button
        ></jh-notification>
      </div>
    `,
};

Overview.parameters = {
  styles: storyStyles,
};

Overview.argTypes = {
  ...disableAllControls,
};

export const Playground = {
  render: (args) =>
    html`
      <div class="playground-story">
        <jh-notification
          appearance=${args.appearance}
          dismiss-button-accessible-label=${args[
            'dismiss-button-accessible-label'
          ]}
          ?hide-dismiss-button=${args['hide-dismiss-button']}
          ?stacked=${args.stacked}
          type=${args.type}
          >Default Slot<jh-icon-circle-info
            slot="jh-notification-icon"
          ></jh-icon-circle-info
          ><jh-button label="Button" slot="jh-notification-action"></jh-button
          ><jh-button label="Button" slot="jh-notification-action"></jh-button
        ></jh-notification>
      </div>
    `,
};

Playground.args = {
  appearance: 'neutral',
  'dismiss-button-accessible-label': 'dismiss notification',
  'hide-dismiss-button': false,
  stacked: true,
  type: 'alert',
};

Playground.parameters = {
  theme: 'both-themes',
  styles: storyStyles,
};

export const Banner = {
  render: (args) =>
    html`
      <div class="banner-story">
        <jh-notification
          action-primary-label="Label"
          appearance=${args.appearance}
          dismiss-button-accessible-label=${args[
            'dismiss-button-accessible-label'
          ]}
          ?hide-dismiss-button=${args['hide-dismiss-button']}
          ?stacked=${args.stacked}
          type="banner"
        >
          Banner
          <jh-button
            label="Action button"
            slot="jh-notification-action"
          ></jh-button>
          <jh-button
            label="Action button"
            slot="jh-notification-action"
          ></jh-button>
        </jh-notification>
      </div>
    `,
};

Banner.args = {
  appearance: 'neutral',
  'hide-dismiss-button': true,
  stacked: false,
  'dismiss-button-accessible-label': 'dismiss notification',
};

Banner.parameters = {
  styles: storyStyles,
};

Banner.argTypes = {
  type: { table: { disable: true } },
};

export const Alert = {
  render: (args) =>
    html`
      <jh-notification
        action-primary-label="Label"
        appearance=${args.appearance}
        dismiss-button-accessible-label=${args[
          'dismiss-button-accessible-label'
        ]}
        ?hide-dismiss-button=${args['hide-dismiss-button']}
        ?stacked=${args.stacked}
        type="alert"
      >
        Text
        <jh-button
          label="Action button"
          slot="jh-notification-action"
        ></jh-button>
        <jh-button
          label="Action button"
          slot="jh-notification-action"
        ></jh-button>
      </jh-notification>
    `,
};

Alert.args = {
  appearance: 'neutral',
  'hide-dismiss-button': true,
  stacked: false,
  'dismiss-button-accessible-label': 'dismiss notification',
};

Alert.argTypes = {
  type: { table: { disable: true } },
};

const createNewNotification = (
  appearance,
  hideDismissButton,
  dismissButtonAccessibleLabel,
  type
) => {
  let notification = document.createElement('jh-notification');
  notification.setAttribute('appearance', appearance);
  hideDismissButton
    ? notification.setAttribute('hide-dismiss-button', hideDismissButton)
    : null;
  dismissButtonAccessibleLabel
    ? notification.setAttribute(
        'dismiss-button-accessible-label',
        dismissButtonAccessibleLabel
      )
    : null;
  type ? notification.setAttribute('type', type) : null;
  notification.innerHTML =
    'Notification successfully triggered! Enable screen reader to test addition of alert to live region with role of status.';
  const story = document.getElementById('trigger-notification-story');
  story.appendChild(notification);
};

export const TriggerNotification = {
  render: (args) => {
    let handleClick = function () {
      let existingNotification =
        document.getElementsByTagName('jh-notification');
      if (existingNotification.length) {
        existingNotification[0].remove();
      }
      createNewNotification(
        args.appearance,
        args['hide-dismiss-button'],
        args['dismiss-button-accessible-label'],
        args.type
      );
    };

    return html`
      <div class="trigger-notification-story">
        <div id="trigger-notification-story" role="status"></div>
        <div class="trigger-notification-button">
          <jh-button
            label="Create notification"
            @click=${handleClick}
          ></jh-button>
        </div>
      </div>
    `;
  },
};

TriggerNotification.args = {
  appearance: 'positive',
  'hide-dismiss-button': true,
  'dismiss-button-accessible-label': 'dismiss notification',
  type: 'alert',
};

TriggerNotification.argTypes = {
  stacked: { table: { disable: true } },
};

TriggerNotification.parameters = {
  styles: storyStyles,
};