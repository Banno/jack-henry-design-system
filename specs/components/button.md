---
name:
  common: Button
  slug: button
  web: jh-button
  figma: jh-button
description: Buttons enable a user to initiate a specific action.
category: Action
status: Active
version:
  added: 1.0.0
---

# Button

## Style

| Figma layer name | Property name   | Style hook             | Default value           |
| ---------------- | --------------- | ---------------------- | ----------------------- |
| `button-wrapper` | `gap`           |                        | `{dimension.200}`       |
| `button-wrapper` | `border-radius` | `button.border.radius` | `{border.radius.100}`   |
| `button-wrapper` | `border-width`  |                        | `{border.action.width}` |
| `button-wrapper` | `border-style`  |                        | `{border.action.style}` |

## Variants

### Size

```yml
name: size
description: Sets the size of the button.
type: [x-small, small, medium, large]
default: medium
```

- Buttons SHOULD always be paired with comparably-sized form controls such as `jh-input` and `jh-select`.
- The exception is the extra small size.

#### Extra small

- Use when a button is nested within another component and the other button sizes are too big such as `jh-input`.
- Never use outside of another component.
- Use the `xsmall` icon.
- Use the `small` progress.

| Figma layer name | Property name | Style hook    | Default value     |
| ---------------- | ------------- | ------------- | ----------------- |
| `button-wrapper` | `height`      | `button.size` | `{dimension.600}` |

#### Small

- Use where vertical space is limited.

| Figma layer name | Property name | Style hook    | Default value     |
| ---------------- | ------------- | ------------- | ----------------- |
| `button-wrapper` | `height`      | `button.size` | `{dimension.800}` |

#### Medium

- Medium is the default size.
- Use as the standard button instance.

| Figma layer name | Property name | Style hook    | Default value      |
| ---------------- | ------------- | ------------- | ------------------ |
| `button-wrapper` | `height`      | `button.size` | `{dimension.1000}` |

#### Large

- Use when a button needs to have prominence.
- Limit usage to one per screen.

| Figma layer name | Property name | Style hook    | Default value      |
| ---------------- | ------------- | ------------- | ------------------ |
| `button-wrapper` | `height`      | `button.size` | `{dimension.1200}` |

### Block

```yml
name: block
description: Sets the button width to its parent container.
type: boolean
default: false
```

#### True

- A block button expands to fit the width of its surrounding container.
- Buttons can be set as a block variant at any size.
- Use when vertically stacking multiple calls to action in a container such as a card or dialog.
- The block property is independent of the other properties and can be applied in conjunction with any of them.
- The icon and label SHOULD be grouped together and MUST be horizontally centered as the button width expands.
- The height and padding MUST follow that of whichever size is applied to the block button.
- The content area is variable in width based on the overall width of the button.
- The button MUST never shrink below the total width of the left and right padding along with the button’s content area.

#### False

- A button’s width is dependent on the label and/or icons contained within it.

### Appearance

```yml
name: appearance
description: Determines the button color.
type: [primary, secondary, tertiary, danger]
default: secondary
```

#### Primary

- Primary buttons call attention to the strongest call to action within a particular context or view.
- These SHOULD appear only once per container.

Enabled state

| Figma layer name | Property name      | Style hook                                | Default value                      |
| ---------------- | ------------------ | ----------------------------------------- | ---------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.primary.enabled` | `{color.content.brand.enabled}`    |
| `button-wrapper` | `border-color`     | `button.color.border.primary.enabled`     | `#00000000`                        |
| `button-icon`    | `fill`             | `button.icon.color.fill.primary.enabled`  | `{color.content.on.brand.enabled}` |
| `button-label`   | `color`            | `button.label.color.text.primary.enabled` | `{color.content.on.brand.enabled}` |

Focus state

| Figma layer name | Property name      | Style hook                              | Default value                    |
| ---------------- | ------------------ | --------------------------------------- | -------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.primary.focus` | `{color.content.brand.hover}`    |
| `button-wrapper` | `border-color`     | `button.color.border.primary.focus`     | `#00000000`                      |
| `button-icon`    | `fill`             | `button.icon.color.fill.primary.focus`  | `{color.content.on.brand.hover}` |
| `button-label`   | `color`            | `button.label.color.text.primary.focus` | `{color.content.on.brand.hover}` |

