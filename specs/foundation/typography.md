---
name: Typography
description:
---

Thoughtful typography is important to establish visual hierarchy and clearly and efficiently communicate content.

## Font family

- **Roboto Flex:** This variable font includes a full range of weights and renders well across multiple devices and resolutions.
- **Roboto Mono:** Use in situations where a monospace typeface is needed.

All global font families MUST use the following structure: `font.family.*`.

Roboto Flex and Roboto Mono can both be downloaded from Google Fonts.

## Font size

- The global font size scale is made of 18 grades. This allows for flexibility and typographic contrast when styling body and display type.

All global font size tokens MUST use the following structure: `font.size.*`.

| Token name       | Description    | Default value |
| ---------------- | -------------- | ------------- |
| `font.size.250`  | Font size 250  | `10px`        |
| `font.size.300`  | Font size 300  | `12px`        |
| `font.size.350`  | Font size 350  | `14px`        |
| `font.size.400`  | Font size 400  | `16px`        |
| `font.size.450`  | Font size 450  | `18px`        |
| `font.size.500`  | Font size 500  | `20px`        |
| `font.size.600`  | Font size 600  | `24px`        |
| `font.size.700`  | Font size 700  | `28px`        |
| `font.size.800`  | Font size 800  | `32px`        |
| `font.size.900`  | Font size 900  | `36px`        |
| `font.size.1050` | Font size 1050 | `42px`        |
| `font.size.1200` | Font size 1200 | `48px`        |
| `font.size.1350` | Font size 1350 | `54px`        |
| `font.size.1500` | Font size 1500 | `60px`        |
| `font.size.1700` | Font size 1700 | `68px`        |
| `font.size.1900` | Font size 1900 | `76px`        |
| `font.size.2100` | Font size 2100 | `84px`        |
| `font.size.2300` | Font size 2300 | `92px`        |

## Line height

- The global line-height scale is made of 17 grades.
- Use line height to create pleasing vertical rhythms and allow for appropriate readability.
- Font concepts have specific font size and line height pairings, but other line heights MAY be leveraged to fine-tune vertical spacing.

All global line height tokens MUST use the following structure: `font.line-height.*`.

| Token name              | Description      | Default value |
| ----------------------- | ---------------- | ------------- |
| `font.line-height.300`  | Line-height 300  | `12px`        |
| `font.line-height.400`  | Line-height 400  | `16px`        |
| `font.line-height.500`  | Line-height 500  | `20px`        |
| `font.line-height.600`  | Line-height 600  | `24px`        |
| `font.line-height.700`  | Line-height 700  | `28px`        |
| `font.line-height.800`  | Line-height 800  | `32px`        |
| `font.line-height.900`  | Line-height 900  | `36px`        |
| `font.line-height.1000` | Line-height 1000 | `40px`        |
| `font.line-height.1100` | Line-height 1100 | `44px`        |
| `font.line-height.1300` | Line-height 1300 | `52px`        |
| `font.line-height.1500` | Line-height 1500 | `60px`        |
| `font.line-height.1600` | Line-height 1600 | `64px`        |
| `font.line-height.1800` | Line-height 1800 | `72px`        |
| `font.line-height.2000` | Line-height 2000 | `80px`        |
| `font.line-height.2300` | Line-height 2300 | `92px`        |
| `font.line-height.2500` | Line-height 2500 | `100px`       |

## Weight

The global font weight scale has four weights. These weights correspond to the same [numerical designation and name mapping](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-weight#common_weight_name_mapping) within the CSS spec.

- Use font weight to thoughtfully add emphasis and content hierarchy.

All global font weight tokens MUST use the following structure: `font.weight.*`.

| Token name        | Description              | Default value |
| ----------------- | ------------------------ | ------------- |
| `font.weight.300` | Font weight 300; Light   | `300`         |
| `font.weight.400` | Font weight 400; Regular | `400`         |
| `font.weight.500` | Font weight 500; Medium  | `500`         |
| `font.weight.700` | Font weight 700; Bold    | `700`         |

## Italics

Italics are not currently part of the global font token set. Use overrides to manually italicize text.

**Code:** Use `font-style: italic;` to add a CSS style rule alongside the font tokens. For example, use the following CSS to define paragraph text with italics:

```css
p {
  font-family: var(--jh-font-body-regular-1-font-family);
  font-weight: var(--jh-font-body-regular-1-font-weight);
  font-size: var(--jh-font-body-regular-1-font-size);
  line-height: var(--jh-font-body-regular-1-line-height);
  font-style: italic;
}
```

**Figma:** Use **Command + I** to apply an italic override on a text layer or selected text within a layer. In dev mode, this will accurately show the font tokens to apply as well as the additional italic override.

## Concepts

Forge includes a collection of semantic concepts that have pre-defined pairings of size, line height, and weight. These concepts SHOULD be used to create consistent, well-structured content and data throughout an application.

- **Micro:** Use micro typography for “fine-print” text and small snippets of text with limited space within a component.
- **Helper:** Use helper typography for secondary or explanatory text. Use also for field labels.
- **Body:** Use body typography for blocks of text and most content displayed within components. There are two grades within the scale. The first grade (`01`) is used for the vast majority of body content. The second grade (`02`) is used for shorter spans of text that need more emphasis or hierarchy such as a page lead.
- **Code:** Use code typography for code references in standard blocks of text. Similar to the body concept, there are two grades within the scale. Each grade is designed to pair with that of the body concept. The first grade (`01`) is used for most inline and blocks of code. The second grade (`01`) is primarily used when code needs to referenced within or alongside the second scale of body text.
- **Heading:** Use heading typography to create visual hierarchy on a page and within a component. The heading scale includes size grades which increase in size.
- **Display:** Use display typography to create visual emphasis through size without being misconstrued as a heading. There are three grades within the scale that increase in size.
