const StyleDictionary = require('style-dictionary');
const { formatJsCss } = require('./formats/format.js');
const { formatDocs } = require('./formats/json-flat.js');

function getStyleDictionary(theme, platform) {
  return StyleDictionary.extend({
    source: [
      `tokens/global/**/*.json`,
      `tokens/alias/**/*.json`,
      `tokens/${theme}/**/*.json`,
    ],
    platforms: {
      web: {
        transformGroup: 'web',
        prefix: 'jh',
        buildPath: `platforms/web/`,
        "actions": ["copy_assets"],
        files: [
          {
            destination: `css/jh-theme-${theme}.css`,
            format: 'css/variables',
            options: {
              // if file should keep output references: ie --color-danger: var(--color-red); vs --color-danger: #ff0000;
              outputReferences: true,
              selector: `${theme === 'light' ? ':root' : `.jh-theme-${theme}`}`,
            },
          },
          {
            destination: `js-css/jh-theme-${theme}.js`,
            format: 'custom/format/js-css',
            options: {
              outputReferences: true,
              selector: `${theme === 'light' ? ':root' : `.jh-theme-${theme}`}`,
            },
          },
        ],
      },
      json: {
        transformGroup: 'web',
        prefix: 'jh',
        buildPath: `platforms/json/json-flat/`,
        files: [
          {
            destination: `jh-theme-${theme}.json`,
            format: 'custom/format/json',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  });
}

StyleDictionary.registerFormat({
  name: 'custom/format/js-css',
  formatter: formatJsCss,
});

StyleDictionary.registerFormat({
  name: 'custom/format/json',
  formatter: formatDocs,
});

const THEME_NAMES = ['light', 'dark'];

const PLATFORM_NAMES = ['web', 'json'];

THEME_NAMES.forEach((theme) =>
  PLATFORM_NAMES.forEach((platform) =>
    getStyleDictionary(theme, platform).buildPlatform(platform)
  )
);
