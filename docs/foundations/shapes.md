---
title: Shapes
description: Corner radius, border concepts, and the focus ring that give Forge components their shape and boundaries.
---

# Shapes

Shape is one of the quieter ways a design system communicates — the roundness of a corner or the weight of a border can signal whether something's interactive well before someone touches it. Forge's shape foundation covers three pieces: radius, borders, and the focus ring that borders help build.

## Radius

Radius sets the rounded-ness of a container or shape. Using a container's radius consistently can help clarify intent — for example, whether or not a component is interactive.

Global radius tokens are a scale of grades that range from `0` to `400` in steps of 100, plus two additional global tokens:

- **Circle** — sets the value to 50%, creating an elliptical radius.
- **Pill** — sets the value to an arbitrarily high number (`9999px`), creating semi-circular ends regardless of the size of the container.

There aren't any alias radius tokens yet — use the global tokens directly to define radius on elements.

Radius tokens MUST:

- Use the naming structure `border.radius.*`.
- Use the DTCG type `dimension`.
- Use the unit `px`.

Radius tokens MAY:

- Reference other Forge `dimension.*` tokens.

## Borders

Borders provide distinction to individual components and establish a sense of overall visual identity throughout an application. Forge defines a set of border concepts that predefine a border's style, width, and color:

- **Decorative** — dividers and the edges of layout elements.
- **Control** — form controls.
- **Action** — elements that promote an interactive action, such as buttons.
- **Focus** — bordered implementations of the focus ring. In CSS, this can be either a border or an outline. There's also a focus variant of the shadow token, reserved for when a focus ring must be styled using shadow properties instead.
- **Selected** — elements that convey something is selected, such as list items and tabs.
- **Error** — error or invalid states on elements, most commonly inputs.

Each concept's properties are provided as discrete tokens, so you can use them as individual declarations or as shorthand.

As individual declarations:

```css
border-style: var(--jh-border-action-style);
border-width: var(--jh-border-action-width);
border-color: var(--jh-border-action-color);
```

As shorthand:

```css
border: var(--jh-border-action-style) var(--jh-border-action-width) var(--jh-border-action-color);
```

Avoid mixing and matching border concept properties — for example, combining a decorative style, a focus width, and an error color in one declaration works against the predictability the concepts are meant to provide. If you need a customization or override, reach for one of the global or alias tokens instead:

```css
border-style: var(--jh-border-action-style);
border-width: var(--jh-border-action-width);
border-color: var(--jh-color-content-positive-enabled);
```

Border tokens — especially border colors — should only be used to style borders. Don't use a border-color token to define another, non-border color, such as an icon or text color, unless that element's color needs to be intrinsically linked to the border's color.

Border width defines the thickness of the border; use the widths defined as part of the border concepts to help keep the interface consistent. Border style defines the border's line style — every border concept in Forge currently shares the same style.

## Focus ring

A focus indicator helps people know which element on the page currently has keyboard focus, so they can navigate the interactive parts of a page more effectively. Because of that, a focus indicator is built in to every interactive component by default, using Forge's design tokens to keep its color contrast and styling consistent with the rest of the system.

The ring is the main element of the indicator, and it should always be present on interactive elements when they receive focus. By default, it conforms to the border radius of its related element and sits slightly offset from it. In situations where an element doesn't have a visible container, that offset may not be needed — you can use a negative offset to align the ring to the inside of the element, or omit the offset altogether.

If you're building a new component that receives keyboard focus, include the focus indicator as part of its design and code from the start, and make sure it always remains visible when the element has focus. Here's how the indicator is typically implemented in CSS:

```css
element:focus-visible {
  outline-color: var(--jh-border-focus-color);
  outline-style: var(--jh-border-focus-style);
  outline-width: var(--jh-border-focus-width);
  outline-offset: 1px;
}
```

The outline properties can also be written in shorthand, if you prefer.
