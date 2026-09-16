---
title: Dimensions
description: Forge utilizes defined dimensions to create consistent layouts regardless of platform or screen size.
---

# Dimensions

Forge utilizes defined dimensions to create consistent layouts regardless of platform or screen size.

Global dimension tokens are a scale of grades ranging from `0` to `2400` in steps of 100, with two additional grades — `25` and `50` — for more fine-grained control at smaller scales. The scale establishes the `100` grade as the base, with a value of `4px`. Values share the same proportional relationship as the scale grades — for example, grade `400` is four times the value of grade `100`.

There are currently no alias tokens for `dimension` — use the global tokens to define dimension-based properties on elements. Users can create their own semantic spacing and sizing alias tokens as appropriate.

Dimension tokens use the naming structure `dimension.*`, the DTCG type `dimension`, and the unit `px`.

