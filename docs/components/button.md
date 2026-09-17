---
title: Button
description: Buttons enable a user to initiate a specific action.
---

# Button

Buttons enable a user to initiate a specific action — submitting a form, confirming a choice, or moving to the next step. Forge buttons come in a range of sizes and appearances, with support for labels, icons, or both, so you can match a button's prominence to the action it performs.

- **Status**: Active
- **Added**: 1.0.0
- **Package**: `@jack-henry/jh-elements`

## Anatomy

1. **Left icon** (`button-icon-left`) – an instance of `jh-icon` rendered in the button's left slot.
2. **Label** (`button-label`) – the button's text.
3. **Right icon** (`button-icon-right`) – an instance of `jh-icon` rendered in the button's right slot.
4. **Progress indicator** (`button-progress`) – an instance of `jh-progress`, shown in place of the label and icons while the button is pending.
5. **Focus outline** (`button-focus/outline`) – the ring shown when the button has keyboard focus.

## Options

### Size

Sets the size of the button. Should be paired with comparably-sized form controls, such as `jh-input` and `jh-select`.

- **Extra small** – Nests inside another component, such as `jh-input`, when the other sizes are too large. Pair it with an `xsmall` icon and a `small` progress indicator, and don't use it outside of another component.
- **Small** – Use where vertical space is limited.
- **Medium** – The default, standard button size.
- **Large** – The largest size, for a button that needs prominence. Limit it to one per screen.

### Block

Sets the button's width to that of its parent container. Defaults to `false`, and can be applied alongside any other option.

- **True** – Expands to fill the width of its parent container. The icon and label stay grouped and horizontally centered as the button grows, and height and padding follow the applied size. Useful for stacking multiple calls to action vertically in a container, such as a card or dialog. The button never shrinks below the combined width of its padding and content.
- **False** – The button's width depends on its label and/or icons.

### Appearance

Determines the button's color. Defaults to `secondary`.

- **Primary** – The highest-emphasis appearance, for the strongest call to action in a given context. Limit it to one per context, such as a card or section.
- **Secondary** – A lower-emphasis appearance for most non-critical actions. Can pair with a primary button to represent a secondary action, such as "Cancel" next to "Submit."
- **Tertiary** – The lowest-emphasis appearance, for less prominent or independent actions. Can pair with a primary button when there are multiple calls to action.
- **Danger** – Conveys a destructive action, such as "Delete" or "Remove." Don't use it for anything other than a destructive action.

### Label

The button's text, describing its action. Keep it concise — for example, "Cancel" instead of "Cancel the action" — and lead with an imperative verb, such as "Submit" instead of "Submitting."

### Icon only

Sets the button to display just one icon.

- **True** – The button becomes a perfect square: left and right padding match the top and bottom padding for its size, the left icon slot shows, and the right icon slot hides.
- **False** – When there's no label, the button hugs its slotted icon(s) and keeps its standard padding. This can result in a "dual icon" button — icons in both slots with no label — which should be reserved for when space is at an absolute premium. Don't remove the label to force an icon-only button this way; use `iconOnly` instead, since dropping the label alone creates a non-square button.

### Link

Buttons act as a link when a hyperlink is set via the `href` property. Assistive technologies recognize the button as a link and announce it accordingly. Set `target` to specify where the linked URL opens, and use the Enter key to activate a link button from the keyboard.

## Behavior

### States

- **Enabled** – the button's default appearance.
- **Focus** – shows the focus outline.
- **Hover / Active** – shifts the background, border, icon, and label colors based on the button's appearance.
- **Disabled** – dims the button and removes it from keyboard and mouse interaction.
- **Pending** – replaces the label and icon with a progress indicator, horizontally centered in the button, to show that a process (such as saving) is underway. The button's width stays the same as before the process started, and it can't be navigated to or activated by mouse or keyboard while pending.

## Usage

### Do

- Pair a button with comparably-sized form controls, such as `jh-input` and `jh-select` — except the extra small size, which is meant to nest inside another component.
- Use the extra small size only within another component, such as `jh-input`, paired with an `xsmall` icon and a `small` progress indicator.
- Use the small size where vertical space is limited.
- Use the medium size as the standard button instance.
- Use the large size when a button needs prominence, and limit it to one per screen.
- Apply a block button to vertically stack multiple calls to action in a container, such as a card or dialog.
- Limit primary buttons to one per context, such as a card or section.
- Pair a secondary button with a primary button to represent a secondary action, such as "Cancel" next to "Submit."
- Pair a tertiary button with a primary button when there are multiple calls to action.
- Keep labels concise and lead with an imperative verb, such as "Submit" instead of "Submitting."
- Use `iconOnly` instead of removing the label when a button needs to be a perfect square.

