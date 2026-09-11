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

## Feedback

Have an idea that would make Button better, or found something that isn't working as expected? Let us know by opening an issue on [GitHub](https://github.com/Banno/jack-henry-design-system/issues), or join the conversation on our [GitHub discussion board](https://github.com/Banno/jack-henry-design-system/discussions).
