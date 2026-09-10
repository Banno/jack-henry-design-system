---
version: 2.0.0
name: Forge
description: Forge powers the products banks and credit unions rely on every day, creating a shared foundation for teams to design, build, and scale consistently across platforms.
omitted:
color:
  - "/packages/jh-tokens/tokens/global/color.json"
  - "/packages/jh-tokens/tokens/light/color.json"
  - "/packages/jh-tokens/tokens/dark/color.json"
typography:
  - "/packages/jh-tokens/tokens/global/font.json"
  - "/packages/jh-tokens/tokens/alias/font.json"
rounded:
spacing:
  - "/packages/jh-tokens/tokens/global/dimension.json"
components:
  - "/packages/jh-elements/components/"
---

## Overview

### Design tokens

- Design tokens are written in dot-notation throughout this file.
- Convert dot-notation design tokens to kebab case and prefix with `--jh` when creating documentation for the web.
- Use existing token information found in `/packages/jh-tokens/` wherever possible.

## Colors

Color plays a functional role throughout the Forge system to create consistent, meaningful, and accessible user experiences.

### Global color palette

The global color palette consists of eleven color families, each with nineteen graduated steps. The color families are derived from a source color represented with both hex and LCH values and fall within a specific hue range on the color wheel.

| Color family | Hue range | Hex value | LCH value            |
| ------------ | --------- | --------- | -------------------- |
| Red          | 355-24    | `#E52108` | `49.2, 92.3, 40.7`   |
| Orange       | 25-54     | `#E59008` | `66.9, 75.1, 71.2`   |
| Yellow       | 55-84     | `#CCE508` | `86.4, 89.4, 109.6`  |
| Lime         | 85-114    | `#D5FF00` | `94.0, 98.6, 112.8`  |
| Green        | 115-144   | `#08E522` | `79.7, 106.5, 137.2` |
| Mint         | 145-174   | `#08E590` | `80.7, 71.3, 156.1`  |
| Cyan         | 175-204   | `#76DCFD` | `82.9, 32.7, 230.3`  |
| Blue         | 205-234   | `#085CE5` | `43.3, 81.4, 293`    |
| Violet       | 265-294   | `#9008E5` | `40.8, 111.1, 314.9` |
| Magenta      | 295-324   | `#E508CC` | `53.1, 97, 333.2`    |
| Gray         | —         |           |                      |

Each color family is scaled 50 to 950 in grades of 50. The grades represent a specific lightness and luminance that guarantees what kind of contrast a color will have with other colors from the palette. The lightness and luminance values are targets.

| **Grade** | **Lightness** | **Contrast ratio (white)** | **Luminance** |
| --------- | ------------- | -------------------------- | ------------- |
| 50        | 96.2          | 1.1                        | 90.5          |
| 100       | 93.1          | 1.2                        | 83.1          |
| 150       | 86.0          | 1.4                        | 68            |
| 200       | 82.5          | 1.6                        | 61            |
| 250       | 75.6          | 1.9                        | 49.1          |
| 300       | 71.4          | 2.2                        | 42.9          |
| 350       | 66.6          | 2.6                        | 36.1          |
| 400       | 62.9          | 2.9                        | 31.4          |
| 450       | 57.6          | 3.4                        | 25.4          |
| 500       | 48.9          | 4.7                        | 17.5          |
| 550       | 44.9          | 5.4                        | 14.4          |
| 600       | 42.0          | 6                          | 12.5          |
| 650       | 38.0          | 7                          | 10.0          |
| 700       | 34.3          | 8                          | 8.2           |
| 750       | 30.3          | 9.2                        | 6.3           |
| 800       | 26.0          | 10.8                       | 4.8           |
| 850       | 21.5          | 12.5                       | 3.4           |
| 900       | 17.9          | 14                         | 2.5           |
| 950       | 12.1          | 16.4                       | 1.4           |

To guarantee a specific contrast between two color grades, ensure they have a minimum difference of one of the following:

