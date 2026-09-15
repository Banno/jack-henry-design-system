---
name: Icons
description:
---

- **Name:** Use the [naming conventions](https://blog.fontawesome.com/icon-naming-conventions/) outlined by Font Awesome.
- **Glyph style:** 1.5px stroke, rounded outside corners, prefer outlined over filled icons
- **Size:** The source icon artwork MUST be sized within a 24px by 24px invisible container. Use `size` property or `icon.size-*` style hooks on `jh-icon` component to define an icon size within a design.
- **Color:** The source icon artwork MUST be pure black (`#000000`). A design token MUST NOT be used on the original icon artwork. The `jh-icon` component sets the default icon color to `color.content.secondary.enabled`. Use `icon.color.fill` to customize an icon's color.
- **Accessibility:** Meaningful icons MUST be associated with an accessible name. Decorative icons that sit beside a label are hidden from assistive technology.

The full SVG catalog lives in `/packages/jh-icons/`. Use those as the source — never substitute Unicode arrows, emoji, or HTML-entity glyphs for real icons.
