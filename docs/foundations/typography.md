---
title: Typography
description: The type styles, families, and scale that give Forge content its voice on the page.
---

# Typography

Type carries most of the meaning in any interface, so we build ours around a small, deliberate set of styles rather than leaving it open-ended. Every text style in Forge pairs a font size, weight, and line height that are already tuned to work together — pick the style that matches what the text is for, and the rest takes care of itself.

## Font families

Forge type is built on two variable fonts:

- **Roboto Flex** is our primary, sans-serif typeface and the default for everything in the system.
- **Roboto Mono** is reserved for monospace use, like code references.

We use variable fonts because a single font file can flex across weights and widths, which means more design flexibility with fewer files to download — good for both the interfaces we build and the people loading them.

## Type scale

Each style below is available as a token that bundles font family, size, weight, and line height together, so you never have to reason about those four properties separately. Most styles come in **regular**, **medium**, and **bold** weights; where a style only comes in one weight, we call that out.

### Micro

Micro is for fine print and small snippets of text where space is tight.

| Style | Font size | Line height |
| --- | --- | --- |
| Micro | 10px | 12px |

Available in regular, medium, and bold weights.

### Helper

Helper text supports the main content — think secondary explanations and field labels.

| Style | Font size | Line height |
| --- | --- | --- |
| Helper | 12px | 16px |

Available in regular, medium, and bold weights.

### Body

Body styles carry the bulk of your content.

| Style | Font size | Line height | Use it for |
| --- | --- | --- | --- |
| Body 1 | 14px | 20px | Blocks of text and most content displayed within components |
| Body 2 | 16px | 24px | Intro or leading blocks of text |

Both are available in regular, medium, and bold weights.

### Code

Code styles use our monospace family and are reserved for code references within a block of text.

| Style | Font size | Line height | Use it for |
| --- | --- | --- | --- |
| Code 1 | 14px | 20px | Code references within standard blocks of text |
| Code 2 | 16px | 24px | Code references within intro or leading blocks of text |

Code styles are only available in a regular weight.

### Display

Display styles create visual emphasis through sheer size, without reading as a heading.

| Style | Font size | Line height |
| --- | --- | --- |
| Display 1 | 42px | 52px |
| Display 2 | 54px | 64px |
| Display 3 | 92px | 108px |

Display styles are only available in a light weight. Because they're meant to be purely visual, don't use a display style in place of an actual heading — the two serve different purposes, and only one carries heading semantics.

### Heading

Heading styles establish visual hierarchy on a page and within a component.

| Style | Font size | Line height |
| --- | --- | --- |
| Heading 1 | 14px | 20px |
| Heading 2 | 16px | 24px |
| Heading 3 | 20px | 28px |
| Heading 4 | 28px | 36px |
| Heading 5 | 32px | 40px |
| Heading 6 | 36px | 44px |

All six are available in regular, medium, and bold weights.

## Usage

- Match the style to the job, not the other way around: body for content, helper and micro for supporting text, headings for hierarchy, code for monospace references, and display when you need visual weight without heading semantics.
- Pick a heading level based on the document's actual structure, not on how big you want the text to look. If you need a heading to look larger or smaller than its semantic level suggests, style it — don't skip levels or misuse `<h1>`–`<h6>` just to get a certain size.
- For implementation details — self-hosting our fonts, using Google Fonts, or overriding the primary typeface — see the [Typography guide](https://jackhenry.design/v2/foundations/typography/) in our Storybook documentation.

## Accessibility

- Don't rely on size or weight alone to communicate structure. Pair visual hierarchy with the correct semantic elements so assistive technology can follow along.
- All type styles can be resized up to 200 percent without losing content or functionality.
