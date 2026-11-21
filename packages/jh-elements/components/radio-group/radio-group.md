<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-radio-group

Intent file for `jh-radio-group`. API facts (attributes, slots, events, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Lets the user choose exactly one option from a small set that is visible all at once.

## Use when

- Two to five mutually exclusive options the user should compare side by side: delivery speed, account type, payment method.
- The options benefit from a line of description each (use `helper-text` on the radios).

## Don't use when

- More than about five options, or options that vary by context. Use `jh-select`.
- Several may be chosen. Use `jh-checkbox-group`.
- A single yes/no. Use one `jh-checkbox` (or `jh-switch` if it saves instantly).
- The choice changes the page immediately (view toggles, filters). Use a segmented control built from `jh-button`s, not a form control.

## Defaults

- Always set `label` (the question) and `name` (the submitted field).
- Pick the default with `value` on the group, not `checked` on a child; `value` wins when both are set.
- Have a default selected unless the form needs an explicit choice (consent, irreversible actions). If none is selected, set `required` and `error-text`.
- `orientation="vertical"`. Horizontal only for two or three one-word options that fit on one line at phone width.
- `show-indicator` convention follows the form, same as `jh-input`.

## Composition

- Default slot: `jh-radio` elements only.
- Each child needs `value`; the group supplies `name`.
- The group owns label, helper text, error text, `disabled`, and validation. Children keep `label`, `value`, and their own one-line `helper-text`.
- Listen to `jh-change` on the group; the payload carries the selected `value`.

## Accessibility

- The group is one tab stop; arrow keys move between options. Don't add tabindex to children.
- Group label is the question, read before each option; keep it short and specific ("Delivery speed", not "Options").
- A required group with nothing selected fails validation on blur and announces `error-text`; always set it.
- Disabling the whole group may hide it from screen readers. Prefer disabling individual radios.

## Style hooks

Hooks are listed in the manifest under `cssProperties`. The group styles its own label, helper, error, and indicator; the radios are styled through `--jh-radio-*`.

| Zone | Lane | Notes |
|---|---|---|
| label, helper, error (`--jh-radio-group-label-color-text`, `--jh-radio-group-helper-color-text`, `--jh-radio-group-error-color-text`) | tune | |
| indicator (`--jh-radio-group-required-color-text`, `--jh-radio-group-required-color-text-optional`) | tune | |
| `--jh-radio-group-opacity-disabled` | tune | |
| orientation, value, required | mechanism | Change via the attribute. |
| spacing between options, option styling | fixed | Option styling belongs to `jh-radio`. |

## Do not

- Do not use for more than about five options; that's `jh-select`.
- Do not slot anything but `jh-radio`.
- Do not set `name` on the children.
- Do not use `checked` on a child when `value` on the group does the job.
- Do not use a radio group as a view switcher; that's buttons.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
