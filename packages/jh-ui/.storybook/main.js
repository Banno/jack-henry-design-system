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
  staticDirs: ['./public'],
  // Vite fix for the file:// import issue when using MDX stories in Storybook
  viteFinal: async (config) => {
    if (!config.plugins) config.plugins = [];

    config.plugins.push({
      name: 'fix-mdx-file-urls',
      enforce: 'pre',
      resolveId(source) {
        if (source.startsWith('file://')) {
          return source.replace(/^file:\/\//, '').replace(/^\/([A-Za-z]:)/, '$1');
        }
        return null;
      },
    });

    return config;
  },
};

export default config;