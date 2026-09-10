---
title: Colors
description: The global color palette, alpha tokens, and alias system that keep color usage consistent and accessible across Forge products.
---

# Colors

Color is one of the fastest ways to build trust or break it, so we've built ours to do the heavy lifting for you. Every color in Forge is designed to hit predictable, accessible contrast targets from the start — follow the guidance below, and you shouldn't need to reach for a contrast checker after the fact.

## Global color palette

Our global palette is made up of eleven color families, each with nineteen graduated steps from light to dark. Every family starts from a single source color, defined by both a hex value and an LCH value (a color space built around lightness, chroma, and hue), and sits within its own range on the color wheel.

| Color family | Hue range | Hex value | LCH value |
| --- | --- | --- | --- |
| Red | 355–24 | `#E52108` | `49.2, 92.3, 40.7` |
| Orange | 25–54 | `#E59008` | `66.9, 75.1, 71.2` |
| Yellow | 55–84 | `#CCE508` | `86.4, 89.4, 109.6` |
| Lime | 85–114 | `#D5FF00` | `94.0, 98.6, 112.8` |
| Green | 115–144 | `#08E522` | `79.7, 106.5, 137.2` |
| Mint | 145–174 | `#08E590` | `80.7, 71.3, 156.1` |
| Cyan | 175–204 | `#76DCFD` | `82.9, 32.7, 230.3` |
| Blue | 205–234 | `#085CE5` | `43.3, 81.4, 293` |
| Violet | 265–294 | `#9008E5` | `40.8, 111.1, 314.9` |
| Magenta | 295–324 | `#E508CC` | `53.1, 97, 333.2` |
| Gray | — | — | — |

Each family is scaled from 50 to 950 in steps of 50. Every grade targets a specific lightness and luminance, which is what lets you predict, ahead of time, how much contrast one grade will have against another.

| Grade | Lightness | Contrast ratio (white) | Luminance |
| --- | --- | --- | --- |
| 50 | 96.2 | 1.1 | 90.5 |
| 100 | 93.1 | 1.2 | 83.1 |
| 150 | 86.0 | 1.4 | 68 |
| 200 | 82.5 | 1.6 | 61 |
| 250 | 75.6 | 1.9 | 49.1 |
| 300 | 71.4 | 2.2 | 42.9 |
| 350 | 66.6 | 2.6 | 36.1 |
| 400 | 62.9 | 2.9 | 31.4 |
| 450 | 57.6 | 3.4 | 25.4 |
| 500 | 48.9 | 4.7 | 17.5 |
| 550 | 44.9 | 5.4 | 14.4 |
| 600 | 42.0 | 6 | 12.5 |
| 650 | 38.0 | 7 | 10.0 |
| 700 | 34.3 | 8 | 8.2 |
| 750 | 30.3 | 9.2 | 6.3 |
| 800 | 26.0 | 10.8 | 4.8 |
| 850 | 21.5 | 12.5 | 3.4 |
| 900 | 17.9 | 14 | 2.5 |
| 950 | 12.1 | 16.4 | 1.4 |

### Pairing grades for guaranteed contrast

Because every grade targets a known lightness, you can guarantee contrast between two colors just by looking at the gap between their grade numbers:

- **4.5:1 contrast:** pick two grades that are 500 or more apart.
- **3:1 contrast:** pick two grades that are 400 or more apart.

For example, pairing `color.gray.200` with `color.blue.700` — a difference of 500 — guarantees at least 4.5:1 contrast. Pairing `color.gray.200` with `color.gray.500` only gets you a difference of 300, which falls short of both WCAG targets, so that pairing isn't one to use.

As a rule of thumb, favor the 100-level grades (100, 200, 300, and so on) for most of the interface. Save the 50-level grades (50, 150, 250, and so on) for moments where you need a visible change in color while still preserving contrast with whatever sits alongside it, like a state change.

Colors in the global palette are intentionally context-agnostic, which means they shouldn't be used directly in a design. Instead, use them to define an alias token — and only create a new alias when there truly isn't an existing one that fits.

### Adding new color families

The eleven families above cover most needs, but if you ever need to introduce a new one, it must:

- Be a complete 19-grade scale that follows the same luminance targets as the existing families.
- Be generated in the LCH color space.
- Stay within the sRGB color gamut.
- Include a grade 500 that hits 4.5:1 contrast against both pure white (grade 0) and pure black (grade 1000).

New scales should also be perceptually distinguishable from the families that already exist — the goal is a palette where every color reads as genuinely different, not a dozen shades of the same hue.

## Global alpha tokens

Alongside the color families, we provide a set of white and black alpha tokens, graded by opacity from 10 (nearly transparent) to 100 (completely opaque). Reach for the 100 grades whenever you need pure white or pure black, and the other grades for anything that calls for partial transparency, like overlays or shadows.

Outside of the fully opaque white and black, alpha tokens don't contrast predictably with the rest of the palette — so any time you pair an alpha token with another color, test it rather than assume it'll meet contrast requirements.

That said, there's one reliable shortcut: when pairing with a non-alpha color, you can treat pure white (`color.white.alpha.100`) as the `0` grade of any hue's ramp, and pure black (`color.black.alpha.100`) as the `1000` grade. Combine that with the minimum grade-difference guidance above, and you can figure out safe pairings the same way you would for any two colors. For example, text in `color.white.alpha.100` (pure white) can sit on a background of grade 500 or higher and still meet 4.5:1 contrast.

## Color aliases

Aliases are how the global palette actually gets used — they carry meaning, so you always know what a color is for and how it's meant to be paired.

### Concepts

Every color alias falls into one of seven semantic concepts. Sticking to these keeps color usage consistent and predictable across the whole system.

- **Container** — the main surfaces you'll find throughout the interface. In general, all content should sit on a container color.
- **Overlay** — for elements that need to sit above the rest of the interface, like modals and dialogs.
- **Control** — for the containers of interactive controls, like slider and switch tracks.
- **Divider** — for bordered elements such as dividers, table borders, and component outlines.
- **Brand** — for elements that reflect a customer's own identity. Brand colors don't carry the same interactive behavior that content colors do, so use them accordingly, and expect them to generally track a customer's predominant color palette.
- **Content** — for text, iconography, and other content-based elements, in both static and interactive contexts. Content colors are built to meet 4.5:1 contrast against any container color.
- **Interactive** — for general interaction moments, like focus states and content highlighting.

### Pairings

Every color token is designed with specific, intentional pairings in mind, represented by a set of "on" colors. An "on" color should only be used with the surface token it references — for example, `color.content.on.primary.enabled` is meant to be paired with `color.content.primary.enabled`, and nothing else. Sticking to these pairings is what guarantees proper contrast and predictable results across themes.

### States

Container, control, and content aliases each carry a defined set of states, so the same color concepts work whether something is static or interactive:

- Enabled
- Focus
- Hover
- Active
- Disabled
- Selected

By default, these states step in increments of 50. That's enough of a visual shift for someone to notice the state has changed, while still preserving the contrast relationship with the corresponding "on" colors.
