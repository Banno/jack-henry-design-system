---
version: 2.0.0
name: Forge
description: Forge powers the products banks and credit unions rely on every day, creating a shared foundation for teams to design, build, and scale consistently across platforms.
omitted:
color:
  - "/packages/jh-tokens/tokens/global/color.json"
  - "/packages/jh-tokens/tokens/light/color.json"
  - "/packages/jh-tokens/tokens/dark/color.json"
typography:
  - "/packages/jh-tokens/tokens/global/font.json"
  - "/packages/jh-tokens/tokens/alias/font.json"
rounded:
spacing:
  - "/packages/jh-tokens/tokens/global/dimension.json"
components:
  - "/packages/jh-elements/components/"
---

## Overview

### Terminology

Forge uses the following terminology throughout the system:

- **Global token:** The same as a primitive design token.
- **Alias token:** The same as a semantic design token.
- **Grade:** A particular level of value; similar terms MAY be level or step.

Prefer Forge's terminology over other conventions unless otherwise noted.

### Design tokens

- Design tokens are written in dot-notation throughout the specs.
- Style hooks (ie, component tokens) are written in dot-notation throughout the specs for the sake of consistency. The one exception is when referenced in the code example of a specific syntax. The correct syntax MUST be used in that circumstance to promote clarity and accuracy. Practically, style hooks are only available to users in platform-specific syntax such as CSS custom properties for the web.
- Convert all dot-notation design tokens to kebab case and prefix with `--jh` when creating documentation for the web.
- Use existing token information found in `/packages/jh-tokens/` wherever possible. Tokens MUST NOT be invented within the base Forge code or documentation.

#### Global tokens

Global tokens are the most basic values within the visual language. They represent all of the visual choices available within Forge. Global tokens MAY be used when an appropriate alias token doesn’t exist.

#### Alias tokens

Alias tokens communicate the specific function or purpose of a global token. They SHOULD be used wherever possible.

#### Style hooks

Style hooks are essentially component-level alias tokens. They allow you to override or theme very specific aspects of a given component such as the color of a label or the radius of a particular container.

Each component spec provides a complete list of available style hooks.

A comprehensive set of component variables that align with our CSS style hooks is available in Figma. These MAY be redefined as needed for theming. They SHOULD NOT not be applied to user-created custom components.

#### Naming structure

Each design token follows a naming convention to provide an appropriate level of specificity and context so a user can have a better understanding of its intended use.

- **System:** A short designation of which library the tokens belong to. Forge prefixes this as part of the build process.
- **Component:** Contextualizes the token to a specific component such as card or button.
- **Element:** Targets a specific element within a component such as a label or icon.
- **Category:** Describes a specific visual style concern such as color, font, and size.
- **Concept:** Breaks down a given category into semantic subdivisions.
- **Property:** Contextualizes a token to a standard CSS property such as `background`, `border`, or `text`.
- **Mode:** Denotes specific color pairings with an “on” designation.
- **Variant:** Describes alternative use cases for a base token such as primary, secondary, or success.
- **State:** Describes interactive states for a token such as hover, active, or disabled.
- **Scale:** Denotes graduated steps of a token variant, typically specified as ordered levels.

Levels MAY be skipped if not needed to clarify a token’s usage. However, levels MUST always be placed in the aforementioned order.

The following are a few examples of tokens and their underlying structure:

- **shadow.100:** [category].[scale]
- **color.content.on.brand.enabled:** [category].[concept].[mode].[variant].[state]
- **button.icon.color.fill.primary.hover:** [component].[element].[category].[property].[variant].[state]

Product-specific tokens SHOULD follow the same naming conventions to ensure consistency and compatibility—albeit with an appropriate system name that prevents collisions with Forge’s `jh` tokens.

## Colors

Color plays a functional role throughout the Forge system to create consistent, meaningful, and accessible user experiences.

### Global color palette

