---
name: Badge
componentName: jh-badge
description: A badge is a visual indicator that represents numeric values such as counters.
---

# Badge

## Style

- By default, the badge is always displayed; there’s no inherent logic within the badge component that controls when it displays.
- The user determines the logic and behaviors of when the badge displays.

| Figma layer name | Property name      | Style hook                       | Default value                    |
| ---------------- | ------------------ | -------------------------------- | -------------------------------- |
| `jh-badge`       | `border-radius`    | `badge.border.radius`            | `border.radius.pill`             |
| `jh-badge`       | `background-color` | `badge.color.background.enabled` | `color.content.negative.enabled` |
| `badge-wrapper`  | `height`           |                                  | `dimension.200`                  |
| `badge-wrapper`  | `min-width`        |                                  | `dimension.200`                  |

## Variants

### Count

Count sets the visible text of the badge.

- The property accepts a numeric value.
- Text expands inline to fit the available space.
- The badge's width can never shrink below that of a perfect circle. This behavior is typical for single-character counts.

| Figma layer name | Property name    | Style hook                 | Default value                       |
| ---------------- | ---------------- | -------------------------- | ----------------------------------- |
| `jh-badge`       | `padding-top`    |                            | `dimension.0`                       |
| `jh-badge`       | `padding-right`  |                            | `dimension.100`                     |
| `jh-badge`       | `padding-bottom` |                            | `dimension.0`                       |
| `jh-badge`       | `padding-left`   |                            | `dimension.100`                     |
| `badge-wrapper`  | `height`         |                            | `dimension.400`                     |
| `badge-value`    | `color`          | `badge.color.text.enabled` | `color.content.on.negative.enabled` |
| `badge-value`    | `font-family`    |                            | `font.helper.bold.font-family`      |
| `badge-value`    | `font-weight`    |                            | `font.helper.bold.font-weight`      |
| `badge-value`    | `font-size`      |                            | `font.helper.bold.font-size`        |
| `badge-value`    | `line-height`    |                            | `font.helper.bold.line-height`      |

- Render the badge as a “dot” with no displayed value under either of the following conditions:
  - If no count property is present
  - If the count property is set, but no number provided
- Use the non-count variant:
  - In condensed layouts
  - When having the explicit tally displayed is not essential

### Max count

The maximum count that is allowed to display within the badge.

- If the max-count property is not set, the badge displays the full count as entered.
- A max-count of 0 behaves just like any other number, rendering “0” and a “+”.
- When the badge’s count goes above the max-count, the max-count is displayed appended with a “+” character. There is no space between the count and the “+” character.
- The “+” character is a dynamically inserted character.
- For the initial release, the “+” can not be customized to other shorthand representations such as “k” for thousand or “m” for million. This functionality may be added in a later release.
- We may need to consider how the count is represented for accessibility.
- By default, the max-count is set at 99.
