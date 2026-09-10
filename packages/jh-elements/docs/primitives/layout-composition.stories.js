/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

import { html, css } from 'lit';
import '../../components/layout-flex/layout-flex.js';
import '../../components/layout-spacer/layout-spacer.js';
import '../../components/button/button.js';
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
`;

export default {
  title: 'Primitives/Layout Composition',
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
      <strong>Account settings</strong>
      <jh-layout-spacer></jh-layout-spacer>
      <jh-button appearance="tertiary" label="Cancel"></jh-button>
      <jh-button appearance="primary" label="Save"></jh-button>
    </jh-layout-flex>
  `,
};


/**
 * Nested stacks — a vertical flex whose rows are horizontal flex containers.
 * Demonstrates that the primitives compose because each is just a flex container.
 */
export const CardLayout = {
  render: () => html`
    <jh-layout-flex orientation="vertical" class="demo-surface" padding="300" gap="200">
      <jh-layout-flex orientation="horizontal" gap="100" align="center">
        <strong>Payment method</strong>
        <jh-layout-spacer></jh-layout-spacer>
        <jh-button appearance="tertiary" size="small" label="Edit"></jh-button>
      </jh-layout-flex>

      <span class="demo-block">Visa ending in 4242 — expires 08/28</span>

      <jh-layout-flex orientation="horizontal" gap="100" justify="end">
        <jh-button appearance="tertiary" label="Remove"></jh-button>
        <jh-button appearance="primary" label="Set as default"></jh-button>
      </jh-layout-flex>
    </jh-layout-flex>
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
        <span style="min-width: 6rem;">First name</span>
        <jh-layout-spacer></jh-layout-spacer>
        <span class="demo-block">Ada</span>
      </jh-layout-flex>
      <jh-layout-flex orientation="horizontal" gap="200" align="baseline">
        <span style="min-width: 6rem;">Last name</span>
        <jh-layout-spacer></jh-layout-spacer>
        <span class="demo-block">Lovelace</span>
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
 * Larger form — a vertical flex of stacked inputs followed by a horizontal flex
 * that places two distinct checkbox-groups side by side, ending in a
 * spacer-aligned action row. Shows the primitives scaling up to a full form layout.
 */
export const Form = {
  render: () => html`
    <jh-layout-flex orientation="vertical" class="demo-surface" padding="300" gap="300">
      <strong>Create account</strong>

      <jh-layout-flex orientation="vertical" gap="200">
        <jh-input label="First name" helper-text="Legal first name"></jh-input>
        <jh-input label="Last name" helper-text="Legal last name"></jh-input>
        <jh-input label="Email" helper-text="We'll send a confirmation here"></jh-input>
      </jh-layout-flex>

      <jh-layout-flex orientation="horizontal" gap="400" padding="200" justify="around">
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

      <jh-layout-flex orientation="horizontal" gap="100" align="center">
        <jh-layout-spacer></jh-layout-spacer>
        <jh-button appearance="tertiary" label="Cancel"></jh-button>
        <jh-button appearance="primary" label="Create account"></jh-button>
      </jh-layout-flex>
    </jh-layout-flex>
  `,
};

