<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-input

Intent file for `jh-input`. API facts (attributes, slots, events, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition. The typed inputs (`jh-input-currency`, `-email`, `-number`, `-password`, `-search`, `-telephone`, `-textarea`, `-url`) and `jh-select` extend this element and inherit these rules.

## Purpose

Collects a single line of free text from the user.

## Use when

- The value is text the user types and no typed input fits: a name, a memo, a reference number, a street address line.
- You need the full set of field affordances: label, helper text, error text, character count, clear button, prefix/suffix.

## Don't use when

- The value has a known shape. Use the typed input: `jh-input-currency`, `jh-input-email`, `jh-input-number`, `jh-input-password`, `jh-input-search`, `jh-input-telephone`, `jh-input-url`. They set the right keyboard, validation, and formatting for you.
- The value is multi-line. Use `jh-input-textarea`.
- The user picks from a fixed set. Use `jh-select`, or `jh-radio-group` when there are five or fewer visible options.
- The value is on/off. Use `jh-switch` or `jh-checkbox`.
- It's a search field in a toolbar. Use `jh-input-search`.

## Defaults

- Always set `label`. It is the visible label and the accessible name. Use `accessible-label` only when the layout truly cannot show a label (a single search field with an icon), never to skip one.
- `size="medium"` in forms. `small` for filters and inline table controls. `large` for a single prominent field on a page.
- Mark the exception, not the rule: in a form where most fields are required, set `show-indicator` without `required` on the optional ones. In a form where most are optional, set `show-indicator` with `required` on the required ones. Pick one convention per form.
- `helper-text` is for format or guidance the user needs *before* typing ("As it appears on your ID"). `error-text` is for what went wrong *after*. Don't put the same sentence in both.
- `show-clear-button` on fields users retype often (search, filters, lookups). Off for fields with validated formats where clearing is rarely the intent.
- `show-char-count` only when `maxlength` is set and the limit is tight enough that users will hit it.
- `input-mask` only for fixed-length, fixed-position formats (SSN, phone). Never for currency or email; those vary in length.
- `readonly` shows a value the user can see and copy but not change, and it still submits with the form. `disabled` removes the field from the form entirely. Prefer `readonly` for display-only data in an editable form.

## Composition

- `slot="jh-input-left"` / `slot="jh-input-right"`: an icon or a `jh-button`. Slotted buttons are forced to `x-small`; set `appearance="tertiary"` on them. Set `aria-hidden="true"` on purely decorative icons.
- `prefix` / `suffix` are text, not slots: currency symbols, units, percent. They sit inside the slots, next to the value.
- `slot="jh-input-clear-button"`: replaces the icon inside the built-in clear button. Rarely needed.
- `jh-button` and `jh-icon-circle-xmark` are imported automatically for the clear button. Don't import them for that purpose.
- Validation runs on blur from `required`, `minlength`, `maxlength`, and `pattern`. It sets `invalid` and shows `error-text` for you. For server-side or cross-field validation, set `invalid` and `error-text` yourself.
- Events: listen to `jh-input` for every keystroke, `jh-change` for committed values on blur. With a mask, `e.detail.state.value` is formatted and `e.detail.state.rawValue` is not.

## Accessibility

- `label` is the accessible name. If you must use `accessible-label`, the text should still say what the field is for, not just "Input".
- `helper-text` renders only when `label` is set. It is associated with the field automatically.
- `disabled` fields may be skipped by screen readers entirely. If the user needs to know the field exists and why it's off, keep it `readonly` with helper text instead.
- `invalid` sets `aria-invalid` and announces `error-text`. Set `error-text` whenever you set `invalid`; an invalid field with no message is a dead end.
- Set `autocomplete` on identity and address fields (`name`, `email`, `tel`, `street-address`). Set `inputmode` and `enterkeyhint` when the typed input doesn't already handle it.
- Don't rely on `prefix`/`suffix` alone to convey units; say it in the label or helper text too.

## Style hooks

Hooks are listed in the manifest under `cssProperties`. Border and clear-button hooks carry a state suffix (`-enabled`, `-hover`, `-focus`, `-error`, `-disabled`); the rest are single values.

| Zone | Lane | Notes |
|---|---|---|
| field (`--jh-input-field-color-background`, `--jh-input-field-color-border-*`, `--jh-input-field-border-radius`, `--jh-input-color-focus`) | tune | Point at semantic tokens. Background hook does not apply when `readonly`. |
| value, prefix, suffix (`--jh-input-value-color-text`, `--jh-input-prefix-color-text`, `--jh-input-suffix-color-text`) | tune | |
| label, helper, error, counter, indicator (`--jh-input-label-color-text`, `--jh-input-helper-color-text`, `--jh-input-error-color-text`, `--jh-input-counter-color-text`, `--jh-input-required-color-text`, `--jh-input-optional-color-text`) | tune | Error color should stay a `negative` semantic token. |
| clear button (`--jh-input-clear-*`) | tune | |
| `--jh-input-size`, `--jh-input-opacity-disabled` | tune | Size change must keep a 24px minimum target. |
| size, slots visibility, alignment, indicators | mechanism | Change via the attribute. |
| padding, font, focus ring, internal layout | fixed | No hook; do not override internals. Small-size horizontal padding is a known open item. |

## Do not

- Do not use `jh-input` where a typed input exists for the value.
- Do not omit `label`.
- Do not use `accessible-label` to avoid showing a label in a form.
- Do not use `input-mask` for variable-length formats.
- Do not set `invalid` without `error-text`.
- Do not use `disabled` for display-only values that should still submit; use `readonly`.
- Do not put the same text in `helper-text` and `error-text`.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
