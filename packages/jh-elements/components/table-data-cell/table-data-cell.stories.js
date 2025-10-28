import { html, css } from 'lit';
import './table-data-cell.js';
import '../table-row/table-row.js';
import '../table/table.js';

const storyStyles = css`
.overview {
  max-width: 500px;
}
`;

const disableControls = {
  'horizontal-align': { control: { disable: true } }
}

export default {
  component: 'jh-table-data-cell',
  title: 'Components/Table/Table Data Cell',
  tags: ['beta'],
  argTypes: {
    'horizontal-align': {
      control: 'select',
      options: ['left', 'center', 'right'],
    }
  },
};

export const Overview = { render: (args) => html`
  <jh-table class="overview">
   <jh-table-row>
  <jh-table-data-cell >Lorem ipsum</jh-table-data-cell>
  <jh-table-data-cell >Lorem ipsum dolor sit amet</jh-table-data-cell>
  <jh-table-data-cell >Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
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
   <jh-table-row>
  <jh-table-data-cell horizontal-align=${args['horizontal-align']}>Lorem ipsum</jh-table-data-cell>
  <jh-table-data-cell horizontal-align=${args['horizontal-align']}>Lorem ipsum dolor sit amet</jh-table-data-cell>
  <jh-table-data-cell horizontal-align=${args['horizontal-align']}>Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
    </jh-table-row>
  </jh-table>
`};

Playground.args = {
'horizontal-align': 'left'
};

Playground.parameters = {
  theme: 'both-themes',
  styles: storyStyles,
};



