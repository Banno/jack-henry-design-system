<!--
SPDX-FileCopyrightText: 2025 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

## @jack-henry/jh-tokens

Contains Forge Design System's core design tokens designed to be used with our [design system elements](https://github.com/Banno/jack-henry-design-system/tree/main/packages/jh-elements) package. To get started, visit our documentation sites.

* [jackhenry.design tokens](https://jackhenry.design/v2/foundations/design-tokens/overview/) provides documentation on our design tokens.
* [Jackhenry.design](https://jackhenry.design) focuses on introducing the underlying concepts of the Design System, usage guidelines, and a style guide.

### Typography utility classes

`platforms/web/css/typography-utility.css` (and its `platforms/web/esm/typography-utility.js` equivalent) provides a `.forge-type-*` layer of typography utility classes, generated from the typography tokens in `tokens/alias/typography-classes.json`. Each class sets the `font` shorthand (family, size, line-height, weight) for a given text style, so you can apply consistent typography without referencing individual CSS custom properties. These values are the same for both themes, so the same file works regardless of theme.

| Class | Size / Line-height | Weight |
| --- | --- | --- |
| `.forge-type-heading-xl` | 36 / 44 | 700 |
| `.forge-type-heading-lg` | 28 / 36 | 700 |
| `.forge-type-heading-md` | 20 / 28 | 700 |
| `.forge-type-heading-sm` | 16 / 24 | 700 |
| `.forge-type-body-lg-regular` | 16 / 24 | 400 |
| `.forge-type-body-lg-medium` | 16 / 24 | 500 |
| `.forge-type-body-lg-bold` | 16 / 24 | 700 |
| `.forge-type-body-md-regular` | 14 / 20 | 400 |
| `.forge-type-body-md-medium` | 14 / 20 | 500 |
| `.forge-type-body-md-bold` | 14 / 20 | 700 |
| `.forge-type-helper-regular` | 12 / 16 | 400 |
| `.forge-type-helper-medium` | 12 / 16 | 500 |
| `.forge-type-helper-bold` | 12 / 16 | 700 |
| `.forge-type-mono-lg` | 16 / 24 | 400 |
| `.forge-type-mono-md` | 14 / 20 | 400 |
| `.forge-type-mono-sm` | 12 / 16 | 400 |

```html
<link rel="stylesheet" href="node_modules/@jack-henry/jh-tokens/platforms/web/css/typography-utility.css">

<h1 class="forge-type-heading-xl">Heading</h1>
<p class="forge-type-body-md-regular">Body copy</p>
<code class="forge-type-mono-sm">code sample</code>
```

