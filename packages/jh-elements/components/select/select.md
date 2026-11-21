<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-select

Extends `jh-input`'s field chrome (label, helper, error, size, indicator rules in `input.md` apply) but is a picker, not a text field. This file covers choice and composition.

## Purpose

Lets the user pick one option from a predefined list.

## Use when

- There are more than about five options, or the options vary by context (accounts, categories, states, templates).
- The list is long enough that typing to filter helps (set `searchable`).
- The user may need to add a value not in the list (`searchable` + `allow-custom`).

## Don't use when

- Five or fewer fixed options that fit on screen. Use `jh-radio-group`; the choices are visible without a click.
- The user picks several. There is no multi-select here; use `jh-checkbox-group`.
- The value is free text with suggestions. That's a search or lookup pattern on `jh-input-search`, unless `allow-custom` covers it.
- The options are actions, not values. Use `jh-menu`.

## Defaults

- Pass options via the `.options` property (array of `{ label, value }`), never as child elements. Flat lists render `jh-list-item`s; grouped options (`{ label, options: [...] }`) render `jh-list-group`s.
- Control selection with `value`. Use `selected: true` on an option only as the initial default when no `value` is set; once `value` exists the flag is ignored.
- Include an empty option (`{ label: "Select…", value: "" }`) only when "nothing chosen" is a valid state. For required fields, leave it out and set `required`.
- `searchable` once the list passes roughly ten items. Set `no-results-text` to something specific ("No accounts match").
- `allow-custom` only with `searchable`, and only when a new value is legitimately allowed (a new tag, a new payee). Listen for `jh-custom-add`.
- `menu-position="bottom"`; it flips automatically when there's no room. Set `flip-disabled` only inside a fixed-height container where flipping would clip.
- Disable an option with `disabled: true` instead of removing it when the user should see it exists.

## Composition

- `slot="jh-select-trigger-left"`: one icon, `aria-hidden="true"`.
- `slot="jh-select-trigger-open"` / `-closed"`: replace the chevrons. Rarely needed.
- The menu renders from `options` using `jh-list-group` and `jh-list-item`; don't try to slot those in.

## Accessibility

- `label` is the accessible name of the combobox. Required.
- Keyboard: arrows move, Enter selects, Escape closes, typing filters when `searchable`. Don't add your own key handling.
- Group labels in grouped options are announced; keep them short nouns.
- Set `invalid` + `error-text` for required-but-empty on submit; the select doesn't validate until blur.

## Style hooks

Hooks are listed in the manifest under `cssProperties`. Select has its own set, mirroring input's field hooks plus a menu and item zone.

| Zone | Lane | Notes |
|---|---|---|
| field (`--jh-select-input-field-color-background`, `--jh-select-input-field-color-border-*`, `--jh-select-input-field-border-radius`, `--jh-select-input-color-focus`) | tune | Keep in step with `--jh-input-field-*` so selects and inputs match in a form. |
| text (`--jh-select-label-color-text`, `--jh-select-value-color-text`, `--jh-select-helper-color-text`, `--jh-select-error-color-text`, `--jh-select-required-color-text`, `--jh-select-optional-color-text`, `--jh-select-no-results-color-text`) | tune | |
| icon (`--jh-select-icon-color-fill`) | tune | |
| menu (`--jh-select-menu-color-background`, `--jh-select-menu-border-radius`, `--jh-select-menu-shadow`, `--jh-select-menu-space-padding`, `--jh-select-menu-size-*`, `--jh-select-menu-z-index`) | tune | Background should be a raised `container` token. |
| item (`--jh-select-item-color-background-*`, `--jh-select-item-color-border-selected`, `--jh-select-item-color-focus`, `--jh-select-item-color-text`, `--jh-select-item-icon-color-fill`, `--jh-select-item-size-height`, `--jh-select-item-space-padding-*`) | tune | Keep in step with `--jh-list-item-*`. |
| `--jh-select-opacity-disabled` | tune | |
| searchable, custom values, menu position | mechanism | Change via the attribute. |
| menu rendering, keyboard behavior, option markup | fixed | No hook. |

## Do not

- Do not use for five or fewer fixed options; that's `jh-radio-group`.
- Do not use for multi-select; that's `jh-checkbox-group`.
- Do not pass options as child elements.
- Do not set `allow-custom` without `searchable`.
- Do not use `selected: true` to change selection after the first render; set `value`.
- Do not add your own keyboard handlers to the trigger.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