### Don't

- Don't use the extra small size outside of another component.
- Don't pair the extra small size with anything other than an `xsmall` icon or a `small` progress indicator.
- Don't use a danger button for anything other than a destructive action.
- Don't remove the label to force an icon-only button — it creates a non-square button. Use `iconOnly` instead.
- Don't use dual-icon buttons (no label, icons in both slots) unless space is at an absolute premium.

## Accessibility

The following WCAG 2.2 success criteria are relevant:

- [1.3.1: Info and relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
  - Sets `type="button"` by default, so the browser doesn't try to submit form data when the button is activated.
- [1.4.4: Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
  - Can be resized without assistive technology up to 200 percent without losing content or functionality.
- [2.4.7: Focus visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
  - Provides focus-visible styles so people can tell which element currently has keyboard focus.
- [2.5.8: Target size (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
  - Meets a minimum pointer target size of 24 by 24 pixels.

### Author guidance

- Use the `accessible-label` attribute to set an `aria-label` where a visible label can't be used.
- Keep a minimum target size of 24 by 24 pixels if you apply custom size tokens.
- A `disabled` button can't be reached by keyboard or interacted with by mouse, and may be undiscoverable to screen reader users.
- Use `accessible-disabled="true"` instead when a disabled button should stay discoverable to assistive technology. It sets `aria-disabled="true"` on the button, so it remains perceivable to screen reader users while staying inoperable.

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

### Attributes

| Attribute name | Description | Type | Default value |
| --- | --- | --- | --- |
| `accessible-disabled` | Sets an `aria-disabled` to signify to screen readers that the disabled button should remain perceivable while disabled. | `'true' \| 'false'` | — |
| `accessible-label` | Sets an `aria-label` to assist screen reader users when no visible label is present. | string | — |
| `appearance` | Determines the button color. | `'primary' \| 'secondary' \| 'tertiary' \| 'danger'` | `secondary` |
| `block` | Sets the button width to its parent container. | boolean | `false` |
| `disabled` | Disables the button and prevents all user interactions. May cause the button to be ignored by assistive technologies (AT). See `accessible-disabled` if the button should remain perceivable to AT. | boolean | `false` |
| `href` | Sets the link's destination. | string | — |
| `pending` | Displays a progress indicator. | boolean | `false` |
| `label` | Describes the intent of the button. | string | — |
| `name` | Sets the name of the button data when submitted in a form. | string | — |
| `size` | Sets the size of the button. | `'x-small' \| 'small' \| 'medium' \| 'large'` | `medium` |
| `submit` | Sets the button `type="submit"`. Defaults to `type="button"`. | boolean | `false` |
| `target` | Specifies where to display the linked URL set by the `href` property. | `'_blank' \| '_self' \| '_parent' \| '_top'` | — |
| `value` | Sets the value of the button. | string | — |

### Slots

| Slot name | Description |
| --- | --- |
| `jh-button-icon-left` | Use to insert an icon on the left side of the button and for single icon buttons. |
| `jh-button-icon-right` | Use to insert an icon on the right side of the button and for single icon buttons. |

### Style hooks

| Style hook | Description | Default value |
| --- | --- | --- |
| `--jh-button-color-background-primary-enabled` | The button container background-color when enabled and `appearance="primary"`. | `--jh-color-content-brand-enabled` |
| `--jh-button-color-border-primary-enabled` | The button container border-color when enabled and `appearance="primary"`. | `transparent` |
| `--jh-button-color-background-primary-focus` | The button container background-color when in focus and `appearance="primary"`. | `--jh-color-content-brand-hover` |
| `--jh-button-color-border-primary-focus` | The button container border-color when in focus and `appearance="primary"`. | `transparent` |
| `--jh-button-color-background-primary-hover` | The button container background-color when hovered and `appearance="primary"`. | `--jh-color-content-brand-hover` |
| `--jh-button-color-border-primary-hover` | The button container border-color when hovered and `appearance="primary"`. | `transparent` |
| `--jh-button-color-background-primary-active` | The button container background-color when active and `appearance="primary"`. | `--jh-color-content-brand-active` |
| `--jh-button-color-border-primary-active` | The button container border-color when active and `appearance="primary"`. | `transparent` |
| `--jh-button-color-background-primary-disabled` | The button container background-color when disabled and `appearance="primary"`. | `--jh-color-content-brand-enabled` |
| `--jh-button-color-border-primary-disabled` | The button container border-color when disabled and `appearance="primary"`. | `transparent` |
| `--jh-button-color-background-primary-pending` | The button container background-color when pending and `appearance="primary"`. | `--jh-color-content-brand-enabled` |
| `--jh-button-color-border-primary-pending` | The button container border-color when pending and `appearance="primary"`. | `transparent` |
| `--jh-button-label-color-text-primary-enabled` | The label text color when enabled and `appearance="primary"`. | `--jh-color-content-on-brand-enabled` |
| `--jh-button-label-color-text-primary-focus` | The label text color when in focus and `appearance="primary"`. | `--jh-color-content-on-brand-hover` |
| `--jh-button-label-color-text-primary-hover` | The label text color when hovered and `appearance="primary"`. | `--jh-color-content-on-brand-hover` |
| `--jh-button-label-color-text-primary-active` | The label text color when active and `appearance="primary"`. | `--jh-color-content-on-brand-active` |
| `--jh-button-label-color-text-primary-disabled` | The label text color when disabled and `appearance="primary"`. | `--jh-color-content-on-brand-enabled` |
| `--jh-button-icon-color-fill-primary-enabled` | The icon color when enabled and `appearance="primary"`. | `--jh-color-content-on-brand-enabled` |
| `--jh-button-icon-color-fill-primary-focus` | The icon color when in focus and `appearance="primary"`. | `--jh-color-content-on-brand-hover` |
| `--jh-button-icon-color-fill-primary-hover` | The icon color when hovered and `appearance="primary"`. | `--jh-color-content-on-brand-hover` |
| `--jh-button-icon-color-fill-primary-active` | The icon color when active and `appearance="primary"`. | `--jh-color-content-on-brand-active` |
| `--jh-button-icon-color-fill-primary-disabled` | The icon color when disabled and `appearance="primary"`. | `--jh-color-content-on-brand-enabled` |
| `--jh-button-progress-color-border-primary-pending` | The progress indicator border-color when `appearance="primary"`. | `--jh-color-content-on-brand-enabled` |
| `--jh-button-color-background-secondary-enabled` | The button container background-color when enabled and `appearance="secondary"`. | `transparent` |
| `--jh-button-color-border-secondary-enabled` | The button container border-color when enabled and `appearance="secondary"`. | `--jh-border-action-color` |
| `--jh-button-color-background-secondary-focus` | The button container background-color when in focus and `appearance="secondary"`. | `--jh-color-content-brand-hover` |
| `--jh-button-color-border-secondary-focus` | The button container border-color when in focus and `appearance="secondary"`. | `--jh-color-content-brand-hover` |
| `--jh-button-color-background-secondary-hover` | The button container background-color when hovered and `appearance="secondary"`. | `--jh-color-content-brand-hover` |
| `--jh-button-color-border-secondary-hover` | The button container border-color when hovered and `appearance="secondary"`. | `--jh-color-content-brand-hover` |
| `--jh-button-color-background-secondary-active` | The button container background-color when active and `appearance="secondary"`. | `--jh-color-content-brand-active` |
| `--jh-button-color-border-secondary-active` | The button container border-color when active and `appearance="secondary"`. | `--jh-color-content-brand-active` |
| `--jh-button-color-background-secondary-disabled` | The button container background-color when disabled and `appearance="secondary"`. | `transparent` |
| `--jh-button-color-border-secondary-disabled` | The button container border-color when disabled and `appearance="secondary"`. | `--jh-border-action-color` |
| `--jh-button-color-background-secondary-pending` | The button container background-color when pending and `appearance="secondary"`. | `transparent` |
| `--jh-button-color-border-secondary-pending` | The button container border-color when pending and `appearance="secondary"`. | `--jh-border-action-color` |
| `--jh-button-label-color-text-secondary-enabled` | The label text color when enabled and `appearance="secondary"`. | `--jh-color-content-brand-enabled` |
| `--jh-button-label-color-text-secondary-focus` | The label text color when in focus and `appearance="secondary"`. | `--jh-color-content-on-brand-hover` |
| `--jh-button-label-color-text-secondary-hover` | The label text color when hovered and `appearance="secondary"`. | `--jh-color-content-on-brand-hover` |
| `--jh-button-label-color-text-secondary-active` | The label text color when active and `appearance="secondary"`. | `--jh-color-content-on-brand-active` |
| `--jh-button-label-color-text-secondary-disabled` | The label text color when disabled and `appearance="secondary"`. | `--jh-color-content-brand-enabled` |
| `--jh-button-icon-color-fill-secondary-enabled` | The icon color when enabled and `appearance="secondary"`. | `--jh-color-content-brand-enabled` |
| `--jh-button-icon-color-fill-secondary-focus` | The icon color when in focus and `appearance="secondary"`. | `--jh-color-content-on-brand-hover` |
| `--jh-button-icon-color-fill-secondary-hover` | The icon color when hovered and `appearance="secondary"`. | `--jh-color-content-on-brand-hover` |
| `--jh-button-icon-color-fill-secondary-active` | The icon color when active and `appearance="secondary"`. | `--jh-color-content-on-brand-active` |
| `--jh-button-icon-color-fill-secondary-disabled` | The icon color when disabled and `appearance="secondary"`. | `--jh-color-content-brand-enabled` |
| `--jh-button-progress-color-border-secondary-pending` | The progress indicator border-color when `appearance="secondary"`. | `--jh-color-content-brand-enabled` |
| `--jh-button-color-background-tertiary-enabled` | The button container background-color when enabled and `appearance="tertiary"`. | `transparent` |
| `--jh-button-color-border-tertiary-enabled` | The button container border-color when enabled and `appearance="tertiary"`. | `transparent` |
| `--jh-button-color-background-tertiary-focus` | The button container background-color when in focus and `appearance="tertiary"`. | `--jh-color-content-brand-hover` |
| `--jh-button-color-border-tertiary-focus` | The button container border-color when in focus and `appearance="tertiary"`. | `transparent` |
| `--jh-button-color-background-tertiary-hover` | The button container background-color when hovered and `appearance="tertiary"`. | `--jh-color-content-brand-hover` |
| `--jh-button-color-border-tertiary-hover` | The button container border-color when hovered and `appearance="tertiary"`. | `transparent` |
| `--jh-button-color-background-tertiary-active` | The button container background-color when active and `appearance="tertiary"`. | `--jh-color-content-brand-active` |
| `--jh-button-color-border-tertiary-active` | The button container border-color when active and `appearance="tertiary"`. | `transparent` |
| `--jh-button-color-background-tertiary-disabled` | The button container background-color when disabled and `appearance="tertiary"`. | `transparent` |
| `--jh-button-color-border-tertiary-disabled` | The button container border-color when disabled and `appearance="tertiary"`. | `transparent` |
| `--jh-button-color-background-tertiary-pending` | The button container background-color when pending and `appearance="tertiary"`. | `transparent` |
| `--jh-button-color-border-tertiary-pending` | The button container border-color when pending and `appearance="tertiary"`. | `transparent` |
| `--jh-button-label-color-text-tertiary-enabled` | The label text color when enabled and `appearance="tertiary"`. | `--jh-color-content-brand-enabled` |
| `--jh-button-label-color-text-tertiary-focus` | The label text color when in focus and `appearance="tertiary"`. | `--jh-color-content-on-brand-hover` |
| `--jh-button-label-color-text-tertiary-hover` | The label text color when hovered and `appearance="tertiary"`. | `--jh-color-content-on-brand-hover` |
| `--jh-button-label-color-text-tertiary-active` | The label text color when active and `appearance="tertiary"`. | `--jh-color-content-on-brand-active` |
| `--jh-button-label-color-text-tertiary-disabled` | The label text color when disabled and `appearance="tertiary"`. | `--jh-color-content-brand-enabled` |
| `--jh-button-icon-color-fill-tertiary-enabled` | The icon color when enabled and `appearance="tertiary"`. | `--jh-color-content-brand-enabled` |
| `--jh-button-icon-color-fill-tertiary-focus` | The icon color when in focus and `appearance="tertiary"`. | `--jh-color-content-on-brand-hover` |
| `--jh-button-icon-color-fill-tertiary-hover` | The icon color when hovered and `appearance="tertiary"`. | `--jh-color-content-on-brand-hover` |
| `--jh-button-icon-color-fill-tertiary-active` | The icon color when active and `appearance="tertiary"`. | `--jh-color-content-on-brand-active` |
| `--jh-button-icon-color-fill-tertiary-disabled` | The icon color when disabled and `appearance="tertiary"`. | `--jh-color-content-brand-enabled` |
| `--jh-button-progress-color-border-tertiary-pending` | The progress indicator border-color when `appearance="tertiary"`. | `--jh-color-content-brand-enabled` |
| `--jh-button-color-background-danger-enabled` | The button container background-color when enabled and `appearance="danger"`. | `--jh-color-content-negative-enabled` |
| `--jh-button-color-border-danger-enabled` | The button container border-color when enabled and `appearance="danger"`. | `transparent` |
| `--jh-button-color-background-danger-focus` | The button container background-color when in focus and `appearance="danger"`. | `--jh-color-content-negative-hover` |
| `--jh-button-color-border-danger-focus` | The button container border-color when in focus and `appearance="danger"`. | `transparent` |
| `--jh-button-color-background-danger-hover` | The button container background-color when hovered and `appearance="danger"`. | `--jh-color-content-negative-hover` |
| `--jh-button-color-border-danger-hover` | The button container border-color when hovered and `appearance="danger"`. | `transparent` |
| `--jh-button-color-background-danger-active` | The button container background-color when active and `appearance="danger"`. | `--jh-color-content-negative-active` |
| `--jh-button-color-border-danger-active` | The button container border-color when active and `appearance="danger"`. | `transparent` |
| `--jh-button-color-background-danger-disabled` | The button container background-color when disabled and `appearance="danger"`. | `--jh-color-content-negative-enabled` |
| `--jh-button-color-border-danger-disabled` | The button container border-color when disabled and `appearance="danger"`. | `transparent` |
| `--jh-button-color-background-danger-pending` | The button container background-color when pending and `appearance="danger"`. | `--jh-color-content-negative-enabled` |
| `--jh-button-color-border-danger-pending` | The button container border-color when pending and `appearance="danger"`. | `transparent` |
| `--jh-button-label-color-text-danger-enabled` | The label text color when enabled and `appearance="danger"`. | `--jh-color-content-on-negative-enabled` |
| `--jh-button-label-color-text-danger-focus` | The label text color when in focus and `appearance="danger"`. | `--jh-color-content-on-negative-hover` |
| `--jh-button-label-color-text-danger-hover` | The label text color when hovered and `appearance="danger"`. | `--jh-color-content-on-negative-hover` |
| `--jh-button-label-color-text-danger-active` | The label text color when active and `appearance="danger"`. | `--jh-color-content-on-negative-active` |
| `--jh-button-label-color-text-danger-disabled` | The label text color when disabled and `appearance="danger"`. | `--jh-color-content-on-negative-enabled` |
| `--jh-button-icon-color-fill-danger-enabled` | The icon color when enabled and `appearance="danger"`. | `--jh-color-content-on-negative-enabled` |
| `--jh-button-icon-color-fill-danger-focus` | The icon color when in focus and `appearance="danger"`. | `--jh-color-content-on-negative-hover` |
| `--jh-button-icon-color-fill-danger-hover` | The icon color when hovered and `appearance="danger"`. | `--jh-color-content-on-negative-hover` |
| `--jh-button-icon-color-fill-danger-active` | The icon color when active and `appearance="danger"`. | `--jh-color-content-on-negative-active` |
| `--jh-button-icon-color-fill-danger-disabled` | The icon color when disabled and `appearance="danger"`. | `--jh-color-content-on-negative-enabled` |
| `--jh-button-progress-color-border-danger-pending` | The progress indicator border-color when `appearance="danger"`. | `--jh-color-content-on-negative-enabled` |
| `--jh-button-border-radius` | The button container border-radius. | `--jh-border-radius-100` |
| `--jh-button-opacity-disabled` | The button container opacity when disabled. | `--jh-opacity-disabled` |
| `--jh-button-color-focus` | The button container outline when it receives keyboard focus. | `--jh-border-focus-color` |
| `--jh-button-size` | The button width for single icon buttons, and the button height. | `--jh-dimension-600` (x-small), `--jh-dimension-800` (small), `--jh-dimension-1000` (medium), `--jh-dimension-1200` (large) |

## Dependencies

- **`jh-progress`** – Renders the progress indicator shown in place of the label and icons while the button is pending.
- **`jh-icon`** – Renders the icons slotted into the button's left and right icon slots.

## Feedback

Found an issue or have a suggestion? [Open a GitHub issue](https://github.com/Banno/jack-henry-design-system/issues) or join the conversation in [GitHub Discussions](https://github.com/Banno/jack-henry-design-system/discussions).
