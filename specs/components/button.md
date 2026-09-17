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
dependencies:
  - jh-progress
  - jh-icon
---

## Anatomy

- jh-button: The parent container
  - button-wrapper: Main styling container
    - button-icon-left: Instance of jh-icon; represents left slot
    - button-label: Button text
    - button-icon-right: Instance of jh-icon; represents right slot
    - button-progress: Instance of jh-progress

## Default

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

- SHOULD be paired with comparably-sized form controls such as `jh-input` and `jh-select`.

#### Extra small

- MUST use `xsmall` for nested icons.
- MUST use `small` for nested progress.
- SHOULD use when a button is nested within another component and the other button sizes are too big such as `jh-input`.
- MUST NOT use outside of another component.

| Figma layer name | Property name | Style hook    | Default value     |
| ---------------- | ------------- | ------------- | ----------------- |
| `button-wrapper` | `height`      | `button.size` | `{dimension.600}` |

#### Small

- SHOULD use where vertical space is limited.

| Figma layer name | Property name | Style hook    | Default value     |
| ---------------- | ------------- | ------------- | ----------------- |
| `button-wrapper` | `height`      | `button.size` | `{dimension.800}` |

#### Medium

- SHOULD use as the standard button instance.

| Figma layer name | Property name | Style hook    | Default value      |
| ---------------- | ------------- | ------------- | ------------------ |
| `button-wrapper` | `height`      | `button.size` | `{dimension.1000}` |

#### Large

- SHOULD use when a button needs to have prominence.
- SHOULD limit to one per screen.

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

- Expands to fit the width of its surrounding container.
- The content area is variable in width based on the overall width of the button.
- The icon and label are grouped together.
- MUST horizontally center the icon and label group as the button width expands.
- MUST set height and padding to match `size`.
- MAY apply in conjunction with other properties, including `size`.
- MAY use to vertically stack multiple calls-to-action in a container (ex. action buttons in a card or dialog).
- MUST NOT shrink below the total width of the left and right padding along with the button’s content area.

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
- SHOULD limit to one per context (ex. card, section).

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

#### Secondary

- SHOULD use for most non-critical actions.
- MAY use alongside a primary button to indicate a secondary action (ex. “Cancel” next to "Submit")

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

#### Tertiary

- SHOULD use for less prominent or independent actions.
- MAY pair with a primary button when there are multiple calls to action.

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

#### Danger

- SHOULD use to convey destructive actions such as “Delete” or “Remove.”
- MUST NOT use for any type of action other than a destructive one.

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

### Label

```yml
name: label
description: Text that conveys the button's actions.
type: string
```

- SHOULD be concise (ex. "Cancel" instead of "Cancel the action").
- SHOULD start with an imperative verb to provide a clear sense of what to do (ex. “Submit” instead of “Submitting”).

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

- MUST set left and right padding to match top and bottom padding of a given size so the button is a perfect square.
- SHOULD display the left icon slot.
- SHOULD hide the right icon slot.

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
- MAY remove the label and have icons in both the left and right slots. This creates a “dual icon” button.
- SHOULD NOT remove the label to make an icon-only button. This creates a non-square button.
- SHOULD NOT use dual-icon buttons unless absolutely necessary (ex. when space is at an absolute premium).

| Figma layer name | Property name   | Style hook | Default value     |
| ---------------- | --------------- | ---------- | ----------------- |
| `button-wrapper` | `padding-right` |            | `{dimension.400}` |
| `button-wrapper` | `padding-left`  |            | `{dimension.400}` |

### Link

- Buttons act as a link if a hyperlink is set via the `href` property.
- Assistive technologies recognize the button as a link and announce it as such when the `href` property is set.
- SHOULD use the 'Enter' key to activate a link button via a keyboard.
- MAY set `target` to specify where to display the linked URL.

### State

#### Enabled

#### Focus

| Figma layer name       | Property name    | Style hook           | Default value          |
| ---------------------- | ---------------- | -------------------- | ---------------------- |
| `button-focus/outline` | `outline-color`  | `button.color.focus` | `{border.focus.color}` |
| `button-focus/outline` | `outline-style`  |                      | `{border.focus.style}` |
| `button-focus/outline` | `outline-width`  |                      | `{border.focus.width}` |
| `button-focus/outline` | `outline-offset` |                      | `1px`                  |

### Disabled

```yml
name: disabled
description:
type: boolean
default: false
```

- One of the `state` values in Figma.

#### True

Primary appearance:

| Figma layer name | Property name      | Style hook                                 | Default value                      |
| ---------------- | ------------------ | ------------------------------------------ | ---------------------------------- |
| `jh-button`      | `opacity`          | `button.opacity.disabled`                  | `{opacity.disabled}`               |
| `button-wrapper` | `background-color` | `button.color.background.primary.disabled` | `{color.content.brand.enabled}`    |
| `button-wrapper` | `border-color`     | `button.color.border.primary.disabled`     | `#00000000`                        |
| `button-icon`    | `fill`             | `button.icon.color.fill.primary.disabled`  | `{color.content.on.brand.enabled}` |
| `button-label`   | `color`            | `button.label.color.text.primary.disabled` | `{color.content.on.brand.enabled}` |

Secondary appearance:

| Figma layer name | Property name      | Style hook                                   | Default value                   |
| ---------------- | ------------------ | -------------------------------------------- | ------------------------------- |
| `jh-button`      | `opacity`          | `button.opacity.disabled`                    | `{opacity.disabled}`            |
| `button-wrapper` | `background-color` | `button.color.background.secondary.disabled` | `{color.content.brand.enabled}` |
| `button-wrapper` | `border-color`     | `button.color.border.secondary.disabled`     | `{border.action.color}`         |
| `button-icon`    | `fill`             | `button.icon.color.fill.secondary.disabled`  | `{color.content.brand.enabled}` |
| `button-label`   | `color`            | `button.label.color.text.secondary.disabled` | `{color.content.brand.enabled}` |

