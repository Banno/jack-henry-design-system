---
title: Border
description: Borders provide distinction to individual components as well as establishes a sense of overall visual identity throughout the application.
---

# Border

Borders provide distinction to individual components as well as establish a sense of overall visual identity throughout the application. Forge includes a set of border concepts that predefine the border's style, width, and color:

- **Decorative:** typically used for elements such as dividers and edges of layout elements.
- **Control:** used to style elements such as form controls.
- **Action:** used to style elements that promote an interactive action, such as buttons.
- **Focus:** used to style bordered implementations of the focus ring. In CSS, this can be either a border or an outline. There's also a focus variant of a shadow token, which should only be used when focus rings must be styled using shadow properties.
- **Selected:** used to style elements that convey when something is selected. Common examples are list items and tabs.
- **Error:** used specifically to style error or invalid states on elements, commonly inputs.

These concept properties are provided as discrete tokens for greater flexibility when styling borders. They can be defined either as individual declarations or using shorthand where appropriate.

As individual declarations:

```css
border-style: var(--jh-border-action-style);
border-width: var(--jh-border-action-width);
border-color: var(--jh-border-action-color);
```

As CSS shorthand:

```css
border: var(--jh-border-action-style) var(--jh-border-action-width) var(--jh-border-action-color);
```

Avoid mixing and matching border concept properties:

```css
border-style: var(--jh-border-decorative-style);
border-width: var(--jh-border-focus-width);
border-color: var(--jh-border-error-color);
```

Use one of the global or alias tokens when customizations or overrides are needed:

```css
border-style: var(--jh-border-action-style);
border-width: var(--jh-border-action-width);
border-color: var(--jh-color-content-positive-enabled);
```

Border tokens — especially border colors — should only be used to style borders. Don't use a border-color token to define other non-border colors, such as an icon or text color. An exception is when an element's color needs to be intrinsically linked to that of the border color.

Border width defines the thickness of the border — use the widths defined as part of the border concepts to help promote a consistent user interface. Border style defines the border's line style; all of Forge's border concepts currently use the same style.

