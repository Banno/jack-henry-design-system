---
name: docs-foundation
description: "Generate or refresh a Forge component documentation page (docs/components) from its spec file, matching jackhenry.design/Storybook structure and DESIGN.md rules."
---

# Component documentation page

Builds a `docs/components/<slug>.md` page for one Forge component. Content always comes from the component's spec file — never from the live site, Storybook, training knowledge, or invention. The live site and Storybook are consulted only to decide _which sections_ a component page should have and in _what order_; DESIGN.md is consulted to decide _how_ facts must be phrased (token formatting, required accessibility subsections, voice) and to catch any place the spec conflicts with system-wide rules.

If the user names a component, use it. If not, ask which component (list `/specs/*.md` to offer choices).

## Step 1 — Read the sources, in this order

1. **`/specs/<component>.md`** — the sole source of truth for facts: description, style hooks, defaults, variants, variant-specific rules (SHOULD/MUST/NEVER language), states, and any other behavior. If this file doesn't exist, stop and tell the user — do not draft a page from guesswork or from the live site's content.
2. **`DESIGN.md`** (repo root) — the system's rulebook. Pull out, every time:
   - The token rule under _Overview_: dot-notation tokens (`badge.border.radius`) must be converted to kebab-case prefixed with `--jh` (`--jh-badge-border-radius`) for web documentation. Apply this to every style-hook token in the page you write — this is a compliance step, not optional style.
   - Relevant foundation rules that bear on this component's tokens (color contrast/pairing rules, border concepts, focus ring behavior, dimension scale) so the page's language about defaults stays consistent with how DESIGN.md describes those systems.
   - Voice and tone section — match its "clear, confident, human" register.
3. **`/packages/jh-elements/components/`** - the component code. Use the JSDoc tags to generate component API and CSS custom property tables.

## Step 2 - Folder structure

Create the following documentation folder structure:

- `/docs/`: Top-level folder for all created documentation pages.
  - `/foundations/`: All high-level guidelines. These are predominately derived from the content in DESIGN.md.
  - `/components/`: All component docs. These are derived from the files in `/specs/`.

Additional folders SHOULD NOT be created unless otherwise noted.

## Step 3 - Templates

- Use the specified orders.
- A section MUST NOT be included if you'd have to invent the content.
- Anatomy diagrams, Figma instructions, exact WCAG numbers, or visual state swatches that aren't backed by the spec MUST NOT be fabricated.



1. **Frontmatter + H1 + intro**

- `title` and `description` from the spec's frontmatter `name`/`description`.
- Intro paragraph: a short, warm expansion of the one-line description (voice/tone from DESIGN.md), grounded only in what the spec says the component does.

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

## Step 3 — Write and verify

- Do not rewrite or otherwise change the content if the guidelines are still accurate.
- Adjust the style to use a simple present tense.
- Favor conversational tone and verbiage over the explicit **MUST/SHOULD/MAY/etc.** terms when writing RFC 2119 rules. Do not capitalize terminology.
- Keep documentation concise
- Write the file to `docs/components/<slug>.md` (match existing filename/casing conventions; multi-part components use their full hyphenated slug, e.g. `input-email.md`).
- Do the token-conversion pass explicitly: scan the draft for any remaining dot-notation tokens in style-hook tables and convert every one to `--jh-kebab-case` form.
- Re-read DESIGN.md's relevant rule sections once more against the finished draft, specifically checking for contradictions (Step 2.8) — this is the check most easily skipped, so do it as a deliberate last pass, not just while drafting.
- Confirm every factual claim in the draft traces back to the spec or DESIGN.md. If you found a genuinely useful fact only on jackhenry.design/Storybook (not in the spec), don't add it to the page — instead flag it to the user as a possible gap in the spec worth adding upstream.
- In your final message to the user, briefly note: which sections were included vs. omitted and why, any contradictions flagged, and any spec gaps (e.g. missing states, missing accessibility detail) that a human should fill in.
