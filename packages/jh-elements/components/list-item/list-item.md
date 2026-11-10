<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-list-item

Intent file for `jh-list-item`. API facts (attributes, slots, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

One row in a vertical list of like objects: an account, a transaction, a contact, a setting.

## Use when

- Rendering a sequence of the same kind of thing, each with a primary line and optional secondary line, leading icon or avatar, and trailing value or action.
- Building a selectable list where one or more rows can be the current choice.
- Composing a menu or dropdown's rows (`jh-menu` uses it internally).

## Don't use when

- The data has more than two or three columns the user compares across rows. Use `jh-table`.
- Each item is a distinct block of content with its own title and actions. Use `jh-card`, one per item, only if the items are few and unlike each other.
- It's a single row with nothing above or below it. A lone list item is a layout box; use plain markup.
- The list is a set of choices in a form. Use `jh-radio-group` or `jh-checkbox-group`.

## Defaults

- Wrap items in `jh-list-group`. It supplies the list semantics and the optional subheader `label`. Bare `jh-list-item`s outside a group are a last resort.
- Use `primary-text` / `secondary-text` / `primary-metadata` / `secondary-metadata` for standard rows. Reach for the default slot only when the row needs layout the properties can't express — and then it replaces all four properties.
- Metadata is the trailing value (amount, date, count). Right-aligned, read after the text. Don't put the thing the user scans for in metadata; put it in `primary-text`.
- Non-interactive by default. Make a row interactive by adding `tabindex="0"`; that turns on hover, focus, active, selected, and disabled states. Only do this when the row does something on activation.
- `selected` is only meaningful on an interactive row. It marks the current item, not a hover.
- Dividers off by default. Turn on `show-divider` when rows are tall or dense enough that the boundary is unclear. Inset the divider to align with the text start when there's a leading icon (`divider-inset` 0–96 in steps of 8, or `--jh-divider-space-inset` on the group for all rows at once).

## Composition

- `slot="jh-list-item-left"`: one icon, avatar, or checkbox. Leading content only.
- `slot="jh-list-item-right"`: one trailing control (chevron, `jh-button` tertiary or neutral, `jh-switch`, `jh-badge`). Don't stack several.
- Default slot: custom row content; mutually exclusive with the text and metadata properties.
- `jh-divider` is imported automatically for `show-divider`. Don't add one by hand.
- Parent: `jh-list-group` (which gives the group a `label` subheader and an accessible name).

## Accessibility

- An interactive row needs an accessible name. Standard rows get it from `primary-text`; custom-slot rows must contain real text or an `aria-label`.
- Only set `tabindex="0"` on rows that act. Non-interactive rows must stay out of the tab order.
- `selected` is visual only. For a single-select list, also manage `aria-selected` or `aria-current` on the rows yourself.
- `disabled` interactive rows stay announced by assistive tech but can't be operated; use it to show something exists but isn't available.
- Give the `jh-list-group` a `label` or `accessible-label` so screen reader users hear what the list is.
- A trailing `jh-switch` or `jh-button` in the right slot is its own focus stop; don't also make the row interactive unless the row and the control do different things.

## Style hooks

Hooks are listed in the manifest under `cssProperties`, grouped by state (`-enabled`, `-hover`, `-focus`, `-active`, `-selected`, `-disabled`).

| Zone | Lane | Notes |
|---|---|---|
| container (`--jh-list-item-color-background-*`, `--jh-list-item-color-border-*`) | tune | Hover/active/selected are tints; point at semantic `container` or state tokens. |
| text (`--jh-list-item-color-text-primary-*`, `--jh-list-item-color-text-secondary-*`) | tune | |
| metadata (`--jh-list-item-metadata-color-text-primary-*`, `--jh-list-item-metadata-color-text-secondary-*`) | tune | |
| size and spacing (`--jh-list-item-size-height`, `--jh-list-item-space-padding-top/-bottom/-left/-right`) | tune | Keep a 24px minimum target on interactive rows. |
| `--jh-list-item-opacity-disabled` | tune | |
| divider, inset, selected, disabled | mechanism | Change via the attribute. |
| slot layout, text truncation, focus ring | fixed | No hook. |

## Do not

- Do not use `jh-list-item` for tabular data with columns to compare; that's `jh-table`.
- Do not put `jh-list-item`s outside a `jh-list-group` without a reason.
- Do not combine the default slot with `primary-text` or metadata properties; the properties are dropped.
- Do not add `tabindex` to rows that don't do anything on activation.
- Do not set `selected` on a non-interactive row.
- Do not add a hand-written divider element between rows.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
