<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-input-telephone

Extends `jh-input`; every rule in `input.md` applies. This file covers only what differs.

## Purpose

Collects a telephone number.

## Use when

- The value is a phone number the user types.

## Don't use when

- The number is display-only. Render it as text with a `tel:` link.
- The value is a non-phone digit string (account, routing, card number). Use `jh-input` with `inputmode="numeric"`.

## Defaults

- Sets the telephone keyboard for you.
- Use `input-mask` only for a fixed national format ("(999) 999-9999"). Leave it off when international numbers are allowed; their lengths vary.
- `autocomplete="tel"` on profile and contact forms.
- Say the expected format in `helper-text`, not `placeholder` (which doesn't exist here).

## Composition

- Same slots as `jh-input`. A country-code `prefix` is fine when the app is single-country.

## Accessibility

- With a mask, remember it doesn't validate; set `maxlength` and your own check, and `error-text` on failure.

## Style hooks

No hooks of its own. Use `--jh-input-*` per `input.md`.

| Zone | Lane | Notes |
|---|---|---|
| all | inherit | See `input.md`. |

## Do not

- Do not mask when international numbers are accepted.
- Do not use it for non-phone digit strings.
