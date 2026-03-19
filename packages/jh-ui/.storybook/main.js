// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

const config = {
  stories: ['../**/*.mdx', '../**/*.stories.js'],

  addons: [
    '@storybook/addon-a11y',
    'storybook-addon-tag-badges',
    '@storybook/addon-docs'
  ],

  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },

  staticDirs: ['./public']
};

export default config;