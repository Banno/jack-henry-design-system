---
name: Accessibility
description:
---

## Understanding Web Accessibility

Web accessibility means building websites and tools usable by everyone, including people with visual, auditory, motor, or cognitive disabilities. Many rely on Assistive Technologies (AT) like screen readers, magnifiers, and keyboard-only navigation.

The goal is to make digital content perceivable, operable, understandable, and robust. This isn't just about fairness; it's a legal and business imperative. Millions in the U.S. live with disabilities, representing a significant market.

Forge acknowledges and is motivated by the following key laws:

- [Americans with Disabilities Act (ADA)](https://www.ada.gov/)
- [Section 508 of the Rehabilitation Act](https://www.section508.gov/)
- European Accessibility Act (EAA)

These laws use the Web Content Accessibility Guidelines (WCAG)—a global W3C standard—for compliance. WCAG sets out testable criteria at levels A, AA, and AAA. To comply with these laws, our design system aims to satisfy [WCAG 2.2](https://www.w3.org/TR/WCAG22/) levels A and AA success criteria.

## Design Principles

Accessibility begins with thoughtful design decisions:

- **WCAG-Compliant Design:** Create components following WCAG standards.
- **Design Tokens:** Use the Forge design tokens to ensure consistent adherence to WCAG contrast requirements and optimal font readability (sizing, spacing) across all components.
- **Interactive element standards:** Ensure pointer targets (like buttons) meet minimum sizing and all interactive elements have visible focus indicators and logical keyboard navigation flows.

## Engineering for web components

Web Components introduces distinct accessibility considerations compared to native HTML elements:

- Lacks built-in AT support (ARIA roles, keyboard interaction, focus).
- Shadow DOM can complicate AT understanding of component structure.

To address these, we leverage:

### ElementInternals: Bridging the Accessibility Gap

The ElementInternals API is crucial for making our custom elements robust and accessible.

- **Purpose and accessibility object model (AOM).** Allows custom elements to directly participate in the browser's AOM. The AOM is how browsers expose semantic information (roles, states, properties) about UI elements to assistive technologies. By using ElementInternals, our custom components can declare their accessibility properties to ATs just like native HTML elements. This establishes default accessibility properties on our components, and allows us to override or extend these properties as needed for specific component behaviors.
- **Will be integrated directly into our base `jh-element`.** Any component extending jh-element will automatically inherit the ElementInternals object. This simplifies development, as engineers won't need to manually implement ElementInternals for every component.

### Custom ARIA Attribute Propagation (`accessible-*`)

The Shadow DOM can block standard ARIA attributes from reaching elements inside. To ensure ARIA attributes are correctly applied within Shadow DOM, we provide the accessible-\_ namespace. Authors use attributes like accessible-label on our components, and our code then maps these to the appropriate standard aria-\* attributes for AT.

Example: For an icon-only button, an aria-label is crucial for screen readers to announce it correctly. Using `jh-button`:

```html
<jh-button accessible-label="Print"
  ><jh-icon-printer></jh-icon-printer
></jh-button>
```

### Robust keyboard navigation and focus

We implement keyboard interaction flows and focus behavior that matches native HTML for simple components.

## Achieving component accessibility

Our design system components are rigorously tested against WCAG 2.2 levels A and AA criteria.

We use Axe-core, a powerful, open-source accessibility testing engine developed by Deque Systems, as our primary automated benchmark. Axe-core runs automated checks directly within web applications and is known for its speed, accuracy, and ability to detect a significant portion of WCAG violations early in the development cycle.

All our components undergo testing using:

- **Automated Testing:** Utilize Axe-core to identify common accessibility issues.
- **Manual Testing with AT:** Use screen readers and magnifiers in all supported browsers.
- **Manual Keyboard Testing:** Ensure all interactive elements are reachable, show focus indicators, and are fully usable via keyboard.

## Component accessibility documentation

Component documentation SHOULD provide extensive accessibility information for each component, including:

- A list of relevant WCAG 2.2 success criteria the component needs to meet.
- A "What we provide" section with detailed information on built-in accessibility features and how to use them.
- An "Author guidance" section, with instructions on any additional steps authors must take to ensure the component is accessible in their context.

## Accessibility beyond Forge

While our components are accessible, integrating them into a fully accessible webpage requires attention to overall structure, content, and user experience. Here are key tips for page authors:

- **Semantic HTML:** Use HTML5 semantic elements (<header>, <nav>, <main>, <article>, etc.) to structure content meaningfully.
- **Logical focus order:** Ensure interactive elements (links, buttons, form fields) follow a logical flow matching the visual layout.
- **Keyboard usability:** All interactive elements must be reachable with the keyboard, show a clear focus indicator, and avoid keyboard traps.
- **Alt text for images:** Provide appropriate alt text for all images to convey their content or purpose.
- **Descriptive links:** Ensure link text is descriptive and provides context about its destination or action.
- **Form labels and feedback:** Associate all form fields with clear labels, and provide actionable error messages.

Important Note on Testing: Automated tools like Axe-core are vital, but on average only catch around 57% of accessibility issues. Manual testing with screen readers and keyboard navigation is essential to ensure a truly accessible experience for all users.