- **4.5:1 contrast:** A difference of 500 or more
- **3:1 contrast:** A difference of 400 or more

For example, pairing `color.gray.200` with `color.blue.700` (a difference of 500) would guarantee a contrast of at least 4.5:1. However, `color.gray.200` with `color.gray.500` (a difference of 300) would fail both WCAG guidelines for color contrast.

Colors that use a 100-level designation (100, 200, 300, etc.) should be prioritized for most aspects of the user interface. However, colors that have a 50-level designation (50, 150, 250, etc.) can be used in situations where a change in color is necessary but contrast with any paired content needs to be maintained such as changes in state.

Colors from the global color palette are context-agnostic. As such, they should never be directly used within a design. Instead, use global colors to define alias tokens when there is no other appropriate alias token already exists.

Additional color family scales may be created as needed. They MUST:

- Be a complete 19-grade scale that conforms to the same luminance values as the other color families
- Be generated using the LCH color space
- Work within the sRGB color gamut
- Include a grade 500 that has 4.5:1 contrast with both pure white (grade 0) and pure black (grade 1000)

New scales should:

- Be perceptually distinguishable from existing color scales

### Global alpha tokens

A set of white and black alpha tokens are provided. These are graded by opacity from 10 to 100 with 10 being nearly transparent and 100 being completely opaque. The 100 grades should be used when pure white and black are needed. The other grades may be used when varying degrees of opacity are needed such as overlays and shadows.

Aside from the fully-opaque white and black colors, the opacity grades do not predictably contrast with the rest of the global color palette. Tests should be performed when an alpha token is paired with any other color to ensure the appropriate color contrast is honored.

When pairing with non-alpha colors in the global color palette, pure white (`color.white.alpha.100`) can be interpreted as the `0` grade of any hue's color ramp and pure black (`color.black.alpha.100`) can be interpreted as the `1000` grade. Use this interpretation along with the minimum grade differences mentioned in the global color palette section to ensure appropriate color contrast is maintained. For example, text that is `color.white.alpha.100` (pure white) can be used on a background that has a color grade of 500 or higher and meet 4.5:1 contrast.

### Color aliases

#### Concepts

Each color alias falls within one of the seven predefined semantic concepts. These concepts allow color to be used in a consistent and predictable manner throughout the user interface.

- **Container:** Use container colors as the main surfaces found throughout the user interface. In general, all content should sit on a container color.
- **Overlay:** Use the overlay color when modals such as dialogs need to sit on top of the main user interface.
- **Control:** Use control colors on the containers of interactive control elements such as slider and switch tracks.
- **Divider:** Use divider colors on bordered elements throughout the user interface such as dividers, table borders, and component outlines.
- **Brand:** Use brand colors on elements where . Note that these colors do not have the same interactive capabilities as the content colors and should be used accordingly. Brand colors should typically correlate to a customer's predominant color palette
- **Content:** Use content colors to style text, iconography, and other content-based elements. They may be used in both static and interactive contexts. Content colors meet 4.5:1 contrast against any container color.
- **Interactive:** Use interactive colors for general interactions such as focus and content highlighting.

#### Pairings

Color tokens have been designed with specific pairings to ensure appropriate color contrast. These pairings are represented by a set of `on` colors. The `on` colors denote which color tokens they may be paired with. The `on` colors should only be used with their referenced “surface” token. For example, `color.content.on.primary.enabled` may only be used on `color.content.primary.enabled`. This ensures proper color contrast ratios and predictable theming results.

#### States

Container, control, and content aliases have a series of states that are defined. This allows these color concepts to be used in both static and interactive situations. By default, the states are stepped in increments of 50 to provide enough of a visual difference when the state changes while ensuring appropriate color contrast with the corresponding “on” colors.

- Enabled:
- Focus:
- Hover:
- Active:
- Disabled:
- Selected:

## Typography

Thoughtful typography is important to establish visual hierarchy and clearly and efficiently communicate content.

### Font family