Tertiary appearance:

| Figma layer name | Property name      | Style hook                                  | Default value                   |
| ---------------- | ------------------ | ------------------------------------------- | ------------------------------- |
| `jh-button`      | `opacity`          | `button.opacity.disabled`                   | `{opacity.disabled}`            |
| `button-wrapper` | `background-color` | `button.color.background.tertiary.disabled` | `#00000000`                     |
| `button-wrapper` | `border-color`     | `button.color.border.tertiary.disabled`     | `#00000000`                     |
| `button-icon`    | `fill`             | `button.icon.color.fill.tertiary.disabled`  | `{color.content.brand.enabled}` |
| `button-label`   | `color`            | `button.label.color.text.tertiary.disabled` | `{color.content.brand.enabled}` |

Danger appearance:

| Figma layer name | Property name      | Style hook                                | Default value                         |
| ---------------- | ------------------ | ----------------------------------------- | ------------------------------------- |
| `jh-button`      | `opacity`          | `button.opacity.disabled`                 | `{opacity.disabled}`                  |
| `button-wrapper` | `background-color` | `button.color.background.danger.disabled` | `{color.content.negative.enabled}`    |
| `button-wrapper` | `border-color`     | `button.color.border.danger.disabled`     | `#00000000`                           |
| `button-icon`    | `fill`             | `button.icon.color.fill.danger.disabled`  | `{color.content.on.negative.enabled}` |
| `button-label`   | `color`            | `button.label.color.text.danger.disabled` | `{color.content.on.negative.enabled}` |

### Pending

```yml
name: pending
description: Set a pending state to indicate a process is underway.
type: boolean
default: false
```

- One of the `state` values in Figma.

#### True

- Replace the label and icon with a progress indicator to show that a process is taking place (ex. saving).
- SHOULD keep the button width the same as before the pending process was triggered.
- SHOULD set `aria-busy="true"` to the region if `pending` reflects the changing of a live-region and the announcement of those changes should wait until completed.
- SHOULD set `aria-busy="false"` once the process is complete.
- MUST horizontally center the progress within the button container.
- MUST NOT be navigated to nor activated by a mouse or keyboard when in a pending state.

Primary appearance:

| Figma layer name                     | Property name              | Style hook                                           | Default value                      |
| ------------------------------------ | -------------------------- | ---------------------------------------------------- | ---------------------------------- |
| `button-wrapper`                     | `background-color`         | `button.color.background.primary.pending`            | `{color.content.brand.enabled}`    |
| `button-wrapper`                     | `border-color`             | `button.color.border.primary.pending`                | `#00000000`                        |
| `button-progress/progress-indicator` | `progress.indicator.color` | `button.progress.color.border.primary.pending`       | `{color.content.on.brand.enabled}` |
| `button-progress/progress-track`     | `progress.track.color`     | `button.progress.track.color.border.primary.pending` | `{progress.track.color}`           |

Secondary appearance:

| Figma layer name                     | Property name              | Style hook                                             | Default value                   |
| ------------------------------------ | -------------------------- | ------------------------------------------------------ | ------------------------------- |
| `button-wrapper`                     | `background-color`         | `button.color.background.secondary.pending`            | `#00000000`                     |
| `button-wrapper`                     | `border-color`             | `button.color.border.secondary.pending`                | `{border.action.color}`         |
| `button-progress/progress-indicator` | `progress.indicator.color` | `button.progress.color.border.secondary.pending`       | `{color.content.brand.enabled}` |
| `button-progress/progress-track`     | `progress.track.color`     | `button.progress.track.color.border.secondary.pending` | `{progress.track.color}`        |

Tertiary appearance:

| Figma layer name                     | Property name              | Style hook                                            | Default value                   |
| ------------------------------------ | -------------------------- | ----------------------------------------------------- | ------------------------------- |
| `button-wrapper`                     | `background-color`         | `button.color.background.tertiary.pending`            | `#00000000`                     |
| `button-wrapper`                     | `border-color`             | `button.color.border.tertiary.pending`                | `#00000000`                     |
| `button-progress/progress-indicator` | `progress.indicator.color` | `button.progress.color.border.tertiary.pending`       | `{color.content.brand.enabled}` |
| `button-progress/progress-track`     | `progress.track.color`     | `button.progress.track.color.border.tertiary.pending` | `{progress.track.color}`        |

Danger appearance:

| Figma layer name                     | Property name              | Style hook                                          | Default value                         |
| ------------------------------------ | -------------------------- | --------------------------------------------------- | ------------------------------------- |
| `button-wrapper`                     | `background-color`         | `button.color.background.danger.pending`            | `{color.content.negative.enabled}`    |
| `button-wrapper`                     | `border-color`             | `button.color.border.danger.pending`                | `#00000000`                           |
| `button-progress/progress-indicator` | `progress.indicator.color` | `button.progress.color.border.danger.pending`       | `{color.content.on.negative.enabled}` |
| `button-progress/progress-track`     | `progress.track.color`     | `button.progress.track.color.border.danger.pending` | `{progress.track.color}`              |

## Slots

### Left

```yml
name: left
layer: button-icon-left
description: Use to place an icon on the left side of the button.
```

- MUST only place icons in this slot.
- SHOULD use left icons to emphasize a button’s meaning.

### Right

```yml
name: right
layer: button-icon-right
description: Used to place an icon on the right side of the button.
```

- MUST only place icons in this slot.
- SHOULD use right icons to imply a progression or directionality.

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
