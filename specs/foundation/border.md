---
name: Border
description:
---

Borders provide distinction to individual components as well as establishes a sense of overall visual identity throughout the application.

Forge includes a set of border concepts that predefine the border’s style, width, and color.

- **Decorative:** Decorative borders are typically used for elements such as dividers and edges of layout elements.
- **Control:** Control borders should be used to style elements such as form controls.
- **Action:** Action borders are used to style elements that promote an interactive action such as buttons.
- **Focus:** Focus borders are used to style bordered implementations of the focus ring. In CSS, this could either be as a border or outline. Note, there is also a focus variant of a shadow token which should only be used when focus rings must be styled using shadow properties.
- **Selected:** Selected borders can be used to style elements that convey when something is selected. Common examples are list-items and tabs.
- **Error:** Error borders are specifically used to style error or invalid states on elements. These are commonly used on inputs.

These concept properties are provided as discrete tokens for greater flexibility when styling borders. They MAY either be defined as individual declarations or using shorthand where appropriate.

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

Avoid mixing-and-matching border concept properties.

````css
border-style: var(--jh-border-decorative-style);
border-width: var(--jh-border-focus-width);
border-color: var(--jh-border-error-color);

Use one of the global or alias tokens when customizations or overrides are needed.

```css
border-style: var(--jh-border-action-style);
border-width: var(--jh-border-action-width);
border-color: var(--jh-color-content-positive-enabled);
````

Border tokens—especially the border-colors—should only be used to style borders. Don’t use a border-color token to define other non-border colors such as that of an icon or text. An exception to this is when an element’s color needs to be intrinsically linked to that of the border color.

Border width is used to define the thickness of the border. Use the widths defined as part of the border concepts to help promote a consistent user interface.

Border style defines the line style of the border. All of the border concepts within Forge currently use the same border style.
