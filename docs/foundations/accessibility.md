---
title: Accessibility
---

# Accessibility

## Understanding web accessibility

Web accessibility means building websites and tools usable by everyone, including people with visual, auditory, motor, or cognitive disabilities. Many rely on assistive technologies (AT) like screen readers, magnifiers, and keyboard-only navigation.

The goal is to make digital content perceivable, operable, understandable, and robust. This isn't just about fairness — it's a legal and business imperative, since millions in the U.S. live with disabilities, representing a significant market.

Forge is motivated by these key laws:

- [Americans with Disabilities Act (ADA)](https://www.ada.gov/)
- [Section 508 of the Rehabilitation Act](https://www.section508.gov/)
- European Accessibility Act (EAA)

These laws use the Web Content Accessibility Guidelines (WCAG) — a global W3C standard — for compliance. WCAG sets out testable criteria at levels A, AA, and AAA. To comply with these laws, Forge aims to satisfy [WCAG 2.2](https://www.w3.org/TR/WCAG22/) levels A and AA success criteria.

## Design principles

Accessibility begins with thoughtful design decisions:

- **WCAG-compliant design:** create components following WCAG standards.
- **Design tokens:** use the Forge design tokens to ensure consistent adherence to WCAG contrast requirements and optimal font readability (sizing, spacing) across all components.
- **Interactive element standards:** ensure pointer targets (like buttons) meet minimum sizing and all interactive elements have visible focus indicators and logical keyboard navigation flows.

## Engineering for web components

Web components introduce distinct accessibility considerations compared to native HTML elements:

- They lack built-in AT support (ARIA roles, keyboard interaction, focus).
- Shadow DOM can complicate AT understanding of component structure.

To address these, Forge leverages:

### ElementInternals: bridging the accessibility gap

The ElementInternals API is crucial for making custom elements robust and accessible.

- **Purpose and accessibility object model (AOM):** allows custom elements to directly participate in the browser's AOM — how browsers expose semantic information (roles, states, properties) about UI elements to assistive technologies. Using ElementInternals, Forge's custom components can declare their accessibility properties to ATs just like native HTML elements, establishing default accessibility properties that can be overridden or extended as needed for specific component behaviors.
- **Built into our base `jh-element`:** any component extending `jh-element` automatically inherits the ElementInternals object, so engineers don't need to manually implement it for every component.

### Custom ARIA attribute propagation (`accessible-*`)

Shadow DOM can block standard ARIA attributes from reaching elements inside it. To ensure ARIA attributes are correctly applied within Shadow DOM, Forge provides the `accessible-*` namespace. Authors use attributes like `accessible-label` on Forge components, and the component code maps these to the appropriate standard `aria-*` attributes for AT.

Example: for an icon-only button, an `aria-label` is crucial for screen readers to announce it correctly, using `jh-button`:

```html
<jh-button accessible-label="Print"
  ><jh-icon-printer></jh-icon-printer
></jh-button>
```

### Robust keyboard navigation and focus

Forge implements keyboard interaction flows and focus behavior that matches native HTML for simple components.

## Achieving component accessibility

Forge components are rigorously tested against WCAG 2.2 levels A and AA criteria.

Forge uses Axe-core, a powerful, open-source accessibility testing engine developed by Deque Systems, as its primary automated benchmark. Axe-core runs automated checks directly within web applications and is known for its speed, accuracy, and ability to detect a significant portion of WCAG violations early in the development cycle.

Every component is tested using:

- **Automated testing:** using Axe-core to identify common accessibility issues.
- **Manual testing with AT:** using screen readers and magnifiers in all supported browsers.
- **Manual keyboard testing:** ensuring all interactive elements are reachable, show focus indicators, and are fully usable via keyboard.

## Component accessibility documentation

Component documentation should provide extensive accessibility information for each component, including:

- A list of relevant WCAG 2.2 success criteria the component needs to meet.
- A "What we provide" section with detailed information on built-in accessibility features and how to use them.
- An "Author guidance" section, with instructions on any additional steps authors must take to ensure the component is accessible in their context.

## Accessibility beyond Forge

While Forge's components are accessible, integrating them into a fully accessible webpage requires attention to overall structure, content, and user experience. Here are key tips for page authors:

- **Semantic HTML:** use HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, etc.) to structure content meaningfully.
- **Logical focus order:** ensure interactive elements (links, buttons, form fields) follow a logical flow matching the visual layout.
- **Keyboard usability:** make all interactive elements reachable with the keyboard, show a clear focus indicator, and avoid keyboard traps.
- **Alt text for images:** provide appropriate alt text for all images to convey their content or purpose.
- **Descriptive links:** ensure link text is descriptive and provides context about its destination or action.
- **Form labels and feedback:** associate all form fields with clear labels, and provide actionable error messages.

Automated tools like Axe-core are vital, but on average only catch around 57% of accessibility issues. Manual testing with screen readers and keyboard navigation is essential to a truly accessible experience for everyone.

