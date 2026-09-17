---
title: Button
description: Buttons enable a user to initiate a specific action.
---

# Button

Buttons enable a user to initiate a specific action — submitting a form, confirming a choice, or moving to the next step. Forge buttons come in a range of sizes, appearances, and content combinations (label, icon, or both) so you can match a button's prominence to the action it performs.

## Code documentation

See the [Button docs on Storybook](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-button--docs) for a full interactive reference.

## Anatomy

1. **Container** (`button-wrapper`) – holds the button's background, border, sizing, and padding.
2. **Icon** (`button-icon`) – the icon rendered in the left and/or right slot.
3. **Label** (`button-label`) – the button's text.
4. **Progress indicator** (`button-progress`) – replaces the label and icon while the button is pending.
5. **Focus outline** (`button-focus/outline`) – the focus ring shown when the button has keyboard focus.

## Options

### Size

Sets the size of the button.

- **Extra small** – The smallest size. Meant for nesting within another component, such as `jh-input`, rather than standing on its own.
- **Small** – A reduced-height size.
- **Medium** – The default, standard button size.
- **Large** – The largest size, for buttons that need extra prominence.

### Block

Sets the button's width to that of its parent container. Should be a boolean, defaulting to `false`.

- **True** – The button expands to fill the width of its parent container. The icon and label stay grouped and centered as the button expands, and height and padding follow the applied size.
- **False** – The button's width is based on its label and/or icons.

### Appearance

Determines the button's color. Each appearance includes enabled, focus, hover, active, disabled, and pending states.

- **Primary** – The highest-emphasis appearance.
- **Secondary** – A lower-emphasis appearance.
- **Tertiary** – The lowest-emphasis appearance.
- **Danger** – Conveys a destructive action.

### Label

The button's text. Should be a string.

### Icon only

Sets the button to display just one icon. Should be a boolean.

- **True** – The button becomes a perfect square: left and right padding match the top and bottom padding for that size, the left icon slot shows, and the right icon slot hides.
- **False** – The button hugs its slotted icon(s) and label, if present, and keeps its standard padding.

### Link

Buttons act as a link when a hyperlink is set via the `href` property. Assistive technologies recognize the button as a link and announce it accordingly. The `target` property specifies where the linked URL opens.

## Behavior

### States

- **Enabled** – the button's default appearance.
- **Focus** – shows the shared focus ring (`button-focus/outline`) so people can tell the button has keyboard focus.
- **Hover / Active** – shift the button's background, border, icon, and label colors per its appearance.
- **Disabled** – dims the button and removes it from keyboard and mouse interaction. A disabled button can be undiscoverable to screen readers unless `accessible-disabled` is used (see Accessibility).
- **Pending** – indicates a process is underway, such as saving. The label and icon are replaced with a progress indicator, and the button's width stays the same as before the process started, with the indicator centered. A pending button can't be navigated to or activated by mouse or keyboard. When the pending state reflects a live-region update, set `aria-busy="true"` while it runs and `aria-busy="false"` once it completes, so the update is announced at the right time.

## Usage

- Always pair buttons with comparably-sized form controls such as `jh-input` and `jh-select` (except extra small, which is designed for use inside other components).
- Never use the extra small size outside of another component; pair it with the x-small icon and small progress indicator.
- Limit large buttons to one per screen.
- Primary buttons should appear only once per container.
- Pair a secondary button alongside a primary button to indicate a secondary action, such as "Cancel."
- Pair a tertiary button with a primary button when there are multiple calls to action.
- Use danger buttons only for destructive actions, such as "Delete" or "Remove," to avoid confusion.
- When a button needs to be a perfect square, use the `iconOnly` property instead of removing the label.
- You may remove the label and place icons in both slots to create a "dual icon" button, but avoid this unless space is at an absolute premium.
- A block button can be applied at any size and is useful for vertically stacking multiple calls to action.
- Use the Enter key to activate a link button from the keyboard.
- When pending state reflects a live-region update, use `aria-busy="true"` while processing and `aria-busy="false"` once complete.
- Set `aria-disabled="true"` (via `accessible-disabled`) on disabled buttons that should remain discoverable to screen readers.
- Keep button labels concise, action-driven, and starting with an imperative verb.

## Accessibility

The following WCAG 2.2 success criteria are relevant:

- **1.3.1: Info and Relationships** – the button includes semantic type information.
- **1.4.4: Resize Text** – content remains accessible when text is resized up to 200%.
- **2.4.7: Focus Visible** – a visible focus indicator is provided via the shared focus ring.
- **2.5.8: Target Size (Minimum)** – a minimum pointer target of 24×24 pixels is maintained across documented sizes.
- **4.1.2: Name, Role, Value** – the button communicates its purpose, role, and state to assistive technologies.

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

