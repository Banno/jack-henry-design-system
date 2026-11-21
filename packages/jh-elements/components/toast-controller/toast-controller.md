<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-toast-controller

Intent file for `jh-toast-controller`. API facts (attributes, slots, events, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Hosts every `jh-toast` on the page: positions them, queues them, announces them, and drops the oldest when there are too many.

## Use when

- Any page or app shell that shows toasts. One controller, mounted once at the app root.

## Don't use when

- You have no toasts. Don't mount it speculatively.
- You want to position a single toast inline near a control. That's not a toast; use `jh-notification`.

## Defaults

- One instance per app, placed at the start or end of the document so it doesn't interrupt keyboard flow.
- `max-count="3"`. When a fourth arrives, the oldest is dismissed and `jh-dismiss` fires. Lower to 1 or 2 for simple apps; don't raise it above 3.
- `role="status"` (polite) by default. Use `role="alert"` only if the controller is dedicated to urgent toasts; mixing both in one controller makes everything assertive.
- Create toasts by dispatching `jh-create-toast` (with `bubbles: true, composed: true`) from anywhere in the app. The DOM method (appending `jh-toast` yourself) is for cases where you need a handle on the element.
- Event detail fields map to `jh-toast` attributes: `text`, `timeout`, `stacked`, `hideDismissButton`, `dismissButtonAccessibleLabel`, plus `toastIcon`, `toastAction`, `toastDismissIcon` as HTML strings that must carry their slot name.

## Composition

- Default slot: `jh-toast` elements, usually added by the controller itself.
- `jh-toast` is imported for you.
- The `jh-create-toast` detail values are rendered as HTML. Sanitize `text`, `toastIcon`, `toastAction`, and `toastDismissIcon` when any part comes from user or server data.

## Accessibility

- The controller is the live region. `role="status"` has implicit `aria-live="polite"` and `aria-atomic="true"`, so the whole region is re-announced when a toast is added. Set `aria-atomic="false"` on the controller if you don't want earlier toasts repeated.
- `aria-relevant` can narrow what's announced (additions only, say).
- Placement must not cover the focused element. The default corner placement handles this; don't reposition it over content.
- Don't put focus into a toast on arrival; the live region announces it without moving the user.

## Style hooks

Hooks are listed in the manifest under `cssProperties`.

| Zone | Lane | Notes |
|---|---|---|
| `--jh-toast-controller-z-index` | tune | Above dialogs if toasts fire while a dialog is open. |
| max-count, role | mechanism | Change via the attribute. |
| placement, stacking order, spacing | fixed | No hook. |

## Do not

- Do not mount more than one controller.
- Do not raise `max-count` above 3.
- Do not set `role="alert"` on a controller that also carries routine confirmations.
- Do not pass unsanitized strings in `jh-create-toast`.
- Do not reposition the controller over page content.
- Do not move focus into a toast when it appears.