- **Roboto Flex.** This variable font includes a full range of weights and renders well across multiple devices and resolutions.
- **Roboto Mono.** Use in situations where a monospace typeface is needed.

All global font families MUST use the following structure: `font.family.*`.

| Token name         | Description            | Default value |
| ------------------ | ---------------------- | ------------- |
| `font.family.sans` | Sans-serif font family | `Roboto Flex` |
| `font.family.mono` | Monospace font family  | `Roboto Mono` |

Roboto Flex and Roboto Mono can both be downloaded from Google Fonts.

### Font size

The global type scale is made of 18 steps that increase in size. This allows for flexibility and typographic contrast when styling body and display type.

All global font size tokens MUST use the following structure: `font.size.*`.

| Token name       | Description    | Default value |
| ---------------- | -------------- | ------------- |
| `font.size.250`  | Font size 250  | `10px`        |
| `font.size.300`  | Font size 300  | `12px`        |
| `font.size.350`  | Font size 350  | `14px`        |
| `font.size.400`  | Font size 400  | `16px`        |
| `font.size.450`  | Font size 450  | `18px`        |
| `font.size.500`  | Font size 500  | `20px`        |
| `font.size.600`  | Font size 600  | `24px`        |
| `font.size.700`  | Font size 700  | `28px`        |
| `font.size.800`  | Font size 800  | `32px`        |
| `font.size.900`  | Font size 900  | `36px`        |
| `font.size.1050` | Font size 1050 | `42px`        |
| `font.size.1200` | Font size 1200 | `48px`        |
| `font.size.1350` | Font size 1350 | `54px`        |
| `font.size.1500` | Font size 1500 | `60px`        |
| `font.size.1700` | Font size 1700 | `68px`        |
| `font.size.1900` | Font size 1900 | `76px`        |
| `font.size.2100` | Font size 2100 | `84px`        |
| `font.size.2300` | Font size 2300 | `92px`        |

### Line height

The global line-height scale is made of 17 steps that increase in size. Use line height to create pleasing vertical rhythms and allow for appropriate readability. Font concepts have specific font size and line height pairings, but other line heights can be leveraged to fine-tune vertical spacing.

All global line height tokens MUST use the following structure: `font.line-height.*`.

| Token name              | Description      | Default value |
| ----------------------- | ---------------- | ------------- |
| `font.line-height.300`  | Line-height 300  | `12px`        |
| `font.line-height.400`  | Line-height 400  | `16px`        |
| `font.line-height.500`  | Line-height 500  | `20px`        |
| `font.line-height.600`  | Line-height 600  | `24px`        |
| `font.line-height.700`  | Line-height 700  | `28px`        |
| `font.line-height.800`  | Line-height 800  | `32px`        |
| `font.line-height.900`  | Line-height 900  | `36px`        |
| `font.line-height.1000` | Line-height 1000 | `40px`        |
| `font.line-height.1100` | Line-height 1100 | `44px`        |
| `font.line-height.1300` | Line-height 1300 | `52px`        |
| `font.line-height.1500` | Line-height 1500 | `60px`        |
| `font.line-height.1600` | Line-height 1600 | `64px`        |
| `font.line-height.1800` | Line-height 1800 | `72px`        |
| `font.line-height.2000` | Line-height 2000 | `80px`        |
| `font.line-height.2300` | Line-height 2300 | `92px`        |
| `font.line-height.2500` | Line-height 2500 | `100px`       |

### Weight

