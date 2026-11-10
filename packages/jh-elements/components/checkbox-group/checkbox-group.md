<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-checkbox-group

Intent file for `jh-checkbox-group`. API facts (attributes, slots, events, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Groups related checkboxes under one label so the user can pick any number of them, validated as a set.

## Use when

- Two to about seven independent options that belong to one question: notification channels, account types to include, features to enable.
- "Pick at least one" or "pick up to N" rules apply (`min-required`, `max-required`).

## Don't use when

- Only one option may be chosen. Use `jh-radio-group`.
- The options don't share a question; two unrelated yes/no items are two standalone `jh-checkbox`es.
- More than about seven options, or options that vary per user. Use `jh-select` or a filterable list.
- Each option saves immediately. Use a list of `jh-switch`es.

## Defaults

- Always set `label`: it's the question the options answer ("Notify me by").
- `orientation="vertical"`. Horizontal only for two or three short labels that fit on one line at phone width.
- `required` means at least one; `min-required` and `max-required` for anything stricter. Say the rule in `helper-text` ("Choose up to 3").
- Validation runs on blur from the whole group and sets `invalid` + shows `error-text`; set `error-text` whenever any constraint is set.
- `show-indicator` convention follows the form, same as `jh-input`.

## Composition

- Default slot: `jh-checkbox` elements only. Anything else breaks spacing and semantics.
- Each child needs `name` and `value` to submit; the group doesn't supply them.
- The group owns label, helper text, error text, and `disabled`; children keep only their own `label`, `name`, `value`, `checked`.
- Listen to `jh-change` on the group for the current selection; it reports both the changed child and the set.

## Accessibility

- The group label is announced before each option. Make it a noun phrase the options complete.
- Keyboard: Tab moves between checkboxes (unlike radios, each is its own stop). Don't add roving tabindex.
- With `min-required` / `max-required`, say the rule in `helper-text` before the user acts, not only in `error-text` after.
- Disabling the group disables every child and may hide the set from screen readers; prefer disabling individual children with an explanation.

## Style hooks

Hooks are listed in the manifest under `cssProperties`. The group styles only its own label, helper, error, and indicator; the boxes are styled through `--jh-checkbox-*`.

| Zone | Lane | Notes |
|---|---|---|
| label, helper, error (`--jh-checkbox-group-label-color-text`, `--jh-checkbox-group-helper-color-text`, `--jh-checkbox-group-error-color-text`) | tune | |
| indicator (`--jh-checkbox-group-required-color-text`, `--jh-checkbox-group-required-color-text-optional`) | tune | |
| `--jh-checkbox-group-opacity-disabled` | tune | |
| orientation, required counts | mechanism | Change via the attribute. |
| spacing between options, option styling | fixed | Option styling belongs to `jh-checkbox`. |

## Do not

- Do not slot anything but `jh-checkbox` into the group.
- Do not use for single-choice; that's `jh-radio-group`.
- Do not put helper or error text on the children; it belongs on the group.
- Do not set `max-required` without saying the limit in `helper-text`.
- Do not go horizontal with labels that wrap on a phone.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
