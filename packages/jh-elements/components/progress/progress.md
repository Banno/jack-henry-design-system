<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-progress

Intent file for `jh-progress`. API facts (attributes, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Shows that something is loading or in progress, and how far along when that's known.

## Use when

- Determinate (`value` set): an upload, a multi-step process, a batch job where you know the fraction done.
- Indeterminate: a fetch or save of unknown duration longer than about a second.
- Inside `jh-button` for a pending action (the button does this for you via `pending`).
- A circular spinner in a tight spot (`type="circular"`); a linear bar across a region or page.

## Don't use when

- The wait is under a second. Flashing a spinner is worse than nothing.
- You're loading a whole region's layout. Use a skeleton pattern (not a Forge component today) so the layout doesn't jump.
- The value is a static measure, not progress toward completion (a budget used, a score). That's a chart or a meter.
- You can show the content incrementally instead.

## Defaults

- `type="linear"` for page- or section-level loading; `circular` inline beside text or in a button.
- `indeterminate` unless you can compute a real fraction. Never fake a determinate bar.
- Set `label` whenever the context doesn't already say what's loading ("Uploading statement"). Use `accessible-label` when there's no room for visible text.
- The value text shows by default for determinate progress; `hide-value` when the percentage would be noise (very short tasks) or when the parent displays it.
- `accessible-valuetext` when the number doesn't mean anything to the user ("Step 2 of 4" instead of "50%").
- `size="medium"`. Match the surrounding text size; `x-small` inside buttons (set by `jh-button`).
- `min`/`max` default 0–100; change them only when your value is in other units and you don't want to normalize.

## Composition

- No slots.
- Imported automatically by `jh-button` for the pending state.
- For a loading region, place the progress in or near the region and set `aria-busy="true"` on the region until done.

## Accessibility

- Rendered as `role="progressbar"` with `aria-valuenow/min/max` when determinate. Indeterminate has no value and is announced as busy.
- A progress indicator needs a name: `label` or `accessible-label`. "Loading" alone is weak; say what.
- When the task completes, remove the indicator and announce the result (toast, or the content appearing). Don't leave a 100% bar on screen.
- Don't move focus to a spinner.

## Style hooks

Hooks are listed in the manifest under `cssProperties`.

| Zone | Lane | Notes |
|---|---|---|
| indicator (`--jh-progress-indicator-color`) | tune | `content.brand` or `interactive` token; on inverse surfaces, `content.on-inverse`. |
| track (`--jh-progress-track-color`, `--jh-progress-track-border-radius`, `--jh-progress-track-size-linear`, `--jh-progress-track-size-circular`) | tune | Track is a subtle `container` or `control` token. |
| text (`--jh-progress-label-color`, `--jh-progress-value-color`) | tune | |
| type, size, indeterminate, value | mechanism | Change via the attribute. |
| animation, stroke geometry | fixed | No hook. |

## Do not

- Do not show progress for waits under a second.
- Do not fake a determinate value.
- Do not leave a progress indicator with no label or accessible label.
- Do not use progress for static measures.
- Do not leave a completed bar on screen.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
