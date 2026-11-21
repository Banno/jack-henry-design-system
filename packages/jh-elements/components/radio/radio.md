<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-radio

Intent file for `jh-radio`. API facts (attributes, events, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

One option in a set where exactly one can be chosen.

## Use when

- As a child of `jh-radio-group`. That's its only intended home.

## Don't use when

- On its own. A single radio can't be unchecked; use `jh-checkbox` for a lone yes/no.
- The options are independent. Use `jh-checkbox-group`.
- The choice saves instantly. Use `jh-switch` or a segmented control pattern built from `jh-button`s.

## Defaults

- Always set `label` and `value`. A radio without `value` submits nothing when chosen.
- Don't set `name`; the group supplies it. Don't set `checked` on more than one radio; prefer `value` on the group to pick the default.
- `helper-text` on a radio is for a one-line description of that option ("Standard — arrives in 3 days"). Keep it to one line.
- `disabled` per option when that choice is unavailable right now; keep it visible so the user sees it exists.

## Composition

- No slots. Label and helper text are attributes.
- Parent: `jh-radio-group`, which owns name, group label, helper, error, validation, and orientation.
- `jh-change` fires on the radio; most code should listen on the group instead.

## Accessibility

- Label is the option's name as the user would say it; helper text is the detail.
- Keyboard movement between radios is arrow keys, handled by the group. Don't add tabindex to radios.
- `disabled` radios stay in the visual set but are skipped by arrow navigation; explain why in the option's helper text when it matters.

## Style hooks

Hooks are listed in the manifest under `cssProperties`. Input hooks carry a selection state (`-unselected-`, `-selected-`) and an interaction state (`-enabled`, `-hover`, `-focus`, `-active`, `-disabled`).

| Zone | Lane | Notes |
|---|---|---|
| ring (`--jh-radio-input-color-background-*`, `--jh-radio-input-color-border-*`, `--jh-radio-input-border-radius`) | tune | Keep the radius at 50%; a square radio reads as a checkbox. |
| dot (`--jh-radio-status-color-background-*`) | tune | Usually a `brand` or `interactive` token. |
| label, helper (`--jh-radio-label-color-text`, `--jh-radio-helper-color-text`) | tune | |
| `--jh-radio-color-focus`, `--jh-radio-opacity-disabled` | tune | |
| checked | mechanism | Set `value` on the group instead. |
| size, spacing, dot size | fixed | No hook. |

## Do not

- Do not use a radio outside `jh-radio-group`.
- Do not set `name` on individual radios.
- Do not set `checked` on more than one radio in a group.
- Do not omit `value`.
- Do not change the border radius; it's what makes it read as a radio.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
