<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-badge

Intent file for `jh-badge`. API facts (attributes, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Marks an element with a count or a dot to show there is something new or pending.

## Use when

- Showing an unread or pending count on a navigation item, icon button, tab, or avatar.
- Showing presence or "something changed" with a dot when the number doesn't matter.

## Don't use when

- The value is a label or category (status, type, tier). Use `jh-tag`.
- The value is a quantity the user reads as content (balance, total, line count). Render it as text.
- The thing it marks is already the main content of the view. A badge is a marker on something else, not a standalone number.
- You need the user to act on it. A badge is not interactive; put the action on the element it sits on.

## Defaults

- Omit `count` for a dot. Set `count` only when the number itself helps the user decide where to go.
- `max-count` defaults to 99 (renders `99+`). Lower it where the space is tight; don't raise it.
- A count of `0` renders `0`. Hide the badge in your own code when zero means nothing to show.
- One badge per element. Don't stack badges or put a badge on a badge's host that already has one.
- Badge paints with the negative/attention color by default. Don't recolor it to mean something else; if you need a second meaning, that's a `jh-tag`.

## Composition

- No slots. Content is `count` only.
- Badge does not position itself. Place it at the top-right of its host, overlapping the edge, with your own layout.
- Typical hosts: `jh-button` (icon-only), nav items, tabs, avatars. The host carries the meaning; the badge is decoration for it.

## Accessibility

- A number alone means nothing to a screen reader. The meaning lives in the host's accessible name ("Emails, 3 unread"); then set `aria-hidden="true"` on the badge so the count isn't announced twice.
- Non-interactive host (avatar, static icon): give the host `role="img"` and an `aria-label` that includes the badge's meaning, then hide the badge.
- Standalone badge with no host: it must label itself — `role="img"` plus `aria-label`, and never `aria-hidden`.
- Badge never announces changes. If an update should be announced, use `role="status"` on a standalone badge, or `aria-live="polite"` + `aria-atomic="true"` on the host, and update the label whenever `count` changes.

## Style hooks

Hooks are listed in the manifest under `cssProperties`.

| Zone | Lane | Notes |
|---|---|---|
| container (`--jh-badge-color-background-enabled`, `--jh-badge-border-radius`) | tune | Theme-level only. Point at semantic tokens. |
| text (`--jh-badge-color-text-enabled`) | tune | Keep contrast against the background you set. |
| count, max-count | mechanism | Change via the attribute. |
| size, font, dot dimensions, position | fixed | No hook. Position is the author's layout, not a badge property. |

## Do not

- Do not use a badge for status words or categories; that's `jh-tag`.
- Do not make a badge the only place a count appears for a screen reader user.
- Do not set `aria-hidden` on a standalone badge.
- Do not recolor badges per meaning (green for good, etc.).
- Do not rely on the badge to announce updates.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
