---
title: Accessibility
description: The standards, testing practices, and documentation requirements that keep Forge usable by everyone.
---

# Accessibility

Web accessibility means building websites and tools that everyone can use, including people with visual, auditory, motor, or cognitive disabilities — many of whom rely on assistive technology (AT) like screen readers, magnifiers, and keyboard-only navigation. The goal is digital content that's perceivable, operable, understandable, and robust. This isn't just a matter of fairness; it's a legal and business imperative, and it represents a significant portion of the market.

Forge is built with the following laws in mind:

- Americans with Disabilities Act (ADA)
- Section 508 of the Rehabilitation Act
- European Accessibility Act (EAA)

These laws point to the Web Content Accessibility Guidelines (WCAG) — a global W3C standard — for compliance. WCAG defines testable success criteria at levels A, AA, and AAA, and Forge aims to satisfy WCAG 2.2 levels A and AA.

## Design principles

Accessibility starts with the design decisions behind a component:

- **WCAG-compliant design** — components are created to follow WCAG standards from the outset.
- **Design tokens** — Forge's design tokens keep contrast requirements and font readability (sizing, spacing) consistent across every component.
- **Interactive element standards** — pointer targets, like buttons, meet minimum sizing, and every interactive element has a visible focus indicator and a logical keyboard navigation flow.

## Engineering for web components

Web components come with accessibility considerations that native HTML elements don't have to deal with: they lack built-in AT support for ARIA roles, keyboard interaction, and focus, and the shadow DOM can make it harder for AT to understand a component's structure. Forge addresses this with two mechanisms.

### ElementInternals

The `ElementInternals` API lets custom elements participate directly in the browser's Accessibility Object Model (AOM) — the way browsers expose an element's roles, states, and properties to assistive technology. Using `ElementInternals`, Forge components can declare their accessibility properties to AT just like a native HTML element does, establishing sensible defaults that can still be overridden or extended for specific component behavior.

`ElementInternals` is built into `jh-element`, the base that every Forge component extends, so any component built on it automatically inherits this behavior — engineers don't need to wire it up themselves for every new component.

### Custom ARIA attribute propagation

Because the shadow DOM can block standard ARIA attributes from reaching elements inside it, Forge provides an `accessible-*` attribute namespace. Authors set attributes like `accessible-label` on a Forge component, and the component maps that to the appropriate standard `aria-*` attribute for AT under the hood.

For example, an icon-only button needs an `aria-label` so a screen reader can announce it correctly:

```html
<jh-button accessible-label="Print"><jh-icon-printer></jh-icon-printer></jh-button>
```

### Keyboard navigation and focus

Forge implements keyboard interaction flows and focus behavior that match native HTML for simple components.

## How we test

Every Forge component is tested against WCAG 2.2 levels A and AA using a combination of methods:

- **Automated testing** — Axe-core, an open-source accessibility testing engine from Deque Systems, checks for common issues early and consistently.
- **Manual testing with AT** — screen readers and magnifiers, exercised across all supported browsers.
- **Manual keyboard testing** — confirming every interactive element is reachable, shows a focus indicator, and is fully usable from the keyboard.

Automated tools like Axe-core are valuable, but on average they only catch around 57 percent of accessibility issues — manual testing with screen readers and keyboard navigation is essential to catching the rest.

## Documenting component accessibility

Every component's documentation page should include:

- A list of the relevant WCAG 2.2 success criteria the component needs to meet.
- A **What we provide** section detailing built-in accessibility features and how to use them.
- An **Author guidance** section covering any additional steps needed to make the component accessible in context.

## Accessibility beyond Forge

Forge's components are built to be accessible, but wiring them into a fully accessible page still takes some attention on your part:

- **Semantic HTML** — use HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, and so on) to structure content meaningfully.
- **Logical focus order** — make sure interactive elements (links, buttons, form fields) follow a flow that matches the visual layout.
- **Keyboard usability** — every interactive element should be reachable by keyboard, show a clear focus indicator, and never trap keyboard focus.
- **Alt text for images** — give every image appropriate alt text that conveys its content or purpose.
- **Descriptive links** — write link text that describes its destination or action.
- **Form labels and feedback** — associate every form field with a clear label, and provide actionable error messages.
