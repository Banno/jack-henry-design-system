import { html, css } from 'lit';
import './table-row.js';
import '../table-data-cell/table-data-cell.js';

const storyStyles = css`
.overview {
  max-width: 500px;
}
`;

export default {
  component: 'jh-table-row',
  title: 'Components/Table/Table Row',
  tags: ['beta'],
};

export const Overview = { render: (args) => html`
  <jh-table class="overview">
   <jh-table-row>
  <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
  <jh-table-data-cell>Lorem ipsum dolor sit amet</jh-table-data-cell>
  <jh-table-data-cell>Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row>
  <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
  <jh-table-data-cell>Lorem ipsum dolor sit amet</jh-table-data-cell>
  <jh-table-data-cell>Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
    </jh-table-row>
  </jh-table>
`};

Overview.parameters = {
  styles: storyStyles,
};


export const Playground = { render: (args) => html`
  <jh-table>
   <jh-table-row>
  <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
  <jh-table-data-cell>Lorem ipsum dolor sit amet</jh-table-data-cell>
  <jh-table-data-cell>Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
    </jh-table-row>
    <jh-table-row>
  <jh-table-data-cell>Lorem ipsum</jh-table-data-cell>
  <jh-table-data-cell>Lorem ipsum dolor sit amet</jh-table-data-cell>
  <jh-table-data-cell>Lorem ipsum dolor sit amet consectetur adipiscing elit</jh-table-data-cell>
    </jh-table-row>
  </jh-table>
`};

Playground.parameters = {
  theme: 'both-themes',
  styles: storyStyles,
};





