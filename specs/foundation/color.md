---
name: Color
description:
---

## Colors

Color plays a functional role throughout the Forge system to create consistent, meaningful, and accessible user experiences.

### Global color palette

- The global color palette consists of ten color families.
- The color families are represented by a source color that falls within a specific hue range on the color wheel.
- The source colors are defined with both hex and LCH values.

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

Each color family is scale of nineteen grades that range from `50` to `950` in steps of 50. The grades represent a specific lightness and luminance that guarantees what kind of contrast a color will have with other colors from the palette. The lightness and luminance values are targets.

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

Examples:

- Pairing `color.gray.200` with `color.blue.700` (a difference of 500) would guarantee a contrast of at least 4.5:1.
- Pairing `color.gray.200` with `color.gray.500` (a difference of 300) would fail both WCAG guidelines for color contrast.

Colors that use a 100-level designation (100, 200, 300, etc.) SHOULD be prioritized for most aspects of the user interface. However, colors that have a 50-level designation (50, 150, 250, etc.) MAY be used in situations where more subtle changes in color are necessary but similar contrast with paired content needs to be maintained such as changes in state.

Colors from the global color palette are context-agnostic. As such, they MUST NOT be directly used within a design. Use global colors only to define color alias tokens.

Additional color family scales may be created as needed. They MUST:

- Be a complete 19-grade scale that conforms to the same contrast ratios as the other color families
- Be generated using the LCH color space
- Work within the sRGB color gamut
- Include a grade 500 that has 4.5:1 contrast with both pure white (grade `0`) and pure black (grade `1000`)

New scales SHOULD:

- Be perceptually distinguishable from existing color scales
- Use color family names that accurately describe the referenced hue, compliment existing names, and are readily understandable to an average user.

### Global alpha tokens

- A set of white and black alpha tokens are provided.
- These are graded by opacity from `10` to `100` with `10` being nearly transparent and `100` being completely opaque.
- The `100` grades MUST be used when pure white and black are needed.
- The other grades MAY be used when varying degrees of opacity are needed such as overlays and shadows.
- These should not be confused with `opacity` tokens:
  - Alpha color tokens are specific color values with a defined alpha channel. Use them on color properties.
  - `opacity` tokens are number values that represent 0% to 100% and set the opacity of an entire element. Use them on `opacity` or similar properties.
- Opacity tokens MAY be used in conjunction with color tokens to create alpha versions of the color scales.

Aside from the fully-opaque white and black colors, the opacity grades do not predictably contrast with the rest of the global color palette. Tests SHOULD be performed when an alpha token is paired with any other color to ensure the appropriate color contrast is honored.

When pairing with non-alpha colors in the global color palette, pure white (`color.white.alpha.100`) can be interpreted as the `0` grade of any hue's color ramp and pure black (`color.black.alpha.100`) can be interpreted as the `1000` grade. Use this interpretation along with the minimum grade differences mentioned in the global color palette section to ensure appropriate color contrast is maintained. For example, text that is `color.white.alpha.100` (pure white) can be used on a background that has a color grade of `500` or higher and meet 4.5:1 contrast.

There is no color token for complete transparency. Use `#00000000` to style a color property as completely transparent. Users SHOULD NOT use the CSS keyword `transparent` to define complete transparency in tokens since it is not a platform-agnostic value.

### Color aliases

#### Concepts

Each color alias falls within one of the seven predefined semantic concepts. These concepts allow color to be used in a consistent and predictable manner throughout the user interface.

- **Container:** Use container colors as the main surfaces found throughout the user interface. In general, all content should sit on a container color.
- **Overlay:** Use the overlay color when modals such as dialogs need to sit on top of the main user interface.
- **Control:** Use control colors on the containers of interactive control elements such as slider and switch tracks.
- **Divider:** Use divider colors on bordered elements throughout the user interface such as dividers, table borders, and component outlines.
- **Brand:** Use brand colors to incorporate a specific branded color that might otherwise fall outside the global palette or other Forge-defined color. Brand colors MAY NOT have guaranteed color contrast with other color concepts. Accessibility tests SHOULD be performed to ensure there is sufficient contrast where brand colors are applied. Brand colors MAY NOT have a different values defined for both light and dark themes.
- **Content:** Use content colors to style text, iconography, and other content-based elements. They may be used in both static and interactive contexts. Content colors meet 4.5:1 contrast against any container color.
- **Interactive:** Use interactive colors for general interactions such as focus and content highlighting.

#### Pairings

Color tokens are designed with specific pairings to ensure appropriate color contrast. These pairings are represented by a set of `on` colors. The `on` colors MUST only be used with their referenced “surface” token. For example, `color.content.on.primary.enabled` MUST only be used on `color.content.primary.enabled`. This ensures proper color contrast ratios and predictable theming results.

#### States

- `color.container.*`, `color.control.*`, and `color.content.*` aliases have a series of states that are defined. This allows these color concepts to be used in both static and interactive situations.
- State names MUST always be placed in the correct position of a token name as defined by the **Naming structure** section of this document.
- States SHOULD use the following names:
  - **Enabled:** The default state when no other interaction is in effect. `enabled` MAY be used as part of a name to help future-proof a token set even if it currently has no interactions.
  - **Focus:**
  - **Hover:**
  - **Active:**
  - **Disabled:**
  - **Selected:**
d