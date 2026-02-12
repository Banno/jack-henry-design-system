// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

// #internals related properties that should be explicitly public to be included
const INTERNALS_PROPS = ['role', 'form', 'validity'];

export function filterPrivatePropertiesPlugin() {
  console.log('Plugin is running!');
  return {
    name: 'filter-private-properties',
  packageLinkPhase({ customElementsManifest }) {
    
    customElementsManifest.modules?.forEach(module => {
      module.declarations?.forEach(declaration => {
        if (declaration.members) {
          declaration.members = declaration.members.filter(member => {
            // Standard privacy check
            if (member.privacy === 'private' || member.privacy === 'protected') return false;
            
            // Filter native private names
            if (member.name?.startsWith('#')) return false;

            // Filter static members (like formAssociated getter)
            if (member.static) return false;

            // Specific fix for leaked ElementInternals properties
            // If something like 'role' is appearing as a field but we aren't explicitly 
            // exposing it as a public property, we remove it.
            if (INTERNALS_PROPS.includes(member.name) && member.privacy !== 'public') {
               return false; 
            }

            return true;
          });
        }
      });
    });
  }
};
}