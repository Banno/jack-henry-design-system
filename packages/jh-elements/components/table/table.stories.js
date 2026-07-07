// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import { action } from 'storybook/actions';
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
  height: 700px;
}
.scrollable-fixed-width {
  min-width: 160px;
}
.controlled {
  width: 100%;
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

function logCustomEvent(name, e) {
  return action(name)({
    detail: e.detail,
    type: e.type,
    bubbles: e.bubbles,
    cancelable: e.cancelable,
    composed: e.composed,
    currentTarget: e.currentTarget,
    defaultPrevented: e.defaultPrevented,
    eventPhase: e.eventPhase,
    isTrusted: e.isTrusted,
    target: e.target,
    timeStamp: e.timeStamp,
  });
}

export default {
  component: 'jh-table',
  tags: ['beta'],
  title: 'Components/Table/Table',
  decorators: [
      (story) => html`
        <div class="story-decorator"
          @jh-sort=${(e) => logCustomEvent('jh-sort', e)}
        >
          ${story()}
        </div>
      `,
  ],
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
    <div slot="jh-table-caption">Overview Table - Fluid layout</div>
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
    <div slot="jh-table-caption">Scrollable Table - with Fixed min-width Columns</div>
    <div slot="jh-table-toolbar">Toolbar</div>
    <jh-table-row slot="jh-table-header">
      <jh-table-header-cell sortable sorted="none" >
      Lorem ipsum sit amet consectetur</jh-table-header-cell>
      <jh-table-header-cell sortable sorted="none" class="scrollable-fixed-width">Lorem ipsum</jh-table-header-cell>
      <jh-table-header-cell class="scrollable-fixed-width">Lorem ipsum</jh-table-header-cell>
      <jh-table-header-cell  sortable sorted="none" class="scrollable-fixed-width">
      Lorem ipsum</jh-table-header-cell>
      <jh-table-header-cell sortable sorted="none" class="scrollable-fixed-width">Lorem ipsum</jh-table-header-cell>
      <jh-table-header-cell class="scrollable-fixed-width">Lorem ipsum</jh-table-header-cell>
  </jh-table-row>
    <jh-table-row>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row>
    <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
    </jh-table-row>
    <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row>
    <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
        <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row slot="jh-table-footer">
    <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell >Lorem ipsum dolor sit</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
      <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
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
    export const Controlled = { render: (args) => html`
    <div class="controlled">
      <jh-table sticky-header>
        <div slot="jh-table-caption">Controlled Table with column widths in percentages (%)</div>
        <jh-table-row slot="jh-table-header">
          <jh-table-header-cell style="width: 20%;">Name</jh-table-header-cell>
          <jh-table-header-cell>Description</jh-table-header-cell>
          <jh-table-header-cell style="width: 15%;">Status</jh-table-header-cell>
          <jh-table-header-cell style="width: 15%;">Amount</jh-table-header-cell>
        </jh-table-row>
        <jh-table-row>
          <jh-table-data-cell >John Smith</jh-table-data-cell>
          <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</jh-table-data-cell>
          <jh-table-data-cell >Active</jh-table-data-cell>
          <jh-table-data-cell >$1,234.56</jh-table-data-cell>
        </jh-table-row>
        <jh-table-row>
          <jh-table-data-cell >Jane Doe</jh-table-data-cell>
          <jh-table-data-cell >Ut enim ad minim veniam quis nostrud exercitation ullamco laboris</jh-table-data-cell>
          <jh-table-data-cell >Pending</jh-table-data-cell>
          <jh-table-data-cell >$5,678.90</jh-table-data-cell>
        </jh-table-row>
        <jh-table-row>
          <jh-table-data-cell >Bob Johnson</jh-table-data-cell>
          <jh-table-data-cell >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</jh-table-data-cell>
          <jh-table-data-cell >Inactive</jh-table-data-cell>
          <jh-table-data-cell >$910.11</jh-table-data-cell>
        </jh-table-row>
      </jh-table>
    </div>
`};

Controlled.argTypes = {
  ...disableControls,
};
Controlled.parameters = {
  styles: storyStyles,
};






