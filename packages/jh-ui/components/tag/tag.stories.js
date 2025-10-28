import { html, css } from 'lit';
import './tag.js';
import '@jack-henry/jh-icons/icons-wc/icon-tag.js';
import { ifDefined } from 'lit/directives/if-defined.js';

const storyStyles = css`
div[id^="story-root"] {
    display: flex;
    justify-content: center;
    column-gap: 10px;
  }
`;

const disableControls = {
  size: { control: { disable: true } },
  dismissible: { control: { disable: true } },
  label: { control: { disable: true } },
  href: { control: { disable: true } },
  target: { control: { disable: true } },
  'dismiss-button-accessible-label': { control: { disable: true } },
  'tooltip-label': { control: { disable: true } },
  'remove-on-dismiss': { control: { disable: true } },
}

export default {
  component: 'jh-tag',
  title: 'Components/Tag',
  parameters: {
    actions: {
      handles: ['jh-dismiss','click'],
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium']
    },
    dismissible: {
      control: 'boolean'
    },
    label: {
      control: 'text'
    },
    'dismiss-button-accessible-label': {
      control: 'text'
    },
    'tooltip-label': {
      control: 'text'
    },
    href: {
      control: 'text'
    },
    target: {
      control: 'text'
    },
    'remove-on-dismiss': {
      control: 'boolean'
    },
  },
};

export const Overview = { render: (args) => html`
  <jh-tag label="label"></jh-tag>
  <jh-tag label="label" tabindex="0"><jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
  <jh-tag label="label" dismissible href="#" tooltip-label="dismiss tag"></jh-tag>
  <jh-tag label="label" tabindex="0" dismissible><jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
  <jh-tag label="label" size="medium" tabindex="0" dismissible><jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
  <jh-tag label="label" size="medium" href="#"></jh-tag>
  <jh-tag label="label" dismissible href="#" tooltip-label="dismiss tag" size="medium"></jh-tag>
  <jh-tag label="label" size="medium"><jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
  <jh-tag></jh-tag>
  <jh-tag dismissible><jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
  <jh-tag><jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
`};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

export const Playground = { render: (args) => html`
  <jh-tag tabindex="0"
  href=${ifDefined(args.href === '' ? null : args.href)} 
  target=${ifDefined(args.target === '' ? null : args.target)} 
  label=${args.label} size=${args.size} ?dismissible=${args.dismissible}
  dismiss-button-accessible-label=${args['dismiss-button-accessible-label']} tooltip-label=${args['tooltip-label']}
  ?remove-on-dismiss=${args['remove-on-dismiss']}>
  <jh-icon-tag slot="jh-tag-icon" size="x-small"></jh-icon-tag></jh-tag>
`};

Playground.args = {
  label: 'label',
  size: 'small',
  dismissible: true,
  'dismiss-button-accessible-label': 'dismiss tag',
  'tooltip-label': 'dismiss tag',
  href: null,
  target: '_SELF',
  'remove-on-dismiss': false,
};

Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};

export const Interactive = { render: (args) => html`
  <jh-tag label="interactive tag" tabindex="0" tooltip-label="dismiss tag"></jh-tag>
  <jh-tag label="interactive tag" size="medium" tabindex="0" dismissible tooltip-label="dismiss tag">
    <jh-icon-tag slot="jh-tag-icon"></jh-icon-tag>
  </jh-tag>
  <jh-tag label="interactive tag with a very long label" size="medium" tabindex="0" dismissible tooltip-label="dismiss tag">
    <jh-icon-tag slot="jh-tag-icon"></jh-icon-tag>
  </jh-tag>
`};

Interactive.argTypes = {
  ...disableControls,
};

Interactive.parameters = {
  styles: storyStyles,
};

export const Link = { render: (args) => html`
  <jh-tag label="Link tag" size="medium" href=${args.href} target=${args.target} tooltip-label="dismiss tag"></jh-tag>
  <jh-tag label="Link tag" href=${args.href} target=${args.target} dismissible tooltip-label="dismiss tag" remove-on-dismiss>
    <jh-icon-tag slot="jh-tag-icon"></jh-icon-tag>
  </jh-tag>
  <jh-tag label="Link tag with a very long label" href=${args.href} target=${args.target} dismissible tooltip-label="dismiss tag">
    <jh-icon-tag slot="jh-tag-icon"></jh-icon-tag>
  </jh-tag>
`};

Link.args = {
  href: "#",
  target: "_BLANK",
  };

Link.argTypes = {
  size: { control: { disable: true } },
  dismissible: { control: { disable: true } },
  label: { control: { disable: true } },
  'dismiss-button-accessible-label': { control: { disable: true } },
  'tooltip-label': { control: { disable: true } },
};

Link.parameters = {
  styles: storyStyles,
};




