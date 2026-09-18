# List item + list group — pass 1 spec

2026-09-18 · Steph Hubka

## Summary

Pass 1 changes how `jh-list-item` and `jh-list-group` look, not what they expose. Every state gets one visual signal instead of two, padding drops one step, and the subheader becomes a real label. No property, slot or attribute changes. Ships as a **minor** (visual changes are not breaking; see the release guide).

- Focus: ring only, no fill
- Hover / active: a translucent state layer instead of two solid grays
- Selected: tinted fill only; the 8px left bar becomes opt-in (width hook defaults to 0)
- Padding: 24/16 → 16/12, slot gap 8 → 12
- Subheader: 12px medium with more space above than below

Source: `packages/jh-elements/components/list-item/list-item.js` and `list-group/list-group.js` on `main` in [Banno/jack-henry-design-system](https://github.com/Banno/jack-henry-design-system), read 2026-09-17.

## Problem

Every interactive state draws two signals at once, and the two solid grays the states share are one step apart from the page background. Values are what the component resolves to today in the light theme.

| State | Today | Resolves to | Why it reads heavy |
| --- | --- | --- | --- |
| Focus | fill + 2px outline | `container-primary-hover` (gray-50 #f4f4f4) + `interactive-focus` (blue-600) inset −2px | Same fill as hover, so focus looks like hover-with-a-border |
| Hover | fill | gray-50 #f4f4f4 | Fine alone; too close to active |
| Active | fill | `container-primary-active` = gray-100 #ebebeb | Identical to `container-page`, so it vanishes on a page-colored surface |
| Selected | fill + left border | blue-50 #ecf5fe + `border-selected-width` = `dimension-200` = **8px** blue bar, padding-left reduced to compensate | Two signals; the 8px bar is the loudest element in the row |
| Disabled | opacity | `opacity-300` = 0.3 on the whole row | OK |

Padding is `dimension-600` × `dimension-400` = 24px horizontal, 16px vertical, plus an 8px gap between slots. The group adds nothing — `jh-list-group` has no padding of its own — so the "intense" feel is the item's 24px sides against the group's edge.

The subheader is `font-heading-medium-1` = 14px / 500 / 20px, the same size and weight as the item's primary text (`font-body-medium-1`, 14 / 500 / 20). It only differs by being gray, so it reads as a dim list item, not a label.

## State model

One signal per state. Hover and active are a translucent layer painted over whatever the row already is, so hover on a selected row works without a third color.

| State | Signal | Light | Dark |
| --- | --- | --- | --- |
| Default | none | transparent | transparent |
| Hover | state layer | `color-state-hover` = black-alpha-10 | white-alpha-10 |
| Active | state layer | `color-state-active` = black-alpha-20 | white-alpha-20 |
| Focus | ring only, no fill | 2px blue-600, inset −2px (unchanged tokens) | unchanged |
| Selected | brand state layer, no bar | `color-state-selected` = blue-600 @ 10% | blue-600 @ 12% |
| Selected + hover | selected layer + hover layer | stacks | stacks |
| Disabled | opacity on content | `opacity-disabled` (0.3) | same |

Why alpha instead of two more grays: the existing alpha ramp steps by 10%, which lands close to Material's 8% hover / 12% pressed and reads correctly on white, on `container-page`, and on the selected tint. It also removes the active = page-background collision. If 20% active feels heavy in practice, that's a case for adding `alpha-15` to the ramp, not for going back to solid grays.

Selected is a state layer too, on the brand color instead of on-surface. That keeps it distinguishable from hover by hue rather than intensity, and because Banno Online is themed per institution, a brand-alpha layer follows the FI's color where a fixed `blue-50` would not. List item reads `color-state-selected` directly. `container-primary-selected` is left unchanged in pass 1; re-pointing it to the state layer is a system-wide decision for DSPD-111.

This applies to list items and menu items, where selected means the one you're looking at. Multi-select rows in a data table mean included in the set; the checkbox already says that, so table rows stay neutral.

The selected bar stays available for navigation lists via a new `--jh-list-item-border-selected-width` hook that defaults to `0`. A nav list sets it to `dimension-100` (4px). The 8px `border-selected-width` token is no longer used by list item.

## Spacing and density

Item padding drops one step on each axis and the slot gap grows one step, so the avatar/icon sits off the text the way it does in every other system.

| Property | Today | Pass 1 |
| --- | --- | --- |
| Padding left/right | `dimension-600` (24px) | `dimension-400` (16px) |
| Padding top/bottom | `dimension-400` (16px) | `dimension-300` (12px) |
| Gap between slots | `dimension-200` (8px) | `dimension-300` (12px) |
| Gap between primary and secondary text | `dimension-50` (2px) | unchanged |

Resulting heights: one line = 44px, two lines = 62px, avatar row (40px avatar) = 64px. The group stays at zero padding. The `--jh-list-item-size-height` hook stays; a density prop (compact / default / spacious) is pass 2.

## List group subheader

The subheader becomes a label: smaller than the items, medium weight, and attached to the group below it by having more space above than below.

| Property | Today | Pass 1 |
| --- | --- | --- |
| Type | `font-heading-medium-1` (14 / 500 / 20) | `font-helper-medium` (12 / 500 / 16) |
| Color | `content-secondary-enabled` (gray-600) | unchanged |
| Padding top | `dimension-400` (16px) | `dimension-400` (16px) |
| Padding bottom | `dimension-400` (16px) | `dimension-200` (8px) |
| Padding left/right | `dimension-600` (24px) | `dimension-400` (16px) — matches the item |

No uppercase, no letter-spacing. If the 12px label feels too quiet next to 14px items, the alternative is `font-body-medium-1` at 14 with the same asymmetric padding — but then it needs a color step darker than the secondary text to not read as an item again.

## Tokens

Three new semantic tokens, two new alpha primitives, and four new component hooks. Tokens are purely additive; no existing token's value changes.

| Token | Tier | Light | Dark | Notes |
| --- | --- | --- | --- | --- |
| `--jh-color-state-hover` | semantic (new) | `black-alpha-10` | `white-alpha-10` | reusable by menu item, table row, tab, nav link later |
| `--jh-color-state-active` | semantic (new) | `black-alpha-20` | `white-alpha-20` | same |
| `--jh-color-state-selected` | semantic (new) | `blue-alpha-10` | `blue-alpha-12` | brand @ ~10%; should follow FI theming once the theming layer exposes a brand-alpha |
| `--jh-color-blue-alpha-10` / `-12` | primitive (new) | `#085ce51a` / `#085ce51f` | same | first blue alpha steps; black/white alpha already exist |
| `--jh-color-container-primary-selected` | semantic | blue-50 (unchanged) | blue-850 (unchanged) | not touched in pass 1; aliasing it to `color-state-selected` is a DSPD-111 decision |
| `--jh-list-item-color-state-hover` | component (new) | → `color-state-hover` | | falls back to `black-alpha-10` |
| `--jh-list-item-color-state-active` | component (new) | → `color-state-active` | | falls back to `black-alpha-20` |
| `--jh-list-item-color-background-selected` | component | → `color-state-selected` (was `container-primary-selected`) | | falls back to `blue-alpha-10` |
| `--jh-list-item-border-selected-width` | component (new) | `0` | `0` | nav lists set `dimension-100` |
| `--jh-list-item-space-gap` | component (new) | `dimension-300` | | |
| `--jh-list-item-color-background-focus` | component | `transparent` (was `container-primary-hover`) | | hook kept |
| `--jh-list-item-color-background-hover` / `-active` | component | deprecated | | still honored this release; remove in pass 2 |
| `--jh-list-group-subheader-space-padding-top` / `-bottom` | component (new) | `dimension-400` / `dimension-200` | | |

Added as a `color.state` group in `tokens/light/color.json` and `tokens/dark/color.json`, and a `blue.alpha` group in `tokens/global/color.json`, in the same DTCG shape as the existing entries.

## Code changes

CSS only in both files; no property, slot, attribute or render change.

`list-item.js`

- Padding defaults `dimension-600/400` → `400/300`; gap → `--jh-list-item-space-gap` (`dimension-300`) on `.list-item` and `.content`
- `.list-item` gets `position: relative` and a `::before` overlay that carries the hover/active state layer, so the layer stacks on the selected fill
- `:focus-visible` background → `transparent`; outline unchanged
- `:hover` and `:active` no longer set `background-color`; they set `.list-item::before` to the state tokens
- `[selected]` fill reads `--jh-color-state-selected`; the left border width reads `--jh-list-item-border-selected-width` (default 0) instead of the 8px `--jh-border-selected-width` token, and the padding compensation follows it
- `[disabled]` forces the state layer transparent
- cssprop docs updated: new hooks documented, `background-hover` / `background-active` marked deprecated

`list-group.js`

- Subheader type `font-heading-medium-1` → `font-helper-medium`
- Subheader padding `16/24/16/24` → `16/16/8/16` via two new hooks for top/bottom

Release note: minor. Visual change to any interactive list item and any list group with a label. Anyone overriding `--jh-list-item-color-background-hover` keeps working this release but should move to `--jh-list-item-color-state-hover`. Consumers with visual regression tests should expect snapshot updates.

## Figma

Built in a scratch file ([List item pass 1](https://www.figma.com/design/MCvFAZW400V5ePDzkntX7h/?node-id=3-209)): `jh-list-item` component set with seven State variants (Default, Hover, Active, Focus, Selected, Selected + hover, Disabled) and `jh-list-group` (Subheader true/false), all colors and spacing bound to variables. Selected variants read `color/state/selected` directly; `container/primary/selected` is unchanged. Set in Figtree.

To move into the v2 Forge Design Kit, on a branch:

1. Add `color/state/hover`, `color/state/active`, `color/state/selected` to the kit's existing color collection (light and dark values above). Don't import the scratch file's collections.
2. Replace the existing `jh-list-item` and `jh-list-group` in place — same component, new visuals — so consumer instances stay attached and pick it up on library update. Rebind every color and dimension to the kit's variables.
3. Rename the state axis value `enabled` → `default`.
4. Merge the branch when the code PR merges; publish with the same release.

## Out of scope — pass 2

These change the contract and get their own ticket after pass 1 has been in a release.

- Density prop (compact / default / spacious) replacing the fixed-height hook
- Rename `primaryMetadata` / `secondaryMetadata` → trailing text
- Drop the "selected disabled" state
- Split the navigation list item (left bar, expanded variant in Web Design Kit) into its own component
- Promote `color.state.*` to the shared state model for menu item, table row, tab and nav link; decide whether `container.primary.selected` aliases `color.state.selected` (DSPD-111)
- Remove the deprecated `background-hover` / `background-active` hooks
