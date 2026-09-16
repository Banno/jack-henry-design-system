---
title: Color
description: Color plays a functional role throughout the Forge system to create consistent, meaningful, and accessible user experiences.
---

## Global color palette

### Color families

- Consists of ten color families.
- Each family is represented by a source color that falls within a specific hue range on the color wheel.
- Source colors are defined with both hex and LCH values.

| Color family | Hue range | Hex value | LCH value            |
| ------------ | --------- | --------- | -------------------- |
| Red          | 355-24    | `#E52108` | `49.2, 92.3, 40.7`   |
| Orange       | 25-54     | `#E59008` | `66.9, 75.1, 71.2`   |
| Yellow       | 55-84     | `#CCE508` | `86.4, 89.4, 109.6`  |
| Green        | 115-144   | `#08E522` | `79.7, 106.5, 137.2` |
| Mint         | 145-174   | `#08E590` | `80.7, 71.3, 156.1`  |
| Cyan         | 175-204   | `#76DCFD` | `82.9, 32.7, 230.3`  |
| Blue         | 205-234   | `#085CE5` | `43.3, 81.4, 293`    |
| Violet       | 265-294   | `#9008E5` | `40.8, 111.1, 314.9` |
| Magenta      | 295-324   | `#E508CC` | `53.1, 97, 333.2`    |
| Gray         | —         |           |                      |

### Color grades

