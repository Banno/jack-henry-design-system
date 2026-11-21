<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-tooltip

Intent file for `jh-tooltip`. API facts (attributes, slots, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Shows a short, non-essential label or hint when the user hovers or focuses a control.

## Use when

- Naming an icon-only control ("Copy", "Filter") so sighted users don't have to guess.
- A short clarification for a truncated value or abbreviation (a full timestamp, the meaning of "ACH").
- The content is nice to know and the control works fine without it.

## Don't use when

- The information is required to use the control. Put it in visible text, a label, or `helper-text`.
- The content is interactive (links, buttons) or longer than a sentence. That's a popover or dialog pattern, which Forge doesn't ship yet; use visible content.
- The trigger isn't focusable (a plain `span` or `div`). Keyboard users would never see it. Make the trigger a real control or render the text visibly.
- On touch-only surfaces as the sole way to learn something; there is no hover.

## Defaults

- `position="top-center"`. Change only when the default would cover something or run off an edge the flip can't fix.
- Flipping is on; set `flip-disabled` only inside a container where flipping would clip the tooltip.
- Max width is 160px by default. Raise `--jh-tooltip-size-max-width` for dates or codes that shouldn't wrap; set `none` only for very short content.
- `open` is for forcing a tooltip visible in demos and tests. Don't drive it from app logic in production.
- One short phrase or sentence. No punctuation at the end of a label-style tooltip ("Copy", not "Copy.").
- For an icon-only `jh-button`, the tooltip text and the `accessible-label` should say the same thing.

## Composition

- Default slot: the trigger. Only the first element counts; wrap one control, not several.
- `slot="jh-tooltip-content"`: plain text in a `span`. No interactive content.
- Pair with icon-only `jh-button`s, truncated table cells, and status `jh-tag`s that need a longer explanation.

## Accessibility

- The component sets `role="tooltip"`, links it to the trigger with `aria-describedby`, and shows it on focus as well as hover. That only works if the trigger is focusable.
- Dismissable with Escape; stays open while the pointer is over it. Don't override either.
- A tooltip is a description, not a name. The trigger still needs its own accessible name (`label` or `accessible-label`).
- Don't duplicate: if the tooltip repeats the visible label, drop the tooltip.

## Style hooks

Hooks are listed in the manifest under `cssProperties`.

| Zone | Lane | Notes |
|---|---|---|
| bubble (`--jh-tooltip-color-background`, `--jh-tooltip-color-text`) | tune | Inverse surface: `layer.inverse` / `content.on-inverse` style tokens. Keep 4.5:1. |
| width (`--jh-tooltip-size-max-width`) | tune | The one hook authors commonly set. |
| position, flip | mechanism | Change via the attribute. |
| arrow, delay, animation, offset | fixed | No hook. |

## Do not

- Do not put essential information only in a tooltip.
- Do not put links or buttons inside a tooltip.
- Do not attach a tooltip to a non-focusable element.
- Do not use `open` to show tooltips from app logic.
- Do not repeat the visible label in the tooltip.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
