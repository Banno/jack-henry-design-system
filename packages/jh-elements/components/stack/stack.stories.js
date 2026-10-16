/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import { action } from 'storybook/actions';
import './stack.js';
import '../row/row.js';
import '../button/button.js';
import '../badge/badge.js';
import '../tag/tag.js';
import '../card/card.js';
import '../progress/progress.js';
import '@jack-henry/jh-icons/icons-wc/icon-user.js';

/* Inline placeholder image so the media examples need no asset files. */
const thumbnail = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="140" viewBox="0 0 240 140"><rect width="240" height="140" fill="#5b7c99"/><circle cx="180" cy="40" r="18" fill="#f2d388"/><path d="M0 140V95l60-40 50 35 40-25 90 50v25z" fill="#2f4858"/></svg>'
)}`;

const storyStyles = css`
  div[id^='story-root'] {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: center;
    padding: 24px;
  }
  .demo-figure {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    font-family: var(--jh-font-body-regular-1-font-family);
    font-size: var(--jh-font-body-regular-1-font-size);
    color: var(--jh-color-content-primary-enabled);
  }
  .demo-caption {
    font-family: var(--jh-font-helper-regular-font-family);
    font-size: var(--jh-font-helper-regular-font-size);
    color: var(--jh-color-content-secondary-enabled);
    max-width: 240px;
    text-align: center;
  }
  /* A sized base layer so the stack has dimensions to lay out within. */
  .layer-base {
    display: grid;
    place-items: center;
    box-sizing: border-box;
    width: 240px;
    height: 140px;
    border-radius: 8px;
    background-color: var(--jh-color-container-secondary-enabled, #e6e6e6);
    color: var(--jh-color-content-primary-enabled, #1a1a1a);
  }
  .layer-media {
    width: 240px;
    height: 140px;
    border-radius: 8px;
    object-fit: cover;
  }
  /* A translucent overlay that fully covers the base layer. */
  .layer-overlay {
    display: grid;
    place-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    color: #fff;
    background-color: color-mix(in srgb, #000 45%, transparent);
  }
  /* Lets clicks pass through the overlay to the layer beneath it. */
  .pass-through {
    pointer-events: none;
  }
  /* A small auto-sized layer that shrinks to its content unless the stack uses fill. */
  .layer-chip {
    box-sizing: border-box;
    padding: 8px 12px;
    border-radius: 8px;
    color: #fff;
    background-color: color-mix(in srgb, #000 55%, transparent);
  }
  /* A caption bar that spans the full width of the image beneath it. */
  .caption-bar {
    box-sizing: border-box;
    width: 100%;
    padding: 24px 12px 8px;
    border-radius: 0 0 8px 8px;
    color: #fff;
    font-family: var(--jh-font-body-regular-1-font-family);
    font-size: var(--jh-font-body-regular-1-font-size);
    background: linear-gradient(transparent, color-mix(in srgb, #000 70%, transparent));
  }
  /* Nudges a corner-anchored element outward so it overhangs the base. */
  .overhang {
    transform: translate(50%, -50%);
  }
  /* Right-to-left flips the trailing corner, so the nudge flips with it. */
  .overhang:dir(rtl) {
    transform: translate(-50%, -50%);
  }
  /* Insets a corner-anchored element inward from the base's edges. */
  .inset {
    margin: var(--jh-dimension-200);
  }
  /* A circular avatar-style target for anchoring a badge. */
  .avatar {
    display: grid;
    place-items: center;
    box-sizing: border-box;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: var(--jh-color-container-secondary-enabled, #e6e6e6);
    color: var(--jh-color-content-primary-enabled, #1a1a1a);
  }
  .loading-card {
    width: 280px;
  }
  /* A translucent scrim that covers the card while loading. */
  .loading-scrim {
    display: grid;
    place-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: var(--jh-border-radius-200, 8px);
    background-color: color-mix(in srgb, var(--jh-color-container-primary-enabled, #fff) 65%, transparent);
  }
`;

const disableControls = {
  alignment: { control: { disable: true } },
};

const alignmentOptions = [
  'fill',
  'top-leading',
  'top',
  'top-trailing',
  'leading',
  'center',
  'trailing',
  'bottom-leading',
  'bottom',
  'bottom-trailing',
];

export default {
  component: 'forge-stack',
  title: 'Primitives/Stack',
  tags: ['beta'],
  argTypes: {
    alignment: {
      control: 'select',
      options: alignmentOptions,
    },
  },
  parameters: {
    actions: {
      disable: true
    },
  },
};

/**
 * Overview: an overlay covering a base layer, and a corner badge positioned
 * with `alignment`. Shows the two core uses of a stack: overlaying content and
 * anchoring an element to an edge.
 */
export const Overview = {
  render: () => html`
    <div class="demo-figure">
      <forge-stack>
        <div class="layer-base">Base layer</div>
        <div class="layer-overlay">Overlay layer</div>
      </forge-stack>
      <span class="demo-caption">Overlay covering the base layer.</span>
    </div>

    <div class="demo-figure">
      <forge-stack alignment="top-trailing">
        <div class="layer-base">Avatar</div>
        <jh-badge count="8" aria-hidden="true" class="inset"></jh-badge>
      </forge-stack>
      <span class="demo-caption">
        A badge anchored to the top corner with <code>alignment="top-trailing"</code>.
      </span>
    </div>
  `,
};

Overview.argTypes = {
  ...disableControls,
};

Overview.parameters = {
  styles: storyStyles,
};

/**
 * Playground: layer two blocks and use the control to change `alignment`.
 * Alignment applies to every layer at once. The base layer has an explicit size
 * so it keeps its dimensions; the top layer is auto-sized, so it covers the
 * stack with `fill` and shrinks to its content for every other value.
 */
export const Playground = {
  render: (args) => html`
    <forge-stack alignment=${args.alignment}>
      <div class="layer-base">Base layer</div>
      <div class="layer-chip">Top layer</div>
    </forge-stack>
  `,
};

Playground.args = {
  alignment: 'center',
};

Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};

/**
 * Alignment: the same two layers pinned to each of the nine positions, plus
 * the default `fill`, where a layer covers the whole stack.
 */
export const Alignment = {
  render: () => html`
    ${alignmentOptions.map(
      (alignment) => html`
        <div class="demo-figure">
          <forge-stack alignment=${alignment}>
            <div class="layer-base"></div>
            ${alignment === 'fill'
              ? html`<div class="layer-overlay">Overlay</div>`
              : html`<jh-badge count="1" aria-hidden="true" class="inset"></jh-badge>`}
          </forge-stack>
          <span class="demo-caption">alignment="${alignment}"</span>
        </div>
      `
    )}
  `,
};

Alignment.argTypes = {
  ...disableControls,
};

Alignment.parameters = {
  styles: storyStyles,
};

/**
 * Anchored badge: the most common stack pattern. A small element (badge, dot,
 * or tag) is layered over a base and pinned to an edge with `alignment`.
 * Use a `margin` to inset it from the corner or a `transform` to overhang it.
 * The badges are visual only, so they are hidden from assistive tech and their
 * information lives in the accessible name of the element beneath them. See
 * the Accessible badge story for the full pattern.
 */
export const AnchoredBadge = {
  render: () => html`
    <div class="demo-figure">
      <forge-stack alignment="top-trailing">
        <jh-button
          label="Notifications"
          accessible-label="Notifications, 8 unread"
        ></jh-button>
        <jh-badge count="8" aria-hidden="true" class="overhang"></jh-badge>
      </forge-stack>
      <span class="demo-caption">Count badge hanging off the corner.</span>
    </div>

    <div class="demo-figure">
      <forge-stack alignment="top-trailing">
        <div class="avatar" role="img" aria-label="User, online">
          <jh-icon-user size="large"></jh-icon-user>
        </div>
        <jh-badge aria-hidden="true"></jh-badge>
      </forge-stack>
      <span class="demo-caption">Presence dot on an avatar.</span>
    </div>

    <div class="demo-figure">
      <forge-stack alignment="top-leading">
        <img class="layer-media" src=${thumbnail} alt="Live stream preview" />
        <jh-tag label="Live" class="inset"></jh-tag>
      </forge-stack>
      <span class="demo-caption">Tag anchored to a media thumbnail.</span>
    </div>
  `,
};

AnchoredBadge.argTypes = {
  ...disableControls,
};

AnchoredBadge.parameters = {
  styles: storyStyles,
};

/**
 * Accessible badge: the badge is purely visual, so it is hidden from
 * assistive tech with `aria-hidden="true"`, and the information it shows is
 * folded into the accessible name of the control beneath it. A screen reader
 * announces "Inbox, 3 unread messages, button" once, instead of "Inbox, button"
 * followed by a stray "3". The accessible name starts with the visible label so
 * it still matches what sighted users see.
 */
export const AccessibleBadge = {
  render: () => html`
    <div class="demo-figure">
      <forge-stack alignment="top-trailing">
        <jh-button
          label="Inbox"
          accessible-label="Inbox, 3 unread messages"
        ></jh-button>
        <jh-badge count="3" aria-hidden="true" class="overhang"></jh-badge>
      </forge-stack>
      <span class="demo-caption">
        The button's accessible name includes the count; the badge is hidden from assistive tech.
      </span>
    </div>
  `,
};

AccessibleBadge.argTypes = {
  ...disableControls,
};

AccessibleBadge.parameters = {
  styles: storyStyles,
};

/**
 * Caption over an image: a caption bar spans the bottom edge of an image. The
 * stack uses `alignment="bottom"`, and the caption gets an explicit
 * `width: 100%` so it spans the image instead of shrinking to its text.
 */
export const CaptionOverImage = {
  render: () => html`
    <div class="demo-figure">
      <forge-stack alignment="bottom">
        <img class="layer-media" src=${thumbnail} alt="" />
        <span class="caption-bar">Mountain lake at sunrise</span>
      </forge-stack>
      <span class="demo-caption">Caption spanning the bottom edge.</span>
    </div>
  `,
};

CaptionOverImage.argTypes = {
  ...disableControls,
};

CaptionOverImage.parameters = {
  styles: storyStyles,
};

/**
 * Composition: a stack layer can itself be a layout primitive. Here the top
 * layer is a `forge-row` that places a caption and a duration tag at opposite
 * ends of the bottom edge of the image.
 */
export const Composition = {
  render: () => html`
    <div class="demo-figure">
      <forge-stack alignment="bottom">
        <img class="layer-media" src=${thumbnail} alt="" />
        <forge-row class="caption-bar" align-x="between" align-y="center">
          <span>Mountain lake at sunrise</span>
          <jh-tag label="3:42"></jh-tag>
        </forge-row>
      </forge-stack>
      <span class="demo-caption">A row as a layer, arranging content within it.</span>
    </div>
  `,
};

Composition.argTypes = {
  ...disableControls,
};

Composition.parameters = {
  styles: storyStyles,
};

/**
 * Loading overlay: layer a translucent scrim and an indeterminate
 * `jh-progress` over content while it loads. The scrim blocks the mouse, but
 * covering content does not remove it from the focus order or the
 * accessibility tree. So the covered card is also made `inert`, which blocks
 * keyboard and assistive tech. Because `inert` content is removed from the
 * accessibility tree, `aria-busy` goes on a wrapper around the card.
 */
export const LoadingOverlay = {
  render: () => html`
    <div class="demo-figure">
      <forge-stack>
        <div aria-busy="true">
          <jh-card
            inert
            header-title="Account balance"
            class="loading-card"
          >
            <p>Checking •••• 4821</p>
            <jh-button
              slot="jh-card-footer"
              label="Transfer"
              @click=${(e) => action('transfer-click (blocked)')(e.type)}
            ></jh-button>
          </jh-card>
        </div>
        <div class="loading-scrim">
          <jh-progress
            type="circular"
            size="large"
            indeterminate
            accessible-label="Loading account"
          ></jh-progress>
        </div>
      </forge-stack>
      <span class="demo-caption">
        The card is inert while loading, so the Transfer button can't be reached with the mouse, the keyboard, or a screen reader.
      </span>
    </div>
  `,
};

LoadingOverlay.argTypes = {
  ...disableControls,
};

LoadingOverlay.parameters = {
  styles: storyStyles,
};

/**
 * Pointer events: a known stack gotcha. Because a top layer sits over the
 * layers below it, it intercepts pointer events even where it looks empty. In
 * the first example the overlay blocks the button underneath (clicking it logs
 * nothing). In the second, the overlay sets `pointer-events: none`, so clicks
 * pass through and the button responds. Open the Actions panel and try clicking
 * each button.
 */
export const PointerEvents = {
  render: () => html`
    <div class="demo-figure">
      <forge-stack>
        <div class="layer-base">
          <jh-button
            label="Try to click"
            @click=${(e) => action('button-click (blocked)')(e.type)}
          ></jh-button>
        </div>
        <div class="layer-overlay">Overlay intercepts clicks</div>
      </forge-stack>
      <span class="demo-caption">
        Overlay on top: the button below cannot be clicked.
      </span>
    </div>

    <div class="demo-figure">
      <forge-stack>
        <div class="layer-base">
          <jh-button
            label="Click me"
            @click=${(e) => action('button-click (passes through)')(e.type)}
          ></jh-button>
        </div>
        <div class="layer-overlay pass-through">pointer-events: none</div>
      </forge-stack>
      <span class="demo-caption">
        Overlay uses <code>pointer-events: none</code>, so clicks reach the button.
      </span>
    </div>
  `,
};

PointerEvents.argTypes = {
  ...disableControls,
};

PointerEvents.parameters = {
  styles: storyStyles,
};