Hover state

| Figma layer name | Property name      | Style hook                              | Default value                    |
| ---------------- | ------------------ | --------------------------------------- | -------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.primary.hover` | `{color.content.brand.hover}`    |
| `button-wrapper` | `border-color`     | `button.color.border.primary.hover`     | `#00000000`                      |
| `button-icon`    | `fill`             | `button.icon.color.fill.primary.hover`  | `{color.content.on.brand.hover}` |
| `button-label`   | `color`            | `button.label.color.text.primary.hover` | `{color.content.on.brand.hover}` |

Active state

| Figma layer name | Property name      | Style hook                               | Default value                     |
| ---------------- | ------------------ | ---------------------------------------- | --------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.primary.active` | `{color.content.brand.active}`    |
| `button-wrapper` | `border-color`     | `button.color.border.primary.active`     | `#00000000`                       |
| `button-icon`    | `fill`             | `button.icon.color.fill.primary.active`  | `{color.content.on.brand.active}` |
| `button-label`   | `color`            | `button.label.color.text.primary.active` | `{color.content.on.brand.active}` |

Disabled

- Disabled SHOULD be a discrete option in code, but is combined with the other states in Figma.

| Figma layer name | Property name      | Style hook                                 | Default value                      |
| ---------------- | ------------------ | ------------------------------------------ | ---------------------------------- |
| `jh-button`      | `opacity`          | `button.opacity.disabled`                  | `{opacity.disabled}`               |
| `button-wrapper` | `background-color` | `button.color.background.primary.disabled` | `{color.content.brand.enabled}`    |
| `button-wrapper` | `border-color`     | `button.color.border.primary.disabled`     | `#00000000`                        |
| `button-icon`    | `fill`             | `button.icon.color.fill.primary.disabled`  | `{color.content.on.brand.enabled}` |
| `button-label`   | `color`            | `button.label.color.text.primary.disabled` | `{color.content.on.brand.enabled}` |

Pending

- Pending SHOULD be a discrete option in code, but is combined with the other states in Figma.

| Figma layer name                     | Property name              | Style hook                                           | Default value                      |
| ------------------------------------ | -------------------------- | ---------------------------------------------------- | ---------------------------------- |
| `button-wrapper`                     | `background-color`         | `button.color.background.primary.pending`            | `{color.content.brand.enabled}`    |
| `button-wrapper`                     | `border-color`             | `button.color.border.primary.pending`                | `#00000000`                        |
| `button-progress/progress-indicator` | `progress.indicator.color` | `button.progress.color.border.primary.pending`       | `{color.content.on.brand.enabled}` |
| `button-progress/progress-track`     | `progress.track.color`     | `button.progress.track.color.border.primary.pending` | `{progress.track.color}`           |

#### Secondary

- Use for most non-critical actions.
- Use secondary buttons alongside a primary button to indicate a secondary action such as “Cancel.”

Enabled state

| Figma layer name | Property name      | Style hook                                  | Default value                   |
| ---------------- | ------------------ | ------------------------------------------- | ------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.secondary.enabled` | `#00000000`                     |
| `button-wrapper` | `border-color`     | `button.color.border.secondary.enabled`     | `{border.action.color}`         |
| `button-icon`    | `fill`             | `button.icon.color.fill.secondary.enabled`  | `{color.content.brand.enabled}` |
| `button-label`   | `color`            | `button.label.color.text.secondary.enabled` | `{color.content.brand.enabled}` |

Focus state

| Figma layer name | Property name      | Style hook                                | Default value                    |
| ---------------- | ------------------ | ----------------------------------------- | -------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.secondary.focus` | `{color.content.brand.hover}`    |
| `button-wrapper` | `border-color`     | `button.color.border.secondary.focus`     | `{color.content.brand.hover}`    |
| `button-icon`    | `fill`             | `button.icon.color.fill.secondary.focus`  | `{color.content.on.brand.hover}` |
| `button-label`   | `color`            | `button.label.color.text.secondary.focus` | `{color.content.on.brand.hover}` |

Hover state

| Figma layer name | Property name      | Style hook                                | Default value                    |
| ---------------- | ------------------ | ----------------------------------------- | -------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.secondary.hover` | `{color.content.brand.hover}`    |
| `button-wrapper` | `border-color`     | `button.color.border.secondary.hover`     | `{color.content.brand.hover}`    |
| `button-icon`    | `fill`             | `button.icon.color.fill.secondary.hover`  | `{color.content.on.brand.hover}` |
| `button-label`   | `color`            | `button.label.color.text.secondary.hover` | `{color.content.on.brand.hover}` |

