# Component documentation template

ALWAYS use this exact template structure:

```markdown
# [name]

[Intro paragraph: a short, warm expansion of the one-line description, grounded only in what the spec says the component does.]

2. **Anatomy** (H2)

- A plain-language, numbered list of the component's structural parts, drawn from the distinct Figma layer names in the spec's style tables (e.g. badge-wrapper, badge-value).
- No image — this repo has no anatomy diagram assets, so don't claim one exists; a bare list of labeled parts is correct here.

3. **Variants** (H2)

- One H3 (or H4 if the spec nests further, e.g. Button's Size > Extra small) per `## Variants` subsection in the spec, same order as the spec.
- Prose explains what the variant does and when to use it, pulled directly from the spec's bullets.
- Remove style-hook tables noted in the spec.

4. **Behavior → States** (H2 → H3)

- Include only if the spec defines interactive states (enabled/hover/focus/active/disabled/selected/pending, etc.) for this component.
- Omit the section rather than inventing state colors.

6. **Accessibility** (H2)

- Include only what's evidenced.
- Expand the numbers to include the title of the criteria if not already included. For example, "1.3.1" SHOULD be reformatted to "1.3.1: Info and relationships". Do not include the level if noted in parentheses.
- Link WCAG criteria numbers to their respective pages on `https://www.w3.org/WAI/WCAG22/`.

7. **Contradictions with system guidance** (H2)

— **Only when a genuine, unresolved conflict exists** between the spec and DESIGN.md

- Examples:
  - A spec default token pairing that appears to fail DESIGN.md's stated contrast-difference rule;
  - A spec behavior that runs counter to an established DESIGN.md principle;
  - A naming or structural convention the spec uses that DESIGN.md's rules would otherwise forbid.
- Do not use this section for things you can simply fix by following DESIGN.md (e.g. dot-notation tokens — just convert those, silently, per the rule).
- For each contradiction: name the DESIGN.md rule, name the spec's conflicting statement, and state plainly that the spec's behavior is being documented as-is because it's a deliberate/necessary exception.
- If there are no genuine contradictions, omit this section entirely — never include it empty or as a formality.

8. **API reference** (H2)

- General component usage in code plus a series of component API and CSS custom property tables based on JSDoc tags from the component codebase.
  — One line linking to the Storybook docs page: `https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-<slug>--docs` (derive `<slug>` from the spec's `componentName`, stripping the `jh-` prefix, e.g. `jh-badge` → `badge`). Multi-part components keep their full slug.
- **Attributes** (H3) — attribute names, descriptions, types, and default values.
- **Events** (H3) — event names and descriptions.
- **Slots** (H3) — slot names and descriptions.
- **Style hooks** (H3) - CSS custom property names, descriptions, and default values.

9. **Feedback** (H2)

- Standard closing boilerplate matching the existing pages: links to open a GitHub issue and join the GitHub discussion board.
```