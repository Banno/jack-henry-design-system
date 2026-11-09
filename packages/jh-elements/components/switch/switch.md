<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-switch

Intent file for `jh-switch`. API facts (attributes, events, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Turns a setting on or off, taking effect the moment it's flipped.

## Use when

- A preference or setting that saves immediately: notifications on, dark mode, show balances, enable a feature.
- A row-level enable/disable in a settings list, one switch per `jh-list-item`.

## Don't use when

- The value is submitted with a form. Use `jh-checkbox`. A switch is not a form control and submits nothing.
- The user is choosing among options. Use `jh-radio-group`.
- Flipping it needs a confirmation step. A switch promises instant effect; use a `jh-checkbox` plus a save button, or a dialog.
- It's a one-time acknowledgement (terms, consent). Use `jh-checkbox`.

## Defaults

- Always set `label`, phrased as the thing that is on when checked ("Email alerts"), not as a question or an action.
- Set `checked` to reflect the current saved state; the switch doesn't fetch it.
- On `jh-change`, save immediately and keep the switch in the new state. If the save fails, revert `checked` and say why in `helper-text` or a `jh-toast`.
- `helper-text` for one line on what the setting does ("Sends a push when a deposit posts").
- `disabled` hides the switch from assistive tech; use `accessible-disabled="true"` when the user should still find it and learn why it's locked.

## Composition

- No slots. Label and helper text are attributes.
- In a settings list, place the switch in `jh-list-item`'s `jh-list-item-right` slot with the row's text as the label; don't also make the row interactive.
- Don't group switches under a `jh-checkbox-group`; they aren't checkboxes.

## Accessibility

- Rendered as a button with `aria-pressed`; the label is its accessible name. Required.
- State is announced as pressed / not pressed. Don't add "on" / "off" text to the label; the control conveys it.
- Because the effect is immediate, never place a switch where flipping it navigates away or causes an irreversible action.
- `accessible-disabled` keeps a locked setting discoverable; pair it with helper text explaining the lock.

## Style hooks

Hooks are listed in the manifest under `cssProperties`. Track hooks carry a selection state (`-unselected-`, `-selected-`) and an interaction state (`-enabled`, `-hover`, `-focus`, `-active`, `-disabled`).

| Zone | Lane | Notes |
|---|---|---|
| track (`--jh-switch-track-color-background-*`) | tune | Selected is a `brand` or `interactive` token; unselected a neutral `control` token. 3:1 against the page in both states. |
| thumb (`--jh-switch-thumb-color-background`) | tune | Usually `content.on-brand` / white. |
| label, helper (`--jh-switch-label-color-text`, `--jh-switch-helper-color-text`) | tune | |
| `--jh-switch-color-focus`, `--jh-switch-opacity-disabled` | tune | |
| checked | mechanism | Set from saved state; update on `jh-change`. |
| size, thumb travel, animation | fixed | No hook. |

## Do not

- Do not use a switch inside a form that submits; that's `jh-checkbox`.
- Do not use a switch for anything that needs a confirm step.
- Do not leave the switch flipped when the save failed.
- Do not add "On"/"Off" words to the label.
- Do not make the enclosing list item interactive as well as the switch.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
