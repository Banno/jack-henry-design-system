---
name: writing-documentation
description: Write or edit Forge documentation pages from all spec files.
---

## Overview

- **Under no circumstances:** MUST NOT edit or otherwise alter **any** of the source files. These are source-of-truth.
- MUST write documentation to [/docs/](/docs/).
- MUST derive content only from specified sources in step 1.
- SHOULD use [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119.txt) for requirement levels.
- MUST NOT use content from [jackhenry.design](https://jackhenry.design).
- MUST NOT derive content from invention.

## Step 1: Read the sources, in this order

1. **`/specs/*`**: The primary source of truth for all documentation.
2. **`/packages/jh-tokens/tokens/`**: The design token data. MUST use as the source of truth for all design token related documentation.
3. **`/packages/jh-elements/components/`**: The component code files. MUST use the JSDoc tags for component API and CSS custom property tables.

## Step 2: Process the templates

MUST use the appropriate template structure and guidelines to organize the content based on the source material:

- **Foundation pages**: See [template-foundation.md](template-foundation.md).
- **Component pages**: See [template-component.md](template-component.md).

MAY structure specs outside of either those contexts in a way that's appropriate to the content.

## Step 4: Write the content

- MUST conform to the guidelines in [voice-and-tone.md](/specs/foundation/voice-and-tone.md).
- MUST do the token-conversion pass explicitly: scan the draft for any remaining dot-notation tokens in style-hook tables and convert every one to `--jh-kebab-case` form.
- SHOULD prefer prose for descriptions and general guidance.
- SHOULD prefer bulleted lists for usage.
- SHOULD use complete sentences where possible.
- SHOULD be simple present tense. Adjust to this if the source content deviates.
- SHOULD be concise.
- MUST NOT use RFC 2119 terms. Use informal and conversational tone and verbiage.
- MUST NOT use all-caps for rules.
- SHOULD NOT rewrite or change content if original is still accurate with its sources.

## Step 5: Verify

- MUST confirm every factual claim in the draft traces back to its relevant source.
- MUST briefly note in your final message to the user:
  - Which sections were included vs. omitted and why
  - Any contradictions flagged
  - Any spec gaps that a human should fill in.
