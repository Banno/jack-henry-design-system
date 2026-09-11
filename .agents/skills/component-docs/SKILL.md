---
name: component-docs
description: "Generate or refresh a Forge component documentation page (docs/components) from its spec file, matching jackhenry.design/Storybook structure and DESIGN.md rules."
---

# Component documentation page

Builds a `docs/components/<slug>.md` page for one Forge component. Content always comes from the component's spec file — never from the live site, Storybook, training knowledge, or invention. The live site and Storybook are consulted only to decide _which sections_ a component page should have and in _what order_; DESIGN.md is consulted to decide _how_ facts must be phrased (token formatting, required accessibility subsections, voice) and to catch any place the spec conflicts with system-wide rules.

If the user names a component, use it. If not, ask which component (list `/specs/*.md` to offer choices).

## Step 1 — Read the sources, in this order

1. **`/specs/<component>.md`** — the sole source of truth for facts: description, style hooks, defaults, variants, variant-specific rules (SHOULD/MUST/NEVER language), states, and any other behavior. If this file doesn't exist, stop and tell the user — do not draft a page from guesswork or from the live site's content.
2. **`DESIGN.md`** (repo root) — the system's rulebook. Pull out, every time:
   - The token rule under _Overview_: dot-notation tokens (`badge.border.radius`) must be converted to kebab-case prefixed with `--jh` (`--jh-badge-border-radius`) for web documentation. Apply this to every style-hook token in the page you write — this is a compliance step, not optional style.
   - The _Component accessibility documentation_ rule (under Accessibility): every component page SHOULD include relevant WCAG 2.2 success criteria, a "What we provide" subsection, and an "Author guidance" subsection. Only state a WCAG success criterion number if the spec or DESIGN.md actually gives you grounds for it (e.g. an explicit contrast ratio, resize behavior, or color-alone warning) — don't cite SC numbers from memory.
   - Relevant foundation rules that bear on this component's tokens (color contrast/pairing rules, border concepts, focus ring behavior, dimension scale) so the page's language about defaults stays consistent with how DESIGN.md describes those systems.
   - Voice and tone section — match its "clear, confident, human" register.
3. **`/packages/jh-elements/components/`** - the component code. Use the JSDoc tags to generate component API and CSS custom property tables.

## Step 2 — Section template

Use this order. A section is included **only if the spec (plus DESIGN.md) actually supplies content for it** — never include a section just because the live site has it if you'd have to invent the content. Never fabricate anatomy diagrams, Figma instructions, exact WCAG numbers, or visual state swatches that aren't backed by the spec.

1. **Frontmatter + H1 + intro** — `title` and `description` from the spec's frontmatter `name`/`description`. Intro paragraph: a short, warm expansion of the one-line description (voice/tone from DESIGN.md), grounded only in what the spec says the component does.
2. **Code documentation** (H2) — one line linking to the Storybook docs page: `https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-<slug>--docs` (derive `<slug>` from the spec's `componentName`, stripping the `jh-` prefix, e.g. `jh-badge` → `badge`). Multi-part components keep their full slug.
3. **Anatomy** (H2) — a plain-language, numbered list of the component's structural parts, drawn from the distinct Figma layer names in the spec's style tables (e.g. badge-wrapper, badge-value). No image — this repo has no anatomy diagram assets, so don't claim one exists; a bare list of labeled parts is correct here.
4. **Variants** (H2) — one H3 (or H4 if the spec nests further, e.g. Button's Size > Extra small) per `## Variants` subsection in the spec, same order as the spec. Prose explains what the variant does and when to use it, pulled directly from the spec's bullets; style-hook tables carry over with tokens converted to `--jh-*` form per the DESIGN.md rule.
5. **Behavior → States** (H2 → H3) — include only if the spec defines interactive states (enabled/hover/focus/active/disabled/selected/pending, etc.) for this component. Most current specs (badge, button) don't yet define these — omit the section rather than inventing state colors.
6. **Usage** (H2) — a bullet list of guidance synthesized from the spec's MUST/SHOULD/NEVER/ALWAYS language (e.g. "never use outside another component," "pair with a live region when the badge updates live"). Every bullet must trace back to a spec statement or a DESIGN.md rule — don't add generic best-practice advice that isn't grounded in either.
7. **Accessibility** (H2) — required by DESIGN.md. Include only what's evidenced:
   - A short list of relevant WCAG 2.2 AA criteria, stated only where the spec/DESIGN.md gives concrete grounds (contrast ratios, resize behavior, color-alone warnings, live-region needs).
   - **What we provide** (H3) — built-in accessibility behavior the spec describes (e.g. contrast-safe default colors, resize tolerance).
   - **Author guidance** (H3) — steps the _page author_ must still take (e.g. "pair the badge with visible text conveying the same info," "add a live region for live updates").
8. **Contradictions with system guidance** (H2) — **only when a genuine, unresolved conflict exists** between the spec and DESIGN.md (for example: a spec default token pairing that appears to fail DESIGN.md's stated contrast-difference rule; a spec behavior that runs counter to an established DESIGN.md principle; a naming or structural convention the spec uses that DESIGN.md's rules would otherwise forbid). Do not use this section for things you can simply fix by following DESIGN.md (e.g. dot-notation tokens — just convert those, silently, per the rule). For each contradiction: name the DESIGN.md rule, name the spec's conflicting statement, and state plainly that the spec's behavior is being documented as-is because it's a deliberate/necessary exception. If there are no genuine contradictions, omit this section entirely — never include it empty or as a formality.
9. **Properties** (H2) - a series of component API and CSS custom property tables based on JSDoc tags from the component codebase.
10. **Feedback** (H2) — standard closing boilerplate matching the existing pages: links to open a GitHub issue and join the GitHub discussion board.

## Step 3 — Write and verify

- Write the file to `docs/components/<slug>.md` (match existing filename/casing conventions; multi-part components use their full hyphenated slug, e.g. `input-email.md`).
- Do the token-conversion pass explicitly: scan the draft for any remaining dot-notation tokens in style-hook tables and convert every one to `--jh-kebab-case` form.
- Re-read DESIGN.md's relevant rule sections once more against the finished draft, specifically checking for contradictions (Step 2.8) — this is the check most easily skipped, so do it as a deliberate last pass, not just while drafting.
- Confirm every factual claim in the draft traces back to the spec or DESIGN.md. If you found a genuinely useful fact only on jackhenry.design/Storybook (not in the spec), don't add it to the page — instead flag it to the user as a possible gap in the spec worth adding upstream.
- In your final message to the user, briefly note: which sections were included vs. omitted and why, any contradictions flagged, and any spec gaps (e.g. missing states, missing accessibility detail) that a human should fill in.

## Working across the device bridge

When this repo is reached via a linked computer (device_bash tools), read specs/DESIGN.md/existing docs and write the new page directly on the user's machine with device_bash (cat to read, a heredoc or python script to write) rather than staging files into the container — these are small text files and the edit is a straightforward write, not a transform that needs container-only tooling. Only stage a file into the container if you need to view an image/PDF asset or need a container-only tool.
