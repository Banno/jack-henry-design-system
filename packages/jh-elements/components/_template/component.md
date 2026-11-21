<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-NAME

Intent file for `jh-NAME`. The API (attributes, slots, events, CSS hooks) lives in `custom-elements.json`; do not restate it here. This file says what the component is for and how to choose and compose it. Keep every section; write "None." rather than deleting one. Short bullets, no narrative.

## Purpose

One sentence. What a user accomplishes with it.

## Use when

- Situations this is the right component for.

## Don't use when

- Situations that look similar but call for something else. Name the alternative with its tag.

## Defaults

- Which variant/appearance/size to reach for first, and the rule that overrides it.
- Rules about how many may appear together, if any.

## Composition

- What goes in each slot, by slot name (`slot="..."`). Required vs optional children by tag.
- What it must be inside of, or must not be inside of.

## Accessibility

- Author obligations that the component cannot enforce (labels, focus order, live regions).
- Attributes that change semantics (role, aria) and when to set them.

## Style hooks

Hooks are listed in the manifest under `cssProperties`. Group them here by anatomy zone and say which lane each zone is in:

- **Tune** — set the hook freely to fit a theme.
- **Mechanism** — change via a supported attribute instead of a hook.
- **Fixed** — not a hook; do not override.

| Zone | Lane | Notes |
|---|---|---|
| container | tune | |

## Do not

- Hard rules an agent must not break. Each one a single line.
