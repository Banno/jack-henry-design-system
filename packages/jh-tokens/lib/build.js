// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import StyleDictionary from 'style-dictionary';
import formatJs from './formats/format.js';
import formatDocs from './formats/json-flat.js';

function getStyleDictionary(theme, platform) {
  return new StyleDictionary({
    source: [
      `tokens/global/**/*.json`
      ],
    include: [
      `tokens/${theme}/**/*.json`,
      `tokens/alias/**/*.json`
    ],
    hooks: {
      fileHeaders: { 
        licensedFileHeader: (defaultMessages = []) => [ //license info gets added to css and js files
          //REUSE-IgnoreStart
          'SPDX-FileCopyrightText: 2025 Jack Henry',
          '',
          'SPDX-License-Identifier: Apache-2.0',
          //REUSE-IgnoreEnd
          '',
          ...defaultMessages,
          `Generated on ${new Date().toUTCString()}`,
        ],
      },
      formats: {
        'custom/format/esm': formatJs,
        'custom/format/json': formatDocs,
      },
    },
    platforms: {
      web: {
        transformGroup: 'web',
        transforms: ['shadow/css/shorthand', 'color/hex8', 'fontFamily/css'],
        expand: {
          exclude: ['shadow'],
        },
        preprocessors: ['strip-descriptions'],
        prefix: 'jh',
        buildPath: `platforms/web/`,
        files: [
          {
            destination: `css/jh-theme-${theme}.css`,
            format: 'css/variables',
            options: {
              // if file should keep output references: ie --color-danger: var(--color-red); vs --color-danger: #ff0000;
              outputReferences: true,
              fileHeader: 'licensedFileHeader',
              selector: `${theme === 'light' ? ':root' : `.jh-theme-${theme}`}`,
            },
          },
          {
            destination: `esm/jh-theme-${theme}.js`,
            format: 'custom/format/esm',
            options: {
              outputReferences: true,
              usesDtcg: true,
              fileHeader: 'licensedFileHeader',
              selector: `${theme === 'light' ? ':root' : `.jh-theme-${theme}`}`,
            },
          },
        ],
      },
      typography: {
        transformGroup: 'web',
        transforms: ['shadow/css/shorthand', 'color/hex8', 'fontFamily/css', 'typography/css/shorthand'],
        expand: {
          exclude: ['typography'],
        },
        preprocessors: ['strip-descriptions'],
        prefix: 'jh',
        buildPath: `platforms/web/`,
        files: [
          {
            destination: `css/typography.css`,
            format: 'css/variables',
            filter: (token) => token.$type === 'typography',
            options: {
              // if file should keep output references: ie --color-danger: var(--color-red); vs --color-danger: #ff0000;
              outputReferences: true,
              showFileHeader: false
            },
          },
          {
            destination: `esm/typography.js`,
            format: 'custom/format/esm',
            filter: (token) => token.$type === 'typography',
            options: {
              // if file should keep output references: ie --color-danger: var(--color-red); vs --color-danger: #ff0000;
              outputReferences: true,
              showFileHeader: false,
            },
          },
        ],
      },
      json: {
        transformGroup: 'web',
        transforms: ['shadow/css/shorthand', 'fontFamily/css', 'color/hex8'],
        expand: {
          exclude: ['shadow'],
        },
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
      'json-typography': {
        transformGroup: 'web',
        transforms: ['shadow/css/shorthand', 'fontFamily/css', 'color/hex8', 'typography/css/shorthand'],
        expand: {
          exclude: ['typography'],
        },
        prefix: 'jh',
        buildPath: `platforms/json/json-flat/`,
        files: [
          {
            destination: `typography.json`,
            format: 'custom/format/json',
            filter: (token) => token.$type === 'typography',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  });
}

StyleDictionary.registerPreprocessor({
  name: 'strip-descriptions',
  preprocessor: (dict, options) => {
    // recursively traverse token objects and delete description props
    function removeDescription(slice) {
      delete slice.$description;
      Object.values(slice).forEach((value) => {
        if (typeof value === 'object') {
          removeDescription(value);
        }
      });
      return slice;
    }
    return removeDescription(dict);
  },
});

const THEME_NAMES = ['light', 'dark'];

const PLATFORM_NAMES = ['web', 'json', 'typography', 'json-typography'];

THEME_NAMES.forEach((theme) =>
  PLATFORM_NAMES.forEach((platform) =>
    getStyleDictionary(theme, platform).buildPlatform(platform)
  )
);
