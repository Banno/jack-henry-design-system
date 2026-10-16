/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html } from 'lit';
import './caption.js';

export default {
  component: 'forge-caption',
  title: 'Primitives/Caption',
  tags: ['beta'],
};

export const Overview = { render: () => html`
  <forge-caption>Helper text that supports a nearby field or label.</forge-caption>
`};