The button's default primary and danger appearance backgrounds resolve to content-concept colors (`--jh-color-content-brand-enabled`, `--jh-color-content-negative-enabled`) rather than container-concept colors. This is documented as-is because the same pattern also appears in the Badge spec, suggesting it's an established convention for solid, high-emphasis surfaces.

## API reference

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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| `accessible-disabled` | Sets an `aria-disabled` to signify to screen readers that the disabled button should remain perceivable while disabled. | string | — |
| `accessible-label` | Sets an `aria-label` to assist screen reader users when no visible label is present. | string | — |
| `appearance` | Determines the button color: `primary`, `secondary`, `tertiary`, or `danger`. | string | `secondary` |
| `block` | Sets the button width to its parent container. | boolean | `false` |
| `disabled` | Disables the button and prevents all user interactions. May cause the button to be ignored by assistive technologies — see `accessible-disabled`. | boolean | `false` |
| `href` | Sets the link's destination. | string | — |
| `pending` | Displays a progress indicator. | boolean | `false` |
| `label` | Describes the intent of the button. | string | — |
| `name` | Sets the name of the button data when submitted in a form. | string | — |
| `size` | Sets the size of the button: `x-small`, `small`, `medium`, or `large`. | string | `medium` |
| `submit` | Sets button `type="submit"`. | boolean | `false` |
| `target` | Specifies where to display the linked URL set by the `href` property. | string | — |
| `value` | Sets the value of the button. | string | — |

### Slots

| Slot | Description |
| --- | --- |
| `jh-button-icon-left` | Insert an icon on the left side of the button, or for single-icon buttons. |
| `jh-button-icon-right` | Insert an icon on the right side of the button. |

### Style hooks

**Sizing, radius, and focus**

| Custom property | Description | Default |
| --- | --- | --- |
| `--jh-button-border-radius` | The button container border-radius. | `--jh-border-radius-100` |
| `--jh-button-opacity-disabled` | The button container opacity when disabled. | `--jh-opacity-disabled` |
| `--jh-button-color-focus` | The button container outline when it receives keyboard focus. | `--jh-border-focus-color` |
| `--jh-button-size` | The button width of single-icon buttons, and the button height. | `--jh-dimension-600` (x-small), `--jh-dimension-800` (small), `--jh-dimension-1000` (medium), `--jh-dimension-1200` (large) |

**Primary appearance**

| Custom property | Description | Default |
| --- | --- | --- |
| `--jh-button-color-background-primary-enabled` | Container background color when enabled. | `--jh-color-content-brand-enabled` |
| `--jh-button-color-border-primary-enabled` | Container border color when enabled. | `transparent` |
| `--jh-button-icon-color-fill-primary-enabled` | Icon color when enabled. | `--jh-color-content-on-brand-enabled` |
| `--jh-button-label-color-text-primary-enabled` | Label text color when enabled. | `--jh-color-content-on-brand-enabled` |
| `--jh-button-color-background-primary-focus` | Container background color when in focus. | `--jh-color-content-brand-hover` |
| `--jh-button-color-border-primary-focus` | Container border color when in focus. | `transparent` |
| `--jh-button-icon-color-fill-primary-focus` | Icon color when in focus. | `--jh-color-content-on-brand-hover` |
| `--jh-button-label-color-text-primary-focus` | Label text color when in focus. | `--jh-color-content-on-brand-hover` |
| `--jh-button-color-background-primary-hover` | Container background color when hovered. | `--jh-color-content-brand-hover` |
| `--jh-button-color-border-primary-hover` | Container border color when hovered. | `transparent` |
| `--jh-button-icon-color-fill-primary-hover` | Icon color when hovered. | `--jh-color-content-on-brand-hover` |
| `--jh-button-label-color-text-primary-hover` | Label text color when hovered. | `--jh-color-content-on-brand-hover` |
| `--jh-button-color-background-primary-active` | Container background color when active. | `--jh-color-content-brand-active` |
| `--jh-button-color-border-primary-active` | Container border color when active. | `transparent` |
| `--jh-button-icon-color-fill-primary-active` | Icon color when active. | `--jh-color-content-on-brand-active` |
| `--jh-button-label-color-text-primary-active` | Label text color when active. | `--jh-color-content-on-brand-active` |
| `--jh-button-color-background-primary-disabled` | Container background color when disabled. | `--jh-color-content-brand-enabled` |
| `--jh-button-color-border-primary-disabled` | Container border color when disabled. | `transparent` |
| `--jh-button-icon-color-fill-primary-disabled` | Icon color when disabled. | `--jh-color-content-on-brand-enabled` |
| `--jh-button-label-color-text-primary-disabled` | Label text color when disabled. | `--jh-color-content-on-brand-enabled` |
| `--jh-button-color-background-primary-pending` | Container background color when pending. | `--jh-color-content-brand-enabled` |
| `--jh-button-color-border-primary-pending` | Container border color when pending. | `transparent` |
| `--jh-button-progress-color-border-primary-pending` | Progress indicator border color. | `--jh-color-content-on-brand-enabled` |

