# Component documentation template

- Write the file to `/docs/components/<slug>.md` (match existing filename/casing conventions; multi-part components use their full hyphenated slug, e.g. `input-email.md`).
- The following template structure SHOULD be used. Sections MAY be omitted if there is no relevant content in the source.

```markdown
# [name]

Intro paragraph: Short, warm expansion of `description`, grounded only in what the spec says the component does. Ignore if `description` is empty or not present.

Bulleted list of metadata:

- **Status**: [status]
- **Added**: [added]
- **Package**: [package]

## Anatomy

- A plain-language, numbered list of the component's visible parts, drawn from the distinct Figma layer names in the spec's style tables (e.g. badge-value). Do not include non-visible parts such as wrappers.
- No image — this repo has no anatomy diagram assets, so don't claim one exists; a bare list of labeled parts is correct here.

## Options

- One H3 (or H4 if the spec nests further, e.g. Button's Size > Extra small) per `## Options` subsection in the spec, same order as the spec.
- Prose explains what the option does.
- List specific variants (ex. small, medium, large) within an option (ex. size) as bulleted list with brief description as to what it is and does.
- Do not include usage guidelines. Reserve those for the `## Usage` section in the template.
- Do not include style-hook tables noted in the spec. Reserve those for the `## API reference` section

## Behavior

### States

- Include only if the spec defines interactive states (enabled/hover/focus/active/disabled/selected/pending, etc.) for this component.

## Usage

### Do

- Include a bulleted list of guidelines that users SHOULD or MUST do.

### Don't

- Include a bulleted list of guidelines that users SHOULD NOT or MUST NOT do.

## Accessibility

- Bulleted list of criteria. Group by subheadings.
- Include only what's evidenced.
- Include criteria number and title. For example, "1.3.1" SHOULD be reformatted to "1.3.1: Info and relationships". Do not include the level (ex., AA).
- Link WCAG criteria numbers to [their respective pages](https://www.w3.org/WAI/WCAG22/).

### What we provide

### Author guidance

## API reference

- Use JSDoc tags for documenting the API

### Attributes

- A table of each attribute defined in `properties()`
- Use table format: `|Attribute name|Description|Type|Default value|`

### Events

- A table of each event tagged with `@event`
- Use table format: `|Event name|Description|`

### Slots

- A table of each slot tagged with `@slot`
- Use table format: `|Slot name|Description|`

### Style hooks

- A table of each component style hook tagged with `@cssprop`
- Use "style hook" instead of "CSS custom property"
- Default value is marked with "Defaults to"; do not include this text in the table
- Use table format: `|Style hook|Description|Default value|`

## Dependencies

List Forge components this component is dependent on. Use the following structure

- [name]: Link to component page if it exists.
- [description]: Use concise description from component spec.

## Feedback

- Standard closing boilerplate matching the existing pages: links to open a GitHub issue and join the GitHub discussion board.
```
