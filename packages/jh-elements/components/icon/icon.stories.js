// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import './icon.js';

const sizes = ['x-small', 'small', 'medium', 'large', 'x-large'];

const storyStyles = css`
  div[id^="story-root"] {
    display: flex;
    justify-content: center;
  }
`;

export default {
  component: 'jh-icon',
  title: 'Components/Icon',
  argTypes: {
    size: {
      control: 'select',
      options: ['x-small', 'small', 'medium', 'large', 'x-large'],
    },
  },
};

export const Overview = {
  render: (args) =>
    sizes.map(
      (size) => html`
        <jh-icon size=${size}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M8.53,11.47a.75.75,0,0,0-1.06,1.06L10,15A.75.75,0,0,0,11,15v0h0L16,10.06A.75.75,0,0,0,14.94,9L10.5,13.44Z"
            />
            <path
              d="M12,2.14,3.25,7.06V7.5c0,6.73,2.31,10.24,4.25,12a8.81,8.81,0,0,0,4.41,2.25h.19a8.81,8.81,0,0,0,4.41-2.25c1.94-1.76,4.25-5.26,4.25-12V7.06Zm0,18.1c-.89-.16-7.08-1.66-7.25-12.3L12,3.86l7.25,4.08C19.08,18.59,12.88,20.08,12,20.24Z"
            />
          </svg>
        </jh-icon>
      `
    ),
};

Overview.argTypes = {
  size: { control: { disable: true } },
};

export const Playground = {
  render: (args) => html`
    <jh-icon size=${args.size}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M8.53,11.47a.75.75,0,0,0-1.06,1.06L10,15A.75.75,0,0,0,11,15v0h0L16,10.06A.75.75,0,0,0,14.94,9L10.5,13.44Z"
        />
        <path
          d="M12,2.14,3.25,7.06V7.5c0,6.73,2.31,10.24,4.25,12a8.81,8.81,0,0,0,4.41,2.25h.19a8.81,8.81,0,0,0,4.41-2.25c1.94-1.76,4.25-5.26,4.25-12V7.06Zm0,18.1c-.89-.16-7.08-1.66-7.25-12.3L12,3.86l7.25,4.08C19.08,18.59,12.88,20.08,12,20.24Z"
        />
      </svg>
    </jh-icon>
  `,
};

Playground.args = {
  size: 'medium',
};

Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};