Active state

| Figma layer name | Property name      | Style hook                                 | Default value                     |
| ---------------- | ------------------ | ------------------------------------------ | --------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.secondary.active` | `{color.content.brand.active}`    |
| `button-wrapper` | `border-color`     | `button.color.border.secondary.active`     | `{color.content.brand.active}`    |
| `button-icon`    | `fill`             | `button.icon.color.fill.secondary.active`  | `{color.content.on.brand.active}` |
| `button-label`   | `color`            | `button.label.color.text.secondary.active` | `{color.content.on.brand.active}` |

Disabled

- Disabled SHOULD be a discrete option in code, but is combined with the other states in Figma.

| Figma layer name | Property name      | Style hook                                   | Default value                   |
| ---------------- | ------------------ | -------------------------------------------- | ------------------------------- |
| `jh-button`      | `opacity`          | `button.opacity.disabled`                    | `{opacity.disabled}`            |
| `button-wrapper` | `background-color` | `button.color.background.secondary.disabled` | `{color.content.brand.enabled}` |
| `button-wrapper` | `border-color`     | `button.color.border.secondary.disabled`     | `{border.action.color}`         |
| `button-icon`    | `fill`             | `button.icon.color.fill.secondary.disabled`  | `{color.content.brand.enabled}` |
| `button-label`   | `color`            | `button.label.color.text.secondary.disabled` | `{color.content.brand.enabled}` |

Pending

- Pending SHOULD be a discrete option in code, but is combined with the other states in Figma.

| Figma layer name                     | Property name              | Style hook                                             | Default value                   |
| ------------------------------------ | -------------------------- | ------------------------------------------------------ | ------------------------------- |
| `button-wrapper`                     | `background-color`         | `button.color.background.secondary.pending`            | `#00000000`                     |
| `button-wrapper`                     | `border-color`             | `button.color.border.secondary.pending`                | `{border.action.color}`         |
| `button-progress/progress-indicator` | `progress.indicator.color` | `button.progress.color.border.secondary.pending`       | `{color.content.brand.enabled}` |
| `button-progress/progress-track`     | `progress.track.color`     | `button.progress.track.color.border.secondary.pending` | `{progress.track.color}`        |

#### Tertiary

- Use tertiary buttons for less prominent or independent actions.
- Pair with a primary button when there are multiple calls to action.

Enabled state

| Figma layer name | Property name      | Style hook                                 | Default value                   |
| ---------------- | ------------------ | ------------------------------------------ | ------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.tertiary.enabled` | `#00000000`                     |
| `button-wrapper` | `border-color`     | `button.color.border.tertiary.enabled`     | `#00000000`                     |
| `button-icon`    | `fill`             | `button.icon.color.fill.tertiary.enabled`  | `{color.content.brand.enabled}` |
| `button-label`   | `color`            | `button.label.color.text.tertiary.enabled` | `{color.content.brand.enabled}` |

Focus state

| Figma layer name | Property name      | Style hook                               | Default value                    |
| ---------------- | ------------------ | ---------------------------------------- | -------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.tertiary.focus` | `{color.content.brand.hover}`    |
| `button-wrapper` | `border-color`     | `button.color.border.tertiary.focus`     | `#00000000`                      |
| `button-icon`    | `fill`             | `button.icon.color.fill.tertiary.focus`  | `{color.content.on.brand.hover}` |
| `button-label`   | `color`            | `button.label.color.text.tertiary.focus` | `{color.content.on.brand.hover}` |

Hover state

| Figma layer name | Property name      | Style hook                               | Default value                    |
| ---------------- | ------------------ | ---------------------------------------- | -------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.tertiary.hover` | `{color.content.brand.hover}`    |
| `button-wrapper` | `border-color`     | `button.color.border.tertiary.hover`     | `#00000000`                      |
| `button-icon`    | `fill`             | `button.icon.color.fill.tertiary.hover`  | `{color.content.on.brand.hover}` |
| `button-label`   | `color`            | `button.label.color.text.tertiary.hover` | `{color.content.on.brand.hover}` |

