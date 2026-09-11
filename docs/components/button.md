---
title: Button
description: Buttons enable a user to initiate a specific action.
---

# Button

Buttons enable a user to initiate a specific action, whether that's submitting a form, opening a dialog, or triggering something else in the interface. Reach for a button whenever someone needs a clear, tappable way to make something happen.

## Code documentation

See the [Button docs on Storybook](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-button--docs) for implementation details, properties, and code samples.

## Anatomy and style

A button is a single wrapper element that renders its border, corner radius, and size.

1. **Button wrapper** — the container that shapes the button, including its border and corner radius, and that resizes to match the selected size variant.

| Style hook | What it controls | Default value |
| --- | --- | --- |
| `--jh-button-border-radius` | The roundness of the button's corners | `--jh-border-radius-100` |

## Variants

### Size

Size sets how tall the button renders. Aside from the extra small size, buttons SHOULD always be paired with comparably-sized form controls, such as `jh-input` and `jh-select`, so a group of controls reads as one cohesive row.

#### Extra small

Use extra small when a button is nested within another component and the other button sizes are too big for the space. Never use this size outside of another component. Pair it with the `xsmall` icon and `small` progress sizes.

| Style hook | What it controls | Default value |
| --- | --- | --- |
| `--jh-button-size` | The button's height | `--jh-dimension-600` |

#### Small

Use small where vertical space is limited.

| Style hook | What it controls | Default value |
| --- | --- | --- |
| `--jh-button-size` | The button's height | `--jh-dimension-800` |

#### Medium

Medium is the default size. Use it as the standard button instance.

| Style hook | What it controls | Default value |
| --- | --- | --- |
| `--jh-button-size` | The button's height | `--jh-dimension-1000` |

#### Large

Use large when a button needs prominence. Limit its use to one per screen so it retains that emphasis.

| Style hook | What it controls | Default value |
| --- | --- | --- |
| `--jh-button-size` | The button's height | `--jh-dimension-1200` |

## Usage

- Reserve the extra small size for buttons nested inside another component — never use it as a standalone button elsewhere in an experience.
- When you use an extra small button, pair it with the `xsmall` icon size and `small` progress size so everything inside it reads at a consistent scale.
- Choose small when vertical space is tight, medium for the standard, everyday button, and large when a single action needs visual prominence.
- Limit large buttons to one per screen — using more than one dilutes the emphasis it's meant to create.
- Aside from extra small, pair a button with form controls of a comparable size (like `jh-input` and `jh-select`) so a row of controls feels balanced.

## Accessibility

Button is designed to meet [WCAG 2.2](https://www.w3.org/TR/WCAG22/) AA success criteria, with a few things worth keeping in mind:

- **Non-text contrast (1.4.11):** The button's border uses the action border concept, which is built to meet the contrast minimum against its container.
- **Focus visible (2.4.7):** As an interactive component, the button includes a built-in focus ring by default.
- **Target size, minimum (2.5.8):** The extra small size renders at 24px, the minimum pointer target size — keep that in mind for the surrounding component when nesting an extra small button.

### What we provide

- A border that meets contrast requirements out of the box through the action border concept, so you shouldn't need to adjust it for accessibility reasons.
- A built-in focus indicator on the button, consistent with every other interactive Forge component.
- A size scale that includes a 24px extra small option, so nested, space-constrained buttons can still meet minimum target size guidance.

### Author guidance

- For an icon-only button, set `accessible-label` so screen readers announce its purpose — for example, `<jh-button accessible-label="Print"><jh-icon-printer></jh-icon-printer></jh-button>`.
- If you customize the button's border radius or override its border styling, double-check that contrast still holds against the surrounding container.
- When you nest an extra small button inside another component, make sure the parent component's layout doesn't shrink the button's overall tappable area below the 24px minimum.

## Properties

### Component API

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

### CSS custom properties

Button's color tokens follow a consistent naming pattern across its four appearances: `--jh-button-color-background-<appearance>-<state>`, `--jh-button-color-border-<appearance>-<state>`, `--jh-button-label-color-text-<appearance>-<state>`, and `--jh-button-icon-color-fill-<appearance>-<state>`, where `<state>` is `enabled`, `focus`, `hover`, `active`, or `disabled` (label and icon color don't have a pending-specific token, since the button's content is replaced by a progress indicator while pending). The tables below give each state's default value; substitute the appearance and state into the pattern above to get the exact token name.

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
