// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Post-processes custom-elements.json to add deprecatedMessage fields
 * for slots, cssProperties, and events that can't use @deprecated in JSDoc.
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
 * 
 * Each entry should have the structure:
 * {
 *   slots: { [slotName]: deprecatedMessage },
 *   cssProperties: { [cssPropertyName]: deprecatedMessage },
 *   events: { [eventName]: { prependToDescription: deprecatedMessage } }
 * }
 */
const deprecations = {};

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
      if (eventConfig?.prependToDescription) {
          event.description = `${eventConfig.prependToDescription}${event.description}`;
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
