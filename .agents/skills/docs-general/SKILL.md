---
name: writing-documentation
description: Write or edit Forge documentation pages from spec files.
---

- Content MUST be derived only from specified sources.
- Content MUST NOT be derived from invention.

## Step 1: Read the sources, in this order

1. **`/specs/`**: The primary source of truth for all guidelines and documentation.
2. **`/packages/jh-tokens/tokens/`**: The design token data. Use as the source of truth for all design token related documentation.
3. **`/packages/jh-elements/components/`**: The component code files. Use the JSDoc tags for component API and CSS custom property tables.

## Step 2: Create the folder structure

- Documentation MUST always be created in the `/docs/` folder.
- The following folders MUST always be reserved for their respective content:
  - `/foundations/`: All high-level guidelines. These are predominately derived from the content in DESIGN.md.
  - `/components/`: All component docs. These are derived from the files in `/specs/`.

## Step 3: Templates

- **Foundation pages**: See [template-foundation.md](template-foundation.md) for complete guide
- **Component pages**: See [template-component.md](template-component.md) for complete guide

## Step 4: Write then content

- Voice and tone MUST conform to the guidelines in [voice-and-tone.md](/specs/foundation/voice-and-tone.md).
- Favor conversational tone and verbiage over the explicit **MUST/SHOULD/MAY/etc.** terms when writing content from RFC 2119 rules.
- Do not capitalize rules.
- Do not rewrite or otherwise change the content if the guidelines are still accurate.
- Adjust the style to use a simple present tense.
-
- Keep documentation concise
- Write the file to `docs/components/<slug>.md` (match existing filename/casing conventions; multi-part components use their full hyphenated slug, e.g. `input-email.md`).
- Do the token-conversion pass explicitly: scan the draft for any remaining dot-notation tokens in style-hook tables and convert every one to `--jh-kebab-case` form.

## Step 5: Verify

- Confirm every factual claim in the draft traces back to its relevant source.
- In your final message to the user, briefly note:
  - Which sections were included vs. omitted and why
  - Any contradictions flagged
  - Any spec gaps that a human should fill in.
