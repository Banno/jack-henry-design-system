<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-table

Intent file for `jh-table`. API facts (attributes, slots, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition. Rows and cells are `jh-table-row`, `jh-table-header-cell`, and `jh-table-data-cell`; each has its own intent file.

## Purpose

Shows records as rows and attributes as columns so the user can scan, compare, and sort.

## Use when

- Each record has three or more attributes the user compares across records: transactions, accounts, users, audit entries.
- The user needs to sort by a column or scan a column top to bottom.
- Numbers need to line up for comparison.

## Don't use when

- Records have one or two attributes. Use `jh-list-group` with `jh-list-item`.
- Each record is rich and unlike the others. Use `jh-card`.
- It's a key/value display for one record (a detail view). Use a definition list or a two-column layout, not a one-row table.
- The content is layout, not data. Never use a table for positioning.

## Defaults

- Give every table a caption in the `jh-table-caption` slot, or `accessible-label` when the heading above it already says what it is. Not both.
- `padding="medium"`. `small` for dense back-office grids where the user wants more rows on screen.
- `vertical-align="top"`; it's right for multi-line cells. `middle` only when every cell is one line and there's a control (checkbox, button) in the row.
- `striped` off. Turn it on for wide tables with many columns where the eye loses the row; otherwise row borders are enough.
- `sticky-header` on any table taller than the viewport. `sticky-footer` only for totals.
- `scrollable` when columns can't fit at the smallest supported width. Set `min-width` on header cells so columns don't collapse. Don't make a table scrollable just to avoid designing for narrow screens.
- Column widths: let them flow by default. Set `width` on `jh-table-header-cell` in percentages when a column must be fixed.
- Sorting is author-implemented. The header cell emits `jh-sort`; you sort the data and re-render. One sorted column at a time.

## Composition

- Default slot: `jh-table-row`s for the body.
- `slot="jh-table-header"`: one `jh-table-row` of `jh-table-header-cell`s. Required for anything but a trivial list.
- `slot="jh-table-footer"`: one `jh-table-row` for totals or summaries.
- `slot="jh-table-caption"`: short text; it's the accessible name.
- `slot="jh-table-toolbar"`: filters, search (`jh-input-search`), bulk actions. Sits above the table.
- `slot="jh-table-pagination"`: page controls. Sits below.
- Row actions: a `neutral` or `tertiary` `jh-button` in the last cell, or a `jh-menu` trigger. Never `primary`.
- Row selection: a `jh-checkbox` with `accessible-label` in the first cell; a select-all checkbox in the header with `indeterminate` for partial selection.
- Don't set `border-collapse: collapse` on the table; it breaks the layout.

## Accessibility

- A table with no caption and no `accessible-label` is announced as "table" with no name. Always provide one.
- Header cells are real column headers; screen readers read them before each cell. Keep header text short and unambiguous.
- Sortable headers become buttons; the current sort is announced. Don't add your own sort buttons inside the header.
- For `scrollable` tables, the scroll region is keyboard-focusable. Keep the first column meaningful so a user knows what row they're on when scrolled.
- Don't rely on `striped` or hover color to convey anything.

## Style hooks

Hooks are listed in the manifest under `cssProperties`. The table styles caption, stripes, focus, and row padding; cells style themselves.

| Zone | Lane | Notes |
|---|---|---|
| caption (`--jh-table-caption-color-text`) | tune | |
| stripes (`--jh-table-color-background-striped-*`, `--jh-table-color-text-striped-*`) | tune | Subtle `container` token; stripes are an aid, not a highlight. |
| row padding (`--jh-table-space-padding-vertical-medium`, `--jh-table-space-padding-vertical-small`) | tune | Prefer the `padding` attribute. |
| `--jh-table-color-focus` | tune | |
| striped, sticky, scrollable, padding, alignment | mechanism | Change via the attribute. |
| column layout, header semantics, sort icon placement | fixed | Width via `width`/`min-width` on cells, not hooks. |

## Do not

- Do not use a table for layout or for a single record's details.
- Do not ship a table without a caption or `accessible-label`.
- Do not implement sorting by reordering DOM nodes by hand; sort the data and re-render.
- Do not set `border-collapse: collapse`.
- Do not put a `primary` button in a row.
- Do not use `scrollable` as a substitute for choosing which columns matter on small screens.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
