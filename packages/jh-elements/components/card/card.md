<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-card

Intent file for `jh-card`. API facts (attributes, slots, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

Groups related content into one bounded surface that reads as a unit on the page.

## Use when

- A screen holds several distinct groups of content that should scan as separate things (accounts, summaries, settings sections).
- Content has a natural title, body, and optional actions that belong together.
- The group needs to sit visibly above the page surface.

## Don't use when

- There is only one group on the page. The page is the container; a lone card is a box for no reason.
- Items are a repeating list of the same shape. Use `jh-list-group` with `jh-list-item`.
- The content is a transient message. Use `jh-notification` or `jh-toast`.
- You want the whole surface to be clickable. `jh-card` is not interactive today; put a `jh-button` in the footer, or wait for the clickable-card work rather than wrapping the card in a link.

## Defaults

- `padding="medium"` for everything. `small` for dense dashboards and widgets. `none` only when the body is a full-bleed table or list that supplies its own edges; header and footer keep their padding.
- Use `header-title` for the title. Reach for the `jh-card-header` slot only when the header needs something the attribute can't express (an action button, a status tag); the slot replaces the default header entirely.
- Dividers off by default. Turn on `show-header-divider` / `show-footer-divider` when the body is long or busy and the boundary isn't obvious.
- `title-heading-level` defaults to 2. Set it so cards fit the page's heading outline (3 inside a section with its own h2).
- Cards on the page surface are always the first layer up. Don't nest cards.

## Composition

- Default slot: the body. Any content.
- `slot="jh-card-media"`: image or illustration across the top. Author styles the media element (object-fit, border); card controls aspect ratio through `--jh-card-media-aspect-ratio`.
- `slot="jh-card-header"`: full custom header. When filled, `header-title` and `header-subtitle` are ignored.
- `slot="jh-card-footer"`: actions and metadata. Buttons here follow `jh-button` rules: `neutral` or `tertiary`, one `primary` only if the card is the main action on the view.
- `jh-divider` is imported automatically for header/footer dividers. Don't add dividers by hand.
- Divider inset: `header-divider-inset` / `footer-divider-inset` take 0–96 in steps of 8. For other values or to set both at once, use `--jh-divider-space-inset` on the card instead; the attribute wins where both are set.

## Accessibility

- `header-title` renders as a heading. Pick `title-heading-level` so screen-reader users get a correct outline; don't skip levels.
- When using the `jh-card-header` slot, you own the heading. Put the title in a real `<h2>`–`<h6>`, not a styled div.
- Card is a region of content, not a landmark. Don't add `role="region"` unless the card is a major page section with a unique name.
- Media in `jh-card-media` needs `alt` text, or `alt=""` when decorative.

## Style hooks

Hooks are listed in the manifest under `cssProperties`.

| Zone | Lane | Notes |
|---|---|---|
| container (`--jh-card-color-background`, `--jh-card-color-border`, `--jh-card-border-width`, `--jh-card-border-radius`, `--jh-card-elevation`) | tune | Theme-level. Background should be a `container` semantic token one layer above the page. |
| header (`--jh-card-header-color-text`, `--jh-card-header-title-color-text`, `--jh-card-header-subtitle-color-text`, `--jh-card-header-space-padding`) | tune | |
| body (`--jh-card-default-color-text`, `--jh-card-default-space-padding`) | tune | Prefer the `padding` attribute over the hook for standard sizes. |
| footer (`--jh-card-footer-color-text`, `--jh-card-footer-space-padding`) | tune | |
| media (`--jh-card-media-aspect-ratio`, `--jh-card-media-space-padding`) | tune | |
| padding, dividers, divider inset, heading level | mechanism | Change via the attribute. |
| internal layout, slot order, divider rendering | fixed | No hook. |

## Do not

- Do not nest a card inside a card.
- Do not wrap a card in `<a>` or add click handlers to make it interactive.
- Do not use a card for a single lone group on a page.
- Do not fill `jh-card-header` and also set `header-title`; the attribute is ignored.
- Do not use `padding="none"` and then re-add padding with the hook.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
