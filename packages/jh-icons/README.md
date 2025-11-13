<!--
SPDX-FileCopyrightText: 2025 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# Jack Henry Iconography

Jack Henry icons are designed to provide a consistent look and feel across your products. Our icon set is 
open source and intended to be used with Jack Henry's design system. The icons are available as an 
npm package which includes:

- SVG icon files
- ES module based web component for each icon
- A utility to convert your own SVG icons to web components.

## Converting SVGs to Web Components

We've included a conversion utility to help you convert your own icons to web components and leverage our
design tokens.

The generate-wc.js utility accepts the following arguments:
- sourcePath - The path to the directory where your raw SVG icons are stored.
- outputPath - The destination folder where the created web components will be output.
- prefix - A string that will be prepended to each icon name. This establishes a namespace for your icons to ensure
no naming collisions. A `-` dash character will be inserted after the provided prefix.

Usage example:

```
node @jack-henry/jh-icons/bin/generate-wc.js sourcePath outputPath prefix
```

Please note that any files with the same filename as the output web component will be overwritten in the outputPath.

## Icon Documentation

Access documentation on our [iconography](https://jackhenry.design/pages/foundations/icons/) and [icon web component](https://jackhenry.design/pages/components/icon/).

## Contributing

We're always looking to expand our icon set and you can help! If you would like to recommend and icon or
are interested in contributing one that you created, please visit our design system
repo and open an issue for an [Icon Request](https://github.com/Banno/jack-henry-design-system/issues).