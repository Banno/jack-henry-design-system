import { html, css } from 'lit';
import './toast-controller.js';
import '../toast/toast.js';
import '@jack-henry/jh-icons/icons-wc/icon-circle-info.js';

const storyStyles = css`
  .add-toast-button-controller {
  position: absolute;
  }
`;

export default {
  component: 'jh-toast-controller',
  title: 'Components/Toast Controller',
  parameters: {
    actions: {
      handles: ['jh-dismiss'],
    },
  },
  argTypes: {
    'max-count': {
      control:  'number',
    },
    role: {
      control: 'select',
      options: ['alert', 'status'],
    },
  },
};

export const Overview = {
  render: (args) => html`
    <div class="overview-story">
      <jh-toast-controller>
        <jh-toast timeout=0 appearance="positive" hide-dismiss-button>Address successfully updated.<jh-icon-circle-info slot="jh-toast-icon"></jh-icon-circle-info></jh-toast>
        <jh-toast timeout=0 appearance="neutral" dismiss-button-accessible-label="dismiss toast">Email deleted.<jh-button slot="jh-toast-action" label="Undo"></jh-button></jh-toast>
        <jh-toast timeout=0 appearance="negative" dismiss-button-accessible-label="dismiss toast">Failed to send email.</jh-toast>
      </jh-toast-controller>
    </div>
  `,
};

Overview.parameters = {
  styles: storyStyles,
};

Overview.argTypes = {
  'max-count': { control: { disable: true } },
  role: { control: { disable: true } },
};

const createToast = (storyId) => {
  const story = document.getElementById(storyId);
  let controller = story.querySelector(`#${storyId} jh-toast-controller`);

  if (storyId === 'story-root-dark') {
    controller.style.transform = 'translateX(50vw)';
  }

  let toast = document.createElement('jh-toast');
  toast.setAttribute('appearance', 'positive');
  toast.setAttribute('dismiss-button-accessible-label', 'dismiss toast');
  toast.setAttribute('timeout', '0');
  toast.innerHTML = `Toast added! Enable screen reader to test addition of toast to the controller.`;
  controller.appendChild(toast);
};

export const Playground = {
  render: (args) => {
    let handleClick = function (e) {
      let storyId = e.target.parentElement.parentElement.id;
      createToast(storyId);
    };
    return html`
      <div class="add-toast-button-controller">
       <jh-button label="Add toast" @click=${handleClick}></jh-button> 
      </div>
      <jh-toast-controller max-count=${args['max-count']} role=${args.role}></jh-toast-controller>
    `;
  },
};

Playground.args = {
  'max-count': 3,
  role: 'status',
};

Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};

