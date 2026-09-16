---
name: Focus
description: A focus indicator is an important part of the user interface that helps users know which element on the page currently has keyboard focus.
---

When correctly implemented, a focus indicator can help users navigate a page’s interactive elements more effectively. Because of this, the focus indicator is built in to all of the components that are interactive by default. It incorporates our design tokens to ensure appropriate color contrast and that the indicator styling complements the rest of the visual language used throughout the Forge system.

Examples of a button, input, switch, and dismissible tag demonstrate the implementation of the focus indicator.
The tokens also allow the indicator to be themed or customized to meet color contrast guidelines when used in situations outside the norm.

A dismiss button is customized with a white background and focus indicator to better contrast with the red notification background.
Because focus indicators play such an important role in the overall usability of a web application, they should always remain visible when an applicable element has focus. If you are creating a new component that will receive keyboard focus, be sure to include the focus indicator styling as part of your design and code.

The ring is the main element of the indicator and should always be present on interactive elements when they receive focus. By default, it conforms to the border radius of its related element and is slightly offset.

Annotations denote the focus ring which is slightly offset from its related elements.
There are some situations—such as when elements don’t have a visible container—where an offset may not be needed. In those cases, you may use a negative offset to align the ring to the inside of the element or omit the offset altogether.

A focus ring without an offset hugs the invisible boundaries of an example piece of interactive text.
The following code example details how we typically implement the indicator in CSS:

```css
element:focus-visible {
  outline-color: var(--jh-border-focus-color);
  outline-style: var(--jh-border-focus-style);
  outline-width: var(--jh-border-focus-width);
  outline-offset: 1px;
}
```

When creating custom components, the various outline properties can also be written in CSS shorthand if preferred.
