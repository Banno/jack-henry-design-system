---
title: Button
description: Buttons enable a user to initiate a specific action.
---

# Button

Buttons enable a user to initiate a specific action, whether that's submitting a form, opening a dialog, or triggering something else in the interface. Reach for a button whenever someone needs a clear, tappable way to make something happen.

## Anatomy

1. **Button wrapper** — the container that shapes the button, including its border, corner radius, gap between icon and label, and size.
2. **Label** — the button's text.
3. **Icon** — an optional icon slotted into the left and/or right side of the button.
4. **Progress indicator and track** — replace the label and icon while the button is pending, showing that a process is underway.
5. **Focus outline** — the ring shown around the button when it receives keyboard focus.

## Variants

### Size

Sets the size of the button.

- Buttons SHOULD always be paired with comparably-sized form controls, such as `jh-input` and `jh-select` — the extra small size is the exception.

#### Extra small

- Use when a button is nested within another component and the other button sizes are too big, such as inside `jh-input`.
- Never use it outside of another component.
- Pair it with the `xsmall` icon size and `small` progress size.

#### Small

Use small where vertical space is limited.

#### Medium

Medium is the default size. Use it as the standard button instance.

#### Large

Use large when a button needs prominence. Limit its use to one per screen.

### Block

Sets the button's width to match its parent container. The property is a boolean and defaults to `false`.

#### True

- A block button expands to fill the width of its surrounding container, at any size.
- Use it when stacking multiple calls to action vertically in a container, such as a card or dialog.
- Block is independent of the button's other properties and combines with any of them.
- The label and icon stay grouped together and center horizontally as the button's width expands.
- Height and padding follow whichever size is applied to the block button; only the content area's width varies.
- The button never shrinks below the total width of its left and right padding plus its content area.

#### False

A button's width depends on its label and/or icons instead of its container.

### Appearance

Determines the button's color. See [Style hooks](#style-hooks) in the API reference for each appearance's color tokens.

#### Primary

- Primary buttons call attention to the strongest call to action within a particular context or view.
- Use only one primary button per container.

#### Secondary

- Use for most non-critical actions.
- Pair a secondary button alongside a primary button to indicate a secondary action, such as "Cancel."

#### Tertiary

- Use tertiary buttons for less prominent or independent actions.
- Pair with a primary button when there are multiple calls to action.

#### Danger

- Use danger buttons to convey destructive actions, such as "Delete" or "Remove."
- Don't use a danger appearance for anything other than a destructive action — doing so creates confusion.

### Label

The button's text.

- The label conveys the button's action — keep it concise and action-driven.
- Start the label with an imperative verb so its purpose is clear, for example "Submit" rather than "Submitting."
- The label uses Forge's `font.body.medium.1` type style for its font family, weight, size, and line height.

### Icon only

Sets the button to display only one icon.

#### True

- The button's left and right padding collapse to `0` so the button renders as a perfect square once the label is removed.
- Displays the left icon slot and hides the right icon slot.
- The button's width follows the same size scale used for its height (extra small, small, medium, and large).

#### False

- When there's no label and the button isn't icon-only, it hugs its slotted icon(s) and keeps its standard padding.
- Don't remove the label just to create an icon-only button — that produces a non-square button instead. Use the `iconOnly` property for that.
- You may remove the label and slot icons into both the left and right sides to create a "dual icon" button, but avoid it unless space is at an absolute premium.

### Link

Buttons act as a link when a hyperlink is set through the `href` property.

- Assistive technologies recognize the button as a link and announce it as such once `href` is set.
- Set `target` to specify where the linked URL opens.
- Activate a link button from the keyboard with the Enter key.

### State

#### Focus

