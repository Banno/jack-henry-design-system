// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import './table.js';
import '../table-header-cell/table-header-cell.js';
import '../table-data-cell/table-data-cell.js';
import '../table-row/table-row.js';

const storyStyles = css`
.overview {
  width: 600px;
}
.playground {
  height: 600px;
}
.scrollable {
  width: 600px;
  height: 500px;
}
.fixed-width-repro {
  width: 100%;
}
.expandable {
  min-width: 300px;
  white-space: normal;
}
`;

const disableControls = {
  'vertical-align': { control: { disable: true } },
  'sticky-header': { control: { disable: true } },
  'sticky-footer': { control: { disable: true } },
  striped: { control: { disable: true } },
  padding: { control: { disable: true } },
  'accessible-label': { control: { disable: true } },
  scrollable: { control: { disable: true }},
}

export default {
  component: 'jh-table',
  tags: ['beta'],
  title: 'Components/Table/Table',
  parameters: {
    actions: {
      handles: ['jh-sort'],
    },
  },
  argTypes: {
    'vertical-align': {
      control: 'select',
      options: ['top', 'middle', 'bottom'],
    },
    'sticky-header': {
      control: 'boolean',
    },
    'sticky-footer': {
      control: 'boolean',
    },
    striped: {
      control: 'boolean',
    },
    scrollable: {
      control: 'boolean',
    },
    padding: {
      control: 'radio',
      options: ['medium', 'small'],
    },
    'accessible-label': {
      control: 'text',
    },
  },
};

export const Overview = { render: (args) => html`
<div class="overview">
  <jh-table vertical-align="top" sticky-footer sticky-header>
    <div slot="jh-table-caption">Overview Table</div>
    <div slot="jh-table-toolbar">Toolbar</div>
    <jh-table-row slot="jh-table-header">
    <jh-table-header-cell  sorted="none" sortable>
    Lorem ipsum dolor</jh-table-header-cell>
    <jh-table-header-cell sorted="none" sortable>Lorem ipsum dolor sit amet</jh-table-header-cell>
    <jh-table-header-cell sortable>Lorem ipsum</jh-table-header-cell>
    <jh-table-header-cell  sortable>Lorem ipsum dolor sit amet</jh-table-header-cell>
    </jh-table-row>
    <jh-table-row>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
      </jh-table-row>
      <jh-table-row>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
      </jh-table-row>
      <jh-table-row>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
      </jh-table-row>
      <jh-table-row slot="jh-table-footer">
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum dolor sit</jh-table-data-cell>
      </jh-table-row>
      <div slot="jh-table-pagination">1 of 1</div>
    </jh-table>
</div>
`};

Overview.argTypes = {
  ...disableControls,
};
Overview.parameters = {
  styles: storyStyles,
};

export const Playground = {
  render:(args) => html`
  <div class="playground">
    <jh-table ?sticky-footer=${args['sticky-footer']} ?sticky-header=${args['sticky-header']} 
    vertical-align=${args['vertical-align']} ?striped=${args.striped} padding=${args.padding} accessible-label=${args['accessible-label']}>
    <div slot="jh-table-caption">Playground Table</div>
    <jh-table-row slot="jh-table-header">
    <jh-table-header-cell sorted="none" sortable>
    Lorem ipsum</jh-table-header-cell>
    <jh-table-header-cell sorted="none" sortable>Lorem ipsum dolor sit amet</jh-table-header-cell>
    <jh-table-header-cell >Lorem ipsum</jh-table-header-cell>
    <jh-table-header-cell >Lorem ipsum dolor sit amet</jh-table-header-cell>
    </jh-table-row>
      <jh-table-row>
        <jh-table-data-cell horizontal-align="left">Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell horizontal-align="left">Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell horizontal-align="left">Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell horizontal-align="left">Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
      </jh-table-row>
      <jh-table-row>
      <jh-table-data-cell horizontal-align="center">Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell horizontal-align="center">Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell horizontal-align="center">Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell horizontal-align="center">Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
      </jh-table-row>
      <jh-table-row>
      <jh-table-data-cell horizontal-align="right">Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell horizontal-align="right">Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell horizontal-align="right">Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell horizontal-align="right">Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
      </jh-table-row>
      <jh-table-row>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
      </jh-table-row>
      <jh-table-row>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
      </jh-table-row>
      <jh-table-row>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
      </jh-table-row>
      <jh-table-row>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
      </jh-table-row>
      <jh-table-row slot="jh-table-footer">
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
      </jh-table-row>
    </jh-table>
</div>

  `
};

