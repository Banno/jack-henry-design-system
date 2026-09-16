---
title: Color
description: Color plays a functional role throughout the Forge system to create consistent, meaningful, and accessible user experiences.
---

# Color

Color plays a functional role throughout Forge, helping create consistent, meaningful, and accessible experiences. It's organized into a few layers — a global palette, alpha and opacity values, and a set of color aliases — that work together to keep color predictable across every product.

## Global color palette

### Color families

The global palette consists of ten color families. Each family is represented by a source color that falls within a specific hue range on the color wheel, and source colors are defined with both hex and LCH values.

| Color family | Hue range | Hex value | LCH value            |
| ------------ | --------- | --------- | --------------------- |
| Red          | 355-24    | `#E52108` | `49.2, 92.3, 40.7`    |
| Orange       | 25-54     | `#E59008` | `66.9, 75.1, 71.2`    |
| Yellow       | 55-84     | `#CCE508` | `86.4, 89.4, 109.6`   |
| Green        | 115-144   | `#08E522` | `79.7, 106.5, 137.2`  |
| Mint         | 145-174   | `#08E590` | `80.7, 71.3, 156.1`   |
| Cyan         | 175-204   | `#76DCFD` | `82.9, 32.7, 230.3`   |
| Blue         | 205-234   | `#085CE5` | `43.3, 81.4, 293`     |
| Violet       | 265-294   | `#9008E5` | `40.8, 111.1, 314.9`  |
| Magenta      | 295-324   | `#E508CC` | `53.1, 97, 333.2`     |
| Gray         | —         |           |                       |

### Color grades