Active state

| Figma layer name | Property name      | Style hook                                | Default value                     |
| ---------------- | ------------------ | ----------------------------------------- | --------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.tertiary.active` | `{color.content.brand.active}`    |
| `button-wrapper` | `border-color`     | `button.color.border.tertiary.active`     | `#00000000`                       |
| `button-icon`    | `fill`             | `button.icon.color.fill.tertiary.active`  | `{color.content.on.brand.active}` |
| `button-label`   | `color`            | `button.label.color.text.tertiary.active` | `{color.content.on.brand.active}` |

Disabled

- Disabled SHOULD be a discrete option in code, but is combined with the other states in Figma.

| Figma layer name | Property name      | Style hook                                  | Default value                   |
| ---------------- | ------------------ | ------------------------------------------- | ------------------------------- |
| `jh-button`      | `opacity`          | `button.opacity.disabled`                   | `{opacity.disabled}`            |
| `button-wrapper` | `background-color` | `button.color.background.tertiary.disabled` | `#00000000`                     |
| `button-wrapper` | `border-color`     | `button.color.border.tertiary.disabled`     | `#00000000`                     |
| `button-icon`    | `fill`             | `button.icon.color.fill.tertiary.disabled`  | `{color.content.brand.enabled}` |
| `button-label`   | `color`            | `button.label.color.text.tertiary.disabled` | `{color.content.brand.enabled}` |

Pending

- Pending SHOULD be a discrete option in code, but is combined with the other states in Figma.

| Figma layer name                     | Property name              | Style hook                                            | Default value                   |
| ------------------------------------ | -------------------------- | ----------------------------------------------------- | ------------------------------- |
| `button-wrapper`                     | `background-color`         | `button.color.background.tertiary.pending`            | `#00000000`                     |
| `button-wrapper`                     | `border-color`             | `button.color.border.tertiary.pending`                | `#00000000`                     |
| `button-progress/progress-indicator` | `progress.indicator.color` | `button.progress.color.border.tertiary.pending`       | `{color.content.brand.enabled}` |
| `button-progress/progress-track`     | `progress.track.color`     | `button.progress.track.color.border.tertiary.pending` | `{progress.track.color}`        |

#### Danger

- Use to convey destructive actions such as “Delete” or “Remove.”
- Do not use danger buttons for any type of action other than a destructive one to avoid confusion.

Enabled state

| Figma layer name | Property name      | Style hook                               | Default value                         |
| ---------------- | ------------------ | ---------------------------------------- | ------------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.danger.enabled` | `{color.content.negative.enabled}`    |
| `button-wrapper` | `border-color`     | `button.color.border.danger.enabled`     | `#00000000`                           |
| `button-icon`    | `fill`             | `button.icon.color.fill.danger.enabled`  | `{color.content.on.negative.enabled}` |
| `button-label`   | `color`            | `button.label.color.text.danger.enabled` | `{color.content.on.negative.enabled}` |

Focus state

| Figma layer name | Property name      | Style hook                             | Default value                       |
| ---------------- | ------------------ | -------------------------------------- | ----------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.danger.focus` | `{color.content.negative.hover}`    |
| `button-wrapper` | `border-color`     | `button.color.border.danger.focus`     | `#00000000`                         |
| `button-icon`    | `fill`             | `button.icon.color.fill.danger.focus`  | `{color.content.on.negative.hover}` |
| `button-label`   | `color`            | `button.label.color.text.danger.focus` | `{color.content.on.negative.hover}` |

Hover state

| Figma layer name | Property name      | Style hook                             | Default value                       |
| ---------------- | ------------------ | -------------------------------------- | ----------------------------------- |
| `button-wrapper` | `background-color` | `button.color.background.danger.hover` | `{color.content.negative.hover}`    |
| `button-wrapper` | `border-color`     | `button.color.border.danger.hover`     | `#00000000`                         |
| `button-icon`    | `fill`             | `button.icon.color.fill.danger.hover`  | `{color.content.on.negative.hover}` |
| `button-label`   | `color`            | `button.label.color.text.danger.hover` | `{color.content.on.negative.hover}` |

