<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# jh-menu

Intent file for `jh-menu`. API facts (slots, CSS hooks) are in `custom-elements.json`; this file covers purpose, choice, and composition.

## Purpose

A floating surface that holds a short list of actions or choices opened from a trigger.

## Use when

- A set of actions on one object that would clutter the row or card as buttons: edit, duplicate, archive, download.
- An overflow ("more") menu behind an icon-only `jh-button`.
- A small set of choices that aren't a form value (sort order, view density).

## Don't use when

- It's site or app navigation. `jh-menu` is explicitly not a navigation component; use your nav.
- The user is picking a form value. Use `jh-select`.
- There are more than about eight items, or items need search. Use `jh-select` with `searchable`, or a dialog.
- The content is anything but a list (a form, a panel). You'd have to strip the menu role; use a different container.

## Defaults

- Items are `jh-list-item`s with `role="menuitem"` and `tabindex="0"`; the menu itself has `role="menu"`. You wire the trigger, open/close, and keyboard movement yourself; the component provides the surface and the role.
- Destructive items (Delete, Remove) go last, separated by a `jh-divider` row, and are named plainly. No red styling by hand.
- Open from a `jh-button` (`neutral` or `tertiary`, often icon-only with `accessible-label`). Set `aria-haspopup="menu"` and `aria-expanded` on the trigger.
- Close on item activation, Escape, and click outside. Return focus to the trigger.
- One level only. No nested submenus.

## Composition

- Default slot: `jh-list-item`s. A `jh-divider` between groups of items is fine.
- Each item: `primary-text` or default-slot text, optional leading `jh-icon-*` in `jh-list-item-left`. No trailing controls.
- Pair with the triggering `jh-button`; the menu doesn't render its own trigger.

## Accessibility

- `role="menu"` is set by default. If you use the surface for anything else, override or remove the role so semantics match content, and then ask whether `jh-menu` is the right component.
- Items need `role="menuitem"` (or `menuitemcheckbox` / `menuitemradio` for toggles) and an accessible name.
- Keyboard: arrow keys move between items, Enter/Space activate, Escape closes. You implement this; the component doesn't.
- Focus moves into the menu on open and back to the trigger on close.
- Don't trap focus beyond the menu's own items.

## Style hooks

Hooks are listed in the manifest under `cssProperties`.

| Zone | Lane | Notes |
|---|---|---|
| surface (`--jh-menu-color-background`, `--jh-menu-color-text`, `--jh-menu-border-radius`, `--jh-menu-shadow`, `--jh-menu-space-padding`) | tune | A raised `container` token; shadow from the elevation scale. |
| overflow (`--jh-menu-overflow`, `--jh-menu-content-overflow`, `--jh-menu-z-index`) | tune | Set a max height and `auto` overflow for long lists; z-index above the page, below toasts. |
| item styling | inherit | `--jh-list-item-*`; see `list-item.md`. |
| positioning, open/close, keyboard | fixed | Author-implemented, not styled here. |

## Do not

- Do not use `jh-menu` for navigation.
- Do not use it to pick a form value; that's `jh-select`.
- Do not nest menus.
- Do not put form controls or arbitrary content inside and keep the menu role.
- Do not open a menu without a trigger that has `aria-haspopup` and `aria-expanded`.
- Do not style destructive items red by hand.
- Do not set hex or primitive token values on hooks; use `--jh-color-*` semantic tokens.