Playground.args = {
  'sticky-footer': false,
  'sticky-header': false,
  'vertical-align': 'top',
  striped: false,
  padding: 'medium',
  'accessible-label': null,
};

Playground.argTypes = {
  scrollable: { control: { disable: true }
},
}

Playground.parameters = {
  theme: 'both-themes',
  styles: storyStyles,
};

export const Scrollable = { render: (args) => html`
<div class="scrollable">
  <jh-table vertical-align="top" ?scrollable=${args.scrollable} ?sticky-header=${args['sticky-header']} ?sticky-footer=${args['sticky-footer']}>
    <div slot="jh-table-caption">Scrollable Table</div>
    <div slot="jh-table-toolbar">Toolbar</div>
  <jh-table-row slot="jh-table-header">
  <jh-table-header-cell sortable sorted="none" >
  Lorem ipsum sit amet consectetur</jh-table-header-cell>
  <jh-table-header-cell sortable sorted="none" >Lorem ipsum</jh-table-header-cell>
  <jh-table-header-cell >Lorem ipsum</jh-table-header-cell>
  <jh-table-header-cell  sortable sorted="none">
  Lorem ipsum</jh-table-header-cell>
  <jh-table-header-cell sortable sorted="none">Lorem ipsum</jh-table-header-cell>
  <jh-table-header-cell >Lorem ipsum</jh-table-header-cell>
  <jh-table-header-cell >Lorem ipsum sit amet consectetur</jh-table-header-cell>
  <jh-table-header-cell >Lorem ipsum</jh-table-header-cell>
  </jh-table-row>
    <jh-table-row>
    <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row>
    <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
    </jh-table-row>
    <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row>
    <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row>
    <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row>
    <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row>
    <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row slot="jh-table-footer">
    <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet</jh-table-data-cell>
    </jh-table-row>
    <div slot="jh-table-pagination">Pagination</div>
    </jh-table>
</div>
    `};
    Scrollable.args = {
      'sticky-header': true,
      'sticky-footer': true,
      scrollable: true
    };
    Scrollable.argTypes = {
      'vertical-align': { control: { disable: true } },
      striped: { control: { disable: true } },
      padding: { control: { disable: true } },
      'accessible-label': { control: { disable: true } },
    };
    Scrollable.parameters = {
      styles: storyStyles,
    };
    export const ScrollableFixedWidthRepro = { render: (args) => html`
<div class="fixed-width-repro">
  <jh-table sticky-header scrollable class="fixed-width-repro">
    <div slot="jh-table-caption">Scrollable Fixed Width Repro</div>
    <jh-table-row slot="jh-table-header">
      <jh-table-header-cell style="min-width: 200px;">Name</jh-table-header-cell>
      <jh-table-header-cell class="expandable">Description</jh-table-header-cell>
      <jh-table-header-cell style="min-width: 150px;">Status</jh-table-header-cell>
      <jh-table-header-cell style="min-width: 120px;">Amount</jh-table-header-cell>
    </jh-table-row>
    <jh-table-row>
      <jh-table-data-cell style="width: 200px;">John Smith</jh-table-data-cell>
      <jh-table-data-cell class="expandable">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</jh-table-data-cell>
      <jh-table-data-cell style="width: 150px;">Active</jh-table-data-cell>
      <jh-table-data-cell style="width: 120px;">$1,234.56</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row>
      <jh-table-data-cell style="width: 200px;">Jane Doe</jh-table-data-cell>
      <jh-table-data-cell class="expandable">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris</jh-table-data-cell>
      <jh-table-data-cell style="width: 150px;">Pending</jh-table-data-cell>
      <jh-table-data-cell style="width: 120px;">$5,678.90</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row>
      <jh-table-data-cell style="width: 200px;">Bob Johnson</jh-table-data-cell>
      <jh-table-data-cell class="expandable">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</jh-table-data-cell>
      <jh-table-data-cell style="width: 150px;">Inactive</jh-table-data-cell>
      <jh-table-data-cell style="width: 120px;">$910.11</jh-table-data-cell>
    </jh-table-row>
  </jh-table>
</div>
`};

ScrollableFixedWidthRepro.argTypes = {
  ...disableControls,
};
ScrollableFixedWidthRepro.parameters = {
  styles: storyStyles,
};






