---
title: Button
description: Buttons enable a user to initiate a specific action.
---

# Button

Buttons enable a user to initiate a specific action — submitting a form, confirming a choice, or moving to the next step. Forge buttons cover a range of sizes, appearances, and content combinations (label, icon, or both) so you can match a button's prominence to the action it performs.

## Anatomy

1. **Container** (`button-wrapper`) – holds the button's background, border, sizing, and padding.
2. **Icon** (`button-icon`) – the icon rendered in the left and/or right slot.
3. **Label** (`button-label`) – the button's text.
4. **Progress indicator** (`button-progress`) – replaces the label and icon while the button is pending.
5. **Focus outline** (`button-focus/outline`) – the focus ring shown when the button has keyboard focus.

## Variants

### Size

Buttons come in extra small, small, medium, and large. Pair a button with comparably-sized form controls, such as `jh-input` and `jh-select` — the exception is extra small, which is meant to live inside another component (like `jh-input`) rather than stand on its own; it also pairs with the x-small icon and small progress indicator. Medium is the default size and the standard instance to reach for. Reserve large for a button that needs prominence, and limit it to one per screen.

### Block

Block sets the button's width to that of its parent container and should be a boolean, defaulting to `false`. A block button can be applied at any size, independently of other properties, and is useful when stacking multiple calls to action vertically in a container such as a card or dialog. The icon and label stay grouped and centered as the button expands, height and padding follow the applied size, and the button never shrinks below the width of its padding plus content. Without block, a button's width depends on its label and/or icons.

### Appearance

Appearance determines the button's color.

- **Primary** buttons call attention to the strongest call to action in a context or view, and should appear only once per container.
- **Secondary** buttons handle most non-critical actions, and pair well alongside a primary button for a secondary action such as "Cancel."
- **Tertiary** buttons suit less prominent or independent actions, and pair with a primary button when there are multiple calls to action.
- **Danger** buttons convey destructive actions, such as "Delete" or "Remove" — don't use them for anything else, to avoid confusion.

### Label

The label is the button's text and should be a string. Keep it concise and action-driven, starting with an imperative verb to give a clear sense of what to do — for example, "Submit" instead of "Submitting."

### Icon only

Icon only sets the button to display just one icon, and should be a boolean.

When true, the button becomes a perfect square: left and right padding match the top and bottom padding for that size, the left icon slot shows, and the right icon slot hides.

When false and there's no label, the button hugs its slotted icons and keeps its standard padding. Don't remove the label to force an icon-only button — use `iconOnly` instead so the button stays square. You can remove the label and place icons in both slots to create a "dual icon" button, but avoid that unless space is at an absolute premium.

### Link

A button acts as a link when a hyperlink is set via the `href` property. Assistive technologies recognize it as a link and announce it accordingly. Set `target` to control where the linked URL opens, and use the Enter key to activate a link button from the keyboard.

## Behavior

### States

- **Enabled** – the button's default appearance.
- **Focus** – shows the shared focus ring (`button-focus/outline`) so people can tell the button has keyboard focus.
- **Hover / Active** – shift the button's background, border, icon, and label colors per its appearance.
- **Disabled** – dims the button and removes it from keyboard and mouse interaction. A disabled button can be undiscoverable to screen readers unless `accessible-disabled` is used (see Accessibility).
- **Pending** – indicates a process is underway, such as saving. The label and icon are replaced with a progress indicator, and the button's width stays the same as before the process started, with the indicator centered. A pending button can't be navigated to or activated by mouse or keyboard. When the pending state reflects a live-region update, set `aria-busy="true"` while it runs and `aria-busy="false"` once it completes, so the update is announced at the right time.

## Accessibility

The following WCAG 2.2 success criteria are relevant:

- [1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [1.4.4: Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
- [2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
- [2.5.8: Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

### What we provide

- `type="button"` by default, so activating a button never accidentally submits a form.
- Support for resizing up to 200% without loss of content or functionality.
- A built-in, visible focus indicator (`button-focus/outline`), styled from the shared focus tokens.
- A minimum pointer target of 24×24 pixels across the documented sizes.
- An `accessible-label` attribute that maps to `aria-label`, for cases where a visible label can't be used (such as icon-only buttons).
- An `accessible-disabled` attribute that maps to `aria-disabled`, so a disabled button can still be discoverable to screen reader users when needed.

### Author guidance

- Keep any custom size tokens at or above the 24×24 pixel minimum target size.
- Set `accessible-label` where a visible label can't be used, such as icon-only buttons.
- A `disabled` button can't be reached by keyboard, can't be interacted with by mouse, and may be undiscoverable to screen reader users. If it should remain discoverable while staying inoperable, set `accessible-disabled="true"` instead of relying on `disabled` alone.

## Contradictions with system guidance

- **DESIGN.md rule (Color aliases → Concepts):** container colors are meant for "the main surfaces found throughout the user interface," while content colors are meant to "style text, iconography, and other content-based elements" that sit on a container color.
- **Spec statement:** the button's default primary/danger appearance backgrounds (`button.color.background.primary.enabled`, `button.color.background.danger.enabled`) resolve to `color.content.brand.enabled` and `color.content.negative.enabled` — content-concept colors — rather than container-concept colors.
- This is documented as-is because the same pattern also appears in the Badge spec's default background token, suggesting it's an established convention for solid, high-emphasis surfaces rather than a one-off spec error. Worth confirming with the color-system owners whether content colors are intentionally allowed as component backgrounds in cases like this.

## API reference

See the [Button docs on Storybook](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-button--docs) for a full interactive reference.

Import the component and slot an icon into the corresponding slot:

```js
import '@jack-henry/jh-elements/components/button/button.js';
```

```html
<jh-button label="Label">
  <jh-icon-ellipsis slot="jh-button-icon-left"></jh-icon-ellipsis>
</jh-button>
```

Buttons depend on `jh-progress` (for the pending indicator) and are commonly used with `jh-icon`.

### Attributes

| Attribute             | Description                                                                                                                                        | Type    | Default     |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------| --------- | ------------- |
| `accessible-disabled`   | Sets an `aria-disabled` to signify to screen readers that the disabled button should remain perceivable while disabled.                              | string  | —            |
| `accessible-label`      | Sets an `aria-label` to assist screen reader users when no visible label is present.                                                                  | string  | —            |
| `appearance`            | Determines the button color: `primary`, `secondary`, `tertiary`, or `danger`.                                                                          | string  | `secondary`  |
| `block`                 | Sets the button width to its parent container.                                                                                                        | boolean | `false`      |
| `disabled`              | Disables the button and prevents all user interactions. May cause the button to be ignored by assistive technologies — see `accessible-disabled`.     | boolean | `false`      |
| `href`                  | Sets the link's destination.                                                                                                                           | string  | —            |
| `pending`               | Displays a progress indicator.                                                                                                                         | boolean | `false`      |
| `label`                 | Describes the intent of the button.                                                                                                                    | string  | —            |
| `name`                  | Sets the name of the button data when submitted in a form.                                                                                             | string  | —            |
| `size`                  | Sets the size of the button: `x-small`, `small`, `medium`, or `large`.                                                                                 | string  | `medium`     |
| `submit`                | Sets button `type="submit"`.                                                                                                                            | boolean | `false`      |
| `target`                | Specifies where to display the linked URL set by the `href` property.                                                                                  | string  | —            |
| `value`                 | Sets the value of the button.                                                                                                                          | string  | —            |

### Slots

| Slot                     | Description                                                             |
| -------------------------- | -------------------------------------------------------------------------|
| `jh-button-icon-left`      | Insert an icon on the left side of the button, or for single-icon buttons. |
| `jh-button-icon-right`     | Insert an icon on the right side of the button, or for single-icon buttons.|

### Style hooks

**Sizing, radius, and focus**

| Custom property             | Description                                                     | Default                                                                                                                                    |
| ------------------------------ | -------------------------------------------------------------------| ------------------------------------------------------------------------------------------------------------------------------------------- |
| `--jh-button-border-radius`     | The button container border-radius.                                 | `--jh-border-radius-100`                                                                                                                     |
| `--jh-button-opacity-disabled`  | The button container opacity when disabled.                         | `--jh-opacity-disabled`                                                                                                                       |
| `--jh-button-color-focus`       | The button container outline when it receives keyboard focus.       | `--jh-border-focus-color`                                                                                                                     |
| `--jh-button-size`              | The button width of single-icon buttons, and the button height.     | `--jh-dimension-600` (x-small), `--jh-dimension-800` (small), `--jh-dimension-1000` (medium), `--jh-dimension-1200` (large)                    |

**Primary appearance**

| Custom property                                       | Description                                            | Default                                |
| --------------------------------------------------------| --------------------------------------------------------- | ------------------------------------------ |
| `--jh-button-color-background-primary-enabled`          | Container background color when enabled.                   | `--jh-color-content-brand-enabled`          |
| `--jh-button-color-border-primary-enabled`               | Container border color when enabled.                        | `transparent`                              |
| `--jh-button-color-background-primary-focus`             | Container background color when in focus.                   | `--jh-color-content-brand-hover`            |
| `--jh-button-color-border-primary-focus`                  | Container border color when in focus.                        | `transparent`                              |
| `--jh-button-color-background-primary-hover`             | Container background color when hovered.                     | `--jh-color-content-brand-hover`            |
| `--jh-button-color-border-primary-hover`                  | Container border color when hovered.                          | `transparent`                              |
| `--jh-button-color-background-primary-active`            | Container background color when active.                      | `--jh-color-content-brand-active`           |
| `--jh-button-color-border-primary-active`                 | Container border color when active.                           | `transparent`                              |
| `--jh-button-color-background-primary-disabled`          | Container background color when disabled.                     | `--jh-color-content-brand-enabled`          |
| `--jh-button-color-border-primary-disabled`               | Container border color when disabled.                          | `transparent`                              |
| `--jh-button-color-background-primary-pending`           | Container background color when pending.                      | `--jh-color-content-brand-enabled`          |
| `--jh-button-color-border-primary-pending`                | Container border color when pending.                            | `transparent`                              |
| `--jh-button-label-color-text-primary-enabled`           | Label text color when enabled.                                  | `--jh-color-content-on-brand-enabled`       |
| `--jh-button-label-color-text-primary-focus`              | Label text color when in focus.                                  | `--jh-color-content-on-brand-hover`         |
| `--jh-button-label-color-text-primary-hover`              | Label text color when hovered.                                    | `--jh-color-content-on-brand-hover`         |
| `--jh-button-label-color-text-primary-active`             | Label text color when active.                                      | `--jh-color-content-on-brand-active`        |
| `--jh-button-label-color-text-primary-disabled`           | Label text color when disabled.                                     | `--jh-color-content-on-brand-enabled`       |
| `--jh-button-icon-color-fill-primary-enabled`             | Icon color when enabled.                                             | `--jh-color-content-on-brand-enabled`       |
| `--jh-button-icon-color-fill-primary-focus`               | Icon color when in focus.                                             | `--jh-color-content-on-brand-hover`         |
| `--jh-button-icon-color-fill-primary-hover`               | Icon color when hovered.                                               | `--jh-color-content-on-brand-hover`         |
| `--jh-button-icon-color-fill-primary-active`              | Icon color when active.                                                 | `--jh-color-content-on-brand-active`        |
| `--jh-button-icon-color-fill-primary-disabled`            | Icon color when disabled.                                                | `--jh-color-content-on-brand-enabled`       |
| `--jh-button-progress-color-border-primary-pending`       | Progress indicator border color.                                          | `--jh-color-content-on-brand-enabled`       |

**Secondary appearance**

| Custom property                                        | Description                                            | Default                                |
| ---------------------------------------------------------| --------------------------------------------------------- | ------------------------------------------ |
| `--jh-button-color-background-secondary-enabled`         | Container background color when enabled.                   | `transparent`                              |
| `--jh-button-color-border-secondary-enabled`              | Container border color when enabled.                         | `--jh-border-action-color`                  |
| `--jh-button-color-background-secondary-focus`           | Container background color when in focus.                    | `--jh-color-content-brand-hover`            |
| `--jh-button-color-border-secondary-focus`                | Container border color when in focus.                          | `--jh-color-content-brand-hover`            |
| `--jh-button-color-background-secondary-hover`           | Container background color when hovered.                       | `--jh-color-content-brand-hover`            |
| `--jh-button-color-border-secondary-hover`                | Container border color when hovered.                             | `--jh-color-content-brand-hover`            |
| `--jh-button-color-background-secondary-active`          | Container background color when active.                          | `--jh-color-content-brand-active`           |
| `--jh-button-color-border-secondary-active`               | Container border color when active.                                | `--jh-color-content-brand-active`           |
| `--jh-button-color-background-secondary-disabled`        | Container background color when disabled.                          | `transparent`                              |
| `--jh-button-color-border-secondary-disabled`             | Container border color when disabled.                                | `--jh-border-action-color`                  |
| `--jh-button-color-background-secondary-pending`         | Container background color when pending.                             | `transparent`                              |
| `--jh-button-color-border-secondary-pending`              | Container border color when pending.                                    | `--jh-border-action-color`                  |
| `--jh-button-label-color-text-secondary-enabled`         | Label text color when enabled.                                          | `--jh-color-content-brand-enabled`          |
| `--jh-button-label-color-text-secondary-focus`            | Label text color when in focus.                                           | `--jh-color-content-on-brand-hover`         |
| `--jh-button-label-color-text-secondary-hover`            | Label text color when hovered.                                             | `--jh-color-content-on-brand-hover`         |
| `--jh-button-label-color-text-secondary-active`           | Label text color when active.                                               | `--jh-color-content-on-brand-active`        |
| `--jh-button-label-color-text-secondary-disabled`         | Label text color when disabled.                                              | `--jh-color-content-brand-enabled`          |
| `--jh-button-icon-color-fill-secondary-enabled`           | Icon color when enabled.                                                      | `--jh-color-content-brand-enabled`          |
| `--jh-button-icon-color-fill-secondary-focus`             | Icon color when in focus.                                                       | `--jh-color-content-on-brand-hover`         |
| `--jh-button-icon-color-fill-secondary-hover`             | Icon color when hovered.                                                         | `--jh-color-content-on-brand-hover`         |
| `--jh-button-icon-color-fill-secondary-active`            | Icon color when active.                                                           | `--jh-color-content-on-brand-active`        |
| `--jh-button-icon-color-fill-secondary-disabled`          | Icon color when disabled.                                                          | `--jh-color-content-brand-enabled`          |
| `--jh-button-progress-color-border-secondary-pending`     | Progress indicator border color.                                                    | `--jh-color-content-brand-enabled`          |

**Tertiary appearance**

| Custom property                                       | Description                                            | Default                                |
| --------------------------------------------------------| --------------------------------------------------------- | ------------------------------------------ |
| `--jh-button-color-background-tertiary-enabled`         | Container background color when enabled.                   | `transparent`                              |
| `--jh-button-color-border-tertiary-enabled`              | Container border color when enabled.                         | `transparent`                              |
| `--jh-button-color-background-tertiary-focus`           | Container background color when in focus.                    | `--jh-color-content-brand-hover`            |
| `--jh-button-color-border-tertiary-focus`                | Container border color when in focus.                          | `transparent`                              |
| `--jh-button-color-background-tertiary-hover`           | Container background color when hovered.                       | `--jh-color-content-brand-hover`            |
| `--jh-button-color-border-tertiary-hover`                | Container border color when hovered.                             | `transparent`                              |
| `--jh-button-color-background-tertiary-active`          | Container background color when active.                          | `--jh-color-content-brand-active`           |
| `--jh-button-color-border-tertiary-active`               | Container border color when active.                                | `transparent`                              |
| `--jh-button-color-background-tertiary-disabled`        | Container background color when disabled.                          | `transparent`                              |
| `--jh-button-color-border-tertiary-disabled`             | Container border color when disabled.                                | `transparent`                              |
| `--jh-button-color-background-tertiary-pending`         | Container background color when pending.                             | `transparent`                              |
| `--jh-button-color-border-tertiary-pending`              | Container border color when pending.                                   | `transparent`                              |
| `--jh-button-label-color-text-tertiary-enabled`         | Label text color when enabled.                                          | `--jh-color-content-brand-enabled`          |
| `--jh-button-label-color-text-tertiary-focus`            | Label text color when in focus.                                           | `--jh-color-content-on-brand-hover`         |
| `--jh-button-label-color-text-tertiary-hover`            | Label text color when hovered.                                             | `--jh-color-content-on-brand-hover`         |
| `--jh-button-label-color-text-tertiary-active`           | Label text color when active.                                               | `--jh-color-content-on-brand-active`        |
| `--jh-button-label-color-text-tertiary-disabled`         | Label text color when disabled.                                              | `--jh-color-content-brand-enabled`          |
| `--jh-button-icon-color-fill-tertiary-enabled`           | Icon color when enabled.                                                      | `--jh-color-content-brand-enabled`          |
| `--jh-button-icon-color-fill-tertiary-focus`             | Icon color when in focus.                                                       | `--jh-color-content-on-brand-hover`         |
| `--jh-button-icon-color-fill-tertiary-hover`             | Icon color when hovered.                                                         | `--jh-color-content-on-brand-hover`         |
| `--jh-button-icon-color-fill-tertiary-active`            | Icon color when active.                                                           | `--jh-color-content-on-brand-active`        |
| `--jh-button-icon-color-fill-tertiary-disabled`          | Icon color when disabled.                                                          | `--jh-color-content-brand-enabled`          |
| `--jh-button-progress-color-border-tertiary-pending`     | Progress indicator border color.                                                    | `--jh-color-content-brand-enabled`          |

**Danger appearance**

| Custom property                                     | Description                                            | Default                                     |
| -------------------------------------------------------| --------------------------------------------------------- | ------------------------------------------------ |
| `--jh-button-color-background-danger-enabled`          | Container background color when enabled.                   | `--jh-color-content-negative-enabled`             |
| `--jh-button-color-border-danger-enabled`               | Container border color when enabled.                         | `transparent`                                    |
| `--jh-button-color-background-danger-focus`            | Container background color when in focus.                    | `--jh-color-content-negative-hover`               |
| `--jh-button-color-border-danger-focus`                 | Container border color when in focus.                          | `transparent`                                    |
| `--jh-button-color-background-danger-hover`            | Container background color when hovered.                       | `--jh-color-content-negative-hover`               |
| `--jh-button-color-border-danger-hover`                 | Container border color when hovered.                             | `transparent`                                    |
| `--jh-button-color-background-danger-active`           | Container background color when active.                          | `--jh-color-content-negative-active`              |
| `--jh-button-color-border-danger-active`                | Container border color when active.                                | `transparent`                                    |
| `--jh-button-color-background-danger-disabled`         | Container background color when disabled.                          | `--jh-color-content-negative-enabled`             |
| `--jh-button-color-border-danger-disabled`              | Container border color when disabled.                                | `transparent`                                    |
| `--jh-button-color-background-danger-pending`          | Container background color when pending.                             | `--jh-color-content-negative-enabled`             |
| `--jh-button-color-border-danger-pending`               | Container border color when pending.                                   | `transparent`                                    |
| `--jh-button-label-color-text-danger-enabled`          | Label text color when enabled.                                          | `--jh-color-content-on-negative-enabled`          |
| `--jh-button-label-color-text-danger-focus`             | Label text color when in focus.                                           | `--jh-color-content-on-negative-hover`            |
| `--jh-button-label-color-text-danger-hover`             | Label text color when hovered.                                             | `--jh-color-content-on-negative-hover`            |
| `--jh-button-label-color-text-danger-active`            | Label text color when active.                                               | `--jh-color-content-on-negative-active`           |
| `--jh-button-label-color-text-danger-disabled`          | Label text color when disabled.                                              | `--jh-color-content-on-negative-enabled`          |
| `--jh-button-icon-color-fill-danger-enabled`            | Icon color when enabled.                                                      | `--jh-color-content-on-negative-enabled`          |
| `--jh-button-icon-color-fill-danger-focus`              | Icon color when in focus.                                                       | `--jh-color-content-on-negative-hover`            |
| `--jh-button-icon-color-fill-danger-hover`              | Icon color when hovered.                                                         | `--jh-color-content-on-negative-hover`            |
| `--jh-button-icon-color-fill-danger-active`             | Icon color when active.                                                           | `--jh-color-content-on-negative-active`           |
| `--jh-button-icon-color-fill-danger-disabled`           | Icon color when disabled.                                                          | `--jh-color-content-on-negative-enabled`          |
| `--jh-button-progress-color-border-danger-pending`      | Progress indicator border color.                                                    | `--jh-color-content-on-negative-enabled`          |

## Feedback

Found an issue or have a suggestion? [Open a GitHub issue](https://github.com/Banno/jack-henry-design-system/issues) or join the conversation in [GitHub Discussions](https://github.com/Banno/jack-henry-design-system/discussions).
