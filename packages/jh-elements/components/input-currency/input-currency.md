<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-input-currency

Extends `jh-input`; every rule in `input.md` applies. This file covers only what differs.

## Purpose

Collects a monetary amount.

## Use when

- The value is money: a transfer amount, a payment, a limit, a balance to set.

## Don't use when

- The value is a count, rate, or percentage. Use `jh-input-number`.
- The amount is display-only. Render it as text with the app's currency formatter.

## Defaults

- Cash-register entry is the default: digits shift left and the value always carries two decimals. Keep it for amounts a teller or member types; it matches how people enter money.
- `hide-decimal` for whole-unit amounts only (share counts, point values). It also blocks typing `.`.
- `hide-commas` almost never. Only when the field feeds a system that can't strip them.
- Set `prefix` to the symbol (`$`) or `suffix` to the ISO code (`USD`), not both. The text is decorative and is not part of `value`.
- `min` / `max` are for validation only; they don't stop typing. Pair them with `invalid` + `error-text` from your own check.
- Right-aligned by default; leave it.

## Composition

- Same slots as `jh-input`. Don't put a currency symbol in `jh-input-left`; use `prefix`.
- Pasted values are not reformatted. Validate them before submit.

## Accessibility

- Say the currency in the label or helper text when the prefix is the only cue ("Amount (USD)").
- Inherits `inputmode` for a numeric keyboard; don't override it.

## Style hooks

No hooks of its own. Use `--jh-input-*` per `input.md`.

| Zone | Lane | Notes |
|---|---|---|
| all | inherit | See `input.md`. |

## Do not

- Do not use `input-mask` on a currency field; lengths vary.
- Do not use `jh-input` or `jh-input-number` for money.
- Do not put the currency symbol in both `prefix` and the label.