**Secondary appearance**

| Custom property | Description | Default |
| --- | --- | --- |
| `--jh-button-color-background-secondary-enabled` | Container background color when enabled. | `transparent` |
| `--jh-button-color-border-secondary-enabled` | Container border color when enabled. | `--jh-border-action-color` |
| `--jh-button-icon-color-fill-secondary-enabled` | Icon color when enabled. | `--jh-color-content-brand-enabled` |
| `--jh-button-label-color-text-secondary-enabled` | Label text color when enabled. | `--jh-color-content-brand-enabled` |
| `--jh-button-color-background-secondary-focus` | Container background color when in focus. | `--jh-color-content-brand-hover` |
| `--jh-button-color-border-secondary-focus` | Container border color when in focus. | `--jh-color-content-brand-hover` |
| `--jh-button-icon-color-fill-secondary-focus` | Icon color when in focus. | `--jh-color-content-on-brand-hover` |
| `--jh-button-label-color-text-secondary-focus` | Label text color when in focus. | `--jh-color-content-on-brand-hover` |
| `--jh-button-color-background-secondary-hover` | Container background color when hovered. | `--jh-color-content-brand-hover` |
| `--jh-button-color-border-secondary-hover` | Container border color when hovered. | `--jh-color-content-brand-hover` |
| `--jh-button-icon-color-fill-secondary-hover` | Icon color when hovered. | `--jh-color-content-on-brand-hover` |
| `--jh-button-label-color-text-secondary-hover` | Label text color when hovered. | `--jh-color-content-on-brand-hover` |
| `--jh-button-color-background-secondary-active` | Container background color when active. | `--jh-color-content-brand-active` |
| `--jh-button-color-border-secondary-active` | Container border color when active. | `--jh-color-content-brand-active` |
| `--jh-button-icon-color-fill-secondary-active` | Icon color when active. | `--jh-color-content-on-brand-active` |
| `--jh-button-label-color-text-secondary-active` | Label text color when active. | `--jh-color-content-on-brand-active` |
| `--jh-button-color-background-secondary-disabled` | Container background color when disabled. | `transparent` |
| `--jh-button-color-border-secondary-disabled` | Container border color when disabled. | `--jh-border-action-color` |
| `--jh-button-icon-color-fill-secondary-disabled` | Icon color when disabled. | `--jh-color-content-brand-enabled` |
| `--jh-button-label-color-text-secondary-disabled` | Label text color when disabled. | `--jh-color-content-brand-enabled` |
| `--jh-button-color-background-secondary-pending` | Container background color when pending. | `transparent` |
| `--jh-button-color-border-secondary-pending` | Container border color when pending. | `--jh-border-action-color` |
| `--jh-button-progress-color-border-secondary-pending` | Progress indicator border color. | `--jh-color-content-brand-enabled` |

**Tertiary appearance**