Active state

| Figma layer name | Property name      | Style hook                              | Default value                        |
| ---------------- | ------------------ | --------------------------------------- | ------------------------------------ |
| `button-wrapper` | `background-color` | `button.color.background.danger.active` | `{color.content.negative.active}`    |
| `button-wrapper` | `border-color`     | `button.color.border.danger.active`     | `#00000000`                          |
| `button-icon`    | `fill`             | `button.icon.color.fill.danger.active`  | `{color.content.on.negative.active}` |
| `button-label`   | `color`            | `button.label.color.text.danger.active` | `{color.content.on.negative.active}` |

Disabled

- Disabled SHOULD be a discrete option in code, but is combined with the other states in Figma.

| Figma layer name | Property name      | Style hook                                | Default value                         |
| ---------------- | ------------------ | ----------------------------------------- | ------------------------------------- |
| `jh-button`      | `opacity`          | `button.opacity.disabled`                 | `{opacity.disabled}`                  |
| `button-wrapper` | `background-color` | `button.color.background.danger.disabled` | `{color.content.negative.enabled}`    |
| `button-wrapper` | `border-color`     | `button.color.border.danger.disabled`     | `#00000000`                           |
| `button-icon`    | `fill`             | `button.icon.color.fill.danger.disabled`  | `{color.content.on.negative.enabled}` |
| `button-label`   | `color`            | `button.label.color.text.danger.disabled` | `{color.content.on.negative.enabled}` |

Pending

- Pending SHOULD be a discrete option in code, but is combined with the other states in Figma.

| Figma layer name                     | Property name              | Style hook                                          | Default value                         |
| ------------------------------------ | -------------------------- | --------------------------------------------------- | ------------------------------------- |
| `button-wrapper`                     | `background-color`         | `button.color.background.danger.pending`            | `{color.content.negative.enabled}`    |
| `button-wrapper`                     | `border-color`             | `button.color.border.danger.pending`                | `#00000000`                           |
| `button-progress/progress-indicator` | `progress.indicator.color` | `button.progress.color.border.danger.pending`       | `{color.content.on.negative.enabled}` |
| `button-progress/progress-track`     | `progress.track.color`     | `button.progress.track.color.border.danger.pending` | `{progress.track.color}`              |

### Label

```yml
name: label
description: Text that conveys the button's actions.
type: string
```

- The property SHOULD be a `string`.
- The label conveys the button’s action.
- Keep button labels concise and action-driven.
- Users SHOULD start the label with an imperative verb to provide a clear sense of what to do. For example, use “Submit” instead of “Submitting”.

| Figma layer name | Property name | Style hook | Default value                     |
| ---------------- | ------------- | ---------- | --------------------------------- |
| `button-label`   | `font-family` |            | `{font.body.medium.1.fontFamily}` |
| `button-label`   | `font-weight` |            | `{font.body.medium.1.fontWeight}` |
| `button-label`   | `font-size`   |            | `{font.body.medium.1.fontSize}`   |
| `button-label`   | `line-height` |            | `{font.body.medium.1.lineHeight}` |

### Icon only

```yml
name: iconOnly
description: Sets the button to display only one icon.
type: boolean
```

#### True

- The left and right padding MUST be set to match the top and bottom padding of that particular size when a button only displays an icon so that the button is a perfect square.
- Display the left icon slot.
- Hide the right icon slot.

| Figma layer name | Property name   | Style hook | Default value |
| ---------------- | --------------- | ---------- | ------------- |
| `button-wrapper` | `padding-right` |            | `0`           |
| `button-wrapper` | `padding-left`  |            | `0`           |

Extra small size

| Figma layer name | Property name | Style hook    | Default value     |
| ---------------- | ------------- | ------------- | ----------------- |
| `button-wrapper` | `width`       | `button.size` | `{dimension.600}` |

Small size

| Figma layer name | Property name | Style hook    | Default value     |
| ---------------- | ------------- | ------------- | ----------------- |
| `button-wrapper` | `width`       | `button.size` | `{dimension.800}` |

Medium size

| Figma layer name | Property name | Style hook    | Default value      |
| ---------------- | ------------- | ------------- | ------------------ |
| `button-wrapper` | `width`       | `button.size` | `{dimension.1000}` |

