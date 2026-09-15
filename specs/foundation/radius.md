---
name: Radius
description:
---

Use radius to set the rounded-ness of a container or shape. Consistent use of a container’s radius can be used to clarify intent such as whether or not a component is interactive.

Global radius tokens are a scale of grades that range from 0 to 400 in steps of 100. There are two additional global tokens:

- **Circle:** Sets the value to 50% create an elliptical radius.
- **Pill:** Sets the value to an arbitrarily high number (in this case, `9999px`) so as to create semi-circular ends regardless of the size of the container.

There are currently no alias radius tokens. Use the global tokens to define radius on elements.

Radius tokens MUST:

- Use the naming structure `border.radius.*`.
- Use the DTCG type `dimension`.
- Use the unit `px`.

Radius tokens MAY:

- Reference other Forge `dimension.*` tokens.