| Custom property | Description | Default |
| --- | --- | --- |
| `--jh-button-color-background-tertiary-enabled` | Container background color when enabled. | `transparent` |
| `--jh-button-color-border-tertiary-enabled` | Container border color when enabled. | `transparent` |
| `--jh-button-icon-color-fill-tertiary-enabled` | Icon color when enabled. | `--jh-color-content-brand-enabled` |
| `--jh-button-label-color-text-tertiary-enabled` | Label text color when enabled. | `--jh-color-content-brand-enabled` |
| `--jh-button-color-background-tertiary-focus` | Container background color when in focus. | `--jh-color-content-brand-hover` |
| `--jh-button-color-border-tertiary-focus` | Container border color when in focus. | `transparent` |
| `--jh-button-icon-color-fill-tertiary-focus` | Icon color when in focus. | `--jh-color-content-on-brand-hover` |
| `--jh-button-label-color-text-tertiary-focus` | Label text color when in focus. | `--jh-color-content-on-brand-hover` |
| `--jh-button-color-background-tertiary-hover` | Container background color when hovered. | `--jh-color-content-brand-hover` |
| `--jh-button-color-border-tertiary-hover` | Container border color when hovered. | `transparent` |
| `--jh-button-icon-color-fill-tertiary-hover` | Icon color when hovered. | `--jh-color-content-on-brand-hover` |
| `--jh-button-label-color-text-tertiary-hover` | Label text color when hovered. | `--jh-color-content-on-brand-hover` |
| `--jh-button-color-background-tertiary-active` | Container background color when active. | `--jh-color-content-brand-active` |
| `--jh-button-color-border-tertiary-active` | Container border color when active. | `transparent` |
| `--jh-button-icon-color-fill-tertiary-active` | Icon color when active. | `--jh-color-content-on-brand-active` |
| `--jh-button-label-color-text-tertiary-active` | Label text color when active. | `--jh-color-content-on-brand-active` |
| `--jh-button-color-background-tertiary-disabled` | Container background color when disabled. | `transparent` |
| `--jh-button-color-border-tertiary-disabled` | Container border color when disabled. | `transparent` |
| `--jh-button-icon-color-fill-tertiary-disabled` | Icon color when disabled. | `--jh-color-content-brand-enabled` |
| `--jh-button-label-color-text-tertiary-disabled` | Label text color when disabled. | `--jh-color-content-brand-enabled` |
| `--jh-button-color-background-tertiary-pending` | Container background color when pending. | `transparent` |
| `--jh-button-color-border-tertiary-pending` | Container border color when pending. | `transparent` |
| `--jh-button-progress-color-border-tertiary-pending` | Progress indicator border color. | `--jh-color-content-brand-enabled` |

**Danger appearance**

| Custom property | Description | Default |
| --- | --- | --- |
| `--jh-button-color-background-danger-enabled` | Container background color when enabled. | `--jh-color-content-negative-enabled` |
| `--jh-button-color-border-danger-enabled` | Container border color when enabled. | `transparent` |
| `--jh-button-icon-color-fill-danger-enabled` | Icon color when enabled. | `--jh-color-content-on-negative-enabled` |
| `--jh-button-label-color-text-danger-enabled` | Label text color when enabled. | `--jh-color-content-on-negative-enabled` |
| `--jh-button-color-background-danger-focus` | Container background color when in focus. | `--jh-color-content-negative-hover` |
| `--jh-button-color-border-danger-focus` | Container border color when in focus. | `transparent` |
| `--jh-button-icon-color-fill-danger-focus` | Icon color when in focus. | `--jh-color-content-on-negative-hover` |
| `--jh-button-label-color-text-danger-focus` | Label text color when in focus. | `--jh-color-content-on-negative-hover` |
| `--jh-button-color-background-danger-hover` | Container background color when hovered. | `--jh-color-content-negative-hover` |
| `--jh-button-color-border-danger-hover` | Container border color when hovered. | `transparent` |
| `--jh-button-icon-color-fill-danger-hover` | Icon color when hovered. | `--jh-color-content-on-negative-hover` |
| `--jh-button-label-color-text-danger-hover` | Label text color when hovered. | `--jh-color-content-on-negative-hover` |
| `--jh-button-color-background-danger-active` | Container background color when active. | `--jh-color-content-negative-active` |
| `--jh-button-color-border-danger-active` | Container border color when active. | `transparent` |
| `--jh-button-icon-color-fill-danger-active` | Icon color when active. | `--jh-color-content-on-negative-active` |
| `--jh-button-label-color-text-danger-active` | Label text color when active. | `--jh-color-content-on-negative-active` |
| `--jh-button-color-background-danger-disabled` | Container background color when disabled. | `--jh-color-content-negative-enabled` |
| `--jh-button-color-border-danger-disabled` | Container border color when disabled. | `transparent` |
| `--jh-button-icon-color-fill-danger-disabled` | Icon color when disabled. | `--jh-color-content-on-negative-enabled` |
| `--jh-button-label-color-text-danger-disabled` | Label text color when disabled. | `--jh-color-content-on-negative-enabled` |
| `--jh-button-color-background-danger-pending` | Container background color when pending. | `--jh-color-content-negative-enabled` |
| `--jh-button-color-border-danger-pending` | Container border color when pending. | `transparent` |
| `--jh-button-progress-color-border-danger-pending` | Progress indicator border color. | `--jh-color-content-on-negative-enabled` |

## Feedback

Found an issue or have a suggestion? [Open a GitHub issue](https://github.com/Banno/jack-henry-design-system/issues) or join the conversation in [GitHub Discussions](https://github.com/Banno/jack-henry-design-system/discussions).
