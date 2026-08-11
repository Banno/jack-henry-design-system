// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

export function applyDeprecationsPlugin(deprecations = {}) {
  return {
    name: 'apply-deprecations',
    packageLinkPhase({ customElementsManifest }) {
      customElementsManifest.modules?.forEach(module => {
        module.declarations?.forEach(declaration => {
          if (declaration.kind !== 'class') return;
          const config = deprecations[declaration.name];
          if (!config) return;

          if (config.slots) {
            declaration.slots?.forEach(slot => {
              if (config.slots[slot.name]) slot.deprecatedMessage = config.slots[slot.name];
            });
          }
          if (config.cssProperties) {
            declaration.cssProperties?.forEach(prop => {
              if (config.cssProperties[prop.name]) prop.deprecatedMessage = config.cssProperties[prop.name];
            });
          }
          if (config.events) {
            declaration.events?.forEach(event => {
              const ec = config.events[event.name];
              if (ec?.prependToDescription) {
                event.description = `${ec.prependToDescription}${event.description ?? ''}`;
              }
            });
          }
        });
      });
    }
  };
}