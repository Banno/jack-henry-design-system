<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-toast

Intent file for `jh-toast`. API facts (attributes, slots, events, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition. Toasts are managed by `jh-toast-controller`; read that file too.

## Purpose

Confirms the outcome of something the user just did, briefly, without interrupting them.

## Use when

- An action completed and the result isn't otherwise visible: "Transfer scheduled", "Settings saved", "Link copied".
- An action failed and the user is no longer looking at where it failed.
- An undo is offered for a short window ("Message archived — Undo").

## Don't use when

- The message must be read or acted on. Use `jh-notification` (`type="alert"` inline, or `banner`).
- The result is already visible on screen (the row appeared, the dialog closed with the new value showing). No toast.
- It's validation on a field. Use `error-text` on the input.
- It's a permanent state ("Your account is locked"). Use `jh-notification`.

## Defaults

- Always render toasts inside a `jh-toast-controller`, one per page. A standalone toast needs you to supply the live region yourself.
- `timeout` defaults to 5000 ms. Keep it for short confirmations; raise it (8000–10000) when there's an action button so the user has time to read and click. Set `0` only when the toast carries an error the user must see, and then keep the dismiss button.
- Toasts render on the neutral appearance. Convey success or failure in the text and icon, not by recoloring.
- One sentence. Lead with the outcome ("Payment sent to Acme"), no "Success!" prefix.
- `stacked` only when the message is long and there's an action; otherwise the action sits inline.
- Set `dismiss-button-accessible-label` ("Dismiss"); the button has no visible text.

## Composition

- Default slot: the message, one line.
- `slot="jh-toast-icon"`: one `jh-icon-*`, `aria-hidden="true"`; a check for success, a circle-exclamation for failure.
- `slot="jh-toast-action"`: at most one `jh-button` (forced to `size="small"`), `tertiary`. "Undo" or "View" are the common ones. Never a destructive action.
- `slot="jh-toast-dismiss-icon"`: replace the X. Rarely needed.
- Built on `jh-notification`; `jh-button` and `jh-icon-xmark` are imported for you.
- Listen to `jh-dismiss` when you need to know whether it timed out or was closed (the payload says which).

## Accessibility

- A toast is only announced if it's in a live region; `jh-toast-controller` provides one. Standalone, wrap it in `role="status"` (advisory) or `role="alert"` (urgent) yourself.
- Auto-dismiss is a time limit. Any toast with an action must stay long enough to reach by keyboard, or stay until dismissed.
- Don't put the only route to a critical action in a toast that disappears.
- Toasts must not cover the element that has focus; the controller places them in a corner for this reason.

## Style hooks

Hooks are listed in the manifest under `cssProperties`.

| Zone | Lane | Notes |
|---|---|---|
| container (`--jh-toast-color-background-neutral`, `--jh-toast-color-background-positive`, `--jh-toast-color-background-negative`) | tune | Only neutral is used today; the others exist for the underlying notification. Keep toasts dark/raised so they read above the page. |
| `--jh-toast-shadow`, `--jh-toast-z-index` | tune | z-index must sit above dialogs if toasts can fire while one is open. |
| timeout, stacked, dismissibility | mechanism | Change via the attribute. |
| position, width, animation | fixed | Position comes from the controller. |

## Do not

- Do not use a toast for anything the user must read or act on.
- Do not fire a toast when the result is already visible.
- Do not set `timeout="0"` and also `hide-dismiss-button`; that toast never leaves.
- Do not put destructive actions in the action slot.
- Do not stack several toasts for one action.
- Do not render toasts outside a `jh-toast-controller` without providing a live region.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
