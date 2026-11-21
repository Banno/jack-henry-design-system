<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-tag-group

Intent file for `jh-tag-group`. API facts (attributes, slots) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Lays out a set of `jh-tag`s with consistent spacing and wrapping.

## Use when

- Two or more tags appear together: applied filters, categories on a record, selected values in a form.

## Don't use when

- There's one tag. Place it directly.
- Grouping anything other than tags.
- Laying out buttons or chips that aren't `jh-tag`; use your layout.

## Defaults

- `alignment="start"`. `end` only when the group sits at the right edge of a toolbar or header.
- Let it grow by default. Set a `max-width` on the group when it must stay on one line; tags inside truncate.
- For applied-filter groups, tags are `dismissible` with `remove-on-dismiss`, and the group is a live region so removals are announced.
- Keep the set short; more than six or seven tags needs a "+N more" or a different control.

## Composition

- Default slot: `jh-tag` elements only.
- Set `aria-label` on the group ("Applied filters", "Account tags").
- When tags are added or removed dynamically, set `aria-live="polite"` and `aria-relevant="additions removals"` on the group.

## Accessibility

- Give the group an `aria-label` so the set has a name.
- With dynamic tags, the live-region attributes above are what make additions and removals audible. Without them, a removed filter disappears silently.
- Keep `aria-atomic` off unless the whole set should re-announce on each change.

## Style hooks

The group has no hooks of its own. Spacing and alignment come from the `alignment` attribute; tag styling from `--jh-tag-*`.

| Zone | Lane | Notes |
|---|---|---|
| alignment | mechanism | Change via the attribute. |
| gap between tags, wrapping | fixed | No hook. |
| tag appearance | inherit | See `tag.md`. |

## Do not

- Do not slot anything but `jh-tag`.
- Do not use for a single tag.
- Do not leave a dynamic tag group without live-region attributes.
- Do not leave the group without an `aria-label`.
