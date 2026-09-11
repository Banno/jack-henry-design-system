---
title: Icons
description: Naming, style, sizing, and color guidance for Forge iconography.
---

# Icons

Icons carry meaning fast, but only when they're built and used consistently. Forge's icon guidance covers how icons are named, drawn, sized, colored, and made accessible, so every icon in the system reads the same way regardless of who added it.

## Name

Icon names follow the [naming conventions](https://blog.fontawesome.com/icon-naming-conventions/) outlined by Font Awesome.

## Glyph style

Icons use a 1.5px stroke with rounded outside corners. Favor outlined icons over filled ones.

## Size

Source icon artwork must be sized within an invisible 24px by 24px container. Use the `size` property, or one of the `icon.size-*` style hooks, on the `jh-icon` component to set an icon's size within a design.

## Color

Source icon artwork must be pure black (`#000000`) — never apply a design token to the original icon artwork itself. The `jh-icon` component sets a default icon color of `color.content.secondary.enabled`; use the `icon.color.fill` style hook to customize an icon's color instead.

## Accessibility

Meaningful icons must be associated with an accessible name. Decorative icons that sit beside a label should be hidden from assistive technology.

## Source files

The full SVG catalog lives in `/packages/jh-icons/`. Always use those files as the source for an icon — never substitute Unicode arrows, emoji, or HTML-entity glyphs for a real icon.