The global color palette consists of eleven color families, each with nineteen grades. The color families are derived from a source color represented with both hex and LCH values and fall within a specific hue range on the color wheel.

| Color family | Hue range | Hex value | LCH value            |
| ------------ | --------- | --------- | -------------------- |
| Red          | 355-24    | `#E52108` | `49.2, 92.3, 40.7`   |
| Orange       | 25-54     | `#E59008` | `66.9, 75.1, 71.2`   |
| Yellow       | 55-84     | `#CCE508` | `86.4, 89.4, 109.6`  |
| Lime         | 85-114    | `#D5FF00` | `94.0, 98.6, 112.8`  |
| Green        | 115-144   | `#08E522` | `79.7, 106.5, 137.2` |
| Mint         | 145-174   | `#08E590` | `80.7, 71.3, 156.1`  |
| Cyan         | 175-204   | `#76DCFD` | `82.9, 32.7, 230.3`  |
| Blue         | 205-234   | `#085CE5` | `43.3, 81.4, 293`    |
| Violet       | 265-294   | `#9008E5` | `40.8, 111.1, 314.9` |
| Magenta      | 295-324   | `#E508CC` | `53.1, 97, 333.2`    |
| Gray         | —         |           |                      |

Each color family is scale of grades that range from `50` to `950` in steps of 50. The grades represent a specific lightness and luminance that guarantees what kind of contrast a color will have with other colors from the palette. The lightness and luminance values are targets.

| **Grade** | **Lightness** | **Contrast ratio (white)** | **Luminance** |
| --------- | ------------- | -------------------------- | ------------- |
| 50        | 96.2          | 1.1                        | 90.5          |
| 100       | 93.1          | 1.2                        | 83.1          |
| 150       | 86.0          | 1.4                        | 68            |
| 200       | 82.5          | 1.6                        | 61            |
| 250       | 75.6          | 1.9                        | 49.1          |
| 300       | 71.4          | 2.2                        | 42.9          |
| 350       | 66.6          | 2.6                        | 36.1          |
| 400       | 62.9          | 2.9                        | 31.4          |
| 450       | 57.6          | 3.4                        | 25.4          |
| 500       | 48.9          | 4.7                        | 17.5          |
| 550       | 44.9          | 5.4                        | 14.4          |
| 600       | 42.0          | 6                          | 12.5          |
| 650       | 38.0          | 7                          | 10.0          |
| 700       | 34.3          | 8                          | 8.2           |
| 750       | 30.3          | 9.2                        | 6.3           |
| 800       | 26.0          | 10.8                       | 4.8           |
| 850       | 21.5          | 12.5                       | 3.4           |
| 900       | 17.9          | 14                         | 2.5           |
| 950       | 12.1          | 16.4                       | 1.4           |

To guarantee a specific contrast between two color grades, ensure they have a minimum difference of one of the following:

- **4.5:1 contrast:** A difference of 500 or more
- **3:1 contrast:** A difference of 400 or more

For example, pairing `color.gray.200` with `color.blue.700` (a difference of 500) would guarantee a contrast of at least 4.5:1. However, `color.gray.200` with `color.gray.500` (a difference of 300) would fail both WCAG guidelines for color contrast.

Colors that use a 100-level designation (100, 200, 300, etc.) SHOULD be prioritized for most aspects of the user interface. However, colors that have a 50-level designation (50, 150, 250, etc.) can be used in situations where a change in color is necessary but contrast with any paired content needs to be maintained such as changes in state.

Colors from the global color palette are context-agnostic. As such, they MUST NOT be directly used within a design. Instead, use global colors to define alias tokens when there is no other appropriate alias token already exists.

Additional color family scales may be created as needed. They MUST:

- Be a complete 19-grade scale that conforms to the same contrast ratios as the other color families
- Be generated using the LCH color space
- Work within the sRGB color gamut
- Include a grade 500 that has 4.5:1 contrast with both pure white (grade `0`) and pure black (grade `1000`)

