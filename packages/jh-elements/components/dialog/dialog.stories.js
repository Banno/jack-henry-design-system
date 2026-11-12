/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';
import './dialog.js';
import '../button/button.js';
import '@jack-henry/jh-icons/icons-wc/icon-circle-xmark.js';

const storyStyles = css`
  .story-triggers {
    display: flex;
    flex-wrap: wrap;
    gap: var(--jh-dimension-400);
  }
  jh-dialog p,
  jh-dialog h2 {
    margin: 0;
  }
  jh-dialog .custom-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-actions {
    display: flex;
    justify-content: flex-end;
    gap: var(--jh-dimension-200);
  }
  img {
    display: block;
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
`;

const disableControls = {
  'dismiss-button-accessible-label': { control: { disable: true } },
  'footer-inset': { control: { disable: true } },
  'header-inset': { control: { disable: true } },
  open: { control: { disable: true } },
  'show-dismiss-button': { control: { disable: true } },
  'show-footer-divider': { control: { disable: true } },
  'show-header-divider': { control: { disable: true } },
  size: { control: { disable: true } },
};

const insetOptions = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96];

function logCustomEvent(name, e) {
  return action(name)({
    detail: e.detail,
    type: e.type,
    bubbles: e.bubbles,
    cancelable: e.cancelable,
    composed: e.composed,
    currentTarget: e.currentTarget,
    defaultPrevented: e.defaultPrevented,
    eventPhase: e.eventPhase,
    isTrusted: e.isTrusted,
    target: e.target,
    timeStamp: e.timeStamp,
  });
}

function openDialog(id) {
  return (e) => e.currentTarget.closest('section')?.querySelector(`#${id}`)?.show();
}

function closeDialog(e) {
  e.currentTarget.closest('jh-dialog')?.close();
}

const footerActions = html`
  <div slot="jh-dialog-footer" class="footer-actions">
    <jh-button appearance="secondary" label="Cancel" @click=${closeDialog}></jh-button>
    <jh-button appearance="primary" label="Confirm" @click=${closeDialog}></jh-button>
  </div>
`;

export default {
  component: 'jh-dialog',
  title: 'Components/Dialog',
  tags: ['new'],
  decorators: [
    (story) => html`
      <div
        @jh-open=${(e) => logCustomEvent('jh-open', e)}
        @jh-close=${(e) => logCustomEvent('jh-close', e)}
      >
        ${story()}
      </div>
    `,
  ],
  argTypes: {
    'dismiss-button-accessible-label': { control: 'text' },
    'footer-inset': {
      control: 'select',
      options: insetOptions,
    },
    'header-inset': {
      control: 'select',
      options: insetOptions,
    },
    'show-dismiss-button': { control: 'boolean' },
    'show-footer-divider': { control: 'boolean' },
    'show-header-divider': { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    open: { control: 'boolean' },
  }
};

export const Overview = { render: (args) => html`<section>
  <jh-dialog open id="overview-basic" show-header-divider show-footer-divider show-dismiss-button>
    <h2 slot="jh-dialog-header">Header Slot</h2>
    <p>Dialog body slot: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec lorem varius, congue tellus at, tempor mauris.</p>
    <p slot="jh-dialog-footer">Dialog footer slot: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </jh-dialog>
</section>`};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = { render: (args) => html`<section>
  <jh-button label="Open dialog" @click=${openDialog('playground')}></jh-button>
  <jh-dialog
    id="playground"
    size=${ifDefined(args.size)}
    dismiss-button-accessible-label=${ifDefined(args['dismiss-button-accessible-label'])}
    header-inset=${ifDefined(args['header-inset'])}
    footer-inset=${ifDefined(args['footer-inset'])}
    ?open=${args.open}
    ?show-dismiss-button=${args['show-dismiss-button']}
    ?show-header-divider=${args['show-header-divider']}
    ?show-footer-divider=${args['show-footer-divider']}
  >
    <h2 slot="jh-dialog-header">Dialog header</h2>
    <p>Dialog body slot: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div slot="jh-dialog-footer" class="footer-actions">
    <jh-button appearance="secondary" label="Cancel"></jh-button>
    <jh-button appearance="primary" label="Confirm"></jh-button>
  </div>
  </jh-dialog>
</section>`};

Playground.args = {
  'dismiss-button-accessible-label': 'Close dialog',
  'footer-inset': 0,
  'header-inset': 0,
  'show-dismiss-button': true,
  'show-footer-divider': false,
  'show-header-divider': false,
  size: 'medium',
  open: false,
};

Playground.parameters = {
  styles: storyStyles,
};

export const ActionButtons = {
  render: (args) => html`<section>
    <jh-button label="Open custom dialog" @click=${openDialog('custom-header')}></jh-button>
    <jh-dialog id="custom-header" scrollable ?open=${args.open}>
      <img src="/images/markus-winkler-DJoG5GsXfMw-unsplash.jpg" alt="Custom header image" slot="jh-dialog-media">
      <div class="custom-header" slot="jh-dialog-header">
        <h2>Custom Header</h2>
        <p>Header subtitle</p>
      </div>
      <p>The action buttons have been configured to close the dialog when clicked.</p>
      ${footerActions}
    </jh-dialog>
  </section>`,
}

ActionButtons.parameters = {
  styles: storyStyles,
};