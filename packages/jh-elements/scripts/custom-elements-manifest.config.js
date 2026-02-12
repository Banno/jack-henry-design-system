// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { customElementJetBrainsPlugin } from "custom-element-jet-brains-integration";
import { filterPrivatePropertiesPlugin } from "./cem-plugins/filter-private-properties.js";
import { filterEventsPlugin } from "./cem-plugins/filter-jh-events.js";

export default {
  /** Globs to analyze */
  globs: ['components/**/*.js'],
  /** Globs to exclude */
  exclude: ['components/**/*.stories.js',
    'components/**/*.d.ts'
  ],
  /** Run in dev mode, provides extra logging */
  dev: false,
  /** Run in watch mode, runs on file changes */
  watch: false,
  /** Output CEM path to `package.json`, defaults to true */
  packagejson: false,
  /** Enable special handling for litelement */
  litelement: true,
  plugins: [
    filterPrivatePropertiesPlugin(),
    //additional prefix can be passed if needed
    filterEventsPlugin('jh-'),
    customElementJetBrainsPlugin({
      // hide parts of JSDocs that are bleeding into description.
      hideCssPropertiesDocs: true,
      hideEventDocs: true,
      hideSlotDocs: true,
    })
  ]
}