New scales SHOULD:

- Be perceptually distinguishable from existing color scales

### Global alpha tokens

A set of white and black alpha tokens are provided. These are graded by opacity from 10 to 100 with 10 being nearly transparent and 100 being completely opaque. The 100 grades should be used when pure white and black are needed. The other grades may be used when varying degrees of opacity are needed such as overlays and shadows.

Aside from the fully-opaque white and black colors, the opacity grades do not predictably contrast with the rest of the global color palette. Tests SHOULD be performed when an alpha token is paired with any other color to ensure the appropriate color contrast is honored.

When pairing with non-alpha colors in the global color palette, pure white (`color.white.alpha.100`) can be interpreted as the `0` grade of any hue's color ramp and pure black (`color.black.alpha.100`) can be interpreted as the `1000` grade. Use this interpretation along with the minimum grade differences mentioned in the global color palette section to ensure appropriate color contrast is maintained. For example, text that is `color.white.alpha.100` (pure white) can be used on a background that has a color grade of 500 or higher and meet 4.5:1 contrast.

### Color aliases

#### Concepts

Each color alias falls within one of the seven predefined semantic concepts. These concepts allow color to be used in a consistent and predictable manner throughout the user interface.

- **Container:** Use container colors as the main surfaces found throughout the user interface. In general, all content should sit on a container color.
- **Overlay:** Use the overlay color when modals such as dialogs need to sit on top of the main user interface.
- **Control:** Use control colors on the containers of interactive control elements such as slider and switch tracks.
- **Divider:** Use divider colors on bordered elements throughout the user interface such as dividers, table borders, and component outlines.
- **Brand:** Use brand colors to incorporate a specific branded color that might otherwise fall outside the global palette or other Forge-defined color. Brand colors MAY NOT have guaranteed color contrast with other color concepts. Accessibility tests SHOULD be performed to ensure there is sufficient contrast where brand colors are applied. Brand colors MAY NOT have a different values defined for both light and dark themes.
- **Content:** Use content colors to style text, iconography, and other content-based elements. They may be used in both static and interactive contexts. Content colors meet 4.5:1 contrast against any container color.
- **Interactive:** Use interactive colors for general interactions such as focus and content highlighting.

#### Pairings

Color tokens have been designed with specific pairings to ensure appropriate color contrast. These pairings are represented by a set of `on` colors. The `on` colors denote which color tokens they may be paired with. The `on` colors SHOULD only be used with their referenced “surface” token. For example, `color.content.on.primary.enabled` may only be used on `color.content.primary.enabled`. This ensures proper color contrast ratios and predictable theming results.

#### States

Container, control, and content aliases have a series of states that are defined. This allows these color concepts to be used in both static and interactive situations. By default, the states are stepped in increments of 50 to provide enough of a visual difference when the state changes while ensuring appropriate color contrast with the corresponding “on” colors.

- Enabled:
- Focus:
- Hover:
- Active:
- Disabled:
- Selected:

## Typography

Thoughtful typography is important to establish visual hierarchy and clearly and efficiently communicate content.

### Font family

- **Roboto Flex:** This variable font includes a full range of weights and renders well across multiple devices and resolutions.
- **Roboto Mono:** Use in situations where a monospace typeface is needed.

All global font families MUST use the following structure: `font.family.*`.

| Token name         | Description            | Default value |
| ------------------ | ---------------------- | ------------- |
| `font.family.sans` | Sans-serif font family | `Roboto Flex` |
| `font.family.mono` | Monospace font family  | `Roboto Mono` |

Roboto Flex and Roboto Mono can both be downloaded from Google Fonts.

### Font size

The global type scale is made of 18 steps that increase in size. This allows for flexibility and typographic contrast when styling body and display type.

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

### Line height

