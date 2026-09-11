---
title: Overview
description: Key terminology and the design-token conventions that apply across every Forge foundation and component.
---

# Overview

Forge powers the products banks and credit unions rely on every day, creating a shared foundation for teams to design, build, and scale consistently across platforms. Before diving into colors, type, or any individual component, it helps to get comfortable with a few terms and conventions that show up throughout the rest of this documentation.

## Terminology

Forge uses specific terms throughout the system. Prefer these over other conventions you might have seen elsewhere, unless a page says otherwise:

- **Global token** — the same as a primitive design token.
- **Alias token** — the same as a semantic design token.
- **Grade** — a particular level of value within a scale. You might also see this called a level or a step.

## Design tokens

Design tokens and style hooks (component-level tokens) are written in dot notation throughout our specs and documentation — for example, `badge.border.radius`. That's the source-of-truth naming, and it's what you see referenced in prose and in most tables on this site.

The one place dot notation doesn't apply is inside a code example written in a specific platform's syntax. There, the platform's actual syntax takes over, for the sake of clarity and accuracy. In practice, that mostly means style hooks: they're the tokens actually exposed to you as a developer, in a platform-specific form such as CSS custom properties on the web. So a style hook like `button.border.radius` becomes `--jh-button-border-radius` in CSS.

Global and alias tokens, by contrast, aren't meant to be reached for directly in a design — they exist to define the alias tokens and style hooks that components actually expose (more on that in [Colors](./colors.md)).

Whenever you need token values, pull them from `/packages/jh-tokens/` rather than inventing your own — tokens must never be invented within Forge's code or documentation.
