<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-input-password

Extends `jh-input`; every rule in `input.md` applies. This file covers only what differs.

## Purpose

Collects a password or secret, masked by default, with a show/hide toggle.

## Use when

- Sign-in, password change, or any secret the user types (PIN, security answer, API key).

## Don't use when

- The value isn't secret. Masking something that isn't sensitive just hides typos.
- Confirming a one-time code the user is reading off another screen. Use `jh-input` with `inputmode="numeric"` and `autocomplete="one-time-code"`.

## Defaults

- Masked (`password-visible` false). Let the user toggle; don't default to visible.
- Set both `accessible-label-show-password` and `accessible-label-hide-password`. The toggle has no visible text.
- `autocomplete="current-password"` on sign-in, `"new-password"` on create/change forms. Browsers and password managers depend on it.
- Don't set `show-clear-button`; the toggle already occupies the right side.

## Composition

- `slot="jh-input-password-hidden"` / `-visible"`: replace the eye icons. Rarely needed.
- The toggle is built in; don't slot your own button in `jh-input-right`.

## Accessibility

- The toggle is a button with its own name from the two accessible-label attributes; always set them.
- Password rules (length, characters) go in `helper-text` before the user types, and in `error-text` after they fail.

## Style hooks

No hooks of its own. Use `--jh-input-*` per `input.md`; the toggle uses the slotted-button styles.

| Zone | Lane | Notes |
|---|---|---|
| all | inherit | See `input.md`. |

## Do not

- Do not omit the two accessible-label attributes for the toggle.
- Do not default `password-visible` to true.
- Do not add a second button in `jh-input-right`.
- Do not use `input-mask` on a password.
