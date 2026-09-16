---
title: Radius
---

# Radius

Use radius to set the rounded-ness of a container or shape. Consistent use of a container's radius can help clarify intent, such as whether a component is interactive.

Global radius tokens are a scale of grades ranging from 0 to 400 in steps of 100. There are two additional global tokens:

- **Circle:** sets the value to 50%, creating an elliptical radius.
- **Pill:** sets the value to an arbitrarily high number (`9999px`), creating semi-circular ends regardless of the size of the container.

There are currently no alias radius tokens — use the global tokens to define radius on elements.

Radius tokens use the naming structure `border.radius.*`, the DTCG type `dimension`, and the unit `px`. They can reference other Forge `dimension.*` tokens.

