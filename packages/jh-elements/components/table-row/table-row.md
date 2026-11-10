<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-table-row

Intent file for `jh-table-row`. API facts (slots, CSS hooks) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

One row of a `jh-table`: a record in the body, or the header or footer row when slotted there.

## Use when

- Inside `jh-table`, always. One row per record.

## Don't use when

- Outside `jh-table`. It has no meaning on its own.
- As a list item. Use `jh-list-item`.

## Defaults

- Body rows go in the table's default slot; the header row goes in the table's `jh-table-header` slot, the footer row in its `jh-table-footer` slot.
- Rows are not interactive. For a clickable row, put the action on a control in a cell (a link, a `jh-button`), not on the row.
- Row hover is a visual aid only; it doesn't mean the row is selectable.

## Composition

- Default slot: `jh-table-data-cell`s (body, footer) or `jh-table-header-cell`s (header). Don't mix the two in one row.
- Every row needs the same number of cells as the header. Spanning isn't supported; keep columns aligned.
- No attributes. Selection, expansion, and emphasis are author patterns built from cells.

## Accessibility

- A row is announced as a row; its cells are read with their column headers. Nothing to add.
- Don't make the row itself focusable or clickable; keyboard users need a control to land on.
- If a row represents a selected state (via a checkbox in the first cell), the checkbox carries the state; don't also restyle the row to mean "selected" without the checkbox.

## Style hooks

Hooks are listed in the manifest under `cssProperties`.

| Zone | Lane | Notes |
|---|---|---|
| row (`--jh-table-row-color-background-*`, `--jh-table-row-color-text-*`, `--jh-table-row-color-border-bottom-*`) | tune | `-hover` variants are tints; keep them subtle. |
| row height, cell spacing | fixed | Comes from `jh-table`'s `padding` and the cells. |

## Do not

- Do not use outside `jh-table`.
- Do not mix header cells and data cells in one row.
- Do not make the row clickable or focusable.
- Do not restyle a row to mean selected or expanded without a control that says so.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
