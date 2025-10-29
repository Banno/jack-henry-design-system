import fs from 'fs';
import path from 'path';

const MANIFEST_PATH = path.resolve(process.cwd(), 'custom-elements.json');

function getTsType(type) {
  if (!type || !type.text) return 'any';
  let tsType = type.text.replace(/\?|\s\|\snull/g, '') || 'any';
  if (type.text.includes('?')) {
    tsType = `(${tsType} | null)`;
  }
  return tsType;
}

function generateProperties(members) {
  return members
    .filter((m) => (m.kind === 'field' || m.kind === 'method') && m.privacy !== 'private')
    .map((m) => {
      const propName = m.name;
      const propType = getTsType(m.type);
      const description = m.description
        ? `* ${m.description.trim().replace(/\n/g, '\n   * ')}`
        : '';
      const attribute = m.attribute ? `* @attr ${m.attribute}` : '';

      return `
    /**
     * ${description}
     * @type {${propType}}
     * ${attribute}
     */
    ${propName}: ${propType};`;
    })
    .join('\n');
}

function generateEvents(events) {
  if (!events || events.length === 0) return '';
  return events
    .map((e) => {
      const detailType =
        e.type && e.type.text ? ` { detail: ${e.type.text} }` : '';
      return `
/** * @event ${e.name} - ${
        e.description || 'Dispatched by the component.'
      }${detailType}
 */`;
    })
    .join('');
}

function generateComponentDts(declaration) {
  const className = declaration.name;
  const tagName = declaration.tagName;

  const properties = generateProperties(declaration.members || []);
  const events = generateEvents(declaration.events || []);

  return `
import { LitElement } from 'lit';

// Global augmentation for the HTML tag:
declare global {
  interface HTMLElementTagNameMap {
    '${tagName}': ${className};
  }
}
${events}
export declare interface ${className} extends LitElement {
${properties}
}
  `;
}

try {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));

  manifest.modules.forEach((module) => {
    module.declarations.forEach((declaration) => {
      if (
        declaration.kind === 'class' &&
        declaration.customElement &&
        declaration.tagName
      ) {
        // 1. DETERMINE OUTPUT PATH:
        const sourceDir = path.dirname(module.path); // 'components/checkbox'
        const sourceFileName = path.basename(module.path, '.js'); // 'checkbox'
        const fileName = `${sourceFileName}.d.ts`; // e.g., checkbox.d.ts

        // Final DTS path: components/checkbox/checkbox.d.ts
        const filePath = path.join(process.cwd(), sourceDir, fileName);

        // 2. GENERATE AND WRITE FILE:
        const content = generateComponentDts(declaration);

        fs.writeFileSync(filePath, content.trim() + '\n');
      }
    });
  });
  console.log('Type generation complete!');
} catch (error) {
  console.error('Error generating types:', error);
}
