import { html, css } from 'lit';
import './menu.js';
import '../list-item/list-item.js';
import '../list-group/list-group.js';
import '@jack-henry/jh-icons/icons-wc/icon-printer';
import '@jack-henry/jh-icons/icons-wc/icon-arrow-down-to-bracket';
import '@jack-henry/jh-icons/icons-wc/icon-pencil';

const storyStyles = css`
  div[id^="story-root"] {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  jh-menu {
    width: 200px;
    margin-right: 16px;
  }
`;

export default {
  component: 'jh-menu',
  title: 'Components/Menu',
};

export const Overview = {
  render: (args) => html`
    <jh-menu>
      <jh-list-item
        show-divider
        primary-metadata="metadata"
        tabindex="0"
        selected
        role="menuitem"
        >Item 1</jh-list-item
      >
      <jh-list-item show-divider tabindex="0" role="menuitem"
        >Item 2</jh-list-item
      >
      <jh-list-item show-divider tabindex="0" role="menuitem"
        >Item 3</jh-list-item
      >
      <jh-list-item primary-metadata="metadata" tabindex="0" role="menuitem"
        >Item 4</jh-list-item
      >
    </jh-menu>
    <jh-menu>
      <jh-list-group label="Actions">
        <jh-list-item primary-text="Edit" role="menuitem" tabindex="0">
          <jh-icon-pencil slot="jh-list-item-left"></jh-icon-pencil>
        </jh-list-item>
        <jh-list-item primary-text="Download" role="menuitem" tabindex="0">
          <jh-icon-arrow-down-to-bracket
            slot="jh-list-item-left"
          ></jh-icon-arrow-down-to-bracket>
        </jh-list-item>
        <jh-list-item
          primary-text="Print"
          role="menuitem"
          tabindex="0"
          disabled
        >
          <jh-icon-printer slot="jh-list-item-left"></jh-icon-printer>
        </jh-list-item>
      </jh-list-group>
    </jh-menu>
  `,
};

Overview.parameters = {
  //used to hide the warning when a component doesn't have controls.
  controls: { hideNoControlsWarning: true },
  styles: storyStyles,
};

export const Playground = {
  render: (args) => html`
    <jh-menu>
      <jh-list-item tabindex="0" selected role="menuitem"
        >Item number 1</jh-list-item
      >
      <jh-list-item tabindex="0" role="menuitem">Item number 2</jh-list-item>
      <jh-list-item tabindex="0" role="menuitem">Item number 3</jh-list-item>
      <jh-list-item disabled tabindex="-1" role="menuitem"
        >Item number 4</jh-list-item
      >
    </jh-menu>
  `,
};

Playground.parameters = {
  controls: { hideNoControlsWarning: true },
  styles: storyStyles,
  theme: 'both-themes',
};
