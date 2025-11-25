// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import './table-header-cell.js';
import '../table-row/table-row.js';
import '../table/table.js';
import '../table-data-cell/table-data-cell.js';

const storyStyles = css`
.overview {
  width: 500px;
}
`;

const disableControls = {
  sorted: { control: { disable: true } },
  sortable: { control: { disable: true } },
  'horizontal-align': { control: { disable: true } }
}

export default {
  component: 'jh-table-header-cell',
  title: 'Components/Table/Table Header Cell',
  tags: ['beta'],
  parameters: {
    actions: {
      handles: ['jh-sort'],
    },
  },
  argTypes: {
    sortable: {
      control: 'boolean',
    },
    sorted: {
      control: 'select',
      options: ['none', 'ascending', 'descending'],
    },
    'horizontal-align': {
      control: 'select',
      options: ['left', 'center', 'right'],
    }
  },
};

export const Overview = { render: (args) => html`
  <jh-table class="overview">
   <jh-table-row slot="jh-table-header">
  <jh-table-header-cell sortable>Lorem ipsum</jh-table-header-cell>
  <jh-table-header-cell sortable>Lorem ipsum dolor sit amet</jh-table-header-cell>
  <jh-table-header-cell sortable sorted="ascending">Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-header-cell>
    </jh-table-row>
    <jh-table-row>
    <jh-table-data-cell>Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
  <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
  <jh-table-data-cell>Lorem ipsum dolor sit amet</jh-table-data-cell>
  
    </jh-table-row>
  </jh-table>
`};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = { render: (args) => html`
  <jh-table>
   <jh-table-row slot="jh-table-header">
  <jh-table-header-cell horizontal-align=${args['horizontal-align']} sorted=${args.sorted} ?sortable=${args.sortable}>Lorem ipsum</jh-table-header-cell>
  <jh-table-header-cell horizontal-align=${args['horizontal-align']} sorted=${args.sorted} ?sortable=${args.sortable}>Lorem ipsum dolor sit amet</jh-table-header-cell>
  <jh-table-header-cell horizontal-align=${args['horizontal-align']} sorted=${args.sorted} ?sortable=${args.sortable}>Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-header-cell>
    </jh-table-row>
    <jh-table-row>
    <jh-table-data-cell>Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
  <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
  <jh-table-data-cell>Lorem ipsum dolor sit amet</jh-table-data-cell>
  
    </jh-table-row>
  </jh-table>
`};

Playground.args = {
  sortable: true,
  'horizontal-align': 'left',
  sorted: 'none'
};

Playground.parameters = {
  theme: 'both-themes',
  styles: storyStyles,
};