Large size

| Figma layer name | Property name | Style hook    | Default value      |
| ---------------- | ------------- | ------------- | ------------------ |
| `button-wrapper` | `width`       | `button.size` | `{dimension.1200}` |

#### False

- When a label is not present and iconOnly is false, the button hugs to the slotted icons and maintains its standard padding.
- Users SHOULD NOT remove the label to make an icon-only button. This creates a non-square button.
- Users MAY remove the label and have icons in both the left and right slots. This creates a “dual icon” button.
- Users SHOULD NOT use dual-icon buttons unless absolutely necessary such as when space is at an absolute premium.

| Figma layer name | Property name   | Style hook | Default value     |
| ---------------- | --------------- | ---------- | ----------------- |
| `button-wrapper` | `padding-right` |            | `{dimension.400}` |
| `button-wrapper` | `padding-left`  |            | `{dimension.400}` |

### Link

Buttons act as a link if a hyperlink is set via the `href` property.

- Assistive technologies recognize the button as a link and announce it as such when the `href` property is set.
- Set the `target` property to specify where to display the linked URL.
- Use the 'Enter' key to activate a link button via a keyboard.

### State

#### Enabled

#### Focus

| Figma layer name       | Property name    | Style hook           | Default value          |
| ---------------------- | ---------------- | -------------------- | ---------------------- |
| `button-focus/outline` | `outline-color`  | `button.color.focus` | `{border.focus.color}` |
| `button-focus/outline` | `outline-style`  |                      | `{border.focus.style}` |
| `button-focus/outline` | `outline-width`  |                      | `{border.focus.width}` |
| `button-focus/outline` | `outline-offset` |                      | `1px`                  |

### Pending

#### True

Set a pending state to indicate a process is underway.

- The property in code SHOULD be a `boolean`. It is part of the state options in Figma.
- The pending state replaces the label and icon with a progress indicator to show that a process such as saving is taking place.
- The button width of the pending state SHOULD remain the same as the width of the button before the pending process was triggered.
- The progress indicator MUST be horizontally centered within the button container.
- A button cannot be navigated to nor activated by a mouse or keyboard when in a pending state.
- Set `aria-busy="true"` to the region if `pending` reflects the changing of a live-region and the announcement of those changes should wait until completed.
- Set `aria-busy="false"` once the process is complete.

## Slots

### Left

```yml
name: left
layer: button-icon-left
description: Use to place an icon on the left side of the button.
```

- Use left icons to emphasis a button’s meaning.
- Place only icons in this slot.

### Right

```yml
name: right
layer: button-icon-right
description: Used to place an icon on the right side of the button.
```

- Use right icons to imply a progression or directionality.
- Place only icons in this slot.

## Code

### Usage

Import the `jh-button` component.

```js
import "@jack-henry/jh-elements/components/button/button.js";
```

Set the properties and slot icon(s) within the corresponding slot.

```js
<jh-button label="Label">
  <jh-icon-ellipsis slot="jh-button-icon-left"></jh-icon-ellipsis>
</jh-button>
```

## Dependencies

- `jh-progress`
- `jh-icon`

## Accessibility

The following WCAG success criteria are of concern:

- **1.3.1:**
  - The `type="button"` property is set by default to prevent browser from attempting to submit form information when activated.
- **1.4.4:**
  - Button can be resized without assistive technology up to 200 percent without loss of content or functionality.
- **2.4.7:**
  - Focus visible styles are provided to help users determine which element has keyboard focus.
- **2.5.8:**
  - The target size for pointer inputs is at least 24 by 24 pixels for users to easily activate them.
- **4.1.2:**

### Author guidance

- Use the `accessible-label` attribute to set an `aria-label` where a visible label cannot be used.
- Set a minimum target size of 24 by 24 pixels when custom size tokens are used.
- The button cannot be reached via keyboard navigation and cannot be interacted with via mouse when the `disabled` property is used.
- The button may be undiscoverable to users using screen readers. Set `accessible-disabled="true"`—which sets an `aria-disabled="true"` attribute on the button—when a `disabled` button should remain discoverable by assistive technology. This allows the button to remain perceivable to screen reader users while also inoperable.