Each family is a scale of nineteen grades, ranging from `50` to `950` in steps of 50 and defined as hex-8 color values. Grades represent a specific lightness and luminance that determines the kind of contrast a color has with other colors from the palette — lightness and luminance values are targets, and color contrast guidelines follow [WCAG 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

| Grade | Lightness | Contrast ratio (with pure white) | Luminance |
| ----- | --------- | --------------------------------- | --------- |
| 50    | 96.2      | 1.1                                | 90.5      |
| 100   | 93.1      | 1.2                                | 83.1      |
| 150   | 86.0      | 1.4                                | 68        |
| 200   | 82.5      | 1.6                                | 61        |
| 250   | 75.6      | 1.9                                | 49.1      |
| 300   | 71.4      | 2.2                                | 42.9      |
| 350   | 66.6      | 2.6                                | 36.1      |
| 400   | 62.9      | 2.9                                | 31.4      |
| 450   | 57.6      | 3.4                                | 25.4      |
| 500   | 48.9      | 4.7                                | 17.5      |
| 550   | 44.9      | 5.4                                | 14.4      |
| 600   | 42.0      | 6                                  | 12.5      |
| 650   | 38.0      | 7                                  | 10.0      |
| 700   | 34.3      | 8                                  | 8.2       |
| 750   | 30.3      | 9.2                                | 6.3       |
| 800   | 26.0      | 10.8                               | 4.8       |
| 850   | 21.5      | 12.5                               | 3.4       |
| 900   | 17.9      | 14                                 | 2.5       |
| 950   | 12.1      | 16.4                               | 1.4       |

The difference between two grades guarantees a specific contrast:

- **500 or more:** 4.5:1 contrast
- **400 or more:** 3:1 contrast

For example, `color.gray.200` with `color.blue.700` — a difference of 500 — guarantees a contrast of at least 4.5:1. But `color.gray.200` with `color.gray.500` — a difference of only 300 — fails both WCAG guidelines for color contrast.

### Usage

#### Do

- Use global colors to define color alias tokens.
- Prioritize `100`-level colors (`100`, `200`, `300`, and so on) for most of the UI.
- Use `50`-level colors (`50`, `150`, `250`, and so on) where a more subtle variation is needed while still maintaining sufficient contrast, such as for state changes.

#### Don't

- Don't use global colors directly within a design — they have no context on their own.
  ```css
  custom-button {
    background-color: var(--jh-color-blue-600);
  }
  ```
- Don't use raw values or CSS color keywords in place of a token.
  ```css
  custom-button {
    background-color: #085ce5ff;
  }
  custom-button {
    background-color: blue;
  }
  ```

### Create new scales

New color scales can be created when needed. A new scale should:

- Be a complete 19-grade scale that follows the same contrast ratios as the other color families.
- Use the LCH color space and work within the sRGB color gamut.
- Include a grade `500` that has 4.5:1 contrast with both pure white (grade `0`) and pure black (grade `1000`).
- Be perceptually distinguishable from the existing color scales.
- Use a family name that accurately describes the referenced hue, complements the existing names, and is easy for an average user to understand.

## Global alpha tokens

White and black token scales with varying degrees of opacity, defined as hex-8 color values. Each scale includes ten grades, ranging from `10` to `100` in steps of 10 — grade `10` is nearly transparent, and grade `100` is completely opaque. Grades `10` through `90` don't predictably contrast with the rest of the global palette.

### Usage

#### Do

- Use alpha tokens only on color properties.
- Use the `100` grade when pure white or black is needed.
- Test for appropriate color contrast whenever an alpha token is layered with other colors.
- Treat pure white (`color.white.alpha.100`) as grade `0` of a color family's scale — for example, it can be paired with grade `500` or higher of a global color and still meet 4.5:1 contrast.
- Treat pure black (`color.black.alpha.100`) as grade `1000` of a color family's scale, which works the same way with grade `500` or lower.
- Use the other grades for varying degrees of opacity, such as overlays and shadows.
- Use the raw value `#00000000` to define complete color transparency — it's the one place a raw color value is allowed.

#### Don't

- Don't use the CSS keyword `transparent` to define color transparency in a token — it isn't a platform-agnostic value.
- Don't confuse alpha tokens with opacity tokens — see [Alpha tokens versus opacity tokens](#alpha-tokens-versus-opacity-tokens) below.

### Alpha tokens versus opacity tokens

**Alpha tokens** include tokens from `color.black.alpha.*` and `color.white.alpha.*`, defined as hex-8 color values.

**Opacity tokens** include tokens from `opacity.*`, defined by number values ranging from 0% to 100%. Use them to set the opacity of an entire element, or combine them with color tokens to create alpha versions of the color scales.

## Color aliases

### Concepts

Color aliases let color be used consistently and predictably, organized into seven predefined contexts:

- **Container:** the main surfaces found throughout the UI.
- **Overlay:** layers that separate a prominent surface from a less prominent surface.
- **Control:** interactive control elements, such as slider and switch tracks.
- **Divider:** element and UI edges, such as dividers, table borders, and component outlines.
- **Brand:** elements that need specific colors that might otherwise fall outside Forge-defined colors. These aren't guaranteed to have color contrast with other color concepts, and their default values are the same for both light and dark themes.
- **Content:** text, iconography, and other content-based elements, meeting 4.5:1 contrast against any container color.
- **Interactive:** general interactions, such as focus and content highlighting.

### Pairings

Pairing tokens ensure appropriate color contrast when used with their respective "surface" colors, represented by the `on` segment in a token name.

### States

States are available on select token sets and allow for both static and interactive use, aligning with comparable [CSS pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes). Common states include:

- **Enabled:** an interactive element in its non-interacted state.
- **Focus:** an element that's clicked, tapped, or selected with a keyboard.
- **Hover:** a cursor moved over an element.
- **Active:** an element pressed by the user.
- **Disabled:** an element that can't be activated or receive focus.
- **Selected:** an element that's chosen or toggled on among a set of options.

### Usage

#### Do

- Test the contrast of the `brand` concept whenever it's layered with other colors.
- Use an `on` token only with the "surface" token it references — for example, `color.content.on.primary.enabled` alongside `color.content.primary.enabled` — to keep color contrast ratios correct and theming results predictable.
- Place a state in the correct position of a token name, following the token naming structure.
- Use a concept on any color property, such as `color`, `background`, `border`, or `fill`.
- Apply `enabled` state tokens to non-interactive elements.
- Include `enabled` as part of a token name to help future-proof a token set, even before it has other interactive states.
- Use other states, like `pending` or `required`, when defining new aliases.

#### Don't

- Don't use alternative state names, like `default` instead of `enabled`.
- Don't apply `enabled` tokens to other states.
