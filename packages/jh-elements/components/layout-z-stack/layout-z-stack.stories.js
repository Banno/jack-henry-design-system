/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import { action } from 'storybook/actions';
import './layout-z-stack.js';
import '../button/button.js';
import '../badge/badge.js';
import '../tag/tag.js';
import '../card/card.js';
import '../progress/progress.js';
import '@jack-henry/jh-icons/icons-wc/icon-bell.js';
import '@jack-henry/jh-icons/icons-wc/icon-user.js';

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
  /* Nudges a corner-anchored element outward so it overhangs the base. */
  .overhang {
    transform: translate(50%, -50%);
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
  align: { control: { disable: true } },
  justify: { control: { disable: true } },
};

const alignOptions = ['start', 'end', 'center', 'stretch'];

export default {
  component: 'jh-layout-z-stack',
  title: 'Primitives/Layout Z Stack',
  argTypes: {
    align: {
      control: 'select',
      options: alignOptions,
    },
    justify: {
      control: 'select',
      options: alignOptions,
    },
  },
};

/**
 * Overview — a media layer with a translucent caption overlay on top, and a
 * corner badge positioned with `align`/`justify`. Shows the two core uses of a
 * z-stack: overlaying content and anchoring an element to an edge.
 */
export const Overview = {
  render: () => html`
    <div class="demo-figure">
      <jh-layout-z-stack>
        <div class="layer-base">Base layer</div>
        <div class="layer-overlay">Overlay layer</div>
      </jh-layout-z-stack>
      <span class="demo-caption">Overlay covering the base layer.</span>
    </div>

    <div class="demo-figure">
      <jh-layout-z-stack align="start" justify="end">
        <div class="layer-base">Avatar</div>
        <jh-badge count="8" class="inset"></jh-badge>
      </jh-layout-z-stack>
      <span class="demo-caption">
        A badge anchored to the top-right with <code>align="start"</code> +
        <code>justify="end"</code>.
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
 * Playground — layer two blocks and use the controls to change `align` and
 * `justify`. Alignment applies to every layer at once; use per-element
 * `align-self` / `justify-self` on a child to override it.
 */
export const Playground = {
  render: (args) => html`
    <jh-layout-z-stack
      align=${args.align}
      justify=${args.justify}
    >
      <div class="layer-base">Base layer</div>
      <div class="layer-overlay" style="width: 120px; height: 60px;">Top layer</div>
    </jh-layout-z-stack>
  `,
};

Playground.args = {
  align: 'center',
  justify: 'center',
};

Playground.parameters = {
  styles: storyStyles,
  theme: 'both-themes',
};

/**
 * Alignment — the same two layers positioned to each corner and the center by
 * combining `align` (block axis) with `justify` (inline axis).
 */
export const Alignment = {
  render: () => html`
    <div class="demo-figure">
      <jh-layout-z-stack align="start" justify="start">
        <div class="layer-base"></div>
        <jh-badge count="1" class="inset"></jh-badge>
      </jh-layout-z-stack>
      <span class="demo-caption">align="start" justify="start"</span>
    </div>
    <div class="demo-figure">
      <jh-layout-z-stack align="center" justify="center">
        <div class="layer-base"></div>
        <jh-badge count="2"></jh-badge>
      </jh-layout-z-stack>
      <span class="demo-caption">align="center" justify="center"</span>
    </div>
    <div class="demo-figure">
      <jh-layout-z-stack align="end" justify="end">
        <div class="layer-base"></div>
        <jh-badge count="3" class="inset"></jh-badge>
      </jh-layout-z-stack>
      <span class="demo-caption">align="end" justify="end"</span>
    </div>
  `,
};

Alignment.argTypes = {
  ...disableControls,
};

Alignment.parameters = {
  styles: storyStyles,
};

/**
 * Anchored badge — the most common z-stack pattern. A small element (badge, dot,
 * or tag) is layered over a base and pinned to an edge with `align`/`justify`.
 * Use a `margin` to inset it from the corner or a `transform` to overhang it.
 */
export const AnchoredBadge = {
  render: () => html`
    <div class="demo-figure">
      <jh-layout-z-stack align="start" justify="end">
        <jh-button label="Notifications"></jh-button>
        <jh-badge count="8" class="overhang"></jh-badge>
      </jh-layout-z-stack>
      <span class="demo-caption">Count badge hanging off the corner.</span>
    </div>

    <div class="demo-figure">
      <jh-layout-z-stack align="start" justify="end">
        <div class="avatar"><jh-icon-user size="large"></jh-icon-user></div>
        <jh-badge></jh-badge>
      </jh-layout-z-stack>
      <span class="demo-caption">Presence dot on an avatar.</span>
    </div>

    <div class="demo-figure">
      <jh-layout-z-stack align="start" justify="end">
        <jh-card header-title="Card title">Card content</jh-card>
        <jh-tag label="New" class="inset"></jh-tag>
      </jh-layout-z-stack>
      <span class="demo-caption">Status tag anchored to a corner.</span>
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
 * Loading overlay — layer a translucent scrim and an indeterminate
 * `jh-progress` over content while it loads. Because the scrim is the top
 * layer, it also blocks pointer events on the controls beneath it, so the user
 * can't interact with content that isn't ready yet.
 */
export const LoadingOverlay = {
  render: () => html`
    <div class="demo-figure">
      <jh-layout-z-stack>
        <jh-card
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
        <div class="loading-scrim">
          <jh-progress
            type="circular"
            size="large"
            indeterminate
            accessible-label="Loading account"
          ></jh-progress>
        </div>
      </jh-layout-z-stack>
      <span class="demo-caption">
        The scrim covers the card and blocks the Transfer button while loading.
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
 * Pointer events — a known z-stack gotcha. Because a top layer sits over the
 * layers below it, it intercepts pointer events even where it looks empty. In
 * the first example the overlay blocks the button underneath (clicking it logs
 * nothing). In the second, the overlay sets `pointer-events: none`, so clicks
 * pass through and the button responds. Open the Actions panel and try clicking
 * each button.
 */
export const PointerEvents = {
  render: () => html`
    <div class="demo-figure">
      <jh-layout-z-stack>
        <div class="layer-base">
          <jh-button
            label="Try to click"
            @click=${(e) => action('button-click (blocked)')(e.type)}
          ></jh-button>
        </div>
        <div class="layer-overlay">Overlay intercepts clicks</div>
      </jh-layout-z-stack>
      <span class="demo-caption">
        Overlay on top — the button below cannot be clicked.
      </span>
    </div>

    <div class="demo-figure">
      <jh-layout-z-stack>
        <div class="layer-base">
          <jh-button
            label="Click me"
            @click=${(e) => action('button-click (passes through)')(e.type)}
          ></jh-button>
        </div>
        <div class="layer-overlay pass-through">pointer-events: none</div>
      </jh-layout-z-stack>
      <span class="demo-caption">
        Overlay uses <code>pointer-events: none</code> — clicks reach the button.
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



