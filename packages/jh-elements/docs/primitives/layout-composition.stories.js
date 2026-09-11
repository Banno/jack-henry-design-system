/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import '../../components/layout-flex/layout-flex.js';
import '../../components/layout-spacer/layout-spacer.js';
import '../../components/button/button.js';
import '../../components/card/card.js';
import '../../components/input/input.js';
import '../../components/checkbox-group/checkbox-group.js';
import '../../components/checkbox/checkbox.js';

const storyStyles = css`
  .demo-surface {
    border: 1px dashed var(--jh-color-border-neutral-enabled, #ccc);
    border-radius: 8px;
  }
  .demo-block {
    display: block;
    padding: var(--jh-dimension-100);
    background-color: color-mix(in srgb, currentColor 8%, transparent);
    border-radius: 4px;
  }
  .form-card {
    width: 500px;
  }
  /* use these as placeholder and switch to typography class utilities when ready */
  .text-heading {
    margin: 0;
    color: var(--jh-color-content-primary-enabled);
    font-family: var(--jh-font-heading-medium-3-font-family);
    font-weight: var(--jh-font-heading-medium-3-font-weight);
    font-size: var(--jh-font-heading-medium-3-font-size);
    line-height: var(--jh-font-heading-medium-3-line-height);
  }
  .text-label {
    color: var(--jh-color-content-primary-enabled);
    font-family: var(--jh-font-body-medium-1-font-family);
    font-weight: var(--jh-font-body-medium-1-font-weight);
    font-size: var(--jh-font-body-medium-1-font-size);
    line-height: var(--jh-font-body-medium-1-line-height);
  }
  .text-body {
    color: var(--jh-color-content-primary-enabled);
    font-family: var(--jh-font-body-regular-1-font-family);
    font-weight: var(--jh-font-body-regular-1-font-weight);
    font-size: var(--jh-font-body-regular-1-font-size);
    line-height: var(--jh-font-body-regular-1-line-height);
  }
`;

export default {
  title: 'Primitives/Layout Composition',
  tags: ['beta'],
  parameters: {
    styles: storyStyles,
  },
};

/**
 * Toolbar / split header — the canonical spacer pattern.
 * A title on the left, actions pushed to the right by a flexible spacer.
 */
export const Toolbar = {
  render: () => html`
    <jh-layout-flex orientation="horizontal" class="demo-surface" padding="200" gap="100" align="center">
      <strong class="text-heading">Account settings</strong>
      <jh-layout-spacer></jh-layout-spacer>
      <jh-button appearance="secondary" label="Cancel"></jh-button>
      <jh-button appearance="primary" label="Save"></jh-button>
    </jh-layout-flex>
  `,
};


/**
 * Split groups — a single spacer placed *between* two button groups pushes them
 * to opposite ends of the row, keeping each group's own spacing intact. Shows the
 * spacer separating groups rather than sitting at one edge.
 */
export const SplitGroups = {
  render: () => html`
    <jh-layout-flex orientation="horizontal" class="demo-surface" padding="200" gap="100" align="center">
      <jh-button appearance="secondary" label="Previous"></jh-button>
      <jh-button appearance="secondary" label="Next"></jh-button>
      <jh-layout-spacer></jh-layout-spacer>
      <jh-button appearance="secondary" label="Cancel"></jh-button>
      <jh-button appearance="primary" label="Save"></jh-button>
    </jh-layout-flex>
  `,
};


/**
 * Card composition — a `jh-card` provides the surface, header, and footer, while
 * `jh-layout-flex` arranges the custom header row and footer actions. Shows the
 * primitives slotting cleanly into a higher-level component.
 */
