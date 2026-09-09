// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

export function filterEventsPlugin(prefix = 'jh-') {
  return {
    name: 'filter-jh-events',
    packageLinkPhase({ customElementsManifest }) {
      customElementsManifest.modules?.forEach(module => {
        module.declarations?.forEach(declaration => {
          if (declaration.events) {
            // Only keep events that start with the specified prefix
            declaration.events = declaration.events.filter(event => 
              event.name.startsWith(prefix)
            );
          }
        });
      });
    }
  };
}