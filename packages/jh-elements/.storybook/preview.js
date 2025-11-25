// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import '@jack-henry/jh-tokens/platforms/web/css/jh-theme-light.css';
import '@jack-henry/jh-tokens/platforms/web/css/jh-theme-dark.css';
import './public/assets/fonts/fonts.css';
import { html } from 'lit';
import { lightTheme } from './sb-themes';
import { darkTheme } from './sb-themes';
import { setCustomElements } from '@storybook/web-components';
import customElements from '../custom-elements.json';
import React from 'react';
import { DocsContainer } from '@storybook/blocks';
import { useDarkMode } from 'storybook-dark-mode';
import { withActions } from '@storybook/addon-actions/decorator';

setCustomElements(customElements);

const preview = {
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
      //RegEx to hide all tokens, properties, events, and slots from Controls
      exclude: /([A-Z])\w+|(jh)|(default)/g,
    },
    options: {
      storySort: {
        method: '',
        order: [
          'Welcome',
          'What\'s New',
          ['V2 Release', 'Migrating'],
          'Getting Started',
          ['Installing', 'Usage', 'Typography'],
          'Iconography',
          ['Overview', 'Gallery'],
          'Design Tokens',
          'Guides',
          ['Extending'],
          'Components',
          ['*',
          ['Table', 'Table Row', 'Table Data Cell', 'Table Header Cell'],
        ],
        ],
        locales: '',
      },
    },
    darkMode: {
      light: lightTheme,
      dark: darkTheme,
    },
    docs: {
      toc: {
        headingSelector: 'h2, h3',
        ignoreSelector: '.toc-ignore h3',
        //set title to null so it doesn't show up on unattached docs pages without h2 or h3s.
        title: null,
      },
      argTypes: {
        //hide properties with 2+words
        exclude: /([A-Z])\w+/g,
        sort: 'alpha',
      },
      container: (context) => {
        const isDark = useDarkMode();

        const props = {
          ...context,
          theme: isDark ? darkTheme : lightTheme,
        };

        return React.createElement(DocsContainer, props);
      },
    },
  },

  decorators: [
    (story, context) => {
      //the theme can be pulled from the globals or set in the story parameters (for playground)
      const theme =
        context.parameters.theme || context.globals.theme || 'light';
      return html`
        <style>
          ${context.parameters.styles || ''}
        </style>
        ${theme === 'both-themes'
          ? html`
            <div style="display:flex;min-height:90vh;">
              <div
                id="story-root-light"
                style="width:50%;padding:2%;background-color:#FFFFFF;" >
                ${story()}
              </div>
              <div
                id="story-root-dark"
                class="jh-theme-dark"
                style="width:50%;padding:2%;background-color:#333333;" >
                ${story()}
              </div>
            </div>`
          : theme === 'light'
          ? html` <div id="story-root">${story()}</div>`
          : html`<div id="story-root" class="jh-theme-dark">${story()}</div>`}
      `;
    },
    withActions, //needed for Actions tab
  ],

  tags: ['autodocs']
};

export const globalTypes = {
  theme: {
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // The label to show for this toolbar item
      title: 'DS Theme',
      icon: 'circlehollow',
      // Array of plain string values
      items: [
        { value: 'light', icon: 'sun', title: 'Light' },
        { value: 'dark', icon: 'moon', title: 'Dark' },
        { value: 'both-themes', icon: 'mirror', title: 'Both Themes' },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export default preview;
