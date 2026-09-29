// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { filterPrivatePropertiesPlugin } from "./cem-plugins/filter-private-properties.js";
import { applyDeprecationsPlugin } from "./cem-plugins/apply-deprecations.js";
import { deprecations } from "./cem-plugins/deprecations.js";
import { sortManifestPlugin } from "./cem-plugins/sort-manifest.js";

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
    applyDeprecationsPlugin(deprecations),
    sortManifestPlugin()
  ]
}