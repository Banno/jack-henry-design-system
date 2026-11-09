<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-list-group

Intent file for `jh-list-group`. API facts (attributes, slots, CSS hooks) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Wraps a set of `jh-list-item`s as one named list, with an optional subheader.

## Use when

- Any time you render `jh-list-item`s. The group gives them list semantics and a name.
- Sectioning a long list under subheaders ("Today", "Earlier"; "Checking", "Savings"): one group per section.

## Don't use when

- Wrapping anything other than `jh-list-item`s. For cards, tags, or table rows use their own containers.
- As a generic layout box. It's a list.

## Defaults

- Set `label` when a visible subheader helps the user scan; set `accessible-label` instead when the heading above the list already says what it is. One or the other, always one.
- One group per section. Several groups stacked is the sectioned-list pattern; don't nest groups.
- Divider inset for the whole list goes on the group via `--jh-divider-space-inset`, so every row's divider aligns with the text start past a leading icon.

## Composition

- Default slot: `jh-list-item` elements only.
- Parent of: `jh-list-item`. Also what `jh-select` renders for grouped options.

## Accessibility

- The group is announced as a list with its `label` or `accessible-label` as the name; items are announced with position ("3 of 8"). A group with neither label is announced as an unnamed list.
- Subheader text is the group's name, not a heading in the page outline. If the section needs to be in the document outline, put a real heading above the group as well.

## Style hooks

Hooks are listed in the manifest under `cssProperties`. The group styles only its subheader.

| Zone | Lane | Notes |
|---|---|---|
| subheader (`--jh-list-group-subheader-color-text`, `--jh-list-group-subheader-color-background`, `--jh-list-group-subheader-space-padding-left`, `--jh-list-group-subheader-space-padding-right`) | tune | Padding should match the row padding of the items below it. |
| row dividers | mechanism | `--jh-divider-space-inset` on the group, or `divider-inset` per item. |
| item styling, spacing between items | fixed | Belongs to `jh-list-item`. |

## Do not

- Do not slot anything but `jh-list-item`.
- Do not nest groups.
- Do not leave a group with no `label` and no `accessible-label`.
- Do not use the subheader as the page's section heading.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
