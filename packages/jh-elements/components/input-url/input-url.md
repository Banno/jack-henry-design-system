<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-input-url

Extends `jh-input`; every rule in `input.md` applies. This file covers only what differs.

## Purpose

Collects a web address.

## Use when

- The value is a URL the user types (a website, a webhook endpoint, a link).

## Don't use when

- The URL is display-only. Render it as a link.
- The value is a path or identifier, not a full URL. Use `jh-input`.

## Defaults

- Sets the URL keyboard and native format validation. Tell the user in `helper-text` whether the scheme is required ("Include https://").
- `autocomplete="url"` on profile forms.
- No `input-mask`.

## Composition

- Same slots as `jh-input`. A `prefix` of `https://` is fine when you prepend it yourself on submit; say so in helper text.

## Accessibility

- Validate the scheme against an allowlist before using the value anywhere it will be rendered as a link.

## Style hooks

No hooks of its own. Use `--jh-input-*` per `input.md`.

| Zone | Lane | Notes |
|---|---|---|
| all | inherit | See `input.md`. |

## Do not

- Do not render a user-entered URL as a link without validating the scheme.
- Do not use `input-mask` on a URL.
