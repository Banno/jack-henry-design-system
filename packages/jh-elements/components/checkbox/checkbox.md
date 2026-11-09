<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-checkbox

Intent file for `jh-checkbox`. API facts (attributes, events, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Lets the user turn one option on or off as part of a form.

## Use when

- A single yes/no the form submits: accept terms, remember me, include this item.
- One of several independent options inside `jh-checkbox-group`.
- A "select all" or per-row selector in a list or table, where `indeterminate` shows a partial selection.

## Don't use when

- The change takes effect immediately with no submit (a setting that saves on toggle). Use `jh-switch`.
- Only one of the options can be chosen. Use `jh-radio-group`.
- There are more than about seven options. Use `jh-select` with multi-select handled in your own logic, or a filterable list.

## Defaults

- Always set `label`. The label is the clickable target and the accessible name. Use `accessible-label` only for a row selector with no room for text.
- Set `name` on anything that submits; a checkbox without `name` is dropped from the form. Set `value` or the form receives `on`.
- Unchecked by default. Pre-check only when the safe, expected answer is yes; never pre-check consent or opt-in.
- `required` on a single checkbox means "must be checked" (terms, acknowledgements). Pair it with `error-text`.
- `indeterminate` is visual only: it signals a mixed child selection and clears to checked on first interaction. Set it from your own logic; it doesn't submit.
- `show-indicator` follows the same convention as `jh-input`: mark the exception for the form, not every field.

## Composition

- No slots. Label and helper text are attributes.
- Inside `jh-checkbox-group`, the group owns the label, helper text, error text, and validation; leave those off the children.
- Standalone, the checkbox owns its own helper and error text.
- Listen to `jh-change` for `checked` and `value`.

## Accessibility

- Label text should read as a statement that is true when checked ("Send me a receipt"), not a question.
- `helper-text` renders only when `label` is set.
- `disabled` may hide the checkbox from screen readers. If the user should know the option exists, explain in surrounding text instead of disabling.
- For an indeterminate "select all," the accessible state is announced as mixed; keep the label the same across all three states.
- Keep the label short; long legal text goes in `helper-text` or beside the checkbox as prose with a link.

## Style hooks

Hooks are listed in the manifest under `cssProperties`. Input hooks carry a selection state (`-unselected-`, `-selected-`, `-indeterminate-`) and an interaction state (`-enabled`, `-hover`, `-focus`, `-active`, `-disabled`).

| Zone | Lane | Notes |
|---|---|---|
| input box (`--jh-checkbox-input-color-background-*`, `--jh-checkbox-input-color-border-*`, `--jh-checkbox-input-border-radius`) | tune | Selected background is a `brand` or `interactive` semantic token; keep 3:1 against the page. |
| check mark (`--jh-checkbox-status-color-border-*`) | tune | Usually `content.on-brand`. |
| label, helper, error (`--jh-checkbox-label-color-text`, `--jh-checkbox-helper-color-text`, `--jh-checkbox-error-color-text`) | tune | |
| `--jh-checkbox-color-focus`, `--jh-checkbox-opacity-disabled` | tune | |
| checked, indeterminate, required | mechanism | Change via the attribute. |
| box size, spacing to label, focus ring shape | fixed | No hook. 24px target is enforced by the component. |

## Do not

- Do not use a checkbox for an immediate on/off setting; that's `jh-switch`.
- Do not use several checkboxes where only one may be chosen.
- Do not omit `label` or `name` on a submitting checkbox.
- Do not pre-check consent, marketing, or opt-in boxes.
- Do not put a link inside `label`; put it in surrounding prose.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
