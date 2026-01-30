import { customElementJetBrainsPlugin } from "custom-element-jet-brains-integration";

export default {
  /** Globs to analyze */
  globs: ['./components/**/**.js'],
  /** Globs to exclude */
  exclude: ['./components/**/**.stories.js'],
  /** Run in dev mode, provides extra logging */
  dev: false,
  /** Run in watch mode, runs on file changes */
  watch: false,
  /** Output CEM path to `package.json`, defaults to true */
  packagejson: false,
  /** Enable special handling for litelement */
  litelement: true,
  plugins: [
    customElementJetBrainsPlugin({
      // hide parts of JSDocs that are bleeding into description.
      hideCssPropertiesDocs: true,
      hideEventDocs: true,
      hideSlotDocs: true,
    }),
    {
  name: 'filter-private-members',
  packageLinkPhase({ customElementsManifest }) {
    customElementsManifest.modules?.forEach(module => {
      module.declarations?.forEach(declaration => {
        if (declaration.members) {
          declaration.members = declaration.members.filter(member => {
            // 1. Standard privacy check
            if (member.privacy === 'private' || member.privacy === 'protected') return false;
            
            // 2. Filter native private names
            if (member.name?.startsWith('#')) return false;

            // 3. Specific fix for leaked ElementInternals properties
            // If 'role' is appearing as a field but we aren't explicitly 
            // exposing it as a public property, we remove it.
            if (member.name === 'role' && member.privacy !== 'public') {
               return false; 
            }

            return true;
          });
        }
      });
    });
  }
}
  ]
}