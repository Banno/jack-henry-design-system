<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-button

Intent file for `jh-button`. API facts (attributes, slots, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Lets a user initiate a specific action.

## Use when

- The user is triggering an action: save, submit, open a dialog, run a process.
- The control needs button chrome (fill, border, fixed height) to read as actionable.
- A link needs to look and behave like a button in a toolbar or form (set `href`; the element then has link semantics).

## Don't use when

- The action is navigation inside running text. Use a link element, not a button with `href`.
- You need a toggle that stays on or off. Use `jh-switch` or `jh-checkbox`.
- You need a selectable chip or filter token. Use `jh-tag`.
- You need a menu trigger inside a menu. Use `jh-menu`'s own items.

## Defaults

- `appearance="neutral"` is the everyday button: toolbars, row actions in `jh-table`, secondary controls, anything that should not draw attention.
- One `primary` per view. It marks the single main action on the screen or in the dialog.
- `secondary` only sits next to a `primary` (cancel beside save). On its own it reads as the main action and shouldn't.
- `tertiary` where a border would be visual noise: inline in dense lists, inside cards, in table cells.
- `danger` only for destructive, hard-to-undo actions (delete, remove, revoke). Not for "stop" or "cancel".
- `tone` colors a primary, secondary, or tertiary button: `brand` (the default), `neutral`, or `danger`. `appearance="danger"` and `appearance="neutral"` already carry their color, so `tone` leaves them as they are.
- `size="medium"` unless the container forces otherwise. `x-small` exists only for nesting inside other components such as `jh-input`; never place it on its own.
- The manifest default is still `secondary` for compatibility. Set `appearance` explicitly on every button.

## Composition

- `label` is the visible text. Prefer a verb ("Save", "Add account"), not a noun.
- `slot="jh-button-icon-left"` and `slot="jh-button-icon-right"` take a single `jh-icon-*`. Use the left slot for a leading icon and for icon-only buttons; use the right slot for a trailing affordance (chevron, external link).
- Icon-only button: put the icon in the left slot, omit `label`, and set `accessible-label`.
- `pending` replaces the contents with `jh-progress` and keeps the width. `jh-progress` is imported automatically; do not add it manually.
- `block` makes the button fill its container. Use for full-width mobile actions and stacked dialog footers, not for buttons in rows.
- In forms, set `submit` on the one button that submits; all others stay `type="button"` by default.

## Accessibility

- Every button needs an accessible name: visible `label`, or `accessible-label` when there is no visible text.
- `disabled` removes the button from the tab order and may hide it from screen readers. When a disabled button should stay discoverable (explaining why it's disabled, for instance), use `accessible-disabled="true"` instead.
- With `href` set, the element announces as a link and activates on Enter only, not Space. Don't use `href` for actions that are not navigation.
- When `pending` reflects a live region updating, set `aria-busy="true"` on that region until the process completes.
- Custom sizing through hooks must keep a 24×24 CSS px minimum target.
- `href` is rendered unsanitized. Validate URLs from untrusted sources against an allowlist of schemes.

## Style hooks

Hooks are listed in the manifest under `cssProperties`. Most are named `--jh-button-<zone>-<property>-<appearance>-<state>`. A primary, secondary, or tertiary button with `tone="neutral"` or `tone="danger"` adds the tone: `--jh-button-<zone>-<property>-<appearance>-<tone>-<state>`.

| Zone | Lane | Notes |
|---|---|---|
| container (`--jh-button-color-background-*`, `--jh-button-color-border-*`) | tune | Per appearance and state. Point at semantic tokens, not primitives or hex. |
| label (`--jh-button-label-color-text-*`) | tune | Must keep contrast against the container you set. |
| icon (`--jh-button-icon-color-fill-*`) | tune | Usually tracks label color. |
| progress (`--jh-button-progress-*`) | tune | Only visible while `pending`. |
| `--jh-button-border-radius`, `--jh-button-size` | tune | Size change must keep the 24px target minimum. |
| `--jh-button-opacity-disabled` | tune | |
| appearance, tone, size, block | mechanism | Change via the attribute, not by restyling. |
| padding, font, focus ring, internal layout | fixed | No hook; do not override internals. |

## Do not

- Do not put two `primary` buttons in the same view.
- Do not use `secondary` without a `primary` beside it.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
- Do not restyle a button through its shadow DOM or by overriding `jh-button` internal selectors.
- Do not use `x-small` outside another component.
- Do not use `href` for non-navigation actions.
- Do not use `danger` for cancel, close, or stop.
- Do not set `tone` to recolor `appearance="danger"` or `appearance="neutral"`. Those appearances already include their color.
- Do not ship an icon-only button without `accessible-label`.
