---
title: Focus
description: A focus indicator is an important part of the user interface that helps users know which element on the page currently has keyboard focus.
---

# Focus

A focus indicator is an important part of the user interface that helps users know which element on the page currently has keyboard focus.

When correctly implemented, a focus indicator helps users navigate a page's interactive elements more effectively. Because of this, the focus indicator is built into all of Forge's interactive components by default. It incorporates Forge's design tokens to ensure appropriate color contrast, and complements the rest of the visual language used throughout the system.

Examples of a button, input, switch, and dismissible tag demonstrate the implementation of the focus indicator. The tokens also allow the indicator to be themed or customized to meet color contrast guidelines when used in situations outside the norm — for example, a dismiss button customized with a white background and focus indicator to better contrast with a red notification background.

Because focus indicators play such an important role in the overall usability of a web application, they should always remain visible when an applicable element has focus. If you're creating a new component that will receive keyboard focus, be sure to include the focus indicator styling as part of your design and code.

The ring is the main element of the indicator and should always be present on interactive elements when they receive focus. By default, it conforms to the border radius of its related element and is slightly offset. There are some situations — such as when elements don't have a visible container — where an offset may not be needed. In those cases, you can use a negative offset to align the ring to the inside of the element, or omit the offset altogether. A focus ring without an offset hugs the invisible boundaries of the element it applies to.

Forge typically implements the indicator in CSS like this:

```css
element:focus-visible {
  outline-color: var(--jh-border-focus-color);
  outline-style: var(--jh-border-focus-style);
  outline-width: var(--jh-border-focus-width);
  outline-offset: 1px;
}
```

When creating custom components, the various outline properties can also be written in CSS shorthand if preferred.