- Each family is a scale of nineteen grades ranging from `50` to `950` in steps of 50.
- Defined as hex-8 color values.
- Grades represent a specific lightness and luminance that determines what kind of contrast a color will have with other colors from the palette.
- Lightness and luminance values are targets.
- Color contrast guidelines are defined by [WCAG 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

| **Grade** | **Lightness** | **Contrast ratio (with pure white)** | **Luminance** |
| --------- | ------------- | ------------------------------------ | ------------- |
| 50        | 96.2          | 1.1                                  | 90.5          |
| 100       | 93.1          | 1.2                                  | 83.1          |
| 150       | 86.0          | 1.4                                  | 68            |
| 200       | 82.5          | 1.6                                  | 61            |
| 250       | 75.6          | 1.9                                  | 49.1          |
| 300       | 71.4          | 2.2                                  | 42.9          |
| 350       | 66.6          | 2.6                                  | 36.1          |
| 400       | 62.9          | 2.9                                  | 31.4          |
| 450       | 57.6          | 3.4                                  | 25.4          |
| 500       | 48.9          | 4.7                                  | 17.5          |
| 550       | 44.9          | 5.4                                  | 14.4          |
| 600       | 42.0          | 6                                    | 12.5          |
| 650       | 38.0          | 7                                    | 10.0          |
| 700       | 34.3          | 8                                    | 8.2           |
| 750       | 30.3          | 9.2                                  | 6.3           |
| 800       | 26.0          | 10.8                                 | 4.8           |
| 850       | 21.5          | 12.5                                 | 3.4           |
| 900       | 17.9          | 14                                   | 2.5           |
| 950       | 12.1          | 16.4                                 | 1.4           |

Step differences guarantee a specific contrast between two color grades:

- **500 or more:** 4.5:1 contrast
- **400 or more:** 3:1 contrast

Examples:

- `color.gray.200` with `color.blue.700` (a difference of 500); guarantees a contrast of at least 4.5:1.
- `color.gray.200` with `color.gray.500` (a difference of 300); fails both WCAG guidelines for color contrast.

### Usage

- SHOULD prioritize `100`-level colors (`100`, `200`, `300`, etc.) for most of the UI.
- MAY use `50`-level colors (`50`, `150`, `250`, etc.) where more subtle variation is necessary while maintaining sufficient contrast (ex. state changes).
- MUST NOT use global colors directly within a design; they have no context.
  ```css
  custom-button {
    background-color: var(--jh-color-blue-600);
  }
  ```
- MUST use global colors only to define color alias tokens.
- MUST NOT use raw values or CSS color keywords instead of tokens.
  ```css
  custom-button {
    background-color: #085ce5ff;
  }
  custom-button {
    background-color: blue;
  }
  ```

### Create new scales

Users MAY create additional color scales:

- MUST be a complete 19-grade scale that conforms to the same contrast ratios as the other color families.
- MUST use the LCH color space.
- MUST work within the sRGB color gamut.
- MUST include a grade `500` that has 4.5:1 contrast with both pure white (grade `0`) and pure black (grade `1000`).
- SHOULD be perceptually distinguishable from existing color scales.
- SHOULD use color family names that accurately describe the referenced hue, complement existing names, and are readily understandable to an average user.

## Global alpha tokens

- White and black token scales with varying degrees of opacity.
- Defined as hex-8 color values.
- Each scale includes 10 grades ranging from `10` to `100` in steps of 10.
- Grade `10` is nearly transparent.
- Grade `100` is completely opaque.
- Grades `10` through `90` don't predictably contrast with the rest of the global palette.

### Usage

- MUST use only on color properties.
- MUST use `100` grades when pure white and black are needed.
- MAY use other grades for varying degrees of opacity, such as overlays and shadows.
- SHOULD test for appropriate color contrast when an alpha token is layered with other colors.
- SHOULD interpret pure white (`color.white.alpha.100`) as grade `0` of a color family's scale. Works with the color contrast grade differences (ex. can be used with grade `500` or higher of a global color and meet 4.5:1 contrast.)
- SHOULD interpret pure black (`color.black.alpha.100`) as grade `1000` of a color family's scale. Works with the color contrast grade differences (ex. can be used with grade `500` or lower of a global color and meet 4.5:1 contrast.)
- There is no color token for complete transparency. MUST use the raw value `#00000000` to style a color property as completely transparent.
  ```css
  custom-text {
    color: #00000000;
  }
  ```
- SHOULD NOT use the CSS keyword `transparent` to define complete transparency; it isn't a platform-agnostic value.
- MUST NOT use raw values (ex. `#ffffffff`) or CSS color keywords (ex. `white`, `black`) instead of tokens, other than the `#00000000` transparency exception above.
  ```css
  custom-text {
    color: #ffffffff;
  }
  custom-text {
    color: black;
  }
  ```
- SHOULD NOT confuse with `opacity` tokens (see [Alpha tokens versus opacity tokens](#alpha-tokens-versus-opacity-tokens)).

### Alpha tokens versus opacity tokens

Alpha tokens:

- Includes tokens from `color.black.alpha.*` and `color.white.alpha.*`.
- Defined as hex-8 color values.

Opacity tokens:

- Includes tokens from `opacity.*`.
- Defined by number values ranging from 0% to 100%.
- SHOULD use to set the opacity of an entire element.
- MAY use with color tokens to create alpha versions of the color scales.

## Color aliases

### Concepts

- Allows color to be used consistently and predictably.
- Seven predefined contexts:
  - **Container:** The main surfaces found throughout the UI.
  - **Overlay:** Layers that separate a prominent surface from a less prominent surface.
  - **Control:** Interactive control elements (ex. slider and switch tracks).
  - **Divider:** Element and UI edges (ex. dividers, table borders, and component outlines).
  - **Brand:** Elements that need specific colors that might otherwise fall outside Forge-defined colors; aren't guaranteed to have color contrast with other color concepts; default values are same for both light and dark themes.
  - **Content:** Text, iconography, and other content-based elements; meets 4.5:1 contrast against any container color.
  - **Interactive:** General interactions (ex. focus, content highlighting).

#### Usage

- MUST test contrast of `brand` when layered with other colors.
- MAY be used on any color property (ex. `color`, `background`, `border`, `fill`, etc.).

### Pairings

- Ensures appropriate color contrast when used with their respective "surface" colors.
- Represented by the `on` segment in a token name.

#### Usage

- MUST only be used with their referenced "surface" token (ex. `color.content.on.primary.enabled` and `color.content.primary.enabled`). This ensures proper color contrast ratios and predictable theming results.

### States

- Available on select token sets.
- Allows static and interactive use.
- Aligns with comparable [CSS pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes).

Common states:

- **Enabled:** An interactive element in its non-interacted state.
- **Focus:** An element is clicked, tapped, or selected with a keyboard.
- **Hover:** A cursor is moved over an element.
- **Active:** An element is pressed by the user.
- **Disabled:** An element that can't be activated or receive focus.
- **Selected:** An element that is chosen or toggled on among a set of options.

#### Usage

- MUST be placed in the correct position of a token name, as defined by the [naming structure](/specs/foundation/design-tokens.md#naming-structure)
- MAY apply `enabled` tokens to non-interactive elements.
- MAY use `enabled` as part of a token name to help future-proof a token set even if it currently has no other interactions.
- MAY use other states (ex. `pending`, `required`) when defining new aliases.
- SHOULD NOT apply `enabled` tokens to other states.
- MUST NOT use alternative state names (ex. `default` instead of `enabled`).
