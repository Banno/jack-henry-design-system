---
name: Design tokens
description: Our design tokens are built with specific structures in mind that allow them to be incorporated and extended in a consistent and predictable manner.
---

- Design tokens and style hooks (ie, component tokens) are written in dot-notation throughout the specs for the sake of consistency.The one exception is when referenced in the code example of a specific syntax. The correct syntax MUST be used in that circumstance to promote clarity and accuracy. Practically, style hooks are only available to users in platform-specific syntax such as CSS custom properties for the web.
- Convert all dot-notation design tokens to kebab case and prefix with `--jh` when creating documentation for the web.
- Use existing token information found in `/packages/jh-tokens/` wherever possible. Tokens MUST NOT be invented within the base Forge code or documentation.

## Global tokens

- The most basic values within the visual language. They represent all of the visual choices available within Forge.
- These MAY be used when an appropriate alias token doesn’t exist.

## Alias tokens

- Communicate the specific function or purpose of a global token.
- These SHOULD be used wherever possible.

## Style hooks

- Function as component-level alias tokens.
- These allow users to override or theme very specific aspects of a given component such as the color of a label or the radius of a particular container.
- Each component spec provides a complete list of available style hooks.
- A comprehensive set of component variables that align with our CSS style hooks is available in Figma:
  - These MAY be redefined with new values as needed for theming.
  - These SHOULD NOT not be applied to user-created custom components.

## Naming structure

Design tokens follow a naming convention to provide an appropriate level of specificity and context so users can have a better understanding of a token's intended use.

1. **System:** A short designation of which library the tokens belong to. Forge prefixes this as part of the build process.
2. **Component:** Contextualizes the token to a specific component such as card or button.
3. **Element:** Targets a specific element within a component such as a label or icon.
4. **Category:** Describes a specific visual style concern such as color, font, and size.
5. **Concept:** Breaks down a given category into semantic subdivisions.
6. **Property:** Contextualizes a token to a standard CSS property such as `background`, `border`, or `text`.
7. **Mode:** Denotes specific color pairings with an “on” designation.
8. **Variant:** Describes alternative use cases for a base token such as primary, secondary, or success.
9. **State:** Describes interactive states for a token such as hover, active, or disabled.
10. **Scale:** Denotes graduated steps of a token variant, typically specified as ordered levels.

Levels MAY be skipped if not needed to clarify a token’s usage. However, levels MUST always be placed in the aforementioned order.

The following are a few examples of tokens and their underlying structure:

- **shadow.100:** [category].[scale]
- **color.content.on.brand.enabled:** [category].[concept].[mode].[variant].[state]
- **button.icon.color.fill.primary.hover:** [component].[element].[category].[property].[variant].[state]

Product-specific tokens SHOULD follow the same naming conventions to ensure consistency and compatibility—albeit with an appropriate system name that prevents collisions with Forge’s `jh` tokens.