The global line-height scale is made of 17 steps that increase in size. Use line height to create pleasing vertical rhythms and allow for appropriate readability. Font concepts have specific font size and line height pairings, but other line heights can be leveraged to fine-tune vertical spacing.

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

### Weight

The global font weight scale has four weights. These weights correspond to the same [numerical designation and name mapping](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-weight#common_weight_name_mapping) within the CSS spec. Use font weight to thoughtfully add emphasis and content hierarchy.

All global font weight tokens MUST use the following structure: `font.weight.*`.

| Token name        | Description              | Default value |
| ----------------- | ------------------------ | ------------- |
| `font.weight.300` | Font weight 300; Light   | `300`         |
| `font.weight.400` | Font weight 400; Regular | `400`         |
| `font.weight.500` | Font weight 500; Medium  | `500`         |
| `font.weight.700` | Font weight 700; Bold    | `700`         |

### Italics

Italics are not currently part of the global font token set. Use overrides to manually italicize text.

**Code:** Use `font-style: italic;` to add a CSS style rule alongside the font tokens. For example, to define paragraph text with italics, use the following CSS:

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

### Concepts

Forge includes a collection of semantic concepts that have pre-defined pairings of size, line height, and weight. These concepts should be used to create consistent, well-structured content and data throughout an application.

**Micro:** Use micro typography for “fine-print” text and small snippets of text with limited space within a component.

Token name: `font.micro.regular`

| Property     | Description | Value                    |
| ------------ | ----------- | ------------------------ |
| `fontFamily` |             | `{font.family.primary}`  |
| `fontSize`   |             | `{font.size.250}`        |
| `fontWeight` |             | `{font.weight.400}`      |
| `lineHeight` |             | `{font.line-height.300}` |

Token name: `font.micro.medium`

| Property     | Description | Value                    |
| ------------ | ----------- | ------------------------ |
| `fontFamily` |             | `{font.family.primary}`  |
| `fontSize`   |             | `{font.size.250}`        |
| `fontWeight` |             | `{font.weight.500}`      |
| `lineHeight` |             | `{font.line-height.300}` |

Token name: `font.micro.bold`

| Property     | Description | Value                    |
| ------------ | ----------- | ------------------------ |
| `fontFamily` |             | `{font.family.primary}`  |
| `fontSize`   |             | `{font.size.250}`        |
| `fontWeight` |             | `{font.weight.700}`      |
| `lineHeight` |             | `{font.line-height.300}` |

- **Helper:** Use helper typography for secondary or explanatory text. Use also for field labels.
- **Body:** Use body typography for blocks of text and most content displayed within components. There are two grades within the scale. The first grade (`01`) is used for the vast majority of body content. The second grade (`02`) is used for shorter spans of text that need more emphasis or hierarchy such as a page lead.
- **Code:** Use code typography for code references in standard blocks of text. Similar to the body concept, there are two grades within the scale. Each grade is designed to pair with that of the body concept. The first grade (`01`) is used for most inline and blocks of code. The second grade (`01`) is primarily used when code needs to referenced within or alongside the second scale of body text.
- **Heading:** Use heading typography to create visual hierarchy on a page and within a component. The heading scale includes size grades which increase in size.
- **Display:** Use display typography to create visual emphasis through size without being misconstrued as a heading. There are three grades within the scale that increase in size.

## Layout

### Dimensions

Global dimension tokens are a scale of grades that range from `0` to `2400` in steps of 100. There are two additional grades—`25` and `50`—for more fine-grained control at smaller scales. The scale establishes the `100` grade as the base with a value of `4px`. The values have the same proportional relationship as the scale grades. For example, grade `400` is four times that of grade `100`. Therefore, the value of grade `400` is four times more than that of grade `100`.

There are currently no alias tokens for `dimension`. Use the global tokens to define dimension-based properties on elements.

Dimension tokens MUST:

- Use the naming structure: `dimension.*`.
- Use the DTCG type `dimension`.
- Use the unit `px`.

## Elevation & Depth

Elevation defines how elements interact with other spatially and creates opportunities for rich layering of content and intuitive interactions.

### Shadow

Shadows visually define a component from its surrounding and establish its spatial relationship within the overall layout.

There currently are no global shadow tokens since shadows MAY be composed of other token types such as `color` and `dimension`.

There are four alias shadow tokens available to allow for a variety of spatial relationships within a given layout.

- **Low:** Use on surface-level content and components such as cards and control thumbs.
- **Mid:** Use on elevated components such as floating action buttons (FABs) and toasts.
- **High:** Use on menus and dropdowns.
- **Overlay:** Use on components that should overlay the entire UI such as modals and dialogs.

Shadow tokens MUST:

- Use the naming structure: `shadow.*`.
- Use the DTCG type `shadow`.

Shadow tokens SHOULD:

- Reference other Forge `color` tokens for the shadow `color` property.
- Limit to a max of two shadow objects.

Shadow tokens MAY:

- Reference other Forge `dimension` tokens for the `offsetX`, `offsetY`, `blur`, `spread`, and `inset` properties.

### Z-index

Global z-index tokens are a scale of grades that range from 0 to 1000 in steps of 100. A value of -100 is available when elements need to be positioned below the base level of 0.

There are currently no alias z-index tokens. Use the global tokens to define the z-index of elements.

Use z-index in conjunction with shadow to create a comprehensive sense of depth:

- **Z-index:** Set the layer order of elements such as dialogs, drawers, and panels.
- **Shadow:** Use to suggest an element's perceived visual depth.

There are currently no alias tokens for `z-index`. Use the global tokens to define z-index properties on elements.

Z-index tokens MUST:

- Use the naming structure: `z-index.*`.
- Use the DTCG type `number`.

## Shapes

### Radius

Use radius to set the rounded-ness of a container or shape. Consistent use of a container’s radius can be used to clarify intent such as whether or not a component is interactive.

Global radius tokens are a scale of grades that range from 0 to 400 in steps of 100. There are two additional global tokens:

- **Circle:** Sets the value to 50% create an elliptical radius.
- **Pill:** Sets the value to an arbitrarily high number (in this case, `9999px`) so as to create semi-circular ends regardless of the size of the container.

There are currently no alias radius tokens. Use the global tokens to define radius on elements.

Radius tokens MUST:

- Use the naming structure `border.radius.*`.
- Use the DTCG type `dimension`.
- Use the unit `px`.

Radius tokens MAY:

- Reference other Forge `dimension.*` tokens.

### Borders

Borders provide distinction to individual components as well as establishes a sense of overall visual identity throughout the application.

Forge includes a set of border concepts that predefine the border’s style, width, and color.

- **Decorative:** Decorative borders are typically used for elements such as dividers and edges of layout elements.
- **Control:** Control borders should be used to style elements such as form controls.
- **Action:** Action borders are used to style elements that promote an interactive action such as buttons.
- **Focus:** Focus borders are used to style bordered implementations of the focus ring. In CSS, this could either be as a border or outline. Note, there is also a focus variant of a shadow token which should only be used when focus rings must be styled using shadow properties.
- **Selected:** Selected borders can be used to style elements that convey when something is selected. Common examples are list-items and tabs.
- **Error:** Error borders are specifically used to style error or invalid states on elements. These are commonly used on inputs.

These concept properties are provided as discrete tokens for greater flexibility when styling borders. They MAY either be defined as individual declarations or using shorthand where appropriate.

As individual declarations:

```css
border-style: var(--jh-border-action-style);
border-width: var(--jh-border-action-width);
border-color: var(--jh-border-action-color);
```

As CSS shorthand:

```css
border: var(--jh-border-action-style) var(--jh-border-action-width) var(--jh-border-action-color);
```

Avoid mixing-and-matching border concept properties.

````css
border-style: var(--jh-border-decorative-style);
border-width: var(--jh-border-focus-width);
border-color: var(--jh-border-error-color);

Use one of the global or alias tokens when customizations or overrides are needed.

```css
border-style: var(--jh-border-action-style);
border-width: var(--jh-border-action-width);
border-color: var(--jh-color-content-positive-enabled);
````

Border tokens—especially the border-colors—should only be used to style borders. Don’t use a border-color token to define other non-border colors such as that of an icon or text. An exception to this is when an element’s color needs to be intrinsically linked to that of the border color.

Border width is used to define the thickness of the border. Use the widths defined as part of the border concepts to help promote a consistent user interface.

Border style defines the line style of the border. All of the border concepts within Forge currently use the same border style.

### Focus ring

A focus indicator is an important part of the user interface that helps users know which element on the page currently has keyboard focus.

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

## Components

Use the specs defined in the `/specs/` folder for specific component guidance.

## Do's and Don'ts

## Icons

- **Name:** Use the [naming conventions](https://blog.fontawesome.com/icon-naming-conventions/) outlined by Font Awesome.
- **Glyph style:** 1.5px stroke, rounded outside corners, prefer outlined over filled icons
- **Size:** The source icon artwork MUST be sized within a 24px by 24px invisible container. Use `size` property or `icon.size-*` style hooks on `jh-icon` component to define an icon size within a design.
- **Color:** The source icon artwork MUST be pure black (`#000000`). A design token MUST NOT be used on the original icon artwork. The `jh-icon` component sets the default icon color to `color.content.secondary.enabled`. Use `icon.color.fill` to customize an icon's color.
- **Accessibility:** Meaningful icons MUST be associated with an accessible name. Decorative icons that sit beside a label are hidden from assistive technology.

The full SVG catalog lives in `/packages/jh-icons/`. Use those as the source — never substitute Unicode arrows, emoji, or HTML-entity glyphs for real icons.

## Voice and tone

Our voice is clear, human, and confident. We should always feel like a trusted partner.

### Our voice

- **Clear, confident, and human.** Speak with professionalism, but never at the expense of warmth.
- **Active, direct, and supportive.** Help people navigate complex financial topics with ease.

Avoid jargon, write concisely, and prioritize inclusivity so every client, customer, and member feels respected and understood.

### Our tone

Our tone flexes depending on context. The tone always aligns with our voice.

- **Friendly and approachable.** Write as if you’re speaking directly to someone. Contractions are welcome.
- **Professional, not stiff.** Use financial and technical terms only when necessary, and explain them clearly.
- **Confident but humble.** Focus on clarity and transparency. Don’t overpromise.
- **Inclusive.** Use language that respects all audiences. Avoid assumptions about gender, background, or ability.

## Accessibility

Understanding Web Accessibility
Web accessibility means building websites and tools usable by everyone, including people with visual, auditory, motor, or cognitive disabilities. Many rely on Assistive Technologies (AT) like screen readers, magnifiers, and keyboard-only navigation.

The goal is to make digital content perceivable, operable, understandable, and robust. This isn't just about fairness; it's a legal and business imperative. Millions in the U.S. live with disabilities, representing a significant market.

Forge acknowledges and is motivated by the following key laws:

- Americans with Disabilities Act (ADA)
- Section 508 of the Rehabilitation Act
- European Accessibility Act (EAA)

These laws use the Web Content Accessibility Guidelines (WCAG)—a global W3C standard—for compliance. WCAG sets out testable criteria at levels A, AA, and AAA. To comply with these laws, our design system aims to satisfy WCAG 2.2 levels A and AA success criteria.

Design Principles
Accessibility begins with thoughtful design decisions:

- **WCAG-Compliant Design:** Create components following WCAG standards.
- **Design Tokens:** Use the Forge design tokens to ensure consistent adherence to WCAG contrast requirements and optimal font readability (sizing, spacing) across all components.
- **Interactive element standards:** Ensure pointer targets (like buttons) meet minimum sizing and all interactive elements have visible focus indicators and logical keyboard navigation flows.

### Engineering for web components

Web Components introduces distinct accessibility considerations compared to native HTML elements:

- Lacks built-in AT support (ARIA roles, keyboard interaction, focus).
- Shadow DOM can complicate AT understanding of component structure.

To address these, we leverage:

- ElementInternals: Bridging the Accessibility Gap
  The ElementInternals API is crucial for making our custom elements robust and accessible.

- Allows custom elements to directly participate in the browser's Accessibility Object Model (AOM). The AOM is how browsers expose semantic information (roles, states, properties) about UI elements to assistive technologies. By using ElementInternals, our custom components can declare their accessibility properties to ATs just like native HTML elements. This establishes default accessibility properties on our components, and allows us to override or extend these properties as needed for specific component behaviors.
- Will be integrated directly into our base jh-element. Any component extending jh-element will automatically inherit the ElementInternals object. This simplifies development, as engineers won't need to manually implement ElementInternals for every component.

Learn more about ElementInternals on MDN

Custom ARIA Attribute Propagation (accessible-_)
The Shadow DOM can block standard ARIA attributes from reaching elements inside. To ensure ARIA attributes are correctly applied within Shadow DOM, we provide the accessible-_ namespace. Authors use attributes like accessible-label on our components, and our code then maps these to the appropriate standard aria-\* attributes for AT.

Example: For an icon-only button, an aria-label is crucial for screen readers to announce it correctly. Using jh-button:
<jh-button accessible-label="Print"><jh-icon-printer></jh-icon-printer></jh-button>
Copy
Robust Keyboard Navigation & Focus
We implement keyboard interaction flows and focus behavior that matches native HTML for simple components.

Achieving Component Accessibility
Our design system components are rigorously tested against WCAG 2.2 levels A and AA criteria.

We use Axe-core, a powerful, open-source accessibility testing engine developed by Deque Systems, as our primary automated benchmark. Axe-core runs automated checks directly within web applications and is known for its speed, accuracy, and ability to detect a significant portion of WCAG violations early in the development cycle.

All our components undergo testing using:

- **Automated Testing:** Utilize Axe-core to identify common accessibility issues.
- **Manual Testing with AT:** Use screen readers and magnifiers in all supported browsers.
- **Manual Keyboard Testing:** Ensure all interactive elements are reachable, show focus indicators, and are fully usable via keyboard.

### Component accessibility documentation

Component documentation SHOULD provide extensive accessibility information for each component, including:

- A list of relevant WCAG 2.2 success criteria the component needs to meet.
- A "What we provide" section with detailed information on built-in accessibility features and how to use them.
- An "Author guidance" section, with instructions on any additional steps authors must take to ensure the component is accessible in their context.

### Accessibility beyond Forge

While our components are accessible, integrating them into a fully accessible webpage requires attention to overall structure, content, and user experience. Here are key tips for page authors:

- **Semantic HTML:** Use HTML5 semantic elements (<header>, <nav>, <main>, <article>, etc.) to structure content meaningfully.
- **Logical focus order:** Ensure interactive elements (links, buttons, form fields) follow a logical flow matching the visual layout.
- **Keyboard usability:** All interactive elements must be reachable with the keyboard, show a clear focus indicator, and avoid keyboard traps.
- **Alt text for images:** Provide appropriate alt text for all images to convey their content or purpose.
- **Descriptive links:** Ensure link text is descriptive and provides context about its destination or action.
- **Form labels and feedback:** Associate all form fields with clear labels, and provide actionable error messages.

Important Note on Testing: Automated tools like Axe-core are vital, but on average only catch around 57% of accessibility issues. Manual testing with screen readers and keyboard navigation is essential to ensure a truly accessible experience for all users.
