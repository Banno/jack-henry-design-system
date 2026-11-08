<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-input-email

Extends `jh-input`; every rule in `input.md` applies. This file covers only what differs.

## Purpose

Collects an email address.

## Use when

- The value is one email address.

## Don't use when

- Collecting several addresses at once. Use one field per address or a tag-style entry built from `jh-tag-group`.
- The address is display-only. Render it as text.

## Defaults

- It sets the email keyboard and native format validation for you. Don't add a `pattern` unless you have a stricter domain rule.
- Set `autocomplete="email"` on sign-in and profile forms.
- No `input-mask`; the `@` and `.` positions vary.

## Composition

- Same slots as `jh-input`. An envelope icon in `jh-input-left` is optional, `aria-hidden="true"`.

## Accessibility

- Label it "Email" or "Email address", not "Username", even when the email is the username; say so in helper text instead.

## Style hooks

No hooks of its own. Use `--jh-input-*` per `input.md`.

| Zone | Lane | Notes |
|---|---|---|
| all | inherit | See `input.md`. |

## Do not

- Do not use `jh-input` with a hand-written email regex.
- Do not use `input-mask` on an email field.
