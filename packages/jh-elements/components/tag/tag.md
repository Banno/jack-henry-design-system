<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-tag

Intent file for `jh-tag`. API facts (attributes, slots, events, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Labels an item with a short word that categorizes or describes it: a status, a type, a filter that's applied.

## Use when

- Status on a record ("Pending", "Posted", "Overdue") in a table cell, card header, or list item.
- Category or type ("Checking", "Business", "Beta").
- An applied filter or selected value the user can remove (`dismissible`).
- A link to a category page (`href`).

## Don't use when

- The value is a count or a "something new" dot. Use `jh-badge`.
- The value is a quantity the user reads as data. Plain text.
- It's an action ("Save", "Add"). Use `jh-button`.
- The user toggles it on and off in place (a filter chip that selects). Set `tabindex` for an interactive tag, but if it's really a multi-select, use `jh-checkbox-group`.

## Defaults

- Always set `label`. One or two words, a noun or a state, never a sentence.
- `size="small"` inside tables, list items, and card headers. `medium` standing alone or in a filter bar.
- Informational by default: no `tabindex`, no `href`. Add one only when the tag does something.
- `dismissible` for applied filters and user-added values. Set `dismiss-button-accessible-label` ("Remove Checking filter"), and `tooltip-label` if the X needs a visible hint.
- `remove-on-dismiss` when the tag's removal is the whole action. Leave it off when you need to update state first; the `jh-dismiss` event fires either way.
- `href` makes the tag a link; set `target` only for external destinations. Don't combine `href` with `tabindex`.
- Tags render on the neutral container by default. Don't recolor per status unless the design system defines status tag appearances; today it doesn't.

## Composition

- `slot="jh-tag-icon"`: one small `jh-icon-*`, `aria-hidden="true"`, left of the label.
- `slot="jh-tag-dismiss-icon"`: replace the X. Rarely needed.
- Several tags together go in `jh-tag-group`, never loose in a flex div.
- `jh-button`, `jh-icon-xmark`, and `jh-tooltip` are imported for the dismiss button.

## Accessibility

- The label is the accessible name. Icons in the slot are decorative.
- A dismissible tag's X is a separate button with its own name from `dismiss-button-accessible-label`; the name should say what's removed.
- An interactive tag (`tabindex="0"`) needs a purpose a screen reader can infer; if it toggles, manage `aria-pressed` yourself.
- `href` is rendered unsanitized; validate untrusted URLs against a scheme allowlist.
- Status conveyed by a tag is already text; don't also rely on color.

## Style hooks

Hooks are listed in the manifest under `cssProperties`; container and dismiss hooks carry interaction states (`-enabled`, `-hover`, `-focus`, `-active`).

| Zone | Lane | Notes |
|---|---|---|
| container (`--jh-tag-color-background-`, `--jh-tag-color-border-`, `--jh-tag-color-text-`, `--jh-tag-border-radius`) | tune | Neutral `container` tokens by default. |
| icon (`--jh-tag-icon-color-fill-`) | tune | |
| dismiss button (`--jh-tag-dismiss-`) | tune | |
| `--jh-tag-color-focus` | tune | |
| size, dismissible, href | mechanism | Change via the attribute. |
| padding, font, max width, truncation | fixed | No hook today. |

## Do not

- Do not use a tag for counts; that's `jh-badge`.
- Do not write sentences in `label`.
- Do not set both `href` and `tabindex`.
- Do not make a tag dismissible without `dismiss-button-accessible-label`.
- Do not recolor tags per status by hand.
- Do not place multiple tags outside a `jh-tag-group`.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
