<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-table-data-cell

Intent file for `jh-table-data-cell`. API facts (attributes, slots, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

One value in a `jh-table` body or footer row.

## Use when

- Inside a body or footer `jh-table-row`, one per column.

## Don't use when

- In the header row. Use `jh-table-header-cell`.
- Outside a `jh-table-row`.

## Defaults

- Cell content is text by default. Keep it short; long text wraps and `vertical-align="top"` on the table keeps rows readable.
- `horizontal-align` matches the column's header cell: `right` for numbers and currency, `left` for everything else, `center` almost never.
- Empty cells: render an em dash or "—", not nothing, so the column stays readable and screen readers don't skip it silently.
- Status in a cell: use `jh-tag`, one per cell. Counts: text, not `jh-badge`.
- Actions: one `neutral` or `tertiary` `jh-button`, or a `jh-menu` trigger, in the last column. Not several buttons per row.
- Selection: one `jh-checkbox` with `accessible-label` naming the row, in the first column.
- Links: the record's primary identifier (name, ID) is the link, nothing else in the row.
- Footer cells hold totals or summaries; align and format them like the column above.

## Composition

- Default slot: any content. Text, `jh-tag`, `jh-button`, `jh-checkbox`, `jh-icon`, a link.
- Width is controlled from the header cell; don't set `width` on data cells. `min-width` only when the table is `scrollable` and the header doesn't set it.
- `white-space: nowrap` on cells that must stay on one line (dates, amounts, IDs).

## Accessibility

- Each cell is read with its column header. If the content is an icon alone, give it an `accessible-label` or visually hidden text.
- A checkbox in a cell needs `accessible-label` that identifies the row ("Select transaction 4421"), not "Select".
- Don't convey meaning by cell color alone; pair it with text or a `jh-tag`.
- Keep one focusable control per cell at most, so Tab order through the table stays predictable.

## Style hooks

Hooks are listed in the manifest under `cssProperties`.

| Zone | Lane | Notes |
|---|---|---|
| cell (`--jh-table-data-cell-color-background`, `--jh-table-data-cell-color-text`) | tune | Background normally transparent; rows handle hover and stripes. |
| borders (`--jh-table-data-cell-color-border-*`, `--jh-table-data-cell-border-*-style`, `--jh-table-data-cell-border-*-width`) | tune | Leave at zero except bottom unless the design is a full grid. |
| padding (`--jh-table-data-cell-space-padding-*`) | tune | Prefer the table's `padding` attribute. |
| alignment | mechanism | Change via the attribute, matched to the header. |
| cell semantics, width | fixed | Width comes from the header cell. |

## Do not

- Do not use data cells in the header row.
- Do not leave a cell empty; render a dash.
- Do not put more than one action button in a cell.
- Do not set `width` on data cells; set it on the header.
- Do not use cell background color as the only signal of status.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
