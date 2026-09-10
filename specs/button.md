---
name: Button
componentName: jh-button
description: Buttons enable a user to initiate a specific action.
---

# Button

## Style

| Figma layer name | Property name   | Style hook             | Default value         |
| ---------------- | --------------- | ---------------------- | --------------------- |
| `button-wrapper` | `gap`           |                        | `dimension.200`       |
| `button-wrapper` | `border-radius` | `button.border.radius` | `border.radius.100`   |
| `button-wrapper` | `border-width`  |                        | `border.action.width` |
| `button-wrapper` | `border-style`  |                        | `border.action.style` |

## Variants

### Size

Sets the size of the button.

Aside from the extra small size, buttons SHOULD always be paired with comparably-sized form controls such as `jh-input` and `jh-select`.

#### Extra small

- Use when a button is nested within another component and the other button sizes are too big.
- NEVER use outside of another component.
- Use the `xsmall` icon.
- Use the `small` progress.

| Figma layer name | Property name | Style hook    | Default value   |
| ---------------- | ------------- | ------------- | --------------- |
| `button-wrapper` | `height`      | `button.size` | `dimension.600` |

#### Small

- Use where vertical space is limited.

| Figma layer name | Property name | Style hook    | Default value   |
| ---------------- | ------------- | ------------- | --------------- |
| `button-wrapper` | `height`      | `button.size` | `dimension.800` |

#### Medium

- Medium is the default size.
- Use as the standard button instance.

| Figma layer name | Property name | Style hook    | Default value    |
| ---------------- | ------------- | ------------- | ---------------- |
| `button-wrapper` | `height`      | `button.size` | `dimension.1000` |

#### Large

- Use when a button needs to have prominence.
- Limit usage to one per screen.

| Figma layer name | Property name | Style hook    | Default value    |
| ---------------- | ------------- | ------------- | ---------------- |
| `button-wrapper` | `height`      | `button.size` | `dimension.1200` |