The button includes a built-in focus outline, styled consistently with every other interactive Forge component and offset slightly from the button. See [Style hooks](#style-hooks) in the API reference for its color token.

### Pending

Set a pending state to indicate a process is underway.

- The pending state replaces the label and icon with a progress indicator, centered horizontally within the button.
- The button's width stays the same after it enters the pending state.
- A pending button can't be navigated to or activated by mouse or keyboard.
- When pending reflects a change to a live region, set `aria-busy="true"` while it's underway and `aria-busy="false"` once it's complete, so announcements wait until the update finishes.

## Accessibility

Button is designed to meet [WCAG 2.2](https://www.w3.org/TR/WCAG22/) AA success criteria:

- **[1.3.1: Info and relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html):** `type="button"` is set by default, so the browser doesn't attempt to submit form information when the button is activated.
- **[1.4.4: Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html):** Button can be resized up to 200 percent without assistive technology, without losing content or functionality.
- **[2.4.7: Focus visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html):** As an interactive component, the button includes a built-in focus ring by default.
- **[2.5.8: Target size (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html):** The pointer target is at least 24 by 24 pixels by default; keep any custom size tokens at or above that minimum too.
- **[4.1.2: Name, role, value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html):** Use `accessible-label` to set an `aria-label` where a visible label isn't available — for example, `<jh-button accessible-label="Print"><jh-icon-printer></jh-icon-printer></jh-button>`.

Additional guidance:

- The button can't be reached by keyboard navigation or interacted with by mouse when `disabled` is set, and may become undiscoverable to screen reader users as a result. Set `accessible-disabled="true"` — which applies `aria-disabled="true"` instead of the native `disabled` attribute — when a disabled button should remain discoverable to assistive technology while staying inoperable.
- When a button's `pending` state reflects a change to a live region, set `aria-busy="true"` on that region until the update completes, then set it back to `"false"`, so announcements wait until the update finishes.
- Primary, secondary, and tertiary appearances lean on brand color tokens (`color.content.brand.*`), which DESIGN.md notes aren't guaranteed to meet contrast targets the way other color concepts are — test contrast whenever these tokens are customized to match a product's brand.

## API reference

See the [Button docs on Storybook](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-button--docs) for a live, interactive reference alongside the tables below.

Import the component, then set its properties and slot in any icons:

```js
import "@jack-henry/jh-elements/components/button/button.js";
```

```js
<jh-button label="Label">
  <jh-icon-ellipsis slot="jh-button-icon-left"></jh-icon-ellipsis>
</jh-button>
```

Button depends on two other Forge components: `jh-progress` renders the indicator shown while the button is pending, and `jh-icon` renders any icon slotted into it.

### Properties

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `accessible-disabled` | `string` | — | Sets an `aria-disabled` attribute so screen readers can still perceive a disabled button. |
| `accessible-label` | `string` | — | Sets an `aria-label` to assist screen reader users when no visible label is present. |
| `appearance` | `"primary" \| "secondary" \| "tertiary" \| "danger"` | `secondary` | Determines the button's color. |
| `block` | `boolean` | `false` | Sets the button's width to match its parent container. |
| `disabled` | `boolean` | `false` | Disables the button and prevents all user interaction. May cause the button to be ignored by assistive technologies (AT) — use `accessible-disabled` instead when the button should remain perceivable to AT. |
| `href` | `string` | — | Sets the link's destination and renders the button as an anchor element. |
| `label` | `string` | — | Describes the intent of the button. |
| `name` | `string` | — | Sets the name of the button's data when submitted in a form. |
| `pending` | `boolean` | `false` | Displays a progress indicator in place of the button's content. |
| `size` | `"x-small" \| "small" \| "medium" \| "large"` | `medium` | Sets the size of the button. |
| `submit` | `boolean` | `false` | Sets the button's type to `submit`. Defaults to `type="button"`. |
| `target` | `"_blank" \| "_self" \| "_parent" \| "_top"` | — | Specifies where to open the linked URL set by `href`. |
| `value` | `string` | — | Sets the value of the button. |

### Slots

| Slot | Description |
| --- | --- |
| `jh-button-icon-left` | Inserts an icon on the left side of the button, and for single-icon buttons. |
| `jh-button-icon-right` | Inserts an icon on the right side of the button, and for single-icon buttons. |

### Style hooks

Button's color tokens follow a consistent naming pattern across its four appearances: `--jh-button-color-background-<appearance>-<state>`, `--jh-button-color-border-<appearance>-<state>`, `--jh-button-label-color-text-<appearance>-<state>`, and `--jh-button-icon-color-fill-<appearance>-<state>`, where `<state>` is `enabled`, `focus`, `hover`, `active`, or `disabled` (label and icon color don't have a pending-specific token, since the button's content is replaced by a progress indicator while pending). The tables below give each state's default value; substitute the appearance and state into the pattern above to get the exact token name.

Note: the component's current CSS still falls back to the literal CSS keyword `transparent` for several border-color custom properties below (for example `--jh-button-color-border-primary-enabled`). The spec and DESIGN.md's token rule now call for the platform-agnostic `#00000000` value instead — the two render identically, but this is worth reconciling in code, so this page notes the code's actual default alongside the spec's.

#### Primary

| State | Background color | Border color | Label text color | Icon color |
| --- | --- | --- | --- | --- |
| Enabled | `--jh-color-content-brand-enabled` | `transparent` | `--jh-color-content-on-brand-enabled` | `--jh-color-content-on-brand-enabled` |
| Focus | `--jh-color-content-brand-hover` | `transparent` | `--jh-color-content-on-brand-hover` | `--jh-color-content-on-brand-hover` |
| Hover | `--jh-color-content-brand-hover` | `transparent` | `--jh-color-content-on-brand-hover` | `--jh-color-content-on-brand-hover` |
| Active | `--jh-color-content-brand-active` | `transparent` | `--jh-color-content-on-brand-active` | `--jh-color-content-on-brand-active` |
| Disabled | `--jh-color-content-brand-enabled` | `transparent` | `--jh-color-content-on-brand-enabled` | `--jh-color-content-on-brand-enabled` |
| Pending | `--jh-color-content-brand-enabled` | `transparent` | — | — |

Progress indicator color while pending: `--jh-button-progress-color-border-primary-pending`, which defaults to `--jh-color-content-on-brand-enabled`.

#### Secondary

| State | Background color | Border color | Label text color | Icon color |
| --- | --- | --- | --- | --- |
| Enabled | `transparent` | `--jh-border-action-color` | `--jh-color-content-brand-enabled` | `--jh-color-content-brand-enabled` |
| Focus | `--jh-color-content-brand-hover` | `--jh-color-content-brand-hover` | `--jh-color-content-on-brand-hover` | `--jh-color-content-on-brand-hover` |
| Hover | `--jh-color-content-brand-hover` | `--jh-color-content-brand-hover` | `--jh-color-content-on-brand-hover` | `--jh-color-content-on-brand-hover` |
| Active | `--jh-color-content-brand-active` | `--jh-color-content-brand-active` | `--jh-color-content-on-brand-active` | `--jh-color-content-on-brand-active` |
| Disabled | `transparent` | `--jh-border-action-color` | `--jh-color-content-brand-enabled` | `--jh-color-content-brand-enabled` |
| Pending | `transparent` | `--jh-border-action-color` | — | — |

Progress indicator color while pending: `--jh-button-progress-color-border-secondary-pending`, which defaults to `--jh-color-content-brand-enabled`.

#### Tertiary

| State | Background color | Border color | Label text color | Icon color |
| --- | --- | --- | --- | --- |
| Enabled | `transparent` | `transparent` | `--jh-color-content-brand-enabled` | `--jh-color-content-brand-enabled` |
| Focus | `--jh-color-content-brand-hover` | `transparent` | `--jh-color-content-on-brand-hover` | `--jh-color-content-on-brand-hover` |
| Hover | `--jh-color-content-brand-hover` | `transparent` | `--jh-color-content-on-brand-hover` | `--jh-color-content-on-brand-hover` |
| Active | `--jh-color-content-brand-active` | `transparent` | `--jh-color-content-on-brand-active` | `--jh-color-content-on-brand-active` |
| Disabled | `transparent` | `transparent` | `--jh-color-content-brand-enabled` | `--jh-color-content-brand-enabled` |
| Pending | `transparent` | `transparent` | — | — |

Progress indicator color while pending: `--jh-button-progress-color-border-tertiary-pending`, which defaults to `--jh-color-content-brand-enabled`.

#### Danger

| State | Background color | Border color | Label text color | Icon color |
| --- | --- | --- | --- | --- |
| Enabled | `--jh-color-content-negative-enabled` | `transparent` | `--jh-color-content-on-negative-enabled` | `--jh-color-content-on-negative-enabled` |
| Focus | `--jh-color-content-negative-hover` | `transparent` | `--jh-color-content-on-negative-hover` | `--jh-color-content-on-negative-hover` |
| Hover | `--jh-color-content-negative-hover` | `transparent` | `--jh-color-content-on-negative-hover` | `--jh-color-content-on-negative-hover` |
| Active | `--jh-color-content-negative-active` | `transparent` | `--jh-color-content-on-negative-active` | `--jh-color-content-on-negative-active` |
| Disabled | `--jh-color-content-negative-enabled` | `transparent` | `--jh-color-content-on-negative-enabled` | `--jh-color-content-on-negative-enabled` |
| Pending | `--jh-color-content-negative-enabled` | `transparent` | — | — |

Progress indicator color while pending: `--jh-button-progress-color-border-danger-pending`, which defaults to `--jh-color-content-on-negative-enabled`.

#### General

| CSS custom property | What it controls | Default value |
| --- | --- | --- |
| `--jh-button-border-radius` | The button container's border radius. | `--jh-border-radius-100` |
| `--jh-button-size` | The button's height, and the width of single-icon buttons. | `--jh-dimension-600` at `size="x-small"`, `--jh-dimension-800` at `size="small"`, `--jh-dimension-1000` at `size="medium"`, `--jh-dimension-1200` at `size="large"` |
| `--jh-button-opacity-disabled` | The button container's opacity when disabled. | `--jh-opacity-disabled` |
| `--jh-button-color-focus` | The button container's outline color when it receives keyboard focus. | `--jh-border-focus-color` |

## Feedback

Have an idea that would make Button better, or found something that isn't working as expected? Let us know by opening an issue on [GitHub](https://github.com/Banno/jack-henry-design-system/issues), or join the conversation on our [GitHub discussion board](https://github.com/Banno/jack-henry-design-system/discussions).
