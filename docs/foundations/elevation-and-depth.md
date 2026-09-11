---
title: Elevation & depth
description: How Forge uses shadow and z-index to create hierarchy and layering across the interface.
---

# Elevation & depth

Elevation defines how elements relate to one another spatially, creating opportunities for rich layering of content and intuitive interactions. Forge handles this through two complementary systems: shadow, for perceived visual depth, and z-index, for actual stacking order.

## Shadow

Shadows visually define a component from its surroundings and establish its spatial relationship within the overall layout. There aren't any global shadow tokens, since shadows may be composed of other token types, such as `color` and `dimension` — instead, four alias shadow tokens cover the range of spatial relationships a layout typically needs:

- **Low** — surface-level content and components, such as cards and control thumbs.
- **Mid** — elevated components, such as floating action buttons (FABs) and toasts.
- **High** — menus and dropdowns.
- **Overlay** — components that should sit above the entire UI, such as modals and dialogs.

Shadow tokens MUST:

- Use the naming structure `shadow.*`.
- Use the DTCG type `shadow`.

Shadow tokens SHOULD:

- Reference other Forge `color` tokens for the shadow's `color` property.
- Be limited to a maximum of two shadow objects.

Shadow tokens MAY:

- Reference other Forge `dimension` tokens for the `offsetX`, `offsetY`, `blur`, `spread`, and `inset` properties.

## Z-index

Global z-index tokens are a scale of grades that range from `0` to `1000` in steps of 100, with a value of `-100` available when an element needs to sit below the base level of `0`. There aren't any alias z-index tokens yet — use the global tokens directly to define the z-index of elements.

Use z-index alongside shadow to build a complete sense of depth: z-index sets the layer order of elements, such as dialogs, drawers, and panels, while shadow suggests an element's perceived visual depth.

Z-index tokens MUST:

- Use the naming structure `z-index.*`.
- Use the DTCG type `number`.