export const CardLayout = {
  render: () => html`
    <jh-card show-footer-divider>
      <jh-layout-flex slot="jh-card-header" orientation="horizontal" gap="100" align="center">
        <strong>Payment method</strong>
        <jh-layout-spacer></jh-layout-spacer>
        <jh-button appearance="secondary" size="small" label="Edit"></jh-button>
      </jh-layout-flex>

      <span class="demo-block">Visa ending in 4242 — expires 08/28</span>

      <jh-layout-flex slot="jh-card-footer" orientation="horizontal" gap="100" justify="end">
        <jh-button appearance="danger" label="Remove"></jh-button>
        <jh-button appearance="primary" label="Set as default"></jh-button>
      </jh-layout-flex>
    </jh-card>
  `,
};


/**
 * Form row — a vertical flex of labeled horizontal flex rows, using align to
 * keep labels and controls on a shared baseline.
 */
export const FormRow = {
  render: () => html`
    <jh-layout-flex orientation="vertical" class="demo-surface" padding="300" gap="200">
      <jh-layout-flex orientation="horizontal" gap="200" align="baseline">
        <span class="text-label" style="min-width: 6rem;">First name</span>
        <jh-layout-spacer></jh-layout-spacer>
        <span class="demo-block text-body">Ada</span>
      </jh-layout-flex>
      <jh-layout-flex orientation="horizontal" gap="200" align="baseline">
        <span class="text-label" style="min-width: 6rem;">Last name</span>
        <jh-layout-spacer></jh-layout-spacer>
        <span class="demo-block text-body">Lovelace</span>
      </jh-layout-flex>
    </jh-layout-flex>
  `,
};


/**
 * Wrapping — a horizontal flex with wrap so children reflow onto new lines when
 * the container runs out of room. Resize the canvas to see the reflow.
 */
export const Wrapping = {
  render: () => html`
    <jh-layout-flex orientation="horizontal" class="demo-surface" padding="200" gap="100" wrap>
      <jh-button appearance="secondary" label="Overview"></jh-button>
      <jh-button appearance="secondary" label="Transactions"></jh-button>
      <jh-button appearance="secondary" label="Statements"></jh-button>
      <jh-button appearance="secondary" label="Settings"></jh-button>
      <jh-button appearance="secondary" label="Notifications"></jh-button>
      <jh-button appearance="secondary" label="Security"></jh-button>
    </jh-layout-flex>
  `,
};

/**
 * Larger form — a `jh-card` frames the form with a title and a divided footer,
 * while `jh-layout-flex` stacks the inputs, places the two checkbox-groups side
 * by side, and aligns the footer actions. Shows the primitives scaling up inside
 * a full component.
 */
export const Form = {
  render: () => html`
    <jh-card header-title="Create account" show-footer-divider class="form-card">
      <jh-layout-flex orientation="vertical" gap="300">
        <jh-layout-flex orientation="vertical" gap="200">
          <jh-input label="First name" helper-text="Legal first name"></jh-input>
          <jh-input label="Last name" helper-text="Legal last name"></jh-input>
          <jh-input label="Email" helper-text="We'll send a confirmation here"></jh-input>
        </jh-layout-flex>

        <jh-layout-flex orientation="horizontal" gap="400" justify="around">
          <jh-checkbox-group label="Account types" helper-text="Select all that apply">
            <jh-checkbox label="Checking" name="acct-checking"></jh-checkbox>
            <jh-checkbox label="Savings" name="acct-savings"></jh-checkbox>
            <jh-checkbox label="Money market" name="acct-money-market"></jh-checkbox>
          </jh-checkbox-group>
          <jh-checkbox-group label="Notifications" helper-text="How should we reach you">
            <jh-checkbox label="Email" name="notify-email" checked></jh-checkbox>
            <jh-checkbox label="SMS" name="notify-sms"></jh-checkbox>
            <jh-checkbox label="Push" name="notify-push"></jh-checkbox>
          </jh-checkbox-group>
        </jh-layout-flex>
      </jh-layout-flex>

      <jh-layout-flex slot="jh-card-footer" orientation="horizontal" gap="100" align="center">
        <jh-layout-spacer></jh-layout-spacer>
        <jh-button appearance="secondary" label="Cancel"></jh-button>
        <jh-button appearance="primary" label="Create account"></jh-button>
      </jh-layout-flex>
    </jh-card>
  `,
};

