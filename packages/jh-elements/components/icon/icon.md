<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-icon

Intent file for `jh-icon`. API facts (attributes, slots, CSS hooks, defaults) are in `custom-elements.json`; this file covers purpose, choice, and composition. The named icons (`jh-icon-*` from `@jack-henry/jh-icons`) wrap this element and follow the same rules.

## Purpose

Renders an SVG at a system size and color so it lines up with text and themes with the product.

## Use when

- Any icon in the UI: use the named `jh-icon-*` element from the icon library.
- An icon the library doesn't have: slot your own SVG into `jh-icon` so it still gets system size and color.

## Don't use when

- The image is content, not UI (a logo, an illustration, a photo). Use `img` or inline SVG with alt text.
- The icon needs more than one color. `jh-icon` sets a single fill; multi-color art isn't an icon.
- You need a stroke-based glyph. The component sets `fill`, never `stroke`; convert to outlines first.

## Defaults

- `size="medium"` beside body text. `small` inside tags, badges, dense table cells. `x-small` only inside components that force it (`jh-button` x-small, slotted input buttons). `large` and up for empty states and feature tiles.
- Color is inherited from `--jh-icon-color-fill` (content.secondary by default). To color an icon, set that hook on the icon or an ancestor with a `content.*` token; don't set `fill` in the SVG.
- Prefer a library icon over a custom one. If a custom icon is used in more than one place, propose it for the library.
- Decorative icons (next to a label, in a button with a label) get `aria-hidden="true"`. Icons that carry meaning alone (icon-only button, status glyph) get their meaning from the parent's `accessible-label`, not from the icon.

## Composition

- Default slot: one SVG with a `viewBox`, no hard-coded `fill`, `width`, or `height`.
- Typical parents: `jh-button` icon slots, `jh-input` left/right slots, `jh-list-item` left slot, `jh-tag` icon slot, `jh-notification` / `jh-toast` icon slots.
- Never set `width`/`height` on the element; use `size` or the size hooks.

## Accessibility

- An icon is either decorative (`aria-hidden="true"`) or has its meaning carried by a labeled parent. It never stands alone as the only label.
- A slotted SVG should have no `title` element unless the icon is truly standalone and the parent can't name it; then `role="img"` and `aria-label` on `jh-icon`.
- Don't convey status by icon color alone; pair with text or a `jh-tag`.

## Style hooks

Hooks are listed in the manifest under `cssProperties`.

| Zone | Lane | Notes |
|---|---|---|
| color (`--jh-icon-color-fill`) | tune | Always a `content.*` semantic token. |
| size scale (`--jh-icon-size-extra-small`, `--jh-icon-size-small`, `--jh-icon-size-medium`, `--jh-icon-size-large`, `--jh-icon-size-extra-large`, `--jh-icon-size-extra-extra-large`) | tune | Set on an ancestor to remap what a size means in that context; values must be `--jh-dimension-*` steps, not px. |
| size | mechanism | Change via the attribute. |
| aspect ratio, alignment to text | fixed | No hook. |

## Do not

- Do not hard-code `fill`, `width`, or `height` in slotted SVG.
- Do not set a raw pixel value on a size hook; use a dimension token.
- Do not use an icon as the only label for a control.
- Do not use `jh-icon` for logos or illustrations.
- Do not convey status by icon color alone.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
