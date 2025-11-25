// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import './card.js';
import '../tooltip/tooltip.js';
import { ifDefined } from 'lit/directives/if-defined.js';

const storyStyles = css`
  div[id^="story-root"] {
    display: flex;
    justify-content: center;
  }
  section {
    margin: 10px;
  }
  .overview-story {
    width: 300px;
  }
  .padding-story {
    display: flex;
  }
  jh-card {
    margin: 2%;
    --jh-card-media-aspect-ratio: 16/9;
    align-self: baseline;
  }
  h2,
  p {
    margin: 0;
  }
  iframe,
  img,
  video {
    border: none;
  }
`;

const disableControls = {
  'footer-divider-inset': { control: { disable: true } },
  'header-divider-inset': { control: { disable: true } },
  padding: { control: { disable: true } },
  'show-footer-divider': { control: { disable: true } },
  'show-header-divider': { control: { disable: true } },
  'header-subtitle': { control: { disable: true } },
  'header-title': { control: { disable: true } },
  'title-heading-level': { control: { disable: true } },
};

export default {
  title: 'Components/Card',
  component: 'jh-card',
  argTypes: {
    'header-title': { control: 'text' },
    'header-subtitle': { control: 'text' },
    padding: {
      control: 'select',
      options: ['small', 'medium', 'none'],
    },
    'show-header-divider': { control: 'boolean' },
    'show-footer-divider': { control: 'boolean' },
    'header-divider-inset': {
      control: 'select',
      options: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
    },
    'footer-divider-inset': {
      control: 'select',
      options: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
    },
    'title-heading-level': {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
  },
};

export const Overview = {
  render: (args) => html`
    <section class="overview-story">
      <jh-card
        show-header-divider
        show-footer-divider
        header-title="Title"
        header-subtitle="Subtitle"
      >
      <img
          slot="jh-card-media"
          src="/images/markus-winkler-DJoG5GsXfMw-unsplash.jpg"
        />
        <p>
          Card body slot: Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Praesent nec lorem varius, congue tellus at, tempor mauris.
        </p>
        <footer slot="jh-card-footer">Card footer slot</footer>
      </jh-card>
    </section>
    <section class="overview-story">
      <jh-card>
        <iframe
          slot="jh-card-media"
          src="https://www.youtube.com/embed/jvpBe6EjBUM"
        ></iframe>
        <h2 slot="jh-card-header">Card Header Slot</h2>
        <p>
          Card body slot: Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Praesent nec lorem varius, congue tellus at, tempor mauris.
        </p>
        <footer slot="jh-card-footer">Card footer slot</footer>
      </jh-card>
    </section>
    <section class="overview-story">
      <jh-card
        header-title="Title"
        show-header-divider
        header-divider-inset="24"
      >
        <p>
          Card body slot: Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Praesent nec lorem varius, congue tellus at, tempor mauris.
        </p>
        <footer slot="jh-card-footer">
          Card footer slot: ipsum dolor sit amet, consectetur adipiscing elit.
        </footer>
      </jh-card>
    </section>
  `,
};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = {
  render: (args) => html`<section>
    <jh-card
      padding=${args.padding}
      ?show-footer-divider=${args['show-footer-divider']}
      footer-divider-inset=${ifDefined(
        args['footer-divider-inset'] || args['footer-divider-inset'] !== ''
          ? args['footer-divider-inset']
          : null
      )}
      ?show-header-divider=${args['show-header-divider']}
      header-divider-inset=${ifDefined(
        args['header-divider-inset'] || args['header-divider-inset'] !== ''
          ? args['header-divider-inset']
          : null
      )}
      header-title=${ifDefined(
        args['header-title'] || args['header-title'] !== ''
          ? args['header-title']
          : null
      )}
      header-subtitle=${ifDefined(
        args['header-subtitle'] || args['header-subtitle'] !== ''
          ? args['header-subtitle']
          : null
      )}
      title-heading-level=${ifDefined(
        args['title-heading-level'] || args['title-heading-level'] !== ''
          ? args['title-heading-level']
          : null
      )}
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem maecenas
        pulvinar diam amet, purus quis massa enim.
      </div>
      <footer slot="jh-card-footer">Footer Text</footer>
    </jh-card>
  </section>`,
};

Playground.args = {
  padding: 'medium',
  'footer-divider-inset': 0,
  'header-divider-inset': 0,
  'show-footer-divider': true,
  'show-header-divider': false,
  'header-subtitle': null,
  'header-title': 'Title',
  'title-heading-level': 2,
};

Playground.parameters = {
  theme: 'both-themes',
};

export const Padding = { 
  render:(args) => html`
    <section class="padding-story">
      <jh-card padding="none" header-title="Padding 'none'">
        <div>
          Padding none only affects the default slot. The header and footer slot
          retain the default medium padding.
        </div>
        <footer slot="jh-card-footer">Footer Text</footer>
      </jh-card>
      <jh-card padding="small" header-title="Padding 'small'">
        <div>Small padding affects all slots.</div>
        <footer slot="jh-card-footer">Footer Text</footer>
      </jh-card>
      <jh-card padding="medium" header-title="Padding 'medium'">
        <div>Medium padding affects all slots.</div>
        <footer slot="jh-card-footer">Footer Text</footer>
      </jh-card>
    </section>
  `,
};

Padding.argTypes = {
  ...disableControls,
};

Padding.parameters = {
  styles: storyStyles,
};
