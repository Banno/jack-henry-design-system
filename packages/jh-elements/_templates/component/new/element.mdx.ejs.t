---
to: components/<%= unprefixedName %>/<%= unprefixedName %>.mdx
# 
# Copyright 2025 Jack Henry.
# SPDX-License-Identifier: Apache-2.0
# See LICENSE file in project root for full terms.
---
{/*
 Copyright 2025 Jack Henry.
 SPDX-License-Identifier: Apache-2.0
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */}
import { Meta, ArgTypes } from '@storybook/blocks';
import * as stories from './<%= unprefixedName %>.stories.js';

<Meta title="Components/<%= titleName %>" of={stories} />

# <%= titleName %>

[Guidelines](https://jackhenry.design/pages/components/<%= unprefixedName %>/)

<hr />

*Introduce the component*

## Usage

Import the `<<%= elementName %>>` component:

```javascript
import '@jack-henry/jh-elements/components/<%= unprefixedName %>/<%= unprefixedName %>.js';
```

To use `<<%= elementName %>>`: *can include details about slot or anything relevant. Keep this short as it is just a code snippet to get the author started.* 

```html
//code snippet goes here
```

## Unique Details
*Identify anything the author needs to know about this component. This can be broken out per section as needed. Ex. Behaviors, Layouts, Interactivity etc.*

## Accessibility

This component satisfies [WCAG 2.2](https://www.w3.org/TR/WCAG22/) AA success criteria. 
The following success criteria are of concern:

- *[WCAG 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG22/#non-text-content): All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.*

### What we provide

*Highlight built-in accessibility features and reference any WCAG guideline(s) it satisfies.*

### Author Guidance

*Highlight accessibility considerations that authors need to take into account to effectively ensure the component can be made accessible. These are features that we have either not built-in or exposed for the author to use. Reference all WCAG guidelines that the features satisfy.*

## Component API

*Include any special instructions for example:*

For boolean attributes, true indicates that the attribute has been set without a value: `<<%= elementName %> add-relevant-boolean></<%= elementName %>>`. While false indicates the attribute does not exist in the DOM: `<<%= elementName %>></<%= elementName %>>`.

<ArgTypes />

## Unique Story #1

*(Optional) Highlight unique details an author will need to know along with a story demonstration*

## Unique Story #2

*(Optional) Highlight unique details an author will need to know along with a story demonstration*

## Feedback

Have an idea that will improve this component or have an issue to report? Let us know by submitting 
an issue on [GitHub](https://github.com/Banno/jack-henry-design-system/issues).

Engage with the community on our [GitHub discussion board](https://github.com/Banno/jack-henry-design-system/discussions).