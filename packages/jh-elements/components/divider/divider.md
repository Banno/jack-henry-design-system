<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-divider

Intent file for `jh-divider`. API facts (attributes, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

A thin rule that separates content when spacing alone doesn't.

## Use when

- Between sections of a page or panel where the gap could be read as one block.
- Between rows in a dense list or menu, inset to the text start.
- Between a card header or footer and its body (though `jh-card` renders this for you via `show-header-divider` / `show-footer-divider`).
- Vertically between side-by-side controls in a toolbar (`orientation="vertical"`).

## Don't use when

- Whitespace already separates the content. A divider in an airy layout is noise.
- Inside `jh-card`, `jh-list-item`, or `jh-table`, which render their own; use their attributes instead.
- As a decorative line or a border on a box; use the box's border token.
- To separate every item in a loose list; prefer spacing, use dividers when rows are dense.

## Defaults

- `orientation="horizontal"`. Vertical only between inline controls; it needs a parent with a defined height.
- No inset. Set `inset` (0–96 in steps of 8) to align the divider's start with text that sits past a leading icon or avatar. For a whole list, set `--jh-divider-space-inset` on the parent instead.
- One weight, one color. Don't vary dividers to mean emphasis.

## Composition

- No slots. Place it between siblings.
- Imported automatically by `jh-card` and `jh-list-item`; import it yourself only for standalone use.

## Accessibility

- Rendered as a separator; screen readers announce it as such or skip it. Nothing to add.
- It never carries meaning on its own. If the separation matters to understanding, there should be a heading or label too.

## Style hooks

Hooks are listed in the manifest under `cssProperties`.

| Zone | Lane | Notes |
|---|---|---|
| line (`--jh-divider-color-border`, `--jh-divider-border-width`, `--jh-divider-border-style`) | tune | `border.subtle` or `divider` semantic token; 1px; solid. Dashed only for a placeholder/drop zone. |
| inset (`--jh-divider-space-inset`) | tune | Set on a parent to inset every divider inside it. |
| orientation, inset attribute | mechanism | Change via the attribute. |
| length | fixed | Fills its container. |

## Do not

- Do not add dividers where spacing already separates.
- Do not hand-place dividers inside card, list item, or table; use their attributes.
- Do not vary divider weight or color for emphasis.
- Do not use a vertical divider without a sized parent.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
