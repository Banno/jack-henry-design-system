<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-input-textarea

Extends `jh-input`; every rule in `input.md` applies. This file covers only what differs.

## Purpose

Collects multi-line, free-form text.

## Use when

- Notes, memos, descriptions, messages, anything the user may write more than a sentence of.

## Don't use when

- The value is one line. Use `jh-input`; a textarea for a short value invites essays.
- The value has structure (address lines, list of items). Use several `jh-input`s or a repeatable row.

## Defaults

- `rows` sets the starting height; pick the typical length, not the maximum (3 for a memo, 6 for a message).
- `auto-grow` for chat-like or note fields where the user shouldn't have to scroll inside the box. It removes the native resize handle.
- `no-resize` is on by default. Turn it off only when auto-grow is off and the layout can absorb a user-resized box.
- Set `maxlength` and `show-char-count` when the backend has a limit; users will hit it in a textarea.
- `cols` only with `wrap="hard"`, which is rare. Width comes from the container.

## Composition

- Left/right slots exist but sit at the top of a tall field; leave them empty.
- `prefix` / `suffix` don't make sense here; don't set them.

## Accessibility

- Same label rules as `jh-input`. A textarea with no visible label is a bug, not a style choice.
- With a character limit, the counter is visual; the `jh-maxlength` event is your cue to set `invalid` + `error-text` so the limit is announced.

## Style hooks

Inherits `--jh-input-*`. Adds one.

| Zone | Lane | Notes |
|---|---|---|
| field min height (`--jh-input-textarea-field-dimension-min-height`) | tune | Prefer `rows` for standard sizing. |
| everything else | inherit | See `input.md`. |

## Do not

- Do not use for single-line values.
- Do not set `prefix`, `suffix`, or `input-mask` on a textarea.
- Do not combine `auto-grow` with a fixed `rows` expecting a cap; use `maxlength` to bound length.
