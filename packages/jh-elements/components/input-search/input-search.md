<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-input-search

Extends `jh-input`; every rule in `input.md` applies. This file covers only what differs.

## Purpose

Collects a search or filter query, with the search icon and clear affordance built in.

## Use when

- A toolbar, header, or panel search that filters a list, table, or page.
- A lookup field where the user types part of a name or number to find a record.

## Don't use when

- The user is picking from a known list. Use `jh-select` with `searchable`.
- The field is part of a form that submits data, not a query. Use `jh-input`.

## Defaults

- The magnifying-glass icon is imported and placed for you. Don't add another in `jh-input-left`.
- `size="small"` in toolbars and above tables; `medium` as a page-level search.
- Turn on `show-clear-button`; search is the one field users retype most.
- Often used without a visible label. If so, set `accessible-label` to what is being searched ("Search transactions"), not just "Search".
- Fire the search on `jh-input` (as-you-type) for client-side filtering, on `jh-change` or Enter for server calls.

## Composition

- Same slots as `jh-input`; left slot is taken by the search icon by default.
- Set `enterkeyhint="search"` so mobile keyboards show the right key.

## Accessibility

- Wrap a page-level search in `<form role="search">` so it's a landmark.
- When results update live, announce the count in a polite live region elsewhere; the input doesn't.

## Style hooks

No hooks of its own. Use `--jh-input-*` per `input.md`.

| Zone | Lane | Notes |
|---|---|---|
| all | inherit | See `input.md`. |

## Do not

- Do not use `jh-input` with a hand-placed magnifying-glass icon.
- Do not use a search field to pick from a fixed list; that's `jh-select`.
- Do not leave it with no label and no `accessible-label`.
