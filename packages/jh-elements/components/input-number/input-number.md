<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-input-number

Extends `jh-input`; every rule in `input.md` applies. This file covers only what differs.

## Purpose

Collects a numeric value the user can also nudge with increment and decrement buttons.

## Use when

- The value is a quantity, count, rate, or percentage, and stepping by a fixed amount makes sense (number of items, days, a percentage in whole points).

## Don't use when

- The value is money. Use `jh-input-currency`.
- The value is an identifier that happens to be digits (account number, ZIP, phone). Use `jh-input` with `inputmode="numeric"`, or `jh-input-telephone`.
- Stepping makes no sense (a large arbitrary number). Use `jh-input` with `inputmode="numeric"`.

## Defaults

- `step="1"`. Set it to the natural unit (0.25 for rates, 5 for percentages in fives).
- Set `min` and `max` whenever the range is bounded; the steppers respect them.
- Steppers are always shown. If you don't want them, this is the wrong component.

## Composition

- `slot="jh-input-number-stepper-increment"` / `-decrement"`: replace the stepper icons. Rarely needed.
- Same left/right slots as `jh-input`, but the right slot sits next to the steppers; keep it empty unless there's a strong reason.

## Accessibility

- The steppers are buttons with their own accessible names; they're keyboard-reachable on their own.
- Arrow keys also step the value when the field is focused.
- Put units in the label or `suffix` ("Term (months)").

## Style hooks

Inherits `--jh-input-*`. Adds a stepper zone.

| Zone | Lane | Notes |
|---|---|---|
| stepper (`--jh-input-number-stepper-color-background-*`, `--jh-input-number-stepper-color-border-*`, `--jh-input-number-stepper-icon-color-fill-*`, `--jh-input-number-stepper-border-radius`, `--jh-input-number-stepper-opacity-disabled`) | tune | Point at semantic tokens. |
| everything else | inherit | See `input.md`. |
| stepper visibility | fixed | Steppers can't be hidden. |

## Do not

- Do not use for money or for digit-string identifiers.
- Do not hide the steppers with CSS; pick a different input.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
