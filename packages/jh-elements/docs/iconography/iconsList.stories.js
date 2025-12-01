// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html } from 'lit';
import './iconsList.js';

export default {
    component: 'jh-icon-list',
    title: 'Iconography/Gallery',
    tags: ['!autodocs', '!dev'],
  };


//can't use bindings directly in tags
export const Default = {
  render: () => html`
    <jh-icons-list></jh-icons-list>
  `,
};