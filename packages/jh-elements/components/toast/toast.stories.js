import { html, css } from 'lit';
import './toast.js';
import '../button/button.js';

const storyStyles = css`
  .overview-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .overview-story {
    width: 35%;
  }
  .overview-story jh-toast {
    margin-top: 5%;
  }
  #trigger-toast-story {
    width: 100%;
    height: 100px;
  }
  .trigger-toast-button {
    position: absolute;
    bottom: 8%;
  }
`;

const disableAllControls = {
  appearance: { control: false },
  'dismiss-button-accessible-label': { control: false },
  'hide-dismiss-button': { control: false },
  stacked: { control: false },
  timeout: { control: false },
};

export default {
  component: 'jh-toast',
  title: 'Components/Toast',
  parameters: {
    actions: {
      handles: ['jh-dismiss'],
    },
  },
  argTypes: {
    appearance: {
      control: 'select',
      options: ['neutral', 'positive', 'negative'],
    },
    stacked: {
      control: 'boolean',
    },
    'hide-dismiss-button': {
      control: 'boolean',
    },
    'dismiss-button-accessible-label': {
      control: 'text',
    },
    timeout: {
      control: 'number',
    },
  },
};

export const Overview = {
  render: (args) =>
    html`
      <div class="overview-container">
        <div class="overview-story">
          <jh-toast timeout="0" hide-dismiss-button
            ><jh-icon-circle-info slot="jh-toast-icon"></jh-icon-circle-info
            >Toast<jh-button label="Button" slot="jh-toast-action"></jh-button
          ></jh-toast>
          <jh-toast timeout="0" stacked
            >Stacked Toast<jh-button
              label="Button"
              slot="jh-toast-action"
            ></jh-button
          ></jh-toast>
        </div>
      </div>
    `,
};

Overview.argTypes = {
  ...disableAllControls,
};

Overview.parameters = {
  styles: storyStyles,
};

const createNewToast = (
  appearance,
  hideDismissButton,
  dismissButtonAccessibleLabel,
  timeout,
  stacked,
  storyId
) => {
  const story = document.getElementById(storyId);
  let liveRegion = story.querySelector('div.live-region');

  let toast = document.createElement('jh-toast');
  toast.setAttribute('appearance', appearance);
  hideDismissButton
    ? toast.setAttribute('hide-dismiss-button', hideDismissButton)
    : null;
  toast.setAttribute(
    'dismiss-button-accessible-label',
    dismissButtonAccessibleLabel
  );
  toast.setAttribute('timeout', timeout);
  stacked ? toast.setAttribute('stacked', stacked) : null;
  toast.innerHTML = `Toast Added! Enable screen reader to test addition of toast to live region. <jh-button slot='jh-toast-action' label="Button"></jh-button>`;
  toast.setAttribute('id', storyId);
  liveRegion.appendChild(toast);
};

export const Playground = {
  render: (args) => {
    let handleClick = function (e) {
      let storyId = e.target.parentElement.parentElement.id;
      let existingToast = document.querySelectorAll(`jh-toast#${storyId}`);

      if (existingToast.length) {
        existingToast[0].remove();
      }
      createNewToast(
        args.appearance,
        args['hide-dismiss-button'],
        args['dismiss-button-accessible-label'],
        args.timeout,
        args.stacked,
        storyId
      );
    };

    return html`
      <div
        class="live-region"
        role="status"
        aria-relevant="additions"
        aria-atomic="false"
      ></div>
      <div class="trigger-toast-button">
        <jh-button label="Add toast" @click=${handleClick}></jh-button>
      </div>
    `;
  },
};

Playground.args = {
  timeout: 5000,
  appearance: 'positive',
  'hide-dismiss-button': true,
  'dismiss-button-accessible-label': 'dismiss toast',
  stacked: false,
};

Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};
