import { html, css } from 'lit';
import './tag-group.js';
import '../tag/tag.js';
import '@jack-henry/jh-icons/icons-wc/icon-tag.js';

const storyStyles = css`
div[id^="story-root"] {
    display: flex;
    justify-content: center;
    column-gap: 10px;
  }
jh-tag-group {
  width: 300px;
}
.tag-group-container {
  display: flex;
  gap: 20px;
}
`;

const disableControls = {
  alignment: { control: { disable: true } },
}

export default {
  component: 'jh-tag-group',
  title: 'Components/Tag Group',
  argTypes: {
    alignment: {
      control: 'select',
      options: ['start','end']
    }
  },
};

export const Overview = { render: (args) => html`
  <div class="tag-group-container">
    <jh-tag-group aria-label="my tag group">
      <jh-tag label="label" role="listitem" tooltip-label="dismiss tag"><jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
      <jh-tag label="label" role="listitem" tooltip-label="dismiss tag"><jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
      <jh-tag label="label" role="listitem" tooltip-label="dismiss tag"><jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
      <jh-tag label="label" role="listitem" tooltip-label="dismiss tag"><jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
      <jh-tag label="tags with a very long label will get truncated" role="listitem" tooltip-label="dismiss tag"><jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
      <jh-tag label="label" role="listitem" tooltip-label="dismiss tag"><jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
      <jh-tag label="label" role="listitem" tooltip-label="dismiss tag"><jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
      <jh-tag label="label" role="listitem" tooltip-label="dismiss tag"><jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
    </jh-tag-group>
    <jh-tag-group alignment="end" aria-label="another tag group">
      <jh-tag label="label" dismissible tabindex="0"></jh-tag>
      <jh-tag label="longer label" dismissible tabindex="0"></jh-tag>
      <jh-tag label="label" dismissible tabindex="0"></jh-tag>
      <jh-tag label="label" dismissible tabindex="0"></jh-tag>
      <jh-tag label="label" dismissible tabindex="0"></jh-tag>
      <jh-tag label="label" dismissible tabindex="0"></jh-tag>
      <jh-tag label="label" dismissible tabindex="0"></jh-tag>
    </jh-tag-group>
  </div>
`};

Overview.argTypes = {
  ...disableControls,
};
Overview.parameters = {
  styles: storyStyles,
};

export const Playground = { render: (args) => html`
  <jh-tag-group alignment=${args.alignment} aria-label="my tag group">
    <jh-tag label="label" dismissible role="listitem" tooltip-label="dismiss tag"></jh-tag>
    <jh-tag label="label" dismissible role="listitem" tooltip-label="dismiss tag"></jh-tag>
    <jh-tag label="longer label" dismissible role="listitem" tooltip-label="dismiss tag"></jh-tag>
    <jh-tag label="label" dismissible role="listitem" tooltip-label="dismiss tag"></jh-tag>
    <jh-tag label="label" dismissible role="listitem" tooltip-label="dismiss tag"></jh-tag>
    <jh-tag label="tags with a very long label will get truncated" dismissible role="listitem" tooltip-label="dismiss tag"></jh-tag>
    <jh-tag label="label" dismissible role="listitem" tooltip-label="dismiss tag"></jh-tag>
    <jh-tag label="label" dismissible role="listitem" tooltip-label="dismiss tag"></jh-tag>
  </jh-tag-group>
`};

Playground.args = {
  alignment: 'start',
};

Playground.parameters = {
  theme: 'both-themes',
  styles: storyStyles,
};

const createNewTag = () => {
  let tagGroup = document.querySelector('jh-tag-group');
  let tag = document.createElement('jh-tag');
  tag.setAttribute('label', 'label');
  tag.setAttribute('dismissible', '');
  tag.setAttribute('role', 'listitem');
  tag.setAttribute('dismiss-button-accessible-label', 'dismiss tag');
  tag.setAttribute('tabindex', '0');
  tagGroup.appendChild(tag);
};

export const liveRegion = { 
  render: (args) => {
return html`
  <div class="tag-group-container">
    <jh-tag-group alignment=${args.alignment} aria-label="tag group" aria-live="polite" aria-atomic="false" aria-relevant="additions removals"></jh-tag-group>
    <jh-button label="Add tag" @click=${createNewTag}></jh-button>
  </div>
`;
  },
}
liveRegion.args = {
  alignment: 'start'
}

liveRegion.parameters = {
  styles: storyStyles,
};



