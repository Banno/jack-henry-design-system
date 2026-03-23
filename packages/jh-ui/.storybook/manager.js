// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { addons } from 'storybook/manager-api';
import { lightTheme } from './sb-themes';
import { defaultConfig } from 'storybook-addon-tag-badges';

addons.setConfig({
  //sets the default theme to be used by the browser.
  //It switches to dark theme automatically if your browser is set to dark mode.
  theme: lightTheme,
  //custom colors for the badges in the sidbar and toolbar
  tagBadges: [
    {
      tags: 'new',
      badge: {
        text: `New`,
        style: {
          backgroundColor: '#1f883d',
          color: '#ffffff',
          borderColor: '#1f883d',
        },
      },
    },
    {
      tags: 'beta',
      badge: {
        text: `Beta`,
        style: {
          backgroundColor: '#747474',
          color: '#ffffff',
          borderColor: '#747474',
        },
      },
    },
    ...defaultConfig,
  ],
});
