// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Post-processes custom-elements.json to add deprecatedMessage fields
 * for slots, cssProperties, and events that can't use @deprecated in JSDoc.
 *
 * Run after CEM generation: node scripts/process-deprecated.js
 */

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const jsonPath = resolve(__dirname, '../custom-elements.json');
const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

/**
 * Registry of deprecated slots, cssProperties, and event description updates.
 * Keyed by component tag name.
 */
const deprecations = {
  'jh-button': {
    slots: {
      'jh-button-icon': 'Use `jh-button-icon-left` or `jh-button-icon-right` instead.',
    },
  },
  'jh-list-item': {
    slots: {
      'jh-list-item-content': 'Use default slot with `jh-list-item-left` and `jh-list-item-right` slots.',
      'jh-list-item-metadata': 'Use `primary-metadata` and `secondary-metadata` properties instead.',
    },
    cssProperties: {
      '--jh-list-item-color-text': 'Use `--jh-list-item-color-text-primary-enabled` instead.',
      '--jh-list-item-color-text-primary': 'Use `--jh-list-item-color-text-primary-enabled` instead.',
      '--jh-list-item-color-text-secondary': 'Use `--jh-list-item-color-text-secondary-enabled` instead.',
      '--jh-list-item-metadata-color-text-primary': 'Use `--jh-list-item-metadata-color-text-primary-enabled` instead.',
      '--jh-list-item-metadata-color-text-secondary': 'Use `--jh-list-item-metadata-color-text-secondary-enabled` instead.',
    },
  },
  'jh-input': {
    slots: {
      'jh-input-password-visible': 'Use with `jh-input-password` instead of `jh-input`.',
      'jh-input-password-hidden': 'Use with `jh-input-password` instead of `jh-input`.',
    },
    cssProperties: {
      '--jh-input-left-icon-color-fill': 'Use `--jh-icon-color-fill` instead.',
      '--jh-input-right-icon-color-fill': 'Use `--jh-icon-color-fill` instead.',
      '--jh-input-shadow-focus': 'Use `--jh-input-field-color-border-focus` instead.',
      '--jh-input-size-min-height-text-area-small': 'Use `--jh-input-textarea-field-dimension-min-height` instead.',
      '--jh-input-size-min-height-text-area-medium': 'Use `--jh-input-textarea-field-dimension-min-height` instead.',
      '--jh-input-size-min-height-text-area-large': 'Use `--jh-input-textarea-field-dimension-min-height` instead.',
      '--jh-input-clear-shadow-focus': 'Use `--jh-input-clear-color-focus` instead.',
      '--jh-input-clear-color-background-disabled': 'No replacement token.',
      '--jh-input-clear-color-border-disabled': 'No replacement token.',
      '--jh-input-clear-icon-color-fill-disabled': 'No replacement token.',
      '--jh-input-clear-opacity-disabled': 'No replacement token.',
      '--jh-input-placeholder-color-text': 'Deprecated along with the `placeholder` property.',
      '--jh-input-color-background': 'Use `--jh-input-field-color-background` instead.',
      '--jh-input-color-border-enabled': 'Use `--jh-input-field-color-border-enabled` instead.',
      '--jh-input-border-radius': 'Use `--jh-input-field-border-radius` instead.',
      '--jh-input-color-border-focus': 'Use `--jh-input-field-color-border-focus` instead.',
      '--jh-input-color-border-hover': 'Use `--jh-input-field-color-border-hover` instead.',
      '--jh-input-color-border-active': 'Use `--jh-input-field-color-border-active` instead.',
      '--jh-input-color-border-disabled': 'Use `--jh-input-field-color-border-disabled` instead.',
      '--jh-input-opacity-disabled': 'Use `--jh-input-field-opacity-disabled` instead.',
      '--jh-input-color-border-error': 'Use `--jh-input-field-color-border-error` instead.',
      '--jh-input-color-text': 'Use `--jh-input-field-color-text` instead.',
    },
    events: {
      'jh-clear': { appendToDescription: '**V2 payload change:** `e.detail.previousValue` moves to `e.detail.state.previousValue`.' },
      'jh-select': { appendToDescription: '**V2 payload change:** `e.detail.selected` moves to `e.detail.state.selected`.' },
      'jh-change': { appendToDescription: '**V2 payload change:** `e.detail.value` moves to `e.detail.state.value`.' },
    },
  },
};

// Apply deprecations
json.tags.forEach(tag => {
  const config = deprecations[tag.name];
  if (!config) return;

  // Slots
  if (config.slots) {
    (tag.slots || []).forEach(slot => {
      if (config.slots[slot.name]) {
        slot.deprecatedMessage = config.slots[slot.name];
      }
    });
  }

  // CSS Custom Properties
  if (config.cssProperties) {
    (tag.cssProperties || []).forEach(prop => {
      if (config.cssProperties[prop.name]) {
        prop.deprecatedMessage = config.cssProperties[prop.name];
      }
    });
  }

  // Events (append to description)
  if (config.events) {
    (tag.events || []).forEach(event => {
      const eventConfig = config.events[event.name];
      if (eventConfig?.appendToDescription) {
        // Only append if not already present
        if (!event.description.includes('V2 payload change')) {
          event.description = `${event.description} ${eventConfig.appendToDescription}`;
        }
      }
    });
  }
});

fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2) + '\n');

// Summary
let count = 0;
json.tags.forEach(tag => {
  ['slots', 'cssProperties', 'events'].forEach(key => {
    (tag[key] || []).forEach(item => {
      if (item.deprecatedMessage) count++;
    });
  });
});
console.log(`Processed deprecated entries: ${count} slots/cssProperties marked, event descriptions updated.`);
