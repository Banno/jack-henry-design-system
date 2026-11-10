<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-notification

Intent file for `jh-notification`. API facts (attributes, slots, events, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Tells the user something about the current page or their account that stays until they act on it or dismiss it.

## Use when

- Inline (`type="alert"`): a message tied to a section or form — a failed validation summary, a pending verification, a note about the data on screen.
- Page-wide (`type="banner"`): something that applies to the whole app right now — scheduled maintenance, an expired document, a feature that needs setup.
- The message needs to persist until read, or needs an action button.

## Don't use when

- Confirming the outcome of an action the user just took ("Saved", "Transfer scheduled"). Use `jh-toast`.
- Explaining a control on hover. Use `jh-tooltip`.
- The message is the field's own error. Use `error-text` on the input.
- The content is a permanent part of the page (instructions, help). That's prose, not a notification.

## Defaults

- `appearance="neutral"` for information. `positive` only for a completed state the user should notice (verified, approved). `negative` for errors and blockers. There is no warning appearance; use `neutral` with clear wording and an icon.
- `type="alert"` sits in the content flow where the issue is. `banner` breaks out to the top of the viewport; one banner at a time.
- Always put an icon in `jh-notification-icon` that matches the appearance, `aria-hidden="true"`. The color alone can't carry the meaning.
- Dismissible by default. Set `hide-dismiss-button` only when the message must stay until the condition clears (a blocker the user can't dismiss away).
- Set `dismiss-button-accessible-label` ("Dismiss notification"); the button has no visible text.
- One idea per notification, one or two sentences. If it needs a paragraph, it's a page.
- `stacked` when the message is long or there are two action buttons; otherwise actions sit inline to the right.

## Composition

- Default slot: the message. Plain text or a short paragraph; a link is fine. Long unbroken strings need `overflow-wrap: anywhere` on the slotted element.
- `slot="jh-notification-icon"`: one `jh-icon-*`.
- `slot="jh-notification-action"`: one or two `jh-button`s, forced to `size="small"`. Use `neutral` or `tertiary`; never `primary`. Labels are specific verbs ("Verify now", not "Click here").
- `slot="jh-notification-dismiss-icon"`: replace the X. Rarely needed.
- `jh-button` and `jh-icon-xmark` are imported for the dismiss button; don't add them for that purpose.
- Listen to `jh-dismiss` to persist the dismissal if the message shouldn't come back on reload.

## Accessibility

- Say in text what the appearance means. "Error:" or "Verified" in the message, not just red or green.
- The dismiss button is keyboard-operable; label it.
- A banner that appears after load should be in or near a live region if users must hear it; inline alerts tied to a form submit should receive focus or be announced via the form's own live region.
- Don't trap focus; a notification is not a dialog.
- Action buttons are real `jh-button`s with their own names; don't use links styled as buttons.

## Style hooks

Hooks are listed in the manifest under `cssProperties`. Container hooks are per appearance (`-neutral`, `-positive`, `-negative`); dismiss and action hooks carry interaction states.

| Zone | Lane | Notes |
|---|---|---|
| container (`--jh-notification-color-background-*`, `--jh-notification-color-text-*`, `--jh-notification-border-radius-alert`, `--jh-notification-border-radius-banner`) | tune | Backgrounds are the `container.<appearance>` semantic tokens; text must pass 4.5:1 on them. |
| icon (`--jh-notification-icon-color-fill-*`) | tune | Matches the appearance's content token. |
| dismiss button (`--jh-notification-dismiss-*`) | tune | |
| action buttons (`--jh-notification-action-*`) | tune | Keep in step with `jh-button` neutral/tertiary so slotted buttons match. |
| appearance, type, stacked, dismissibility | mechanism | Change via the attribute. |
| banner positioning, slot layout, button size | fixed | Slotted buttons are forced to small. |

## Do not

- Do not use a notification to confirm an action; that's `jh-toast`.
- Do not rely on appearance color alone; put the meaning in the text.
- Do not stack more than one banner.
- Do not use `primary` buttons in the action slot.
- Do not omit `dismiss-button-accessible-label`.
- Do not put a paragraph of instructions in a notification.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
