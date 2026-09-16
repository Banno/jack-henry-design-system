---
title: Elevation
description: Elevation defines how elements interact with other spatially and creates opportunities for rich layering of content and intuitive interactions.
---

# Elevation

Elevation defines how elements interact with each other spatially and creates opportunities for rich layering of content and intuitive interactions.

## Shadow

Shadows visually define a component from its surroundings and establish its spatial relationship within the overall layout.

There are currently no global shadow tokens, since shadows can be composed of other token types such as `color` and `dimension`. There are four alias shadow tokens available, allowing for a variety of spatial relationships within a given layout:

- **Low:** use on surface-level content and components such as cards and control thumbs.
- **Mid:** use on elevated components such as floating action buttons (FABs) and toasts.
- **High:** use on menus and dropdowns.
- **Overlay:** use on components that should overlay the entire UI, such as modals and dialogs.

Shadow tokens use the naming structure `shadow.*` and the DTCG type `shadow`. They should reference other Forge `color` tokens for the shadow `color` property, and are limited to a max of two shadow objects. They can reference other Forge `dimension` tokens for the `offsetX`, `offsetY`, `blur`, `spread`, and `inset` properties.

## Z-index

Global z-index tokens are a scale of grades ranging from 0 to 1000 in steps of 100. A value of -100 is available when elements need to be positioned below the base level of 0.

There are currently no alias z-index tokens — use the global tokens to define the z-index of elements. Use z-index together with shadow to create a comprehensive sense of depth: z-index sets the layer order of elements such as dialogs, drawers, and panels, while shadow suggests an element's perceived visual depth.

Z-index tokens use the naming structure `z-index.*` and the DTCG type `number`.

