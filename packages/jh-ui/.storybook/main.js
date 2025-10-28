const config = {
  stories: ['../**/*.mdx', '../**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/blocks',
    'storybook-dark-mode',
    'storybook-addon-tag-badges'
  ],
  docs: {
    autodocs: true,
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  staticDirs: ['./public'],
};

export default config;