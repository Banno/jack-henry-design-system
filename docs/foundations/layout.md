---
title: Layout
description: The dimension scale that keeps spacing and sizing consistent across every Forge surface.
---

# Layout

Consistent spacing and sizing are what make an interface feel intentional rather than assembled piece by piece. Forge's layout foundation is built around a single dimension scale that every component pulls from, so heights, widths, margins, and padding all stay in proportion to one another.

## Dimensions

Global dimension tokens form a scale that ranges from `0` to `2400` in steps of 100, with two additional fine-grained grades — `25` and `50` — for smaller adjustments. The `100` grade is the base of the scale, set at `4px`, and every other grade holds the same proportional relationship to it. For example, grade `400` is four times the value of grade `100`, so it's four times larger as well.

There aren't any alias tokens for dimension yet — use the global `dimension.*` tokens directly to define length-based properties on elements, such as `height`, `width`, `margin`, and `padding`.

Dimension tokens MUST:

- Use the naming structure `dimension.*`.
- Use the DTCG type `dimension`.
- Use the unit `px`.
