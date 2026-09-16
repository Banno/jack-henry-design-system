---
title: Design tokens
description: Our design tokens are built with specific structures in mind that allow them to be incorporated and extended in a consistent and predictable manner.
---

# Design tokens

Our design tokens are built with specific structures in mind that allow them to be incorporated and extended in a consistent and predictable manner.

Design tokens and style hooks (component tokens) are written in dot-notation throughout the specs for consistency. The one exception is a code example of a specific syntax — the correct syntax should be used there to promote clarity and accuracy. Style hooks are only available to users in platform-specific syntax, such as CSS custom properties for the web.

Convert all dot-notation design tokens to kebab case and prefix with `--jh` when creating documentation for the web. Use existing token information found in `/packages/jh-tokens/` wherever possible — don't invent tokens within the base Forge code or documentation.

## Global tokens

The most basic values within the visual language, representing all of the visual choices available within Forge. Use these when an appropriate alias token doesn't exist.

## Alias tokens

Communicate the specific function or purpose of a global token. Use these wherever possible.

## Style hooks

Function as component-level alias tokens, allowing users to override or theme very specific aspects of a given component, such as the color of a label or the radius of a particular container. Each component spec provides a complete list of available style hooks.

A comprehensive set of component variables that align with Forge's CSS style hooks is available in Figma. These can be redefined with new values as needed for theming, but shouldn't be applied to user-created custom components.

## Naming structure

Design tokens follow a naming convention that provides an appropriate level of specificity and context, so users can better understand a token's intended use.

1. **System:** a short designation of which library the tokens belong to. Forge prefixes this as part of the build process.
2. **Component:** contextualizes the token to a specific component, such as card or button.
3. **Element:** targets a specific element within a component, such as a label or icon.
4. **Category:** describes a specific visual style concern, such as color, font, and size.
5. **Concept:** breaks down a given category into semantic subdivisions.
6. **Property:** contextualizes a token to a standard CSS property, such as `background`, `border`, or `text`.
7. **Mode:** denotes specific color pairings with an "on" designation.
8. **Variant:** describes alternative use cases for a base token, such as primary, secondary, or success.
9. **State:** describes interactive states for a token, such as hover, active, or disabled.
10. **Scale:** denotes graduated steps of a token variant, typically specified as ordered levels.

Levels can be skipped if not needed to clarify a token's usage, but they always stay in the order above.

A few examples of tokens and their underlying structure:

- **shadow.100:** [category].[scale]
- **color.content.on.brand.enabled:** [category].[concept].[mode].[variant].[state]
- **button.icon.color.fill.primary.hover:** [component].[element].[category].[property].[variant].[state]

Product-specific tokens should follow the same naming conventions to ensure consistency and compatibility, using an appropriate system name that prevents collisions with Forge's `jh` tokens.

