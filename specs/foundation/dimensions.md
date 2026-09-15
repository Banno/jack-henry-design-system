---
name: Dimensions
description:
---

Global dimension tokens are a scale of grades that range from `0` to `2400` in steps of 100. There are two additional grades—`25` and `50`—for more fine-grained control at smaller scales. The scale establishes the `100` grade as the base with a value of `4px`. The values have the same proportional relationship as the scale grades. For example, grade `400` is four times that of grade `100`. Therefore, the value of grade `400` is four times more than that of grade `100`.

There are currently no alias tokens for `dimension`. Use the global tokens to define dimension-based properties on elements. Users MAY create their own semantic spacing and sizing alias tokens as appropriate.

Dimension tokens MUST:

- Use the naming structure: `dimension.*`.
- Use the DTCG type `dimension`.
- Use the unit `px`.
