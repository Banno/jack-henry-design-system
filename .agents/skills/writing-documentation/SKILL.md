---
name: writing-documentation
description: Write or edit Forge documentation pages from all spec files.
---

## Overview

- Content MUST be derived only from specified sources in step 1. Do not use content from [jackhenry.design](https://jackhenry.design).
- Content MUST NOT be derived from invention.
- Write documentation to [/docs/](/docs/).
- Specs use [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119.txt) for requirement levels.

## Step 1: Read the sources, in this order

1. **`/specs/`**: The primary source of truth for all documentation.
2. **`/packages/jh-tokens/tokens/`**: The design token data. Use as the source of truth for all design token related documentation.
3. **`/packages/jh-elements/components/`**: The component code files. Use the JSDoc tags for component API and CSS custom property tables.

## Step 2: Process the templates

Use the appropriate template structure and guidelines to organize the content based on the source material:

- **Foundation pages**: See [template-foundation.md](template-foundation.md).
- **Component pages**: See [template-component.md](template-component.md).

Specs outside of either those contexts MAY be structured in way that's appropriate to the content.

## Step 4: Write the content

- Voice and tone MUST conform to the guidelines in [voice-and-tone.md](/specs/foundation/voice-and-tone.md).
- Grammatical style SHOULD be simple present tense. Adjust to this if the source content deviates.
- Documentation SHOULD be concise.
- Favor conversational tone and verbiage over the explicit RFC 2119 terms when writing content from RFC 2119 rules.
- Rules MUST NOT be capitalized.
- Content SHOULD NOT be rewritten or otherwise changed if the original documentation is still accurate with its sources.
- Do the token-conversion pass explicitly: scan the draft for any remaining dot-notation tokens in style-hook tables and convert every one to `--jh-kebab-case` form.

## Step 5: Verify

- Confirm every factual claim in the draft traces back to its relevant source.
- In your final message to the user, briefly note:
  - Which sections were included vs. omitted and why
  - Any contradictions flagged
  - Any spec gaps that a human should fill in.
