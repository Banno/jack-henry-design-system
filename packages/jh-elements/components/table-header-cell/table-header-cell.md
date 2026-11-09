<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-table-header-cell

Intent file for `jh-table-header-cell`. API facts (attributes, slots, events, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Names a column and, when sortable, lets the user sort by it.

## Use when

- Inside the `jh-table-row` slotted as `jh-table-header`, one per column.

## Don't use when

- In a body row to make a cell look bold. Use `jh-table-data-cell` and style the content.
- As a row header (first cell of each body row). Row headers aren't supported today; use a data cell with distinct content.

## Defaults

- Header text is a short noun: "Date", "Amount", "Status". No verbs, no units in parentheses unless the column needs them ("Amount (USD)").
- `horizontal-align="left"` for text; `right` for numbers and currency so digits line up with the data cells below (set the same on the column's data cells).
- `sortable` on columns a user would plausibly sort by: dates, amounts, names, status. Not on action or checkbox columns.
- `sorted="none"` on all sortable headers at load unless the data arrives pre-sorted; then set the one that matches. Only one column is sorted at a time; the component resets the others.
- Column width: set `width` (percent) here when it must be fixed; `min-width` when the table is `scrollable`.

## Composition

- Default slot: the header text. Keep it to text; icons belong in the sort slots.
- `slot="jh-table-sorted-ascending"` / `-descending"` / `-none"`: replace the sort icons. Rarely needed.
- Emits `jh-sort` with the column and new state. Your handler sorts the data and re-renders; the `sorted` attribute updates itself.
- For a select-all column, the header cell holds a `jh-checkbox` with `accessible-label="Select all"` and no header text.

## Accessibility

- Rendered as a column header; screen readers announce it before each cell in the column. Make the text meaningful out of context.
- A `sortable` header renders a button and announces the sort state. Don't nest another button inside it.
- Don't leave a header cell empty except for a select-all or actions column; give those an `accessible-label` on the control or visually hidden text.
- Keep the sort icon slots as icons only, `aria-hidden="true"`.

## Style hooks

Hooks are listed in the manifest under `cssProperties`. Color hooks carry an interaction state (`-enabled`, `-hover`, `-focus`, `-active`, `-selected`); `-selected` is the currently sorted column.

| Zone | Lane | Notes |
|---|---|---|
| cell (`--jh-table-header-cell-color-background-*`, `--jh-table-header-cell-color-text-*`) | tune | Header background is usually one step up from the table surface. |
| borders (`--jh-table-header-cell-color-border-*`, `--jh-table-header-cell-border-*-style`, `--jh-table-header-cell-border-*-width`) | tune | Bottom border is the one that matters; leave the others at zero unless the design calls for a grid. |
| sort icon (`--jh-table-header-cell-icon-color-fill-*`) | tune | |
| padding (`--jh-table-header-cell-space-padding-*`) | tune | Prefer the table's `padding` attribute for standard density. |
| `--jh-table-header-cell-color-focus` | tune | |
| sortable, sorted, alignment | mechanism | Change via the attribute. |
| sort button semantics, icon placement | fixed | No hook. |

## Do not

- Do not use header cells in body rows.
- Do not make action or checkbox columns `sortable`.
- Do not nest interactive elements inside a sortable header.
- Do not set `sorted` on more than one header at once.
- Do not leave a header cell with no name and no labeled control.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
