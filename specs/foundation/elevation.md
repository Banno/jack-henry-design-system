---
name: Elevation
description:
---

Elevation defines how elements interact with other spatially and creates opportunities for rich layering of content and intuitive interactions.

## Shadow

Shadows visually define a component from its surrounding and establish its spatial relationship within the overall layout.

There currently are no global shadow tokens since shadows MAY be composed of other token types such as `color` and `dimension`.

There are four alias shadow tokens available to allow for a variety of spatial relationships within a given layout.

- **Low:** Use on surface-level content and components such as cards and control thumbs.
- **Mid:** Use on elevated components such as floating action buttons (FABs) and toasts.
- **High:** Use on menus and dropdowns.
- **Overlay:** Use on components that should overlay the entire UI such as modals and dialogs.

Shadow tokens MUST:

- Use the naming structure: `shadow.*`.
- Use the DTCG type `shadow`.

Shadow tokens SHOULD:

- Reference other Forge `color` tokens for the shadow `color` property.
- Limit to a max of two shadow objects.

Shadow tokens MAY:

- Reference other Forge `dimension` tokens for the `offsetX`, `offsetY`, `blur`, `spread`, and `inset` properties.

## Z-index

Global z-index tokens are a scale of grades that range from 0 to 1000 in steps of 100. A value of -100 is available when elements need to be positioned below the base level of 0.

There are currently no alias z-index tokens. Use the global tokens to define the z-index of elements.

Use z-index in conjunction with shadow to create a comprehensive sense of depth:

- **Z-index:** Set the layer order of elements such as dialogs, drawers, and panels.
- **Shadow:** Use to suggest an element's perceived visual depth.

There are currently no alias tokens for `z-index`. Use the global tokens to define z-index properties on elements.

Z-index tokens MUST:

- Use the naming structure: `z-index.*`.
- Use the DTCG type `number`.
