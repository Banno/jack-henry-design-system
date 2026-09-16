---
title: Badge
description: A badge is a visual indicator that represents numeric values such as counters.
---

# Badge

A badge gives people a quick, at-a-glance numeric signal — for example, a count of unread messages or pending items. A badge is always displayed by default; there's no logic built into the component that decides when it should show, so that decision belongs to the product using it.

## Anatomy

1. **Container** (`jh-badge`) – the outer shape that carries the badge's background color and border radius.
2. **Wrapper** (`badge-wrapper`) – sizes the badge to its content and enforces the minimum circular footprint.
3. **Value** (`badge-value`) – the text node that renders the count.

## Variants

### Count

Count sets the visible text of the badge and should be a number. The text expands inline to fit the available space, though the badge's width never shrinks below that of a perfect circle — typical for single-character counts.

Render the badge as a dot with no displayed value when either no count is present, or a count is set with no number provided. Use the dot variant in condensed layouts, or when displaying the exact tally isn't essential.

### Max count

Max count sets the highest value the badge will display, and should be a number. If it isn't set, the badge shows the full count as entered. A max count of `0` behaves like any other number, rendering "0" and a "+".

When the count goes above max count, the badge shows the max count with a "+" appended, with no space between the number and the "+". For the initial release, the "+" can't be swapped for other shorthand (like "k" for thousand or "m" for million) — that may come later. By default, max count is `99`.

## Accessibility

The following WCAG 2.2 success criterion is relevant:

- [1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

### What we provide

- A default background/text pairing built from one of Forge's `content` / `on-content` token pairs, which are designed together to meet at least 4.5:1 contrast.

### Author guidance

- How a badge's count is represented for accessibility still needs case-by-case consideration. Because the value is conveyed visually, pair it with an accessible text equivalent (for example, on the element the badge is attached to) so the count isn't lost to assistive technology.
- When a count is capped by max count (shown as `{max-count}+`), make sure any accessible text equivalent communicates that the value is a lower bound, not an exact count.

## Contradictions with system guidance

- **DESIGN.md rule (Color aliases → Concepts):** container colors are meant for "the main surfaces found throughout the user interface," while content colors are meant to "style text, iconography, and other content-based elements" that sit on a container color.
- **Spec statement:** the badge's default background (`badge.color.background.enabled`) resolves to `color.content.negative.enabled` — a content-concept color — rather than a container-concept color.
- This is documented as-is because the same pattern (a content-family color used as a component background) also appears in the Button spec's default appearance tokens, suggesting it's an established convention for small, high-emphasis surfaces rather than a one-off spec error. Worth confirming with the color-system owners whether content colors are intentionally allowed as component backgrounds in cases like this.

## API reference

See the [Badge docs on Storybook](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-badge--docs) for a full interactive reference.

Import the component:

```js
import '@jack-henry/jh-elements/components/badge/badge.js';
```

```html
<jh-badge count="3"></jh-badge>
```

### Attributes

| Attribute   | Description                                                                     | Type   | Default |
| ----------- | -------------------------------------------------------------------------------- | ------ | ------- |
| `count`     | Number to show within the badge. If no `count` is supplied, badge renders as a dot. | string | —       |
| `max-count` | Sets the max count to show. Appends `+` to the max count when the value is exceeded. | number | `99`    |

### Style hooks

| Custom property                       | Description                     | Default                                |
| ---------------------------------------- | ---------------------------------- | ------------------------------------------ |
| `--jh-badge-border-radius`               | The badge border radius.            | `--jh-border-radius-pill`                   |
| `--jh-badge-color-background-enabled`    | The badge background color.         | `--jh-color-content-negative-enabled`       |
| `--jh-badge-color-text-enabled`          | The badge text color.               | `--jh-color-content-on-negative-enabled`    |

## Feedback

Found an issue or have a suggestion? [Open a GitHub issue](https://github.com/Banno/jack-henry-design-system/issues) or join the conversation in [GitHub Discussions](https://github.com/Banno/jack-henry-design-system/discussions).
