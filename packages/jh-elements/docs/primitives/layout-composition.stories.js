/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import '../../components/layout-v-stack/layout-v-stack.js';
import '../../components/layout-h-stack/layout-h-stack.js';
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
 * Toolbar / split header — a title on the left with the actions grouped on the
 * right. `justify="between"` pushes the two groups to opposite ends of the row.
 */
export const Toolbar = {
  render: () => html`
    <jh-layout-h-stack class="demo-surface" padding="200" gap="100" align="center" justify="between">
      <strong class="text-heading">Account settings</strong>
      <jh-layout-h-stack gap="100" align="center">
        <jh-button appearance="secondary" label="Cancel"></jh-button>
        <jh-button appearance="primary" label="Save"></jh-button>
      </jh-layout-h-stack>
    </jh-layout-h-stack>
  `,
};


/**
 * Split groups — two button groups pushed to opposite ends of the row with
 * `justify="between"`, each nested group keeping its own `gap`. Shows the groups
 * separated rather than bunched at one edge.
 */
export const SplitGroups = {
  render: () => html`
    <jh-layout-h-stack class="demo-surface" padding="200" gap="100" align="center" justify="between">
      <jh-layout-h-stack gap="100">
        <jh-button appearance="secondary" label="Previous"></jh-button>
        <jh-button appearance="secondary" label="Next"></jh-button>
      </jh-layout-h-stack>
      <jh-layout-h-stack gap="100">
        <jh-button appearance="secondary" label="Cancel"></jh-button>
        <jh-button appearance="primary" label="Save"></jh-button>
      </jh-layout-h-stack>
    </jh-layout-h-stack>
  `,
};


/**
 * Card composition — a `jh-card` provides the surface, header, and footer, while
 * `jh-layout-h-stack` arranges the custom header row and footer actions. Shows the
 * primitives slotting cleanly into a higher-level component.
 */
export const CardLayout = {
  render: () => html`
    <jh-card show-footer-divider>
      <jh-layout-h-stack slot="jh-card-header" gap="100" align="center" justify="between">
        <strong>Payment method</strong>
        <jh-button appearance="secondary" size="small" label="Edit"></jh-button>
      </jh-layout-h-stack>

      <span class="demo-block">Visa ending in 4242 — expires 08/28</span>

      <jh-layout-h-stack slot="jh-card-footer" gap="100" justify="end">
        <jh-button appearance="danger" label="Remove"></jh-button>
        <jh-button appearance="primary" label="Set as default"></jh-button>
      </jh-layout-h-stack>
    </jh-card>
  `,
};


/**
 * Form row — a vertical stack of labeled horizontal rows, using `align="baseline"`
 * to keep labels and controls on a shared baseline and `justify="between"` to push
 * each value to the opposite end of its label.
 */
export const FormRow = {
  render: () => html`
    <jh-layout-v-stack class="demo-surface" padding="300" gap="200">
      <jh-layout-h-stack gap="200" align="baseline" justify="between">
        <span class="text-label" style="min-width: 6rem;">First name</span>
        <span class="demo-block text-body">Ada</span>
      </jh-layout-h-stack>
      <jh-layout-h-stack gap="200" align="baseline" justify="between">
        <span class="text-label" style="min-width: 6rem;">Last name</span>
        <span class="demo-block text-body">Lovelace</span>
      </jh-layout-h-stack>
    </jh-layout-v-stack>
  `,
};


/**
 * Wrapping — a horizontal stack with `wrap` so children reflow onto new lines when
 * the container runs out of room. Resize the canvas to see the reflow.
 */
export const Wrapping = {
  render: () => html`
    <jh-layout-h-stack class="demo-surface" padding="200" gap="100" wrap>
      <jh-button appearance="secondary" label="Overview"></jh-button>
      <jh-button appearance="secondary" label="Transactions"></jh-button>
      <jh-button appearance="secondary" label="Statements"></jh-button>
      <jh-button appearance="secondary" label="Settings"></jh-button>
      <jh-button appearance="secondary" label="Notifications"></jh-button>
      <jh-button appearance="secondary" label="Security"></jh-button>
    </jh-layout-h-stack>
  `,
};

/**
 * Larger form — a `jh-card` frames the form with a title and a divided footer,
 * while a `jh-layout-v-stack` stacks the inputs, a `jh-layout-h-stack` places the
 * two checkbox-groups side by side, and the footer actions are pushed to the end.
 * Shows the primitives scaling up inside a full component.
 */
export const Form = {
  render: () => html`
    <jh-card header-title="Create account" show-footer-divider class="form-card">
      <jh-layout-v-stack gap="300">
        <jh-layout-v-stack gap="200">
          <jh-input label="First name" helper-text="Legal first name"></jh-input>
          <jh-input label="Last name" helper-text="Legal last name"></jh-input>
          <jh-input label="Email" helper-text="We'll send a confirmation here"></jh-input>
        </jh-layout-v-stack>

        <jh-layout-h-stack gap="400" justify="around">
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
        </jh-layout-h-stack>
      </jh-layout-v-stack>

      <jh-layout-h-stack slot="jh-card-footer" gap="100" align="center" justify="end">
        <jh-button appearance="secondary" label="Cancel"></jh-button>
        <jh-button appearance="primary" label="Create account"></jh-button>
      </jh-layout-h-stack>
    </jh-card>
  `,
};