The global font weight scale has four weights. These weights correspond to the same [numerical designation and name mapping](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-weight#common_weight_name_mapping) within the CSS spec. Use font weight to thoughtfully add emphasis and content hierarchy.

All global font weight tokens MUST use the following structure: `font.weight.*`.

| Token name        | Description              | Default value |
| ----------------- | ------------------------ | ------------- |
| `font.weight.300` | Font weight 300; Light   | `300`         |
| `font.weight.400` | Font weight 400; Regular | `400`         |
| `font.weight.500` | Font weight 500; Medium  | `500`         |
| `font.weight.700` | Font weight 700; Bold    | `700`         |

### Italics

Italics are not currently part of the global font token set. Use overrides to manually italicize text.

**Code.** Use `font-style: italic;` to add a CSS style rule alongside the font tokens. For example, to define paragraph text with italics, use the following CSS:

```css
p {
  font-family: var(--jh-font-body-regular-1-font-family);
  font-weight: var(--jh-font-body-regular-1-font-weight);
  font-size: var(--jh-font-body-regular-1-font-size);
  line-height: var(--jh-font-body-regular-1-line-height);
  font-style: italic;
}
```

**Figma.** Use **Command + I** to apply an italic override on a text layer or selected text within a layer. In dev mode, this will accurately show the font tokens to apply as well as the additional italic override.

### Concepts

Forge includes a collection of semantic concepts that have pre-defined pairings of size, line height, and weight. These concepts should be used to create consistent, well-structured content and data throughout an application.

**Micro:** Use micro typography for “fine-print” text and small snippets of text with limited space within a component.

Token name: `font.micro.regular`

| Property     | Description | Value                    |
| ------------ | ----------- | ------------------------ |
| `fontFamily` |             | `{font.family.primary}`  |
| `fontSize`   |             | `{font.size.250}`        |
| `fontWeight` |             | `{font.weight.400}`      |
| `lineHeight` |             | `{font.line-height.300}` |

Token name: `font.micro.medium`

| Property     | Description | Value                    |
| ------------ | ----------- | ------------------------ |
| `fontFamily` |             | `{font.family.primary}`  |
| `fontSize`   |             | `{font.size.250}`        |
| `fontWeight` |             | `{font.weight.500}`      |
| `lineHeight` |             | `{font.line-height.300}` |

Token name: `font.micro.bold`

| Property     | Description | Value                    |
| ------------ | ----------- | ------------------------ |
| `fontFamily` |             | `{font.family.primary}`  |
| `fontSize`   |             | `{font.size.250}`        |
| `fontWeight` |             | `{font.weight.700}`      |
| `lineHeight` |             | `{font.line-height.300}` |

- **Helper:** Use helper typography for secondary or explanatory text. Use also for field labels.
- **Body:** Use body typography for blocks of text and most content displayed within components. There are two grades within the scale. The first grade (`01`) is used for the vast majority of body content. The second grade (`02`) is used for shorter spans of text that need more emphasis or hierarchy such as a page lead.
- **Code:** Use code typography for code references in standard blocks of text. Similar to the body concept, there are two grades within the scale. Each grade is designed to pair with that of the body concept. The first grade (`01`) is used for most inline and blocks of code. The second grade (`01`) is primarily used when code needs to referenced within or alongside the second scale of body text.
- **Heading:** Use heading typography to create visual hierarchy on a page and within a component. The heading scale includes size grades which increase in size.
- **Display:** Use display typography to create visual emphasis through size without being misconstrued as a heading. There are three grades within the scale that increase in size.

## Layout

## Elevation & Depth

## Shapes

## Components

## Do's and Don'ts

## Voice and tone

Our voice is clear, human, and confident. We should always feel like a trusted partner.

### Our voice

- **Clear, confident, and human.** Speak with professionalism, but never at the expense of warmth.
- **Active, direct, and supportive.** Help people navigate complex financial topics with ease.

Avoid jargon, write concisely, and prioritize inclusivity so every client, customer, and member feels respected and understood.

### Our tone

Our tone flexes depending on context. The tone always aligns with our voice.

- **Friendly and approachable.** Write as if you’re speaking directly to someone. Contractions are welcome.
- **Professional, not stiff.** Use financial and technical terms only when necessary, and explain them clearly.
- **Confident but humble.** Focus on clarity and transparency. Don’t overpromise.
- **Inclusive.** Use language that respects all audiences. Avoid assumptions about gender, background, or ability.
